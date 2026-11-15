import { safeFileStem } from "../core/GrowthMetrics";

const names: Record<string, string> = { goal: "目标", drill: "实训", habit: "习惯", review: "复盘", custom: "自定义", text: "文本" };
const frequencies: Record<string, string> = { once: "一次", daily: "每日", weekdays: "工作日", weekly: "每周" };
const evidence: Record<string, string> = { none: "无需附件", text: "文字说明", photo: "照片原件", video: "视频原件", audio: "音频原件" };
export const isNoteDate = (value: unknown): value is string => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value);
export const projectNoteRelativePath = (project: any, dir: string) => `${dir}/02_Projects/${safeFileStem(project.title)}--${safeFileStem(project.id)}.md`;
const lines = (values: any[], render: (value: any) => string) => (values || []).map(render).join("\n") || "未设置";
export function mediaMarkdown(media: any[] = []): string {
  return media.filter(m => m.path).map(m => `- 原件ID: ${m.id || "历史缺失"}；文件: ${m.name || "未命名"}；类型: ${m.mime || m.type || "未知"}；大小: ${m.size ?? "未记录"}字节${m.duration == null ? "" : `；时长: ${m.duration}秒`}\n![[${m.path}]]`).join("\n");
}
export function planningMarkdown(data: any): string {
  return (data?.nodes || []).map((node: any) => {
    const p = node.cardPayload || {};
    return `### ${node.title || "未命名节点"}\n节点ID: ${node.id}\n类型: ${names[node.nodeType] || node.nodeType}\n计划日: ${node.plannedDate || "未设置"}\n频次: ${frequencies[node.frequency] || node.frequency || "未设置"}\n加入执行: ${node.isCheckinNode ? "是" : "否"}\n权重: ${node.weight ?? 1}\n前置节点ID: ${(node.dependencies || []).join("、") || "无"}\n所属组/根节点: ${node.groupId || "无"} / ${node.groupRoot || "无"}\n画布位置: ${JSON.stringify(node.canvasPosition || null)}\n计划专注: ${p.plannedMinutes ?? 0}分钟\n物证要求: ${evidence[p.evidenceType] || p.evidenceType || "未设置"}\n期望完成: ${p.targetDeadline || "未设置"}\n\n${p.description || ""}\n\n${p.textContent !== p.description ? p.textContent || "" : ""}\n\n目标指标:\n${lines(p.metrics, m => `- ${m.name}：${m.targetValue}${m.unit && !String(m.targetValue).endsWith(m.unit) ? m.unit : ""}（ID: ${m.id || "历史缺失"}）`)}\n\n验收标准: ${p.acceptanceCriteria || "未设置"}\n\n规划清单:\n${lines(p.checklist, c => `- ${c.title}（${c.required === false ? "选填" : "必需"}；ID: ${c.id}）`)}\n\n规划提升行动:\n${lines(p.improvementList, a => `- ${a.actionItem}（${a.isChecked === false ? "不派生" : "参与派生"}；ID: ${a.id}${a.derivedNodeId ? `；已派生节点: ${a.derivedNodeId}` : ""}）`)}\n\n自定义字段标准:\n${lines(p.customFieldsSchema, f => `- ${f.label}（键: ${f.key}；类型: ${f.type}；${f.required ? "必填" : "选填"}）`)}${p.derivedFrom ? `\n\n派生来源: ${JSON.stringify(p.derivedFrom)}` : ""}`;
  }).join("\n\n") + `\n\n### 节点连线\n${lines(data?.edges, edge => `- ${edge.sourceId} → ${edge.targetId}；${edge.type || "关联"}；${edge.label || "无标签"}（ID: ${edge.id}）`)}`;
}
export function executionMarkdown(record: any): string {
  const p = record.sourceSnapshot?.cardPayload;
  const actual = [
    ...(record.metrics || []).map((m: any) => `- ${m.name}：目标 ${m.targetValue ?? m.target ?? "历史未记录"}；实测 ${m.actual}；${m.passed === false ? "未通过" : "通过"}`),
    ...Object.entries(record.checklistResults || {}).map(([id, value]) => `- 清单 ${p?.checklist?.find((c: any) => c.id === id)?.title || id}：${value ? "已履行" : "未履行"}`),
    ...Object.entries(record.customFieldValues || {}).map(([key, value]) => `- ${p?.customFieldsSchema?.find((f: any) => f.key === key)?.label || key}：${value}`),
    ...(record.improvementList || []).map((a: any) => `- 实际提升行动：${a.actionItem}（ID: ${a.id}）`)
  ].join("\n");
  return `### ${record.title || "执行记录"}\n记录ID: ${record.id}\n任务实例ID: ${record.taskInstanceId || record.taskId || "历史缺失"}\n源节点ID: ${record.nodeId || "无"}\n源项目ID: ${record.projectId || "无"}\n源契约ID: ${record.bountyId || "无"}\n计划日: ${record.scheduledDate || record.date || "历史缺失"}\n实际提交日: ${record.date || "历史缺失"}\n提交时间: ${record.completedAt || "历史缺失"}\n验收: ${record.validated === true ? "通过" : "历史未核验"}\n实际专注: ${record.focusSeconds || 0}秒\n\n${record.reflection || ""}\n\n${actual}\n\n${p ? `<details>\n<summary>本次执行采用的规划标准快照</summary>\n\n\`\`\`json\n${JSON.stringify(record.sourceSnapshot, null, 2)}\n\`\`\`\n</details>` : "历史来源标准快照不完整"}\n\n${mediaMarkdown(record.media)}`;
}
export function familyMarkdown(family: any): string {
  const f = family || {};
  return `---\ntype: family-pact\ngenerated_by: youth-holistic-growth-island\nversion: ${f.version || 0}\nsigned_at: ${JSON.stringify(f.signedAt || null)}\n---\n\n# 亲子共同公约\n\n${f.signedAt ? `孩子：${f.childName}\n监护人：${f.guardianNames}\n签署时间：${f.signedAt}\n版本：${f.version}\n\n${lines(f.clauses, c => `- ${c.text}（条款ID: ${c.id}）`)}` : "尚未共同签署。经典参考和个人手写笔记不代表家庭已同意的条款。"}\n\n本文件由家庭档案导出；修改条款请回插件共同确认并签署新版本。\n`;
}
