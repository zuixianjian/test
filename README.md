# 终身岛民 · Obsidian 成长工作台

当前版本 **1.2.4**。修复脑图设置上下级后子级不跟随、开关状态显示不一致的问题；重排路线设置弹窗，长节点名换行、内容独立滚动；统一工作台下拉/上拉列表，支持窄屏、多选确认和键盘操作。保留已有节点卡片与默认网格背景。

产品契约见 [PRD](PRD_Youth_Holistic_Growth_System.md)，交互设计见 [高保真设计预览](high_fidelity_ui_preview.html)，修复与验收范围见 [1.1.0 交付记录](PLUGIN_REVIEW_1.1.0.md)。原始问题证据保留在 [审查报告](audit/PRD_DESIGN_PLUGIN_CLOSED_LOOP_AUDIT.md)。

1.1.1补丁统一规划/脑图缩放与手势，修复线路不可点击、缺失默认样式、设置面板缩放裁切及反转依赖不同步。路线按节点边界绕行，样式和方向可以保存、撤销和恢复；说明见[画布修复记录](PLUGIN_REVIEW_1.1.1.md)。新增`npm.cmd run test:canvas`和`npm.cmd run test:canvas:design`，通过原生鼠标/滚轮/触控事件验证。

1.1.2将缩放范围统一为12%～300%，按帧合并归一化滚轮事件；规划及每个项目分别保存位置与比例。线路标签在低缩放时保持可读；从🔗手柄拖向目标节点会显示虚线和目标描边，松手创建关联，Esc或拖到空白取消。两次点击手柄仍可使用。参考实现对照、数据落点和验证范围见[1.1.2交付记录](PLUGIN_REVIEW_1.1.2.md)。

1.1.3移除脑图工具栏“原生Canvas”、甘特项目行的Canvas打开/导入按钮及对应插件命令与接口。后台同步只导出节点JSON和项目Markdown，已有`.canvas`文件保留。说明见[1.1.3交付记录](PLUGIN_REVIEW_1.1.3.md)。

1.1.4将导航地图调整为220×130的真实节点缩略图，与地图按钮并排显示。点击或轻触定位，拖动红色视口框漫游；拖动期间投影固定，松手不重复居中。支持外层缩放、触屏和SVG留白换算，展开状态按规划页和项目独立保存。说明见[导航实现对照](PLUGIN_REVIEW_1.1.4.md)。

1.1.5按Obsidian实际宿主约束修复：写入使用校验后的待提交档案、有效备份和覆盖写，不再依赖覆盖重命名；可恢复旧版失败保存留下的较新pending。根节点使用宿主的`data-ignore-swipe`边界，保留内部滚动与显式侧栏按钮。线路扩展真实SVG命中范围，选择可通行的卡片边界端口；完全重叠时提示受阻，方向选择保持幂等，包含层级与任务前置分开。说明见[Android问题复查](PLUGIN_REVIEW_1.1.5.md)。

1.1.6将通用长表单改为六类规划卡：目标指标、实训时长、习惯清单、复盘行动、自定义字段和文本便签各自突出重点；计划和交付设置默认收起。规划编辑、成果验收、复盘派生、阅读留痕仍使用原有领域事务，未引入虚构执行数据。说明与截图见[节点卡片修复记录](PLUGIN_REVIEW_1.1.6.md)。

1.1.7将新增节点的默认计划日限制在项目周期内，首页执行队列包括未完成的过去实例；待前置卡片可回到原节点查看规划。恢复前台、跨日和返回日视图会刷新队列，真实空态显示下一项未来计划或加入执行任务的说明。记录按计划实例匹配，补做不误完成同节点的今日实例。说明与可见性验证见[首页执行卡片修复记录](PLUGIN_REVIEW_1.1.7.md)。

1.1.8按用户要求将今日队列收敛为严格的今日计划实例，数量统计使用同一日期规则。五类首页卡片从简化通用布局恢复为设计图中的专属分区、徽标和操作栏；逾期任务仍可通过周/月详情进入实际执行。说明与截图见[今日待办设计对齐记录](PLUGIN_REVIEW_1.1.8.md)。

1.1.9新增节点弹窗一次只展示当前类型的录入卡片。各类型可维护真实规划字段；顶部类型栏和底部添加按钮固定，长表单独立滚动。录入草稿、校验、键盘操作、真实新增及任务投影见[新增节点交互记录](PLUGIN_REVIEW_1.1.9.md)。

1.2.0移除规划节点的执行/验收/阅读打卡控件；执行展示打开时的只读规划标准，实际复盘独立保存，回到规划才能派生后续计划。悬赏按发布、揭榜、核准分区；媒体统一支持选择照片/视频、拍照和拍视频，并等待原件写完再保存关闭。验证与Android宿主限制见[规划与执行及媒体入口交付记录](PLUGIN_REVIEW_1.2.0.md)。

1.2.1为音频任务补充系统录制请求，执行页只显示录音选择与录制，不混入拍照/视频按钮。补全Android常见录音文件的空MIME类型，实际音频完成校验与回放继续使用原有记录和附件事务。验证范围及宿主限制见[音频打卡交付记录](PLUGIN_REVIEW_1.2.1.md)。

1.2.2复查与修复见[逐项审查报告](audit/1.2.2/REVIEW.md)，[按钮清单](audit/1.2.2/CONTROLS.md)、[字段清单](audit/1.2.2/FIELDS.md)与[文件矩阵](audit/1.2.2/FILES.md)。完整规划和原始执行标准导出到笔记；同名场馆使用独立分类，折叠/跟随/布局偏好可恢复。数据目录需关闭工作台后显式应用，不把当前数据自动写入其他目录。

1.2.3统一默认网格线，覆盖原有自动场景图、脑图点阵和执行白底。共享背景规则同时应用于设计图和插件，并在实际档案恢复后重新应用。验证及截图见[默认背景交付记录](PLUGIN_REVIEW_1.2.3.md)。

1.2.4将“设置上下级”明确转换为包含关系，子级跟随只沿包含/派生逐级移动，前置和普通关联不联动；“仅反转线路方向”保留原关系类别。路线弹窗及工作台统一列表同时更新设计图和插件，选择继续使用原有数据与事务。问题原因、截图及验证见[脑图交互修复记录](PLUGIN_REVIEW_1.2.4.md)。

执行中心的日/周/月从同一调度结果读取任务。规划场馆使用项目甘特与结构化脑图；实训、习惯、复盘、目标及自定义表单按各自标准校验。验收记录连接源节点、真实附件、项目进度、随记和成果。悬赏需要家长寄语及核验，生活高光保存照片或视频原件，亲子公约保存真实姓名、条款与签署版本。

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
npm.cmd run test:cards
npm.cmd run test:cards:design
npm.cmd run test:execution
npm.cmd run test:execution:design
npm.cmd run test:creator
npm.cmd run test:creator:design
npm.cmd run test:phase-media
npm.cmd run test:phase-media:design
npm.cmd run test:background
npm.cmd run test:background:design
npm.cmd run test:polish
npm.cmd run test:polish:design
npm.cmd run test:closure
npm.cmd run test:closure:design
npm.cmd run audit:closure
# 一次运行全部浏览器场景，可替代上方各项浏览器命令
npm.cmd run test:browser:all
npm.cmd run package-android
```

浏览器测试默认使用 Windows Chrome，可通过 `CHROME_PATH` 指定浏览器可执行文件。它运行实际提取后的插件代码和内存 Vault 适配器；独立设计测试打开实际HTML并使用独立IndexedDB。浏览器验证不能替代 Obsidian 与 Android 真机验收。

## 维护入口

| 文件 | 用途 |
| --- | --- |
| `src/core/domain.mjs` | 无DOM依赖的节点、实例、依赖、进度与验收规则 |
| `src/core/canvas.mjs` / `src/runtime/canvasInteractions.js` | 共用缩放/手势、避障线路、线路设置事务及节点排布 |
| `src/runtime/canvasNavigation.js` | 缓存地图投影、视口导航、按帧更新、折叠状态及触控 |
| `src/runtime/nodeCards.js` / `src/ui/nodeCards.css` | 六类规划节点的共享渲染、卡片分区、类型色和编辑摘要同步 |
| `src/runtime/homeExecutionQueue.js` | 首页执行队列、空态、轮播恢复、跨日刷新与前置导航 |
| `src/runtime/nodeCreator.js` / `src/ui/nodeCreator.html` / `src/ui/nodeCreator.css` | 单卡片新增弹窗、类型草稿、校验和真实新增事务 |
| `src/runtime/planningBoundary.js` | 执行标准快照、规划编辑边界、实际复盘后续规划 |
| `src/runtime/closedLoopIntegrity.js` | 跨模块边界、项目周期、统一新增入口、场馆与呈现偏好、完整成果导出 |
| `src/runtime/pageBackground.js` / `src/ui/pageBackground.css` | 页面背景统一回退、配置继承、实际项目/任务场馆及重载恢复 |
| `src/ui/routeSettings.html` / `src/ui/routeSettings.css` | 路线弹窗分区、长名称换行、固定头尾与可滚动内容 |
| `src/runtime/selectControls.js` / `src/ui/selectControls.css` | 工作台统一列表、上下展开、多选草稿与原生数据事件接口 |
| `src/runtime/mediaPicker.js` | 系统选择/拍摄入口、原件写入、来源绑定与关闭等待 |
| `src/runtime/bountyDialog.js` / `src/ui/bountyDialog.html` / `src/ui/phaseMedia.css` | 悬赏分阶段弹窗、状态与响应式媒体入口 |
| `src/runtime/closedLoopRuntime.js` | 领域状态、规划编辑、同源任务与统计投影 |
| `src/runtime/closedLoopWorkflows.js` | 执行草稿、原件、成果与复盘派生 |
| `src/runtime/closedLoopModules.js` | 悬赏、公约、随记、真实导出、Canvas边界与设计适配器 |
| `src/types/domain.ts` | schemaVersion 3数据契约；旧models接口仅用于兼容 |
| `src/storage/VaultStorageAdapter.ts` | 串行完整提交、备份、领域投影、附件与Markdown |
| `src/storage/MarkdownExport.ts` | 六类规划字段、实际结果/标准快照及当前公约的笔记格式 |
| `src/ui/closedLoop.css` | 共享表单、规划和弹窗样式 |
| `high_fidelity_ui_preview.html` | 原始视觉与共享规则生成块，浏览器可直接打开 |
| `scripts/sync_product_design.mjs` | 将共享规则与样式写入设计HTML |
| `scripts/extract_from_prototype.mjs` | 提取模板、隔离CSS并封装运行时 |

修改共享规则后运行build。`prototypeScript.ts`、`template.ts`、`styles.css`和`main.js`是生成文件，不应单独修改它们来实现业务规则。

## 安装

解压 `release/youth-holistic-growth-island-1.2.4.zip`，将其中整个 `youth-holistic-growth-island` 文件夹复制到知识库的 `.obsidian/plugins/`。安装文件包括 `manifest.json`、`versions.json`、`main.js`、`styles.css`和ASCII命名的场景/头像资源。已有仓库升级前保留一份备份，然后重启或重载插件。

BRAT用户需选择正式Release版本1.2.4或Latest，执行更新后**完全关闭并重新打开Obsidian**。旧版本在保存失败时可能未清理旧运行时，仅切换页面不能保证加载新代码；到插件设置确认当前版本v1.2.4和保存状态。发布需推送与manifest一致的数字标签，单独推送master不会产生BRAT更新；工作流发布前执行构建、类型检查和纯规则测试。

通过侧栏指南针或命令打开。设置中可指定数据子目录、默认执行/规划视图以及是否随Obsidian启动。

## 数据与互操作

`00_Island_Core/domain_state.json`是schemaVersion 3完整提交，包含节点、记录、边及其他模块状态；`.previous.json`保留上一版。项目与节点JSON按storageRevision导出，同版本外部修改可导入；过期导出不会覆盖较新的完整提交。损坏的主档案会暂停自动写入。会话快照与页面HTML不作为事实来源。

脑图节点、线路和视口保存在插件的领域JSON中，项目Markdown直接由结构化节点及执行记录生成。独立HTML预览使用自己的浏览器数据，和Obsidian仓库互不混用。

启用笔记导出后，`00_Island_Core/notes_index.md`列出实际项目、日记及公约文件，JSON索引同时记录节点与记录ID。`family_pact.md`跟随当前签署版本；`personal_code.md`手写内容保留。项目改名保留已知旧文件并链接当前笔记。Markdown与其他模块JSON均为投影；受支持的项目/节点JSON编辑需保持稳定ID、依赖及边一致，不提供自动语义冲突合并。

1.0.15的PRD与测试留在`docs/history/`供追溯，不能当作当前验收契约。当前没有自动语义冲突合并、传感器采集或AI识别能力。
