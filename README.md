# 终身岛民 · Obsidian 成长工作台

当前版本 **1.1.5**。本版修复实际Obsidian文件适配器拒绝覆盖重命名导致的连续保存失败，加入待提交档案恢复、移动端宿主手势隔离和线路避障/方向修正。设置中可查看实际版本、保存状态及重试保存。

产品契约见 [PRD](PRD_Youth_Holistic_Growth_System.md)，交互设计见 [高保真设计预览](high_fidelity_ui_preview.html)，修复与验收范围见 [1.1.0 交付记录](PLUGIN_REVIEW_1.1.0.md)。原始问题证据保留在 [审查报告](audit/PRD_DESIGN_PLUGIN_CLOSED_LOOP_AUDIT.md)。

1.1.1补丁统一规划/脑图缩放与手势，修复线路不可点击、缺失默认样式、设置面板缩放裁切及反转依赖不同步。路线按节点边界绕行，样式和方向可以保存、撤销和恢复；说明见[画布修复记录](PLUGIN_REVIEW_1.1.1.md)。新增`npm.cmd run test:canvas`和`npm.cmd run test:canvas:design`，通过原生鼠标/滚轮/触控事件验证。

1.1.2将缩放范围统一为12%～300%，按帧合并归一化滚轮事件；规划及每个项目分别保存位置与比例。线路标签在低缩放时保持可读；从🔗手柄拖向目标节点会显示虚线和目标描边，松手创建关联，Esc或拖到空白取消。两次点击手柄仍可使用。参考实现对照、数据落点和验证范围见[1.1.2交付记录](PLUGIN_REVIEW_1.1.2.md)。

1.1.3移除脑图工具栏“原生Canvas”、甘特项目行的Canvas打开/导入按钮及对应插件命令与接口。后台同步只导出节点JSON和项目Markdown，已有`.canvas`文件保留。说明见[1.1.3交付记录](PLUGIN_REVIEW_1.1.3.md)。

1.1.4将导航地图调整为220×130的真实节点缩略图，与地图按钮并排显示。点击或轻触定位，拖动红色视口框漫游；拖动期间投影固定，松手不重复居中。支持外层缩放、触屏和SVG留白换算，展开状态按规划页和项目独立保存。说明见[导航实现对照](PLUGIN_REVIEW_1.1.4.md)。

1.1.5按Obsidian实际宿主约束修复：写入使用校验后的待提交档案、有效备份和覆盖写，不再依赖覆盖重命名；可恢复旧版失败保存留下的较新pending。根节点使用宿主的`data-ignore-swipe`边界，保留内部滚动与显式侧栏按钮。线路扩展真实SVG命中范围，选择可通行的卡片边界端口；完全重叠时提示受阻，方向选择保持幂等，包含层级与任务前置分开。说明见[Android问题复查](PLUGIN_REVIEW_1.1.5.md)。

执行中心的日/周/月从同一调度结果读取任务。规划场馆使用项目甘特与结构化脑图；实训、习惯、复盘、目标及自定义表单按各自标准校验。验收记录连接源节点、真实附件、项目进度、随记和成果。悬赏需要家长寄语及核验，生活高光保存照片原件，亲子公约保存真实姓名、条款与签署版本。

藏金屋只记录独立收支。经典指引来自本地参考语料。组件画板是设计样例；没有采集的能力评分、运动热量和智能识别结果不作为用户事实展示。

## 开发与验证

```powershell
npm.cmd install
npm.cmd run build
npm.cmd run typecheck
npm.cmd test
npm.cmd run test:browser
npm.cmd run test:design
npm.cmd run test:canvas
npm.cmd run test:canvas:design
npm.cmd run test:navigation
npm.cmd run test:navigation:design
npm.cmd run test:mobile
npm.cmd run package-android
```

浏览器测试默认使用 Windows Chrome，可通过 `CHROME_PATH` 指定浏览器可执行文件。它运行实际提取后的插件代码和内存 Vault 适配器；独立设计测试打开实际HTML并使用独立IndexedDB。浏览器验证不能替代 Obsidian 与 Android 真机验收。

## 维护入口

| 文件 | 用途 |
| --- | --- |
| `src/core/domain.mjs` | 无DOM依赖的节点、实例、依赖、进度与验收规则 |
| `src/core/canvas.mjs` / `src/runtime/canvasInteractions.js` | 共用缩放/手势、避障线路、线路设置事务及节点排布 |
| `src/runtime/canvasNavigation.js` | 缓存地图投影、视口导航、按帧更新、折叠状态及触控 |
| `src/runtime/closedLoopRuntime.js` | 领域状态、规划编辑、同源任务与统计投影 |
| `src/runtime/closedLoopWorkflows.js` | 执行草稿、原件、成果与复盘派生 |
| `src/runtime/closedLoopModules.js` | 悬赏、公约、随记、真实导出、Canvas边界与设计适配器 |
| `src/types/domain.ts` | schemaVersion 3数据契约；旧models接口仅用于兼容 |
| `src/storage/VaultStorageAdapter.ts` | 串行完整提交、备份、领域投影、附件与Markdown |
| `src/ui/closedLoop.css` | 共享表单、规划和弹窗样式 |
| `high_fidelity_ui_preview.html` | 原始视觉与共享规则生成块，浏览器可直接打开 |
| `scripts/sync_product_design.mjs` | 将共享规则与样式写入设计HTML |
| `scripts/extract_from_prototype.mjs` | 提取模板、隔离CSS并封装运行时 |

修改共享规则后运行build。`prototypeScript.ts`、`template.ts`、`styles.css`和`main.js`是生成文件，不应单独修改它们来实现业务规则。

## 安装

解压 `release/youth-holistic-growth-island-1.1.5.zip`，将其中整个 `youth-holistic-growth-island` 文件夹复制到知识库的 `.obsidian/plugins/`。安装文件包括 `manifest.json`、`versions.json`、`main.js`、`styles.css`和ASCII命名的场景/头像资源。已有仓库升级前保留一份备份，然后重启或重载插件。

BRAT用户需选择正式Release版本1.1.5或Latest，执行更新后**完全关闭并重新打开Obsidian**。旧版本在保存失败时可能未清理旧运行时，仅切换页面不能保证加载新代码；到插件设置确认当前版本v1.1.5和保存状态。发布需推送与manifest一致的数字标签，单独推送master不会产生BRAT更新；工作流发布前执行构建、类型检查和纯规则测试。

通过侧栏指南针或命令打开。设置中可指定数据子目录、默认执行/规划视图以及是否随Obsidian启动。

## 数据与互操作

`00_Island_Core/domain_state.json`是schemaVersion 3完整提交，包含节点、记录、边及其他模块状态；`.previous.json`保留上一版。项目与节点JSON按storageRevision导出，同版本外部修改可导入；过期导出不会覆盖较新的完整提交。损坏的主档案会暂停自动写入。会话快照与页面HTML不作为事实来源。

脑图节点、线路和视口保存在插件的领域JSON中，项目Markdown直接由结构化节点及执行记录生成。独立HTML预览使用自己的浏览器数据，和Obsidian仓库互不混用。

1.0.15的PRD与测试留在`docs/history/`供追溯，不能当作当前验收契约。当前没有自动语义冲突合并、传感器采集或AI识别能力。
