# 实际提交结构字段路径

从本版隔离审查数据的完整提交逐字段采集，数组元素和按ID索引的对象归一化为[]或*。它补充FIELDS.md的契约表，不表示所有兼容字段都是独立事实源。stores中的记录/统计为兼容镜像，规范执行事实仍是records。此文件不包含用户Vault内容。

| 保存路径 | 夹具中的值类型 |
| --- | --- |
| bounties[].acceptedAt | string |
| bounties[].acceptedDate | string |
| bounties[].createdAt | string |
| bounties[].createdDate | string |
| bounties[].criteria | string |
| bounties[].days | number |
| bounties[].endDate | string |
| bounties[].evidence[] | empty array |
| bounties[].id | string |
| bounties[].parentComment | string |
| bounties[].pavilionId | string |
| bounties[].pavilionLabel | string |
| bounties[].reward | string |
| bounties[].status | string |
| bounties[].title | string |
| edgesByProject.*[].arrowMode | string |
| edgesByProject.*[].color | string |
| edgesByProject.*[].id | string |
| edgesByProject.*[].label | string |
| edgesByProject.*[].lineStyle | string |
| edgesByProject.*[].lineWidth | number |
| edgesByProject.*[].sourceId | string |
| edgesByProject.*[].sourceLabel | string |
| edgesByProject.*[].targetId | string |
| edgesByProject.*[].targetLabel | string |
| edgesByProject.*[].type | string |
| events[].date | string |
| events[].id | string |
| events[].kind | string |
| events[].nodeId | string |
| events[].projectId | string |
| events[].recordId | string |
| events[].sourceId | string |
| events[].text | string |
| events[].timestamp | string |
| family.childName | string |
| family.clauses[].id | string |
| family.clauses[].text | string |
| family.guardianNames | string |
| family.signedAt | string |
| family.version | number |
| family.versions[] | empty array |
| historyByProject.*.redo[] | empty array |
| historyByProject.*.undo[].edges[].arrowMode | string |
| historyByProject.*.undo[].edges[].color | string |
| historyByProject.*.undo[].edges[].id | string |
| historyByProject.*.undo[].edges[].label | string |
| historyByProject.*.undo[].edges[].lineStyle | string |
| historyByProject.*.undo[].edges[].lineWidth | number |
| historyByProject.*.undo[].edges[].sourceId | string |
| historyByProject.*.undo[].edges[].sourceLabel | string |
| historyByProject.*.undo[].edges[].targetId | string |
| historyByProject.*.undo[].edges[].targetLabel | string |
| historyByProject.*.undo[].edges[].type | string |
| historyByProject.*.undo[].nodes[].achievementId | object |
| historyByProject.*.undo[].nodes[].canvasPosition.x | number |
| historyByProject.*.undo[].nodes[].canvasPosition.y | number |
| historyByProject.*.undo[].nodes[].cardPayload.acceptanceCriteria | string |
| historyByProject.*.undo[].nodes[].cardPayload.checklist[] | empty array |
| historyByProject.*.undo[].nodes[].cardPayload.checklist[].id | string |
| historyByProject.*.undo[].nodes[].cardPayload.checklist[].required | boolean |
| historyByProject.*.undo[].nodes[].cardPayload.checklist[].title | string |
| historyByProject.*.undo[].nodes[].cardPayload.customFieldsSchema[] | empty array |
| historyByProject.*.undo[].nodes[].cardPayload.customFieldsSchema[].defaultValue | string |
| historyByProject.*.undo[].nodes[].cardPayload.customFieldsSchema[].key | string |
| historyByProject.*.undo[].nodes[].cardPayload.customFieldsSchema[].label | string |
| historyByProject.*.undo[].nodes[].cardPayload.customFieldsSchema[].placeholder | string |
| historyByProject.*.undo[].nodes[].cardPayload.customFieldsSchema[].required | boolean |
| historyByProject.*.undo[].nodes[].cardPayload.customFieldsSchema[].type | string |
| historyByProject.*.undo[].nodes[].cardPayload.description | string |
| historyByProject.*.undo[].nodes[].cardPayload.evidenceType | string |
| historyByProject.*.undo[].nodes[].cardPayload.improvementList[] | empty array |
| historyByProject.*.undo[].nodes[].cardPayload.improvementList[].actionItem | string |
| historyByProject.*.undo[].nodes[].cardPayload.improvementList[].id | string |
| historyByProject.*.undo[].nodes[].cardPayload.improvementList[].isChecked | boolean |
| historyByProject.*.undo[].nodes[].cardPayload.metrics[] | empty array |
| historyByProject.*.undo[].nodes[].cardPayload.metrics[].id | string |
| historyByProject.*.undo[].nodes[].cardPayload.metrics[].name | string |
| historyByProject.*.undo[].nodes[].cardPayload.metrics[].targetValue | string |
| historyByProject.*.undo[].nodes[].cardPayload.metrics[].unit | string |
| historyByProject.*.undo[].nodes[].cardPayload.plannedMinutes | number |
| historyByProject.*.undo[].nodes[].cardPayload.targetDeadline | object |
| historyByProject.*.undo[].nodes[].cardPayload.textContent | string |
| historyByProject.*.undo[].nodes[].createdAt | string |
| historyByProject.*.undo[].nodes[].dependencies[] | empty array |
| historyByProject.*.undo[].nodes[].executionRecords[] | empty array |
| historyByProject.*.undo[].nodes[].frequency | string |
| historyByProject.*.undo[].nodes[].groupId | object |
| historyByProject.*.undo[].nodes[].groupRoot | object |
| historyByProject.*.undo[].nodes[].id | string |
| historyByProject.*.undo[].nodes[].isCheckinNode | boolean |
| historyByProject.*.undo[].nodes[].lastReadTime | object |
| historyByProject.*.undo[].nodes[].nodeType | string |
| historyByProject.*.undo[].nodes[].pavilionId | string |
| historyByProject.*.undo[].nodes[].plannedDate | string |
| historyByProject.*.undo[].nodes[].projectId | string |
| historyByProject.*.undo[].nodes[].readCount | number |
| historyByProject.*.undo[].nodes[].status | string |
| historyByProject.*.undo[].nodes[].title | string |
| historyByProject.*.undo[].nodes[].updatedAt | string |
| historyByProject.*.undo[].nodes[].weight | number |
| inquiries[] | empty array |
| instances[].bountyId | string |
| instances[].contract | boolean |
| instances[].date | string |
| instances[].id | string |
| instances[].nodeId | object |
| instances[].nodeType | string |
| instances[].pavilionId | string |
| instances[].projectId | object |
| instances[].recordId | object |
| instances[].status | string |
| instances[].title | string |
| navigation.planning.collapsed | boolean |
| navigation.planning.freeLayout.node-cognition.left | string |
| navigation.planning.freeLayout.node-cognition.top | string |
| navigation.planning.freeLayout.node-cultivation.left | string |
| navigation.planning.freeLayout.node-cultivation.top | string |
| navigation.planning.freeLayout.node-dojo.left | string |
| navigation.planning.freeLayout.node-dojo.top | string |
| navigation.planning.freeLayout.node-study.left | string |
| navigation.planning.freeLayout.node-study.top | string |
| navigation.planning.layoutIndex | number |
| navigation.projects.*.collapsed | boolean |
| navigation.projects.*.collapsedNodeIds[] | empty array |
| nodesByProject.*[].achievementId | object |
| nodesByProject.*[].canvasPosition.x | number |
| nodesByProject.*[].canvasPosition.y | number |
| nodesByProject.*[].cardPayload.acceptanceCriteria | string |
| nodesByProject.*[].cardPayload.checklist[] | empty array |
| nodesByProject.*[].cardPayload.checklist[].id | string |
| nodesByProject.*[].cardPayload.checklist[].required | boolean |
| nodesByProject.*[].cardPayload.checklist[].title | string |
| nodesByProject.*[].cardPayload.customFieldsSchema[] | empty array |
| nodesByProject.*[].cardPayload.customFieldsSchema[].defaultValue | string |
| nodesByProject.*[].cardPayload.customFieldsSchema[].key | string |
| nodesByProject.*[].cardPayload.customFieldsSchema[].label | string |
| nodesByProject.*[].cardPayload.customFieldsSchema[].placeholder | string |
| nodesByProject.*[].cardPayload.customFieldsSchema[].required | boolean |
| nodesByProject.*[].cardPayload.customFieldsSchema[].type | string |
| nodesByProject.*[].cardPayload.derivedFrom.actionId | string |
| nodesByProject.*[].cardPayload.derivedFrom.nodeId | string |
| nodesByProject.*[].cardPayload.derivedFrom.recordId | string |
| nodesByProject.*[].cardPayload.description | string |
| nodesByProject.*[].cardPayload.evidenceType | string |
| nodesByProject.*[].cardPayload.improvementList[] | empty array |
| nodesByProject.*[].cardPayload.improvementList[].actionItem | string |
| nodesByProject.*[].cardPayload.improvementList[].id | string |
| nodesByProject.*[].cardPayload.improvementList[].isChecked | boolean |
| nodesByProject.*[].cardPayload.metrics[] | empty array |
| nodesByProject.*[].cardPayload.metrics[].id | string |
| nodesByProject.*[].cardPayload.metrics[].name | string |
| nodesByProject.*[].cardPayload.metrics[].targetValue | string |
| nodesByProject.*[].cardPayload.metrics[].unit | string |
| nodesByProject.*[].cardPayload.plannedMinutes | number |
| nodesByProject.*[].cardPayload.targetDeadline | object |
| nodesByProject.*[].cardPayload.textContent | string |
| nodesByProject.*[].createdAt | string |
| nodesByProject.*[].dependencies[] | empty array |
| nodesByProject.*[].executionRecords[] | empty array |
| nodesByProject.*[].frequency | string |
| nodesByProject.*[].groupId | string |
| nodesByProject.*[].groupRoot | string |
| nodesByProject.*[].id | string |
| nodesByProject.*[].isCheckinNode | boolean |
| nodesByProject.*[].lastReadTime | object |
| nodesByProject.*[].nodeType | string |
| nodesByProject.*[].pavilionId | string |
| nodesByProject.*[].plannedDate | string |
| nodesByProject.*[].projectId | string |
| nodesByProject.*[].readCount | number |
| nodesByProject.*[].status | string |
| nodesByProject.*[].title | string |
| nodesByProject.*[].updatedAt | string |
| nodesByProject.*[].weight | number |
| projects[].category | string |
| projects[].completedDays[] | string |
| projects[].completedNodesCount | number |
| projects[].desc | string |
| projects[].endDate | string |
| projects[].id | string |
| projects[].isArchived | boolean |
| projects[].pavilion | string |
| projects[].progressPercent | number |
| projects[].startDate | string |
| projects[].title | string |
| projects[].totalNodesCount | number |
| records[].checklistResults.must | boolean |
| records[].checklistResults.optional | boolean |
| records[].completedAt | string |
| records[].customFieldValues.boolean | boolean |
| records[].customFieldValues.date | string |
| records[].customFieldValues.number | number |
| records[].customFieldValues.text | string |
| records[].date | string |
| records[].focusSeconds | number |
| records[].id | string |
| records[].improvementList[].actionItem | string |
| records[].improvementList[].id | string |
| records[].improvementList[].isChecked | boolean |
| records[].media[] | empty array |
| records[].metricValues.metric-accuracy | string |
| records[].metrics[] | empty array |
| records[].metrics[].actual | string |
| records[].metrics[].id | string |
| records[].metrics[].manual | boolean |
| records[].metrics[].name | string |
| records[].metrics[].passed | boolean |
| records[].metrics[].targetValue | string |
| records[].metrics[].unit | string |
| records[].nodeId | string |
| records[].pavilionId | string |
| records[].projectId | string |
| records[].reflection | string |
| records[].scheduledDate | string |
| records[].sourceSnapshot.cardPayload.acceptanceCriteria | string |
| records[].sourceSnapshot.cardPayload.checklist[] | empty array |
| records[].sourceSnapshot.cardPayload.checklist[].id | string |
| records[].sourceSnapshot.cardPayload.checklist[].required | boolean |
| records[].sourceSnapshot.cardPayload.checklist[].title | string |
| records[].sourceSnapshot.cardPayload.customFieldsSchema[] | empty array |
| records[].sourceSnapshot.cardPayload.customFieldsSchema[].key | string |
| records[].sourceSnapshot.cardPayload.customFieldsSchema[].label | string |
| records[].sourceSnapshot.cardPayload.customFieldsSchema[].required | boolean |
| records[].sourceSnapshot.cardPayload.customFieldsSchema[].type | string |
| records[].sourceSnapshot.cardPayload.description | string |
| records[].sourceSnapshot.cardPayload.evidenceType | string |
| records[].sourceSnapshot.cardPayload.improvementList[] | empty array |
| records[].sourceSnapshot.cardPayload.improvementList[].actionItem | string |
| records[].sourceSnapshot.cardPayload.improvementList[].id | string |
| records[].sourceSnapshot.cardPayload.improvementList[].isChecked | boolean |
| records[].sourceSnapshot.cardPayload.metrics[] | empty array |
| records[].sourceSnapshot.cardPayload.metrics[].id | string |
| records[].sourceSnapshot.cardPayload.metrics[].name | string |
| records[].sourceSnapshot.cardPayload.metrics[].targetValue | string |
| records[].sourceSnapshot.cardPayload.metrics[].unit | string |
| records[].sourceSnapshot.cardPayload.plannedMinutes | number |
| records[].sourceSnapshot.cardPayload.targetDeadline | object |
| records[].sourceSnapshot.cardPayload.textContent | string |
| records[].sourceSnapshot.nodeType | string |
| records[].sourceSnapshot.projectId | string |
| records[].sourceSnapshot.title | string |
| records[].taskId | string |
| records[].taskInstanceId | string |
| records[].title | string |
| records[].validated | boolean |
| revision | number |
| schemaVersion | number |
| storageRevision | number |
| stores.ACHIEVEMENT_STATE.accidentalItems[] | empty array |
| stores.ACHIEVEMENT_STATE.cultivationItems[].date | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].desc | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].icon | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].id | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].media[] | empty array |
| stores.ACHIEVEMENT_STATE.cultivationItems[].metrics[].actual | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].metrics[].name | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].metrics[].target | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].milestoneKey | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].projectName | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].projectType | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].proof | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].sourceNodeId | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].sourceProjectId | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].sourceRecordId | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].sourceRecordIds[] | string |
| stores.ACHIEVEMENT_STATE.cultivationItems[].title | string |
| stores.ACHIEVEMENT_STATE.currentTab | string |
| stores.BOUNTY_STATE.acceptedAt | string |
| stores.BOUNTY_STATE.acceptedDate | string |
| stores.BOUNTY_STATE.createdAt | string |
| stores.BOUNTY_STATE.createdDate | string |
| stores.BOUNTY_STATE.criteria | string |
| stores.BOUNTY_STATE.days | number |
| stores.BOUNTY_STATE.endDate | string |
| stores.BOUNTY_STATE.evidence[] | empty array |
| stores.BOUNTY_STATE.id | string |
| stores.BOUNTY_STATE.parentComment | string |
| stores.BOUNTY_STATE.pavilionId | string |
| stores.BOUNTY_STATE.pavilionLabel | string |
| stores.BOUNTY_STATE.reward | string |
| stores.BOUNTY_STATE.status | string |
| stores.BOUNTY_STATE.title | string |
| stores.INQUIRY_POOL_STATE[] | empty array |
| stores.NOTE_STATE.currentEnergy | number |
| stores.NOTE_STATE.currentMood | string |
| stores.NOTE_STATE.dateKey | string |
| stores.NOTE_STATE.historyEntries[].autoLogs[].id | string |
| stores.NOTE_STATE.historyEntries[].autoLogs[].kind | string |
| stores.NOTE_STATE.historyEntries[].autoLogs[].nodeId | string |
| stores.NOTE_STATE.historyEntries[].autoLogs[].projectId | string |
| stores.NOTE_STATE.historyEntries[].autoLogs[].recordId | string |
| stores.NOTE_STATE.historyEntries[].autoLogs[].sourceId | string |
| stores.NOTE_STATE.historyEntries[].autoLogs[].text | string |
| stores.NOTE_STATE.historyEntries[].autoLogs[].time | string |
| stores.NOTE_STATE.historyEntries[].date | string |
| stores.NOTE_STATE.historyEntries[].draft | boolean |
| stores.NOTE_STATE.historyEntries[].energy | number |
| stores.NOTE_STATE.historyEntries[].id | string |
| stores.NOTE_STATE.historyEntries[].media[] | empty array |
| stores.NOTE_STATE.historyEntries[].mood | string |
| stores.NOTE_STATE.historyEntries[].text | string |
| stores.NOTE_STATE.historyEntries[].updatedAt | string |
| stores.NOTE_STATE.historyEntries[].versions[] | empty array |
| stores.NOTE_STATE.journalText | string |
| stores.NOTE_STATE.mediaList[] | empty array |
| stores.NOTE_STATE.todayAutoLogs[].id | string |
| stores.NOTE_STATE.todayAutoLogs[].kind | string |
| stores.NOTE_STATE.todayAutoLogs[].nodeId | string |
| stores.NOTE_STATE.todayAutoLogs[].projectId | string |
| stores.NOTE_STATE.todayAutoLogs[].recordId | string |
| stores.NOTE_STATE.todayAutoLogs[].sourceId | string |
| stores.NOTE_STATE.todayAutoLogs[].text | string |
| stores.NOTE_STATE.todayAutoLogs[].time | string |
| stores.NOTE_STATE.todayFocusMinutes | number |
| stores.PAVILION_META.*.cat | string |
| stores.PAVILION_META.*.desc | string |
| stores.PAVILION_META.*.description | string |
| stores.PAVILION_META.*.hasGantt | boolean |
| stores.PAVILION_META.*.hasTertiary | boolean |
| stores.PAVILION_META.*.icon | string |
| stores.PAVILION_META.*.name | string |
| stores.PAVILION_META.*.noPlanning | boolean |
| stores.PAVILION_META.*.position.left | string |
| stores.PAVILION_META.*.position.top | string |
| stores.PAVILION_META.*.recordOnly | boolean |
| stores.PAVILION_META.*.specializedTitle | string |
| stores.TREASURY_STATE.currentRecordType | string |
| stores.TREASURY_STATE.ledger[] | empty array |
| stores.TREASURY_STATE.totalBalance | number |
| stores.TREASURY_STATE.totalExpense | number |
| stores.TREASURY_STATE.totalIncome | number |
| stores.USER_PROFILE_STATE.baseFulfillmentRate | number |
| stores.USER_PROFILE_STATE.checkinRecords[].checklistResults.must | boolean |
| stores.USER_PROFILE_STATE.checkinRecords[].checklistResults.optional | boolean |
| stores.USER_PROFILE_STATE.checkinRecords[].completedAt | string |
| stores.USER_PROFILE_STATE.checkinRecords[].customFieldValues.boolean | boolean |
| stores.USER_PROFILE_STATE.checkinRecords[].customFieldValues.date | string |
| stores.USER_PROFILE_STATE.checkinRecords[].customFieldValues.number | number |
| stores.USER_PROFILE_STATE.checkinRecords[].customFieldValues.text | string |
| stores.USER_PROFILE_STATE.checkinRecords[].date | string |
| stores.USER_PROFILE_STATE.checkinRecords[].focusSeconds | number |
| stores.USER_PROFILE_STATE.checkinRecords[].id | string |
| stores.USER_PROFILE_STATE.checkinRecords[].improvementList[].actionItem | string |
| stores.USER_PROFILE_STATE.checkinRecords[].improvementList[].id | string |
| stores.USER_PROFILE_STATE.checkinRecords[].improvementList[].isChecked | boolean |
| stores.USER_PROFILE_STATE.checkinRecords[].media[] | empty array |
| stores.USER_PROFILE_STATE.checkinRecords[].metricValues.metric-accuracy | string |
| stores.USER_PROFILE_STATE.checkinRecords[].metrics[] | empty array |
| stores.USER_PROFILE_STATE.checkinRecords[].metrics[].actual | string |
| stores.USER_PROFILE_STATE.checkinRecords[].metrics[].id | string |
| stores.USER_PROFILE_STATE.checkinRecords[].metrics[].manual | boolean |
| stores.USER_PROFILE_STATE.checkinRecords[].metrics[].name | string |
| stores.USER_PROFILE_STATE.checkinRecords[].metrics[].passed | boolean |
| stores.USER_PROFILE_STATE.checkinRecords[].metrics[].targetValue | string |
| stores.USER_PROFILE_STATE.checkinRecords[].metrics[].unit | string |
| stores.USER_PROFILE_STATE.checkinRecords[].nodeId | string |
| stores.USER_PROFILE_STATE.checkinRecords[].pavilionId | string |
| stores.USER_PROFILE_STATE.checkinRecords[].projectId | string |
| stores.USER_PROFILE_STATE.checkinRecords[].reflection | string |
| stores.USER_PROFILE_STATE.checkinRecords[].scheduledDate | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.acceptanceCriteria | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.checklist[] | empty array |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.checklist[].id | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.checklist[].required | boolean |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.checklist[].title | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.customFieldsSchema[] | empty array |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.customFieldsSchema[].key | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.customFieldsSchema[].label | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.customFieldsSchema[].required | boolean |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.customFieldsSchema[].type | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.description | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.evidenceType | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.improvementList[] | empty array |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.improvementList[].actionItem | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.improvementList[].id | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.improvementList[].isChecked | boolean |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.metrics[] | empty array |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.metrics[].id | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.metrics[].name | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.metrics[].targetValue | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.metrics[].unit | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.plannedMinutes | number |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.targetDeadline | object |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.cardPayload.textContent | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.nodeType | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.projectId | string |
| stores.USER_PROFILE_STATE.checkinRecords[].sourceSnapshot.title | string |
| stores.USER_PROFILE_STATE.checkinRecords[].taskId | string |
| stores.USER_PROFILE_STATE.checkinRecords[].taskInstanceId | string |
| stores.USER_PROFILE_STATE.checkinRecords[].title | string |
| stores.USER_PROFILE_STATE.checkinRecords[].validated | boolean |
| stores.USER_PROFILE_STATE.completedTodayCount | number |
| stores.USER_PROFILE_STATE.continuousDays | number |
| stores.USER_PROFILE_STATE.fulfillmentRate | number |
| stores.USER_PROFILE_STATE.maxContinuousDays | number |
| stores.USER_PROFILE_STATE.settings.avatarEmoji | string |
| stores.USER_PROFILE_STATE.settings.bgGlobal | boolean |
| stores.USER_PROFILE_STATE.settings.immersive.bottom | boolean |
| stores.USER_PROFILE_STATE.settings.immersive.dbl | boolean |
| stores.USER_PROFILE_STATE.settings.immersive.left | boolean |
| stores.USER_PROFILE_STATE.settings.immersive.nodes | boolean |
| stores.USER_PROFILE_STATE.settings.immersive.top | boolean |
| stores.USER_PROFILE_STATE.settings.nickname | string |
| stores.USER_PROFILE_STATE.settings.particle | string |
| stores.USER_PROFILE_STATE.statsDate | string |
| stores.USER_PROFILE_STATE.streakDays | number |
| stores.USER_PROFILE_STATE.streakFreezeAllowance | number |
| stores.USER_PROFILE_STATE.streakFreezeUsed | number |
| stores.USER_PROFILE_STATE.streakIncrementedToday | boolean |
| stores.USER_PROFILE_STATE.totalFocusMinutes | number |
| stores.USER_PROFILE_STATE.totalTodayCount | number |
| stores.USER_PROFILE_STATE.violationCount | number |
| stores.USER_PROFILE_STATE.violationRecords[] | empty array |
| viewports.planning | object |
| viewports.projects.*.x | number |
| viewports.projects.*.y | number |
| viewports.projects.*.zoom | number |
