# 🏝️ 终身岛民 · 青少儿全人成长与自主进化系统 (Obsidian Plugin)

专为 7~15 岁青少儿打造的**全息终身自主进化系统** Obsidian 插件。系统以“晨曦海岛”为生命空间隐喻，采用**生命双主视口物理互斥调度机制**，依托客观事实留痕、5 大通用卡片原型拆解与跨模块本地双链闭环，培养青少儿自律坚毅的品格与自主进化的终身心智模型。

---

## 一、 核心架构与业务模块

1. **生命双主视口物理互斥（Mode 1 / Mode 2）**
   - **⚡ 首页执行中心视图 (Task Execution Center)**：个人自律档案 HUD（连续天数 `continuousDays`、综合履约率 `fulfillmentRate`）、置顶家长悬赏条、今日待办 3D Coverflow 轮播、周看板、月日历热力大盘、原位全屏沉浸打卡工位。
   - **🧭 海岛规划沙盘视图 (Island Canvas Sandbox)**：全景手绘海岛大世界、四大主规划场馆（🏫 校史馆、🥋 武道馆/兴趣屋、🧠 思辨馆/认知台、🏛️ 修身阁）与自定义动态扩展场馆（`➕ 新增模块`）。
2. **通用二级项目排程工作台（甘特管理页面）**
   - 项目状态自动判定机（已完成 / 进行中 / 待执行 / 待规划 / 已归档）、只读客观打卡时间轴矩阵、修身阁问道池选惑立项。
3. **通用三级自由脑图全景工作台（无限画布页面）**
   - 5 大通用卡片原型（🎯 目标分解卡、⚡ 攻坚实训卡、🌿 习惯践行卡、📝 评估复盘卡、⚙️ 自定义配置卡）+ 📄 简单文本图元；
   - 支持卡片最小化/展开、子级跟随平移、成组派生原子保护（`groupId`）、评估复盘卡一键派生下游实训节点、目标卡一键沉淀至成就馆。
4. **底栏四大免规划模块与小岛设置中心**
   - **💰 藏金屋**：少儿独立零用金收支台账（严禁与学习打卡对赌），自动同步财务流水至每日随记；
   - **📜 个人行为规范**：《大学》三纲八目只读法典 + 《亲子立宪自律公约》违约事实裁决台（扣减 5% 履约率并自动向修身阁派发 7 天补救项目）；
   - **📝 每日随记**：上半轨全自动客观事实流水 + 下半轨主观心流随笔与图文视频物证，自动归档为带 YAML Frontmatter 与 `[[双向链接]]` 的 Obsidian Markdown 笔记；
   - **🏆 成就馆**：养成类成就与偶然类成就双轨荣誉殿堂，支持一键逆向穿透回源规划项目；
   - **⚙️ 小岛设置中心**：🖼️ 背景设置（全局/分场馆壁纸）、👤 角色设置（昵称与化身全域 HUD 同步）、🍃 环境微粒设置（落叶/花瓣/萤火/细雨互斥单选与关闭）、🌿 沉浸专注模式设置（分区隐藏控制）。

---

## 二、 工程目录结构

```text
├── manifest.json                     # Obsidian 插件清单 (id: youth-holistic-growth-island)
├── versions.json                     # Obsidian 版本兼容映射
├── main.js                           # 编译产出的 Obsidian 插件主入口包
├── styles.css                        # 1:1 视觉样式表（提取自高保真原型）
├── assets/                           # 复用的高清海岛场景与角色头像美术资产
│   ├── scenes/                       # 广场中心、工坊工作台、公告栏等高清底图
│   └── avatars/                      # 岛民角色头像素材
├── src/
│   ├── main.ts                       # Obsidian Plugin 主类（注册视图、Ribbon、6 大命令）
│   ├── types/
│   │   └── models.ts                 # PRD 第 5/6 章全局数据契约与 TypeScript 接口定义
│   ├── core/
│   │   └── EventBus.ts               # PRD 6.4 四大核心子系统内部事件总线
│   ├── storage/
│   │   └── VaultStorageAdapter.ts    # PRD 6.1~6.3 本地 Vault 十大目录树与双链 Markdown 同步引擎
│   ├── settings/
│   │   └── YouthIslandSettingTab.ts  # Obsidian 插件设置面板
│   ├── views/
│   │   └── YouthIslandView.ts        # Obsidian ItemView 视图容器与持久化钩子挂载
│   ├── ui/
│   │   └── template.ts               # 1:1 全量视图与模态弹窗 DOM 模板
│   └── runtime/
│       └── prototypeScript.ts        # 1:1 交互状态机与 9 大业务闭环控制器
├── scripts/
│   ├── extract_from_prototype.mjs    # 从高保真原型同步提取 CSS/HTML/Runtime 的构建脚本
│   └── verify_plugin.mjs             # 自动化构建与闭环完整性校验脚本
├── high_fidelity_ui_preview.html     # 唯一权威视觉与交互高保真原型设计图
└── PRD_Youth_Holistic_Growth_System.md # 核心产品需求文档 (PRD)
```

---

## 三、 本地开发与构建指南

### 1. 安装依赖
```bash
npm install
```

### 2. 常用命令
```bash
# 从高保真原型重新提取更新 styles.css、template.ts 与 prototypeScript.ts
npm run extract

# 生产环境构建（生成 main.js）
npm run build

# 开发监听模式
npm run dev

# 运行完整性与闭环自动化校验
npm test
```

---

## 四、 安装到 Obsidian 仓库

1. 在你的 Obsidian 知识库目录下创建插件文件夹：
   ```text
   <你的Obsidian仓库>/.obsidian/plugins/youth-holistic-growth-island/
   ```
2. 将本项目根目录下的以下文件/文件夹复制到该目录中：
   - `manifest.json`
   - `versions.json`
   - `main.js`
   - `styles.css`
   - `assets/`
3. 打开 Obsidian -> **设置 (Settings)** -> **第三方插件 (Community plugins)** -> 启用 **「终身岛民 · 青少儿全人成长与自主进化系统」**。
4. 点击左侧边栏的 **指南针图标 (🧭)** 或通过命令面板（`Ctrl/Cmd + P`）输入 `终身岛民` 即可开启！
