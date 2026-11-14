# 1.1.2 参考版画布交互对齐

更新日期：2026-11-13。参考用户指定目录 `终身岛民-完整无限制版/a-my-island`，核对其manifest版本1.6.0、实际main.js和styles.css；其中preview.html只是预览，不能代表完整运行时。

## 实现对照

参考版通过Cytoscape管理图坐标，叠加HTML卡片、线路标签及临时控件。本插件参考其交互和分层方式独立实现，保留当前结构化节点、任务依赖和正交避障规则；没有把参考版商业bundle作为本插件依赖或发布资源。

| 参考版实际实现 | 本插件采用的行为与维护入口 |
| --- | --- |
| `P0`统一滚轮deltaMode、归一化与帧合并，按光标锚点缩放 | `canvasWheelUnits/canvasWheelFactor`与`bindCanvasViewport`用于两个画布；像素/行/页换算，单事件±1、单帧±2，按1.12指数换算比例 |
| `V0`规划图和工作图缩放限制0.12～3 | 规划/脑图统一12%～300%，按钮、滚轮和双指均走相同边界 |
| planning viewport、workspaceView/projectView分别保存zoom与pan | `DOMAIN_STATE.viewports.planning`、`projects[projectId]`保存x/y/zoom；切换项目、重绘、Vault恢复与完整重启保持独立 |
| `s4`标签使用renderedMidpoint投影、10～15px字体、视口外裁剪 | 标签图层移到未缩放stage，按pan+world×zoom定位，取消位置过渡动画，低比例仍能阅读和点击；超出视口120px隐藏 |
| `o4`等控件与临时连接预览 | 从🔗手柄拖到节点，显示虚线及目标描边；松手调用同一个建边事务，空白、自连、Esc、取消触摸、失焦、项目切换取消 |
| 拖拽结束保存位置，历史只在实际修改时记录 | 沿用真实节点尺寸避障、拖拽历史及项目快照；新建连线支持撤销，临时线不进入存储 |

两次点击手柄仍然可用；重复同向连接打开已有线路。线路样式、名称、方向、类型与删除沿用1.1.1的事务处理。前置关系同步任务依赖并拒绝循环；普通关联不制造执行阻塞。

## 数据与恢复

schemaVersion仍为3，新增可选的呈现字段`viewports:{planning:{x,y,zoom}|null,projects:{[id]:{x,y,zoom}}}`。旧数据缺少此字段时使用默认视口；恢复时拒绝非有限坐标及越界缩放。坐标以stage局部CSS像素为单位，外层缩放会先转换指针坐标。

每次相机变动立即写入内存状态，合并保存通知；Vault完整提交保留viewports，独立设计预览将同一字段保存在自己的IndexedDB。相机变化不写业务事件，不进入项目规划的撤销栈，也不改执行历史。

## 验证范围

构建、TypeScript检查和纯规则测试通过。浏览器场景执行真实Chrome鼠标、键盘、滚轮和触控输入，覆盖低比例标签、拖线预览/提交/取消/撤销、去重、依赖反转/循环拒绝、跨项目相机、Vault保存以及完整运行时重启；独立HTML额外执行页面刷新和IndexedDB恢复。

| 验证 | 证据 |
| --- | --- |
| 插件画布原生交互44项 | `audit/canvas-validation-1.1.2.json` |
| 独立设计原生交互43项 | `audit/canvas-design-validation-1.1.2.json` |
| 业务与持久化84项 | `audit/validation-1.1.2.json` |
| 独立设计业务9项 | `audit/design-validation-1.1.2.json` |
| 画面检查 | `audit/screenshots/1.1.2/` |
| 安装包及SHA-256 | `release/youth-holistic-growth-island-1.1.2.zip`、`release/hashes-1.1.2.json` |

已人工查看脑图线路设置和规划页截图。当前验证运行于Chrome与内存Vault适配器，尚未在Obsidian窗口或Android真机执行。复杂图中相互覆盖的卡片仍需先拖开或使用网格排布，才能获得可通行的线路空间；没有宣称完整复刻参考版的全部功能。
