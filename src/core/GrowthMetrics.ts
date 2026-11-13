/** Calendar keys always use the user's local day, including before UTC midnight. */
export function localDateKey(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function shiftDate(key: string, days: number): string {
  const [year, month, day] = key.split("-").map(Number);
  return localDateKey(new Date(year, month - 1, day + days, 12));
}

export function computeStreak(
  validDays: string[], violationDays: string[], approvedFreezeDays: string[] = [], today = localDateKey()
): number {
  const valid = new Set(validDays);
  const violations = new Set(violationDays);
  const freezes = new Set(approvedFreezeDays);
  // An unfinished current day does not break yesterday's streak.
  let cursor = valid.has(today) || freezes.has(today) || violations.has(today) ? today : shiftDate(today, -1);
  let count = 0;
  const limit = valid.size + freezes.size;
  for (let i = 0; i < limit; i++, cursor = shiftDate(cursor, -1)) {
    if (violations.has(cursor)) break;
    if (valid.has(cursor)) count++;
    else if (!freezes.has(cursor)) break;
  }
  return count;
}

export function fulfillmentRate(plannedDone: number, plannedTotal: number, contractDone: number, contractTotal: number, violations: number): number {
  const ratio = (done: number, total: number) => total > 0 ? Math.max(0, Math.min(1, done / total)) : 1;
  return Math.round(Math.max(0, Math.min(100,
    60 * ratio(plannedDone, plannedTotal) + 40 * ratio(contractDone, contractTotal) - 5 * Math.max(0, violations || 0)
  )));
}

export function safeFileStem(value: unknown): string {
  const stem = String(value ?? "").replace(/[\\/:*?"<>|\[\]#^\x00-\x1f]/g, "_").replace(/\.+/g, "_").trim().replace(/[. ]+$/g, "");
  return stem && !/^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i.test(stem) ? stem.slice(0, 100) : `_${stem || "untitled"}`;
}

export function validateVaultRoot(value: string): string {
  const path = value.trim().replace(/\\/g, "/");
  if (/^(\/|[a-z]:)/i.test(path) || path.split("/").some(p => p === ".." || p === ".obsidian" || p === ".git")) {
    throw new Error("数据目录必须是仓库内的相对路径，不能包含 ..、.obsidian 或 .git");
  }
  return path.replace(/\/+$/g, "");
}
