/** schemaVersion 3. The runtime and standalone design implement these contracts. */
export type NodeType = "goal" | "drill" | "habit" | "review" | "custom" | "text";
export type TaskStatus = "scheduled" | "blocked" | "ready" | "overdue" | "completed";
/** Presentation state stored with the aggregate, independent of execution facts and undo history. */
export interface CanvasViewport { x: number; y: number; zoom: number; }
export interface CanvasViewports { planning: CanvasViewport | null; projects: Record<string, CanvasViewport>; }
export interface CanvasNavigation { planning: { collapsed: boolean }; projects: Record<string, { collapsed: boolean }>; }
export interface Attachment {
  id: string; path: string; name: string; type: "image" | "video" | "audio";
  mime: string; size: number; uploadedAt: string; duration?: number | null;
}
export interface DomainWorkNode {
  id: string; projectId: string; pavilionId: string; title: string; nodeType: NodeType;
  isCheckinNode: boolean; status: "pending" | "completed" | "archived";
  plannedDate: string; frequency: "once" | "daily" | "weekdays" | "weekly";
  dependencies: string[]; weight: number; canvasPosition: { x: number; y: number };
  groupId: string | null; groupRoot: string | null; createdAt: string; updatedAt: string;
  executionRecords: string[]; readCount: number; lastReadTime: string | null; achievementId: string | null;
  cardPayload: {
    description: string; plannedMinutes: number; evidenceType: "none" | "text" | "photo" | "video" | "audio";
    metrics: Array<{ id: string; name: string; targetValue: string; unit?: string }>;
    checklist: Array<{ id: string; title: string; required: boolean }>;
    improvementList: Array<{ id: string; actionItem: string; isChecked: boolean; derivedNodeId?: string }>;
    customFieldsSchema: Array<{ key: string; label: string; type: "text" | "number" | "boolean" | "date"; required: boolean }>;
    textContent: string; acceptanceCriteria: string; targetDeadline: string | null;
  };
}
export interface TaskInstance {
  id: string; nodeId: string | null; projectId: string | null; bountyId?: string;
  pavilionId: string; title: string; date: string; nodeType: NodeType | "bounty"; status: TaskStatus;
  recordId?: string | null; contract: boolean;
}
export interface CheckinRecord {
  id: string; taskInstanceId: string; nodeId: string | null; projectId: string | null; pavilionId: string; bountyId?: string;
  date: string; scheduledDate: string; completedAt: string; title: string; validated: boolean;
  reflection: string; focusSeconds: number; media: Attachment[];
  metricValues?: Record<string, string>; metricConfirmations?: Record<string, boolean>;
  metrics?: Array<{ id: string; name: string; targetValue: string; actual: string; passed: boolean }>;
  checklistResults?: Record<string, boolean>; customFieldValues?: Record<string, string | number | boolean>;
  improvementList?: DomainWorkNode["cardPayload"]["improvementList"];
  legacyUnverified?: boolean;
}
export interface FamilyPact {
  childName: string; guardianNames: string; version?: number; signedAt: string | null;
  clauses: Array<{ id: string; text: string }>; versions?: FamilyPact[];
}
export interface DomainEvent {
  id: string; kind: string; sourceId: string | null; date: string; timestamp: string; text: string;
  projectId?: string; nodeId?: string; recordId?: string;
}
