# 文件级来源、读取与恢复矩阵

以下为程序生成或读取的文件类型，根路径可配置。使用隔离审查数据验证实际VaultStorageAdapter生成内容；没有读取用户平板或个人Vault。文件存在不代表可以双向编辑：权威档案、受支持编辑投影、只读笔记和用户手写内容各有明确职责。

| 文件 | 写入来源 | 读取/回路 | 修改与恢复边界 |
| --- | --- | --- | --- |
| .obsidian/plugins/youth-holistic-growth-island/data.json | Obsidian插件设置：根目录、自动笔记、启动开关、默认视图 | 插件loadSettings/saveSettings | 根目录需显式应用并重新读取；与领域档案分开，不自动搬迁数据 |
| 00_Island_Core/domain_state.json | 串行、冻结的完整提交；项目/节点/边/记录/stores | 启动恢复的权威源，重建任务与各页面 | 校验结构；损坏暂停写入，不以空态覆盖 |
| domain_state.pending.json | 待提交档案，写后读回校验 | 有效且更新或主档案损坏时恢复 | 不作为日常编辑入口；失败保留，成功清理 |
| domain_state.previous.json | 上一份有效完整档案 | 手动恢复与问题追溯 | 不自动覆盖事实，结构残缺主档案不覆盖有效备份 |
| domain_state.corrupt-*.json | 恢复前保留的损坏原件 | 诊断/手动恢复 | 不参与自动业务计算 |
| app_state_snapshot.json / previous / corrupt-* | 会话及兼容缓存 | 完整档案存在时不覆盖其事实 | 不回放今日卡片HTML，不恢复跨任务私有表单 |
| user_profile.json | 档案、保护/违约、设置及统计投影 | 旧版恢复/查询；新完整档案优先 | 非第二套统计事实源，HUD由记录/任务重新计算 |
| island_settings.json | USER_PROFILE_STATE.settings | 兼容恢复/查询外观 | 不生成成长事件；插件Vault根目录另存Obsidian插件设置 |
| island_topology.json | PAVILION_META、场馆位置与元数据 | 场馆恢复、custom分类及布局 | 完整档案优先；同名自定义场馆用独立ID/分类 |
| 分场馆/projects.json | Project与storageRevision | 同版本或更新投影可在启动时读取 | 保持稳定ID和有效日期；不支持自动语义冲突合并 |
| projects.revision.json | 项目索引版本 | 空索引也能识别过期导出 | 旧导出不能回滚更新的完整档案 |
| nodes_项目ID.json | 结构化nodes、edges及兼容cardsHtml | 按同版本或新版本读入对应项目 | nodes是规划标准；手动编辑须保持依赖与边一致，HTML不是事实源 |
| 项目名称--项目ID.md | 完整规划、实际记录、标准快照、原件 | 从随记/成果/索引回到实际项目；链接记录日期随记 | 只读投影；改名保留已知旧文件并链接当前文件，不静默删笔记 |
| 05_Treasury_藏金屋/ledger.json | 通过金额、余额校验的交易 | 看板/筛选/源事件，完整档案恢复 | 凭据说明是文本；不当作已上传票据，不联动悬赏金额 |
| 06_Achievements_成就馆/achievements.json | 目标验收、核准契约、真实里程碑、高光 | 动态分组、来源定位、原件、导出 | 与源记录ID关联，不用样例或固定达标文案补事实 |
| 07_Baseline_个人行为规范/family_pact.json | 双方签署的FamilyPact及versions | 当前只读条款、裁决引用familyVersion | 完整档案优先；新签署不改写旧版本 |
| family_pact.md | 当前实际签署版本镜像 | 项目/随记/索引共同引用 | 后台随签署更新；不是隐式条款编辑入口 |
| personal_code.md | 首次空笔记；之后由用户手写 | 项目/随记的个人笔记链接 | 后台不覆盖手写正文；不冒充已签署公约 |
| 08_Daily_每日随记/journal.json | 当前草稿、封存、版本、真实事件/原件 | 当日与历史随记、跨日恢复 | 完整档案优先，跨日保存最新草稿和附件 |
| YYYY/YYYY-MM-DD.md | Journal及实际日期的CheckinRecord | 项目/随记双链、原件、实际来源ID | 有记录无日记也生成目标文件；不伪造缺失心情/精力 |
| 09_Bounties_悬赏公告/bounties.json | 全历史items + activeId | 每条契约独立状态与恢复 | 当前契约恢复后绑定领域内同一个对象 |
| 04_Classics_修身阁/01_Inquiry_Pool/inquiries.json | 真实提问、本地参考、linkedProjectId | 问道 → 幂等项目 → 执行/结业回流 | JSON是查询/兼容投影；不宣称智能模型回答 |
| attachments/日期/唯一文件 | 系统选取/采集后的实际字节 | 所属任务/契约/日记/高光的media.path，统一播放器 | 不静默删除；原件写完再提交，记录后的附件不替换 |
| exports/achievement-ID.md | 显式成果导出 | 来源项目/节点/记录/契约ID、实测、审核、原件 | 导出前保存关联笔记，失败明确返回失败 |
| exports/family-pact-v版本.md | 显式导出已签署版本 | 姓名、条款、版本、签署时间 | 真实Markdown，不声称PDF、防伪证书或打印完成 |
| notes_index.json / notes_index.md | 本次真实写出的项目/日记/公约路径及稳定ID | 查询当前笔记、别名、保留的历史项目文件 | 可重建投影；不把索引修改当作领域编辑 |
| 旧.canvas | 本版不再创建/导入/导出 | 用户独立维护 | 升级保留，不删除或修改 |

已关闭自动Markdown时仍保存领域JSON及附件；笔记导出不被描述为已开启。手动改写项目/节点JSON涉及多个关系字段时需自行保持一致，当前没有双设备冲突合并或Markdown反向编辑功能。
