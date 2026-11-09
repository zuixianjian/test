/**
 * 终身岛民 · 青少儿全人成长与自主进化系统
 * 全局数据契约与统一实体字典 (Strictly aligned with PRD Chapter 5 & Chapter 6)
 */

export type PavilionId =
  | "study"
  | "dojo"
  | "cognition"
  | "cultivation"
  | "treasury"
  | "tree"
  | "note"
  | "achieve"
  | string;

export type WallpaperPresetKey =
  | "plaza"
  | "desk"
  | "board"
  | "star"
  | "white"
  | "black"
  | "grid";

/**
 * PRD 4.13 & 5.1: 小岛设置中心配置实体 (`IslandSettingsConfig`)
 * 存储路径：`00_Island_Core/island_settings.json`
 */
export interface IslandSettingsConfig {
  avatarEmoji: "👦" | "👧" | "🧑‍🎓" | "🛡️" | string;
  nickname: string;
  particle: "leaves" | "petals" | "gold" | "rain" | "none";
  bgGlobal: boolean;
  wallpapers: Partial<Record<"all" | PavilionId, WallpaperPresetKey>>;
  immersive: {
    left: boolean;
    top: boolean;
    bottom: boolean;
    nodes: boolean;
    dbl: boolean;
  };
}

/**
 * PRD 5.1: 用户全局生命档案实体 (`UserProfile`)
 * 存储路径：`00_Island_Core/user_profile.json`
 */
export interface UserProfile {
  userId: string;
  nickname: string;
  avatarUrl: string;
  continuousDays: number;
  maxContinuousDays: number;
  lastActiveDate: string;
  streakFreezeAllowance: number;
  streakFreezeUsed: number;
  fulfillmentRate: number;
  weeklyFulfillmentRate: number;
  violationCount: number;
  totalFocusMinutes: number;
  settings: IslandSettingsConfig;
}

/**
 * PRD 5.2: 二级规划项目实体 (`ProjectEntity`)
 * 存储路径：`0X_Pavilion/projects.json`
 */
export interface ProjectEntity {
  id: string;
  pavilion: PavilionId;
  category: "学业攻坚" | "兴趣特长" | "修身立宪" | "认知思辨" | string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "planning" | "pending" | "in_progress" | "completed" | "archived";
  progressPercent: number;
  completedNodesCount: number;
  totalNodesCount: number;
  tertiaryMindmapFile: string;
  createdAt: string;
  archivedAt?: string;
}

/**
 * PRD 5.3: 通用三级工作节点实体 (`WorkNodeEntity`)
 * 存储路径：`0X_Pavilion/02_Projects/nodes_{projectId}.json`
 */
export type WorkNodeCardType =
  | "card-goal"
  | "card-drill"
  | "card-habit"
  | "card-review"
  | "card-custom"
  | "card-text";

export interface WorkNodeEntity {
  nodeId: string;
  projectId: string;
  groupId?: string;
  title: string;
  cardType: WorkNodeCardType;
  isCheckinNode: boolean;
  status: "pending" | "ready" | "in_progress" | "completed";
  checkinTime?: string;
  dependencies: string[];
  canvasPosition: { x: number; y: number };
  cardPayload: {
    // 1. 🎯 目标分解卡
    goalDescription?: string;
    targetDeadline?: string;
    metricsList?: Array<{ id: string; name: string; target: string; current?: string }>;
    deliverableType?: "photo" | "video" | "text";

    // 2. ⚡ 攻坚实训卡
    drillTopic?: string;
    plannedMinutes?: number;
    actualFocusMinutes?: number;
    mediaUploader?: {
      mediaUrl?: string;
      mediaType?: "image" | "video";
      mediaNotes?: string;
    };
    reflectionMemo?: string;

    // 3. 🌿 习惯践行卡
    habitName?: string;
    checklistItems?: Array<{ id: string; label: string; checked: boolean }>;
    frequency?: "daily" | "weekdays" | "weekly";
    streakDays?: number;

    // 4. 📝 评估复盘卡
    reviewTarget?: string;
    reviewExplanation?: string;
    improvementList?: Array<{ id: string; item: string }>;
    conclusion?: string;

    // 5. ⚙️ 自定义配置卡
    customTitle?: string;
    customFields?: Array<{ key: string; label: string; value: unknown }>;

    // 6. 📄 简单文本节点
    textContent?: string;
  };
}

/**
 * PRD 5.4: 首页执行卡片模型 (`ExecutionCardModel`)
 */
export interface ExecutionCardModel {
  cardInstanceId: string;
  sourceNodeId: string;
  sourceProjectId: string;
  pavilion: PavilionId;
  pavilionLabel: string;
  taskTitle: string;
  cardType: Exclude<WorkNodeCardType, "card-text">;
  plannedTimeWindow: string;
  plannedDurationMinutes: number;
  status: "ready" | "completed";
}

/**
 * PRD 5.5: 藏金屋收支账户与台账实体 (`TreasuryAccount` & `TreasuryTransaction`)
 * 存储路径：`05_Treasury_藏金屋/ledger.json`
 */
export interface TreasuryTransaction {
  txId: string;
  type: "income" | "expense";
  amount: number;
  category:
    | "家庭劳动薪酬"
    | "长辈压岁礼金"
    | "闲置物品义卖"
    | "学习文具书籍"
    | "公益爱心捐赠"
    | "社交礼物心意"
    | "自主心愿储蓄"
    | string;
  memo: string;
  createdAt: string;
  balanceAfter: number;
}

export interface TreasuryAccount {
  totalBalance: number;
  totalIncome: number;
  totalExpense: number;
  transactions: TreasuryTransaction[];
}

/**
 * PRD 5.6: 成就荣誉档案实体 (`CultivationAchievement` & `AccidentalAchievement`)
 * 存储路径：`06_Achievements_成就馆/achievements.json`
 */
export interface CultivationAchievement {
  id: string;
  title: string;
  icon: string;
  pavilion: "study" | "dojo" | "cognition" | "cultivation" | string;
  projectType: "study" | "dojo" | "cognition" | "cultivation" | string;
  projectName: string;
  metrics: Array<{ name: string; target: string; actual: string }>;
  proof: string;
  issuer: string;
  date: string;
  linkedSourceNodeId?: string;
}

export interface AccidentalAchievement {
  id: string;
  category: "life" | "arts" | "discovery" | "social" | "honor" | "other";
  title: string;
  image: string;
  desc: string;
  date: string;
  issuer?: string;
}

/**
 * PRD 6.2: 每日随记双轨日记归档模型 (`DailyJournalEntry`)
 * 存储路径：`08_Daily_每日随记/YYYY/YYYY-MM-DD.md`
 */
export interface DailyJournalEntry {
  date: string;
  mood: "focused" | "breakthrough" | "calm" | "setback" | string;
  energyLevel: number;
  autoLogs: string[];
  mediaAttachments: Array<{
    type: "image" | "video";
    path: string;
    desc: string;
  }>;
  contentReflection: string;
}

/**
 * Obsidian 插件配置项
 */
export interface YouthIslandPluginSettings {
  vaultRootFolder: string;
  autoSyncVaultMarkdown: boolean;
  defaultStartupView: "exec" | "plan";
  openOnStartup: boolean;
}

export const DEFAULT_PLUGIN_SETTINGS: YouthIslandPluginSettings = {
  vaultRootFolder: "",
  autoSyncVaultMarkdown: true,
  defaultStartupView: "exec",
  openOnStartup: true,
};
