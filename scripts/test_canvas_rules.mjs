import assert from 'node:assert/strict';
import {canvasZoomAt,canvasFit,canvasRouteEdge,canvasSegmentClear,canvasEdgeStyle,canvasFreePosition,canvasWheelUnits,canvasWheelFactor,canvasValidViewport,canvasConnectionPreview,canvasWorldViewport,canvasMinimapProjection,canvasMinimapPoint,canvasMinimapWorldPoint,canvasMinimapDrag,canvasLabelPositions} from '../src/core/canvas.mjs';
const before={x:160,y:-80,zoom:0.8},pivot={x:500,y:360};
const zoomed=canvasZoomAt(before,1.18,pivot);
assert.ok(Math.abs((pivot.x-before.x)/before.zoom-(pivot.x-zoomed.x)/zoomed.zoom)<1e-9);
assert.ok(Math.abs((pivot.y-before.y)/before.zoom-(pivot.y-zoomed.y)/zoomed.zoom)<1e-9);
const reset=canvasZoomAt(zoomed,1/1.18,pivot);assert.ok(Math.abs(reset.x-before.x)<1e-9);assert.ok(Math.abs(reset.y-before.y)<1e-9);
assert.equal(canvasZoomAt(before,100,pivot).zoom,3);assert.equal(canvasZoomAt(before,0.001,pivot).zoom,0.12);
assert.equal(canvasWheelUnits(20),.2);assert.equal(canvasWheelUnits(2,1),.32);assert.equal(canvasWheelUnits(1,2,600),1);assert.equal(canvasWheelUnits(-120),-1);assert.equal(canvasWheelUnits(NaN),0);
assert.ok(Math.abs(canvasWheelFactor(-1)-1.12)<1e-12);assert.equal(canvasWheelFactor(9),canvasWheelFactor(2));assert.equal(canvasWheelFactor(-9),canvasWheelFactor(-2));
assert.ok(canvasValidViewport({x:-100,y:0,zoom:.12}));assert.ok(!canvasValidViewport({x:NaN,y:0,zoom:1}));assert.ok(!canvasValidViewport({x:0,y:0,zoom:5}));
assert.equal(canvasConnectionPreview({x:0,y:0,width:340,height:240},{x:800,y:120}),'M 340 120 L 800 120 L 800 120');
assert.deepEqual(canvasZoomAt(before,NaN,pivot),before);
const rects=[{x:-300,y:50,width:340,height:240},{x:800,y:600,width:340,height:240}];
for(const camera of [before,{x:9000,y:-7000,zoom:.12},{x:-800,y:600,zoom:3}]){
  const projection=canvasMinimapProjection(rects,camera,1200,900),viewport=canvasWorldViewport(camera,1200,900);
  for(const box of [viewport,...rects]){const a=canvasMinimapPoint(projection,box),b=canvasMinimapPoint(projection,{x:box.x+box.width,y:box.y+box.height});assert.ok(a.x>=5&&a.y>=5&&b.x<=215&&b.y<=125,'map includes nodes and viewport, including negative/far coordinates');}
  const point={x:-734,y:2288},roundtrip=canvasMinimapWorldPoint(projection,canvasMinimapPoint(projection,point));assert.ok(Math.abs(point.x-roundtrip.x)<1e-8&&Math.abs(point.y-roundtrip.y)<1e-8);
  const moved=canvasMinimapDrag(camera,12,-8,projection);assert.equal(moved.zoom,camera.zoom);assert.equal(moved.x,camera.x-12/projection.scale*camera.zoom);assert.equal(moved.y,camera.y+8/projection.scale*camera.zoom);
}
assert.ok(Number.isFinite(canvasMinimapProjection([],before,1200,900).scale),'empty map has a finite projection');
const labels=canvasLabelPositions(Array.from({length:5},(_,i)=>({id:i,x:400,y:300,width:80,height:24})),1000,800);for(let i=0;i<labels.length;i++)for(let j=0;j<i;j++)assert.ok(Math.abs(labels[i].x-labels[j].x)>=80||Math.abs(labels[i].y-labels[j].y)>=24,'parallel-route labels remain independently clickable');
const fit=canvasFit(rects,1200,900);for(const r of rects){assert.ok(r.x*fit.zoom+fit.x>=59);assert.ok(r.y*fit.zoom+fit.y>=59);assert.ok((r.x+r.width)*fit.zoom+fit.x<=1141);assert.ok((r.y+r.height)*fit.zoom+fit.y<=841);}
const a={x:0,y:0,width:340,height:240},b={x:800,y:0,width:340,height:240},obstacle={x:430,y:-50,width:180,height:340};
for(const [source,target,others]of [[a,b,[]],[b,a,[]],[a,{...b,x:0,y:600},[]],[{...a,y:600},a,[]],[a,b,[obstacle]],[{...a,x:-500},a,[]]]){
  const boxes=[source,target,...others],route=canvasRouteEdge(source,target,boxes);
  assert.ok(route.points.length>=2);assert.ok(!/NaN|undefined/.test(route.d));
  for(let i=1;i<route.points.length;i++){const p=route.points[i-1],q=route.points[i];assert.ok(p.x===q.x||p.y===q.y,'orthogonal segment');assert.ok(canvasSegmentClear(p,q,boxes),'route must not pass through card interiors');}
}
assert.notEqual(canvasRouteEdge(a,b,[a,b],0,3).d,canvasRouteEdge(a,b,[a,b],2,3).d);
const denseCases=[
  [a,{...b,x:350,y:110},[{x:352,y:-180,width:230,height:260}]],
  [a,{...b,x:160,y:250},[{x:350,y:180,width:350,height:440}]],
  [a,{...b,x:15,y:-300},[{x:350,y:-400,width:200,height:740}]],
  [{...a,x:-700,y:-400},{...b,x:-250,y:150},[{x:-320,y:-450,width:180,height:400}]]
];
for(const [source,target,others]of denseCases){const boxes=[source,target,...others],route=canvasRouteEdge(source,target,boxes);assert.ok(!route.blocked,'exposed alternate ports remain routable');for(let i=1;i<route.points.length;i++)assert.ok(canvasSegmentClear(route.points[i-1],route.points[i],boxes),'no unsafe direct-path fallback');}
const enclosed={x:100,y:100,width:100,height:100},outer={x:0,y:0,width:500,height:500},blocked=canvasRouteEdge(enclosed,outer,[enclosed,outer]);assert.ok(blocked.blocked&&blocked.d===''&&blocked.points.length===0,'overlapping endpoints report obstruction instead of a false line');
assert.equal(canvasEdgeStyle({}).color,'#6fa99b');assert.equal(canvasEdgeStyle({}).arrowMode,'single');
assert.equal(canvasEdgeStyle({color:'undefined',lineWidth:99}).lineWidth,6);
const occupied=[];for(let i=0;i<12;i++){const position=canvasFreePosition(occupied,340,500+i*10);assert.ok(occupied.every(r=>position.x+340<=r.x||position.x>=r.x+r.width||position.y+500+i*10<=r.y||position.y>=r.y+r.height));occupied.push({...position,width:340,height:500+i*10});}
console.log('PASS: anchored zoom, inverse zoom, limits, actual-bounds fit, obstacle-aware orthogonal routes and migrated edge defaults');
