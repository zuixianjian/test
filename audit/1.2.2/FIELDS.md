# 数据字段读写与笔记落点

逐项列出当前契约字段。执行事实与规划字段分离；TaskInstance和HUD是派生投影。旧兼容字段、缓存HTML和原型样例不能成为事实源。

| 实体 | 字段 | 写入来源 | 读取/回路 | 存储/笔记 |
| --- | --- | --- | --- | --- |
| Attachment | id | 统一附件服务 | 执行/悬赏/随记/高光/导出 | attachments原件 + 所属记录media |
| Attachment | path | 统一附件服务 | 执行/悬赏/随记/高光/导出 | attachments原件 + 所属记录media |
| Attachment | name | 统一附件服务 | 执行/悬赏/随记/高光/导出 | attachments原件 + 所属记录media |
| Attachment | type | 统一附件服务 | 执行/悬赏/随记/高光/导出 | attachments原件 + 所属记录media |
| Attachment | mime | 统一附件服务 | 执行/悬赏/随记/高光/导出 | attachments原件 + 所属记录media |
| Attachment | size | 统一附件服务 | 执行/悬赏/随记/高光/导出 | attachments原件 + 所属记录media |
| Attachment | uploadedAt | 统一附件服务 | 执行/悬赏/随记/高光/导出 | attachments原件 + 所属记录media |
| Attachment | duration | 统一附件服务 | 执行/悬赏/随记/高光/导出 | attachments原件 + 所属记录media |
| DomainWorkNode | id | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | projectId | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | pavilionId | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | title | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | nodeType | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | isCheckinNode | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | status | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | plannedDate | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | frequency | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | dependencies | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | weight | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | canvasPosition | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | canvasPosition.x | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | canvasPosition.y | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | groupId | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | groupRoot | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | createdAt | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | updatedAt | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | executionRecords | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | readCount | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | lastReadTime | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | achievementId | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.description | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.plannedMinutes | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.evidenceType | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.metrics | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.metrics[].id | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.metrics[].name | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.metrics[].targetValue | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.metrics[].unit | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.checklist | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.checklist[].id | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.checklist[].title | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.checklist[].required | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.improvementList | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.improvementList[].id | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.improvementList[].actionItem | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.improvementList[].isChecked | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.improvementList[].derivedNodeId | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.customFieldsSchema | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.customFieldsSchema[].key | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.customFieldsSchema[].label | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.customFieldsSchema[].type | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.customFieldsSchema[].required | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.textContent | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.acceptanceCriteria | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.targetDeadline | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.derivedFrom | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.derivedFrom.nodeId | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.derivedFrom.recordId | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| DomainWorkNode | cardPayload.derivedFrom.actionId | 规划编辑 / 新增 / 显式派生 | 调度 / 只读标准 / 项目笔记 | nodesByProject → nodes_<id>.json |
| TaskInstance | id | 调度器从节点和记录派生 | 日 / 周 / 月 / HUD / 同一执行入口 | 可重建投影；DOM不是事实源 |
| TaskInstance | nodeId | 调度器从节点和记录派生 | 日 / 周 / 月 / HUD / 同一执行入口 | 可重建投影；DOM不是事实源 |
| TaskInstance | projectId | 调度器从节点和记录派生 | 日 / 周 / 月 / HUD / 同一执行入口 | 可重建投影；DOM不是事实源 |
| TaskInstance | bountyId | 调度器从节点和记录派生 | 日 / 周 / 月 / HUD / 同一执行入口 | 可重建投影；DOM不是事实源 |
| TaskInstance | pavilionId | 调度器从节点和记录派生 | 日 / 周 / 月 / HUD / 同一执行入口 | 可重建投影；DOM不是事实源 |
| TaskInstance | title | 调度器从节点和记录派生 | 日 / 周 / 月 / HUD / 同一执行入口 | 可重建投影；DOM不是事实源 |
| TaskInstance | date | 调度器从节点和记录派生 | 日 / 周 / 月 / HUD / 同一执行入口 | 可重建投影；DOM不是事实源 |
| TaskInstance | nodeType | 调度器从节点和记录派生 | 日 / 周 / 月 / HUD / 同一执行入口 | 可重建投影；DOM不是事实源 |
| TaskInstance | status | 调度器从节点和记录派生 | 日 / 周 / 月 / HUD / 同一执行入口 | 可重建投影；DOM不是事实源 |
| TaskInstance | recordId | 调度器从节点和记录派生 | 日 / 周 / 月 / HUD / 同一执行入口 | 可重建投影；DOM不是事实源 |
| TaskInstance | contract | 调度器从节点和记录派生 | 日 / 周 / 月 / HUD / 同一执行入口 | 可重建投影；DOM不是事实源 |
| CheckinRecord | id | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | taskInstanceId | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | nodeId | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | projectId | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | pavilionId | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | bountyId | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | date | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | scheduledDate | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | completedAt | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | title | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | validated | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | reflection | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | focusSeconds | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | media | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | metricValues | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | metricConfirmations | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | metrics | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | metrics[].id | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | metrics[].name | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | metrics[].targetValue | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | metrics[].actual | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | metrics[].passed | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | checklistResults | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | customFieldValues | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | improvementList | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | sourceSnapshot | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| CheckinRecord | legacyUnverified | 类型校验通过的实际提交 / 家长核准 | 节点引用 / 项目进度 / 随记 / 成果 | records；标准快照不随后续规划变化 |
| FamilyPact | childName | 双方确认签署新版本 | 只读公约 / 裁决 / 当前镜像 / 显式导出 | family、versions → family_pact.json/md |
| FamilyPact | guardianNames | 双方确认签署新版本 | 只读公约 / 裁决 / 当前镜像 / 显式导出 | family、versions → family_pact.json/md |
| FamilyPact | version | 双方确认签署新版本 | 只读公约 / 裁决 / 当前镜像 / 显式导出 | family、versions → family_pact.json/md |
| FamilyPact | signedAt | 双方确认签署新版本 | 只读公约 / 裁决 / 当前镜像 / 显式导出 | family、versions → family_pact.json/md |
| FamilyPact | clauses | 双方确认签署新版本 | 只读公约 / 裁决 / 当前镜像 / 显式导出 | family、versions → family_pact.json/md |
| FamilyPact | clauses[].id | 双方确认签署新版本 | 只读公约 / 裁决 / 当前镜像 / 显式导出 | family、versions → family_pact.json/md |
| FamilyPact | clauses[].text | 双方确认签署新版本 | 只读公约 / 裁决 / 当前镜像 / 显式导出 | family、versions → family_pact.json/md |
| FamilyPact | versions | 双方确认签署新版本 | 只读公约 / 裁决 / 当前镜像 / 显式导出 | family、versions → family_pact.json/md |
| DomainEvent | id | 成功的领域事务 | 当日流水 / 日记 / 来源记录 | events + todayAutoLogs.sourceId |
| DomainEvent | kind | 成功的领域事务 | 当日流水 / 日记 / 来源记录 | events + todayAutoLogs.sourceId |
| DomainEvent | sourceId | 成功的领域事务 | 当日流水 / 日记 / 来源记录 | events + todayAutoLogs.sourceId |
| DomainEvent | date | 成功的领域事务 | 当日流水 / 日记 / 来源记录 | events + todayAutoLogs.sourceId |
| DomainEvent | timestamp | 成功的领域事务 | 当日流水 / 日记 / 来源记录 | events + todayAutoLogs.sourceId |
| DomainEvent | text | 成功的领域事务 | 当日流水 / 日记 / 来源记录 | events + todayAutoLogs.sourceId |
| DomainEvent | projectId | 成功的领域事务 | 当日流水 / 日记 / 来源记录 | events + todayAutoLogs.sourceId |
| DomainEvent | nodeId | 成功的领域事务 | 当日流水 / 日记 / 来源记录 | events + todayAutoLogs.sourceId |
| DomainEvent | recordId | 成功的领域事务 | 当日流水 / 日记 / 来源记录 | events + todayAutoLogs.sourceId |
| Project | id | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | pavilion | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | category | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | title | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | desc | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | startDate | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | endDate | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | isArchived | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | archivedAt | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | sourceInquiryId | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | sourceViolationId | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | completedDays | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Project | createdAt | 规划新增 / 编辑 / 归档、问道与裁决派发 | 甘特 / 脑图 / 调度 / 结业 / 笔记 | projects → 分场馆projects.json → 项目笔记 |
| Bounty | id | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | title | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | criteria | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | reward | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | createdDate | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | endDate | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | days | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | pavilionId | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | pavilionLabel | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | acceptedDate | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | status | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | evidence | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | parentComment | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | verifiedAt | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | verifiedDate | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | verifiedBy | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | achievementId | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Bounty | childReport | 发布 / 揭榜 / 原件 / 家长核准 | 告示 / 独立任务 / 履约 / 历史 / 成果 | bounties；items全历史 + activeId导出 |
| Treasury | ledger[].id | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | ledger[].time | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | ledger[].date | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | ledger[].type | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | ledger[].category | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | ledger[].amount | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | ledger[].balanceAfter | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | ledger[].note | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | ledger[].proof | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | totalBalance | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | totalIncome | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | totalExpense | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Treasury | currentRecordType | 合法金额的真实收入 / 支出 | 收支筛选、余额、来源事件 | TREASURY_STATE → ledger.json；proof是说明，不是附件 |
| Journal | date | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | text | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | mood | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | energy | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | autoLogs | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | media | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | draft | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | updatedAt | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | versions | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | dateKey | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | journalText | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | currentMood | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | currentEnergy | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | todayAutoLogs | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | mediaList | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Journal | historyEntries | 主观录入 / 真实事件 / 附件 / 封存 / 跨日保存 | 当日 / 历史 / 日期笔记 / 原件回放 | NOTE_STATE → journal.json → YYYY/YYYY-MM-DD.md |
| Inquiry | id | 本人提问 / 明确的本地经典参考 / 幂等转化 | 问道池、关联修身项目、结业回流 | INQUIRY_POOL_STATE → inquiries.json |
| Inquiry | question | 本人提问 / 明确的本地经典参考 / 幂等转化 | 问道池、关联修身项目、结业回流 | INQUIRY_POOL_STATE → inquiries.json |
| Inquiry | classic | 本人提问 / 明确的本地经典参考 / 幂等转化 | 问道池、关联修身项目、结业回流 | INQUIRY_POOL_STATE → inquiries.json |
| Inquiry | classicFull | 本人提问 / 明确的本地经典参考 / 幂等转化 | 问道池、关联修身项目、结业回流 | INQUIRY_POOL_STATE → inquiries.json |
| Inquiry | guide | 本人提问 / 明确的本地经典参考 / 幂等转化 | 问道池、关联修身项目、结业回流 | INQUIRY_POOL_STATE → inquiries.json |
| Inquiry | converted | 本人提问 / 明确的本地经典参考 / 幂等转化 | 问道池、关联修身项目、结业回流 | INQUIRY_POOL_STATE → inquiries.json |
| Inquiry | linkedProjectId | 本人提问 / 明确的本地经典参考 / 幂等转化 | 问道池、关联修身项目、结业回流 | INQUIRY_POOL_STATE → inquiries.json |
| Inquiry | resolutionStatus | 本人提问 / 明确的本地经典参考 / 幂等转化 | 问道池、关联修身项目、结业回流 | INQUIRY_POOL_STATE → inquiries.json |
| Achievement | id | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | title | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | date | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | desc | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | category | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | projectType | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | projectName | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | sourceProjectId | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | sourceNodeId | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | sourceRecordId | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | sourceRecordIds | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | bountyId | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | milestoneKey | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | metrics | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | media | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | proof | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | issuer | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Achievement | image | 真实验收、核准、首次真实里程碑或生活高光 | 动态分组 / 实测详情 / 原件 / 回源 / 档案导出 | ACHIEVEMENT_STATE → achievements.json → exports/*.md |
| Presentation | viewports.planning | 界面操作与设置，非成长验收 | 视口 / 地图 / 自定义场馆 / 外观 / 撤销 | 完整提交；navigation与viewports独立保存 |
| Presentation | viewports.projects | 界面操作与设置，非成长验收 | 视口 / 地图 / 自定义场馆 / 外观 / 撤销 | 完整提交；navigation与viewports独立保存 |
| Presentation | navigation.planning | 界面操作与设置，非成长验收 | 视口 / 地图 / 自定义场馆 / 外观 / 撤销 | 完整提交；navigation与viewports独立保存 |
| Presentation | navigation.projects | 界面操作与设置，非成长验收 | 视口 / 地图 / 自定义场馆 / 外观 / 撤销 | 完整提交；navigation与viewports独立保存 |
| Presentation | historyByProject | 界面操作与设置，非成长验收 | 视口 / 地图 / 自定义场馆 / 外观 / 撤销 | 完整提交；navigation与viewports独立保存 |
| Presentation | USER_PROFILE_STATE.settings | 界面操作与设置，非成长验收 | 视口 / 地图 / 自定义场馆 / 外观 / 撤销 | 完整提交；navigation与viewports独立保存 |
| Presentation | PAVILION_META | 界面操作与设置，非成长验收 | 视口 / 地图 / 自定义场馆 / 外观 / 撤销 | 完整提交；navigation与viewports独立保存 |
| DerivedHUD | continuousDays | 有效records、违约、保护、今日实例派生 | HUD、周月、里程碑；不以DOM数量计算 | 统计投影；阅读、设置、记账不产生有效打卡 |
| DerivedHUD | streakDays | 有效records、违约、保护、今日实例派生 | HUD、周月、里程碑；不以DOM数量计算 | 统计投影；阅读、设置、记账不产生有效打卡 |
| DerivedHUD | maxContinuousDays | 有效records、违约、保护、今日实例派生 | HUD、周月、里程碑；不以DOM数量计算 | 统计投影；阅读、设置、记账不产生有效打卡 |
| DerivedHUD | fulfillmentRate | 有效records、违约、保护、今日实例派生 | HUD、周月、里程碑；不以DOM数量计算 | 统计投影；阅读、设置、记账不产生有效打卡 |
| DerivedHUD | completedTodayCount | 有效records、违约、保护、今日实例派生 | HUD、周月、里程碑；不以DOM数量计算 | 统计投影；阅读、设置、记账不产生有效打卡 |
| DerivedHUD | totalTodayCount | 有效records、违约、保护、今日实例派生 | HUD、周月、里程碑；不以DOM数量计算 | 统计投影；阅读、设置、记账不产生有效打卡 |
| DerivedHUD | totalFocusMinutes | 有效records、违约、保护、今日实例派生 | HUD、周月、里程碑；不以DOM数量计算 | 统计投影；阅读、设置、记账不产生有效打卡 |
| DerivedHUD | todayFocusMinutes | 有效records、违约、保护、今日实例派生 | HUD、周月、里程碑；不以DOM数量计算 | 统计投影；阅读、设置、记账不产生有效打卡 |
