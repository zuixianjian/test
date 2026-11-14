// Shared viewport math and orthogonal routing for the design and plugin.
export const CANVAS_ZOOM_MIN=0.12;
export const CANVAS_ZOOM_MAX=3;
export function canvasWheelUnits(delta,mode=0,pageHeight=800){
  const pixels=delta*(mode===1?16:mode===2?pageHeight:1);
  return Number.isFinite(pixels)?Math.max(-1,Math.min(1,pixels/100)):0;
}
export function canvasWheelFactor(units){return Math.exp(-Math.max(-2,Math.min(2,units))*Math.log(1.12));}
export function canvasValidViewport(value){return !!value&&[value.x,value.y,value.zoom].every(Number.isFinite)&&value.zoom>=CANVAS_ZOOM_MIN&&value.zoom<=CANVAS_ZOOM_MAX;}
export function canvasWorldViewport(camera,width,height){return {x:-camera.x/camera.zoom,y:-camera.y/camera.zoom,width:width/camera.zoom,height:height/camera.zoom};}
export function canvasMinimapProjection(rects,camera,width,height,mapWidth=220,mapHeight=130){
  const viewport=canvasWorldViewport(camera,width,height),boxes=[viewport,...rects];
  let minX=Math.min(...boxes.map(r=>r.x)),minY=Math.min(...boxes.map(r=>r.y)),maxX=Math.max(...boxes.map(r=>r.x+r.width)),maxY=Math.max(...boxes.map(r=>r.y+r.height));
  const padding=Math.max(80,.06*Math.max(maxX-minX,maxY-minY));minX-=padding;minY-=padding;maxX+=padding;maxY+=padding;
  const spanX=Math.max(1,maxX-minX),spanY=Math.max(1,maxY-minY),scale=Math.min((mapWidth-12)/spanX,(mapHeight-12)/spanY);
  return {minX,minY,maxX,maxY,scale,offsetX:(mapWidth-spanX*scale)/2,offsetY:(mapHeight-spanY*scale)/2,width:mapWidth,height:mapHeight};
}
export function canvasMinimapPoint(projection,point){return {x:projection.offsetX+(point.x-projection.minX)*projection.scale,y:projection.offsetY+(point.y-projection.minY)*projection.scale};}
export function canvasMinimapWorldPoint(projection,point){return {x:projection.minX+(point.x-projection.offsetX)/projection.scale,y:projection.minY+(point.y-projection.offsetY)/projection.scale};}
export function canvasMinimapDrag(camera,dx,dy,projection){return {...camera,x:camera.x-dx/projection.scale*camera.zoom,y:camera.y-dy/projection.scale*camera.zoom};}
export function canvasConnectionPreview(source,cursor){
  const dx=cursor.x-(source.x+source.width/2),dy=cursor.y-(source.y+source.height/2),horizontal=Math.abs(dx)>=Math.abs(dy);
  const start=horizontal?{x:source.x+(dx>=0?source.width:0),y:source.y+source.height/2}:{x:source.x+source.width/2,y:source.y+(dy>=0?source.height:0)};
  return 'M '+start.x+' '+start.y+' L '+(horizontal?cursor.x:start.x)+' '+(horizontal?start.y:cursor.y)+' L '+cursor.x+' '+cursor.y;
}
export function canvasZoomAt(state,factor,pivot){
  if(!Number.isFinite(factor)||factor<=0)return {...state};
  const zoom=Math.max(CANVAS_ZOOM_MIN,Math.min(CANVAS_ZOOM_MAX,state.zoom*factor));
  return {zoom,x:pivot.x-(pivot.x-state.x)*zoom/state.zoom,y:pivot.y-(pivot.y-state.y)*zoom/state.zoom};
}
export function canvasFit(rects,width,height,padding=60){
  if(!rects.length)return {x:0,y:0,zoom:1};
  const left=Math.min(...rects.map(r=>r.x)),top=Math.min(...rects.map(r=>r.y));
  const w=Math.max(...rects.map(r=>r.x+r.width))-left,h=Math.max(...rects.map(r=>r.y+r.height))-top;
  const zoom=Math.max(CANVAS_ZOOM_MIN,Math.min(1.2,(width-padding*2)/Math.max(w,1),(height-padding*2)/Math.max(h,1)));
  return {zoom,x:(width-w*zoom)/2-left*zoom,y:(height-h*zoom)/2-top*zoom};
}
export function canvasEdgeStyle(edge){
  return {...edge,color:/^#[\da-f]{3,8}$/i.test(edge.color||'')?edge.color:'#6fa99b',lineWidth:Math.max(1,Math.min(6,Number(edge.lineWidth)||3)),lineStyle:edge.lineStyle==='dashed'?'dashed':'solid',arrowMode:['none','single','double'].includes(edge.arrowMode)?edge.arrowMode:'single'};
}
export function canvasFreePosition(rects,width=340,height=640){
  const candidates=[80,480,880].map(x=>{let y=90;for(let i=0;i<=rects.length;i++){const collisions=rects.filter(r=>x<r.x+r.width+60&&x+width+60>r.x&&y<r.y+r.height+60&&y+height+60>r.y);if(!collisions.length)break;y=Math.max(...collisions.map(r=>r.y+r.height+60));}return {x,y};});
  return candidates.sort((a,b)=>a.y-b.y||a.x-b.x)[0];
}
export function canvasSegmentClear(a,b,rects){
  return !rects.some(r=>a.x===b.x?a.x>r.x&&a.x<r.x+r.width&&Math.max(a.y,b.y)>r.y&&Math.min(a.y,b.y)<r.y+r.height:a.y>r.y&&a.y<r.y+r.height&&Math.max(a.x,b.x)>r.x&&Math.min(a.x,b.x)<r.x+r.width);
}
export function canvasSimplify(points){
  const out=[];
  for(const p of points){if(out.length&&p.x===out.at(-1).x&&p.y===out.at(-1).y)continue;
    while(out.length>1&&((out.at(-2).x===out.at(-1).x&&out.at(-1).x===p.x)||(out.at(-2).y===out.at(-1).y&&out.at(-1).y===p.y)))out.pop();out.push(p);
  }return out;
}
function canvasHeapPush(heap,item){heap.push(item);let i=heap.length-1;while(i){const p=(i-1)>>1;if(heap[p].cost<=item.cost)break;heap[i]=heap[p];i=p;}heap[i]=item;}
function canvasHeapPop(heap){const first=heap[0],last=heap.pop();if(heap.length){let i=0;while(i*2+1<heap.length){let child=i*2+1;if(child+1<heap.length&&heap[child+1].cost<heap[child].cost)child++;if(heap[child].cost>=last.cost)break;heap[i]=heap[child];i=child;}heap[i]=last;}return first;}
export function canvasOrthogonalPath(start,end,obstacles){
  const direct=[start,{x:end.x,y:start.y},end],other=[start,{x:start.x,y:end.y},end];
  for(const candidate of [direct,other])if(candidate.slice(1).every((p,i)=>canvasSegmentClear(candidate[i],p,obstacles)))return canvasSimplify(candidate);
  const xs=[...new Set([start.x,end.x,...obstacles.flatMap(r=>[r.x-1,r.x+r.width+1])])].sort((a,b)=>a-b);
  const ys=[...new Set([start.y,end.y,...obstacles.flatMap(r=>[r.y-1,r.y+r.height+1])])].sort((a,b)=>a-b);
  const heap=[],best=new Map(),parents=new Map(),points=new Map();
  const key=(x,y,axis)=>x+','+y+','+axis,initial=key(xs.indexOf(start.x),ys.indexOf(start.y),0);
  canvasHeapPush(heap,{key:initial,xi:xs.indexOf(start.x),yi:ys.indexOf(start.y),axis:0,distance:0,cost:0});best.set(initial,0);
  let final=null;
  for(let limit=0;heap.length&&limit<20000;limit++){
    const current=canvasHeapPop(heap);if(current.distance!==best.get(current.key))continue;
    const a={x:xs[current.xi],y:ys[current.yi]};points.set(current.key,a);
    if(a.x===end.x&&a.y===end.y){final=current.key;break;}
    for(const [dx,dy,axis] of [[-1,0,1],[1,0,1],[0,-1,2],[0,1,2]]){
      const xi=current.xi+dx,yi=current.yi+dy;if(xi<0||xi>=xs.length||yi<0||yi>=ys.length)continue;
      const b={x:xs[xi],y:ys[yi]};if(!canvasSegmentClear(a,b,obstacles))continue;
      const distance=current.distance+Math.abs(a.x-b.x)+Math.abs(a.y-b.y)+(current.axis&&current.axis!==axis?24:0),id=key(xi,yi,axis);
      if(distance>=(best.get(id)??Infinity))continue;best.set(id,distance);parents.set(id,current.key);
      canvasHeapPush(heap,{key:id,xi,yi,axis,distance,cost:distance+Math.abs(b.x-end.x)+Math.abs(b.y-end.y)});
    }
  }
  if(!final)return direct; // Overlapping nodes can leave no free route; dragging them apart resolves it.
  const result=[];for(let cursor=final;cursor;cursor=parents.get(cursor))result.unshift(points.get(cursor));return canvasSimplify(result);
}
export function canvasRouteEdge(source,target,rects,index=0,total=1){
  const horizontal=source.x+source.width<=target.x||target.x+target.width<=source.x;
  const forward=horizontal?target.x>=source.x:target.y>=source.y;
  const slot=(size)=>(index-(total-1)/2)*Math.min(16,Math.max(0,(size-24)/Math.max(total,1)));
  const a=horizontal?{x:source.x+(forward?source.width:0),y:source.y+source.height/2+slot(source.height)}:{x:source.x+source.width/2+slot(source.width),y:source.y+(forward?source.height:0)};
  const b=horizontal?{x:target.x+(forward?0:target.width),y:target.y+target.height/2+slot(target.height)}:{x:target.x+target.width/2+slot(target.width),y:target.y+(forward?0:target.height)};
  const direction=forward?1:-1,stub=24;
  const start=horizontal?{x:a.x+direction*stub,y:a.y}:{x:a.x,y:a.y+direction*stub};
  const end=horizontal?{x:b.x-direction*stub,y:b.y}:{x:b.x,y:b.y-direction*stub};
  const obstacles=rects.map(r=>({x:r.x-12,y:r.y-12,width:r.width+24,height:r.height+24}));
  const points=canvasSimplify([a,...canvasOrthogonalPath(start,end,obstacles),b]);
  let label={x:(a.x+b.x)/2,y:(a.y+b.y)/2},longest=-1;
  for(let i=1;i<points.length;i++){const p=points[i-1],q=points[i],length=Math.abs(q.x-p.x)+Math.abs(q.y-p.y);if(length>longest){longest=length;label={x:(p.x+q.x)/2,y:(p.y+q.y)/2};}}
  return {points,label,d:points.map((p,i)=>(i?'L ':'M ')+p.x+' '+p.y).join(' ')};
}
