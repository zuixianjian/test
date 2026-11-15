# 页面展示值与来源模块

以下是隔离审查夹具的展示值，不能当成用户真实数据。静态参考文字、配置默认值与实际记录需要区分；来源由当前页面的实际渲染模块读取，具体计算见源码和业务断言。

| 页面 | DOM位置 | 展示值 | 来源对象 |
| --- | --- | --- | --- |
| home-exec | home-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | home-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | hud-avatar-emoji | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | hud-username-text | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | home-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | hud-streak-count | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | home-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | hud-rate-percent | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | btn-exec-day | 📅 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | btn-exec-day | 今日待办 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | btn-exec-week | 📊 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | btn-exec-week | 周看板 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | btn-exec-month | 🗓️ | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | btn-exec-month | 月日历 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | home-unified-topbar | 达成: | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-stat-progress | 0/5 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | home-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | home-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | island-goal-cards-list | 校史馆 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | island-goal-cards-list | 0% | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-subview-day | ⟨ | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-subview-day | ⟩ | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-custom@2026-11-15 | ⚙️ 自定义配置 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-custom@2026-11-15 | 实际字段 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-custom@2026-11-15 | 🟡 今日待打卡 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-custom@2026-11-15 | 📋 自定义业务字段 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-custom@2026-11-15 | 实际观察 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-custom@2026-11-15 | 完成次数 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-custom@2026-11-15 | 是否尝试 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-custom@2026-11-15 | 观察日期 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-custom@2026-11-15 | 📦 交付物证要求 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-custom@2026-11-15 | 无需附件 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-custom@2026-11-15 | 👉 点击卡片进入打卡页面 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-drill@2026-11-15 | ⚡ 攻坚实训 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-drill@2026-11-15 | 实训要领 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-drill@2026-11-15 | 🟡 今日待打卡 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-drill@2026-11-15 | ⏱️ 计划专注时长 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-drill@2026-11-15 | 1 分钟 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-drill@2026-11-15 | 📦 交付物证要求 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-drill@2026-11-15 | 无需附件 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-drill@2026-11-15 | 预计专注：⏱️ 1 分钟 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 🎯 目标分解 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 目标验收 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 🟡 今日待打卡 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 🎯 量化通关指标 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 指标名 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 目标标准 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 正确率 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | ≥90% | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 📋 验收标准 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 对照实际指标验收 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 📦 交付物证要求 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 文字说明（至少15字） | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-goal@2026-11-15 | 👉 点击卡片进入打卡页面 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-habit@2026-11-15 | 🌿 习惯践行 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-habit@2026-11-15 | 防守清单 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-habit@2026-11-15 | 🟡 今日待打卡 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-habit@2026-11-15 | 🛡️ 践行防守清单 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-habit@2026-11-15 | □ | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-habit@2026-11-15 | 必需行动 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-habit@2026-11-15 | □ | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-habit@2026-11-15 | 选填行动 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-habit@2026-11-15 | 📦 交付物证要求 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-habit@2026-11-15 | 无需附件 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-habit@2026-11-15 | 👉 点击卡片进入打卡页面 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-review@2026-11-15 | 📝 评估复盘 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-review@2026-11-15 | 行动复盘 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-review@2026-11-15 | 🟡 今日待打卡 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-review@2026-11-15 | 📝 复盘说明 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-review@2026-11-15 | 回顾过程，记录发现与下一步改善。 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-review@2026-11-15 | 🚀 提升清单 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-review@2026-11-15 | 参与后续派生 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-review@2026-11-15 | 保留但不派生 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-review@2026-11-15 | 📦 交付物证要求 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-review@2026-11-15 | 文字说明（至少15字） | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-sync-closure-review@2026-11-15 | 👉 点击卡片进入打卡页面 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-carousel-dots | ⚙️ 实际字段 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-carousel-dots | ⚡ 实训要领 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-carousel-dots | 🎯 目标验收 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-carousel-dots | 🌿 防守清单 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | exec-carousel-dots | 📝 行动复盘 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-view-exec | ⚡ | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-view-exec | 执行视图 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-view-plan | 🧭 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-view-plan | 规划视图 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-treasury | 💰 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-treasury | 藏金屋 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-tree | 📜 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-tree | 行为规范 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-note | 📝 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-note | 每日随记 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-achieve | 🏆 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-achieve | 成就馆 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-inquiry | ❓ | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-inquiry | 古籍问道 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-pomo | ⏱️ | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-pomo | 专注秒表 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-bounty | 📜 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-bounty | 悬赏契约 | Project、TaskInstance、记录及界面呈现状态 |
| home-exec | launcher-btn-settings | 小岛设置 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | hud-avatar-emoji | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | hud-username-text | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | hud-streak-count | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | hud-rate-percent | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | btn-home-layout | ▦ | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | lbl-home-layout | 自由布局 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | ➕ | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | 新增模块 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | ⛶ | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | 适应画布 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | 🎯 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | 聚焦节点 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | ⊙ | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | 居中节点 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | ➕ | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | 放大 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | ➖ | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | 缩小 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | island-zoom-badge | 100% | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-top-graph-toolbar | 还原 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-unified-topbar | 达成: | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | exec-stat-progress | 0/5 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | home-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | island-minimap-toggle-btn | 地图 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-view-exec | ⚡ | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-view-exec | 执行视图 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-view-plan | 🧭 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-view-plan | 规划视图 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-treasury | 💰 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-treasury | 藏金屋 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-tree | 📜 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-tree | 行为规范 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-note | 📝 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-note | 每日随记 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-achieve | 🏆 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-achieve | 成就馆 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-inquiry | ❓ | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-inquiry | 古籍问道 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-pomo | ⏱️ | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-pomo | 专注秒表 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-bounty | 📜 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-bounty | 悬赏契约 | Project、TaskInstance、记录及界面呈现状态 |
| home-plan | launcher-btn-settings | 小岛设置 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | home-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | home-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | hud-avatar-emoji | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | hud-username-text | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | home-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | hud-streak-count | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | home-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | hud-rate-percent | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | btn-exec-day | 📅 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | btn-exec-day | 今日待办 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | btn-exec-week | 📊 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | btn-exec-week | 周看板 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | btn-exec-month | 🗓️ | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | btn-exec-month | 月日历 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | home-unified-topbar | 达成: | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | exec-stat-progress | 0/5 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | home-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | home-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | exec-subview-week | 2026年第46周 (11月09日 - 11月15日) | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 周一 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 11/09 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 0 项 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 周二 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 11/10 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 0 项 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 周三 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 11/11 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 0 项 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 周四 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 11/12 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 0 项 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 周五 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 11/13 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 0 项 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 周六 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 11/14 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 0 项 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 周日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 11/15 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 今日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 校史馆 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 🟡 待办 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | ⏱️ 0 分钟 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 🕒 计划 2026-11-15 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 校史馆 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 🟡 待办 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | ⏱️ 1 分钟 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 🕒 计划 2026-11-15 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 校史馆 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 🟡 待办 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | ⏱️ 0 分钟 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 🕒 计划 2026-11-15 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 校史馆 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 🟡 待办 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | ⏱️ 0 分钟 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 🕒 计划 2026-11-15 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 校史馆 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 🟡 待办 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | ⏱️ 0 分钟 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | week-board-columns-container | 🕒 计划 2026-11-15 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-view-exec | ⚡ | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-view-exec | 执行视图 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-view-plan | 🧭 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-view-plan | 规划视图 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-treasury | 💰 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-treasury | 藏金屋 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-tree | 📜 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-tree | 行为规范 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-note | 📝 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-note | 每日随记 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-achieve | 🏆 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-achieve | 成就馆 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-inquiry | ❓ | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-inquiry | 古籍问道 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-pomo | ⏱️ | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-pomo | 专注秒表 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-bounty | 📜 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-bounty | 悬赏契约 | Project、TaskInstance、记录及界面呈现状态 |
| execution-week | launcher-btn-settings | 小岛设置 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | home-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | home-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | hud-avatar-emoji | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | hud-username-text | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | home-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | hud-streak-count | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | home-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | hud-rate-percent | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | btn-exec-day | 📅 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | btn-exec-day | 今日待办 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | btn-exec-week | 📊 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | btn-exec-week | 周看板 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | btn-exec-month | 🗓️ | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | btn-exec-month | 月日历 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | home-unified-topbar | 达成: | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | exec-stat-progress | 0/5 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | home-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | home-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-title-label | 2026 年 11 月 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | exec-subview-month | 🟢 已办: 0 项 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | exec-subview-month | 🟡 待办: 5 项 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | exec-subview-month | 🔴 未办: 0 项 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | exec-subview-month | ⭐ 整体达成率: 0% | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 26 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 17日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 27 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 18日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 28 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 19日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 29 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 20日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 30 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 21日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 31 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 22日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 1 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 23日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 2 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 24日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 3 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 25日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 4 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 26日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 5 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 27日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 6 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 28日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 7 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 29日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 8 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 30日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 9 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 1日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 10 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 2日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 11 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 3日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 12 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 4日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 13 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 5日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 14 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 6日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 15 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 今日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 🟡 5 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 16 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 8日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 17 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 9日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 18 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 10日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 19 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 11日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 20 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 12日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 21 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 13日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 22 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 14日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 23 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 15日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 24 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 16日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 25 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 17日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 26 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 18日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 27 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 19日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 28 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 20日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 29 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 21日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 30 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 22日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 1 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 23日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 2 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 24日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 3 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 25日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 4 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 26日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 5 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 27日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 6 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | month-calendar-grid | 28日 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-view-exec | ⚡ | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-view-exec | 执行视图 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-view-plan | 🧭 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-view-plan | 规划视图 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-treasury | 💰 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-treasury | 藏金屋 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-tree | 📜 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-tree | 行为规范 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-note | 📝 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-note | 每日随记 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-achieve | 🏆 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-achieve | 成就馆 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-inquiry | ❓ | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-inquiry | 古籍问道 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-pomo | ⏱️ | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-pomo | 专注秒表 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-bounty | 📜 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-bounty | 悬赏契约 | Project、TaskInstance、记录及界面呈现状态 |
| execution-month | launcher-btn-settings | 小岛设置 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | ◀️ | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | 返回大厅 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-crumb-pavilion-name | 🏫 校史馆 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-crumb-view-leaf | 📊 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-top-action-btn | ➕ | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-top-action-btn | 新增项目 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-top-today-btn | 🎯 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-top-today-btn | 定位今日 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-top-stat-pill-box | 进行中: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-top-active-count | 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | gantt-category-filters | 分类: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | gantt-status-filters | 状态: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | count-all | 1 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | count-planned | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | count-pending | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | count-exec | 1 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | count-done | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | count-archived | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | gantt-table-rows | 闭环字段审查 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | gantt-table-rows | 完整标准及来源 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | gantt-table-rows | 节点验收 0%（0/5） | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-gantt-main-container | \| | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-gantt-main-container | 待规划 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-gantt-main-container | 待执行 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-gantt-main-container | 进行中 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-gantt-main-container | 已完成 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-study | ws-gantt-main-container | 已归档 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | ◀️ | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | 返回大厅 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-crumb-pavilion-name | 🏫 校史馆 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-crumb-view-leaf | 📊 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-top-action-btn | ➕ | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-top-action-btn | 新增项目 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-top-today-btn | 🎯 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-top-today-btn | 定位今日 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-top-stat-pill-box | 进行中: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-top-active-count | 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | gantt-category-filters | 分类: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | gantt-status-filters | 状态: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | count-all | 1 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | count-planned | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | count-pending | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | count-exec | 1 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | count-done | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | count-archived | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | gantt-table-rows | 闭环字段审查 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | gantt-table-rows | 完整标准及来源 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | gantt-table-rows | 节点验收 0%（0/5） | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-gantt-main-container | \| | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-gantt-main-container | 待规划 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-gantt-main-container | 待执行 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-gantt-main-container | 进行中 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-gantt-main-container | 已完成 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-study | ws-gantt-main-container | 已归档 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | ◀️ | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | 返回大厅 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-crumb-pavilion-name | 🥋 武道馆/兴趣屋 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-crumb-view-leaf | 📊 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-top-action-btn | ➕ | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-top-action-btn | 新增项目 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-top-today-btn | 🎯 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-top-today-btn | 定位今日 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-top-stat-pill-box | 进行中: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-top-active-count | 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | gantt-category-filters | 分类: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | gantt-status-filters | 状态: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | count-all | 1 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | count-planned | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | count-pending | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | count-exec | 1 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | count-done | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | count-archived | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | gantt-table-rows | 暂无项目 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-gantt-main-container | \| | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-gantt-main-container | 待规划 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-gantt-main-container | 待执行 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-gantt-main-container | 进行中 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-gantt-main-container | 已完成 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-dojo | ws-gantt-main-container | 已归档 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | ◀️ | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | 返回大厅 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-crumb-pavilion-name | 🥋 武道馆/兴趣屋 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-crumb-view-leaf | 📊 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-top-action-btn | ➕ | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-top-action-btn | 新增项目 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-top-today-btn | 🎯 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-top-today-btn | 定位今日 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-top-stat-pill-box | 进行中: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-top-active-count | 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | gantt-category-filters | 分类: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | gantt-status-filters | 状态: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | count-all | 1 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | count-planned | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | count-pending | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | count-exec | 1 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | count-done | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | count-archived | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | gantt-table-rows | 暂无项目 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-gantt-main-container | \| | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-gantt-main-container | 待规划 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-gantt-main-container | 待执行 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-gantt-main-container | 进行中 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-gantt-main-container | 已完成 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-dojo | ws-gantt-main-container | 已归档 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | ◀️ | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | 返回大厅 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-crumb-pavilion-name | 🧠 思辨馆/认知台 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-crumb-view-leaf | 📊 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-top-action-btn | ➕ | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-top-action-btn | 新增项目 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-top-today-btn | 🎯 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-top-today-btn | 定位今日 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-top-stat-pill-box | 进行中: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-top-active-count | 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | gantt-category-filters | 分类: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | gantt-status-filters | 状态: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | count-all | 1 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | count-planned | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | count-pending | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | count-exec | 1 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | count-done | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | count-archived | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | gantt-table-rows | 暂无项目 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-gantt-main-container | \| | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-gantt-main-container | 待规划 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-gantt-main-container | 待执行 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-gantt-main-container | 进行中 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-gantt-main-container | 已完成 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cognition | ws-gantt-main-container | 已归档 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | ◀️ | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | 返回大厅 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-crumb-pavilion-name | 🧠 思辨馆/认知台 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-crumb-view-leaf | 📊 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-top-action-btn | ➕ | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-top-action-btn | 新增项目 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-top-today-btn | 🎯 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-top-today-btn | 定位今日 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-top-stat-pill-box | 进行中: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-top-active-count | 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | gantt-category-filters | 分类: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | gantt-status-filters | 状态: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | count-all | 1 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | count-planned | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | count-pending | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | count-exec | 1 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | count-done | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | count-archived | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | gantt-table-rows | 暂无项目 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-gantt-main-container | \| | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-gantt-main-container | 待规划 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-gantt-main-container | 待执行 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-gantt-main-container | 进行中 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-gantt-main-container | 已完成 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cognition | ws-gantt-main-container | 已归档 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | ◀️ | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | 返回大厅 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-crumb-pavilion-name | 📜 修身阁 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-crumb-view-leaf | 📊 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-top-action-btn | ➕ | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-top-action-btn | 新增项目 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-top-today-btn | 🎯 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-top-today-btn | 定位今日 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-top-stat-pill-box | 进行中: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-top-active-count | 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | gantt-category-filters | 分类: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | gantt-status-filters | 状态: | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | count-all | 1 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | count-planned | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | count-pending | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | count-exec | 1 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | count-done | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | count-archived | 0 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | gantt-table-rows | 暂无项目 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-gantt-main-container | \| | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-gantt-main-container | 待规划 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-gantt-main-container | 待执行 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-gantt-main-container | 进行中 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-gantt-main-container | 已完成 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-cultivation | ws-gantt-main-container | 已归档 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | 📂 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | 左侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | ◀️ | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | 返回大厅 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | 👦 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | 晨曦岛民 · 齐天 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-crumb-pavilion-name | 📜 修身阁 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | 🔥 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | 连续 0 天 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | 📈 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | 履约 40% | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-crumb-view-leaf | 📊 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-top-action-btn | ➕ | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-top-action-btn | 新增项目 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-top-today-btn | 🎯 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-top-today-btn | 定位今日 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-top-stat-pill-box | 进行中: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-top-active-count | 项目甘特总览 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | 📑 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-unified-topbar | 右侧栏 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | gantt-category-filters | 分类: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | gantt-status-filters | 状态: | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | count-all | 1 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | count-planned | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | count-pending | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | count-exec | 1 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | count-done | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | count-archived | 0 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | gantt-table-rows | 暂无项目 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-gantt-main-container | \| | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-gantt-main-container | 待规划 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-gantt-main-container | 待执行 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-gantt-main-container | 进行中 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-gantt-main-container | 已完成 | Project、TaskInstance、记录及界面呈现状态 |
| gantt-cultivation | ws-gantt-main-container | 已归档 | Project、TaskInstance、记录及界面呈现状态 |
| workspace-treasury | ws-unified-topbar | 📂 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-unified-topbar | 左侧栏 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-unified-topbar | ◀️ | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-unified-topbar | 返回大厅 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-unified-topbar | 👦 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-unified-topbar | 晨曦岛民 · 齐天 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-crumb-pavilion-name | 💰 藏金屋 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-unified-topbar | 🔥 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-unified-topbar | 连续 0 天 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-unified-topbar | 📈 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-unified-topbar | 履约 40% | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-crumb-view-leaf | 🏛️ 财商分流与资产工坊 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-unified-topbar | 📑 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-unified-topbar | 右侧栏 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-specialized-container | 💰 藏金屋 · 少儿独立财商实践与零用金收支记账 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-specialized-container | 独立模块 · 严禁对赌 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-specialized-container | 📊 个人零用金资产总览 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | ws-specialized-container | (真实收支清晰透明 · 账实相符) | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | treasury-total-assets | 总净资产：¥0.00 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | treasury-quick-record-card | ✍️ 零用金极速收支记账操作台 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | treasury-quick-record-card | ¥ | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | treasury-quick-record-card | 快捷金额： | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | treasury-ledger-card | 🏛️ 藏金屋零用金收支明细台账 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | treasury-ledger-card | 🔒 真实客观账本 · 不可随意篡改 | TREASURY_STATE.ledger与真实余额 |
| workspace-treasury | treasury-ledger-tbody | 暂无真实收支记录 | TREASURY_STATE.ledger与真实余额 |
| workspace-tree | ws-unified-topbar | 📂 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-unified-topbar | 左侧栏 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-unified-topbar | ◀️ | FamilyPact、Violation、补救Project |
| workspace-tree | ws-unified-topbar | 返回大厅 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-unified-topbar | 👦 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-unified-topbar | 晨曦岛民 · 齐天 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-crumb-pavilion-name | 📜 个人行为规范 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-unified-topbar | 🔥 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-unified-topbar | 连续 0 天 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-unified-topbar | 📈 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-unified-topbar | 履约 40% | FamilyPact、Violation、补救Project |
| workspace-tree | ws-crumb-view-leaf | 🏛️ 古籍风骨线装法典长卷 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-top-action-btn | 📜 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-top-action-btn | 查阅规范 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-unified-topbar | 📑 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-unified-topbar | 右侧栏 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-specialized-container | 已共同确立的行为规范 | FamilyPact、Violation、补救Project |
| workspace-tree | ws-specialized-container | 尚未共同确立家庭条款。经典资料可供讨论，不代表已签署。 | FamilyPact、Violation、补救Project |
| workspace-note | ws-unified-topbar | 📂 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-unified-topbar | 左侧栏 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-unified-topbar | ◀️ | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-unified-topbar | 返回大厅 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-unified-topbar | 👦 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-unified-topbar | 晨曦岛民 · 齐天 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-crumb-pavilion-name | 📝 每日随记 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-unified-topbar | 🔥 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-unified-topbar | 连续 0 天 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-unified-topbar | 📈 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-unified-topbar | 履约 40% | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-top-action-btn | ✍️ | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-top-action-btn | 书写随笔 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-unified-topbar | 📑 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-unified-topbar | 右侧栏 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 0 条） | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-today-focus-pill | 今日累计专注：0 分钟 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-journal-editor-card | ⚡ 精力: | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-energy-stars-box | ★★★★★ | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-journal-editor-card | 心流晴雨表: | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-journal-editor-card | 💡 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-journal-editor-card | 📸 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-journal-editor-card | 原件保存到当前知识库 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-history-section | 📜 往期双轨随记卷宗长卷 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-history-section | 自传体成长印记 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-note | note-history-count | 0 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| workspace-achieve | ws-unified-topbar | 📂 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-unified-topbar | 左侧栏 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-unified-topbar | ◀️ | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-unified-topbar | 返回大厅 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-unified-topbar | 👦 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-unified-topbar | 晨曦岛民 · 齐天 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-crumb-pavilion-name | 🏆 成就馆 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-unified-topbar | 🔥 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-unified-topbar | 连续 0 天 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-unified-topbar | 📈 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-unified-topbar | 履约 40% | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-crumb-view-leaf | 🏛️ 荣誉殿堂与成就登记 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-top-action-btn | ✨ | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-top-action-btn | 偶然成就 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-unified-topbar | 📑 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-unified-topbar | 右侧栏 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 🏆 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 成就馆 · 青少年成长高光史诗荣誉殿堂 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 双轨分类架构 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | ✨ | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 记录偶然成就 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 📜 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 置顶悬赏荣誉 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 📝 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 时序随记 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 🌱 项目养成类成就 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 0 项 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | ✨ 生活学习偶然成就 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 0 项 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 🏛️ 双轨全貌总览 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | ws-specialized-container | 0 枚 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | achieve-cultivation-section | 🔒 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | achieve-cultivation-section | 养成类成就沉淀铁律：不可手动新增 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | achieve-cultivation-section | 按项目类型分组 · 倒序时间线 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | achieve-cultivation-groups | 🏫 校史馆 · 0项 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | achieve-cultivation-groups | 🥋 武道馆/兴趣屋 · 0项 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | achieve-cultivation-groups | 🧠 思辨馆/认知台 · 0项 | Achievement、源记录 / 实测、实际原件 |
| workspace-achieve | achieve-cultivation-groups | 📜 修身阁 · 0项 | Achievement、源记录 / 实测、实际原件 |
| mindmap-six-types | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-minimap-dock | 脑图导航 | WorkNode/cardPayload、Project、edgesByProject |
| mindmap-six-types | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-minimap-dock | 脑图导航 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-checklist | domain-list-editor | 编辑防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-minimap-dock | 脑图导航 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-improvementList | domain-list-editor | 编辑提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-minimap-dock | 脑图导航 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-metrics | domain-list-editor | 编辑通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-minimap-dock | 脑图导航 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| list-editor-customFieldsSchema | domain-list-editor | 编辑填报项目 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-title | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-project | 闭环字段审查 · 先选择类型，再填写内容 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-tab-goal | 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-tab-drill | 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-tab-habit | 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-tab-review | 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-tab-custom | 自定义 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-tab-text | 文本便签 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-card | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-card | 按需要定义填报字段与交付标准 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-card | 节点名称 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-card | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-card | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-card | 按需添加具体项目，也可以创建后继续完善。 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-card | 2026-11-15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-card | 计划日期 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-card | 执行频次 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-card | 物证要求 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-card | 前置节点 · 可多选 | WorkNode/cardPayload、Project、edgesByProject |
| legacy-custom-entry | node-creator-hint | 规划标准将在执行时使用，实际结果在打卡页录入。 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| edit-project | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-title | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-project | 闭环字段审查 · 先选择类型，再填写内容 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-tab-goal | 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-tab-drill | 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-tab-habit | 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-tab-review | 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-tab-custom | 自定义 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-tab-text | 文本便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 明确目标、量化指标与验收方式 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 节点名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 按需添加具体项目，也可以创建后继续完善。 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 期望完成时间 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 2026-11-15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 计划日期 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 执行频次 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 物证要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-card | 前置节点 · 可多选 | WorkNode/cardPayload、Project、edgesByProject |
| creator-goal | node-creator-hint | 规划标准将在执行时使用，实际结果在打卡页录入。 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-title | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-project | 闭环字段审查 · 先选择类型，再填写内容 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-tab-goal | 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-tab-drill | 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-tab-habit | 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-tab-review | 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-tab-custom | 自定义 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-tab-text | 文本便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-card | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-card | 写下练习要领，安排专注时长与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-card | 节点名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-card | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-card | ⏱ 计划专注时长（分钟） | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-card | 2026-11-15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-card | 计划日期 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-card | 执行频次 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-card | 物证要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-card | 前置节点 · 可多选 | WorkNode/cardPayload、Project、edgesByProject |
| creator-drill | node-creator-hint | 规划标准将在执行时使用，实际结果在打卡页录入。 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-title | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-project | 闭环字段审查 · 先选择类型，再填写内容 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-tab-goal | 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-tab-drill | 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-tab-habit | 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-tab-review | 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-tab-custom | 自定义 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-tab-text | 文本便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-card | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-card | 把每天要坚持的行动整理为清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-card | 节点名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-card | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-card | 🛡 践行防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-card | 按需添加具体项目，也可以创建后继续完善。 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-card | 2026-11-15 · 每日 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-card | 计划日期 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-card | 执行频次 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-card | 物证要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-card | 前置节点 · 可多选 | WorkNode/cardPayload、Project、edgesByProject |
| creator-habit | node-creator-hint | 规划标准将在执行时使用，实际结果在打卡页录入。 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-title | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-project | 闭环字段审查 · 先选择类型，再填写内容 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-tab-goal | 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-tab-drill | 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-tab-habit | 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-tab-review | 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-tab-custom | 自定义 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-tab-text | 文本便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-card | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-card | 回看过程，让复盘形成下一步行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-card | 节点名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-card | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-card | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-card | 按需添加具体项目，也可以创建后继续完善。 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-card | 2026-11-15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-card | 计划日期 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-card | 执行频次 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-card | 物证要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-card | 前置节点 · 可多选 | WorkNode/cardPayload、Project、edgesByProject |
| creator-review | node-creator-hint | 规划标准将在执行时使用，实际结果在打卡页录入。 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-title | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-project | 闭环字段审查 · 先选择类型，再填写内容 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-tab-goal | 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-tab-drill | 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-tab-habit | 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-tab-review | 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-tab-custom | 自定义 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-tab-text | 文本便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-card | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-card | 按需要定义填报字段与交付标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-card | 节点名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-card | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-card | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-card | 按需添加具体项目，也可以创建后继续完善。 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-card | 2026-11-15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-card | 计划日期 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-card | 执行频次 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-card | 物证要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-card | 前置节点 · 可多选 | WorkNode/cardPayload、Project、edgesByProject |
| creator-custom | node-creator-hint | 规划标准将在执行时使用，实际结果在打卡页录入。 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 📂 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 左侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | ◀️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 返回甘特 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 👦 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 晨曦岛民 · 齐天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-crumb-leaf | 闭环字段审查 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 🔥 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 连续 0 天 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 📈 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 履约 40% | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 🖼️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 插入图片 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | ➕ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 放大 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | ➖ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 缩小 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-zoom-badge | 100% | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 还原 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | ⛶ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 适应画布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | btn-tertiary-children-follow | 🧲 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | btn-tertiary-children-follow | 子级跟随 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | ↩️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 撤销 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | ↪️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 重做 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 🗑️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 删除节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 🔍 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 搜索节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | ▦ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 网格排布 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | btn-tool-minimize-all | 🗜️ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | btn-tool-minimize-all | 全部折叠 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 节点数: | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-stat-node-count | 6 节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 📑 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-unified-topbar | 右侧栏 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 🎯 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | status-text-closure-goal | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 目标验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 量化目标 · 明确验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 目标说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 🎯 量化通关指标 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 正确率 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | ≥90% | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 📋 验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 📅 期望完成 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 规划目标与验收标准 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-goal | 在执行页验收 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | ⚡ 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | status-text-closure-drill | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | 实训要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | 聚焦难点 · 专项练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | 核心攻坚要领 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | ⏱ 计划专注 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | ◷ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | 📦 交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | 完成规定练习 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | 在执行中心计时与交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-drill | 专注 1 分钟 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 🌿 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | status-text-closure-habit | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 守住日常 · 逐项落实 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 践行初衷 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 🛡 防守清单 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 必需行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | □ | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 选填行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 执行时逐项核验 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-habit | 2 项行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 📝 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | status-text-closure-review | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 行动复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 回看过程 · 形成行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 复盘标的与说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 🚀 提升行动 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 1 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 参与后续派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 2 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 保留但不派生 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-review | 编排后续成长计划 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | ⚙️ 自定义配置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | status-text-closure-custom | 尚未执行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 实际字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 自主定义 · 按需交付 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 任务说明 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 📋 自定义字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 实际观察 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 文字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 完成次数 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 数字 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 是否尝试 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 是 / 否 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 观察日期 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 日期 · 必填 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 计划与交付要求 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 11/15 · 一次性 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 执行时填写实际结果 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-custom | 4 个字段 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-text | 📄 简单文本 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | status-text-closure-text | 已读 0 次 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-text | 资料便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-text | 记录想法 · 沉淀资料 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-text | 便签设置 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-text | 编辑名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-text | 资料与想法 · 不计入履约 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | closure-text | 规划便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | tertiary-minimap-toggle-btn | 地图 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-title | 新增节点 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-project | 闭环字段审查 · 先选择类型，再填写内容 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-tab-goal | 目标分解 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-tab-drill | 攻坚实训 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-tab-habit | 习惯践行 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-tab-review | 评估复盘 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-tab-custom | 自定义 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-tab-text | 文本便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-card | 📄 文本便签 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-card | 记录想法或 Markdown 资料，不加入执行任务 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-card | 节点名称 | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-card | 正文 · 支持 Markdown | WorkNode/cardPayload、Project、edgesByProject |
| creator-text | node-creator-hint | 文本便签仅供记录与阅读。 | WorkNode/cardPayload、Project、edgesByProject |
| execution-goal | home-unified-topbar | 📂 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | home-unified-topbar | 左侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | hud-avatar-emoji | 👦 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | hud-username-text | 晨曦岛民 · 齐天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | home-unified-topbar | 🔥 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | hud-streak-count | 连续 0 天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | home-unified-topbar | 📈 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | hud-rate-percent | 履约 40% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | btn-exec-day | 📅 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | btn-exec-day | 今日待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | btn-exec-week | 📊 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | btn-exec-week | 周看板 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | btn-exec-month | 🗓️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | btn-exec-month | 月日历 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | home-unified-topbar | 达成: | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-stat-progress | 0/5 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | home-unified-topbar | 📑 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | home-unified-topbar | 右侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | island-goal-cards-list | 校史馆 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | island-goal-cards-list | 0% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-task-workspace | ◀️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-task-workspace | 返回待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-avatar-icon | ⚡ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-popup-badge | 🎯 目标分解节点卡 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-popup-title | 目标验收 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-popup-breadcrumb | 校史馆 ❯ 闭环字段审查 ❯ 目标验收 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-popup-toggle-icon | 👁️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-popup-toggle-text | 查看项目 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-popup-task-view | 目标验收 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | island-execution-standard | 规划标准 · 只读 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | island-execution-standard | 目标指标 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | island-execution-standard | 正确率：≥90% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | island-execution-standard | 验收标准：对照实际指标验收 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | island-execution-standard | 计划专注：0 分钟 · 文字说明（至少15字） | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | island-real-elapsed | 00:00 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-popup-task-view | 目标实测与验收 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-goal | exec-popup-task-view | 原件保存到当前知识库 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | home-unified-topbar | 📂 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | home-unified-topbar | 左侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | hud-avatar-emoji | 👦 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | hud-username-text | 晨曦岛民 · 齐天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | home-unified-topbar | 🔥 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | hud-streak-count | 连续 0 天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | home-unified-topbar | 📈 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | hud-rate-percent | 履约 40% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | btn-exec-day | 📅 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | btn-exec-day | 今日待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | btn-exec-week | 📊 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | btn-exec-week | 周看板 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | btn-exec-month | 🗓️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | btn-exec-month | 月日历 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | home-unified-topbar | 达成: | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | exec-stat-progress | 0/5 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | home-unified-topbar | 📑 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | home-unified-topbar | 右侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | island-goal-cards-list | 校史馆 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | island-goal-cards-list | 0% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | exec-task-workspace | ◀️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | exec-task-workspace | 返回待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | exec-avatar-icon | ⚡ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | exec-popup-badge | ⚡ 攻坚实训节点卡 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | exec-popup-title | 实训要领 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | exec-popup-breadcrumb | 校史馆 ❯ 闭环字段审查 ❯ 实训要领 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | exec-popup-toggle-icon | 👁️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | exec-popup-toggle-text | 查看项目 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | exec-popup-task-view | 实训要领 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | island-execution-standard | 规划标准 · 只读 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | island-execution-standard | 计划专注：1 分钟 · 无需附件 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | island-real-elapsed | 00:00 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-drill | exec-popup-task-view | 原件保存到当前知识库 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | home-unified-topbar | 📂 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | home-unified-topbar | 左侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | hud-avatar-emoji | 👦 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | hud-username-text | 晨曦岛民 · 齐天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | home-unified-topbar | 🔥 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | hud-streak-count | 连续 0 天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | home-unified-topbar | 📈 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | hud-rate-percent | 履约 40% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | btn-exec-day | 📅 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | btn-exec-day | 今日待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | btn-exec-week | 📊 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | btn-exec-week | 周看板 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | btn-exec-month | 🗓️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | btn-exec-month | 月日历 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | home-unified-topbar | 达成: | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-stat-progress | 0/5 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | home-unified-topbar | 📑 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | home-unified-topbar | 右侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | island-goal-cards-list | 校史馆 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | island-goal-cards-list | 0% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-task-workspace | ◀️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-task-workspace | 返回待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-avatar-icon | ⚡ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-popup-badge | 🌿 习惯践行节点卡 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-popup-title | 防守清单 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-popup-breadcrumb | 校史馆 ❯ 闭环字段审查 ❯ 防守清单 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-popup-toggle-icon | 👁️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-popup-toggle-text | 查看项目 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-popup-task-view | 防守清单 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | island-execution-standard | 规划标准 · 只读 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | island-execution-standard | 规划清单 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | island-execution-standard | 必需行动（必需） | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | island-execution-standard | 选填行动 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | island-execution-standard | 计划专注：0 分钟 · 无需附件 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | island-real-elapsed | 00:00 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-popup-task-view | 践行核验 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-habit | exec-popup-task-view | 原件保存到当前知识库 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | home-unified-topbar | 📂 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | home-unified-topbar | 左侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | hud-avatar-emoji | 👦 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | hud-username-text | 晨曦岛民 · 齐天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | home-unified-topbar | 🔥 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | hud-streak-count | 连续 0 天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | home-unified-topbar | 📈 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | hud-rate-percent | 履约 40% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | btn-exec-day | 📅 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | btn-exec-day | 今日待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | btn-exec-week | 📊 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | btn-exec-week | 周看板 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | btn-exec-month | 🗓️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | btn-exec-month | 月日历 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | home-unified-topbar | 达成: | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | exec-stat-progress | 0/5 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | home-unified-topbar | 📑 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | home-unified-topbar | 右侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | island-goal-cards-list | 校史馆 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | island-goal-cards-list | 0% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | exec-task-workspace | ◀️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | exec-task-workspace | 返回待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | exec-avatar-icon | ⚡ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | exec-popup-badge | 📝 评估复盘节点卡 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | exec-popup-title | 行动复盘 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | exec-popup-breadcrumb | 校史馆 ❯ 闭环字段审查 ❯ 行动复盘 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | exec-popup-toggle-icon | 👁️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | exec-popup-toggle-text | 查看项目 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | exec-popup-task-view | 行动复盘 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | island-execution-standard | 规划标准 · 只读 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | island-execution-standard | 规划提升行动 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | island-execution-standard | 参与后续派生 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | island-execution-standard | 保留但不派生 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | island-execution-standard | 计划专注：0 分钟 · 文字说明（至少15字） | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | island-real-elapsed | 00:00 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-review | exec-popup-task-view | 原件保存到当前知识库 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 📂 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 左侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | hud-avatar-emoji | 👦 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | hud-username-text | 晨曦岛民 · 齐天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 🔥 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | hud-streak-count | 连续 0 天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 📈 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | hud-rate-percent | 履约 40% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-day | 📅 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-day | 今日待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-week | 📊 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-week | 周看板 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-month | 🗓️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-month | 月日历 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 达成: | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-stat-progress | 0/5 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 📑 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 右侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-goal-cards-list | 校史馆 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-goal-cards-list | 0% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-task-workspace | ◀️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-task-workspace | 返回待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-avatar-icon | ⚡ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-badge | ⚙️ 自定义配置节点卡 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-title | 实际字段 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-breadcrumb | 校史馆 ❯ 闭环字段审查 ❯ 实际字段 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-toggle-icon | 👁️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-toggle-text | 查看项目 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-task-view | 实际字段 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-execution-standard | 规划标准 · 只读 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-execution-standard | 规划字段：实际观察（必填）、完成次数（必填）、是否尝试（必填）、观察日期（必填） | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-execution-standard | 计划专注：0 分钟 · 无需附件 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-real-elapsed | 00:00 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-task-view | 实测字段 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-task-view | 原件保存到当前知识库 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 📂 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 左侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | hud-avatar-emoji | 👦 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | hud-username-text | 晨曦岛民 · 齐天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 🔥 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | hud-streak-count | 连续 0 天 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 📈 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | hud-rate-percent | 履约 40% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-day | 📅 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-day | 今日待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-week | 📊 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-week | 周看板 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-month | 🗓️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | btn-exec-month | 月日历 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 达成: | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-stat-progress | 0/5 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 📑 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | home-unified-topbar | 右侧栏 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-goal-cards-list | 校史馆 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-goal-cards-list | 0% | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-task-workspace | ◀️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-task-workspace | 返回待办 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-avatar-icon | ⚡ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-badge | ⚙️ 自定义配置节点卡 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-title | 实际字段 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-breadcrumb | 校史馆 ❯ 闭环字段审查 ❯ 实际字段 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-toggle-icon | 👁️ | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-toggle-text | 查看项目 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-task-view | 实际字段 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-execution-standard | 规划标准 · 只读 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-execution-standard | 规划字段：实际观察（必填）、完成次数（必填）、是否尝试（必填）、观察日期（必填） | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-execution-standard | 计划专注：0 分钟 · 无需附件 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | island-real-elapsed | 00:00 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-task-view | 实测字段 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| execution-custom | exec-popup-task-view | 原件保存到当前知识库 | 当前TaskInstance、规划快照、drafts、CheckinRecord |
| family-editor | tertiary-unified-topbar | 📂 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 左侧栏 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | ◀️ | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 返回甘特 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 👦 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 晨曦岛民 · 齐天 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-crumb-leaf | 闭环字段审查 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 🔥 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 连续 1 天 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 📈 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 履约 90% | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | ➕ | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 新增节点 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 🖼️ | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 插入图片 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | ➕ | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 放大 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | ➖ | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 缩小 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-zoom-badge | 100% | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 还原 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | ⛶ | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 适应画布 | FamilyPact、Violation、补救Project |
| family-editor | btn-tertiary-children-follow | 🧲 | FamilyPact、Violation、补救Project |
| family-editor | btn-tertiary-children-follow | 子级跟随 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | ↩️ | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 撤销 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | ↪️ | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 重做 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 🗑️ | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 删除节点 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 🔍 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 搜索节点 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | ▦ | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 网格排布 | FamilyPact、Violation、补救Project |
| family-editor | btn-tool-minimize-all | 🗜️ | FamilyPact、Violation、补救Project |
| family-editor | btn-tool-minimize-all | 全部折叠 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 节点数: | FamilyPact、Violation、补救Project |
| family-editor | tertiary-stat-node-count | 7 节点 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 📑 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-unified-topbar | 右侧栏 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 🎯 目标分解 | FamilyPact、Violation、补救Project |
| family-editor | status-text-closure-goal | 已留痕 1 次 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 目标验收 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 量化目标 · 明确验收 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 目标说明 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 🎯 量化通关指标 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 正确率 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | ≥90% | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 📋 验收标准 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 📅 期望完成 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 计划与交付要求 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 加入执行任务 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 规划目标与验收标准 | FamilyPact、Violation、补救Project |
| family-editor | closure-goal | 在执行页验收 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | ⚡ 攻坚实训 | FamilyPact、Violation、补救Project |
| family-editor | status-text-closure-drill | 已留痕 1 次 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | 实训要领 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | 聚焦难点 · 专项练习 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | 核心攻坚要领 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | ⏱ 计划专注 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | 分钟 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | ◷ | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | 📦 交付要求 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | 完成规定练习 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | 计划与交付要求 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | 加入执行任务 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | 在执行中心计时与交付 | FamilyPact、Violation、补救Project |
| family-editor | closure-drill | 专注 1 分钟 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 🌿 习惯践行 | FamilyPact、Violation、补救Project |
| family-editor | status-text-closure-habit | 已留痕 1 次 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 防守清单 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 守住日常 · 逐项落实 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 践行初衷 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 🛡 防守清单 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | □ | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 必需行动 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | □ | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 选填行动 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 计划与交付要求 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 加入执行任务 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 执行时逐项核验 | FamilyPact、Violation、补救Project |
| family-editor | closure-habit | 2 项行动 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 📝 评估复盘 | FamilyPact、Violation、补救Project |
| family-editor | status-text-closure-review | 已留痕 1 次 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 行动复盘 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 回看过程 · 形成行动 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 复盘标的与说明 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 🚀 提升行动 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 1 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 参与后续派生 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 2 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 保留但不派生 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 计划与交付要求 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 加入执行任务 | FamilyPact、Violation、补救Project |
| family-editor | closure-review | 编排后续成长计划 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | ⚙️ 自定义配置 | FamilyPact、Violation、补救Project |
| family-editor | status-text-closure-custom | 已留痕 1 次 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 实际字段 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 自主定义 · 按需交付 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 任务说明 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 📋 自定义字段 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 实际观察 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 文字 · 必填 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 完成次数 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 数字 · 必填 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 是否尝试 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 是 / 否 · 必填 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 观察日期 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 日期 · 必填 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 计划与交付要求 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 加入执行任务 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 执行时填写实际结果 | FamilyPact、Violation、补救Project |
| family-editor | closure-custom | 4 个字段 | FamilyPact、Violation、补救Project |
| family-editor | closure-text | 📄 简单文本 | FamilyPact、Violation、补救Project |
| family-editor | status-text-closure-text | 已读 0 次 | FamilyPact、Violation、补救Project |
| family-editor | closure-text | 资料便签 | FamilyPact、Violation、补救Project |
| family-editor | closure-text | 记录想法 · 沉淀资料 | FamilyPact、Violation、补救Project |
| family-editor | closure-text | 便签设置 | FamilyPact、Violation、补救Project |
| family-editor | closure-text | 编辑名称 | FamilyPact、Violation、补救Project |
| family-editor | closure-text | 资料与想法 · 不计入履约 | FamilyPact、Violation、补救Project |
| family-editor | closure-text | 规划便签 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | ⚡ 攻坚实训 | FamilyPact、Violation、补救Project |
| family-editor | status-text-node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 尚未执行 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 本次实际产生的后续行动 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 聚焦难点 · 专项练习 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 核心攻坚要领 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | ⏱ 计划专注 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 分钟 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | ◷ | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 📦 交付要求 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 执行时提交照片物证 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 计划与交付要求 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 加入执行任务 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 在执行中心计时与交付 | FamilyPact、Violation、补救Project |
| family-editor | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 专注 20 分钟 | FamilyPact、Violation、补救Project |
| family-editor | tertiary-minimap-toggle-btn | 地图 | FamilyPact、Violation、补救Project |
| family-editor | domain-family-editor | 亲子家庭档案与公约 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 📂 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 左侧栏 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | ◀️ | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 返回甘特 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 👦 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 晨曦岛民 · 齐天 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-crumb-leaf | 闭环字段审查 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 🔥 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 连续 1 天 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 📈 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 履约 90% | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | ➕ | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 新增节点 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 🖼️ | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 插入图片 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | ➕ | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 放大 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | ➖ | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 缩小 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-zoom-badge | 100% | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 还原 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | ⛶ | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 适应画布 | FamilyPact、Violation、补救Project |
| signed-family | btn-tertiary-children-follow | 🧲 | FamilyPact、Violation、补救Project |
| signed-family | btn-tertiary-children-follow | 子级跟随 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | ↩️ | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 撤销 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | ↪️ | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 重做 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 🗑️ | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 删除节点 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 🔍 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 搜索节点 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | ▦ | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 网格排布 | FamilyPact、Violation、补救Project |
| signed-family | btn-tool-minimize-all | 🗜️ | FamilyPact、Violation、补救Project |
| signed-family | btn-tool-minimize-all | 全部折叠 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 节点数: | FamilyPact、Violation、补救Project |
| signed-family | tertiary-stat-node-count | 7 节点 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 📑 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-unified-topbar | 右侧栏 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 🎯 目标分解 | FamilyPact、Violation、补救Project |
| signed-family | status-text-closure-goal | 已留痕 1 次 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 目标验收 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 量化目标 · 明确验收 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 目标说明 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 🎯 量化通关指标 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 正确率 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | ≥90% | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 📋 验收标准 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 📅 期望完成 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 计划与交付要求 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 加入执行任务 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 规划目标与验收标准 | FamilyPact、Violation、补救Project |
| signed-family | closure-goal | 在执行页验收 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | ⚡ 攻坚实训 | FamilyPact、Violation、补救Project |
| signed-family | status-text-closure-drill | 已留痕 1 次 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | 实训要领 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | 聚焦难点 · 专项练习 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | 核心攻坚要领 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | ⏱ 计划专注 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | 分钟 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | ◷ | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | 📦 交付要求 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | 完成规定练习 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | 计划与交付要求 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | 加入执行任务 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | 在执行中心计时与交付 | FamilyPact、Violation、补救Project |
| signed-family | closure-drill | 专注 1 分钟 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 🌿 习惯践行 | FamilyPact、Violation、补救Project |
| signed-family | status-text-closure-habit | 已留痕 1 次 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 防守清单 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 守住日常 · 逐项落实 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 践行初衷 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 🛡 防守清单 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | □ | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 必需行动 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | □ | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 选填行动 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 计划与交付要求 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 加入执行任务 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 执行时逐项核验 | FamilyPact、Violation、补救Project |
| signed-family | closure-habit | 2 项行动 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 📝 评估复盘 | FamilyPact、Violation、补救Project |
| signed-family | status-text-closure-review | 已留痕 1 次 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 行动复盘 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 回看过程 · 形成行动 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 复盘标的与说明 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 🚀 提升行动 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 1 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 参与后续派生 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 2 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 保留但不派生 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 计划与交付要求 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 加入执行任务 | FamilyPact、Violation、补救Project |
| signed-family | closure-review | 编排后续成长计划 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | ⚙️ 自定义配置 | FamilyPact、Violation、补救Project |
| signed-family | status-text-closure-custom | 已留痕 1 次 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 实际字段 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 自主定义 · 按需交付 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 任务说明 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 📋 自定义字段 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 实际观察 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 文字 · 必填 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 完成次数 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 数字 · 必填 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 是否尝试 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 是 / 否 · 必填 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 观察日期 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 日期 · 必填 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 计划与交付要求 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 加入执行任务 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 执行时填写实际结果 | FamilyPact、Violation、补救Project |
| signed-family | closure-custom | 4 个字段 | FamilyPact、Violation、补救Project |
| signed-family | closure-text | 📄 简单文本 | FamilyPact、Violation、补救Project |
| signed-family | status-text-closure-text | 已读 0 次 | FamilyPact、Violation、补救Project |
| signed-family | closure-text | 资料便签 | FamilyPact、Violation、补救Project |
| signed-family | closure-text | 记录想法 · 沉淀资料 | FamilyPact、Violation、补救Project |
| signed-family | closure-text | 便签设置 | FamilyPact、Violation、补救Project |
| signed-family | closure-text | 编辑名称 | FamilyPact、Violation、补救Project |
| signed-family | closure-text | 资料与想法 · 不计入履约 | FamilyPact、Violation、补救Project |
| signed-family | closure-text | 规划便签 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | ⚡ 攻坚实训 | FamilyPact、Violation、补救Project |
| signed-family | status-text-node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 尚未执行 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 本次实际产生的后续行动 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 聚焦难点 · 专项练习 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 核心攻坚要领 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | ⏱ 计划专注 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 分钟 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | ◷ | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 📦 交付要求 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 执行时提交照片物证 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 计划与交付要求 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 11/15 · 一次性 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 加入执行任务 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 在执行中心计时与交付 | FamilyPact、Violation、补救Project |
| signed-family | node-f7186da0-680c-4ec9-85af-98d0ef190f26 | 专注 20 分钟 | FamilyPact、Violation、补救Project |
| signed-family | tertiary-minimap-toggle-btn | 地图 | FamilyPact、Violation、补救Project |
| signed-family | family-pact-modal | 亲子公约 · 第1版 | FamilyPact、Violation、补救Project |
| signed-family | family-pact-modal | 孩子：审查孩子；监护人：共同核验人 | FamilyPact、Violation、补救Project |
| signed-family | family-pact-modal | 签署时间：2026-11-15T02:46:35.952Z | FamilyPact、Violation、补救Project |
| signed-family | family-pact-modal | 每天按约定整理真实资料 | FamilyPact、Violation、补救Project |
| signed-family | pact-violation-console | 亲子共同确认 · 违约事实与补救 | FamilyPact、Violation、补救Project |
| journal-saved | ws-unified-topbar | 📂 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-unified-topbar | 左侧栏 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-unified-topbar | ◀️ | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-unified-topbar | 返回大厅 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-unified-topbar | 👦 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-unified-topbar | 晨曦岛民 · 齐天 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-crumb-pavilion-name | 📝 每日随记 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-unified-topbar | 🔥 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-unified-topbar | 连续 1 天 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-unified-topbar | 📈 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-unified-topbar | 履约 90% | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-top-action-btn | ✍️ | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-top-action-btn | 书写随笔 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-unified-topbar | 📑 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-unified-topbar | 右侧栏 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-focus-pill | 今日累计专注：1 分钟 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 自动归集 #1 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 🕒 10:46 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 自动归集 #2 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 🕒 10:46 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 自动归集 #3 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 🕒 10:46 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 自动归集 #4 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 🕒 10:46 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 自动归集 #5 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 🕒 10:46 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 自动归集 #6 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 🕒 10:46 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 自动归集 #7 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 🕒 10:46 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 自动归集 #8 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 🕒 10:46 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 自动归集 #9 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 🕒 10:46 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 自动归集 #10 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-today-autologs-grid | 🕒 10:46 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-journal-editor-card | ⚡ 精力: | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-energy-stars-box | ★★★★★ | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-journal-editor-card | 心流晴雨表: | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-journal-editor-card | 💡 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-journal-editor-card | 📸 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-journal-editor-card | 原件保存到当前知识库 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-history-section | 📜 往期双轨随记卷宗长卷 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-history-section | 自传体成长印记 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-history-count | 0 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-history-list | 📅 2026-11-15 · happy | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| journal-saved | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | NOTE_STATE当日草稿、Journal历史、DomainEvent |
| settings-bg | ws-unified-topbar | 📂 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-unified-topbar | 左侧栏 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-unified-topbar | ◀️ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-unified-topbar | 返回大厅 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-unified-topbar | 👦 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-unified-topbar | 晨曦岛民 · 齐天 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-crumb-pavilion-name | 📝 每日随记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-unified-topbar | 🔥 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-unified-topbar | 连续 1 天 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-unified-topbar | 📈 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-unified-topbar | 履约 90% | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-top-action-btn | ✍️ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-top-action-btn | 书写随笔 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-unified-topbar | 📑 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-unified-topbar | 右侧栏 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-focus-pill | 今日累计专注：1 分钟 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 自动归集 #1 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 自动归集 #2 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 自动归集 #3 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 自动归集 #4 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 自动归集 #5 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 自动归集 #6 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 自动归集 #7 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 自动归集 #8 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 自动归集 #9 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 自动归集 #10 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-journal-editor-card | ⚡ 精力: | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-energy-stars-box | ★★★★★ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-journal-editor-card | 心流晴雨表: | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-journal-editor-card | 💡 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-journal-editor-card | 📸 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-journal-editor-card | 原件保存到当前知识库 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-history-section | 📜 往期双轨随记卷宗长卷 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-history-section | 自传体成长印记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-history-count | 0 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-history-list | 📅 2026-11-15 · happy | USER_PROFILE_STATE.settings / 插件设置 |
| settings-bg | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | 📂 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | 左侧栏 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | ◀️ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | 返回大厅 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | 👦 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | 晨曦岛民 · 齐天 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-crumb-pavilion-name | 📝 每日随记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | 🔥 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | 连续 1 天 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | 📈 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | 履约 90% | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-top-action-btn | ✍️ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-top-action-btn | 书写随笔 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | 📑 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-unified-topbar | 右侧栏 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-focus-pill | 今日累计专注：1 分钟 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 自动归集 #1 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 自动归集 #2 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 自动归集 #3 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 自动归集 #4 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 自动归集 #5 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 自动归集 #6 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 自动归集 #7 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 自动归集 #8 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 自动归集 #9 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 自动归集 #10 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-journal-editor-card | ⚡ 精力: | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-energy-stars-box | ★★★★★ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-journal-editor-card | 心流晴雨表: | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-journal-editor-card | 💡 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-journal-editor-card | 📸 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-journal-editor-card | 原件保存到当前知识库 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-history-section | 📜 往期双轨随记卷宗长卷 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-history-section | 自传体成长印记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-history-count | 0 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-history-list | 📅 2026-11-15 · happy | USER_PROFILE_STATE.settings / 插件设置 |
| settings-char | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | 📂 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | 左侧栏 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | ◀️ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | 返回大厅 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | 👦 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | 晨曦岛民 · 齐天 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-crumb-pavilion-name | 📝 每日随记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | 🔥 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | 连续 1 天 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | 📈 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | 履约 90% | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-top-action-btn | ✍️ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-top-action-btn | 书写随笔 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | 📑 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-unified-topbar | 右侧栏 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-focus-pill | 今日累计专注：1 分钟 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 自动归集 #1 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 自动归集 #2 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 自动归集 #3 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 自动归集 #4 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 自动归集 #5 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 自动归集 #6 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 自动归集 #7 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 自动归集 #8 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 自动归集 #9 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 自动归集 #10 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-journal-editor-card | ⚡ 精力: | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-energy-stars-box | ★★★★★ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-journal-editor-card | 心流晴雨表: | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-journal-editor-card | 💡 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-journal-editor-card | 📸 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-journal-editor-card | 原件保存到当前知识库 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-history-section | 📜 往期双轨随记卷宗长卷 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-history-section | 自传体成长印记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-history-count | 0 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-history-list | 📅 2026-11-15 · happy | USER_PROFILE_STATE.settings / 插件设置 |
| settings-env | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | 📂 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | 左侧栏 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | ◀️ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | 返回大厅 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | 👦 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | 晨曦岛民 · 齐天 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-crumb-pavilion-name | 📝 每日随记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | 🔥 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | 连续 1 天 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | 📈 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | 履约 90% | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-top-action-btn | ✍️ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-top-action-btn | 书写随笔 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | 📑 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-unified-topbar | 右侧栏 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-focus-pill | 今日累计专注：1 分钟 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 自动归集 #1 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 自动归集 #2 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 自动归集 #3 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 自动归集 #4 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 自动归集 #5 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 自动归集 #6 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 自动归集 #7 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 自动归集 #8 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 自动归集 #9 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 自动归集 #10 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-today-autologs-grid | 🕒 10:46 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-journal-editor-card | ⚡ 精力: | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-energy-stars-box | ★★★★★ | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-journal-editor-card | 心流晴雨表: | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-journal-editor-card | 💡 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-journal-editor-card | 📸 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-journal-editor-card | 原件保存到当前知识库 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-history-section | 📜 往期双轨随记卷宗长卷 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-history-section | 自传体成长印记 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-history-count | 0 | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-history-list | 📅 2026-11-15 · happy | USER_PROFILE_STATE.settings / 插件设置 |
| settings-immersive | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | USER_PROFILE_STATE.settings / 插件设置 |
| bounty-empty | ws-unified-topbar | 📂 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-unified-topbar | 左侧栏 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-unified-topbar | ◀️ | 独立Bounty与家长核验记录 |
| bounty-empty | ws-unified-topbar | 返回大厅 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-unified-topbar | 👦 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-unified-topbar | 晨曦岛民 · 齐天 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-crumb-pavilion-name | 📝 每日随记 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-unified-topbar | 🔥 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-unified-topbar | 连续 1 天 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-unified-topbar | 📈 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-unified-topbar | 履约 90% | 独立Bounty与家长核验记录 |
| bounty-empty | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-top-action-btn | ✍️ | 独立Bounty与家长核验记录 |
| bounty-empty | ws-top-action-btn | 书写随笔 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-unified-topbar | 📑 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-unified-topbar | 右侧栏 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | 独立Bounty与家长核验记录 |
| bounty-empty | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | 独立Bounty与家长核验记录 |
| bounty-empty | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-focus-pill | 今日累计专注：1 分钟 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 自动归集 #1 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 自动归集 #2 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 自动归集 #3 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 自动归集 #4 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 自动归集 #5 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 自动归集 #6 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 自动归集 #7 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 自动归集 #8 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 自动归集 #9 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 自动归集 #10 | 独立Bounty与家长核验记录 |
| bounty-empty | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-empty | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | 独立Bounty与家长核验记录 |
| bounty-empty | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | 独立Bounty与家长核验记录 |
| bounty-empty | note-journal-editor-card | ⚡ 精力: | 独立Bounty与家长核验记录 |
| bounty-empty | note-energy-stars-box | ★★★★★ | 独立Bounty与家长核验记录 |
| bounty-empty | note-journal-editor-card | 心流晴雨表: | 独立Bounty与家长核验记录 |
| bounty-empty | note-journal-editor-card | 💡 | 独立Bounty与家长核验记录 |
| bounty-empty | note-journal-editor-card | 📸 | 独立Bounty与家长核验记录 |
| bounty-empty | note-journal-editor-card | 原件保存到当前知识库 | 独立Bounty与家长核验记录 |
| bounty-empty | note-history-section | 📜 往期双轨随记卷宗长卷 | 独立Bounty与家长核验记录 |
| bounty-empty | note-history-section | 自传体成长印记 | 独立Bounty与家长核验记录 |
| bounty-empty | note-history-count | 0 | 独立Bounty与家长核验记录 |
| bounty-empty | note-history-list | 📅 2026-11-15 · happy | 独立Bounty与家长核验记录 |
| bounty-empty | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | 独立Bounty与家长核验记录 |
| bounty-empty | bounty-dialog-title | 🏅 亲子悬赏契约 | 独立Bounty与家长核验记录 |
| bounty-empty | bounty-modal-backdrop | 一起约定挑战，用真实过程见证成长 | 独立Bounty与家长核验记录 |
| bounty-empty | bounty-modal-status-badge | ⚪ 暂无生效悬赏 | 独立Bounty与家长核验记录 |
| bounty-empty | bounty-publish-form-box | 约定一个新挑战 | 独立Bounty与家长核验记录 |
| bounty-empty | domain-bounty-history | 契约记录 | 独立Bounty与家长核验记录 |
| bounty-empty | bounty-modal-backdrop | 真实交付 · 共同见证 | 独立Bounty与家长核验记录 |
| inquiry | ws-unified-topbar | 📂 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-unified-topbar | 左侧栏 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-unified-topbar | ◀️ | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-unified-topbar | 返回大厅 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-unified-topbar | 👦 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-unified-topbar | 晨曦岛民 · 齐天 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-crumb-pavilion-name | 📝 每日随记 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-unified-topbar | 🔥 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-unified-topbar | 连续 1 天 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-unified-topbar | 📈 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-unified-topbar | 履约 90% | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-top-action-btn | ✍️ | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-top-action-btn | 书写随笔 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-unified-topbar | 📑 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-unified-topbar | 右侧栏 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | Inquiry → linkedProjectId → 实际进度 |
| inquiry | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-focus-pill | 今日累计专注：1 分钟 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 自动归集 #1 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 🕒 10:46 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 自动归集 #2 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 🕒 10:46 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 自动归集 #3 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 🕒 10:46 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 自动归集 #4 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 🕒 10:46 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 自动归集 #5 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 🕒 10:46 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 自动归集 #6 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 🕒 10:46 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 自动归集 #7 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 🕒 10:46 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 自动归集 #8 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 🕒 10:46 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 自动归集 #9 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 🕒 10:46 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 自动归集 #10 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-today-autologs-grid | 🕒 10:46 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-journal-editor-card | ⚡ 精力: | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-energy-stars-box | ★★★★★ | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-journal-editor-card | 心流晴雨表: | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-journal-editor-card | 💡 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-journal-editor-card | 📸 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-journal-editor-card | 原件保存到当前知识库 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-history-section | 📜 往期双轨随记卷宗长卷 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-history-section | 自传体成长印记 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-history-count | 0 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-history-list | 📅 2026-11-15 · happy | Inquiry → linkedProjectId → 实际进度 |
| inquiry | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | inquiry-pool-modal | ❓ | Inquiry → linkedProjectId → 实际进度 |
| inquiry | inquiry-pool-modal | 少年修身问道池 · 圣贤智慧引路 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | inquiry-pool-modal | 问道池说明 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | inquiry-pool-modal | 📜 问道池待化解困惑与古籍研读推荐 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | inquiry-count-badge | 0 个待规划困惑 | Inquiry → linkedProjectId → 实际进度 |
| inquiry | inquiry-items-list | 还没有保存困惑 | Inquiry → linkedProjectId → 实际进度 |
| family | ws-unified-topbar | 📂 | FamilyPact、Violation、补救Project |
| family | ws-unified-topbar | 左侧栏 | FamilyPact、Violation、补救Project |
| family | ws-unified-topbar | ◀️ | FamilyPact、Violation、补救Project |
| family | ws-unified-topbar | 返回大厅 | FamilyPact、Violation、补救Project |
| family | ws-unified-topbar | 👦 | FamilyPact、Violation、补救Project |
| family | ws-unified-topbar | 晨曦岛民 · 齐天 | FamilyPact、Violation、补救Project |
| family | ws-crumb-pavilion-name | 📝 每日随记 | FamilyPact、Violation、补救Project |
| family | ws-unified-topbar | 🔥 | FamilyPact、Violation、补救Project |
| family | ws-unified-topbar | 连续 1 天 | FamilyPact、Violation、补救Project |
| family | ws-unified-topbar | 📈 | FamilyPact、Violation、补救Project |
| family | ws-unified-topbar | 履约 90% | FamilyPact、Violation、补救Project |
| family | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | FamilyPact、Violation、补救Project |
| family | ws-top-action-btn | ✍️ | FamilyPact、Violation、补救Project |
| family | ws-top-action-btn | 书写随笔 | FamilyPact、Violation、补救Project |
| family | ws-unified-topbar | 📑 | FamilyPact、Violation、补救Project |
| family | ws-unified-topbar | 右侧栏 | FamilyPact、Violation、补救Project |
| family | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | FamilyPact、Violation、补救Project |
| family | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | FamilyPact、Violation、补救Project |
| family | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | FamilyPact、Violation、补救Project |
| family | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | FamilyPact、Violation、补救Project |
| family | note-today-focus-pill | 今日累计专注：1 分钟 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 自动归集 #1 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 🕒 10:46 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 自动归集 #2 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 🕒 10:46 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 自动归集 #3 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 🕒 10:46 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 自动归集 #4 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 🕒 10:46 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 自动归集 #5 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 🕒 10:46 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 自动归集 #6 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 🕒 10:46 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 自动归集 #7 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 🕒 10:46 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 自动归集 #8 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 🕒 10:46 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 自动归集 #9 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 🕒 10:46 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 自动归集 #10 | FamilyPact、Violation、补救Project |
| family | note-today-autologs-grid | 🕒 10:46 | FamilyPact、Violation、补救Project |
| family | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | FamilyPact、Violation、补救Project |
| family | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | FamilyPact、Violation、补救Project |
| family | note-journal-editor-card | ⚡ 精力: | FamilyPact、Violation、补救Project |
| family | note-energy-stars-box | ★★★★★ | FamilyPact、Violation、补救Project |
| family | note-journal-editor-card | 心流晴雨表: | FamilyPact、Violation、补救Project |
| family | note-journal-editor-card | 💡 | FamilyPact、Violation、补救Project |
| family | note-journal-editor-card | 📸 | FamilyPact、Violation、补救Project |
| family | note-journal-editor-card | 原件保存到当前知识库 | FamilyPact、Violation、补救Project |
| family | note-history-section | 📜 往期双轨随记卷宗长卷 | FamilyPact、Violation、补救Project |
| family | note-history-section | 自传体成长印记 | FamilyPact、Violation、补救Project |
| family | note-history-count | 0 | FamilyPact、Violation、补救Project |
| family | note-history-list | 📅 2026-11-15 · happy | FamilyPact、Violation、补救Project |
| family | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | FamilyPact、Violation、补救Project |
| family | family-pact-modal | 亲子公约 · 第1版 | FamilyPact、Violation、补救Project |
| family | family-pact-modal | 孩子：审查孩子；监护人：共同核验人 | FamilyPact、Violation、补救Project |
| family | family-pact-modal | 签署时间：2026-11-15T02:46:35.952Z | FamilyPact、Violation、补救Project |
| family | family-pact-modal | 每天按约定整理真实资料 | FamilyPact、Violation、补救Project |
| family | pact-violation-console | 亲子共同确认 · 违约事实与补救 | FamilyPact、Violation、补救Project |
| classic | ws-unified-topbar | 📂 | 本地经典参考资料 |
| classic | ws-unified-topbar | 左侧栏 | 本地经典参考资料 |
| classic | ws-unified-topbar | ◀️ | 本地经典参考资料 |
| classic | ws-unified-topbar | 返回大厅 | 本地经典参考资料 |
| classic | ws-unified-topbar | 👦 | 本地经典参考资料 |
| classic | ws-unified-topbar | 晨曦岛民 · 齐天 | 本地经典参考资料 |
| classic | ws-crumb-pavilion-name | 📝 每日随记 | 本地经典参考资料 |
| classic | ws-unified-topbar | 🔥 | 本地经典参考资料 |
| classic | ws-unified-topbar | 连续 1 天 | 本地经典参考资料 |
| classic | ws-unified-topbar | 📈 | 本地经典参考资料 |
| classic | ws-unified-topbar | 履约 90% | 本地经典参考资料 |
| classic | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | 本地经典参考资料 |
| classic | ws-top-action-btn | ✍️ | 本地经典参考资料 |
| classic | ws-top-action-btn | 书写随笔 | 本地经典参考资料 |
| classic | ws-unified-topbar | 📑 | 本地经典参考资料 |
| classic | ws-unified-topbar | 右侧栏 | 本地经典参考资料 |
| classic | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | 本地经典参考资料 |
| classic | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | 本地经典参考资料 |
| classic | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | 本地经典参考资料 |
| classic | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | 本地经典参考资料 |
| classic | note-today-focus-pill | 今日累计专注：1 分钟 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 自动归集 #1 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 🕒 10:46 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 自动归集 #2 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 🕒 10:46 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 自动归集 #3 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 🕒 10:46 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 自动归集 #4 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 🕒 10:46 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 自动归集 #5 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 🕒 10:46 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 自动归集 #6 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 🕒 10:46 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 自动归集 #7 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 🕒 10:46 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 自动归集 #8 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 🕒 10:46 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 自动归集 #9 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 🕒 10:46 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 自动归集 #10 | 本地经典参考资料 |
| classic | note-today-autologs-grid | 🕒 10:46 | 本地经典参考资料 |
| classic | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | 本地经典参考资料 |
| classic | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | 本地经典参考资料 |
| classic | note-journal-editor-card | ⚡ 精力: | 本地经典参考资料 |
| classic | note-energy-stars-box | ★★★★★ | 本地经典参考资料 |
| classic | note-journal-editor-card | 心流晴雨表: | 本地经典参考资料 |
| classic | note-journal-editor-card | 💡 | 本地经典参考资料 |
| classic | note-journal-editor-card | 📸 | 本地经典参考资料 |
| classic | note-journal-editor-card | 原件保存到当前知识库 | 本地经典参考资料 |
| classic | note-history-section | 📜 往期双轨随记卷宗长卷 | 本地经典参考资料 |
| classic | note-history-section | 自传体成长印记 | 本地经典参考资料 |
| classic | note-history-count | 0 | 本地经典参考资料 |
| classic | note-history-list | 📅 2026-11-15 · happy | 本地经典参考资料 |
| classic | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 🏛️ | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 《大学》三纲八目修身哲学全息解构馆 | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 🌟 终极追求：三纲领 (Three Core Principles) | 本地经典参考资料 |
| classic | daxue-philosophy-modal | ① 明明德 | 本地经典参考资料 |
| classic | daxue-philosophy-modal | ② 亲民 | 本地经典参考资料 |
| classic | daxue-philosophy-modal | ③ 止于至善 | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 🪜 实践阶梯：八条目与青少儿现代成长映射 | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 【内圣之基 · 认知与心性修持】 | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 1. 格物： | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 2. 致知： | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 3. 诚意： | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 4. 正心： | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 【外王之成 · 律己与天下经纶】 | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 5. 修身： | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 6. 齐家： | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 7. 治国： | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 8. 平天下： | 本地经典参考资料 |
| classic | daxue-philosophy-modal | 💡 个人行为规范全部条款均严格依据此八目体系确立 | 本地经典参考资料 |
| highlight | ws-unified-topbar | 📂 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-unified-topbar | 左侧栏 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-unified-topbar | ◀️ | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-unified-topbar | 返回大厅 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-unified-topbar | 👦 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-unified-topbar | 晨曦岛民 · 齐天 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-crumb-pavilion-name | 📝 每日随记 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-unified-topbar | 🔥 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-unified-topbar | 连续 1 天 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-unified-topbar | 📈 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-unified-topbar | 履约 90% | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-top-action-btn | ✍️ | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-top-action-btn | 书写随笔 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-unified-topbar | 📑 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-unified-topbar | 右侧栏 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | Achievement、源记录 / 实测、实际原件 |
| highlight | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-focus-pill | 今日累计专注：1 分钟 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 自动归集 #1 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 🕒 10:46 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 自动归集 #2 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 🕒 10:46 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 自动归集 #3 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 🕒 10:46 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 自动归集 #4 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 🕒 10:46 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 自动归集 #5 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 🕒 10:46 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 自动归集 #6 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 🕒 10:46 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 自动归集 #7 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 🕒 10:46 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 自动归集 #8 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 🕒 10:46 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 自动归集 #9 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 🕒 10:46 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 自动归集 #10 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-today-autologs-grid | 🕒 10:46 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-journal-editor-card | ⚡ 精力: | Achievement、源记录 / 实测、实际原件 |
| highlight | note-energy-stars-box | ★★★★★ | Achievement、源记录 / 实测、实际原件 |
| highlight | note-journal-editor-card | 心流晴雨表: | Achievement、源记录 / 实测、实际原件 |
| highlight | note-journal-editor-card | 💡 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-journal-editor-card | 📸 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-journal-editor-card | 原件保存到当前知识库 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-history-section | 📜 往期双轨随记卷宗长卷 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-history-section | 自传体成长印记 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-history-count | 0 | Achievement、源记录 / 实测、实际原件 |
| highlight | note-history-list | 📅 2026-11-15 · happy | Achievement、源记录 / 实测、实际原件 |
| highlight | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | Achievement、源记录 / 实测、实际原件 |
| highlight | register-accidental-achievement-modal | ✨ | Achievement、源记录 / 实测、实际原件 |
| highlight | register-accidental-achievement-modal | 记录一项生活/学习偶然成就 | Achievement、源记录 / 实测、实际原件 |
| highlight | register-accidental-achievement-modal | ⚡ 快速体验样例： | Achievement、源记录 / 实测、实际原件 |
| highlight | register-accidental-achievement-modal | 原件保存到当前知识库 | Achievement、源记录 / 实测、实际原件 |
| bounty-published | ws-unified-topbar | 📂 | 独立Bounty与家长核验记录 |
| bounty-published | ws-unified-topbar | 左侧栏 | 独立Bounty与家长核验记录 |
| bounty-published | ws-unified-topbar | ◀️ | 独立Bounty与家长核验记录 |
| bounty-published | ws-unified-topbar | 返回大厅 | 独立Bounty与家长核验记录 |
| bounty-published | ws-unified-topbar | 👦 | 独立Bounty与家长核验记录 |
| bounty-published | ws-unified-topbar | 晨曦岛民 · 齐天 | 独立Bounty与家长核验记录 |
| bounty-published | ws-crumb-pavilion-name | 📝 每日随记 | 独立Bounty与家长核验记录 |
| bounty-published | ws-unified-topbar | 🔥 | 独立Bounty与家长核验记录 |
| bounty-published | ws-unified-topbar | 连续 1 天 | 独立Bounty与家长核验记录 |
| bounty-published | ws-unified-topbar | 📈 | 独立Bounty与家长核验记录 |
| bounty-published | ws-unified-topbar | 履约 90% | 独立Bounty与家长核验记录 |
| bounty-published | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | 独立Bounty与家长核验记录 |
| bounty-published | ws-top-action-btn | ✍️ | 独立Bounty与家长核验记录 |
| bounty-published | ws-top-action-btn | 书写随笔 | 独立Bounty与家长核验记录 |
| bounty-published | ws-unified-topbar | 📑 | 独立Bounty与家长核验记录 |
| bounty-published | ws-unified-topbar | 右侧栏 | 独立Bounty与家长核验记录 |
| bounty-published | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | 独立Bounty与家长核验记录 |
| bounty-published | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | 独立Bounty与家长核验记录 |
| bounty-published | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | 独立Bounty与家长核验记录 |
| bounty-published | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-focus-pill | 今日累计专注：1 分钟 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 自动归集 #1 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 自动归集 #2 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 自动归集 #3 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 自动归集 #4 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 自动归集 #5 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 自动归集 #6 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 自动归集 #7 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 自动归集 #8 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 自动归集 #9 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 自动归集 #10 | 独立Bounty与家长核验记录 |
| bounty-published | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-published | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | 独立Bounty与家长核验记录 |
| bounty-published | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | 独立Bounty与家长核验记录 |
| bounty-published | note-journal-editor-card | ⚡ 精力: | 独立Bounty与家长核验记录 |
| bounty-published | note-energy-stars-box | ★★★★★ | 独立Bounty与家长核验记录 |
| bounty-published | note-journal-editor-card | 心流晴雨表: | 独立Bounty与家长核验记录 |
| bounty-published | note-journal-editor-card | 💡 | 独立Bounty与家长核验记录 |
| bounty-published | note-journal-editor-card | 📸 | 独立Bounty与家长核验记录 |
| bounty-published | note-journal-editor-card | 原件保存到当前知识库 | 独立Bounty与家长核验记录 |
| bounty-published | note-history-section | 📜 往期双轨随记卷宗长卷 | 独立Bounty与家长核验记录 |
| bounty-published | note-history-section | 自传体成长印记 | 独立Bounty与家长核验记录 |
| bounty-published | note-history-count | 0 | 独立Bounty与家长核验记录 |
| bounty-published | note-history-list | 📅 2026-11-15 · happy | 独立Bounty与家长核验记录 |
| bounty-published | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-dialog-title | 🏅 亲子悬赏契约 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-modal-backdrop | 一起约定挑战，用真实过程见证成长 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-modal-status-badge | 📣 新悬赏待揭榜 · 7天期 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-modal-meta | 🎯 关联规划：校史馆 · 学业攻坚 \| 👨‍👩‍👦 家长发起悬赏 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-modal-title | 《逐页悬赏来源》 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-modal-contract-no | 立约 2026-11-15 · 到期 2026-11-21 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-modal-body | 🎁 约定心愿 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-modal-reward | 共同户外观察 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-modal-body | 📋 验收标准 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-modal-criteria | 保留实际过程与原件 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-modal-body | ① 家长立约 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-stage2-status | ⏳ 待孩子揭榜 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-stage3-status | ⚪ 待应战 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-stage2-desc | 揭榜后开始挑战；完成后提交真实物证。 | 独立Bounty与家长核验记录 |
| bounty-published | domain-bounty-history | 契约记录 | 独立Bounty与家长核验记录 |
| bounty-published | domain-bounty-history | 逐页悬赏来源 | 独立Bounty与家长核验记录 |
| bounty-published | bounty-modal-backdrop | 真实交付 · 共同见证 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | 📂 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | 左侧栏 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | ◀️ | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | 返回大厅 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | 👦 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | 晨曦岛民 · 齐天 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-crumb-pavilion-name | 📝 每日随记 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | 🔥 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | 连续 1 天 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | 📈 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | 履约 90% | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-top-action-btn | ✍️ | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-top-action-btn | 书写随笔 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | 📑 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-unified-topbar | 右侧栏 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | 独立Bounty与家长核验记录 |
| bounty-accepted | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-focus-pill | 今日累计专注：1 分钟 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 自动归集 #1 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 自动归集 #2 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 自动归集 #3 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 自动归集 #4 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 自动归集 #5 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 自动归集 #6 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 自动归集 #7 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 自动归集 #8 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 自动归集 #9 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 自动归集 #10 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-today-autologs-grid | 🕒 10:46 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-journal-editor-card | ⚡ 精力: | 独立Bounty与家长核验记录 |
| bounty-accepted | note-energy-stars-box | ★★★★★ | 独立Bounty与家长核验记录 |
| bounty-accepted | note-journal-editor-card | 心流晴雨表: | 独立Bounty与家长核验记录 |
| bounty-accepted | note-journal-editor-card | 💡 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-journal-editor-card | 📸 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-journal-editor-card | 原件保存到当前知识库 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-history-section | 📜 往期双轨随记卷宗长卷 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-history-section | 自传体成长印记 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-history-count | 0 | 独立Bounty与家长核验记录 |
| bounty-accepted | note-history-list | 📅 2026-11-15 · happy | 独立Bounty与家长核验记录 |
| bounty-accepted | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-dialog-title | 🏅 亲子悬赏契约 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-backdrop | 一起约定挑战，用真实过程见证成长 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-status-badge | ⚡ 已揭榜攻坚中 · 7天内有效 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-meta | 🎯 关联规划：校史馆 · 学业攻坚 \| 👨‍👩‍👦 家长发起悬赏 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-title | 《逐页悬赏来源》 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-contract-no | 立约 2026-11-15 · 到期 2026-11-21 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-body | 🎁 约定心愿 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-reward | 共同户外观察 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-body | 📋 验收标准 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-criteria | 保留实际过程与原件 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-body | ① 家长立约 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-stage2-status | ⚡ 正在攻坚 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-stage3-status | 🟡 待核验 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-stage2-desc | 按约定完成挑战并提交照片或视频，等待共同验收。 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-body | 📸 留下挑战过程 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-media-controls | 原件保存到当前知识库 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-media-list | 还没有提交物证 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-body | 🤝 共同验收 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-parent-stamp | 🟡 待家长核准盖戳 | 独立Bounty与家长核验记录 |
| bounty-accepted | domain-bounty-history | 契约记录 | 独立Bounty与家长核验记录 |
| bounty-accepted | domain-bounty-history | 逐页悬赏来源 | 独立Bounty与家长核验记录 |
| bounty-accepted | bounty-modal-backdrop | 真实交付 · 共同见证 | 独立Bounty与家长核验记录 |
| streak-protection | ws-unified-topbar | 📂 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-unified-topbar | 左侧栏 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-unified-topbar | ◀️ | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-unified-topbar | 返回大厅 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-unified-topbar | 👦 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-unified-topbar | 晨曦岛民 · 齐天 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-crumb-pavilion-name | 📝 每日随记 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-unified-topbar | 🔥 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-unified-topbar | 连续 1 天 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-unified-topbar | 📈 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-unified-topbar | 履约 90% | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-crumb-view-leaf | 🏛️ 时序心流双轨日记 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-top-action-btn | ✍️ | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-top-action-btn | 书写随笔 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-unified-topbar | 📑 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-unified-topbar | 右侧栏 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-specialized-container | 📝 每日随记 · 时序心流双轨日记簿 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-specialized-container | 双轨自动汇流 · 真实影像留痕 | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-specialized-container | 🛤️ 上半轨：今日真实客观行为流水（共 10 条） | 有效记录、共同确认违约、批准保护 |
| streak-protection | ws-specialized-container | 🔒 系统自动聚合 · 实时同步 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-focus-pill | 今日累计专注：1 分钟 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 自动归集 #1 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 🕒 10:46 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 自动归集 #2 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 🕒 10:46 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 自动归集 #3 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 🕒 10:46 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 自动归集 #4 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 🕒 10:46 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 自动归集 #5 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 🕒 10:46 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 自动归集 #6 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 🕒 10:46 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 自动归集 #7 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 🕒 10:46 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 自动归集 #8 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 🕒 10:46 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 自动归集 #9 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 🕒 10:46 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 自动归集 #10 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-today-autologs-grid | 🕒 10:46 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-journal-editor-card | ✍️ 下半轨：今日主观心流日记与生活留痕 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-journal-editor-card | ✨ 灵感随笔 · 照片视频存证 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-journal-editor-card | ⚡ 精力: | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-energy-stars-box | ★★★★★ | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-journal-editor-card | 心流晴雨表: | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-journal-editor-card | 💡 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-journal-editor-card | 📸 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-journal-editor-card | 原件保存到当前知识库 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-history-section | 📜 往期双轨随记卷宗长卷 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-history-section | 自传体成长印记 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-history-count | 0 | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-history-list | 📅 2026-11-15 · happy | 有效记录、共同确认违约、批准保护 |
| streak-protection | note-history-list | 记录这次闭环审查中的真实观察与发现，保留执行来源和规划要求，方便后续回看完整过程。 | 有效记录、共同确认违约、批准保护 |
| streak-protection | island-freeze-dialog | 坚持记录 · 亲子审批保护 | 有效记录、共同确认违约、批准保护 |
| streak-protection | island-freeze-dialog | 因生病、旅行等客观原因，每月最多保护两天。豁免只维持连续性，不增加打卡天数。 | 有效记录、共同确认违约、批准保护 |
| streak-protection | island-freeze-dialog | 本月已批准保护 | 有效记录、共同确认违约、批准保护 |
| obsidian-settings |  | 🏝️ 终身岛民 · 青少儿全人成长与自主进化系统 | USER_PROFILE_STATE.settings / 插件设置 |
| obsidian-settings |  | 当前版本 v1.2.2。配置本地仓库存储路径、双链笔记生成与启动行为。 | USER_PROFILE_STATE.settings / 插件设置 |
| obsidian-settings |  | 最近保存：2026/11/15 10:46:36 | USER_PROFILE_STATE.settings / 插件设置 |
| obsidian-settings |  | 留空则直接在当前 Obsidian 仓库根目录下创建 00_Island_Core ~ 09_Bounties_悬赏公告 十大标准目录；也可指定子文件夹（例如：Youth_Growth_Vault）。 | USER_PROFILE_STATE.settings / 插件设置 |
| obsidian-settings |  | 开启后导出完整项目、执行、随记及当前签署公约，并生成笔记索引。已有的个人行为规范手写笔记保留。 | USER_PROFILE_STATE.settings / 插件设置 |
| obsidian-settings |  | 关闭后仍可通过侧栏图标或命令打开。 | USER_PROFILE_STATE.settings / 插件设置 |
| obsidian-settings |  | 打开终身岛民工作台时默认呈现的主视口（双主视口物理互斥模型）。 | USER_PROFILE_STATE.settings / 插件设置 |
| obsidian-settings |  | 在当前 Obsidian 仓库中创建 00_Island_Core ~ 09_Bounties_悬赏公告 十大标准目录，并将当前全量状态写入 JSON 与双链 Markdown。 | USER_PROFILE_STATE.settings / 插件设置 |
