// @ts-nocheck
// Auto-extracted 1:1 interactive runtime from high_fidelity_ui_preview.html
// Bound to window and bridged with Obsidian VaultStorageAdapter & EventBus

export function bootPrototypeRuntime(): void {
  if ((window as any).__YOUTH_ISLAND_RUNTIME_BOOTED__) {
    if (typeof (window as any).__reinitYouthIslandDom === "function") {
      (window as any).__reinitYouthIslandDom();
    }
    return;
  }
  (window as any).__YOUTH_ISLAND_RUNTIME_BOOTED__ = true;

    window.PAVILION_CARDS = {"study":{"name":"校史馆","icon":"🏫","sub":"学业错题复盘与沉浸冲刺特训中心","cards":{"exec":"\n        <!-- 节点 1: 错题原题与归因 -->\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">📐 小学数学：进退位口算与破十法突破</span>\n            <span class=\"work-node-badge\" style=\"background:#ffedd5; color:#c2410c;\">错题攻坚</span>\n          </div>\n          <div class=\"work-node-body\">\n            <div style=\"background:#fefce8; border:1px solid #fde047; padding:8px; border-radius:10px;\">\n              <strong>错因归因：</strong> <span style=\"color:#ea580c; font-weight:800;\">个位借位遗漏 + 破十口诀生疏</span>\n            </div>\n            <p style=\"font-size:11px; color:#7d6b52;\">23-8 退位减法时忘记个位数不够减需向十位借 1 当 10，需用红笔标出退位点。</p>\n            <div style=\"height:110px; background:#fff; border:1.5px dashed #d4c5a9; border-radius:12px; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer;\" onclick=\"showIslandToast('📷 正在加载考卷原始大图与错解红笔订正原件...')\">\n              <span style=\"font-size:28px;\">📄</span>\n              <span style=\"font-size:11px; color:#4a3a2a; font-weight:bold; margin-top:4px;\">查看口算题卡原题错解图</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"node-connect-arrow\">➔</div>\n\n        <!-- 节点 2: 沉浸番茄秒表与草稿物证 -->\n        <div class=\"a-my-island-work-node-card\" style=\"border-color:#ea580c; width:340px;\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">⏱️ 沉浸番茄深度验算秒表</span>\n            <span class=\"work-node-badge\" style=\"background:#ea580c; color:#fff;\">专注作战中</span>\n          </div>\n          <div class=\"work-node-body\" style=\"align-items:center; text-align:center;\">\n            <div style=\"width:140px; height:140px; border-radius:50%; border:6px solid #ea580c; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#fff; box-shadow:0 6px 18px rgba(234,88,12,0.25); margin:6px 0;\">\n              <span style=\"font-size:32px; font-weight:900; color:#ea580c; font-family:monospace;\" id=\"pomo-display\">25:00</span>\n              <span style=\"font-size:10px; color:#7d6b52; font-weight:bold;\">第 1 阶段 · 专注验算</span>\n            </div>\n            <div style=\"display:flex; gap:8px;\">\n              <button class=\"ui-btn primary\" onclick=\"togglePomodoroTimer()\" id=\"pomo-btn\" style=\"padding:6px 16px;\">▶ 开始计时</button>\n              <button class=\"ui-btn\" onclick=\"resetPomodoroTimer()\" style=\"padding:6px 12px;\">重置</button>\n            </div>\n            <button class=\"ui-btn\" style=\"width:100%; margin-top:10px; padding:6px; font-size:11px;\" onclick=\"createImageEvidencePrompt()\">📝 提交草稿验算记录</button>\n          </div>\n        </div>\n\n        <div class=\"node-connect-arrow\">➔</div>\n\n        <!-- 节点 3: 反思总结周期派生计划 -->\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">📅 艾宾浩斯周期子任务链</span>\n            <span class=\"work-node-badge\" style=\"background:#ccfbf1; color:#0f766e;\">子级跟随保护</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p style=\"font-size:11px; color:#5c4832;\">系统根据认知遗忘规律，自动派生 4 轮温故知新节点：</p>\n            <div style=\"display:flex; flex-direction:column; gap:6px;\">\n              <div style=\"display:flex; justify-content:space-between; background:#fff; padding:6px 10px; border-radius:8px; border-left:3px solid #10b981;\">\n                <span>第 1 轮 (次日)</span> <span style=\"color:#10b981; font-weight:bold;\">✓ 已攻克</span>\n              </div>\n              <div style=\"display:flex; justify-content:space-between; background:#fff; padding:6px 10px; border-radius:8px; border-left:3px solid #f59e0b;\">\n                <span>第 2 轮 (第 3 天)</span> <span style=\"color:#ea580c; font-weight:bold;\">⚡ 今日待刷</span>\n              </div>\n              <div style=\"display:flex; justify-content:space-between; background:#fff; padding:6px 10px; border-radius:8px; border-left:3px solid #94a3b8;\">\n                <span>第 3 轮 (第 7 天)</span> <span style=\"color:#64748b;\">待解锁</span>\n              </div>\n            </div>\n            <button class=\"ui-btn\" style=\"margin-top:auto;\" onclick=\"showIslandToast('🎉 恭喜！已通过第二轮复盘测验，掌握绿灯已点亮！')\">✓ 标记今日复查通过</button>\n          </div>\n        </div>\n      ","plan":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">🎯 学期战略冲刺目标规划</span>\n            <span class=\"work-node-badge\" style=\"background:#ccfbf1; color:#0f766e;\">学期规划</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p><strong>主攻学科：</strong> 小学数学口算 + 论语晨读温故</p>\n            <p><strong>预期目标：</strong> 20以内进退位口算30题全对达标，限时口算速度由45秒缩短至15秒</p>\n            <div style=\"background:#fff; border:1px solid #d4c5a9; border-radius:10px; padding:8px;\">\n              <div>阶段 1: 题型盲区扫描 (10.01 - 10.20) ✓</div>\n              <div>阶段 2: 压轴专题大题限时速攻 (10.21 - 11.15) ⚡</div>\n              <div>阶段 3: 模拟卷全真模考演练 (11.16 - 12.10)</div>\n            </div>\n            <button class=\"ui-btn primary\" style=\"margin-top:auto;\" onclick=\"showIslandToast('📅 已生成并同步至主日历看板！')\">更新战略大纲</button>\n          </div>\n        </div>\n      ","rec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">📈 历史正答率趋势卷轴</span>\n            <span class=\"work-node-badge\" style=\"background:#fef3c7; color:#b45309;\">荣誉卷轴</span>\n          </div>\n          <div class=\"work-node-body\">\n            <div style=\"text-align:center; padding:10px; background:#fff; border-radius:12px; border:1px solid #d4c5a9;\">\n              <span style=\"font-size:26px; font-weight:900; color:#15803d;\">92.4%</span>\n              <p style=\"font-size:10px; color:#78350f;\">本月反思总结彻底攻克率</p>\n            </div>\n            <p style=\"font-size:11px; color:#5c4832;\">累计录入错题 128 道，已归档 104 道，待攻坚 24 道。已形成专属个人易错知识库。</p>\n            <button class=\"ui-btn\" style=\"margin-top:auto;\" onclick=\"toggleArchiveView()\">🗄️ 打开历史已攻克题库归档仓库</button>\n          </div>\n        </div>\n      "}},"dojo":{"name":"兴趣武道馆","icon":"🤺","sub":"体能意志锤炼与竞技战报分析厅","cards":{"exec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">🏸 羽毛球专项：正手高远球挥拍</span>\n            <span class=\"work-node-badge\" style=\"background:#fef3c7; color:#92400e;\">动作纠偏</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p><strong>训练要点：</strong> 侧身引拍、小臂内旋发力、击球点固定在右前上方。</p>\n            <div style=\"background:#fff; border:1px solid #d4c5a9; border-radius:10px; padding:10px; text-align:center;\">\n              <div style=\"font-size:28px; font-weight:900; color:#ea580c;\">8,450 / 10,000</div>\n              <p style=\"font-size:10px; color:#7d6b52;\">万次标准动作肌肉记忆量化进度</p>\n            </div>\n            <button class=\"ui-btn primary\" onclick=\"showIslandToast('🏸 今日已打卡 +200 次挥拍！已盖戳防作弊！')\">⚡ 打卡 +200 次训练</button>\n          </div>\n        </div>\n\n        <div class=\"node-connect-arrow\">➔</div>\n\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">⚔️ 竞技复盘：青少年夏季邀请赛</span>\n            <span class=\"work-node-badge\" style=\"background:#dbeafe; color:#1e40af;\">攻防复盘</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p><strong>半决赛比分：</strong> 21:18, 19:21, 21:16 (胜)</p>\n            <div style=\"background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:8px; font-size:10px;\">\n              <strong>技术诊断：</strong> 第三局后半程利用反手劈吊结合网前勾对角，成功破坏对方底线节奏。\n            </div>\n            <button class=\"ui-btn\" style=\"margin-top:auto;\" onclick=\"createImageEvidencePrompt()\">📷 上传比赛实录录像或物证照片</button>\n          </div>\n        </div>\n      ","plan":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">🏆 季度赛事晋阶训练量化表</span>\n            <span class=\"work-node-badge\" style=\"background:#ccfbf1; color:#0f766e;\">赛事备战</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p><strong>目标赛事：</strong> 2026 年市青少年锦标赛男单前八名</p>\n            <p><strong>体能红线指标：</strong> 肺活量达到 4200ml，立定跳远 2.35m</p>\n            <button class=\"ui-btn primary\" style=\"margin-top:auto;\" onclick=\"createTableDataPrompt()\">📊 新建周训练量化打卡表</button>\n          </div>\n        </div>\n      ","rec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">🥇 荣誉奖牌台与心流战报</span>\n            <span class=\"work-node-badge\" style=\"background:#fef3c7; color:#b45309;\">荣誉展柜</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p>累计胜率：<strong>78.6% (22胜6负)</strong></p>\n            <p>已解锁体能成就：<strong>【风行破空】【万次淬火】</strong></p>\n            <button class=\"ui-btn\" style=\"margin-top:auto;\" onclick=\"showIslandToast('📜 已导出《武道馆年度战报卷轴》高清档案！')\">📜 调阅荣誉全卷</button>\n          </div>\n        </div>\n      "}},"cultivation":{"name":"修身阁","icon":"🏛️","sub":"大学三纲八目修身计划与古籍经典解惑台","cards":{"exec":"\n        <!-- 节点 1: 今日修身践行打卡 -->\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">🪞 今日慎独躬行与解惑记录</span>\n            <span class=\"work-node-badge\" style=\"background:#fef3c7; color:#78350f;\">每日打卡</span>\n          </div>\n          <div class=\"work-node-body\">\n            <div style=\"background:#fff; border:1px solid #d4c5a9; border-radius:10px; padding:10px;\">\n              <strong>今日反思情境：</strong> 面对同伴质疑，能够先平复情绪，未出恶言。<br>\n              <strong>古籍映照指引：</strong> 《传习录》“人须在事上磨，方立得住”。\n            </div>\n            <p style=\"font-size:11px; color:#78350f; margin-top:4px;\">家长已在规划端关联《传习录》解惑章节，孩子打卡完成心流反思。</p>\n            <button class=\"ui-btn primary\" onclick=\"showIslandToast('🪞 修身打卡成功！反思结晶已输送至【人生底线树】！')\">⚡ 提交今日打卡并结晶</button>\n          </div>\n        </div>\n\n        <div class=\"node-connect-arrow\">➔</div>\n\n        <!-- 节点 2: 关联古籍书单解惑 -->\n        <div class=\"a-my-island-work-node-card\" style=\"border-color:#b45309;\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">📖 古籍书单解惑研读计划</span>\n            <span class=\"work-node-badge\" style=\"background:#ffedd5; color:#c2410c;\">家长导读</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p><strong>当前研读书目：</strong> 《大学》《论语·里仁篇》</p>\n            <div style=\"background:#fffaf0; border:1px solid #fed7aa; border-radius:8px; padding:8px; font-size:10px;\">\n              <strong>疑难求索：</strong> 为何“知止而后有定”？<br>\n              <strong>研读心得：</strong> 明确目标界限后，内心方不再随外界诱惑动荡。\n            </div>\n            <button class=\"ui-btn\" style=\"margin-top:auto;\" onclick=\"createTextNotePrompt()\">📝 记录经典顿悟便签</button>\n          </div>\n        </div>\n      ","plan":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">📜 【立志】三纲八目修身大纲</span>\n            <span class=\"work-node-badge\" style=\"background:#ccfbf1; color:#0f766e;\">学期规划</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p><strong>修身周期：</strong> 2026年秋季学期专项修身项目</p>\n            <p><strong>核心纲目：</strong> 格物致知 · 诚意正心 · 修身治本</p>\n            <div style=\"background:#fff; border:1px solid #d4c5a9; border-radius:8px; padding:8px; font-size:11px;\">\n              <div>阶段 1: 《论语》立人八则研读 (已建立)</div>\n              <div>阶段 2: 慎独克己十日守诺 (进行中)</div>\n            </div>\n            <button class=\"ui-btn primary\" style=\"margin-top:auto;\" onclick=\"showIslandToast('📋 已建立新学期修身专属项目大纲！')\">新建周/月修身项目</button>\n          </div>\n        </div>\n      ","rec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">🌟 修身践行热力图与知行指数</span>\n            <span class=\"work-node-badge\" style=\"background:#fef3c7; color:#b45309;\">历史卷轴</span>\n          </div>\n          <div class=\"work-node-body\">\n            <div style=\"text-align:center; padding:10px; background:#fff; border-radius:12px; border:1px solid #d4c5a9;\">\n              <span style=\"font-size:26px; font-weight:900; color:#b45309;\">连续 42 天</span>\n              <p style=\"font-size:10px; color:#78350f;\">慎独躬行与古籍打卡记录</p>\n            </div>\n            <p style=\"font-size:11px; color:#5c4832;\">累计产出 42 篇格物日记，解开困惑 18 个，直接滋养出 14 颗【人生底线树】坚毅结晶果实。</p>\n          </div>\n        </div>\n      "}},"tree":{"name":"个人行为规范","icon":"📜","sub":"古籍风骨线装法典·纯记录功能","cards":{"exec":"\n        <!-- 节点 1: 诱惑登记卡 -->\n        <div class=\"a-my-island-work-node-card\" style=\"width:340px;\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">✨ 现实诱惑与道德考验登记卡</span>\n            <span class=\"work-node-badge\" style=\"background:#ea580c; color:#fff;\">考验核验</span>\n          </div>\n          <div class=\"work-node-body\">\n            <div style=\"background:#fff; border:1px solid #d4c5a9; border-radius:10px; padding:10px; font-size:11px; line-height:1.5;\">\n              <strong>诱惑情境：</strong> 测验中同桌递纸条要求对答案，我果断拒绝并专注演算。<br>\n              <strong>心路抉择：</strong> 谨记“诚信立本”，事后主动为同桌答疑解惑。<br>\n              <strong>古籍答案出处：</strong> 《论语·子路篇》“君子和而不同”。\n            </div>\n            <div style=\"display:flex; justify-content:space-between; align-items:center; margin-top:8px;\">\n              <span style=\"font-size:10px; color:#78350f;\">亲子核验状态：</span>\n              <span style=\"background:#dcfce7; color:#15803d; padding:2px 8px; border-radius:6px; font-weight:bold;\">已由父母见证盖戳 ✓</span>\n            </div>\n            <button class=\"ui-btn primary\" style=\"width:100%; margin-top:10px;\" onclick=\"showIslandToast('💎 考验通过！底线树枝头已结晶出新的【诚信】晶石！')\">💎 凝结底线树宝石果实</button>\n          </div>\n        </div>\n\n        <div class=\"node-connect-arrow\">➔</div>\n\n        <!-- 节点 2: 14条人生红线全景拓扑 -->\n        <div class=\"a-my-island-work-node-card\" style=\"width:340px;\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">🌿 底线树拓扑枝干晶石视窗</span>\n            <span class=\"work-node-badge\" style=\"background:#15803d; color:#fff;\">14颗宝石全盛</span>\n          </div>\n          <div class=\"work-node-body\">\n            <div style=\"background:#fff; border:1.5px solid #d4c5a9; border-radius:12px; padding:8px; text-align:center;\">\n              <div style=\"display:flex; justify-content:space-around; margin-bottom:6px;\">\n                <span title=\"诚信宝石\">💎 诚信 (4)</span>\n                <span title=\"勇敢宝石\">💎 勇敢 (3)</span>\n                <span title=\"孝悌宝石\">💎 孝悌 (4)</span>\n                <span title=\"慎独宝石\">💎 慎独 (3)</span>\n              </div>\n              <p style=\"font-size:10px; color:#15803d; font-weight:bold;\">修身阁践行成果实时映射滋养底线树！</p>\n            </div>\n            <p style=\"font-size:11px; color:#7d6b52; margin-top:6px;\">底线树是修身阁执行的直接结果，任何一条底线都是不可触碰的生命基石。</p>\n          </div>\n        </div>\n      ","rec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">🌳 14颗底线宝石编年画册</span>\n            <span class=\"work-node-badge\" style=\"background:#fef3c7; color:#b45309;\">品格结晶</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p>自 2026 年初立树以来，经历 18 次现实考验，成功抵御诱惑 18 次，0 次破戒。</p>\n            <p>已被家庭最高委员会授予<strong>【坚毅守夜人】</strong>终身品格勋章。</p>\n          </div>\n        </div>\n      "}},"treasury":{"name":"藏金屋","icon":"💰","sub":"少儿独立财商实践与零用金收支台账","cards":{"exec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">💰 零用金收支快速记账</span>\n            <span class=\"work-node-badge\" style=\"background:#fef3c7; color:#92400e;\">即时记账</span>\n          </div>\n          <div class=\"work-node-body\">\n            <div style=\"background:#fffcf5; border:1px solid #fed7aa; border-radius:10px; padding:10px; margin-bottom:8px;\">\n              <div style=\"font-size:11px; color:#78350f;\">当前总净资产结余：<strong style=\"font-size:16px; color:#b45309;\">¥3,280.00</strong></div>\n              <div style=\"font-size:10px; color:#8c6b49; margin-top:2px;\">累计总收入：+¥4,200.00 | 累计总支出：-¥920.00</div>\n            </div>\n            <p style=\"font-size:11px; color:#78350f;\">随时记录每一笔零用金发放与文具开销，核验真实小票物证，树立量入为出消费观。</p>\n            <button class=\"ui-btn primary\" style=\"margin-top:auto;\" onclick=\"enterSecondaryWorkspace(&apos;treasury&apos;, &apos;specialized&apos;)\">✍️ 进入藏金屋记一笔</button>\n          </div>\n        </div>\n\n        <div class=\"node-connect-arrow\">➔</div>\n\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">🏛️ 零用金收支明细台账</span>\n            <span class=\"work-node-badge\" style=\"background:#ffedd5; color:#c2410c;\">客观台账</span>\n          </div>\n          <div class=\"work-node-body\">\n            <div style=\"background:#fff; border:1px solid #d4c5a9; border-radius:10px; padding:10px; font-size:11px;\">\n              <strong>最近记录：</strong> 购买学科文具与错题便签 -¥42.00<br>\n              <strong>记账铁律：</strong> 严禁透支负债，账实相符\n            </div>\n            <button class=\"ui-btn\" style=\"margin-top:auto;\" onclick=\"enterSecondaryWorkspace(&apos;treasury&apos;, &apos;specialized&apos;)\">📜 调阅完整收支台账</button>\n          </div>\n        </div>\n      ","plan":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">📋 少儿财商启蒙与收支自律准则</span>\n            <span class=\"work-node-badge\" style=\"background:#ccfbf1; color:#0f766e;\">财商准则</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p><strong>基础零花：</strong> 每周一固定发放零花钱预算 ¥30.00</p>\n            <p><strong>消费准则：</strong> 区分“需要”与“想要”，先记账后消费</p>\n            <p><strong>底线原则：</strong> 严禁过度消费与负债透支，独立对账</p>\n          </div>\n        </div>\n      ","rec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">📊 零用金总资产与收支台账</span>\n            <span class=\"work-node-badge\" style=\"background:#fef3c7; color:#b45309;\">资产台账</span>\n          </div>\n          <div class=\"work-node-body\">\n            <div style=\"text-align:center; padding:10px; background:#fff; border-radius:12px; border:1px solid #d4c5a9;\">\n              <span style=\"font-size:26px; font-weight:900; color:#15803d;\">¥3,280.00</span>\n              <p style=\"font-size:10px; color:#78350f;\">当前零用金总净资产</p>\n            </div>\n            <p style=\"font-size:11px; color:#5c4832;\">累计记录收入 18 笔、支出 26 笔，账实相符，从未产生赤字。</p>\n          </div>\n        </div>\n      "}},"cognition":{"name":"认知升级台","icon":"🧠","sub":"苏格拉底思辨对话与心智模型进化舱","cards":{"exec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">💬 亲子双向苏格拉底思辨卡</span>\n            <span class=\"work-node-badge\" style=\"background:#dbeafe; color:#1e40af;\">深度对话</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p><strong>本周议题：</strong> “努力一定能带来预期的成功吗？”</p>\n            <div style=\"background:#fff; border:1px solid #bfdbfe; border-radius:8px; padding:8px; font-size:11px;\">\n              <strong>孩子观点：</strong> 不一定，还需要方法与外部环境契合。<br>\n              <strong>家长反馈：</strong> 引导认识“可控与不可控”二分法（斯多葛哲学）。\n            </div>\n            <button class=\"ui-btn primary\" onclick=\"showIslandToast('🧠 思维辩词已记录，双方一致度达成 94%！')\">✓ 双方确认思辨结论</button>\n          </div>\n        </div>\n      ","plan":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">🧭 五大元认知思维模型研习表</span>\n            <span class=\"work-node-badge\" style=\"background:#ccfbf1; color:#0f766e;\">心智框架</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p>1. 第一性原理 (拆解核心本质)</p>\n            <p>2. 双盲测试法 (跳出主观臆断)</p>\n            <p>3. 逆向思考法 (如果想失败，应该怎么做？)</p>\n          </div>\n        </div>\n      ","rec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">🧠 认知偏误纠偏全景图谱</span>\n            <span class=\"work-node-badge\" style=\"background:#fef3c7; color:#b45309;\">认知成长</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p>累计完成深度思辨对话 36 次，识别并消除“幸存者偏差”“确认偏误”等 8 种盲区。</p>\n          </div>\n        </div>\n      "}},"achieve":{"name":"成就馆","icon":"🏆","sub":"3D虚拟荣誉殿堂·纯结果记录功能","cards":{"rec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">💎 3D全息荣誉奖章陈列台</span>\n            <span class=\"work-node-badge\" style=\"background:#fef3c7; color:#b45309;\">荣誉展陈</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p>已点亮 16 枚稀有勋章，拥有【终身岛民荣誉守护者】勋爵称号。</p>\n          </div>\n        </div>\n      "}},"note":{"name":"每日随记","icon":"📝","sub":"三段式生命时光流水与心流顿悟笔记本","cards":{"exec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">📝 晨起立志 · 日间心流 · 晚间复盘</span>\n            <span class=\"work-node-badge\" style=\"background:#ffedd5; color:#c2410c;\">今日随笔</span>\n          </div>\n          <div class=\"work-node-body\">\n            <div style=\"background:#fff; border:1px solid #d4c5a9; border-radius:8px; padding:8px; font-size:11px;\">\n              <strong>日间高光：</strong> 独自攻克30道进退位口算卡全对！心流沉浸 20 分钟！\n            </div>\n            <button class=\"ui-btn primary\" onclick=\"createTextNotePrompt()\">✍️ 快速记录此时心悟</button>\n          </div>\n        </div>\n      ","rec":"\n        <div class=\"a-my-island-work-node-card\">\n          <div class=\"work-node-card-header\">\n            <span class=\"work-node-title\">☁️ 认知标签词云与生命年轮</span>\n            <span class=\"work-node-badge\" style=\"background:#fef3c7; color:#b45309;\">时光回溯</span>\n          </div>\n          <div class=\"work-node-body\">\n            <p>累计沉淀随记 365 篇，总计 12.8 万字，核心高频词【沉浸】【突破】【知行合一】。</p>\n          </div>\n        </div>\n      "}}};
    window.PAVILION_DATA = {"study":{"name":"校史馆","icon":"🏫","sub":"学业错题复盘与沉浸冲刺特训中心","plan":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>📝 错题深度复盘与成因归因分析</span>\n          <span style=\"font-size:12px; color:#0d9488; font-weight:bold;\">[规划模式]</span>\n        </div>\n        <p style=\"font-size:12px; color:#7d6b52; margin-bottom:12px;\">小学生轻量归因：勾选主因后，系统将自动关联知识点并一键派生复习链条。</p>\n        \n        <table class=\"ui-table\" style=\"margin-bottom:16px;\">\n          <thead>\n            <tr>\n              <th>题目摘要</th>\n              <th>学科</th>\n              <th>错因归因</th>\n              <th>严重度</th>\n              <th>操作</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><strong>小学数学：进退位口算与破十法综合</strong></td>\n              <td><span class=\"spec-tag-pill\">数学</span></td>\n              <td><span style=\"color:#ea580c; font-weight:700;\">计算失误 + 审题不清</span></td>\n              <td><span style=\"color:#ef4444; font-weight:bold;\">★★★☆☆</span></td>\n              <td><button class=\"ui-btn\" style=\"padding:4px 8px; font-size:11px;\" onclick=\"showIslandToast('📷 正在加载错题原题与错解红笔订正手稿...')\">查看原卷</button></td>\n            </tr>\n            <tr>\n              <td><strong>乘法口诀求商与图文应用题</strong></td>\n              <td><span class=\"spec-tag-pill\">物理</span></td>\n              <td><span style=\"color:#b45309; font-weight:700;\">概念模糊</span></td>\n              <td><span style=\"color:#f59e0b; font-weight:bold;\">★★☆☆☆</span></td>\n              <td><button class=\"ui-btn\" style=\"padding:4px 8px; font-size:11px;\" onclick=\"showIslandToast('📷 正在加载错题原题与错解红笔订正手稿...')\">查看原卷</button></td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div style=\"background:#f0fdfa; border:1.5px solid #5eead4; border-radius:14px; padding:16px; margin-bottom:16px;\">\n          <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;\">\n            <div style=\"font-size:14px; font-weight:800; color:#0f766e;\">\n              ⚡ 错因归因与反思：记录知识卡点与突破方法\n            </div>\n            <button class=\"ui-btn plan\" onclick=\"deriveEbbinghausDemo()\">\n              ✨ 一键派生计划 (周/月周期)\n            </button>\n          </div>\n          <div id=\"ebbinghaus-derived-box\" style=\"font-size:12px; color:#134e4a; line-height:1.6;\">\n            <p>点击按钮将为当前 2 道重点错题生成未来 5 个强化复盘节点 (Day 1, 2, 4, 7, 15)。</p>\n            <p style=\"color:#047857; font-weight:700; margin-top:4px;\">🔒 核心安全规范：派生计划成组锁定 (groupId: EBB-2026-MATH01)，不可单删，只可成组作废。</p>\n          </div>\n        </div>\n      </div>\n    ","exec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>⏱️ 全屏沉浸式番茄验算秒表 (防冻结心跳机制)</span>\n          <span style=\"font-size:12px; color:#ea580c; font-weight:bold;\">[执行模式]</span>\n        </div>\n\n        <div class=\"pomodoro-dial-wrap\">\n          <div class=\"pomodoro-clock\" id=\"study-pomodoro-dial\">\n            <div class=\"pomodoro-time-text\" id=\"pomo-display\">25:00</div>\n            <div class=\"pomodoro-phase-text\" id=\"pomo-phase\">第 1 阶段 · 专注深度验算</div>\n          </div>\n\n          <div style=\"display:flex; gap:12px; margin-top:20px;\">\n            <button class=\"ui-btn exec\" id=\"btn-pomo-start\" onclick=\"togglePomodoroTimer()\">▶ 开始专注打卡</button>\n            <button class=\"ui-btn\" onclick=\"resetPomodoroTimer()\">↺ 重置计时</button>\n          </div>\n        </div>\n\n        <div style=\"background:#fff7ed; border:1.5px solid #fdba74; border-radius:14px; padding:16px; margin-top:16px;\">\n          <div style=\"font-size:13px; font-weight:700; color:#9a3412; margin-bottom:8px;\">\n            📷 验算草稿纸多图即时上传 (物证存证)\n          </div>\n          <div style=\"display:flex; gap:12px; align-items:center;\">\n            <div style=\"width:70px; height:70px; border:2px dashed #ea580c; border-radius:12px; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer; background:#fff;\" onclick=\"showIslandToast('📸 已唤起相机：请拍摄验算草稿纸并加盖防伪时间戳！')\">\n              <span style=\"font-size:20px;\">📷</span>\n              <span style=\"font-size:10px; color:#ea580c; font-weight:bold;\">拍草稿</span>\n            </div>\n            <div style=\"font-size:12px; color:#7d6b52; line-height:1.5;\">\n              <p>✓ 步骤完整验算方可消灭错题，杜绝盲目心算与抄答案。</p>\n              <p>✓ 草稿本拍照将自动加注防伪时间戳，并同步入选底线与神稿长卷。</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    ","rec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>📈 学科正确率走势与错题消灭画廊</span>\n          <span style=\"font-size:12px; color:#b45309; font-weight:bold;\">[记录模式]</span>\n        </div>\n\n        <!-- SVG 正确率走势图 -->\n        <div style=\"background:#fffdfa; border:1.5px solid #ecd9b8; border-radius:14px; padding:16px; margin-bottom:16px;\">\n          <div style=\"font-size:13px; font-weight:700; color:#5c4832; margin-bottom:8px;\">近 30 天重点题型消灭走势 (数学/物理)</div>\n          <svg viewBox=\"0 0 500 160\" style=\"width:100%; height:160px; background:#fefdfb; border-radius:8px;\">\n            <!-- 坐标网格 -->\n            <line x1=\"40\" y1=\"20\" x2=\"480\" y2=\"20\" stroke=\"#f3ebd8\" stroke-width=\"1\" />\n            <line x1=\"40\" y1=\"60\" x2=\"480\" y2=\"60\" stroke=\"#f3ebd8\" stroke-width=\"1\" />\n            <line x1=\"40\" y1=\"100\" x2=\"480\" y2=\"100\" stroke=\"#f3ebd8\" stroke-width=\"1\" />\n            <line x1=\"40\" y1=\"140\" x2=\"480\" y2=\"140\" stroke=\"#d4c5a9\" stroke-width=\"1.5\" />\n            <line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#d4c5a9\" stroke-width=\"1.5\" />\n            \n            <!-- 曲线走势：70% -> 78% -> 85% -> 92% -->\n            <polyline fill=\"none\" stroke=\"#ea580c\" stroke-width=\"3\" points=\"50,110 160,95 280,65 420,35\" />\n            <circle cx=\"50\" cy=\"110\" r=\"4\" fill=\"#ea580c\" />\n            <circle cx=\"160\" cy=\"95\" r=\"4\" fill=\"#ea580c\" />\n            <circle cx=\"280\" cy=\"65\" r=\"4\" fill=\"#ea580c\" />\n            <circle cx=\"420\" cy=\"35\" r=\"4\" fill=\"#ea580c\" />\n            \n            <text x=\"45\" y=\"130\" font-size=\"10\" fill=\"#9c8a73\">第1周 (72%)</text>\n            <text x=\"145\" y=\"115\" font-size=\"10\" fill=\"#9c8a73\">第2周 (78%)</text>\n            <text x=\"265\" y=\"85\" font-size=\"10\" fill=\"#9c8a73\">第3周 (85%)</text>\n            <text x=\"405\" y=\"25\" font-size=\"10\" fill=\"#ea580c\" font-weight=\"bold\">本周 (92%)</text>\n          </svg>\n        </div>\n\n        <div style=\"font-size:13px; font-weight:700; color:#5c4832; margin-bottom:8px;\">🏆 顶级验算草稿“神稿画廊”</div>\n        <div style=\"display:grid; grid-template-columns: repeat(3, 1fr); gap:12px;\">\n          <div style=\"background:#fff; border:1px solid #dcd0bc; border-radius:10px; padding:10px; text-align:center;\">\n            <div style=\"height:80px; background:#f5ecdc; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:28px;\">📄</div>\n            <div style=\"font-size:11px; font-weight:bold; margin-top:6px; color:#4a3a2a;\">10-22 口算题卡达标原件</div>\n            <div style=\"font-size:10px; color:#8c7860;\">凑十破十口诀应用</div>\n          </div>\n          <div style=\"background:#fff; border:1px solid #dcd0bc; border-radius:10px; padding:10px; text-align:center;\">\n            <div style=\"height:80px; background:#f5ecdc; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:28px;\">📄</div>\n            <div style=\"font-size:11px; font-weight:bold; margin-top:6px; color:#4a3a2a;\">10-18 动量守恒草稿</div>\n            <div style=\"font-size:10px; color:#8c7860;\">受力分析图清晰</div>\n          </div>\n          <div style=\"background:#fff; border:1px solid #dcd0bc; border-radius:10px; padding:10px; text-align:center;\">\n            <div style=\"height:80px; background:#f5ecdc; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:28px;\">📄</div>\n            <div style=\"font-size:11px; font-weight:bold; margin-top:6px; color:#4a3a2a;\">10-12 立体几何草稿</div>\n            <div style=\"font-size:10px; color:#8c7860;\">空间向量法满分</div>\n          </div>\n        </div>\n      </div>\n    "},"dojo":{"name":"兴趣屋","icon":"🤺","sub":"专项技能强化·万次见证实战擂台","plan":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>🎯 备赛大纲与技能量化阶梯制定</span>\n          <span style=\"font-size:12px; color:#0d9488; font-weight:bold;\">[规划模式]</span>\n        </div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:14px; margin-bottom:14px;\">\n          <div style=\"background:#f0fdfa; border:1.5px solid #5eead4; border-radius:12px; padding:12px;\">\n            <div style=\"font-size:13px; font-weight:bold; color:#0f766e;\">🏸 羽毛球冬训赛项目大纲</div>\n            <p style=\"font-size:12px; color:#134e4a; margin-top:4px;\">目标：2026区青少年锦标赛男单前八</p>\n            <p style=\"font-size:11px; color:#047857; margin-top:4px;\">每周训练 4 次，每次专注 60 分钟高强度</p>\n          </div>\n          <div style=\"background:#f0fdfa; border:1.5px solid #5eead4; border-radius:12px; padding:12px;\">\n            <div style=\"font-size:13px; font-weight:bold; color:#0f766e;\">🎯 量化 KPI 目标阶梯</div>\n            <p style=\"font-size:12px; color:#134e4a; margin-top:4px;\">• 反手发高远球到位率 ≥ 85%</p>\n            <p style=\"font-size:12px; color:#134e4a;\">• 步伐全场六点折返跑 ≤ 14.2 秒</p>\n          </div>\n        </div>\n        <button class=\"ui-btn plan\" onclick=\"showIslandToast('✅ 备赛计划已固化并写入日历！')\">确认锁定本月训练周期</button>\n      </div>\n    ","exec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>⚡ 实训秒表与动作计数器</span>\n          <span style=\"font-size:12px; color:#ea580c; font-weight:bold;\">[执行模式]</span>\n        </div>\n        <div style=\"text-align:center; padding:16px 0;\">\n          <div style=\"font-size:14px; color:#7d6b52; font-weight:600;\">当前训练项：高远球后场挥拍</div>\n          <div style=\"font-size:52px; font-weight:900; color:#ea580c; font-family:monospace; margin:8px 0;\" id=\"dojo-rep-counter\">420</div>\n          <div style=\"font-size:12px; color:#9a3412;\">今日目标：500 次挥拍</div>\n          <div style=\"display:flex; justify-content:center; gap:12px; margin-top:14px;\">\n            <button class=\"ui-btn exec\" onclick=\"incrementDojoReps(10)\">+ 10 次</button>\n            <button class=\"ui-btn exec\" onclick=\"incrementDojoReps(50)\">+ 50 次</button>\n            <button class=\"ui-btn\" onclick=\"incrementDojoReps(-10)\">- 10 次</button>\n          </div>\n        </div>\n\n        <div style=\"background:#fff7ed; border:1px solid #fdba74; border-radius:12px; padding:14px; margin-top:12px;\">\n          <div style=\"font-size:13px; font-weight:bold; color:#9a3412; margin-bottom:6px;\">🥊 赛后即时战报复盘</div>\n          <input type=\"text\" placeholder=\"输入对手姓名与比分 (例如: 21:18 胜 小明)\" style=\"width:100%; padding:8px 12px; border:1px solid #d4c5a9; border-radius:8px; font-size:12px; margin-bottom:8px;\" />\n          <textarea placeholder=\"得失分关键原因分析与对手战术破解...\" style=\"width:100%; height:60px; padding:8px 12px; border:1px solid #d4c5a9; border-radius:8px; font-size:12px;\"></textarea>\n          <button class=\"ui-btn exec\" style=\"margin-top:8px;\" onclick=\"showIslandToast('✅ 实训战报已成功归档！')\">提交今日实训战报</button>\n        </div>\n      </div>\n    ","rec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>🏆 历史对局胜率长卷与万次见证墙</span>\n          <span style=\"font-size:12px; color:#b45309; font-weight:bold;\">[记录模式]</span>\n        </div>\n        <div style=\"background:#fffdf7; border:1.5px solid #dcd0bc; border-radius:14px; padding:14px; margin-bottom:14px;\">\n          <div style=\"display:flex; justify-content:space-between; margin-bottom:6px;\">\n            <span style=\"font-size:13px; font-weight:bold; color:#4a3a2a;\">🔥 万次反手挥拍见证刻度</span>\n            <span style=\"font-size:12px; font-weight:bold; color:#b45309;\" id=\"dojo-milestone-text\">8,450 / 10,000 次 (84.5%)</span>\n          </div>\n          <div style=\"background:#ecd9b8; border-radius:10px; height:16px; overflow:hidden;\">\n            <div style=\"background:linear-gradient(90deg, #ea580c, #f59e0b); width:84.5%; height:100%;\"></div>\n          </div>\n          <div style=\"font-size:11px; color:#8c7860; margin-top:6px;\">“达人者，万次挥洒方能心手合一。” 距离解锁【千锤百炼】金质勋章还剩 1,550 次！</div>\n        </div>\n\n        <div style=\"font-size:13px; font-weight:bold; color:#4a3a2a; margin-bottom:8px;\">🏸 历史模拟赛胜率 (胜 14 / 负 4，胜率 77.8%)</div>\n        <div style=\"display:flex; gap:6px;\">\n          <span style=\"background:#d1fae5; color:#065f46; font-size:11px; font-weight:bold; padding:4px 8px; border-radius:6px;\">胜</span>\n          <span style=\"background:#d1fae5; color:#065f46; font-size:11px; font-weight:bold; padding:4px 8px; border-radius:6px;\">胜</span>\n          <span style=\"background:#fee2e2; color:#991b1b; font-size:11px; font-weight:bold; padding:4px 8px; border-radius:6px;\">负</span>\n          <span style=\"background:#d1fae5; color:#065f46; font-size:11px; font-weight:bold; padding:4px 8px; border-radius:6px;\">胜</span>\n          <span style=\"background:#d1fae5; color:#065f46; font-size:11px; font-weight:bold; padding:4px 8px; border-radius:6px;\">胜</span>\n        </div>\n      </div>\n    "},"cognition":{"name":"认知台","icon":"🧠","sub":"多维认知能力雷达与亲子双轨客观评估","plan":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>🧭 自定义五维/六维能力雷达模型配置</span>\n          <span style=\"font-size:12px; color:#0d9488; font-weight:bold;\">[规划模式]</span>\n        </div>\n        <p style=\"font-size:12px; color:#7d6b52; margin-bottom:12px;\">评估周期已固化：每双周周日 19:30 自动唤起亲子背对背双轨测评。</p>\n        <div style=\"display:grid; grid-template-columns: repeat(3, 1fr); gap:10px;\">\n          <div style=\"background:#f0fdfa; border:1px solid #99f6e4; padding:10px; border-radius:10px; font-size:12px;\">\n            <strong>维度 1: 专注深度 (0-100)</strong><br><span style=\"color:#0f766e;\">依据：番茄钟无中断率</span>\n          </div>\n          <div style=\"background:#f0fdfa; border:1px solid #99f6e4; padding:10px; border-radius:10px; font-size:12px;\">\n            <strong>维度 2: 坚毅指数 (0-100)</strong><br><span style=\"color:#0f766e;\">依据：难题攻坚耗时与挫折反弹</span>\n          </div>\n          <div style=\"background:#f0fdfa; border:1px solid #99f6e4; padding:10px; border-radius:10px; font-size:12px;\">\n            <strong>维度 3: 情绪自控 (0-100)</strong><br><span style=\"color:#0f766e;\">依据：挫折冲突时的暂停表现</span>\n          </div>\n        </div>\n      </div>\n    ","exec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>⚖️ 亲子背对背双轨打分工单 (物证强制门槛)</span>\n          <span style=\"font-size:12px; color:#ea580c; font-weight:bold;\">[执行模式]</span>\n        </div>\n        <div style=\"background:#fff7ed; border:1.5px solid #fdba74; border-radius:14px; padding:14px; margin-bottom:14px;\">\n          <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:16px;\">\n            <div>\n              <div style=\"font-size:13px; font-weight:bold; color:#c2410c; margin-bottom:6px;\">👦 孩子自评打分</div>\n              <label style=\"font-size:12px;\">专注深度：<strong id=\"child-val\">85分</strong></label>\n              <input type=\"range\" min=\"50\" max=\"100\" value=\"85\" style=\"width:100%;\" oninput=\"document.getElementById('child-val').innerText = this.value + '分'\" />\n            </div>\n            <div>\n              <div style=\"font-size:13px; font-weight:bold; color:#0369a1; margin-bottom:6px;\">👨 家长独立评分</div>\n              <label style=\"font-size:12px;\">专注深度：<strong id=\"parent-val\">78分</strong></label>\n              <input type=\"range\" min=\"50\" max=\"100\" value=\"78\" style=\"width:100%;\" oninput=\"document.getElementById('parent-val').innerText = this.value + '分'\" />\n            </div>\n          </div>\n        </div>\n\n        <div style=\"background:#fff; border:1.5px dashed #ea580c; border-radius:12px; padding:12px; text-align:center;\">\n          <div style=\"font-size:12px; font-weight:bold; color:#ea580c;\">⚠️ 强制物证门槛：必须上传至少 1 项客观物证方可保存提交！</div>\n          <div style=\"font-size:11px; color:#7d6b52; margin-top:4px;\">例如：整洁草稿纸照片、专注番茄钟记录、实战视频片段。</div>\n          <button class=\"ui-btn exec\" style=\"margin-top:8px;\" onclick=\"showIslandToast('📸 已选择并绑定客观测评物证图片！')\">📷 上传客观物证照片</button>\n        </div>\n      </div>\n    ","rec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>📊 亲子认知对比柱状图与全息穿透墙</span>\n          <span style=\"font-size:12px; color:#b45309; font-weight:bold;\">[记录模式]</span>\n        </div>\n        <div style=\"background:#fffdfa; border:1px solid #ecd9b8; border-radius:12px; padding:14px; margin-bottom:12px;\">\n          <div style=\"font-size:12px; font-weight:bold; color:#4a3a2a; margin-bottom:8px;\">五维亲子认知重合度分析 (差异度仅 6.2%，认知高度一致)</div>\n          <div style=\"display:flex; flex-direction:column; gap:8px;\">\n            <div>\n              <div style=\"display:flex; justify-content:space-between; font-size:11px;\"><span>专注深度 (自评85 vs 家长78)</span><span style=\"color:#059669;\">吻合度高</span></div>\n              <div style=\"background:#eee; height:8px; border-radius:4px; overflow:hidden;\"><div style=\"background:#ea580c; width:82%; height:100%;\"></div></div>\n            </div>\n            <div>\n              <div style=\"display:flex; justify-content:space-between; font-size:11px;\"><span>坚毅品质 (自评90 vs 家长88)</span><span style=\"color:#059669;\">极高吻合</span></div>\n              <div style=\"background:#eee; height:8px; border-radius:4px; overflow:hidden;\"><div style=\"background:#0d9488; width:89%; height:100%;\"></div></div>\n            </div>\n          </div>\n        </div>\n        <button class=\"ui-btn\" onclick=\"showIslandToast('🔍 已穿透加载 2026年10月期评估所绑定的 6 张客观原始物证照片！')\">🔍 全息穿透：查看历次评估绑定的原始物证</button>\n      </div>\n    "},"cultivation":{"name":"修身阁","icon":"🏛️","sub":"三纲八目德行涵养·经典古籍解惑寻道池","plan":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>📖 多周期立项与经典古籍书单</span>\n          <span style=\"font-size:12px; color:#0d9488; font-weight:bold;\">[规划模式]</span>\n        </div>\n        <p style=\"font-size:12px; color:#7d6b52; margin-bottom:10px;\">\n          本模块与<strong>【个人行为规范】</strong>通过《知止笃行道》强关联：修身于阁，沉淀为立宪戒律。\n        </p>\n        <div style=\"background:#f0fdfa; border:1.5px solid #5eead4; border-radius:12px; padding:12px; margin-bottom:12px;\">\n          <div style=\"font-size:13px; font-weight:bold; color:#0f766e;\">📜 本学期三纲八目修身大纲：《传习录》知行合一项目</div>\n          <p style=\"font-size:12px; color:#134e4a; margin-top:4px;\">家长已协助选定困惑寻道经典：《论语》《大学》《传习录精选》</p>\n        </div>\n      </div>\n    ","exec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>⚡ 八目修行打卡与困惑寻道解惑记录</span>\n          <span style=\"font-size:12px; color:#ea580c; font-weight:bold;\">[执行模式]</span>\n        </div>\n        <div style=\"display:grid; grid-template-columns: repeat(4, 1fr); gap:8px; margin-bottom:14px;\">\n          <label style=\"background:#fff; border:1px solid #d4c5a9; border-radius:10px; padding:8px; font-size:12px; display:flex; align-items:center; gap:6px; cursor:pointer;\">\n            <input type=\"checkbox\" checked /> 格物致知\n          </label>\n          <label style=\"background:#fff; border:1px solid #d4c5a9; border-radius:10px; padding:8px; font-size:12px; display:flex; align-items:center; gap:6px; cursor:pointer;\">\n            <input type=\"checkbox\" checked /> 诚意正心\n          </label>\n          <label style=\"background:#fff; border:1px solid #d4c5a9; border-radius:10px; padding:8px; font-size:12px; display:flex; align-items:center; gap:6px; cursor:pointer;\">\n            <input type=\"checkbox\" /> 克己修身\n          </label>\n          <label style=\"background:#fff; border:1px solid #d4c5a9; border-radius:10px; padding:8px; font-size:12px; display:flex; align-items:center; gap:6px; cursor:pointer;\">\n            <input type=\"checkbox\" /> 知止有定\n          </label>\n        </div>\n\n        <div style=\"background:#fefce8; border:1.5px solid #fde047; border-radius:12px; padding:14px;\">\n          <div style=\"font-size:13px; font-weight:bold; color:#854d0e; margin-bottom:6px;\">💡 今日古籍寻道解惑记录</div>\n          <div style=\"font-size:12px; color:#713f12; margin-bottom:4px;\"><strong>孩子心中的困惑：</strong> 遇到同学嘲笑我的解题方法比较笨，心里很不舒服怎么办？</div>\n          <div style=\"font-size:12px; color:#15803d; background:#fff; padding:8px; border-radius:8px; border:1px solid #bbf7d0;\">\n            <strong>先贤古籍指引 (家长协同录入)：</strong> 《论语·学而》：“人不知而不愠，不亦君子乎？” 只要方法扎实，不求速成，何须在意他人浮躁的非议。\n          </div>\n          <button class=\"ui-btn primary\" style=\"margin-top:10px;\" onclick=\"showIslandToast('✅ 解惑记录已归档，已同步为人生底线树提供品格养分！')\">完成解惑打卡并沉淀至规范书</button>\n        </div>\n      </div>\n    ","rec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>📜 365天八目打卡热力图与寻道智慧卷轴</span>\n          <span style=\"font-size:12px; color:#b45309; font-weight:bold;\">[记录模式]</span>\n        </div>\n        <div style=\"background:#fffdf7; border:1px solid #ecd9b8; border-radius:12px; padding:14px;\">\n          <div style=\"font-size:12px; font-weight:bold; color:#5c4832; margin-bottom:8px;\">连续打卡 42 天 · 精神丰盈热力矩阵</div>\n          <div style=\"display:flex; gap:4px; flex-wrap:wrap;\">\n            <div style=\"width:12px; height:12px; background:#10b981; border-radius:2px;\"></div>\n            <div style=\"width:12px; height:12px; background:#10b981; border-radius:2px;\"></div>\n            <div style=\"width:12px; height:12px; background:#059669; border-radius:2px;\"></div>\n            <div style=\"width:12px; height:12px; background:#10b981; border-radius:2px;\"></div>\n            <div style=\"width:12px; height:12px; background:#34d399; border-radius:2px;\"></div>\n            <div style=\"width:12px; height:12px; background:#059669; border-radius:2px;\"></div>\n            <div style=\"width:12px; height:12px; background:#10b981; border-radius:2px;\"></div>\n            <div style=\"width:12px; height:12px; background:#047857; border-radius:2px;\"></div>\n            <div style=\"width:12px; height:12px; background:#10b981; border-radius:2px;\"></div>\n            <div style=\"width:12px; height:12px; background:#059669; border-radius:2px;\"></div>\n          </div>\n        </div>\n      </div>\n    "},"treasury":{"name":"藏金屋","icon":"💰","sub":"少儿独立财商实践与零用金收支台账","plan":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>📋 少儿财商启蒙与理性消费准则</span>\n          <span style=\"font-size:12px; color:#0d9488; font-weight:bold;\">[规划准则]</span>\n        </div>\n        <div style=\"background:#f0fdfa; border:1.5px solid #5eead4; border-radius:14px; padding:14px; margin-bottom:14px;\">\n          <div style=\"font-size:13px; font-weight:bold; color:#0f766e;\">💡 独立财商养成原则</div>\n          <div style=\"font-size:12px; color:#134e4a; margin:6px 0; line-height:1.6;\">\n            <p>• <strong>劳动所得与零花钱</strong>：每周一固定零用金预算，家庭自主劳动奖励。</p>\n            <p>• <strong>量入为出，严禁透支</strong>：支出金额必须小于可用结余，理性消费。</p>\n            <p>• <strong>真实记账，账实相符</strong>：每笔开销留存小票物证，养成终身记账好习惯。</p>\n          </div>\n        </div>\n      </div>\n    ","exec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>💰 零用金极速收支记账器</span>\n          <span style=\"font-size:12px; color:#ea580c; font-weight:bold;\">[执行模式]</span>\n        </div>\n        <div style=\"background:#fffcf5; border:1px solid #fed7aa; border-radius:12px; padding:12px; margin-bottom:12px;\">\n          <div style=\"font-size:12px; color:#78350f; font-weight:bold;\">当前零用金总净资产：<strong style=\"color:#b45309; font-size:16px;\">¥3,280.00</strong></div>\n        </div>\n        <div style=\"display:flex; gap:10px; margin-bottom:12px;\">\n          <button class=\"ui-btn primary\" onclick=\"enterSecondaryWorkspace(&apos;treasury&apos;, &apos;specialized&apos;)\">✍️ 快速记录一笔收支</button>\n        </div>\n      </div>\n    ","rec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>📊 个人零用金总资产与收支台账</span>\n          <span style=\"font-size:12px; color:#b45309; font-weight:bold;\">[记录模式]</span>\n        </div>\n        <div style=\"font-size:13px; font-weight:bold; color:#4a3a2a; margin-bottom:8px;\">总净资产结余: ¥3,280.00 (累计收入 ¥4,200.00 / 累计支出 ¥920.00)</div>\n        <div style=\"margin-top:10px;\">\n          <button class=\"ui-btn\" onclick=\"enterSecondaryWorkspace(&apos;treasury&apos;, &apos;specialized&apos;)\">📜 查看完整收支台账明细</button>\n        </div>\n      </div>\n    "},"achieve":{"name":"成就馆","icon":"🏆","sub":"3D虚拟荣誉殿堂·全域成果自动记录与至暗翻盘长卷","rec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>🏆 3D 虚拟荣誉殿堂与至暗时刻翻盘长卷</span>\n          <span style=\"font-size:12px; color:#b45309; font-weight:bold;\">[纯结果记录功能]</span>\n        </div>\n        <div style=\"background:#261f18; border:2px solid #b45309; border-radius:14px; padding:14px; color:#fff;\">\n          <div style=\"font-size:13px; font-weight:900; color:#fbbf24; margin-bottom:8px;\">🏛️ 结果荣誉展柜 (金玉多宝格)</div>\n          <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; text-align:center; font-size:11px;\">\n            <div style=\"background:rgba(255,255,255,0.08); padding:8px; border-radius:8px;\">\n              <div style=\"font-size:24px;\">🏸</div>\n              <div style=\"color:#fde68a; font-weight:bold;\">羽球公开赛亚军奖杯</div>\n            </div>\n            <div style=\"background:rgba(255,255,255,0.08); padding:8px; border-radius:8px;\">\n              <div style=\"font-size:24px;\">📘</div>\n              <div style=\"color:#fde68a; font-weight:bold;\">几何压轴攻坚金牌</div>\n            </div>\n            <div style=\"background:rgba(255,255,255,0.08); padding:8px; border-radius:8px;\">\n              <div style=\"font-size:24px;\">📜</div>\n              <div style=\"color:#fde68a; font-weight:bold;\">修身问道百日金册</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    "},"tree":{"name":"个人行为规范","icon":"📜","sub":"古籍风骨线装法典·终身品格戒律与现实考验实录","exec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>⚡ 现实诱惑与道德考验登记工单</span>\n          <span style=\"font-size:12px; color:#ea580c; font-weight:bold;\">[执行模式]</span>\n        </div>\n        <div style=\"background:#f0fdf4; border:1.5px solid #86efac; border-radius:14px; padding:14px; margin-bottom:12px;\">\n          <div style=\"font-size:13px; font-weight:bold; color:#166534; margin-bottom:6px;\">✨ 记录一次守住底线的真实考验</div>\n          <div style=\"font-size:12px; color:#14532d; line-height:1.6;\">\n            <strong>情境：</strong> 测验中同桌递纸条要求对答案，我果断拒绝并专注自己的草稿演算。<br>\n            <strong>心路：</strong> 虽有友情顾虑，但谨记“诚信立本”，事后向同桌解释并帮他答疑。\n          </div>\n          <div style=\"display:flex; justify-content:space-between; align-items:center; margin-top:12px;\">\n            <span style=\"font-size:11px; color:#15803d; font-weight:bold;\">考验验证：已通过家长见证核验 ✓</span>\n            <button class=\"ui-btn primary\" onclick=\"recordTreeTestDemo()\">盖上【百炼成金】品格印章 (+1 考验)</button>\n          </div>\n        </div>\n      </div>\n    ","rec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>📜《个人行为规范》· 古籍风骨线装法典长卷</span>\n          <span style=\"font-size:12px; color:#b45309; font-weight:bold;\">[纯记录功能·古籍风格]</span>\n        </div>\n        <div style=\"background:#faf6ed; border:3px double #991b1b; border-radius:12px; padding:16px;\">\n          <div style=\"display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px solid #991b1b; padding-bottom:8px; margin-bottom:10px;\">\n            <strong style=\"color:#7f1d1d; font-size:14px;\">齐天终身品格戒律法典</strong>\n            <span style=\"border:1.5px solid #b91c1c; color:#b91c1c; font-size:10px; font-weight:bold; padding:2px 6px; border-radius:4px;\">知止笃行 · 立身之本</span>\n          </div>\n          <div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; font-size:11px;\">\n            <div style=\"background:#fff; border:1px solid #d4c5a9; padding:8px; border-radius:6px;\">\n              <strong style=\"color:#7f1d1d;\">🌱 根部：诚意正心</strong>\n              <div style=\"color:#451a03; margin-top:2px;\">“不自欺、言行如一”</div>\n              <div style=\"color:#78350f; font-size:10px; margin-top:4px;\">出处：《大学》</div>\n            </div>\n            <div style=\"background:#fff; border:1px solid #d4c5a9; padding:8px; border-radius:6px;\">\n              <strong style=\"color:#7f1d1d;\">🪵 主干：做人底线</strong>\n              <div style=\"color:#451a03; margin-top:2px;\">“考试绝不作弊、诺必践”</div>\n              <div style=\"color:#78350f; font-size:10px; margin-top:4px;\">出处：《论语》</div>\n            </div>\n            <div style=\"background:#fff; border:1px solid #d4c5a9; padding:8px; border-radius:6px;\">\n              <strong style=\"color:#7f1d1d;\">🍃 枝叶：做事原则</strong>\n              <div style=\"color:#451a03; margin-top:2px;\">“错题不过夜、桌案日日清”</div>\n              <div style=\"color:#78350f; font-size:10px; margin-top:4px;\">出处：《传习录》</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    "},"note":{"name":"每日随记","icon":"📝","sub":"时序心流双轨日记簿·客观真实流与主观随笔","exec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>⚡ 双轨随记：真实客观流 + 主观心流笔触</span>\n          <span style=\"font-size:12px; color:#ea580c; font-weight:bold;\">[执行模式]</span>\n        </div>\n        <!-- 上半轨：自动客观真实流水 -->\n        <div style=\"background:#f8fafc; border:1.5px solid #cbd5e1; border-radius:12px; padding:12px; margin-bottom:12px;\">\n          <div style=\"font-size:12px; font-weight:bold; color:#475569; margin-bottom:6px;\">📊 今日全岛客观自动真实流水 (自动聚合)</div>\n          <ul style=\"font-size:11px; color:#64748b; line-height:1.6; list-style:none;\">\n            <li>✓ 15:20 校史馆：完成口算进退位题卡演算，专注 20 分钟，口算卡 1 张。</li>\n            <li>✓ 17:00 兴趣屋：羽毛球反手挥拍 420 次，战报 1 场 (21:18 胜)。</li>\n            <li>✓ 19:10 修身阁：古籍打卡《传习录》，解惑 1 条。</li>\n          </ul>\n        </div>\n\n        <!-- 下半轨：主观心流日记 -->\n        <div style=\"background:#fffdf7; border:1.5px solid #d4c5a9; border-radius:12px; padding:12px;\">\n          <div style=\"font-size:12px; font-weight:bold; color:#4a3a2a; margin-bottom:6px;\">✍️ 今日心流与情绪反思 (沉浸随笔)</div>\n          <textarea style=\"width:100%; height:80px; padding:8px 12px; border:1px solid #dcd0bc; border-radius:8px; font-size:12px; line-height:1.5;\" placeholder=\"今天最触动我的一件事是...我的感悟是...\"></textarea>\n          <button class=\"ui-btn exec\" style=\"margin-top:8px;\" onclick=\"showIslandToast('✅ 随记已保存并归入历史瀑布流！')\">保存今日双轨随记</button>\n        </div>\n      </div>\n    ","rec":"\n      <div class=\"ui-card\">\n        <div class=\"ui-card-title\">\n          <span>📚 随记瀑布流时间轴与情绪词云</span>\n          <span style=\"font-size:12px; color:#b45309; font-weight:bold;\">[记录模式]</span>\n        </div>\n        <div style=\"background:#fffdf7; border:1px solid #dcd0bc; border-radius:12px; padding:12px;\">\n          <div style=\"font-size:12px; font-weight:bold; color:#4a3a2a; margin-bottom:6px;\">☁️ 情绪高频关键词云</div>\n          <div style=\"display:flex; gap:8px; flex-wrap:wrap;\">\n            <span style=\"font-size:16px; font-weight:bold; color:#ea580c;\">专注突破</span>\n            <span style=\"font-size:14px; font-weight:bold; color:#0d9488;\">坦荡诚实</span>\n            <span style=\"font-size:13px; color:#3b82f6;\">坚持不懈</span>\n            <span style=\"font-size:15px; font-weight:bold; color:#b45309;\">心流喜悦</span>\n          </div>\n        </div>\n      </div>\n    "}};

// ==========================================================================
// 全局状态仓库
// ==========================================================================
let currentGlobalView = 'exec'; // 'exec' | 'plan'
let currentWsPavilion = 'study';
let currentWsMode = 'exec';
let childrenFollowEnabled = true;
let isArchiveDrawerOpen = false;
let currentParticleMode = 'gold'; // 'gold' | 'leaves' | 'petals' | 'rain'
let isInTabletFrame = true;
window.isBrowseMode = true; // 默认开启浏览模式（移动平板最佳触控体验：单击直达）
let islandControlsExpanded = false;
let activeOriginalPanel = null;
let activeSelectedPavilion = 'study';

// 自由画布平移与缩放状态
let islandPanX = 0;
let islandPanY = 0;
let islandZoom = 1.0;
let currentHomeLayoutIndex = 0; // 0: 自由布局, 1: 网格布局, 2: 环形布局
const homeLayoutNames = ['自由布局', '网格布局', '环形布局'];

// ==========================================================================
// 1. 自由画布平移、缩放与节点拖拽引擎
// ==========================================================================

// ==========================================================================
// 1:1 终身岛民鹰眼导航地图核心动力学引擎 (SVG 拓扑微缩节点 + 自由视口框拖拽 + 点击居中)
// ==========================================================================
let islandMinimapBounds = null;
let islandMinimapScale = 1;
let islandMinimapOffsetX = 0;
let islandMinimapOffsetY = 0;
let isDraggingIslandMinimapVp = false;
let islandMinimapEventsBound = false;

function applyIslandTransform() {
  const canvasWorld = document.getElementById('island-world-canvas');
  const stage = document.getElementById('island-canvas-stage');
  if (canvasWorld) {
    canvasWorld.style.transformOrigin = '0 0';
    canvasWorld.style.transform = 'translate3d(' + islandPanX + 'px, ' + islandPanY + 'px, 0) scale(' + islandZoom + ')';
  }
  // 联动海岛沙盘背景微视差平移，提供极佳的物理滑动反馈
  if (stage) {
    const bgX = (islandPanX * 0.35).toFixed(1);
    const bgY = (islandPanY * 0.35).toFixed(1);
    stage.style.backgroundPosition = `calc(50% + ${bgX}px) calc(100% + ${bgY}px)`;
  }
  window.islandPanX = islandPanX;
  window.islandPanY = islandPanY;
  window.islandZoom = islandZoom;
  updateIslandMinimap();
}

function updateIslandMinimap() {
  const dock = document.getElementById('island-navigation-dock');
  const panel = document.getElementById('island-minimap-dock');
  const svg = document.getElementById('island-minimap-svg');
  const nodesGroup = document.getElementById('island-minimap-nodes');
  const vpRect = document.getElementById('island-minimap-viewport');
  const stage = document.getElementById('island-canvas-stage');
  const canvasWorld = document.getElementById('island-world-canvas');
  if (!dock || !panel || !svg || !nodesGroup || !vpRect || !stage || !canvasWorld) return;
  if (panel.classList.contains('is-collapsed')) return;

  if (!islandMinimapEventsBound) {
    initIslandMinimapEvents();
  }

  const stageW = stage.clientWidth || 1000;
  const stageH = stage.clientHeight || 700;

  // Viewport in canvas space
  const vpLeft = -islandPanX / islandZoom;
  const vpTop = -islandPanY / islandZoom;
  const vpWidth = stageW / islandZoom;
  const vpHeight = stageH / islandZoom;

  // Pavilion nodes in world
  const pavilionNodes = Array.from(canvasWorld.querySelectorAll('.pavilion-node'));
  const nodeDataList = pavilionNodes.map(node => {
    const left = node.offsetLeft || 0;
    const top = node.offsetTop || 0;
    const w = node.offsetWidth || 120;
    const h = node.offsetHeight || 90;
    let type = 'stage';
    if (node.id === 'node-study') type = 'stage';
    else if (node.id === 'node-dojo') type = 'project';
    else if (node.id === 'node-cultivation') type = 'task';
    else if (node.id === 'node-cognition') type = 'root';
    return { id: node.id, x: left, y: top, w, h, type };
  });

  // 1:1 终身岛民世界模型：基础包围盒以海岛舞台完整范围 (0, 0, stageW, stageH) 为基准
  let minX = 0;
  let minY = 0;
  let maxX = stageW;
  let maxY = stageH;

  nodeDataList.forEach(n => {
    minX = Math.min(minX, n.x);
    minY = Math.min(minY, n.y);
    maxX = Math.max(maxX, n.x + n.w);
    maxY = Math.max(maxY, n.y + n.h);
  });

  // 将当前视口范围也纳入总投影范围，确保视口红框在小地图内永远不发生负坐标溢出
  minX = Math.min(minX, vpLeft);
  minY = Math.min(minY, vpTop);
  maxX = Math.max(maxX, vpLeft + vpWidth);
  maxY = Math.max(maxY, vpTop + vpHeight);

  const pad = Math.max(40, 0.05 * Math.max(maxX - minX, maxY - minY));
  minX -= pad;
  minY -= pad;
  maxX += pad;
  maxY += pad;

  const spanX = Math.max(1, maxX - minX);
  const spanY = Math.max(1, maxY - minY);
  
  // 180 x 100 紧凑微缩规格
  const svgW = 180;
  const svgH = 100;
  const scale = Math.min((svgW - 16) / spanX, (svgH - 14) / spanY);
  const offsetX = (svgW - spanX * scale) / 2;
  const offsetY = (svgH - spanY * scale) / 2;

  islandMinimapBounds = { minX, minY, maxX, maxY };
  islandMinimapScale = scale;
  islandMinimapOffsetX = offsetX;
  islandMinimapOffsetY = offsetY;

  // Render nodes
  let nodesHtml = '';
  nodeDataList.forEach(n => {
    const rx = offsetX + (n.x - minX) * scale;
    const ry = offsetY + (n.y - minY) * scale;
    const rw = Math.max(6, n.w * scale);
    const rh = Math.max(5, n.h * scale);
    const round = Math.min(3, rw / 3, rh / 3);
    nodesHtml += `<rect x="${rx.toFixed(1)}" y="${ry.toFixed(1)}" width="${rw.toFixed(1)}" height="${rh.toFixed(1)}" rx="${round.toFixed(1)}" class="a-my-island-work-minimap-node is-${n.type}"></rect>`;
  });
  nodesGroup.innerHTML = nodesHtml;

  // Viewport rect
  const vx = offsetX + (vpLeft - minX) * scale;
  const vy = offsetY + (vpTop - minY) * scale;
  const vw = Math.max(8, vpWidth * scale);
  const vh = Math.max(8, vpHeight * scale);
  vpRect.setAttribute('x', vx.toFixed(1));
  vpRect.setAttribute('y', vy.toFixed(1));
  vpRect.setAttribute('width', vw.toFixed(1));
  vpRect.setAttribute('height', vh.toFixed(1));
}

function initIslandMinimapEvents() {
  const svg = document.getElementById('island-minimap-svg');
  const vpRect = document.getElementById('island-minimap-viewport');
  const stage = document.getElementById('island-canvas-stage');
  if (!svg || !vpRect || !stage || islandMinimapEventsBound) return;
  islandMinimapEventsBound = true;

  // 点击小地图空白处将该点平移居中至画布中心
  svg.addEventListener('click', (e) => {
    if (isDraggingIslandMinimapVp || !islandMinimapBounds) return;
    const rect = svg.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * 180;
    const svgY = ((e.clientY - rect.top) / rect.height) * 100;

    const targetX = islandMinimapBounds.minX + (svgX - islandMinimapOffsetX) / islandMinimapScale;
    const targetY = islandMinimapBounds.minY + (svgY - islandMinimapOffsetY) / islandMinimapScale;

    const stageW = stage.clientWidth || 1000;
    const stageH = stage.clientHeight || 700;

    islandPanX = stageW / 2 - targetX * islandZoom;
    islandPanY = stageH / 2 - targetY * islandZoom;
    applyIslandTransform();
    if (typeof bindPavilionNodesClickGuards === 'function') bindPavilionNodesClickGuards();
  });

  // 鼠标/触控拖拽视口框实时平移画布
  vpRect.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!islandMinimapBounds) return;
    isDraggingIslandMinimapVp = true;
    try { svg.setPointerCapture(e.pointerId); } catch {}

    const initialClientX = e.clientX;
    const initialClientY = e.clientY;
    const initialPanX = islandPanX;
    const initialPanY = islandPanY;

    const onPointerMove = (ev) => {
      const rect = svg.getBoundingClientRect();
      const deltaSvgX = ((ev.clientX - initialClientX) / rect.width) * 180;
      const deltaSvgY = ((ev.clientY - initialClientY) / rect.height) * 100;
      const deltaCanvasX = deltaSvgX / islandMinimapScale;
      const deltaCanvasY = deltaSvgY / islandMinimapScale;

      islandPanX = initialPanX - deltaCanvasX * islandZoom;
      islandPanY = initialPanY - deltaCanvasY * islandZoom;
      applyIslandTransform();
    if (typeof bindPavilionNodesClickGuards === 'function') bindPavilionNodesClickGuards();
    };

    const onPointerUp = (ev) => {
      try { svg.releasePointerCapture(ev.pointerId); } catch {}
      svg.removeEventListener('pointermove', onPointerMove);
      svg.removeEventListener('pointerup', onPointerUp);
      svg.removeEventListener('pointercancel', onPointerUp);
      setTimeout(() => { isDraggingIslandMinimapVp = false; }, 50);
    };

    svg.addEventListener('pointermove', onPointerMove);
    svg.addEventListener('pointerup', onPointerUp);
    svg.addEventListener('pointercancel', onPointerUp);
  });
}

function toggleIslandMinimapDock(forceState) {
  const panel = document.getElementById('island-minimap-dock');
  const btn = document.getElementById('island-minimap-toggle-btn');
  if (!panel) return;
  const isCurrentlyCollapsed = panel.classList.contains('is-collapsed');
  const shouldCollapse = typeof forceState === 'boolean' ? !forceState : !isCurrentlyCollapsed;
  panel.classList.toggle('is-collapsed', shouldCollapse);
  if (btn) {
    btn.classList.toggle('is-active', !shouldCollapse);
    btn.setAttribute('aria-label', shouldCollapse ? '展开导航地图' : '收起导航地图');
  }
  if (!shouldCollapse) {
    updateIslandMinimap();
  }
}

function toggleMinimap() { toggleIslandMinimapDock(); }
function updateMinimapViewport() { updateIslandMinimap(); }

// 自由布局切换 (自由布局 / 网格布局 / 环形布局)
// 执行视图顶部：核心学期目标横幅折叠与展开控制器
function toggleIslandGoalDock() {}

function cycleHomeLayout() {
  currentHomeLayoutIndex = (currentHomeLayoutIndex + 1) % 3;
  const lbl = document.getElementById('lbl-home-layout');
  const btn = document.getElementById('btn-home-layout');
  if (lbl) lbl.innerText = homeLayoutNames[currentHomeLayoutIndex];
  if (btn) btn.classList.toggle('is-active', currentHomeLayoutIndex === 0);

  const nodes = Array.from(document.querySelectorAll('#island-pavilion-grid .pavilion-node'));
  const count = nodes.length || 4;

  if (currentHomeLayoutIndex === 1) {
    // 网格布局 (2列对称规整矩阵)
    const cols = count <= 4 ? 2 : 3;
    nodes.forEach((el, idx) => {
      const r = Math.floor(idx / cols);
      const c = idx % cols;
      const leftStep = cols === 2 ? [28, 72] : [22, 50, 78];
      el.style.top = (28 + r * 36) + '%';
      el.style.left = leftStep[c] + '%';
    });
    showIslandToast('▦ 网格布局：已将 ' + count + ' 大规划场馆智能对齐为规整矩阵');
  } else if (currentHomeLayoutIndex === 2) {
    // 环形布局 (以小岛中心环绕排布)
    const r = 26;
    const centerX = 50;
    const centerY = 46;
    nodes.forEach((el, idx) => {
      const angle = ((idx * (360 / count)) - 90) * (Math.PI / 180);
      const top = centerY + r * Math.sin(angle);
      const left = centerX + (r * 1.25) * Math.cos(angle);
      el.style.top = top.toFixed(1) + '%';
      el.style.left = left.toFixed(1) + '%';
    });
    showIslandToast('⭕ 环形布局：已将 ' + count + ' 大规划场馆以小岛为中心环绕排布');
  } else {
    // 恢复自由对称布局
    const freePos = [
      { top: '27%', left: '26%' }, { top: '27%', left: '74%' },
      { top: '63%', left: '26%' }, { top: '63%', left: '74%' },
      { top: '24%', left: '50%' }, { top: '66%', left: '50%' }
    ];
    nodes.forEach((el, idx) => {
      const p = freePos[idx % freePos.length];
      el.style.top = p.top;
      el.style.left = p.left;
    });
    showIslandToast('🌱 自由布局：已恢复 ' + count + ' 大规划场馆生机漫游分布');
  }
}

// 适应画布 (全览9大功能馆)
function fitHomeCanvasView() {
  islandZoom = 1.0;
  islandPanX = 0;
  islandPanY = 0;
  applyIslandTransform();
  showIslandToast('⛶ 画布已自适应居中全览 6 大规划功能馆');
}

// 聚焦节点 (放大至当前高亮节点)
function focusHomeActiveNode() {
  const targetId = 'node-' + activeSelectedPavilion;
  const el = document.getElementById(targetId) || document.getElementById(activeSelectedPavilion);
  const stage = document.getElementById('island-canvas-stage');
  if (el && stage) {
    islandZoom = 1.45;
    const sRect = stage.getBoundingClientRect();
    const nodeCenterX = el.offsetLeft + (el.offsetWidth || 104) / 2;
    const nodeCenterY = el.offsetTop + (el.offsetHeight || 100) / 2;
    islandPanX = (sRect.width / 2) - nodeCenterX * islandZoom;
    islandPanY = (sRect.height / 2) - nodeCenterY * islandZoom;
    applyIslandTransform();
    if (typeof bindPavilionNodesClickGuards === 'function') bindPavilionNodesClickGuards();
    showIslandToast('🎯 已聚焦放大到当前核心攻坚功能馆');
  }
}

// 居中节点
function centerHomeActiveNode() {
  const targetId = 'node-' + activeSelectedPavilion;
  const el = document.getElementById(targetId) || document.getElementById(activeSelectedPavilion);
  const stage = document.getElementById('island-canvas-stage');
  if (el && stage) {
    const sRect = stage.getBoundingClientRect();
    const nodeCenterX = el.offsetLeft + (el.offsetWidth || 104) / 2;
    const nodeCenterY = el.offsetTop + (el.offsetHeight || 100) / 2;
    islandPanX = (sRect.width / 2) - nodeCenterX * islandZoom;
    islandPanY = (sRect.height / 2) - nodeCenterY * islandZoom;
    applyIslandTransform();
    if (typeof bindPavilionNodesClickGuards === 'function') bindPavilionNodesClickGuards();
    showIslandToast('⊙ 已将选中功能馆平移至视口中央');
  }
}

// 查看范围切换
let homeScopeIndex = 0;
function toggleHomeViewScope() {
  homeScopeIndex = (homeScopeIndex + 1) % 3;
  const scopes = [
    '全部 9 大全息生命功能馆',
    '⚡ 今日学业冲刺与德行考验 (高亮校史馆·修身阁·底线树)',
    '🧭 战略认知与财商进阶 (高亮认知台·藏金屋·成就馆)'
  ];

  const pavilions = document.querySelectorAll('.pavilion-node');
  pavilions.forEach(p => p.style.opacity = '1');

  if (homeScopeIndex === 1) {
    ['node-dojo', 'node-cognition', 'node-treasury'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.opacity = '0.35';
    });
  } else if (homeScopeIndex === 2) {
    ['node-study', 'node-dojo', 'node-cultivation'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.opacity = '0.35';
    });
  }

  showIslandToast('🔍 查看范围已切换为：' + scopes[homeScopeIndex]);
}

// 增加自定义节点
// ==========================================================================
// 【规划视图新增自定义功能模块控制器】
// ==========================================================================
let selectedModuleIcon = '🎨';
let customModuleCounter = 1;

function openAddModuleModal() {
  const modal = document.getElementById('add-module-modal');
  if (modal) {
    modal.classList.add('open');
    const input = document.getElementById('input-module-name');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 120);
    }
  }
}

function closeAddModuleModal() {
  const modal = document.getElementById('add-module-modal');
  if (modal) modal.classList.remove('open');
}

function handleAddModuleBackdropClick(e) {
  if (e.target && e.target.id === 'add-module-modal') {
    closeAddModuleModal();
  }
}

function pickModulePresetIcon(btn, icon) {
  selectedModuleIcon = icon;
  document.querySelectorAll('#module-icon-preset-grid .icon-preset-btn').forEach(b => b.classList.remove('is-active'));
  if (btn) btn.classList.add('is-active');
  const customInput = document.getElementById('input-custom-module-icon');
  if (customInput) customInput.value = icon;
}

function handleCustomModuleIconInput(val) {
  if (val && val.trim()) {
    selectedModuleIcon = val.trim();
    document.querySelectorAll('#module-icon-preset-grid .icon-preset-btn').forEach(b => {
      b.classList.toggle('is-active', b.getAttribute('data-icon') === selectedModuleIcon);
    });
  }
}

function confirmAddNewModule() {
  const nameInput = document.getElementById('input-module-name');
  const name = nameInput ? nameInput.value.trim() : '';
  if (!name) {
    showIslandToast('⚠️ 请输入模块名称！');
    if (nameInput) nameInput.focus();
    return;
  }

  const badgeInput = document.getElementById('input-module-badge');
  const badgeText = (badgeInput && badgeInput.value.trim()) ? badgeInput.value.trim() : '规划筹备中';
  const icon = selectedModuleIcon || '🎨';

  const grid = document.getElementById('island-pavilion-grid');
  if (!grid) return;

  const moduleId = 'custom-' + Date.now();
  
  // 规划画布上的平铺错落点位
  const positions = [
    { top: 38, left: 34 },
    { top: 62, left: 66 },
    { top: 36, left: 66 },
    { top: 64, left: 34 },
    { top: 38, left: 50 },
    { top: 62, left: 50 }
  ];
  const posIdx = (customModuleCounter - 1) % positions.length;
  const pos = positions[posIdx];
  const jitterTop = pos.top + (Math.floor(customModuleCounter / positions.length) * 3);
  const jitterLeft = pos.left + (Math.floor(customModuleCounter / positions.length) * 3);
  customModuleCounter++;

  const newNode = document.createElement('div');
  newNode.className = 'pavilion-node custom-module-node';
  newNode.id = 'node-' + moduleId;
  newNode.style.top = jitterTop + '%';
  newNode.style.left = jitterLeft + '%';
  newNode.onclick = () => handlePavilionClick(moduleId);

  newNode.innerHTML = `
    <div class="pavilion-card-body" style="border-color:#f59e0b;">
      <div class="pavilion-3d-visual">${icon}</div>
    </div>
    <div class="pavilion-card-label">${name}</div>
    <div class="pavilion-view-badge" style="background:#fef3c7; color:#b45309;">${badgeText}</div>
  `;

  // 注册至卡片字典与场馆元数据中心，赋予完整二级甘特立项与三级自由画布规划能力
  if (!window.PAVILION_CARDS) window.PAVILION_CARDS = {};
  window.PAVILION_CARDS[moduleId] = {
    id: moduleId,
    name: name,
    icon: icon,
    category: name,
    description: badgeText + ' · 自定义成长规划场馆'
  };
  if (typeof PAVILION_META !== 'undefined') {
    PAVILION_META[moduleId] = {
      name: name,
      icon: icon,
      cat: name,
      specializedTitle: name + '规划空间',
      hasGantt: true,
      hasTertiary: true
    };
  }

  // 动态注入甘特图分类过滤胶囊与新建项目分类芯片
  const ganttFilters = document.getElementById('gantt-category-filters');
  if (ganttFilters && !Array.from(ganttFilters.querySelectorAll('.gantt-filter-btn')).some(b => b.dataset.cat === name)) {
    const fBtn = document.createElement('button');
    fBtn.className = 'gantt-filter-btn';
    fBtn.dataset.cat = name;
    fBtn.onclick = function() { filterGanttCategory(name); };
    fBtn.textContent = icon + ' ' + name;
    ganttFilters.appendChild(fBtn);
  }
  const catPicker = document.getElementById('proj-category-picker');
  if (catPicker && !Array.from(catPicker.querySelectorAll('.proj-cat-chip')).some(c => c.dataset.cat === name)) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'proj-cat-chip';
    chip.dataset.cat = name;
    chip.onclick = function() { selectProjCategory(this, name); };
    chip.textContent = icon + ' ' + name;
    catPicker.appendChild(chip);
  }

  // 动态同步鹰眼小地图标记点
  const dotsGroup = document.getElementById('minimap-dots-group');
  if (dotsGroup) {
    const svgNS = 'http://www.w3.org/2000/svg';
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', String(Math.round(jitterLeft * 2.2)));
    circle.setAttribute('cy', String(Math.round(jitterTop * 1.3)));
    circle.setAttribute('r', '5');
    circle.setAttribute('fill', '#f59e0b');
    dotsGroup.appendChild(circle);
  }

  grid.appendChild(newNode);
  initNodeDragging(newNode);

  if (typeof appendDailyAutoLog === 'function') {
    appendDailyAutoLog('🧭 规划沙盘：新建自定义规划场馆【' + icon + ' ' + name + '】，已开通二级甘特与三级脑图空间');
  }

  closeAddModuleModal();
  showIslandToast('✨ 新增规划场馆【' + name + '】已置入沙盘！点击即可进入二级甘特立项与三级脑图规划！');
}

function addHomeCustomNodePrompt() {
  openAddModuleModal();
}

// 模块点击进入核心函数 (支持四大核心规划场馆 + 自定义规划场馆 + 免规划功能模块无缝路由)
function handlePavilionClick(pavilionId) {
  if (window._islandNodeDragMoved) {
    window._islandNodeDragMoved = false;
    return;
  }
  activeSelectedPavilion = pavilionId;
  document.querySelectorAll('.pavilion-node').forEach(n => n.classList.remove('is-selected'));
  const el = document.getElementById('node-' + pavilionId) || document.getElementById(pavilionId);
  if (el) el.classList.add('is-selected');

  const meta = (typeof PAVILION_META !== 'undefined') ? PAVILION_META[pavilionId] : null;
  const hasGantt = meta ? !!meta.hasGantt : (pavilionId === 'study' || pavilionId === 'dojo' || pavilionId === 'cognition' || pavilionId === 'cultivation' || String(pavilionId).startsWith('custom-'));
  const targetSubView = hasGantt ? 'gantt' : 'specialized';
  enterSecondaryWorkspace(pavilionId, targetSubView);
}

// ==========================================================================
// 终身岛民 1:1 规划视图动力学手势引擎 (对标三级脑图 / a-my-island 自由缩放漫游与节点拖拽)
// ==========================================================================
let islandPinchStartDist = 0;
let islandPinchStartZoom = 1.0;
let islandPinchPivotWorldX = 0;
let islandPinchPivotWorldY = 0;
let isIslandPinching = false;
let isIslandPanning = false;

let islandTouchPanStartX = 0;
let islandTouchPanStartY = 0;
let islandTouchPanInitialPanX = 0;
let islandTouchPanInitialPanY = 0;

let activeTouchDragPavilionNode = null;
let nodeTouchDragStartX = 0;
let nodeTouchDragStartY = 0;
let nodeTouchInitLeft = 0;
let nodeTouchInitTop = 0;
let nodeTouchHasMoved = false;

let activePointerDragNode = null;
let isPointerPanning = false;
let pointerPanStartX = 0;
let pointerPanStartY = 0;
let pointerPanInitialPanX = 0;
let pointerPanInitialPanY = 0;
let nodePointerDragStartX = 0;
let nodePointerDragStartY = 0;
let nodePointerInitLeft = 0;
let nodePointerInitTop = 0;
let nodePointerHasMoved = false;

window._islandNodeDragMoved = false;

function initCanvasPanZoomAndDrag() {
  const stage = document.getElementById('island-canvas-stage');
  const canvasWorld = document.getElementById('island-world-canvas');
  if (!stage || !canvasWorld) return;

  // 确保世界容器 transform-origin 为 0 0 且硬件加速
  canvasWorld.style.transformOrigin = '0 0';

  if (stage._islandGestureEngineBound) {
    bindPavilionNodesClickGuards();
    return;
  }
  stage._islandGestureEngineBound = true;

  // -------------------------------------------------------------
  // A. 鼠标滚轮自由无级缩放 (以鼠标光标所在点为缩放中心)
  // -------------------------------------------------------------
  stage.addEventListener('wheel', (e) => {
    if (typeof currentGlobalView !== 'undefined' && currentGlobalView !== 'plan') return;
    e.preventDefault();
    const rect = stage.getBoundingClientRect();
    const cursorStageX = e.clientX - rect.left;
    const cursorStageY = e.clientY - rect.top;
    const oldZoom = islandZoom || 1.0;
    const factor = e.deltaY < 0 ? 1.12 : 0.88;
    const newZoom = Math.min(3.0, Math.max(0.35, oldZoom * factor));
    const worldX = (cursorStageX - islandPanX) / oldZoom;
    const worldY = (cursorStageY - islandPanY) / oldZoom;
    islandZoom = newZoom;
    islandPanX = cursorStageX - worldX * newZoom;
    islandPanY = cursorStageY - worldY * newZoom;
    applyIslandTransform();
    if (typeof bindPavilionNodesClickGuards === 'function') bindPavilionNodesClickGuards();
  }, { passive: false });

  // -------------------------------------------------------------
  // B. 移动平板 (iPad/Android) 原生触控引擎: 双指捏合自由缩放 + 单指漫游抓手 + 节点触控拖拽
  // -------------------------------------------------------------
  stage.addEventListener('touchstart', (e) => {
    if (typeof currentGlobalView !== 'undefined' && currentGlobalView !== 'plan') return;
    // 关键：阻断向全局冒泡，防止触发 Obsidian 侧边栏抽屉手势
    e.stopPropagation();

    // 1. 双指触控 -> 启动双指自由捏合无级缩放
    if (e.touches.length === 2) {
      isIslandPinching = true;
      isIslandPanning = false;
      if (activeTouchDragPavilionNode) {
        activeTouchDragPavilionNode.classList.remove('is-node-dragging');
        activeTouchDragPavilionNode = null;
      }
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      islandPinchStartDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      islandPinchStartZoom = islandZoom || 1.0;

      const rect = stage.getBoundingClientRect();
      const midStageX = (t1.clientX + t2.clientX) / 2 - rect.left;
      const midStageY = (t1.clientY + t2.clientY) / 2 - rect.top;
      islandPinchPivotWorldX = (midStageX - islandPanX) / islandPinchStartZoom;
      islandPinchPivotWorldY = (midStageY - islandPanY) / islandPinchStartZoom;
      return;
    }

    // 2. 单指触控 -> 检查触控点命中目标
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const node = e.target.closest('.pavilion-node');
      const isInteractive = !!e.target.closest('button, input, select, textarea, .a-my-island-plugin-launcher, .a-my-island-graph-toolbar, .a-my-island-work-navigation-dock, .hud-profile-container, .parent-bounty-billboard, .a-my-island-island-settings-panel');

      if (node) {
        // 单指触控功能馆卡片 -> 准备自由拖拽
        activeTouchDragPavilionNode = node;
        nodeTouchHasMoved = false;
        nodeTouchDragStartX = touch.clientX;
        nodeTouchDragStartY = touch.clientY;
        nodeTouchInitLeft = node.offsetLeft;
        nodeTouchInitTop = node.offsetTop;
        node.classList.add('is-node-dragging');
        return;
      }

      if (!isInteractive) {
        // 单指触控空白海岛背景 -> 启动画布漫游平移
        isIslandPanning = true;
        isIslandPinching = false;
        islandTouchPanStartX = touch.clientX;
        islandTouchPanStartY = touch.clientY;
        islandTouchPanInitialPanX = islandPanX;
        islandTouchPanInitialPanY = islandPanY;
        stage.classList.add('is-canvas-dragging');
      }
    }
  }, { passive: false });

  stage.addEventListener('touchmove', (e) => {
    if (typeof currentGlobalView !== 'undefined' && currentGlobalView !== 'plan') return;
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();

    // 1. 处理双指无级自由缩放 (Pinch-to-zoom)
    if (isIslandPinching && e.touches.length >= 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const currentDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      if (islandPinchStartDist > 0) {
        const factor = currentDist / islandPinchStartDist;
        const newZoom = Math.min(3.0, Math.max(0.35, islandPinchStartZoom * factor));
        const rect = stage.getBoundingClientRect();
        const currentMidStageX = (t1.clientX + t2.clientX) / 2 - rect.left;
        const currentMidStageY = (t1.clientY + t2.clientY) / 2 - rect.top;
        islandZoom = newZoom;
        islandPanX = currentMidStageX - islandPinchPivotWorldX * newZoom;
        islandPanY = currentMidStageY - islandPinchPivotWorldY * newZoom;
        applyIslandTransform();
    if (typeof bindPavilionNodesClickGuards === 'function') bindPavilionNodesClickGuards();
      }
      return;
    }

    // 2. 处理单指节点拖拽
    if (activeTouchDragPavilionNode && e.touches.length === 1) {
      const touch = e.touches[0];
      const dx = (touch.clientX - nodeTouchDragStartX) / islandZoom;
      const dy = (touch.clientY - nodeTouchDragStartY) / islandZoom;
      if (!nodeTouchHasMoved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
        nodeTouchHasMoved = true;
        activeTouchDragPavilionNode._dragMoved = true;
        window._islandNodeDragMoved = true;
      }
      if (nodeTouchHasMoved) {
        activeTouchDragPavilionNode.style.left = (nodeTouchInitLeft + dx) + 'px';
        activeTouchDragPavilionNode.style.top = (nodeTouchInitTop + dy) + 'px';
        updateIslandMinimap();
      }
      return;
    }

    // 3. 处理单指画布自由漫游平移
    if (isIslandPanning && e.touches.length === 1) {
      const touch = e.touches[0];
      const dx = touch.clientX - islandTouchPanStartX;
      const dy = touch.clientY - islandTouchPanStartY;
      islandPanX = islandTouchPanInitialPanX + dx;
      islandPanY = islandTouchPanInitialPanY + dy;
      applyIslandTransform();
    if (typeof bindPavilionNodesClickGuards === 'function') bindPavilionNodesClickGuards();
      return;
    }
  }, { passive: false });

  const onIslandTouchEnd = (e) => {
    e.stopPropagation();
    if (e.touches.length < 2 && isIslandPinching) {
      isIslandPinching = false;
    }
    if (e.touches.length === 0) {
      isIslandPanning = false;
      stage.classList.remove('is-canvas-dragging');
    }
    if (activeTouchDragPavilionNode) {
      const node = activeTouchDragPavilionNode;
      activeTouchDragPavilionNode = null;
      node.classList.remove('is-node-dragging');
      if (nodeTouchHasMoved) {
        node._dragMoved = true;
        window._islandNodeDragMoved = true;
        setTimeout(() => {
          node._dragMoved = false;
          window._islandNodeDragMoved = false;
        }, 220);
      }
    }
  };
  stage.addEventListener('touchend', onIslandTouchEnd, { passive: false });
  stage.addEventListener('touchcancel', onIslandTouchEnd, { passive: false });

  // -------------------------------------------------------------
  // C. Pointer 事件处理桌面鼠标与手写笔 (精准抓取与实时漫游)
  // -------------------------------------------------------------
  stage.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch') return; // 触屏手势已由 TouchEvent 引擎精准承接
    if (typeof currentGlobalView !== 'undefined' && currentGlobalView !== 'plan') return;
    if (e.target.closest('.a-my-island-work-navigation-dock')) return;

    const isInteractive = !!e.target.closest('button, input, select, textarea, .a-my-island-plugin-launcher, .a-my-island-graph-toolbar, .hud-profile-container, .parent-bounty-billboard, .a-my-island-island-settings-panel');
    if (isInteractive) return;

    const node = e.target.closest('.pavilion-node');
    if (node) {
      activePointerDragNode = node;
      nodePointerHasMoved = false;
      nodePointerDragStartX = e.clientX;
      nodePointerDragStartY = e.clientY;
      nodePointerInitLeft = node.offsetLeft;
      nodePointerInitTop = node.offsetTop;
      node.classList.add('is-node-dragging');
      try { node.setPointerCapture(e.pointerId); } catch (_) {}
      return;
    }

    // 鼠标点击空白背景平移
    isPointerPanning = true;
    pointerPanStartX = e.clientX;
    pointerPanStartY = e.clientY;
    pointerPanInitialPanX = islandPanX;
    pointerPanInitialPanY = islandPanY;
    stage.classList.add('is-canvas-dragging');
    try { stage.setPointerCapture(e.pointerId); } catch (_) {}
  });

  const onStagePointerMove = (e) => {
    if (e.pointerType === 'touch') return;
    if (typeof currentGlobalView !== 'undefined' && currentGlobalView !== 'plan') return;

    if (activePointerDragNode) {
      const dx = (e.clientX - nodePointerDragStartX) / islandZoom;
      const dy = (e.clientY - nodePointerDragStartY) / islandZoom;
      if (!nodePointerHasMoved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
        nodePointerHasMoved = true;
        activePointerDragNode._dragMoved = true;
        window._islandNodeDragMoved = true;
      }
      if (nodePointerHasMoved) {
        activePointerDragNode.style.left = (nodePointerInitLeft + dx) + 'px';
        activePointerDragNode.style.top = (nodePointerInitTop + dy) + 'px';
        updateIslandMinimap();
      }
      return;
    }

    if (isPointerPanning) {
      const dx = e.clientX - pointerPanStartX;
      const dy = e.clientY - pointerPanStartY;
      islandPanX = pointerPanInitialPanX + dx;
      islandPanY = pointerPanInitialPanY + dy;
      applyIslandTransform();
      if (typeof bindPavilionNodesClickGuards === 'function') bindPavilionNodesClickGuards();
      return;
    }
  };

  const onPointerUp = (e) => {
    if (e.pointerType === 'touch') return;
    if (activePointerDragNode) {
      const node = activePointerDragNode;
      activePointerDragNode = null;
      try { node.releasePointerCapture(e.pointerId); } catch (_) {}
      node.classList.remove('is-node-dragging');
      if (nodePointerHasMoved) {
        node._dragMoved = true;
        window._islandNodeDragMoved = true;
        setTimeout(() => {
          node._dragMoved = false;
          window._islandNodeDragMoved = false;
        }, 220);
      }
    }
    if (isPointerPanning) {
      isPointerPanning = false;
      try { stage.releasePointerCapture(e.pointerId); } catch (_) {}
      stage.classList.remove('is-canvas-dragging');
    }
  };

  stage.addEventListener('pointermove', onStagePointerMove);
  window.addEventListener('pointermove', onStagePointerMove);
  stage.addEventListener('pointerup', onPointerUp);
  stage.addEventListener('pointercancel', onPointerUp);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  stage.addEventListener('touchend', onIslandTouchEnd, { passive: false });
  stage.addEventListener('touchcancel', onIslandTouchEnd, { passive: false });
  window.addEventListener('touchend', onIslandTouchEnd, { passive: false });
  window.addEventListener('touchcancel', onIslandTouchEnd, { passive: false });

  // -------------------------------------------------------------
  // D. 捕获阶段防御：严防节点拖拽结束误触发 handlePavilionClick 路由 (仅限场馆节点)
  // -------------------------------------------------------------
  stage.addEventListener('click', (e) => {
    if (window._islandNodeDragMoved && e.target.closest('.pavilion-node')) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      window._islandNodeDragMoved = false;
      return false;
    }
  }, true);

  bindPavilionNodesClickGuards();
}

function bindPavilionNodesClickGuards() {
  document.querySelectorAll('.pavilion-node').forEach(node => {
    if (node._clickGuardBound) return;
    node._clickGuardBound = true;
    node.addEventListener('click', (e) => {
      if (node._dragMoved || window._islandNodeDragMoved) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        node._dragMoved = false;
        window._islandNodeDragMoved = false;
        return false;
      }
    }, true);
  });
}

function initNodeDragging(node) {
  bindPavilionNodesClickGuards();
}

function updateTwinPathLine() {
  // 虚线已根据用户需求彻底移除
}

// ==========================================================================
// 2. 下方全能发射器 (小岛设置按钮样式，按类别一行展示)
// ==========================================================================

function switchHomeGlobalView(mode) {
  currentGlobalView = (mode === 'plan' || mode === 'planning') ? 'plan' : 'exec';
  ['exec', 'plan'].forEach(m => {
    const btn = document.getElementById('launcher-view-' + m);
    if (btn) btn.classList.toggle('is-active', m === currentGlobalView);
  });
  updatePavilionBadges(currentGlobalView);

  const execCenter = document.getElementById('island-execution-center');
  const homeToolbar = document.getElementById('home-top-graph-toolbar');
  const subviewSwitcher = document.getElementById('unified-exec-subview-switcher');
  const islandCanvas = document.getElementById('island-world-canvas');
  const navDock = document.getElementById('island-navigation-dock');

  if (currentGlobalView === 'exec') {
    if (execCenter) {
      execCenter.classList.remove('is-hidden');
      execCenter.style.setProperty('display', 'flex', 'important');
    }
    if (subviewSwitcher) {
      subviewSwitcher.classList.remove('is-hidden');
      subviewSwitcher.style.setProperty('display', 'flex', 'important');
    }
    if (homeToolbar) {
      homeToolbar.classList.add('is-hidden');
      homeToolbar.style.setProperty('display', 'none', 'important');
    }
    if (islandCanvas) {
      islandCanvas.classList.add('is-hidden');
      islandCanvas.style.setProperty('display', 'none', 'important');
    }
    if (navDock) {
      navDock.style.setProperty('display', 'none', 'important');
    }
    showIslandToast('⚡ 执行视图：当日待办 3D 大卡片流光轮播已就绪');
  } else if (currentGlobalView === 'plan') {
    if (execCenter) {
      execCenter.classList.add('is-hidden');
      execCenter.style.setProperty('display', 'none', 'important');
    }
    if (subviewSwitcher) {
      subviewSwitcher.classList.add('is-hidden');
      subviewSwitcher.style.setProperty('display', 'none', 'important');
    }
    if (homeToolbar) {
      homeToolbar.classList.remove('is-hidden');
      homeToolbar.style.setProperty('display', 'flex', 'important');
    }
    if (islandCanvas) {
      islandCanvas.classList.remove('is-hidden');
      islandCanvas.style.setProperty('display', 'block', 'important');
    }
    if (navDock) {
      navDock.style.setProperty('display', 'flex', 'important');
    }
    if (typeof initCanvasPanZoomAndDrag === 'function') {
      initCanvasPanZoomAndDrag();
    }
    applyIslandTransform();
    if (typeof bindPavilionNodesClickGuards === 'function') bindPavilionNodesClickGuards();
    showIslandToast('🧭 规划视图：进入四大核心规划场馆自由漫游沙盘（支持动态扩展新场馆）');
  }
}

function toggleIslandControlsGroup() {
  islandControlsExpanded = !islandControlsExpanded;
  const btnSettings = document.getElementById('launcher-btn-settings');
  const toggleButtons = [
    document.getElementById('launcher-btn-bg'),
    document.getElementById('launcher-btn-char'),
    document.getElementById('launcher-btn-env'),
    document.getElementById('launcher-btn-immersive')
  ];

  if (btnSettings) {
    btnSettings.classList.toggle('is-active', islandControlsExpanded);
    btnSettings.setAttribute('aria-expanded', String(islandControlsExpanded));
  }

  toggleButtons.forEach(btn => {
    if (btn) btn.classList.toggle('is-island-control-hidden', !islandControlsExpanded);
  });
}


function openOriginalSettingsPanel(type) {
  if (activeOriginalPanel === type) {
    closeOriginalSettingsPanel();
    return;
  }

  closeOriginalSettingsPanel();
  activeOriginalPanel = type;

  const panelMap = {
    bg: { modal: 'modal-bg-settings', btn: 'launcher-btn-bg' },
    char: { modal: 'modal-char-settings', btn: 'launcher-btn-char' },
    env: { modal: 'modal-env-settings', btn: 'launcher-btn-env' },
    immersive: { modal: 'modal-immersive-settings', btn: 'launcher-btn-immersive' }
  };

  const target = panelMap[type];
  if (!target) return;

  const modalEl = document.getElementById(target.modal);
  const btnEl = document.getElementById(target.btn);

  if (btnEl) btnEl.classList.add('is-active');
  if (modalEl) {
    modalEl.style.display = (type === 'bg' || type === 'char') ? 'grid' : 'flex';
  }
}

function closeOriginalSettingsPanel() {
  activeOriginalPanel = null;
  const modals = [
    'modal-bg-settings', 'modal-char-settings',
    'modal-env-settings', 'modal-immersive-settings'
  ];
  modals.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  const launcherBtns = [
    'launcher-btn-bg', 'launcher-btn-char',
    'launcher-btn-env', 'launcher-btn-immersive'
  ];
  launcherBtns.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('is-active');
  });
}

function toggleBrowseMode() {
  window.isBrowseMode = !window.isBrowseMode;
  const btn = document.getElementById('launcher-btn-browse');
  if (btn) btn.classList.toggle('is-active', window.isBrowseMode);

  if (window.isBrowseMode) {
    showIslandToast('👁️ 浏览模式已开启：移动平板单击功能馆即可直接进入二级工作台！');
  } else {
    showIslandToast('🔒 浏览模式已关闭：双击进入工作台，单击为选中聚焦。');
  }
}

// ==========================================================================
// 小岛设置中心：背景 / 角色 / 环境微粒 / 沉浸模式
// 数据源：window.USER_PROFILE_STATE.settings（持久化键 island-user-settings-v1，对应 Vault 00_System/island-settings.json）
// ==========================================================================
const ISLAND_SETTINGS_KEY = 'island-user-settings-v1';
const BG_TARGET_TITLES = {
  all: '我的小岛 · 全局背景',
  study: '校史馆 · 背景设置',
  dojo: '武道馆/兴趣屋 · 背景设置',
  cognition: '思辨馆/认知台 · 背景设置',
  cultivation: '修身阁 · 背景设置',
  treasury: '藏金屋 · 背景设置',
  tree: '个人行为规范 · 背景设置',
  note: '每日随记 · 背景设置',
  achieve: '成就馆 · 背景设置'
};
const WALLPAPER_PRESETS = {
  plaza: 'linear-gradient(135deg, #1b382b 0%, #2f5436 45%, #182c1f 100%)',
  desk: 'radial-gradient(ellipse at 50% 50%, #453221 0%, #251b12 100%)',
  board: 'linear-gradient(155deg, #3d3b30 0%, #22211b 100%)',
  star: 'radial-gradient(ellipse at 50% 40%, #152238 0%, #090e17 100%)',
  white: '#ffffff',
  black: '#121212',
  grid: 'linear-gradient(#c8c4b8 1px, transparent 1px) 0 0 / 16px 16px, linear-gradient(90deg, #c8c4b8 1px, transparent 1px) 0 0 / 16px 16px, #f7f3e8'
};
let selectedBgTarget = 'all';
let islandSettingsBound = false;

function defaultIslandSettings() {
  return {
    avatarEmoji: '👦',
    nickname: '晨曦岛民 · 齐天',
    particle: 'gold',
    bgGlobal: true,
    wallpapers: {},
    immersive: { left: true, top: true, bottom: true, nodes: false, dbl: true }
  };
}

function loadIslandSettings() {
  const def = defaultIslandSettings();
  try {
    const raw = window.localStorage.getItem(ISLAND_SETTINGS_KEY);
    if (raw) {
      const o = JSON.parse(raw);
      return Object.assign(def, o, {
        wallpapers: o.wallpapers || {},
        immersive: Object.assign(def.immersive, o.immersive || {})
      });
    }
  } catch (e) {}
  return def;
}

function getIslandSettings() {
  const st = window.USER_PROFILE_STATE;
  if (!st.settings) st.settings = loadIslandSettings();
  return st.settings;
}

function saveIslandSettings() {
  try { window.localStorage.setItem(ISLAND_SETTINGS_KEY, JSON.stringify(getIslandSettings())); } catch (e) {}
}

function initIslandSettings() {
  const s = getIslandSettings();
  currentParticleMode = s.particle;
  applyAvatarSettings();
  syncEnvButtons();
  syncImmersiveCheckboxes();
  applyIslandWallpaper();
  syncBgEditor();
  const nick = document.getElementById('char-nickname-input');
  if (nick) nick.value = s.nickname;
  if (!islandSettingsBound) {
    islandSettingsBound = true;
    const stage = document.getElementById('island-canvas-stage');
    if (stage) {
      stage.addEventListener('dblclick', function (e) {
        if (!getIslandSettings().immersive.dbl) return;
        if (e.target.closest('.pavilion-node, button, input, [onclick], .hud-profile-container, .a-my-island-plugin-launcher')) return;
        if (document.body.classList.contains('is-immersive')) toggleImmersiveMode();
        else enterImmersiveModeNow();
      });
    }
  }
}

// ---- 角色：头像 + 昵称（全域 HUD 同步：首页 / 二级 / 三级顶栏）----
function applyAvatarSettings() {
  const s = getIslandSettings();
  document.querySelectorAll('#home-unified-topbar .hud-avatar-box > span, #ws-unified-topbar .hud-avatar-box > span, #tertiary-unified-topbar .hud-avatar-box > span').forEach(function (el) { el.textContent = s.avatarEmoji; });
  document.querySelectorAll('#hud-username-text, #ws-unified-topbar .hud-username, #tertiary-unified-topbar .hud-username').forEach(function (el) { el.textContent = s.nickname; });
  document.querySelectorAll('#char-content-main [data-avatar]').forEach(function (card) {
    card.classList.toggle('is-active', card.dataset.avatar === s.avatarEmoji);
  });
}

function selectPlayerAvatar(emoji) {
  getIslandSettings().avatarEmoji = emoji;
  saveIslandSettings();
  applyAvatarSettings();
  showIslandToast('角色头像已切换为 ' + emoji);
}

function saveNickname() {
  const input = document.getElementById('char-nickname-input');
  const val = input ? input.value.trim() : '';
  if (!val) { showIslandToast('⚠️ 昵称不能为空'); return; }
  getIslandSettings().nickname = val.slice(0, 12);
  saveIslandSettings();
  applyAvatarSettings();
  showIslandToast('岛民昵称已更新为：' + val.slice(0, 12));
}

// ---- 背景：按场馆壁纸（全局开关：开启时所有场馆统一使用「全局小岛」壁纸）----
function resolveWallpaperFor(target) {
  const s = getIslandSettings();
  if (s.bgGlobal) return s.wallpapers.all || null;
  return s.wallpapers[target] || s.wallpapers.all || null;
}

function applyIslandWallpaper() {
  const s = getIslandSettings();
  const stage = document.getElementById('island-canvas-stage');
  if (stage) {
    if (s.wallpapers.all) stage.style.background = WALLPAPER_PRESETS[s.wallpapers.all];
    else stage.style.removeProperty('background');
  }
  applyPavilionWallpaper();
}

function applyPavilionWallpaper() {
  const view = document.getElementById('secondary-workspace-view');
  const spec = document.getElementById('ws-specialized-container');
  const key = resolveWallpaperFor(typeof currentWsPavilion !== 'undefined' ? currentWsPavilion : 'study');
  const css = key ? WALLPAPER_PRESETS[key] : null;
  if (view) {
    if (css) view.style.setProperty('background', css, 'important');
    else view.style.removeProperty('background');
  }
  if (spec) {
    if (css) spec.style.setProperty('background', css, 'important');
    else spec.style.removeProperty('background');
  }
}

function selectBgTarget(id) {
  selectedBgTarget = BG_TARGET_TITLES[id] ? id : 'all';
  syncBgEditor();
}

function applyWallpaper(preset) {
  const s = getIslandSettings();
  if (preset === 'reset') delete s.wallpapers[selectedBgTarget];
  else s.wallpapers[selectedBgTarget] = preset;
  saveIslandSettings();
  applyIslandWallpaper();
  syncBgEditor();
  showIslandToast(preset === 'reset'
    ? '已恢复「' + BG_TARGET_TITLES[selectedBgTarget].split(' · ')[0] + '」默认背景'
    : '「' + BG_TARGET_TITLES[selectedBgTarget].split(' · ')[0] + '」壁纸已更新');
}

function toggleGlobalBg(on) {
  getIslandSettings().bgGlobal = !!on;
  saveIslandSettings();
  applyIslandWallpaper();
  syncBgEditor();
  showIslandToast('🎨 全局背景：' + (on ? '已开启（各场馆统一使用全局壁纸）' : '已关闭（各场馆使用独立壁纸，未设置者沿用全局）'));
}

function syncBgEditor() {
  const s = getIslandSettings();
  document.querySelectorAll('#modal-bg-settings [data-bg-target]').forEach(function (b) {
    b.classList.toggle('is-active', b.dataset.bgTarget === selectedBgTarget);
  });
  const title = document.getElementById('bg-editor-title');
  if (title) title.textContent = BG_TARGET_TITLES[selectedBgTarget];
  const chk = document.getElementById('chk-global-bg');
  if (chk) chk.checked = !!s.bgGlobal;
  const cur = s.wallpapers[selectedBgTarget] || null;
  document.querySelectorAll('#modal-bg-settings [data-preset]').forEach(function (b) {
    b.classList.toggle('active', b.dataset.preset === cur);
  });
  const hint = document.getElementById('bg-editor-hint');
  if (hint) {
    if (selectedBgTarget !== 'all' && s.bgGlobal) hint.textContent = '当前「全局背景」已开启，此场馆的独立壁纸将在关闭全局背景后生效。';
    else if (selectedBgTarget === 'all') hint.textContent = '全局小岛壁纸作用于海岛沙盘，并在「全局背景」开启时统一覆盖所有场馆。';
    else hint.textContent = '未单独设置时沿用全局小岛壁纸；仍为默认时保持场馆原有场景图。';
  }
}

// ---- 环境微粒：单选，再次点击已开启项即全部关闭 ----
function toggleEnvEffect(effect) {
  const s = getIslandSettings();
  s.particle = (currentParticleMode === effect) ? 'none' : effect;
  currentParticleMode = s.particle;
  saveIslandSettings();
  syncEnvButtons();
  showIslandToast(s.particle === 'none' ? '环境微粒已全部关闭' : '环境微粒已切换为：' + ({ leaves: '微风落叶', petals: '花瓣飘落', gold: '金色萤火', rain: '专注细雨' }[effect]));
}

function syncEnvButtons() {
  ['leaves', 'petals', 'gold', 'rain'].forEach(function (k) {
    const b = document.getElementById('btn-env-' + k);
    if (!b) return;
    const on = currentParticleMode === k;
    b.classList.toggle('is-active', on);
    b.textContent = on ? '开启中' : '已关闭';
  });
}

// ---- 沉浸模式：分区隐藏勾选 + 双击空白进入/退出 ----
function saveImmersivePref() {
  const im = getIslandSettings().immersive;
  im.left = !!document.getElementById('chk-imm-left').checked;
  im.top = !!document.getElementById('chk-imm-top').checked;
  im.bottom = !!document.getElementById('chk-imm-bottom').checked;
  im.nodes = !!document.getElementById('chk-imm-nodes').checked;
  im.dbl = !!document.getElementById('chk-imm-dbl').checked;
  saveIslandSettings();
  if (document.body.classList.contains('is-immersive')) applyImmersiveClasses();
}

function syncImmersiveCheckboxes() {
  const im = getIslandSettings().immersive;
  ['left', 'top', 'bottom', 'nodes', 'dbl'].forEach(function (k) {
    const el = document.getElementById('chk-imm-' + k);
    if (el) el.checked = !!im[k];
  });
}

function applyImmersiveClasses() {
  const im = getIslandSettings().immersive;
  document.body.classList.toggle('imm-hide-left', !!im.left);
  document.body.classList.toggle('imm-hide-top', !!im.top);
  document.body.classList.toggle('imm-hide-bottom', !!im.bottom);
  document.body.classList.toggle('imm-hide-nodes', !!im.nodes);
}

function enterImmersiveModeNow() {
  applyImmersiveClasses();
  document.body.classList.add('is-immersive');
  closeOriginalSettingsPanel();
  showIslandToast('🌿 已进入沉浸专注模式！按 Esc 键、双击空白或点击顶部浮条退出。');
}

// ---- 底栏：专注秒表快捷入口 → 攻坚实训打卡页（内置番茄/秒表计时）----
function launchQuickFocusTimer() {
  if (typeof currentGlobalView !== 'undefined' && currentGlobalView !== 'exec') switchHomeGlobalView('exec');
  openExecCardPopupView('drill');
  showIslandToast('⏱️ 已进入攻坚实训打卡页：按预设时长开始专注计时');
}

function toggleImmersiveMode() {
  const isNowImmersive = document.body.classList.toggle('is-immersive');
  if (!isNowImmersive) {
    showIslandToast('已退出沉浸模式，恢复全能操作界面。');
  }
}


window.toggleObsidianSplit = function(side) {
  if (typeof window.__toggleObsidianSidebar === 'function') {
    window.__toggleObsidianSidebar(side);
  } else {
    showIslandToast((side === 'left' ? '📂 左侧边栏' : '📑 右侧边栏') + '切换（在 Obsidian 原生插件环境中生效）');
  }
};

function showIslandToast(msg) {
  let toast = document.getElementById('island-quick-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'island-quick-toast';
    toast.style.cssText = 'position:fixed; top:70px; left:50%; transform:translateX(-50%); background:rgba(43,31,20,0.92); color:#fffdf2; border:1.5px solid #d4c5a9; border-radius:18px; padding:8px 18px; font-size:12px; font-weight:800; z-index:99999; box-shadow:0 8px 24px rgba(0,0,0,0.35); pointer-events:none; transition:opacity 0.3s ease;';
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.style.opacity = '1';
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => {
    toast.style.opacity = '0';
  }, 2200);
}

// ==========================================================================
// 3. 顶层大模态与视口控制
// ==========================================================================

function switchMainSection(target) {
  const islandView = document.getElementById('island-stage-view');
  const wsView = document.getElementById('secondary-workspace-view');
  const tertiaryView = document.getElementById('tertiary-workspace-view');
  const galleryView = document.getElementById('gallery-stage-view');
  const ipadWrapper = document.getElementById('ipad-wrapper');
  const btnIsland = document.getElementById('btn-main-island');
  const btnWs = document.getElementById('btn-main-ws');
  const btnTertiary = document.getElementById('btn-main-tertiary');
  const btnGallery = document.getElementById('btn-main-checkin') || document.getElementById('btn-main-gallery');

  const specContainer = document.getElementById('ws-specialized-container');
  const ganttContainer = document.getElementById('ws-gantt-main-container');
  if (islandView) islandView.style.display = 'none';
  if (wsView) wsView.style.display = 'none';
  if (specContainer && target !== 'ws') specContainer.style.display = 'none';
  if (ganttContainer && target !== 'ws') ganttContainer.style.display = 'none';
  if (tertiaryView) tertiaryView.style.display = 'none';
  if (galleryView) galleryView.style.display = 'none';
  if (btnIsland) btnIsland.classList.remove('active');
  if (btnWs) btnWs.classList.remove('active');
  if (btnTertiary) btnTertiary.classList.remove('active');
  if (btnGallery) btnGallery.classList.remove('active');

  if (target === 'island') {
    if (ipadWrapper) ipadWrapper.style.display = 'flex';
    if (islandView) islandView.style.display = 'flex';
    if (btnIsland) btnIsland.classList.add('active');
  } else if (target === 'ws') {
    if (ipadWrapper) ipadWrapper.style.display = 'flex';
    if (wsView) wsView.style.display = 'flex';
    if (btnWs) btnWs.classList.add('active');
    renderWorkspaceContent();
  } else if (target === 'tertiary') {
    if (ipadWrapper) ipadWrapper.style.display = 'flex';
    if (tertiaryView) tertiaryView.style.display = 'flex';
    if (btnTertiary) btnTertiary.classList.add('active');
    initTertiaryWorkspace();
  } else {
    // 31 个高保真设计画廊：独立占满视口，隐藏 iPad 真机外壳
    if (ipadWrapper) ipadWrapper.style.display = 'none';
    if (galleryView) {
      galleryView.style.display = 'block';
      galleryView.scrollTop = 0;
    }
    if (btnGallery) btnGallery.classList.add('active');
  }
}

function toggleTabletFrameMode() {
  const wrapper = document.getElementById('ipad-wrapper');
  const btn = document.getElementById('btn-toggle-frame');
  isInTabletFrame = !isInTabletFrame;
  wrapper.classList.toggle('in-frame-mode', isInTabletFrame);
  if (btn) {
    btn.classList.toggle('active', isInTabletFrame);
    btn.innerText = isInTabletFrame ? '📱 iPad 11寸平板真机框' : '🖥️ 全屏触控模式';
  }
}

let currentWsSubView = 'gantt'; // 默认显示甘特图页面 ('gantt' or 'specialized')

const PAVILION_META = {
  study: { name: '校史馆', icon: '🏫', cat: '学业攻坚', specializedTitle: '学科作战双栏台', hasGantt: true, hasTertiary: true },
  dojo: { name: '武道馆/兴趣屋', icon: '🥋', cat: '兴趣特长', specializedTitle: '运动竞技战备舱', hasGantt: true, hasTertiary: true },
  cognition: { name: '思辨馆/认知台', icon: '🧠', cat: '认知思辨', specializedTitle: '哲思工坊与罗盘', hasGantt: true, hasTertiary: true },
  cultivation: { name: '修身阁', icon: '📜', cat: '修身立宪', specializedTitle: '三阶垂向修身古卷', hasGantt: true, hasTertiary: true },
  treasury: { name: '藏金屋', icon: '💰', cat: '财商实践', specializedTitle: '财商分流与资产工坊', hasGantt: false, hasTertiary: false, noPlanning: true },
  tree: { name: '个人行为规范', icon: '📜', cat: '修身立宪', specializedTitle: '古籍风骨线装法典长卷', hasGantt: false, hasTertiary: false, recordOnly: true },
  achieve: { name: '成就馆', icon: '🏆', cat: '成长荣誉', specializedTitle: '荣誉殿堂与成就登记', hasGantt: false, hasTertiary: false, recordOnly: true, desc: '全域成果自动沉淀与自主独立登记成就' },
  note: { name: '每日随记', icon: '📝', cat: '日常记录', specializedTitle: '时序心流双轨日记', hasGantt: false, hasTertiary: false, noPlanning: true }
};


// 核心交互：所有模块的执行视图都从此执行视图主页进入，在二级界面的后续操作不使用弹窗，直接在执行视图中间操作区显示与交互
function openCardCheckinFromPlanning(type) {
  // 核心架构规范：节点卡片用于规划，打卡页面用于执行（供孩子操作）
  // 从规划卡片点击穿透，直接切换至执行视图并打开该节点的专属打卡页面
  switchMainSection('island');
  switchHomeGlobalView('exec');
  openExecCardPopupView(type);
  showIslandToast('⚡ 已进入专属打卡页面，供孩子沉浸专注与交付真实物证！');
}

function enterModuleExecutionView(pavilionId) {
  const meta = PAVILION_META[pavilionId] || { name: '专属模块', icon: '⚡' };
  switchMainSection('island');
  switchHomeGlobalView('exec');
  openExecCardPopupView(pavilionId);
  showIslandToast('⚡ 已进入【' + (meta.name || pavilionId) + '】专属执行工作区，在执行视图中间操作区直接专注交付！');
}


let currentExecPopupPavilion = 'study';
let isExecProjectNodesViewActive = false;
let execPopupTimerInterval = null;
let execPopupTimerSeconds = 25 * 60;
let isExecPopupTimerRunning = false;

// 8 大模块关联项目规划视图与前后全景节点数据字典
const EXEC_PROJECT_DATA = {
  study: {
    hasPlanningProject: true,
    title: '小学数学进退位口算达标与思维训练',
    badge: '🏫 校史馆 · 学科攻坚',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 今日待办执行中心 ❯ 🏫 校史馆 ❯ 口算达标攻坚',
    projectName: '《小学数学口算达标与逆向思维训练》',
    desc: '攻坚要领：熟练掌握凑十法与破十法口算技巧，限时 20 分钟口算拍照存证并完成反思总结。',
    evidenceText: '口算手稿与红笔订正拍照件 (点击查看)',
    note: '易错归因：退位减法个位不够减需向十位借1当10；已掌握破十法口诀，30道题卡全对！',
    summary: '包含打卡节点前置审题/心算模型、当前打卡实训及后续温故复盘/成果归档全时序节点 (完全参考通用三级自由画布展示)',
    nodes: [
      {
        role: 'pre',
        type: 'study-problem',
        badge: '🏫 错题原题',
        title: '进退位口算题卡审题与错因拆解',
        state: '✓ 前置达成',
        tag: '前置审题',
        contentHtml: '<div style="background:#fefce8; border:1px dashed #facc15; padding:8px 10px; border-radius:8px; font-size:10.5px; color:#854d0e;">⚠️ 易错归因：个位数不够减忘记从十位借 1 当 10，需用红笔标出退位点。</div><div class="node-img-preview-box" onclick="viewNodeImage()" style="margin-top:6px; height:60px;"><span style="font-size:11px; font-weight:800; color:#0e7490;">📄 [点击查看口算题卡扫描件] 20以内进退位典型错题</span></div>',
        edgeLabel: '心算技巧推导 ➔'
      },
      {
        role: 'pre',
        type: 'study-formula',
        badge: '⚡ 公式模型',
        title: '破十法与凑十法心算通解模型',
        state: '✓ 前置达成',
        tag: '心算模型',
        contentHtml: '<div style="background:#f3f4f6; font-family:monospace; padding:8px; border-radius:8px; font-size:11px; color:#1f2937;">十几减九，几加一；十几减八，几加二；<br/>23 - 8 = 13 + (10 - 8) = 15。</div><p style="font-size:10.5px; color:#60401f; margin-top:4px;">已推演验证，口算速度由 45秒 缩短至 15秒！</p>',
        edgeLabel: '📌 前置依赖达成 ➔ 启动打卡'
      },
      {
        role: 'current',
        type: 'study-pomo',
        badge: '⏱️ 番茄实训',
        title: '25分钟极限心流演算与无干扰打卡',
        state: '⚡ 今日打卡',
        tag: '当前打卡',
        isActiveTask: true,
        contentHtml: '<div class="exec-timer-display" style="padding:8px;"><span style="font-size:11px; font-weight:800; color:#b45309;">专注攻关倒计时</span><span class="exec-timer-digits" style="font-size:26px;">25:00</span><span style="font-size:10px; color:#10b981;">🎧 伴奏：高山流水白噪音</span></div><p style="font-size:10.5px; color:#ea580c; font-weight:800; margin-top:4px;">独立完成联立消元，演算拍照并上传草稿原卷物证</p>',
        edgeLabel: '实训通关 ➔ 反思总结'
      },
      {
        role: 'post',
        type: 'study-ebbinghaus',
        badge: '🔁 艾宾浩斯',
        title: '错题本变式题 1-3-7-15 记忆追踪链',
        state: '⏳ 待复盘',
        tag: '温故复盘',
        contentHtml: '<div style="display:flex; flex-direction:column; gap:6px;"><div style="display:flex; justify-content:space-between; font-size:10.5px;"><span>复盘进度：</span><strong style="color:#2563eb;">第 2 轮 / 共 4 轮</strong></div><div style="background:#e5e7eb; border-radius:999px; height:8px; overflow:hidden;"><div style="background:linear-gradient(90deg, #3b82f6, #10b981); width:50%; height:100%;"></div></div><span style="font-size:10px; color:#8c6b45;">次日盲刷变式题，7日后进行二次概念诘问测试</span></div>',
        edgeLabel: '周期通关 ➔ 成果封存'
      },
      {
        role: 'post',
        type: 'study-deliverable',
        badge: '📦 阶段交付',
        title: '单元错题清零总结与知识网络切片',
        state: '🔒 待解锁',
        tag: '成果物证',
        contentHtml: '<div style="background:#fffbeb; border:1px solid #fde68a; border-radius:8px; padding:8px; font-size:11px; color:#92400e;">📜 阶段通关认证：当变式题与复盘链 100% 达成后，自动封存入校史馆攻关勋章陈列室。</div>',
        edgeLabel: ''
      }
    ]
  },
  cultivation: {
    hasPlanningProject: true,
    title: '晨读《传习录》知行合一践行',
    badge: '📜 修身阁 · 品格砥砺',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 今日待办执行中心 ❯ 📜 修身阁 ❯ 知行合一',
    projectName: '《知行合一·君子风骨百日践行计划》',
    desc: '修身要旨：研读《传习录》卷上，洒扫应对、亲侍汤药躬行践行，私下自律并记录反省。',
    evidenceText: '经典古籍研读笔记与长辈评语拍照件',
    note: '“知之真切笃实处即是行，行之明觉精察处即是知。”今日晨起洒扫庭院，侍奉父母用茶，言行如一。',
    summary: '包含古籍训诂研读、今日知行躬行打卡、慎独反省与坚毅勋章申报完整时序链路',
    nodes: [
      {
        role: 'pre',
        type: 'cultivation-classic',
        badge: '📖 古卷训诂',
        title: '《传习录》知行合一原文研读与释义',
        state: '✓ 前置达成',
        tag: '前置研读',
        contentHtml: '<div style="background:#fefce8; padding:8px; border-radius:8px; font-size:10.5px; color:#78350f;">“知之真切笃实处即是行，行之明觉精察处即是知。”王阳明心学核心命题研读。</div>',
        edgeLabel: '立志明德 ➔ 躬行践履'
      },
      {
        role: 'current',
        type: 'cultivation-action',
        badge: '🌿 知行躬行',
        title: '亲侍汤药/洒扫应对知行合一践行',
        state: '⚡ 今日打卡',
        tag: '当前打卡',
        isActiveTask: true,
        contentHtml: '<div style="background:#f0fdf4; border:1px solid #bbf7d0; padding:8px; border-radius:8px; font-size:11px; color:#166534;">晨起洒扫庭院、侍奉长辈用茶，言行一致不敷衍，记录长辈评语与躬行体会。</div>',
        edgeLabel: '日间躬行 ➔ 夜间慎独'
      },
      {
        role: 'post',
        type: 'cultivation-moral',
        badge: '🧘 慎独反省',
        title: '晚自习情绪觉察与慎独内省记录',
        state: '⏳ 待晚课',
        tag: '独处自律',
        contentHtml: '<div style="background:#faf5ff; border:1px solid #e9d5ff; padding:8px; border-radius:8px; font-size:10.5px; color:#6b21a8;">晚自习独处时情绪觉察，私下无人处克制怠惰，记录心性起伏与修身日记。</div>',
        edgeLabel: '百日笃行 ➔ 勋章结晶'
      },
      {
        role: 'post',
        type: 'cultivation-reflection',
        badge: '🏅 勋章结晶',
        title: '申报【百日笃行·君子风骨】坚毅勋章',
        state: '🔒 待通关',
        tag: '品格结晶',
        contentHtml: '<div style="background:#fff7ed; border:1px solid #fed7aa; padding:8px; border-radius:8px; font-size:10.5px; color:#9a3412;">30天知行合一连续通关，品格结晶沉淀入修身档案，荣获君子风骨坚毅勋章。</div>',
        edgeLabel: ''
      }
    ]
  },
  tree: {
    hasPlanningProject: false,
    title: '每日电子娱乐与屏幕沉迷熔炉对抗守卫',
    badge: '🌳 个人行为规范 · 诱惑对抗',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 🌳 个人行为规范 ❯ 防沉迷契约',
    projectName: '《立宪级电子产品与心智护城河防御工程》',
    desc: '底线纪律：工作日非学习用途坚决不碰手机与游戏，通过 5 分钟冷静期道德测试滋养底线树苗。',
    evidenceText: '电子产品屏幕使用时间截屏与亲子签名印章',
    note: '今日晚间克制游戏冲动，通过 5 分钟诱惑熔炉深呼吸测试，心智防线稳固！',
    summary: '包含立宪底线红线、亲子契约大典、诱惑熔炉道德测试与滴水浇灌生命树',
    nodes: [
      {
        role: 'pre',
        type: 'tree-bottomline',
        badge: '🌳 宪章底线',
        title: '每日电子产品无手机无游戏纯净时刻',
        state: '✓ 前置确立',
        tag: '最高禁令',
        contentHtml: '<div style="background:#fef2f2; border:1px dashed #fca5a5; padding:8px; border-radius:8px; font-size:10.5px; color:#991b1b;">⚠️ 最高红线：工作日晚自习坚决不碰手机与游戏，违约触发公证惩罚协议。</div>',
        edgeLabel: '立宪立规 ➔ 亲子血印'
      },
      {
        role: 'pre',
        type: 'tree-seal',
        badge: '📜 立宪大典',
        title: '亲子契约签字盖印与违约公证誓词',
        state: '✓ 协议生效',
        tag: '立宪契约',
        contentHtml: '<div style="background:#fefce8; padding:8px; border-radius:8px; font-size:10.5px; color:#854d0e;">父母与孩子共同签字画押盖印，确立家庭数字生活第一宪法，公证永久生效。</div>',
        edgeLabel: '诱惑来临 ➔ 心魔熔炉'
      },
      {
        role: 'current',
        type: 'tree-moral-test',
        badge: '🛡️ 诱惑熔炉',
        title: '面对网络诱惑 5 分钟冷静期道德测试',
        state: '⚡ 今日打卡',
        tag: '当前打卡',
        isActiveTask: true,
        contentHtml: '<div style="background:#fff7ed; border:1px solid #fdba74; padding:8px; border-radius:8px; font-size:11px; color:#c2410c;">遭遇游戏弹窗推送时启动 5 分钟深呼吸冷静期，战胜心魔诱惑并记录心路历程。</div>',
        edgeLabel: '恪守底线 ➔ 滴水润养'
      },
      {
        role: 'post',
        type: 'tree-water',
        badge: '💧 穿石浇灌',
        title: '严守底线成功给底线树苗浇水润养',
        state: '⏳ 待结算',
        tag: '生命滋养',
        contentHtml: '<div style="background:#f0fdf4; padding:8px; border-radius:8px; font-size:10.5px; color:#166534;">滴水穿石！今日守住底线，底线树汲取滋润，心智免疫力提升，心智免疫力提升！</div>',
        edgeLabel: ''
      }
    ]
  },
  treasury: {
    hasPlanningProject: false,
    title: '少儿独立财商实践与零用金收支记账',
    badge: '💰 藏金屋 · 财商启蒙',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 今日待办执行中心 ❯ 💰 藏金屋 ❯ 收支记账',
    projectName: '《少儿独立财商实践与日常收支记账》',
    desc: '财商实操：记录本周零用金发放收入与学科文具支出，核验资产结余与小票凭证。',
    evidenceText: '零花钱收支记账小票与实物物证',
    note: '成功记录零用金发放与文具支出，当前零用金总结余 ¥3,280.00，账实相符。',
    summary: '包含零用金总净资产概览、极速收支记账与客观明细台账审计',
    nodes: [
      {
        role: 'pre',
        type: 'treasury-ratio',
        badge: '⚖️ 财务准则',
        title: '少儿财商自律准则与量入为出原则',
        state: '✓ 准则确立',
        tag: '财务准则',
        contentHtml: '<div style="background:#eff6ff; padding:8px; border-radius:8px; font-size:10.5px; color:#1e40af;">自律消费法则：区分“需要”与“想要”，支出不超结余，杜绝无节制透支。</div>',
        edgeLabel: '准则确立 ➔ 记账实操'
      },
      {
        role: 'current',
        type: 'treasury-jar',
        badge: '💰 收支记账',
        title: '零用金收支快速登记与物证核验',
        state: '⚡ 今日打卡',
        tag: '当前打卡',
        isActiveTask: true,
        contentHtml: '<div style="background:#fefce8; border:1px solid #fde68a; padding:8px; border-radius:8px; font-size:11px; color:#854d0e;">登记零用金收入与文具开销，核验真实小票凭据，更新账户结余。</div>',
        edgeLabel: '记账核对 ➔ 资产沉淀'
      },
      {
        role: 'post',
        type: 'treasury-ledger',
        badge: '🏛️ 台账审计',
        title: '终身资产台账审计与信用沉淀',
        state: '✓ 持续审计',
        tag: '台账审计',
        contentHtml: '<div style="background:#f3f4f6; padding:8px; border-radius:8px; font-size:10.5px; color:#374151;">流水真实客观，形成青少儿终身诚信财务信用凭证。</div>',
        edgeLabel: ''
      }
    ]
  },
  dojo: {
    hasPlanningProject: true,
    title: '羽毛球后场高远球动作分解与体能实训',
    badge: '🥋 武道馆 · 体魄竞技',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 今日待办执行中心 ❯ 🥋 武道馆 ❯ 高远球训练',
    projectName: '《羽毛球专项技能突破与耐力体能提升计划》',
    desc: '体魄打磨：观摩名将后场转体发力动作分解切片，完成 20 分钟间歇跳绳与核心力量实训。',
    evidenceText: '体能手环运动心率监测图与动作挥拍录像',
    note: '重点纠正侧身引拍手肘下沉问题，转体带动手臂鞭打发力感明显增强，心率达 156bpm！',
    summary: '包含切片微课、专项体能间歇训练、竞技实战战报与体能机能极限界碑',
    nodes: [
      {
        role: 'pre',
        type: 'dojo-video',
        badge: '🎬 切片微课',
        title: '羽毛球后场高远球动作分解微课切片',
        state: '✓ 动作已析',
        tag: '切片观摩',
        contentHtml: '<div style="background:#f3f4f6; padding:8px; border-radius:8px; font-size:10.5px; color:#374151;">名将后场高远球侧身转体、小臂内旋与手腕鞭打动作 1080P 高清分解切片。</div>',
        edgeLabel: '技术明晰 ➔ 间歇体能'
      },
      {
        role: 'current',
        type: 'dojo-drill',
        badge: '⏱️ 体能实训',
        title: '20分钟少儿单摇跳绳连跳打卡',
        state: '⚡ 今日打卡',
        tag: '当前打卡',
        isActiveTask: true,
        contentHtml: '<div style="background:#fff7ed; border:1px solid #fdba74; padding:8px; border-radius:8px; font-size:11px; color:#c2410c;">少儿单摇跳绳连跳训练：1 分钟计时连跳 120 次 × 3 组，保持手腕摇绳与双脚微屈膝轻快落地。</div>',
        edgeLabel: '实训强化 ➔ 竞技实战'
      },
      {
        role: 'post',
        type: 'dojo-match',
        badge: '⚔️ 竞技战报',
        title: '周末实战对抗复盘与关键胜负手分析',
        state: '⏳ 待周末',
        tag: '战报录入',
        contentHtml: '<div style="background:#eff6ff; padding:8px; border-radius:8px; font-size:10.5px; color:#1e40af;">录入单打练习赛得分点，复盘高远球落点深度与后场防守失误率。</div>',
        edgeLabel: '实战检验 ➔ 突破界碑'
      },
      {
        role: 'post',
        type: 'dojo-milestone',
        badge: '🏆 机能界碑',
        title: '1000米跑 3分45秒体能耐力极限界碑',
        state: '🔒 待冲击',
        tag: '机能界碑',
        contentHtml: '<div style="background:#fefce8; padding:8px; border-radius:8px; font-size:10.5px; color:#854d0e;">身体素质阶梯突破，点亮武道馆青铜级体魄界碑徽章。</div>',
        edgeLabel: ''
      }
    ]
  },
  cognition: {
    hasPlanningProject: true,
    title: '苏格拉底产婆术逆向思维反思',
    badge: '🧠 思辨馆 · 心智模型',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 今日待办执行中心 ❯ 🧠 思辨馆 ❯ 产婆术反思',
    projectName: '《多元思维格栅与反直觉批判性思考攻坚》',
    desc: '心智升级：运用苏格拉底诘问法分析今日生活决策，寻找反例并剥离证实偏见。',
    evidenceText: '思维模型演算脑图手稿照片',
    note: '对“大家都买的文具就是好文具”进行产婆术三步追问，成功破除从众效应心理盲区。',
    summary: '包含多元模型格栅、产婆术概念诘问、生活盲区纠偏与决策树情境推演',
    nodes: [
      {
        role: 'pre',
        type: 'cognition-mental',
        badge: '🧠 心智武器',
        title: '查理·芒格多元思维模型与格栅理论',
        state: '✓ 武器就绪',
        tag: '心智模型',
        contentHtml: '<div style="background:#faf5ff; padding:8px; border-radius:8px; font-size:10.5px; color:#6b21a8;">逆向思维（反过来想）、第一性原理与二阶效应心智工具格栅。</div>',
        edgeLabel: '模型掌握 ➔ 产婆诘问'
      },
      {
        role: 'current',
        type: 'cognition-socrates',
        badge: '💡 产婆诘问',
        title: '苏格拉底概念界定与反例诘问反思打卡',
        state: '⚡ 今日打卡',
        tag: '当前打卡',
        isActiveTask: true,
        contentHtml: '<div style="background:#fffbeb; border:1px solid #fde68a; padding:8px; border-radius:8px; font-size:11px; color:#92400e;">运用“定义是什么？反例存在吗？推导链条断层在哪里？”三层诘问剖析生活判断。</div>',
        edgeLabel: '诘问破立 ➔ 盲区纠偏'
      },
      {
        role: 'post',
        type: 'cognition-bias',
        badge: '🔍 偏误纠偏',
        title: '证实偏见与幸存者偏差生活案例纠偏',
        state: '⏳ 待复核',
        tag: '偏误纠偏',
        contentHtml: '<div style="background:#fef2f2; padding:8px; border-radius:8px; font-size:10.5px; color:#991b1b;">记录克服从众效应与情绪化归因的真实生活实证。</div>',
        edgeLabel: '偏误纠偏 ➔ 决策沙盘'
      },
      {
        role: 'post',
        type: 'cognition-decision',
        badge: '🌳 决策推演',
        title: '关键情境决策树多路径推演沙盘',
        state: '✓ 已推演',
        tag: '决策推演',
        contentHtml: '<div style="background:#eff6ff; padding:8px; border-radius:8px; font-size:10.5px; color:#1e40af;">对下阶段学科选考组合展开概率收益与最坏情境推演。</div>',
        edgeLabel: ''
      }
    ]
  },
  note: {
    hasPlanningProject: false,
    title: '心流专注深度手记与晚间情绪微风复盘',
    badge: '📝 每日随记 · 双轨随笔',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 📝 每日随记 ❯ 时光随笔',
    projectName: '《终身岛民每日心流与灵感高光记录集》',
    desc: '时光印记：写下今日晨间愿景、午后顿悟与夜幕感恩，忠实沉淀至《年度生命全书》。',
    evidenceText: '手写手账日记原件与语音物证',
    note: '晨读有感，数学大题终于攻破，晚风微凉，生活充实笃定。今日收获最大的词汇是“韧性”。',
    summary: '包含灵感闪念捕捉、三段式心流随笔打卡、原声录音物证与时光长卷瀑布流',
    nodes: [
      {
        role: 'pre',
        type: 'note-spark',
        badge: '💡 闪念捕捉',
        title: '顿悟灵光闪念火花突发捕捉记录',
        state: '✓ 灵感留痕',
        tag: '闪念火花',
        contentHtml: '<div style="background:#fefce8; padding:8px; border-radius:8px; font-size:10.5px; color:#854d0e;">课间突发奇想的数学几何辅助线解法与作文金句，随手快速闪念留痕。</div>',
        edgeLabel: '灵感汇聚 ➔ 心流随笔'
      },
      {
        role: 'current',
        type: 'note-flow',
        badge: '✍️ 心流日记',
        title: '三段式时光心流日记随笔打卡',
        state: '⚡ 今日打卡',
        tag: '当前打卡',
        isActiveTask: true,
        contentHtml: '<div style="background:#fffdf8; border:1px solid #ebdcc5; padding:8px; border-radius:8px; font-size:11px; color:#4e3012;">晨光立志（今日焦点）、午后顿悟（攻坚突破）、夜幕自省（感恩与反思）三段式撰写。</div>',
        edgeLabel: '文字沉淀 ➔ 原声物证'
      },
      {
        role: 'post',
        type: 'note-audio',
        badge: '🎙️ 原声物证',
        title: '60秒原声自传录音物证沉淀',
        state: '⏳ 待录入',
        tag: '原声留痕',
        contentHtml: '<div style="background:#f0fdf4; padding:8px; border-radius:8px; font-size:10.5px; color:#166534;">用自己的声音口述今日最激动人心的攻坚瞬间，保留青少儿真实童声音色。</div>',
        edgeLabel: '多维记录 ➔ 时光画卷'
      },
      {
        role: 'post',
        type: 'note-day',
        badge: '📚 时光画卷',
        title: '今日高光与至暗反省长卷瀑布流',
        state: '✓ 自动编纂',
        tag: '时光长卷',
        contentHtml: '<div style="background:#eff6ff; padding:8px; border-radius:8px; font-size:10.5px; color:#1e40af;">客观汇编全天行为与高光瞬间，为年度生命印记全书奠定篇章。</div>',
        edgeLabel: ''
      }
    ]
  },
  // 无关联项目规划视图的独立日常习惯打卡示例 (验证条件判断逻辑)
  routine: {
    hasPlanningProject: false,
    title: '睡前洗漱整理书包日常自律打卡',
    badge: '🌿 独立习惯 · 日常打卡',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 今日待办执行中心 ❯ 独立生活习惯',
    desc: '独立习惯打卡项，不隶属于任何宏观规划项目与三级攻坚课题。',
    evidenceText: '书包整理与桌面洁净拍照物证',
    note: '整理好明日考卷与文具，调好 6:30 晨读闹钟。',
    summary: '此任务为独立日常习惯打卡，无关联项目的规划视图，右上角自动隐藏【查看项目】按钮',
    nodes: []
  }
};

// 打开执行视图中间操作区专属执行面板
function openExecutionWorkspace(pavilionId) {
  return openExecCardPopupView(pavilionId);
}


// ==========================================================================
// 全域执行中心 · 各模块专属沉浸式执行工作台渲染引擎 (彻底去弹窗化 · 海岛背景保持不变)
// ==========================================================================
const EXEC_MODULE_CONFIGS = {
  study: {
    pavilionName: '校史馆 · 学科攻坚',
    badgeClass: 'study',
    badgeIcon: '🏫',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8',
    badgeBorder: '#bfdbfe',
    title: '小学数学进退位口算达标与思维训练',
    projectName: '《小学数学口算达标与逆向思维训练》',
    hasPlanningProject: true,
    rewardText: '🎯 口算达标 · ⏱️ 20m专注',
    leftPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#1e3a8a;">📘 核心攻关要领与题卡推演</span>
          <span style="font-size:10px; background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:6px; font-weight:bold;">小学数学必考课题</span>
        </div>
        <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:12px; font-size:11.5px; color:#1e293b; line-height:1.6;">
          <div style="font-weight:bold; color:#0f172a; margin-bottom:4px;">【典型口算题卡】</div>
          <p style="margin:0 0 8px 0; color:#334155;">23 - 8 = ?，45 - 19 = ?。原错答：23 - 8 = 17（个位不够减未借位）。</p>
          <div style="background:#f8fafc; border-left:3px solid #3b82f6; padding:8px 10px; border-radius:0 8px 8px 0; font-size:10.5px; color:#475569;">
            <strong style="color:#1d4ed8;">⚠️ 核心通解模型：</strong> 退位减法先用“破十法”拆十减减数，再与个位数相加；进位加法运用“凑十法”拆小数凑大数！
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">
          <div style="font-size:11px; font-weight:800; color:#533618;">📷 演算手稿留痕与高清原卷物证</div>
          <div style="display:flex; gap:10px; align-items:center;">
            <div class="node-img-preview-box" onclick="viewNodeImage()" style="flex:1; height:85px; background:#f4eee2; border:1.5px dashed #caa87c; border-radius:10px; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer;" title="点击放大查看草稿原卷高清大图">
              <span style="font-size:24px;">📄</span>
              <span style="font-size:10.5px; font-weight:800; color:#854d0e;">草稿原卷已附加 (点击查阅高清件)</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:6px; width:130px;">
              <button type="button" class="card-graphic-pill pill-camera" style="height:32px; font-size:11px;" onclick="uploadTaskEvidence()">📷 拍摄草稿</button>
              <button type="button" class="card-graphic-pill pill-note" style="height:32px; font-size:11px;" onclick="viewNodeImage()">🔍 放大原卷</button>
            </div>
          </div>
        </div>
      </div>
    `,
    rightPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#059669;">⏱️ 沉浸式心流专注实训 (防冻结心跳秒表)</span>
          <span style="font-size:10px; color:#10b981; font-weight:bold;">白噪音：高山流水 🎧</span>
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between; background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px 16px;">
          <div>
            <div style="font-size:10px; color:#64748b; font-weight:bold;">攻坚限时倒计时</div>
            <div class="exec-timer-digits" id="exec-popup-timer-digits" style="font-size:28px; font-family:monospace; font-weight:900; color:#ea580c;">25:00</div>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="card-graphic-pill pill-video" style="height:34px; padding:0 14px; font-size:11.5px;" id="btn-exec-timer-start" onclick="toggleExecPopupTimer()">▶️ 开始专注</button>
            <button type="button" class="card-graphic-pill pill-note" style="height:34px; padding:0 10px; font-size:11px;" onclick="resetExecPopupTimer()">🔄 重置</button>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">
          <div style="font-size:11px; font-weight:800; color:#2563eb;">✍️ 攻坚顿悟心得与易错归因便签</div>
          <textarea class="add-module-textarea" id="exec-popup-note-textarea" rows="3" style="resize:none; font-size:11px; padding:8px;" placeholder="记录今日解题心得或顿悟...">易错归因：退位减法个位不够减需向十位借1当10；已掌握破十法口诀，30道题卡全对！</textarea>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:10px; color:#8c6b45;">#判别式先行 #齐次化通解</span>
            <button type="button" class="card-graphic-pill pill-brush" style="height:26px; font-size:10.5px;" onclick="showIslandToast('📝 心得便签已自动暂存')">💾 暂存便签</button>
          </div>
        </div>

        <div style="background:#fffdf8; border:1.5px solid #e2d2bc; border-radius:10px; padding:8px 12px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:10.5px; color:#059669; font-weight:800;" id="exec-popup-verify-text">✓ 草稿原卷已附加 | ✓ 番茄钟 25m 就绪 | ✓ 顿悟便签已录入</span>
          <button type="button" class="card-graphic-pill pill-seal" id="btn-exec-popup-main-checkin" style="height:34px; padding:0 18px; font-size:12px; font-weight:900;" onclick="handleExecPopupMainCheckin()">🌟 立即完成学科攻坚打卡</button>
        </div>
      </div>
    `
  },

  cultivation: {
    pavilionName: '修身阁 · 品格砥砺',
    badgeClass: 'cultivation',
    badgeIcon: '📜',
    badgeBg: '#fef3c7',
    badgeColor: '#b45309',
    badgeBorder: '#fde68a',
    title: '《论语·公冶长》“盍各言尔志”经典研读与知行合一躬行',
    projectName: '《儒家经典笃行研习与仁爱笃行大典》',
    hasPlanningProject: true,
    rewardText: '📜 知行合一 · 🌿 躬行践履',
    leftPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#78350f;">📖 圣贤古籍原典诵读与知行准则</span>
          <span style="font-size:10px; background:#fffbeb; color:#92400e; padding:2px 8px; border-radius:6px; font-weight:bold;">修身立志日课</span>
        </div>
        <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:12px; font-size:11.5px; color:#1e293b; line-height:1.6;">
          <div style="font-weight:bold; color:#78350f; margin-bottom:4px;">【经典原文】</div>
          <p style="margin:0 0 8px 0; font-family:serif; font-size:12.5px; color:#451a03; background:#fefce8; padding:8px 10px; border-radius:6px;">“子曰：盍各言尔志？颜渊曰：愿无伐善，无施劳。子路曰：愿车马衣轻裘与朋友共，敝之而无憾。”</p>
          <div style="background:#f8fafc; border-left:3px solid #d97706; padding:8px 10px; border-radius:0 8px 8px 0; font-size:10.5px; color:#475569;">
            <strong style="color:#b45309;">🌟 躬行准则：</strong> 不自夸才能，不表白功劳；今日在班级主动协助课代表整理作业不居功，记录躬行感悟。
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">
          <div style="font-size:11px; font-weight:800; color:#533618;">📷 小楷手抄原件与躬行照片物证</div>
          <div style="display:flex; gap:10px; align-items:center;">
            <div class="node-img-preview-box" onclick="viewNodeImage()" style="flex:1; height:85px; background:#fef9c3; border:1.5px dashed #f59e0b; border-radius:10px; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer;">
              <span style="font-size:24px;">📜</span>
              <span style="font-size:10.5px; font-weight:800; color:#92400e;">“愿无伐善，无施劳”小楷手抄件已附加</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:6px; width:130px;">
              <button type="button" class="card-graphic-pill pill-camera" style="height:32px; font-size:11px;" onclick="uploadTaskEvidence()">📷 拍摄手抄</button>
              <button type="button" class="card-graphic-pill pill-note" style="height:32px; font-size:11px;" onclick="viewNodeImage()">🔍 查阅古卷</button>
            </div>
          </div>
        </div>
      </div>
    `,
    rightPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#b45309;">⏱️ 晨读慎独心流钟</span>
          <span style="font-size:10px; color:#15803d; font-weight:bold;">古琴流水伴奏 🎧</span>
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between; background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px 16px;">
          <div>
            <div style="font-size:10px; color:#64748b; font-weight:bold;">慎独诵读倒计时</div>
            <div class="exec-timer-digits" id="exec-popup-timer-digits" style="font-size:28px; font-family:monospace; font-weight:900; color:#b45309;">20:00</div>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="card-graphic-pill pill-video" style="height:34px; padding:0 14px; font-size:11.5px;" id="btn-exec-timer-start" onclick="toggleExecPopupTimer()">▶️ 开始慎读</button>
            <button type="button" class="card-graphic-pill pill-note" style="height:34px; padding:0 10px; font-size:11px;" onclick="resetExecPopupTimer()">🔄 重置</button>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">
          <div style="font-size:11px; font-weight:800; color:#78350f;">✍️ 今日知行合一躬行手记</div>
          <textarea class="add-module-textarea" id="exec-popup-note-textarea" rows="3" style="resize:none; font-size:11px; padding:8px;">帮同学辅导难题时克制炫耀冲动，谨遵颜渊“无伐善”之训，心境格外宁静踏实。</textarea>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:10px; color:#8c6b45;">#仁爱笃行 #无伐善无施劳</span>
            <button type="button" class="card-graphic-pill pill-brush" style="height:26px; font-size:10.5px;" onclick="showIslandToast('📝 躬行手记已自动暂存')">💾 暂存便签</button>
          </div>
        </div>

        <div style="background:#fffdf8; border:1.5px solid #e2d2bc; border-radius:10px; padding:8px 12px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:10.5px; color:#059669; font-weight:800;">✓ 晨读 20m 达成 | ✓ 小楷手抄已存证 | ✓ 躬行日课已核验</span>
          <button type="button" class="card-graphic-pill pill-seal" id="btn-exec-popup-main-checkin" style="height:34px; padding:0 18px; font-size:12px; font-weight:900; background:linear-gradient(135deg,#b45309,#78350f); color:#fff;" onclick="handleExecPopupMainCheckin()">🌟 躬行印章盖印打卡</button>
        </div>
      </div>
    `
  },

  tree: {
    pavilionName: '个人行为规范 · 诱惑对抗',
    badgeClass: 'tree',
    badgeIcon: '🌳',
    badgeBg: '#dcfce7',
    badgeColor: '#15803d',
    badgeBorder: '#86efac',
    title: '每日电子娱乐与屏幕沉迷熔炉对抗守卫',
    projectName: '《个人自律契约大典 · 屏幕沉迷防线》',
    hasPlanningProject: false, // 严格无规划视图
    rewardText: '🛡️ 心智防线 · 🔒 零屏幕沉迷',
    leftPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#14532d;">🛡️ 最高自律契约条款与屏幕防线边界</span>
          <span style="font-size:10px; background:#dcfce7; color:#166534; padding:2px 8px; border-radius:6px; font-weight:bold;">履约率 98.5%</span>
        </div>
        <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:12px; font-size:11.5px; color:#1e293b; line-height:1.6;">
          <div style="font-weight:bold; color:#14532d; margin-bottom:4px;">【契约红线条款】</div>
          <p style="margin:0 0 8px 0; color:#166534; background:#f0fdf4; padding:8px 10px; border-radius:6px;">每日娱乐屏幕使用不超过 45 分钟；进入专注攻坚模式前，手机必须物理封存放入封存盒，由家长共同见证。</p>
          <div style="background:#fef2f2; border-left:3px solid #ef4444; padding:8px 10px; border-radius:0 8px 8px 0; font-size:10.5px; color:#991b1b;">
            <strong>🔒 违约预警机制：</strong> 若超额使用触发 5 分钟冷静期反思测试并记录防线预警一次，底线健康度实时扣减。
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">
          <div style="font-size:11px; font-weight:800; color:#14532d;">📱 手机物理封存照片与屏幕使用时间截屏</div>
          <div style="display:flex; gap:10px; align-items:center;">
            <div class="node-img-preview-box" onclick="viewNodeImage()" style="flex:1; height:85px; background:#f0fdf4; border:1.5px dashed #4ade80; border-radius:10px; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer;">
              <span style="font-size:24px;">🔒</span>
              <span style="font-size:10.5px; font-weight:800; color:#14532d;">手机已入物理封存盒 (当日使用 42m 截图已传)</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:6px; width:130px;">
              <button type="button" class="card-graphic-pill pill-camera" style="height:32px; font-size:11px;" onclick="uploadTaskEvidence()">📷 拍摄封存</button>
              <button type="button" class="card-graphic-pill pill-note" style="height:32px; font-size:11px;" onclick="viewNodeImage()">🔍 查看截屏</button>
            </div>
          </div>
        </div>
      </div>
    `,
    rightPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#15803d;">⏱️ 诱惑熔炉冷静期深呼吸测试</span>
          <span style="font-size:10px; color:#15803d; font-weight:bold;">抵御网游分心测试</span>
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between; background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px 16px;">
          <div>
            <div style="font-size:10px; color:#64748b; font-weight:bold;">冷静期深呼吸倒计时</div>
            <div class="exec-timer-digits" id="exec-popup-timer-digits" style="font-size:28px; font-family:monospace; font-weight:900; color:#15803d;">05:00</div>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="card-graphic-pill pill-video" style="height:34px; padding:0 14px; font-size:11.5px;" id="btn-exec-timer-start" onclick="toggleExecPopupTimer()">▶️ 开启测试</button>
            <button type="button" class="card-graphic-pill pill-note" style="height:34px; padding:0 10px; font-size:11px;" onclick="resetExecPopupTimer()">🔄 重置</button>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">
          <div style="font-size:11px; font-weight:800; color:#14532d;">✍️ 守正立宪自律反思便签</div>
          <textarea class="add-module-textarea" id="exec-popup-note-textarea" rows="3" style="resize:none; font-size:11px; padding:8px;">晚间同学邀请开黑打网游，恪守底线契约坚决拒绝，保护了 45 分钟心流专注，契约履约率 98.5%！</textarea>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:10px; color:#15803d;">#防沉迷守卫 #底线立宪</span>
            <button type="button" class="card-graphic-pill pill-brush" style="height:26px; font-size:10.5px;" onclick="showIslandToast('📝 自律便签已自动暂存')">💾 暂存便签</button>
          </div>
        </div>

        <div style="background:#fffdf8; border:1.5px solid #bbf7d0; border-radius:10px; padding:8px 12px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:10.5px; color:#059669; font-weight:800;">✓ 屏幕时间 42m 未超限 | ✓ 封存照片已核验 | ✓ 履约率 98.5%</span>
          <button type="button" class="card-graphic-pill pill-seal" id="btn-exec-popup-main-checkin" style="height:34px; padding:0 18px; font-size:12px; font-weight:900; background:linear-gradient(135deg,#16a34a,#14532d); color:#fff;" onclick="handleExecPopupMainCheckin()">🌟 朱砂法印盖印打卡</button>
        </div>
      </div>
    `
  },

  treasury: {
    pavilionName: '藏金屋 · 财商实践',
    badgeClass: 'treasury',
    badgeIcon: '💰',
    badgeBg: '#fef3c7',
    badgeColor: '#b45309',
    badgeBorder: '#fde68a',
    title: '少儿独立财商实践 · 零用金收支记账打卡',
    projectName: '《少儿独立财商启蒙与日常收支记账》',
    hasPlanningProject: false,
    rewardText: '💰 理性记账 · 📊 账实相符',
    leftPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#78350f;">💵 零用金收支快速登记</span>
          <span style="font-size:10px; background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:6px; font-weight:bold;">量入为出 · 严禁透支</span>
        </div>
        <div style="background:#fff; border:1px solid #fed7aa; border-radius:10px; padding:10px; margin-bottom:10px;">
          <div style="font-size:11px; color:#78350f;">当前总净资产结余：<strong style="font-size:18px; color:#b45309;">¥3,280.00</strong></div>
        </div>
        <div style="font-size:11px; font-weight:800; color:#533618;">📷 购买票据凭证与消费明细物证</div>
        <div style="display:flex; gap:10px; align-items:center; margin-top:6px;">
          <div class="node-img-preview-box" onclick="viewNodeImage()" style="flex:1; height:65px; background:#fef9c3; border:1.5px dashed #f59e0b; border-radius:8px; display:flex; align-items:center; justify-content:center; gap:8px; cursor:pointer;">
            <span style="font-size:20px;">🧾</span>
            <span style="font-size:10px; font-weight:bold; color:#92400e;">文具错题本支出 ¥42.00小票已核验</span>
          </div>
          <button type="button" class="card-graphic-pill pill-camera" style="width:110px; height:32px; font-size:11px;" onclick="uploadTaskEvidence()">📷 拍摄小票</button>
        </div>
      </div>
    `,
    rightPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#b45309;">📊 今日记账核对与资金结余复盘</span>
          <span style="font-size:10px; color:#059669; font-weight:bold;">账实相符 ✓</span>
        </div>
        <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px; display:flex; flex-direction:column; gap:6px;">
          <div style="display:flex; justify-content:space-between; font-size:11px;">
            <span>今日零用金发放收入：</span><strong style="color:#15803d;">+¥100.00</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px;">
            <span>学科文具支出核销：</span><strong style="color:#dc2626;">-¥42.00 (错题活页本)</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; border-top:1px dashed #cbd5e1; padding-top:4px;">
            <span>当前零用金账户总结余：</span><strong style="color:#b45309;">¥3,280.00</strong>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">
          <div style="font-size:11px; font-weight:800; color:#78350f;">✍️ 消费自律与理财心得便签</div>
          <textarea class="add-module-textarea" id="exec-popup-note-textarea" rows="3" style="resize:none; font-size:11px; padding:8px;">周末购买文具开销 ¥42.00，真实记录小票物证，先记账后消费，严守不透支底线，财商自律感提升！</textarea>
        </div>

        <div style="background:#fffdf8; border:1.5px solid #fde68a; border-radius:10px; padding:8px 12px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:10.5px; color:#059669; font-weight:800;">✓ 收支已核对 | ✓ 支出账目核验无误</span>
          <button type="button" class="card-graphic-pill pill-seal" id="btn-exec-popup-main-checkin" style="height:34px; padding:0 18px; font-size:12px; font-weight:900; background:linear-gradient(135deg,#d97706,#b45309); color:#fff;" onclick="handleExecPopupMainCheckin()">🌟 完成记账打卡</button>
        </div>
      </div>
    `
  },
  dojo: {
    pavilionName: '武道馆 · 体能竞技',
    badgeClass: 'dojo',
    badgeIcon: '🥋',
    badgeBg: '#fee2e2',
    badgeColor: '#b91c1c',
    badgeBorder: '#fca5a5',
    title: '少儿单摇跳绳连跳与敏捷协调特训',
    projectName: '《少儿体育体适能达标与跳绳连跳强化工程》',
    hasPlanningProject: true,
    rewardText: '🥋 跳绳达标 · ⏱️ 20m专注',
    leftPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#991b1b;">🏋️ 动作标准与训练规范量化</span>
          <span style="font-size:10px; background:#fee2e2; color:#991b1b; padding:2px 8px; border-radius:6px; font-weight:bold;">少儿体测优秀标准</span>
        </div>
        <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:12px; font-size:11.5px; color:#1e293b; line-height:1.6;">
          <div style="font-weight:bold; color:#991b1b; margin-bottom:4px;">【今日必练科目】</div>
          <p style="margin:0 0 6px 0;">1 分钟单摇跳绳 120 次 × 3 组 + 提踵练习 30 次 × 2 组 + 协调拉伸 5 分钟。</p>
          <div style="background:#fef2f2; border-left:3px solid #ef4444; padding:8px 10px; border-radius:0 8px 8px 0; font-size:10.5px; color:#991b1b;">
            <strong>⚡ 动作要领：</strong> 大臂夹紧、小臂放松、手腕摇绳、微屈膝脚尖点地，录制第 3 组跳绳连跳物证。
          </div>
        </div>

        <div style="font-size:11px; font-weight:800; color:#991b1b; margin-top:8px;">📹 第 4 组动作视频物证留痕</div>
        <div style="display:flex; gap:10px; align-items:center; margin-top:4px;">
          <div class="node-img-preview-box" onclick="viewNodeImage()" style="flex:1; height:65px; background:#fff1f2; border:1.5px dashed #f87171; border-radius:8px; display:flex; align-items:center; justify-content:center; gap:8px; cursor:pointer;">
            <span style="font-size:22px;">🎬</span>
            <span style="font-size:10.5px; font-weight:bold; color:#991b1b;">第 4 组 12 次标准引体录像已存档</span>
          </div>
          <button type="button" class="card-graphic-pill pill-video" style="width:110px; height:32px; font-size:11px;" onclick="uploadTaskEvidence()">📹 录制视频</button>
        </div>
      </div>
    `,
    rightPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#ea580c;">⏱️ 组间间歇休息倒计时</span>
          <span style="font-size:10px; color:#b91c1c; font-weight:bold;">心率监测 168bpm</span>
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between; background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px 16px;">
          <div>
            <div style="font-size:10px; color:#64748b; font-weight:bold;">间歇恢复秒表</div>
            <div class="exec-timer-digits" id="exec-popup-timer-digits" style="font-size:28px; font-family:monospace; font-weight:900; color:#b91c1c;">01:30</div>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="card-graphic-pill pill-video" style="height:34px; padding:0 14px; font-size:11.5px;" id="btn-exec-timer-start" onclick="toggleExecPopupTimer()">▶️ 开启休息</button>
            <button type="button" class="card-graphic-pill pill-note" style="height:34px; padding:0 10px; font-size:11px;" onclick="resetExecPopupTimer()">🔄 重置</button>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">
          <div style="font-size:11px; font-weight:800; color:#7c2d12;">✍️ 肌肉泵感与意志突破心得便签</div>
          <textarea class="add-module-textarea" id="exec-popup-note-textarea" rows="3" style="resize:none; font-size:11px; padding:8px;">背阔肌完全发力收缩，第4组最后两把克服力竭，咬牙顶上去了，意志力得到了极大锻炼！</textarea>
        </div>

        <div style="background:#fffdf8; border:1.5px solid #fecdd3; border-radius:10px; padding:8px 12px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:10.5px; color:#059669; font-weight:800;">✓ 4组引体全部达标 | ✓ 动作视频已录入 | ✓ 心率达标</span>
          <button type="button" class="card-graphic-pill pill-seal" id="btn-exec-popup-main-checkin" style="height:34px; padding:0 18px; font-size:12px; font-weight:900; background:linear-gradient(135deg,#dc2626,#991b1b); color:#fff;" onclick="handleExecPopupMainCheckin()">🌟 提交今日体能打卡</button>
        </div>
      </div>
    `
  },

  cognition: {
    pavilionName: '思辨馆 · 认知思辨',
    badgeClass: 'cognition',
    badgeIcon: '🧠',
    badgeBg: '#f3e8ff',
    badgeColor: '#7e22ce',
    badgeBorder: '#d8b4fe',
    title: '“幸存者偏差”与“逆向思考法”案例拆解与反思报告',
    projectName: '《批判性思维与高阶认知模型训练营》',
    hasPlanningProject: true,
    rewardText: '🧠 思维格栅 · 💡 偏误纠偏',
    leftPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#6b21a8;">💡 经典心智模型与沃德战机案例图解</span>
          <span style="font-size:10px; background:#f3e8ff; color:#7e22ce; padding:2px 8px; border-radius:6px; font-weight:bold;">高阶认知模型</span>
        </div>
        <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:12px; font-size:11.5px; color:#1e293b; line-height:1.6;">
          <div style="font-weight:bold; color:#6b21a8; margin-bottom:4px;">【经典案例辨析】</div>
          <p style="margin:0 0 6px 0;">拆解二战统计学家亚伯拉罕·沃德战机弹孔案例：为什么弹孔最少的地方（发动机）才最需要加固？因为发动机中弹的飞机根本无法返航！</p>
          <div style="background:#faf5ff; border-left:3px solid #9333ea; padding:8px 10px; border-radius:0 8px 8px 0; font-size:10.5px; color:#581c87;">
            <strong>🔍 现实反思切角：</strong> 结合近期考试失分，反思日常只看“已做错的题”而忽视“看似掌握实则靠运气蒙对的题”的思维盲区。
          </div>
        </div>

        <div style="font-size:11px; font-weight:800; color:#6b21a8; margin-top:8px;">💡 沃德飞机弹孔图解与思维导图物证</div>
        <div style="display:flex; gap:10px; align-items:center; margin-top:4px;">
          <div class="node-img-preview-box" onclick="viewNodeImage()" style="flex:1; height:65px; background:#faf5ff; border:1.5px dashed #c084fc; border-radius:8px; display:flex; align-items:center; justify-content:center; gap:8px; cursor:pointer;">
            <span style="font-size:22px;">✈️</span>
            <span style="font-size:10.5px; font-weight:bold; color:#6b21a8;">战机弹孔分布图解手稿已存档 (点击查阅)</span>
          </div>
          <button type="button" class="card-graphic-pill pill-note" style="width:110px; height:32px; font-size:11px;" onclick="viewNodeImage()">🔍 查阅图解</button>
        </div>
      </div>
    `,
    rightPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#7e22ce;">⏱️ 苏格拉底产婆术诘问辩论钟</span>
          <span style="font-size:10px; color:#7e22ce; font-weight:bold;">思辨对话中 💬</span>
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between; background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px 16px;">
          <div>
            <div style="font-size:10px; color:#64748b; font-weight:bold;">深度辩论倒计时</div>
            <div class="exec-timer-digits" id="exec-popup-timer-digits" style="font-size:28px; font-family:monospace; font-weight:900; color:#7e22ce;">15:00</div>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="card-graphic-pill pill-video" style="height:34px; padding:0 14px; font-size:11.5px;" id="btn-exec-timer-start" onclick="toggleExecPopupTimer()">▶️ 开启辩论</button>
            <button type="button" class="card-graphic-pill pill-note" style="height:34px; padding:0 10px; font-size:11px;" onclick="resetExecPopupTimer()">🔄 重置</button>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">
          <div style="font-size:11px; font-weight:800; color:#581c87;">✍️ 自身思维盲区纠偏手记</div>
          <textarea class="add-module-textarea" id="exec-popup-note-textarea" rows="3" style="resize:none; font-size:11px; padding:8px;">以往总以为数学只要把错题重做即可，却忽略了部分做对题目其实是蒙对，必须建立盲区检视清单！</textarea>
        </div>

        <div style="background:#fffdf8; border:1.5px solid #e9d5ff; border-radius:10px; padding:8px 12px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:10.5px; color:#059669; font-weight:800;">✓ 幸存者偏差拆解完毕 | ✓ 认知辩论通过 | ✓ 盲区清单已录入</span>
          <button type="button" class="card-graphic-pill pill-seal" id="btn-exec-popup-main-checkin" style="height:34px; padding:0 18px; font-size:12px; font-weight:900; background:linear-gradient(135deg,#9333ea,#6b21a8); color:#fff;" onclick="handleExecPopupMainCheckin()">🌟 提交认知思辨打卡</button>
        </div>
      </div>
    `
  },

  note: {
    pavilionName: '每日随记 · 双轨随笔',
    badgeClass: 'note',
    badgeIcon: '📝',
    badgeBg: '#e0f2fe',
    badgeColor: '#0369a1',
    badgeBorder: '#7dd3fc',
    title: '心流专注深度手记与晚间情绪微风复盘',
    projectName: '《全息成长生命微风双轨手记年册》',
    hasPlanningProject: false, // 严格无规划视图
    rewardText: '📝 双轨心流 · 🏷️ 情绪沉淀',
    leftPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#075985;">📊 今日全岛客观行为真实流水全自动汇编 (上半轨)</span>
          <span style="font-size:10px; background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:6px; font-weight:bold;">全自动采集 · 严禁捏造</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:5px; background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px; font-size:10.5px; color:#334155;">
          <div style="display:flex; justify-content:space-between; background:#f8fafc; padding:5px 8px; border-radius:6px; border:1px solid #e2e8f0;">
            <span>07:30 - 07:50 📜 修身阁晨读《论语》知行躬行打卡</span>
            <span style="color:#059669; font-weight:bold;">✓ 20m 慎独心流</span>
          </div>
          <div style="display:flex; justify-content:space-between; background:#f8fafc; padding:5px 8px; border-radius:6px; border:1px solid #e2e8f0;">
            <span>10:15 - 10:35 🏫 小学数学口算达标与易错反思</span>
            <span style="color:#059669; font-weight:bold;">✓ 草稿照片已附加</span>
          </div>
          <div style="display:flex; justify-content:space-between; background:#f8fafc; padding:5px 8px; border-radius:6px; border:1px solid #e2e8f0;">
            <span>16:00 - 16:20 🥋 少儿单摇跳绳连跳 120次×3组</span>
            <span style="color:#059669; font-weight:bold;">✓ 心率 168bpm</span>
          </div>
          <div style="display:flex; justify-content:space-between; background:#f8fafc; padding:5px 8px; border-radius:6px; border:1px solid #e2e8f0;">
            <span>18:10 - 18:20 💰 藏金屋零花钱 ¥100.00 收入记账</span>
            <span style="color:#059669; font-weight:bold;">✓ 30-50-20</span>
          </div>
        </div>
        <div style="font-size:9.5px; color:#64748b; margin-top:6px;">
          * 系统忠实记录孩子每一个行为印记，自动汇入《年度自传体生命印记全书》，构建终身逆境免疫力。
        </div>
      </div>
    `,
    rightPaneHtml: `
      <div class="exec-stage-card-box">
        <div class="exec-stage-card-header">
          <span style="font-size:12px; font-weight:900; color:#0369a1;">✍️ 今日主观心流日记与情绪反思 (下半轨)</span>
          <span style="font-size:10px; color:#0369a1; font-weight:bold;">双轨沉淀中 📖</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div style="font-size:10.5px; font-weight:bold; color:#075985;">☀️ 事实高光与攻坚顿悟：</div>
          <textarea class="add-module-textarea" id="exec-popup-note-textarea" rows="2" style="resize:none; font-size:11px; padding:6px;">今日最大的突破是数学压轴题联立消元不再畏难，虽然耗费了 25 分钟番茄钟，但独立证出了垂直定理，心流感觉太棒了！</textarea>
          
          <div style="font-size:10.5px; font-weight:bold; color:#047857; margin-top:4px;">🍃 情绪微风与感恩自省：</div>
          <textarea class="add-module-textarea" rows="2" style="resize:none; font-size:11px; padding:6px;">傍晚放学看见晚霞很美，感谢妈妈为我准备的水果拼盘；体能第四组差点力竭放弃，咬牙顶上去了，韧性得到了锻炼。</textarea>
        </div>

        <div style="background:#fffdf8; border:1.5px solid #bae6fd; border-radius:10px; padding:8px 12px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:10.5px; color:#059669; font-weight:800;">✓ 双轨心流手记录入完毕 | ✓ 累计 42 篇随记沉淀</span>
          <button type="button" class="card-graphic-pill pill-seal" id="btn-exec-popup-main-checkin" style="height:34px; padding:0 18px; font-size:12px; font-weight:900; background:linear-gradient(135deg,#0284c7,#0369a1); color:#fff;" onclick="handleExecPopupMainCheckin()">🌟 汇入年度生命全书</button>
        </div>
      </div>
    `
  }
};

function normalizeExecCheckinType(id) {
  if (!id) return 'goal';
  const map = {
    goal: 'goal',
    'card-goal': 'goal',
    study: 'goal',
    drill: 'drill',
    'card-drill': 'drill',
    dojo: 'drill',
    habit: 'habit',
    'card-habit': 'habit',
    cultivation: 'habit',
    tree: 'habit',
    routine: 'habit',
    reflection: 'reflection',
    'card-reflection': 'reflection',
    cognition: 'reflection',
    custom: 'custom',
    'card-custom': 'custom',
    treasury: 'custom',
    note: 'custom',
    text: 'text',
    'card-text': 'text'
  };
  return map[id] || 'goal';
}

const EXEC_CHECKIN_PAGE_META = {
  goal: {
    badge: '🎯 目标分解节点卡',
    title: '阶段里程碑与量化通关目标',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 🎯 目标分解节点卡打卡页面',
    projectName: '《全息成长规划课题》',
    hasPlanningProject: true,
    legacyKey: 'study'
  },
  drill: {
    badge: '⚡ 攻坚实训节点卡',
    title: '专项技能与核心攻坚实训',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ ⚡ 攻坚实训节点卡打卡页面',
    projectName: '《全息成长规划课题》',
    hasPlanningProject: true,
    legacyKey: 'dojo'
  },
  habit: {
    badge: '🌿 习惯践行节点卡',
    title: '知行合一自律防守日课',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 🌿 习惯践行节点卡打卡页面',
    projectName: '《知行合一践行计划》',
    hasPlanningProject: true,
    legacyKey: 'cultivation'
  },
  reflection: {
    badge: '📝 评估复盘节点卡',
    title: '错因归因与靶向提升复盘卡',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 📝 评估复盘节点卡打卡页面',
    projectName: '《自我进化与复盘反思》',
    hasPlanningProject: true,
    legacyKey: 'review'
  },
  custom: {
    badge: '⚙️ 自定义配置节点卡',
    title: '自主实践探究项目',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ ⚙️ 自定义配置节点卡打卡页面',
    projectName: '《跨学科自主探究工程》',
    hasPlanningProject: true,
    legacyKey: 'treasury'
  },
  text: {
    badge: '📄 简单文本节点卡',
    title: '核心要领与备忘手记',
    breadcrumb: '🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ 📄 简单文本节点查阅页面',
    projectName: '《自主实践探究工程》',
    hasPlanningProject: false,
    legacyKey: 'note'
  }
};

function syncFormStateToAttributes(rootEl) {
  if (!rootEl) return;
  rootEl.querySelectorAll('input').forEach(inp => {
    if (inp.type === 'checkbox' || inp.type === 'radio') {
      if (inp.checked) inp.setAttribute('checked', 'checked');
      else inp.removeAttribute('checked');
    } else if (inp.type !== 'file') {
      inp.setAttribute('value', inp.value);
    }
  });
  rootEl.querySelectorAll('textarea').forEach(ta => {
    ta.textContent = ta.value;
  });
  rootEl.querySelectorAll('select').forEach(sel => {
    Array.from(sel.options).forEach(opt => {
      if (opt.value === sel.value) opt.setAttribute('selected', 'selected');
      else opt.removeAttribute('selected');
    });
  });
}

function notifyIslandStateChanged() {
  try {
    window.dispatchEvent(new CustomEvent('youth-island:state-changed'));
  } catch (e) {}
}

function toggleObsidianTabletFullscreen() {
  const isFull = document.body.classList.toggle('youth-island-tablet-fullscreen');
  closeOriginalSettingsPanel();
  showIslandToast(isFull
    ? '🖥️ 已恢复平板 100% 全屏沉浸显示'
    : '📖 已显示 Obsidian 顶部与侧边导航栏，可进入 Obsidian 设置或再次点击恢复全屏');
}

function renderTailoredExecutionStage(pavilionId) {
  const checkinType = normalizeExecCheckinType(pavilionId);
  const container = document.getElementById('exec-popup-task-view');
  if (!container) return;

  // 直接从【✅ 节点卡片打卡页面】(#checkin-frame-<type> .frame-ui-canvas) 1:1 渲染完全一致的打卡页面
  const sourceCanvas = document.querySelector('#checkin-frame-' + checkinType + ' .frame-ui-canvas');
  if (sourceCanvas) {
    container.innerHTML = sourceCanvas.innerHTML;
    container.dataset.activeCheckinType = checkinType;
  }
}

function openExecCardPopupView(pavilionId, clickedCardEl) {
  const popup = document.getElementById('exec-task-workspace') || document.getElementById('exec-card-popup-view');
  if (!popup) return;

  const checkinType = normalizeExecCheckinType(pavilionId);
  const meta = EXEC_CHECKIN_PAGE_META[checkinType] || EXEC_CHECKIN_PAGE_META.goal;
  currentExecPopupPavilion = meta.legacyKey || 'study';
  window.currentExecCheckinType = checkinType;
  window.currentActiveExecDeckCardId = clickedCardEl ? clickedCardEl.id : ('exec-card-' + checkinType);
  isExecProjectNodesViewActive = false;

  const data = EXEC_PROJECT_DATA[currentExecPopupPavilion] || EXEC_PROJECT_DATA.study;
  const customTitle = clickedCardEl ? (clickedCardEl.getAttribute('data-label') || '') : '';

  // 更新顶栏信息（与节点卡片打卡页面完全一致，若为动态派生卡则显示动态卡片真实标题）
  const titleEl = document.getElementById('exec-popup-title');
  const badgeEl = document.getElementById('exec-popup-badge');
  const breadEl = document.getElementById('exec-popup-breadcrumb');
  const mapTitleEl = document.getElementById('exec-project-map-title');
  const mapSumEl = document.getElementById('exec-project-map-summary');

  if (titleEl) titleEl.textContent = customTitle || meta.title;
  if (badgeEl) badgeEl.textContent = meta.badge;
  if (breadEl) breadEl.textContent = customTitle ? ('🏝️ 晨曦岛 ❯ ⚡ 执行中心 ❯ ' + customTitle) : meta.breadcrumb;
  if (mapTitleEl) mapTitleEl.textContent = meta.projectName || data.projectName || meta.title;
  if (mapSumEl) mapSumEl.textContent = data.summary;

  const btnToggle = document.getElementById('btn-exec-popup-toggle-project');
  const toggleIcon = document.getElementById('exec-popup-toggle-icon');
  const toggleText = document.getElementById('exec-popup-toggle-text');

  if (btnToggle) {
    if (meta.hasPlanningProject) {
      btnToggle.style.display = 'inline-flex';
      btnToggle.classList.add('is-highlight');
      if (toggleIcon) toggleIcon.textContent = '👁️';
      if (toggleText) toggleText.textContent = '查看项目';
    } else {
      btnToggle.style.display = 'none';
    }
  }

  // 1:1 渲染与【✅ 节点卡片打卡页面】完全一致的打卡工作区
  renderTailoredExecutionStage(checkinType);

  const taskView = document.getElementById('exec-popup-task-view');
  const projView = document.getElementById('exec-popup-project-view');
  if (taskView) {
    taskView.style.display = 'flex';
    if (customTitle) {
      const innerTitle = taskView.querySelector('.work-node-title');
      if (innerTitle) innerTitle.textContent = customTitle;
    }
  }
  if (projView) projView.style.display = 'none';

  const subviewDay = document.getElementById('exec-subview-day');
  const subviewWeek = document.getElementById('exec-subview-week');
  const subviewMonth = document.getElementById('exec-subview-month');
  const subviewSwitcher = document.getElementById('unified-exec-subview-switcher');

  if (subviewDay) subviewDay.style.display = 'none';
  if (subviewWeek) subviewWeek.style.display = 'none';
  if (subviewMonth) subviewMonth.style.display = 'none';
  if (subviewSwitcher) subviewSwitcher.style.display = 'none';

  document.body.classList.add('has-exec-fullscreen');
  const launcher = document.getElementById('home-island-launcher') || document.querySelector('.a-my-island-plugin-launcher');
  if (launcher) {
    launcher.style.setProperty('display', 'none', 'important');
  }
  const minimap = document.getElementById('ws-minimap-dock') || document.getElementById('island-minimap-dock');
  if (minimap) minimap.style.display = 'none';

  popup.style.display = 'flex';
}

function closeExecutionWorkspace() {
  return closeExecCardPopupView();
}

function closeExecCardPopupView() {
  const popup = document.getElementById('exec-task-workspace') || document.getElementById('exec-card-popup-view');
  const taskView = document.getElementById('exec-popup-task-view');

  // 将在执行打卡页中的最新修改同步回【✅ 节点卡片打卡页面】对应画板并清空临时容器，避免重复 ID
  if (taskView && taskView.dataset.activeCheckinType && taskView.innerHTML.trim()) {
    syncFormStateToAttributes(taskView);
    const cType = taskView.dataset.activeCheckinType;
    const targetCanvas = document.querySelector('#checkin-frame-' + cType + ' .frame-ui-canvas');
    if (targetCanvas) {
      targetCanvas.innerHTML = taskView.innerHTML;
    }
    taskView.innerHTML = '';
    delete taskView.dataset.activeCheckinType;
  }

  if (popup) popup.style.display = 'none';
  if (isExecPopupTimerRunning) {
    clearInterval(execPopupTimerInterval);
    isExecPopupTimerRunning = false;
  }
  if (typeof checkinPageDrillTimerId !== 'undefined' && checkinPageDrillTimerId) {
    clearInterval(checkinPageDrillTimerId);
    checkinPageDrillTimerId = null;
  }

  document.body.classList.remove('has-exec-fullscreen');
  const launcher = document.getElementById('home-island-launcher') || document.querySelector('.a-my-island-plugin-launcher');
  if (launcher) {
    launcher.style.removeProperty('display');
    launcher.style.display = 'flex';
  }
  const minimap = document.getElementById('ws-minimap-dock') || document.getElementById('island-minimap-dock');
  if (minimap) minimap.style.display = '';

  const subviewSwitcher = document.getElementById('unified-exec-subview-switcher');
  if (subviewSwitcher) subviewSwitcher.style.display = 'flex';
  const subviewDay = document.getElementById('exec-subview-day');
  const subviewWeek = document.getElementById('exec-subview-week');
  const subviewMonth = document.getElementById('exec-subview-month');
  if (subviewDay) subviewDay.style.display = '';
  if (subviewWeek) subviewWeek.style.display = '';
  if (subviewMonth) subviewMonth.style.display = '';
  switchExecSubView(currentExecSubView || 'day');
  notifyIslandStateChanged();
}

// 核心功能：点击查看项目按钮中间会显示出自由画布并展示该项目打卡节点前后所有的相关节点 (样式完全参考通用三级节点页面)
function toggleExecPopupProjectNodesView() {
  const data = EXEC_PROJECT_DATA[currentExecPopupPavilion] || EXEC_PROJECT_DATA.study;
  if (!data.hasPlanningProject) {
    showIslandToast('ℹ️ 该打卡任务无关联的项目规划视图');
    return;
  }

  isExecProjectNodesViewActive = !isExecProjectNodesViewActive;

  const taskView = document.getElementById('exec-popup-task-view');
  const projView = document.getElementById('exec-popup-project-view');
  const btnToggle = document.getElementById('btn-exec-popup-toggle-project');
  const toggleIcon = document.getElementById('exec-popup-toggle-icon');
  const toggleText = document.getElementById('exec-popup-toggle-text');

  if (isExecProjectNodesViewActive) {
    if (taskView) taskView.style.display = 'none';
    if (projView) projView.style.display = 'flex';
    if (toggleIcon) toggleIcon.textContent = '⚡';
    if (toggleText) toggleText.textContent = '返回打卡';
    if (btnToggle) btnToggle.classList.remove('is-highlight');

    renderExecProjectAssociatedNodes();
    showIslandToast('🗺️ 已载入关联项目全景自由画布 (完全参考通用三级节点页面)');
  } else {
    if (taskView) taskView.style.display = 'flex';
    if (projView) projView.style.display = 'none';
    if (toggleIcon) toggleIcon.textContent = '👁️';
    if (toggleText) toggleText.textContent = '查看项目';
    if (btnToggle) btnToggle.classList.add('is-highlight');
  }
}

// 渲染关联项目的自由画布与前后所有节点 (样式完全参考通用三级节点页面)
function renderExecProjectAssociatedNodes() {
  const cardsContainer = document.getElementById('exec-project-cards-container');
  const linesGroup = document.getElementById('exec-project-svg-lines-group');
  const labelsLayer = document.getElementById('exec-project-labels-layer');
  const world = document.getElementById('exec-project-canvas-world');

  if (!cardsContainer || !linesGroup || !labelsLayer) return;

  const data = EXEC_PROJECT_DATA[currentExecPopupPavilion] || EXEC_PROJECT_DATA.study;
  const nodes = data.nodes || [];

  linesGroup.innerHTML = '';
  labelsLayer.innerHTML = '';
  cardsContainer.innerHTML = '';

  const cardWidth = 380;
  const cardSpacing = 80;
  const totalSlots = nodes.length;

  // 保证世界容器宽度足够容纳全量前后节点并支持自由拖拽平移
  if (world) {
    const minWidth = Math.max(2200, 100 + totalSlots * (cardWidth + cardSpacing) + 200);
    world.style.minWidth = minWidth + 'px';
  }

  const nodeCoordinates = [];

  let cardsHtml = '';
  let labelsHtml = '';

  nodes.forEach((node, idx) => {
    const isAct = (node.role === 'current');
    const posX = 60 + idx * (cardWidth + cardSpacing);
    const posY = isAct ? 30 : 50;
    const cardHeight = 280;

    nodeCoordinates.push({
      xRight: posX + cardWidth,
      yRight: posY + cardHeight / 2,
      xLeft: posX,
      yLeft: posY + cardHeight / 2,
      role: node.role
    });

    const activeCardClass = isAct ? 'exec-active-project-node' : '';
    const activeHeaderStyle = isAct ? 'background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); border-bottom: 2px solid #ea580c;' : 'background: #fffdf8; border-bottom: 1.5px solid #ebdcc5;';

    let roleBadge = '';
    if (node.role === 'pre') {
      roleBadge = '<span class="exec-node-role-badge pre">【前置先决】</span>';
    } else if (node.role === 'current') {
      roleBadge = '<span class="exec-node-role-badge current">📌【今日执行打卡】</span>';
    } else {
      roleBadge = '<span class="exec-node-role-badge post">【后续温故】</span>';
    }

    const statePill = isAct
      ? '<span class="exec-active-node-tag" style="margin-left:auto;">⚡ 正在攻关打卡</span>'
      : ('<span style="font-size:10.5px; font-weight:800; color:#8c6b45; margin-left:auto;">' + node.state + '</span>');

    const bottomActionBtn = isAct
      ? '<button type="button" class="card-graphic-pill pill-seal" style="height:32px; width:100%; font-size:12px; font-weight:900;" onclick="toggleExecPopupProjectNodesView()">⚡ 立即执行今日打卡</button>'
      : '<button type="button" class="card-graphic-pill pill-note" style="height:30px; width:100%; font-size:11px;" onclick="showIslandToast(&apos;📄 已查阅节点详情物证：' + node.title + '&apos;)">🔍 查看该节点详情物证</button>';

    cardsHtml += '<div class="a-my-island-work-node-card tertiary-card ' + activeCardClass + '" style="position:absolute; left:' + posX + 'px; top:' + posY + 'px; width:' + cardWidth + 'px; min-height:' + cardHeight + 'px; z-index:10;" id="exec-proj-node-' + idx + '">' +
      '<div class="work-node-card-header" style="' + activeHeaderStyle + ' display:flex; align-items:center; gap:6px; padding:10px 14px;">' +
        '<span class="work-node-badge" style="background:#fef3c7; color:#b45309; border:1px solid #fde68a;">' + node.badge + '</span>' +
        roleBadge +
        '<span class="work-node-title" style="font-size:12.5px; font-weight:900; color:#38240f; flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="' + node.title + '">' + node.title + '</span>' +
        statePill +
      '</div>' +
      '<div class="work-node-body" style="padding:12px 14px; display:flex; flex-direction:column; gap:8px;">' +
        (node.contentHtml || '<p style="font-size:11px; color:#60401f;">' + node.title + '</p>') +
        '<div style="margin-top:auto; padding-top:8px; border-top:1px dashed #f1e4d0;">' +
          bottomActionBtn +
        '</div>' +
      '</div>' +
      '<div class="work-node-port port-right" style="position:absolute; right:-6px; top:50%; transform:translateY(-50%); width:12px; height:12px; border-radius:50%; background:#f59e0b; border:2px solid #fff; box-shadow:0 0 4px rgba(0,0,0,0.25);" title="拓扑路线输出端口"></div>' +
      (idx > 0 ? '<div class="work-node-port port-left" style="position:absolute; left:-6px; top:50%; transform:translateY(-50%); width:12px; height:12px; border-radius:50%; background:#3b82f6; border:2px solid #fff; box-shadow:0 0 4px rgba(0,0,0,0.25);" title="前置依赖输入端口"></div>' : '') +
      '<div class="work-card-connect-handle" style="position:absolute; right:10px; bottom:10px;" title="三级路线连线手柄">🔗</div>' +
    '</div>';

    // 绘制连线与浮动关系标签
    if (idx < nodes.length - 1) {
      const nextNode = nodes[idx + 1];
      const nextX = 60 + (idx + 1) * (cardWidth + cardSpacing);
      const nextY = (nextNode.role === 'current') ? 30 : 50;
      const nextHeight = 280;

      const x1 = posX + cardWidth;
      const y1 = posY + cardHeight / 2;
      const x2 = nextX;
      const y2 = nextY + nextHeight / 2;

      const cx1 = x1 + (x2 - x1) * 0.5;
      const cy1 = y1;
      const cx2 = x1 + (x2 - x1) * 0.5;
      const cy2 = y2;

      const isHighlightLine = (node.role === 'current' || nextNode.role === 'current');
      const lineColor = isHighlightLine ? '#ea580c' : '#f59e0b';
      const lineWidth = isHighlightLine ? 3.5 : 2.5;
      const lineDash = isHighlightLine ? '' : 'stroke-dasharray="6,4"';
      const arrowId = isHighlightLine ? 'url(#exec-dag-arrow-active)' : 'url(#exec-dag-arrow)';

      const pathData = 'M ' + x1 + ' ' + y1 + ' C ' + cx1 + ' ' + cy1 + ', ' + cx2 + ' ' + cy2 + ', ' + x2 + ' ' + y2;

      linesGroup.innerHTML += '<path d="' + pathData + '" fill="none" stroke="' + lineColor + '" stroke-width="' + lineWidth + '" ' + lineDash + ' marker-end="' + arrowId + '" />';

      const labelX = (x1 + x2) / 2;
      const labelY = (y1 + y2) / 2;
      const labelText = node.edgeLabel || '拓扑关联';
      const highlightClass = isHighlightLine ? 'highlight' : '';

      labelsHtml += '<div class="exec-edge-label-pill ' + highlightClass + '" style="left:' + labelX + 'px; top:' + labelY + 'px;" title="依赖关系说明">' + labelText + '</div>';
    }
  });

  cardsContainer.innerHTML = cardsHtml;
  labelsLayer.innerHTML = labelsHtml;

  // 默认平滑居中滚动至当前执行打卡节点
  setTimeout(() => {
    const actNode = document.querySelector('.exec-active-project-node');
    if (actNode && world) {
      const offset = actNode.offsetLeft - 120;
      if (typeof world.scrollTo === 'function') { world.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' }); } else { world.scrollLeft = Math.max(0, offset); }
    }
  }, 100);

  // 绑定鼠标拖拽平移自由画布体验 (与三级自由画布完全一致)
  initExecProjectCanvasPan(world);
}

// 自由画布拖拽平移支持
let isPanningExecCanvas = false;
let panStartX = 0;
let panScrollLeft = 0;

function initExecProjectCanvasPan(worldEl) {
  if (!worldEl || worldEl._panBound) return;
  worldEl._panBound = true;

  worldEl.addEventListener('mousedown', (e) => {
    if (e.target.closest('.a-my-island-work-node-card') || e.target.closest('button')) return;
    isPanningExecCanvas = true;
    panStartX = e.pageX - worldEl.offsetLeft;
    panScrollLeft = worldEl.scrollLeft;
    worldEl.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isPanningExecCanvas || !worldEl) return;
    e.preventDefault();
    const x = e.pageX - worldEl.offsetLeft;
    const walk = (x - panStartX) * 1.4;
    worldEl.scrollLeft = panScrollLeft - walk;
  });

  window.addEventListener('mouseup', () => {
    if (isPanningExecCanvas) {
      isPanningExecCanvas = false;
      if (worldEl) worldEl.style.cursor = 'grab';
    }
  });
}

function toggleExecPopupTimer() {
  const btn = document.getElementById('btn-exec-timer-start');
  const digits = document.getElementById('exec-popup-timer-digits');
  if (isExecPopupTimerRunning) {
    clearInterval(execPopupTimerInterval);
    isExecPopupTimerRunning = false;
    if (btn) btn.textContent = '▶️ 继续专注';
    showIslandToast('⏸️ 专注计时已暂停');
  } else {
    isExecPopupTimerRunning = true;
    if (btn) btn.textContent = '⏸️ 暂停专注';
    showIslandToast('⏱️ 心流专注实训已启动！');
    execPopupTimerInterval = setInterval(() => {
      if (execPopupTimerSeconds > 0) {
        execPopupTimerSeconds--;
        const m = String(Math.floor(execPopupTimerSeconds / 60)).padStart(2, '0');
        const s = String(execPopupTimerSeconds % 60).padStart(2, '0');
        if (digits) digits.textContent = m + ':' + s;
      } else {
        clearInterval(execPopupTimerInterval);
        isExecPopupTimerRunning = false;
        if (btn) btn.textContent = '✓ 专注达成';
        showIslandToast('🎉 25分钟极限心流专注圆满达成！');
      }
    }, 1000);
  }
}

function resetExecPopupTimer() {
  clearInterval(execPopupTimerInterval);
  isExecPopupTimerRunning = false;
  execPopupTimerSeconds = 25 * 60;
  const digits = document.getElementById('exec-popup-timer-digits');
  const btn = document.getElementById('btn-exec-timer-start');
  if (digits) digits.textContent = '25:00';
  if (btn) btn.textContent = '▶️ 启动专注';
}

// =========================================================================
// 全域状态闭环中枢 (HUD 连胜/履约率 · 核心学期目标条 · 每日随记流水 · 甘特进度回写)
// =========================================================================
window.USER_PROFILE_STATE = {
  streakDays: 0,
  streakIncrementedToday: false,
  completedTodayCount: 0,
  totalTodayCount: 0,
  baseFulfillmentRate: 100,
  violationCount: 0,
  violationRecords: [],
  checkedTaskKeys: {}
};

function computeCurrentFulfillmentRate() {
  const st = window.USER_PROFILE_STATE || { streakDays: 0, completedTodayCount: 0, totalTodayCount: 0, baseFulfillmentRate: 100, violationCount: 0 };
  if (!st.totalTodayCount || st.totalTodayCount === 0) {
    return Math.max(0, 100 - (st.violationCount || 0) * 5);
  }
  const pct = Math.round((st.completedTodayCount / st.totalTodayCount) * 100);
  return Math.max(0, Math.min(100, pct - (st.violationCount || 0) * 5));
}

function recalcAndRenderGlobalHUD() {
  const st = window.USER_PROFILE_STATE || { streakDays: 0, completedTodayCount: 0, totalTodayCount: 0, baseFulfillmentRate: 100, violationCount: 0 };
  const rate = computeCurrentFulfillmentRate();
  const streakEl = document.getElementById('hud-streak-count');
  if (streakEl) streakEl.textContent = '连续 ' + (st.streakDays || 0) + ' 天';
  const rateEl = document.getElementById('hud-rate-percent');
  if (rateEl) {
    rateEl.textContent = '履约 ' + rate + '%';
    rateEl.style.color = (st.violationCount || 0) > 0 ? '#dc2626' : '';
  }
  const statProg = document.getElementById('exec-stat-progress');
  if (statProg) {
    statProg.textContent = (st.completedTodayCount || 0) + '/' + (st.totalTodayCount || 0);
  }
  const pactBadge = document.getElementById('pact-current-rate-badge');
  if (pactBadge) {
    pactBadge.textContent = '当前综合履约率：' + rate + '%（累计违约 ' + (st.violationCount || 0) + ' 次）';
  }
}

function appendDailyAutoLog(logText, focusMinutes) {
  if (!logText) return;
  const addMins = parseInt(focusMinutes, 10) || 0;
  if (window.NOTE_STATE) {
    if (!Array.isArray(window.NOTE_STATE.todayAutoLogs)) {
      window.NOTE_STATE.todayAutoLogs = [];
    }
    if (!window.NOTE_STATE.todayAutoLogs.some(item => (typeof item === 'string' ? item : item.text) === logText)) {
      const now = new Date();
      const timeStr = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
      window.NOTE_STATE.todayAutoLogs.unshift({
        time: timeStr,
        text: logText
      });
    }
    if (addMins > 0) {
      window.NOTE_STATE.todayFocusMinutes = (window.NOTE_STATE.todayFocusMinutes || 60) + addMins;
    }
    if (Array.isArray(window.NOTE_STATE.historyEntries) && window.NOTE_STATE.historyEntries[0]) {
      const todayEntry = window.NOTE_STATE.historyEntries[0];
      if (!Array.isArray(todayEntry.autoLogs)) todayEntry.autoLogs = [];
      if (!todayEntry.autoLogs.includes(logText)) {
        todayEntry.autoLogs.unshift(logText);
      }
    }
    if (typeof currentWsPavilion !== 'undefined' && currentWsPavilion === 'note') {
      const specContainer = document.getElementById('ws-specialized-container');
      if (specContainer && typeof renderNoteSpecializedWorkspace === 'function') {
        specContainer.innerHTML = renderNoteSpecializedWorkspace();
      }
    }
  }
}

function renderHomeSemesterGoalsBanner() {
  const listEl = document.getElementById('island-goal-cards-list');
  if (!listEl || !Array.isArray(window.GANTT_PROJECTS)) return;
  const activeProjs = window.GANTT_PROJECTS.filter(p => !p.isArchived);
  if (activeProjs.length === 0) {
    listEl.innerHTML = '<div style="display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:10px 16px; color:#8c6b45; font-size:12px; font-weight:700;"><span>🌱 暂无进行中的学期规划项目</span><button type="button" class="card-graphic-pill pill-timer" onclick="switchMainSection(\'ws\'); openAddProjectModal();" style="padding:2px 10px; font-size:11px; cursor:pointer;">➕ 立即立项</button></div>';
    return;
  }

  const badgeColors = {
    '学业攻坚': { bg: '#eff6ff', color: '#1d4ed8', bar: '#2563eb' },
    '兴趣特长': { bg: '#f0fdf4', color: '#15803d', bar: '#16a34a' },
    '修身立宪': { bg: '#fef3c7', color: '#b45309', bar: '#d97706' },
    '认知思辨': { bg: '#f5f3ff', color: '#6d28d9', bar: '#7c3aed' }
  };

  listEl.innerHTML = activeProjs.slice(0, 3).map(p => {
    const res = typeof computeProjectProgressAndStatus === 'function'
      ? computeProjectProgressAndStatus(p)
      : { progress: 50, completedCount: (p.completedDays || []).length, totalDays: 10 };
    const cm = badgeColors[p.category] || { bg: '#fef3c7', color: '#b45309', bar: '#d97706' };
    const pavMeta = (typeof PAVILION_META !== 'undefined' && PAVILION_META[p.pavilion])
      ? PAVILION_META[p.pavilion]
      : { name: p.category || '学业', icon: '📐' };
    const safeTitle = String(p.title || '').replace(/"/g, '&quot;');
    const safeDesc = String(p.desc || '稳步推进阶段量化攻坚').replace(/"/g, '&quot;');
    return '<div class="island-goal-item-card" onclick="enterSecondaryWorkspace(\'' + (p.pavilion || 'study') + '\', \'gantt\')" title="点击直达【' + (pavMeta.name || p.category) + '】甘特总览规划">' +
      '<div class="goal-card-top-row">' +
        '<span class="goal-card-pav-tag" style="background:' + cm.bg + '; color:' + cm.color + ';">' + (pavMeta.icon || '🎯') + ' ' + (pavMeta.name || p.category) + '</span>' +
        '<span class="goal-card-pct-badge" style="color:' + cm.bar + ';">' + res.progress + '% (' + res.completedCount + '/' + res.totalDays + '天)</span>' +
      '</div>' +
      '<div class="goal-card-title">🎯 《' + safeTitle + '》</div>' +
      '<div class="goal-card-bottom-row">' +
        '<span class="goal-card-desc-text">' + safeDesc + '</span>' +
        '<div class="goal-card-progress-track"><div class="goal-card-progress-bar" style="width:' + res.progress + '%; background:' + cm.bar + ';"></div></div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function triggerGlobalCheckinClosedLoop(opts) {
  const options = opts || {};
  const taskKey = options.taskKey || ('task-' + Date.now());
  const pavilionId = options.pavilionId || 'study';
  const title = options.title || '攻坚实训任务';
  const focusMinutes = parseInt(options.focusMinutes, 10) || 20;
  const st = window.USER_PROFILE_STATE;

  const deckCards = document.querySelectorAll('#day-card-deck .exec-task-card');
  if (deckCards.length > 0) {
    st.totalTodayCount = Math.max(st.totalTodayCount || 5, deckCards.length);
  }

  if (!st.checkedTaskKeys[taskKey]) {
    st.checkedTaskKeys[taskKey] = true;
    st.completedTodayCount = Math.min(st.totalTodayCount, st.completedTodayCount + 1);
    if (!st.streakIncrementedToday) {
      st.streakDays += 1;
      st.streakIncrementedToday = true;
    }
  }

  // 1. 回写二级项目甘特图今日完成度 (GANTT_PROJECTS)
  if (Array.isArray(window.GANTT_PROJECTS)) {
    const todayStr = typeof GANTT_TODAY !== 'undefined' ? GANTT_TODAY : '2026-10-27';
    const catMap = { study: '学业攻坚', dojo: '兴趣特长', cultivation: '修身立宪', cognition: '认知思辨', drill: '学业攻坚', habit: '修身立宪', reflection: '学业攻坚', goal: '学业攻坚', custom: '认知思辨' };
    const targetCat = catMap[pavilionId] || (PAVILION_META[pavilionId] && PAVILION_META[pavilionId].cat) || '学业攻坚';
    const proj = (options.projId && window.GANTT_PROJECTS.find(p => p.id === options.projId)) ||
                 window.GANTT_PROJECTS.find(p => !p.isArchived && (p.pavilion === pavilionId || p.category === targetCat)) ||
                 window.GANTT_PROJECTS[0];
    if (proj) {
      if (!Array.isArray(proj.completedDays)) proj.completedDays = [];
      if (!proj.completedDays.includes(todayStr)) {
        proj.completedDays.push(todayStr);
      } else {
        // 若当日已点亮，则点亮周期内下一个待完成日期以直观体现执行推进
        const startD = typeof parseGanttDate === 'function' ? parseGanttDate(proj.startDate) : new Date(2026, 9, 22);
        for (let k = 0; k < 20; k++) {
          const cand = new Date(startD.getFullYear(), startD.getMonth(), startD.getDate() + k);
          const candStr = typeof formatGanttDate === 'function' ? formatGanttDate(cand) : todayStr;
          if (candStr <= proj.endDate && !proj.completedDays.includes(candStr)) {
            proj.completedDays.push(candStr);
            break;
          }
        }
      }
    }
    renderHomeSemesterGoalsBanner();
    if (typeof currentWsSubView !== 'undefined' && currentWsSubView === 'gantt' && typeof renderGanttChart === 'function') {
      renderGanttChart();
    }
  }

  // 2. 回写周视图与月历视图状态气泡 (确保使用 'done' 状态，杜绝错标为 'completed' 导致显示缺卡)
  if (typeof WEEK_BOARD_DATA !== 'undefined' && Array.isArray(WEEK_BOARD_DATA)) {
    const todayCol = getTodayWeekCol();
    if (todayCol && Array.isArray(todayCol.tasks)) {
      const pName = (typeof PAVILION_META !== 'undefined' && PAVILION_META[pavilionId] && PAVILION_META[pavilionId].name) ? PAVILION_META[pavilionId].name : '';
      const pendingTask = todayCol.tasks.find(t => t.status === 'pending' && (t.title === title || (pName && t.pavilion.includes(pName.slice(0, 2))))) ||
                          todayCol.tasks.find(t => t.status === 'pending');
      if (pendingTask) {
        pendingTask.status = 'done';
        pendingTask.evidence = '✓ 已上传真实打卡物证并加盖时间戳 (' + focusMinutes + ' 分钟)';
        pendingTask.reflection = '“知行合一，今日按计划圆满达成打卡目标！”';
      }
    }
    if (typeof renderWeekBoard === 'function') {
      renderWeekBoard(window.currentWeekFilter || 'all');
    }
  }
  if (typeof renderMonthCalendar === 'function') {
    renderMonthCalendar();
  }

  // 3. 更新 HUD 指标
  recalcAndRenderGlobalHUD();

  // 4. 同步写入每日随记上半轨真实客观流水
  const pName = (typeof PAVILION_META !== 'undefined' && PAVILION_META[pavilionId] && PAVILION_META[pavilionId].name) ? PAVILION_META[pavilionId].name : '执行中心';
  appendDailyAutoLog('⚡ 执行打卡达成：【' + pName + '】完成《' + title + '》(' + focusMinutes + '分钟物证已归档)', focusMinutes);

  // 5. 首次达成当日连胜升级时，自动向成就馆沉淀习惯养成勋章
  if (st.streakDays >= 19 && window.ACHIEVEMENT_STATE && Array.isArray(window.ACHIEVEMENT_STATE.cultivationItems)) {
    const achId = 'ACH-CULT-STREAK-19';
    if (!window.ACHIEVEMENT_STATE.cultivationItems.some(x => x.id === achId)) {
      window.ACHIEVEMENT_STATE.cultivationItems.unshift({
        id: achId,
        date: new Date().toISOString().split('T')[0],
        title: '连续' + st.streakDays + '天知行合一履约达人勋章',
        icon: '🔥',
        projectType: 'cultivation',
        projectTypeLabel: '修身阁 · 品格立宪',
        projectName: '《少年每日笃行知行合一研习》',
        metrics: [
          { name: '每日履约达标率', target: '≥95%', actual: computeCurrentFulfillmentRate() + '% (达标)' },
          { name: '连续打卡天数', target: '19天', actual: st.streakDays + '天 (突破)' }
        ],
        proof: '📜 每日执行打卡与物证台账自动归档留痕',
        issuer: '晨曦岛督学系统 · 自动核验',
        desc: '坚持每日规划执行与物证留痕连续达标第 ' + st.streakDays + ' 天，知行合一！'
      });
      if (typeof updateAchieveWorkspaceLiveDOM === 'function') {
        updateAchieveWorkspaceLiveDOM();
      }
    }
  }

  notifyIslandStateChanged();
}

function handleExecPopupMainCheckin() {
  const btn = document.getElementById('btn-exec-popup-main-checkin');
  const statusPill = document.getElementById('exec-task-status-pill');
  if (btn) {
    btn.textContent = '✓ 今日打卡已达成 · 已回写甘特与随记！';
    btn.style.background = '#10b981';
    btn.style.color = '#fff';
    btn.style.borderColor = '#059669';
  }
  if (statusPill) {
    statusPill.textContent = '✓ 已达成打卡';
    statusPill.style.color = '#059669';
    statusPill.style.borderColor = '#10b981';
  }

  const pavilionId = currentExecPopupPavilion || 'study';
  const cardEl = document.querySelector('.exec-task-card[data-pavilion="' + pavilionId + '"]');
  let cardTitle = '重点专项实训';
  if (cardEl) {
    cardTitle = cardEl.getAttribute('data-label') || cardTitle;
    const cardPill = cardEl.querySelector('.task-status-pill');
    if (cardPill) {
      cardPill.className = 'task-status-pill completed';
      cardPill.textContent = '🟢 今日已完成';
    }
  }

  triggerGlobalCheckinClosedLoop({
    taskKey: 'exec-popup-' + pavilionId,
    pavilionId: pavilionId,
    title: cardTitle,
    focusMinutes: 25
  });

  showIslandToast('🌟 打卡闭环达成！已同步回写甘特进度、全局履约率、每日随记与成就馆！');
  setTimeout(() => {
    closeExecCardPopupView();
  }, 1400);
}

// 模块图片从本地设备上传支持
window.tertiaryModuleUploadedImageSrc = '';

function handleTertiaryModuleFileUpload(input) {
  if (!input || !input.files || !input.files[0]) return;
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    window.tertiaryModuleUploadedImageSrc = e.target.result;
    const previewContainer = document.getElementById('tertiary-module-upload-preview-container');
    const thumb = document.getElementById('tertiary-module-upload-thumb');
    const filenameEl = document.getElementById('tertiary-module-upload-filename');
    const iconInput = document.getElementById('input-tertiary-module-icon');

    if (thumb) thumb.src = e.target.result;
    if (filenameEl) filenameEl.textContent = file.name;
    if (previewContainer) previewContainer.style.display = 'flex';
    if (iconInput) iconInput.value = '[本地图片]';

    const grid = document.getElementById('tertiary-module-icon-preset-grid');
    if (grid) {
      grid.querySelectorAll('.icon-preset-btn').forEach(b => b.classList.remove('is-active'));
    }

    showIslandToast('📷 成功载入设备图片：' + file.name);
  };

  reader.readAsDataURL(file);
}

function removeTertiaryModuleUploadedFile() {
  window.tertiaryModuleUploadedImageSrc = '';
  const previewContainer = document.getElementById('tertiary-module-upload-preview-container');
  const fileInput = document.getElementById('input-tertiary-module-file');
  const iconInput = document.getElementById('input-tertiary-module-icon');

  if (previewContainer) previewContainer.style.display = 'none';
  if (fileInput) fileInput.value = '';
  if (iconInput) iconInput.value = '⚡';

  const grid = document.getElementById('tertiary-module-icon-preset-grid');
  if (grid) {
    const firstBtn = grid.querySelector('.icon-preset-btn');
    if (firstBtn) firstBtn.classList.add('is-active');
  }

  showIslandToast('ℹ️ 已移除已选设备图片，恢复预设图标');
}

function handleTaskCardClick(event, pavilionId) {
  // 如果用户点击的是卡片内的具体按钮、输入框、下拉框或操作项，则由子元素处理
  if (event.target.closest('button') || event.target.closest('input') || event.target.closest('select') || event.target.closest('textarea') || event.target.closest('label') || event.target.closest('.card-scene-btn') || event.target.closest('.card-graphic-pill')) {
    return;
  }
  const cardEl = event.currentTarget || event.target.closest('.exec-task-card');
  if (cardEl && !cardEl.classList.contains('card-active')) {
    const allCards = Array.from(document.querySelectorAll('#day-card-deck .exec-task-card'));
    const idx = allCards.indexOf(cardEl);
    if (idx >= 0) {
      goToDayCard(idx);
      return;
    }
  }
  // 在执行视图中间操作区直接打开与【✅ 节点卡片打卡页面】1:1 一致的专属打卡页面
  openExecCardPopupView(pavilionId, cardEl);
}

function enterSecondaryWorkspace(pavilionId, subView) {
  currentWsPavilion = pavilionId || 'study';
  const meta = PAVILION_META[currentWsPavilion] || { name: '项目工作台', icon: '📊', specializedTitle: '项目总览', hasGantt: true };
  
  if (meta.recordOnly || meta.noPlanning || !meta.hasGantt) {
    currentWsSubView = 'specialized';
  } else {
    currentWsSubView = 'gantt';
  }

  switchMainSection('ws');
  renderWorkspaceContent();
}

function switchSecondarySubView(subView) {
  const meta = PAVILION_META[currentWsPavilion] || {};
  if ((meta.recordOnly || meta.noPlanning) && subView === 'gantt') {
    showIslandToast('ℹ️ 该模块遵循规范为仅记录功能，不设规划与甘特视图');
    return;
  }
  currentWsSubView = subView;
  renderWorkspaceContent();
}

function exitSecondaryWorkspace() {
  const specContainer = document.getElementById('ws-specialized-container');
  if (specContainer) {
    specContainer.classList.remove('is-treasury-theme');
    specContainer.classList.remove('is-plaza-theme');
    specContainer.classList.remove('is-tree-theme');
    specContainer.classList.remove('is-note-theme');
    specContainer.classList.remove('is-achieve-theme');
  }
  if (document.body.classList.contains('has-exec-fullscreen') && typeof closeExecCardPopupView === 'function') {
    closeExecCardPopupView();
  }
  switchMainSection('island');
  if (typeof currentGlobalView !== 'undefined' && typeof switchHomeGlobalView === 'function') {
    switchHomeGlobalView(currentGlobalView || 'exec');
  }
}


// =====================================================================
// 📈 模块专属多维度统计分析与成长画像大盘数据与渲染引擎
// =====================================================================
// 模块专属多维度统计分析大盘生成引擎
function renderWorkspaceContent() {
  if (typeof applyPavilionWallpaper === 'function') setTimeout(applyPavilionWallpaper, 0);
  const meta = PAVILION_META[currentWsPavilion] || { name: '工作台', icon: '🏫', specializedTitle: '专属空间', hasGantt: true };

  // 1. 更新顶部面包屑
  const breadcrumbPavilionName = document.getElementById('ws-crumb-pavilion-name');
  const breadcrumbLeaf = document.getElementById('ws-crumb-view-leaf');
  if (breadcrumbPavilionName) {
    breadcrumbPavilionName.innerText = (meta.icon || '🏫') + ' ' + (meta.name || '工作台');
  }
  if (breadcrumbLeaf) {
    if (currentWsSubView === 'exec') {
      breadcrumbLeaf.innerText = '⚡ 专属执行中心模式';
    } else if (currentWsSubView === 'gantt') {
      breadcrumbLeaf.innerText = '📊 项目甘特总览';
    } else {
      breadcrumbLeaf.innerText = '🏛️ ' + meta.specializedTitle;
    }
  }

  // 2. 更新顶栏状态胶囊 (藏金屋、每日随记、成就馆与个人行为规范二级页面遵循极简沉浸规范：彻底去除右上角“进行中: ...”胶囊显示)
  const activeCountEl = document.getElementById('ws-top-active-count');
  const statPillBox = document.getElementById('ws-top-stat-pill-box') || (activeCountEl ? activeCountEl.closest('.ws-top-stat-pill') : null);

  if (currentWsPavilion === 'treasury' || currentWsPavilion === 'note' || currentWsPavilion === 'achieve' || currentWsPavilion === 'tree') {
    if (statPillBox) {
      statPillBox.classList.add('is-hidden');
      statPillBox.style.setProperty('display', 'none', 'important');
    }
  } else {
    if (statPillBox) {
      statPillBox.classList.remove('is-hidden');
      statPillBox.style.setProperty('display', 'inline-flex', 'important');
    }
    if (activeCountEl) {
      if (currentWsPavilion === 'tree') {
        activeCountEl.innerText = '纯查阅规范';
        activeCountEl.className = 'stat-pill-val';
        activeCountEl.style.color = '#78350f';
      } else if (meta.recordOnly) {
        activeCountEl.innerText = '纯记录功能';
        activeCountEl.className = 'stat-pill-val';
        activeCountEl.style.color = '#78350f';
      } else if (meta.noPlanning) {
        activeCountEl.innerText = '执行与记录';
        activeCountEl.className = 'stat-pill-val';
        activeCountEl.style.color = '#0284c7';
      } else if (currentWsSubView === 'exec') {
        activeCountEl.innerText = '⚡ 专注执行交付中';
        activeCountEl.className = 'stat-pill-val orange';
      } else if (currentWsSubView === 'gantt') {
        activeCountEl.innerText = '项目甘特总览';
        activeCountEl.className = 'stat-pill-val gold';
      } else {
        activeCountEl.innerText = '场馆专属空间';
        activeCountEl.className = 'stat-pill-val gold';
      }
    }
  }

  // 3. 更新顶栏中心主操作按钮 (根据场馆属性与视图自动适配；藏金屋上方去除空白按钮与分割线，仅保留返回海岛按钮)
  const actionBtn = document.getElementById('ws-top-action-btn');
  const todayBtn = document.getElementById('ws-top-today-btn');
  const actionSep = document.getElementById('ws-top-action-sep') || document.querySelector('.ws-center-zone .a-my-island-graph-tool-separator');

  // 控制【定位今日】按键：仅当存在甘特图且当前为甘特视图时展示，其余无甘特页面彻底隐藏
  if (todayBtn) {
    if (meta.hasGantt && currentWsSubView === 'gantt') {
      todayBtn.classList.remove('is-hidden');
      todayBtn.style.setProperty('display', 'grid', 'important');
    } else {
      todayBtn.classList.add('is-hidden');
      todayBtn.style.setProperty('display', 'none', 'important');
    }
  }

  if (currentWsPavilion === 'treasury') {
    // 藏金屋铁律：无规划甘特，纯独立零用金收支台账，顶栏绝不留任何主按钮或空白按钮，仅保留返回海岛按钮
    if (actionBtn) {
      actionBtn.classList.add('is-hidden');
      actionBtn.style.setProperty('display', 'none', 'important');
      actionBtn.innerHTML = '';
      actionBtn.onclick = null;
      actionBtn.title = '';
    }
    if (actionSep) {
      actionSep.classList.add('is-hidden');
      actionSep.style.setProperty('display', 'none', 'important');
    }
  } else if (meta.recordOnly) {
    if (actionBtn) {
      if (currentWsPavilion === 'tree') {
        actionBtn.classList.remove('is-hidden');
        actionBtn.style.setProperty('display', 'grid', 'important');
        if (actionSep) {
          if (meta.hasGantt && currentWsSubView === 'gantt') {
            actionSep.classList.remove('is-hidden');
            actionSep.style.setProperty('display', 'inline-block', 'important');
          } else {
            actionSep.classList.add('is-hidden');
            actionSep.style.setProperty('display', 'none', 'important');
          }
        }
        actionBtn.onclick = function() { showIslandToast('📜 个人行为规范为纯查阅法典，用于温习已确定的行为戒律'); };
        actionBtn.title = '查阅已确定的行为规范法典';
        actionBtn.innerHTML = '<span class="a-my-island-graph-tool-icon">📜</span><span class="a-my-island-graph-tool-label">查阅规范</span>';
      } else if (currentWsPavilion === 'achieve') {
        actionBtn.classList.remove('is-hidden');
        actionBtn.style.setProperty('display', 'grid', 'important');
        if (actionSep) {
          actionSep.classList.remove('is-hidden');
          actionSep.style.setProperty('display', 'inline-block', 'important');
        }
        actionBtn.onclick = function() { openRegisterAccidentalAchievementModal(); };
        actionBtn.title = '记录生活学习中的偶然成就与闪光时刻';
        actionBtn.innerHTML = '<span class="a-my-island-graph-tool-icon">✨</span><span class="a-my-island-graph-tool-label">偶然成就</span>';
      } else {
        actionBtn.classList.add('is-hidden');
        actionBtn.style.setProperty('display', 'none', 'important');
        if (actionSep) {
          actionSep.classList.add('is-hidden');
          actionSep.style.setProperty('display', 'none', 'important');
        }
      }
    }
  } else if (meta.noPlanning) {
    if (currentWsPavilion === 'note') {
      if (actionBtn) {
        actionBtn.classList.remove('is-hidden');
        actionBtn.style.setProperty('display', 'grid', 'important');
        if (actionSep) {
          actionSep.classList.remove('is-hidden');
          actionSep.style.setProperty('display', 'inline-block', 'important');
        }
        actionBtn.onclick = function() { scrollToNoteSection('note-journal-editor-card'); };
        actionBtn.title = '快速书写今日心流随笔与上传物证';
        actionBtn.innerHTML = '<span class="a-my-island-graph-tool-icon">✍️</span><span class="a-my-island-graph-tool-label">书写随笔</span>';
      }
    } else {
      if (actionBtn) {
        actionBtn.classList.add('is-hidden');
        actionBtn.style.setProperty('display', 'none', 'important');
      }
      if (actionSep) {
        actionSep.classList.add('is-hidden');
        actionSep.style.setProperty('display', 'none', 'important');
      }
    }
  } else {
    if (actionBtn) {
      actionBtn.classList.remove('is-hidden');
      actionBtn.style.setProperty('display', 'grid', 'important');
      if (actionSep) {
        actionSep.classList.remove('is-hidden');
        actionSep.style.setProperty('display', 'inline-block', 'important');
      }
      if (currentWsSubView === 'gantt') {
        actionBtn.onclick = openAddProjectModal;
        actionBtn.title = '新增成长规划项目并排入小方格甘特图';
        actionBtn.innerHTML = '<span class="a-my-island-graph-tool-icon">➕</span><span class="a-my-island-graph-tool-label">新增项目</span>';
      } else {
        if (currentWsPavilion === 'cultivation') {
          actionBtn.onclick = function() { openClassicLookup(1); };
          actionBtn.title = '调阅经典问道书单与修身日课';
          actionBtn.innerHTML = '<span class="a-my-island-graph-tool-icon">📖</span><span class="a-my-island-graph-tool-label">古籍问道</span>';
        } else {
          actionBtn.onclick = openAddProjectModal;
          actionBtn.title = '新增规划项目';
          actionBtn.innerHTML = '<span class="a-my-island-graph-tool-icon">➕</span><span class="a-my-island-graph-tool-label">新增项目</span>';
        }
      }
    }
  }

  // 4. 面包屑行右侧动态注入【甘特规划】与【统计分析大盘】双态切换胶囊
  const subrowEl = document.getElementById('ws-breadcrumb-subrow');
  if (subrowEl) {
    let toggleGroup = document.getElementById('ws-subview-toggle-group');
    if (!toggleGroup) {
      toggleGroup = document.createElement('div');
      toggleGroup.id = 'ws-subview-toggle-group';
      toggleGroup.className = 'subview-toggle-group';
      subrowEl.appendChild(toggleGroup);
    }
    const hasGantt = !!meta.hasGantt;
    let pillsHtml = '';
    if (hasGantt) {
      pillsHtml += '<button type="button" class="subview-toggle-pill' + (currentWsSubView === 'gantt' ? ' active' : '') + '" onclick="switchSecondarySubView(&apos;gantt&apos;)">📊 甘特规划</button>';
    }
    
    if (meta.specializedTitle && !hasGantt) {
      pillsHtml += '<button type="button" class="subview-toggle-pill' + (currentWsSubView === 'specialized' ? ' active' : '') + '" onclick="switchSecondarySubView(&apos;specialized&apos;)">🏛️ 专属空间</button>';
    }
    toggleGroup.innerHTML = pillsHtml;
  }

  // 5. 视图容器切换与内容渲染 (藏金屋二级页面补充专属场景背景壁纸)
  const specContainer = document.getElementById('ws-specialized-container');
  const ganttContainer = document.getElementById('ws-gantt-main-container');

  if (specContainer) {
    specContainer.classList.toggle('is-treasury-theme', currentWsPavilion === 'treasury');
    const isPlazaTheme = (currentWsPavilion === 'tree' || currentWsPavilion === 'note' || currentWsPavilion === 'achieve');
    specContainer.classList.toggle('is-plaza-theme', isPlazaTheme);
    specContainer.classList.toggle('is-tree-theme', currentWsPavilion === 'tree');
    specContainer.classList.toggle('is-note-theme', currentWsPavilion === 'note');
    specContainer.classList.toggle('is-achieve-theme', currentWsPavilion === 'achieve');
  }

  // 规划型场馆统一收敛至甘特图二级视图（下钻三级自由脑图），消除孤立未实现的修身专属视图调用报错
  if (meta.hasGantt && currentWsSubView !== 'gantt') {
    currentWsSubView = 'gantt';
  }

  if (currentWsSubView === 'gantt') {
    if (specContainer) specContainer.style.display = 'none';
    if (ganttContainer) ganttContainer.style.display = 'flex';
    if (meta.cat) filterGanttCategory(meta.cat);
    renderGanttChart();

  } else {
    if (ganttContainer) ganttContainer.style.display = 'none';
    if (specContainer) {
      specContainer.style.display = 'flex';
      let contentHtml = '';
      if (currentWsPavilion === 'treasury') {
        contentHtml = renderTreasurySpecializedWorkspace();
      } else if (currentWsPavilion === 'tree') {
        contentHtml = renderTreeSpecializedWorkspace();
      } else if (currentWsPavilion === 'achieve') {
        contentHtml = renderAchieveSpecializedWorkspace();
      } else if (currentWsPavilion === 'note') {
        contentHtml = renderNoteSpecializedWorkspace();
      } else if (currentWsPavilion === 'study') {
        contentHtml = renderStudySpecializedWorkspace();
      } else if (currentWsPavilion === 'dojo') {
        contentHtml = renderDojoSpecializedWorkspace();
      } else if (currentWsPavilion === 'cognition') {
        contentHtml = renderCognitionSpecializedWorkspace();
      } else {
        contentHtml = renderStudySpecializedWorkspace();
      }
      specContainer.innerHTML = contentHtml;
    }
  }
}

function switchGlobalViewMode(mode) {
  switchHomeGlobalView(mode);
}

function updatePavilionBadges(mode) {
  const badges = {
    exec: {
      study: '待复盘 3 题',
      dojo: '羽球集训中',
      tree: '待登记考验',
      cult: '今日格物打卡',
      cog: '亲子思辨日',
      treasury: '日常收支记账',
      note: '客观流水已汇',
      achieve: '3D展柜检视'
    },
    plan: {
      study: '艾宾浩斯派生',
      dojo: '备赛量化KPI',
      tree: '【仅记录功能】',
      cult: '古籍修身书单',
      cog: '五维模型周期',
      treasury: '【仅收支记账】',
      note: '【仅执行记录】',
      achieve: '【仅记录功能】'
    }
  };

  const colors = {
    exec: { bg: '#ffedd5', color: '#c2410c' },
    plan: { bg: '#ccfbf1', color: '#0f766e' }
  };

  for (let key in badges[mode]) {
    const el = document.getElementById('badge-' + key);
    if (el) {
      el.innerText = badges[mode][key];
      el.style.backgroundColor = colors[mode].bg;
      el.style.color = colors[mode].color;
    }
  }
}

// =========================================================================
// 家长置顶悬赏契约全生命周期控制器 (发布 ➔ 孩子揭榜应战 ➔ 上传物证 ➔ 验收兑现入成就馆与随记)
// =========================================================================
window.BOUNTY_STATE = null;

function renderBountyModalAndBillboard() {
  const b = window.BOUNTY_STATE;
  const billboard = document.getElementById('home-bounty-billboard');
  const hTitle = document.getElementById('home-bounty-title');
  const hTimer = document.getElementById('home-bounty-timer');
  const hReward = document.getElementById('home-bounty-reward');
  const hCta = document.getElementById('home-bounty-cta');
  const hAuthor = document.getElementById('home-bounty-author');

  if (!b) {
    if (billboard) billboard.style.display = 'none';
    if (hTitle) hTitle.textContent = '暂无进行中的悬赏契约';
    if (hTimer) hTimer.textContent = '⏱️ 待张榜';
    if (hReward) hReward.textContent = '🎁 点击发布亲子心愿悬赏';
    if (hAuthor) hAuthor.textContent = '👨‍👩‍👦 亲子共建';
    if (hCta) {
      hCta.textContent = '去发布 ›';
      hCta.style.background = '#ffedd5';
      hCta.style.color = '#c2410c';
    }
    const statusBadge = document.getElementById('bounty-modal-status-badge');
    const contractNo = document.getElementById('bounty-modal-contract-no');
    const mTitle = document.getElementById('bounty-modal-title');
    const mMeta = document.getElementById('bounty-modal-meta');
    const mReward = document.getElementById('bounty-modal-reward');
    const mCriteria = document.getElementById('bounty-modal-criteria');
    const s2Status = document.getElementById('bounty-stage2-status');
    const s2Desc = document.getElementById('bounty-stage2-desc');
    const s3Status = document.getElementById('bounty-stage3-status');
    const stamp = document.getElementById('bounty-parent-stamp');
    const childSign = document.getElementById('bounty-child-sign-pill');
    const parentSign = document.getElementById('bounty-parent-sign-pill');
    const acceptBtn1 = document.getElementById('bounty-action-accept-btn');
    const acceptBtn2 = document.getElementById('bounty-footer-accept-btn');
    const redeemBtn = document.getElementById('bounty-action-redeem-btn');
    const formBox = document.getElementById('bounty-publish-form-box');

    if (statusBadge) { statusBadge.textContent = '⚪ 暂无生效悬赏'; statusBadge.style.background = '#64748b'; }
    if (contractNo) contractNo.textContent = '契约编号：暂未生成 · 请点击【➕ 家长发布新悬赏】立约张榜';
    if (mTitle) mTitle.textContent = '《暂无进行中的悬赏挑战》';
    if (mMeta) mMeta.textContent = '🎯 关联规划：未指定 | 👨‍👩‍👦 期待家长发起立约';
    if (mReward) mReward.textContent = '🎁 达成心愿体验奖励';
    if (mCriteria) mCriteria.innerHTML = '<strong>📋 契约验收标准：</strong><br>请点击右上角【➕ 家长发布新悬赏】填写挑战项目、心愿奖励与验收标准。';
    if (s2Status) { s2Status.textContent = '⚪ 待张榜'; s2Status.style.color = '#64748b'; }
    if (s2Desc) s2Desc.textContent = '立约张榜后，孩子可点击【揭榜应战】同步生成待办卡片。';
    if (s3Status) { s3Status.textContent = '⚪ 未开始'; s3Status.style.color = '#64748b'; }
    if (stamp) { stamp.innerHTML = '⚪ 暂未签署立约'; stamp.style.background = '#f8fafc'; stamp.style.color = '#64748b'; stamp.style.borderColor = '#cbd5e1'; }
    if (childSign) { childSign.textContent = '⌛ 待签署'; childSign.style.background = '#f1f5f9'; childSign.style.color = '#64748b'; }
    if (parentSign) { parentSign.textContent = '⌛ 待发起'; parentSign.style.background = '#f1f5f9'; parentSign.style.color = '#64748b'; }
    if (acceptBtn1) acceptBtn1.style.display = 'none';
    if (acceptBtn2) acceptBtn2.style.display = 'none';
    if (redeemBtn) redeemBtn.style.display = 'none';
    if (formBox) formBox.style.display = 'flex';
    return;
  }

  // 1. 同步顶栏告示牌 (有悬赏时才在顶栏显示)
  if (billboard) billboard.style.display = 'flex';
  if (hTitle) hTitle.textContent = b.title;
  if (hTimer) hTimer.textContent = '⏱️ ' + b.days + '天期';
  if (hReward) hReward.textContent = b.reward;
  if (hCta) {
    if (b.status === 'published') {
      hCta.textContent = '待揭榜应战 ›';
      hCta.style.background = '#ffedd5';
      hCta.style.color = '#c2410c';
    } else if (b.status === 'accepted') {
      hCta.textContent = '已揭榜 · 去交付 ›';
      hCta.style.background = '#fef3c7';
      hCta.style.color = '#b45309';
    } else {
      hCta.textContent = '✓ 已核验兑现';
      hCta.style.background = '#dcfce7';
      hCta.style.color = '#15803d';
    }
  }

  // 2. 同步弹窗内容
  const statusBadge = document.getElementById('bounty-modal-status-badge');
  const contractNo = document.getElementById('bounty-modal-contract-no');
  const mTitle = document.getElementById('bounty-modal-title');
  const mMeta = document.getElementById('bounty-modal-meta');
  const mReward = document.getElementById('bounty-modal-reward');
  const mCriteria = document.getElementById('bounty-modal-criteria');
  const s2Status = document.getElementById('bounty-stage2-status');
  const s2Desc = document.getElementById('bounty-stage2-desc');
  const s3Status = document.getElementById('bounty-stage3-status');
  const stamp = document.getElementById('bounty-parent-stamp');
  const childSign = document.getElementById('bounty-child-sign-pill');
  const parentSign = document.getElementById('bounty-parent-sign-pill');
  const acceptBtn1 = document.getElementById('bounty-action-accept-btn');
  const acceptBtn2 = document.getElementById('bounty-footer-accept-btn');
  const redeemBtn = document.getElementById('bounty-action-redeem-btn');
  const vaultPath = document.getElementById('bounty-vault-path');

  if (contractNo) contractNo.textContent = '契约编号：' + b.id + ' · 亲子共同协商荣誉契约 · 非金钱精神/体验心愿激励';
  if (mTitle) mTitle.textContent = '《' + b.title + '》';
  if (mMeta) mMeta.textContent = '🎯 关联规划：' + b.pavilionLabel + ' | 👨‍👩‍👦 家长发起悬赏';
  if (mReward) mReward.textContent = b.reward;
  if (mCriteria) {
    mCriteria.innerHTML = '<strong>📋 契约验收标准：</strong><br>' + String(b.criteria).replace(/\n/g, '<br>');
  }
  if (vaultPath) vaultPath.textContent = b.vaultFile;

  if (b.status === 'published') {
    if (statusBadge) { statusBadge.textContent = '📣 新悬赏待揭榜 · ' + b.days + '天期'; statusBadge.style.background = '#2563eb'; }
    if (s2Status) { s2Status.textContent = '⏳ 待孩子揭榜'; s2Status.style.color = '#2563eb'; }
    if (s2Desc) s2Desc.textContent = '家长已张榜发布新挑战！点击下方【揭榜应战】即可自动生成今日待办实训卡。';
    if (s3Status) { s3Status.textContent = '⚪ 待应战'; }
    if (stamp) { stamp.innerHTML = '⚪ 等待孩子揭榜应战'; stamp.style.background = '#f8fafc'; stamp.style.color = '#64748b'; stamp.style.borderColor = '#cbd5e1'; }
    if (childSign) { childSign.textContent = '⌛ 待孩子揭榜署名'; childSign.style.background = '#f1f5f9'; childSign.style.color = '#475569'; }
    if (parentSign) { parentSign.textContent = '⌛ 家长已立约张榜'; parentSign.style.background = '#fef3c7'; parentSign.style.color = '#b45309'; }
    if (acceptBtn1) acceptBtn1.style.display = 'inline-flex';
    if (acceptBtn2) acceptBtn2.style.display = 'inline-flex';
    if (redeemBtn) redeemBtn.style.display = 'none';
  } else if (b.status === 'accepted') {
    if (statusBadge) { statusBadge.textContent = '⚡ 已揭榜攻坚中 · ' + b.days + '天内有效'; statusBadge.style.background = '#ea580c'; }
    if (s2Status) { s2Status.textContent = '⚡ 正在攻坚'; s2Status.style.color = '#ea580c'; }
    if (s2Desc) s2Desc.textContent = b.evidenceUploaded ? ('已上传挑战物证：《' + b.evidenceName + '》，可请家长核验兑现。') : '已同步至今日待办轮播，完成后请上传照片/视频物证。';
    if (s3Status) { s3Status.textContent = '🟡 待核验'; }
    if (stamp) { stamp.innerHTML = '🟡 待家长核准盖戳'; stamp.style.background = '#fefce8'; stamp.style.color = '#92400e'; stamp.style.borderColor = '#f59e0b'; }
    if (childSign) { childSign.textContent = '✓ 孩子已揭榜署名 (齐天)'; childSign.style.background = '#dcfce7'; childSign.style.color = '#059669'; }
    if (parentSign) { parentSign.textContent = '⌛ 家长待核准'; parentSign.style.background = '#fef3c7'; parentSign.style.color = '#b45309'; }
    if (acceptBtn1) acceptBtn1.style.display = 'none';
    if (acceptBtn2) acceptBtn2.style.display = 'none';
    if (redeemBtn) { redeemBtn.style.display = 'inline-flex'; redeemBtn.disabled = false; redeemBtn.textContent = '✓ 家长核验通过 · 兑现心愿并入驻成就馆'; }
  } else {
    if (statusBadge) { statusBadge.textContent = '🏆 已圆满履约兑现'; statusBadge.style.background = '#059669'; }
    if (s2Status) { s2Status.textContent = '✓ 物证已交付'; s2Status.style.color = '#059669'; }
    if (s3Status) { s3Status.textContent = '🟢 已兑现'; s3Status.style.color = '#059669'; }
    if (stamp) {
      stamp.innerHTML = '🟢 家长已核准盖戳<br><span style="font-size:9.5px; font-weight:normal; color:#065f46;">验收通过 · 心愿已兑现并载入成就馆</span>';
      stamp.style.borderColor = '#10b981';
      stamp.style.color = '#065f46';
      stamp.style.background = '#d1fae5';
    }
    if (childSign) { childSign.textContent = '✓ 孩子已履约交付 (齐天)'; childSign.style.background = '#dcfce7'; childSign.style.color = '#059669'; }
    if (parentSign) { parentSign.textContent = '✓ 家长已签章兑现'; parentSign.style.background = '#dcfce7'; parentSign.style.color = '#059669'; }
    if (acceptBtn1) acceptBtn1.style.display = 'none';
    if (acceptBtn2) acceptBtn2.style.display = 'none';
    if (redeemBtn) { redeemBtn.style.display = 'inline-flex'; redeemBtn.textContent = '🏆 已兑现并入驻成就馆'; }
  }
}

function openBountyModal() {
  renderBountyModalAndBillboard();
  const modal = document.getElementById('bounty-modal-backdrop');
  if (modal) {
    modal.classList.add('open');
    modal.style.display = 'flex';
  } else {
    showIslandToast('⚠️ 悬赏契约弹窗未加载');
  }
}

function closeBountyModal() {
  const modal = document.getElementById('bounty-modal-backdrop');
  if (modal) {
    modal.classList.remove('open');
    modal.style.display = 'none';
  }
}

function handleBountyBackdropClick(e) {
  if (e.target && e.target.id === 'bounty-modal-backdrop') {
    closeBountyModal();
  }
}

function toggleBountyPublishForm() {
  const box = document.getElementById('bounty-publish-form-box');
  if (!box) return;
  box.style.display = (box.style.display === 'none' || !box.style.display) ? 'flex' : 'none';
}

function submitNewParentBounty() {
  const titleEl = document.getElementById('bounty-new-title');
  const pavEl = document.getElementById('bounty-new-pavilion');
  const rewardEl = document.getElementById('bounty-new-reward');
  const daysEl = document.getElementById('bounty-new-days');
  const critEl = document.getElementById('bounty-new-criteria');

  const title = titleEl ? titleEl.value.trim() : '';
  const reward = rewardEl ? rewardEl.value.trim() : '';
  if (!title || !reward) {
    showIslandToast('⚠️ 请填写悬赏挑战任务名称与心愿体验奖励！');
    if (titleEl && !title) titleEl.focus();
    return;
  }
  const pavLabel = pavEl ? pavEl.value : '🏫 校史馆 · 学业攻坚';
  const pavId = pavLabel.includes('武道') ? 'dojo' : (pavLabel.includes('修身') ? 'cultivation' : (pavLabel.includes('思辨') ? 'cognition' : 'study'));
  const days = Math.max(1, parseInt(daysEl ? daysEl.value : '7', 10) || 7);
  const criteria = (critEl && critEl.value.trim()) ? critEl.value.trim() : '按期完成挑战并上传真实过程照片/视频物证，经亲子共同核验盖戳兑现。';

  window.BOUNTY_STATE = {
    id: 'BC-' + Date.now().toString().slice(-6),
    title: title,
    pavilionLabel: pavLabel,
    pavilionId: pavId,
    reward: '🎁 ' + reward,
    days: days,
    criteria: criteria,
    status: 'published',
    evidenceUploaded: false,
    evidenceName: '',
    parentComment: '言出必行，期待你揭榜挑战成功！',
    vaultFile: '09_Bounties_悬赏公告/bounty-' + Date.now() + '.md'
  };

  if (titleEl) titleEl.value = '';
  if (rewardEl) rewardEl.value = '';
  if (critEl) critEl.value = '';
  toggleBountyPublishForm();
  renderBountyModalAndBillboard();
  appendDailyAutoLog('📜 家长悬赏张榜：发布新荣誉挑战《' + title + '》（激励：' + reward + '）');
  showIslandToast('🚀 新悬赏令《' + title + '》已张榜至顶栏告示牌！请孩子点击【揭榜应战】！');
}

function acceptParentBounty() {
  const b = window.BOUNTY_STATE;
  if (!b) return;
  b.status = 'accepted';
  renderBountyModalAndBillboard();

  // 自动向首页执行视图今日待办卡组派生一张悬赏实训卡
  if (typeof syncNewNodeToHomeExecution === 'function') {
    syncNewNodeToHomeExecution({
      id: 'bounty-' + b.id,
      title: '【悬赏挑战】' + b.title,
      desc: b.criteria,
      pavilionId: b.pavilionId || 'study',
      duration: 25
    });
  }
  appendDailyAutoLog('⚔️ 孩子揭榜应战：正式签署《' + b.title + '》荣誉契约，已同步至今日待办');
  showIslandToast('⚔️ 揭榜成功！已自动将《' + b.title + '》派发至首页今日待办轮播！');
}

function uploadBountyEvidence() {
  const b = window.BOUNTY_STATE;
  if (!b) return;
  b.evidenceUploaded = true;
  b.evidenceName = b.title + '_挑战实拍物证.jpg';
  renderBountyModalAndBillboard();
  showIslandToast('📸 已上传悬赏挑战真实物证：《' + b.evidenceName + '》！');
}

function completeBountyDemo() {
  const b = window.BOUNTY_STATE;
  if (!b) return;
  if (b.status === 'published') {
    showIslandToast('⚠️ 请先由孩子点击【揭榜应战】后再执行验收兑现！');
    return;
  }
  const commentInput = document.getElementById('bounty-parent-comment-input');
  if (commentInput && commentInput.value.trim()) {
    b.parentComment = commentInput.value.trim();
  }
  b.status = 'redeemed';
  renderBountyModalAndBillboard();

  const now = new Date();
  const dateStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');

  // 🏆【双向闭环 1】动态将当前悬赏成果写入成就馆养成类成就
  if (window.ACHIEVEMENT_STATE && window.ACHIEVEMENT_STATE.cultivationItems) {
    const bountyAchId = 'ACH-BOUNTY-' + b.id;
    if (!window.ACHIEVEMENT_STATE.cultivationItems.some(x => x.id === bountyAchId)) {
      window.ACHIEVEMENT_STATE.cultivationItems.unshift({
        id: bountyAchId,
        date: dateStr,
        title: '置顶悬赏令 · 《' + b.title + '》履约勋章',
        icon: '🥇',
        projectType: b.pavilionId || 'study',
        projectTypeLabel: b.pavilionLabel || '校史馆 · 学业攻坚',
        projectName: '家庭荣誉悬赏契约 · ' + b.title,
        metrics: [
          { name: '契约挑战期限', target: b.days + '天内达成', actual: '如期满贯履约' },
          { name: '心愿激励兑现', target: b.reward, actual: '家长签章已兑付' }
        ],
        proof: '📄 物证《' + (b.evidenceName || '挑战手稿与实拍存证') + '》｜家长寄语：' + b.parentComment,
        issuer: '父母共同核验盖戳',
        desc: '亲子悬赏荣誉契约圆满达成！家长寄语：“' + b.parentComment + '”'
      });
      if (typeof updateAchieveWorkspaceLiveDOM === 'function') {
        updateAchieveWorkspaceLiveDOM();
      }
    }
  }

  // 📝【双向闭环 2】自动同步至每日随记客观事实时序流水
  appendDailyAutoLog('🏆 悬赏契约兑现：圆满达成《' + b.title + '》，兑现心愿【' + b.reward + '】并载入成就馆');

  showIslandToast('🎉 家长核验盖戳通过！心愿【' + b.reward + '】已兑现并同步铭刻至成就馆与每日随记！');
  setTimeout(() => {
    closeBountyModal();
  }, 1500);
}

// 番茄钟控制
let pomoTimer = null;
let pomoSeconds = 25 * 60;
let pomoRunning = false;

function initPomodoroDisplay() {
  pomoSeconds = 25 * 60;
  pomoRunning = false;
  if (pomoTimer) clearInterval(pomoTimer);
  updatePomoText();
}

function togglePomodoroTimer() {
  const btn = document.getElementById('pomo-btn');
  if (!pomoRunning) {
    pomoRunning = true;
    if (btn) btn.innerText = '⏸ 暂停专注';
    pomoTimer = setInterval(() => {
      pomoSeconds--;
      if (pomoSeconds <= 0) {
        clearInterval(pomoTimer);
        pomoRunning = false;
        showIslandToast('🔔 25分钟深度专注已完成！获得 +1 专注力结晶！');
        initPomodoroDisplay();
      }
      updatePomoText();
    }, 1000);
  } else {
    pomoRunning = false;
    clearInterval(pomoTimer);
    if (btn) btn.innerText = '▶ 继续计时';
  }
}

function resetPomodoroTimer() {
  initPomodoroDisplay();
  const btn = document.getElementById('pomo-btn');
  if (btn) btn.innerText = '▶ 开始计时';
}

function updatePomoText() {
  const display = document.getElementById('pomo-display');
  if (!display) return;
  const m = Math.floor(pomoSeconds / 60).toString().padStart(2, '0');
  const s = (pomoSeconds % 60).toString().padStart(2, '0');
  display.innerText = m + ':' + s;
}

// 鹰眼导航地图折叠
function toggleMinimap() {
  const body = document.getElementById('minimap-body');
  const icon = document.getElementById('minimap-toggle-icon');
  if (!body) return;
  const isHidden = body.style.display === 'none';
  body.style.display = isHidden ? 'block' : 'none';
  if (icon) icon.innerText = isHidden ? '−' : '+';
}

function toggleWsMinimap() {
  const body = document.getElementById('ws-minimap-body');
  const icon = document.getElementById('ws-minimap-icon');
  if (!body) return;
  const isHidden = body.style.display === 'none';
  body.style.display = isHidden ? 'block' : 'none';
  if (icon) icon.innerText = isHidden ? '−' : '+';
}

function filterGallery(category) {
  document.querySelectorAll('.gallery-filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });

  document.querySelectorAll('.design-frame-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// ==================== 节点卡片打卡页面交互控制器 (支持首页点击卡片打卡页 & 节点卡片打卡页面 Tab 1:1 共享交互) ====================
function getCheckinEl(id) {
  const execWs = document.getElementById('exec-task-workspace');
  if (execWs && execWs.style.display !== 'none') {
    const inExec = execWs.querySelector('#' + id);
    if (inExec) return inExec;
  }
  const gal = document.getElementById('gallery-stage-view');
  if (gal) {
    const inGal = gal.querySelector('#' + id);
    if (inGal) return inGal;
  }
  return document.getElementById(id);
}

function addCheckinPageGoalMetric() {
  const list = getCheckinEl('checkin-page-goal-metrics-list');
  if (!list) return;
  const row = document.createElement('div');
  row.className = 'goal-metric-row';
  row.style.cssText = 'display:grid; grid-template-columns:1fr 1fr 28px; align-items:center; gap:6px;';
  row.innerHTML =
    '<input type="text" class="add-module-text-input goal-metric-name" placeholder="输入指标名..." style="height:28px; font-size:11px; padding:2px 8px; font-weight:700; color:#1e3a8a;">' +
    '<input type="text" class="add-module-text-input goal-metric-val" placeholder="输入指标数据..." style="height:28px; font-size:11px; padding:2px 8px; font-weight:800; color:#15803d;">' +
    '<button type="button" onclick="removeGoalMetricModalRow(this)" style="height:28px; background:#fef2f2; color:#dc2626; border:1px solid #fecaca; border-radius:6px; cursor:pointer; font-weight:900;">✕</button>';
  list.appendChild(row);
  showIslandToast('➕ 已新增一行量化通关指标（指标名 + 指标数据）');
}

function switchCheckinPageGoalDeliverable(mode) {
  const mediaBox = getCheckinEl('checkin-page-goal-media-box');
  const textBox = getCheckinEl('checkin-page-goal-text-box');
  const iconEl = getCheckinEl('checkin-page-goal-media-icon');
  const labelEl = getCheckinEl('checkin-page-goal-media-label');
  const fileInput = getCheckinEl('checkin-page-goal-file-input');
  if (mode === 'text') {
    if (mediaBox) mediaBox.style.display = 'none';
    if (textBox) textBox.style.display = 'block';
  } else {
    if (mediaBox) mediaBox.style.display = 'flex';
    if (textBox) textBox.style.display = 'none';
    if (iconEl) iconEl.innerText = mode === 'video' ? '🎥' : '📷';
    if (labelEl) labelEl.innerText = mode === 'video' ? '点击录制或上传阶段目标交付物视频存证' : '点击拍照或上传阶段目标交付物照片存证';
    if (fileInput) fileInput.accept = mode === 'video' ? 'video/*' : 'image/*';
  }
}

function handleCheckinPageGoalFile(input) {
  if (!input || !input.files || !input.files[0]) return;
  const f = input.files[0];
  const labelEl = getCheckinEl('checkin-page-goal-media-label');
  if (labelEl) {
    labelEl.innerText = '✓ 已上传交付物：' + f.name;
    labelEl.style.color = '#15803d';
  }
  showIslandToast('📦 已成功载入目标交付物文件：' + f.name);
}

function handleCheckinPageGoalDeposit(btn) {
  const statusEl = getCheckinEl('checkin-page-goal-status');
  if (statusEl) {
    statusEl.innerText = '🏆 已沉淀至成就馆';
    statusEl.style.background = '#fef3c7';
    statusEl.style.color = '#b45309';
    statusEl.style.borderColor = '#f59e0b';
  }
  if (btn) {
    btn.innerText = '✓ 已沉淀到成就馆';
    btn.style.background = '#10b981';
    btn.style.borderColor = '#059669';
  }
  const now = new Date();
  const dateStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
  if (window.ACHIEVEMENT_STATE && Array.isArray(window.ACHIEVEMENT_STATE.cultivationItems)) {
    const existing = window.ACHIEVEMENT_STATE.cultivationItems.find(x => x.id === 'ACH-GOAL-CHECKIN-PAGE');
    if (!existing) {
      window.ACHIEVEMENT_STATE.cultivationItems.unshift({
        id: 'ACH-GOAL-CHECKIN-PAGE',
        date: dateStr,
        title: '口算达标与思维通关目标 · 阶段结业通关章',
        icon: '🎯',
        projectType: 'study',
        projectTypeLabel: '校史馆 · 学科学业攻坚',
        projectName: '小学数学口算达标与逆向思维训练',
        metrics: [
          { name: '单元口算正确率', target: '≥ 98%', actual: '100% 达成' },
          { name: '进退位心算提分', target: 'Delta +15 分', actual: '超额达标' }
        ],
        proof: '📷 目标交付物手稿照片已归档',
        issuer: '校史馆学科教研组 · 审验',
        desc: '通过口算正确率与心算通关指标考核，交付实训手稿存证，达成阶段突破。'
      });
      updateAchieveWorkspaceLiveDOM();
      if (typeof syncAchievementToDailyNote === 'function') {
        syncAchievementToDailyNote('校史馆 · 学科学业攻坚', '口算达标与思维通关目标 · 阶段结业通关章');
      }
    }
  }
  const deckStatus = document.getElementById('status-text-exec-card-goal');
  if (deckStatus) {
    deckStatus.className = 'task-status-pill completed';
    deckStatus.innerText = '🏆 已沉淀成就馆';
  }
  const tcardStatus = document.getElementById('status-text-tcard-1');
  if (tcardStatus) {
    tcardStatus.innerText = '🏆 已沉淀成就馆';
    tcardStatus.style.color = '#b45309';
  }
  showIslandToast('🏆 阶段目标成果已成功归档并沉淀到【成就馆】！');
}

function handleCheckinPageDrillMedia(input) {
  if (!input || !input.files || !input.files[0]) return;
  const f = input.files[0];
  const nameEl = getCheckinEl('checkin-page-drill-media-name');
  const prevEl = getCheckinEl('checkin-page-drill-media-preview');
  const isVideo = f.type && f.type.startsWith('video/');
  if (prevEl) prevEl.innerText = isVideo ? '🎬' : '🖼️';
  if (nameEl) {
    nameEl.innerText = '✓ 已上传' + (isVideo ? '实训视频' : '实训图片') + '：' + f.name;
    nameEl.style.color = '#15803d';
  }
  showIslandToast('🎬 已上传图片视频说明文件：' + f.name);
}

let checkinPageDrillSeconds = 20 * 60;
let checkinPageDrillTimerId = null;

function changeCheckinPageDrillDuration(mins) {
  const m = parseInt(mins, 10) || 20;
  if (checkinPageDrillTimerId) {
    clearInterval(checkinPageDrillTimerId);
    checkinPageDrillTimerId = null;
  }
  checkinPageDrillSeconds = m * 60;
  const digits = getCheckinEl('checkin-page-drill-timer-digits');
  if (digits) digits.innerText = (m < 10 ? '0' + m : m) + ':00';
  const footer = getCheckinEl('checkin-page-drill-footer-info');
  if (footer) footer.innerText = '预计专注：⏱️ ' + m + ' 分钟';
  const btn = getCheckinEl('btn-checkin-drill-timer');
  if (btn) btn.innerText = '▶️ 启动专注';
  showIslandToast('⏱️ 计划专注时长已设为 ' + m + ' 分钟');
}

function toggleCheckinPageDrillTimer() {
  const btn = getCheckinEl('btn-checkin-drill-timer');
  const digits = getCheckinEl('checkin-page-drill-timer-digits');
  if (checkinPageDrillTimerId) {
    clearInterval(checkinPageDrillTimerId);
    checkinPageDrillTimerId = null;
    if (btn) btn.innerText = '▶️ 继续专注';
    return;
  }
  if (btn) btn.innerText = '⏸️ 暂停专注';
  checkinPageDrillTimerId = setInterval(() => {
    const activeDigits = getCheckinEl('checkin-page-drill-timer-digits');
    const activeBtn = getCheckinEl('btn-checkin-drill-timer');
    if (checkinPageDrillSeconds > 0) {
      checkinPageDrillSeconds--;
      const m = Math.floor(checkinPageDrillSeconds / 60);
      const s = checkinPageDrillSeconds % 60;
      if (activeDigits) activeDigits.innerText = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
    } else {
      clearInterval(checkinPageDrillTimerId);
      checkinPageDrillTimerId = null;
      if (activeBtn) activeBtn.innerText = '✓ 专注完成';
      showIslandToast('🎉 专注倒计时圆满完成！');
    }
  }, 1000);
}

function resetCheckinPageDrillTimer() {
  const sel = getCheckinEl('checkin-page-drill-dur-select');
  changeCheckinPageDrillDuration(sel ? sel.value : 20);
}

function updateCheckinPageHabitProgress() {
  const list = getCheckinEl('checkin-page-habit-list');
  const prog = getCheckinEl('checkin-page-habit-progress');
  if (!list || !prog) return;
  const total = list.querySelectorAll('.habit-checklist-row').length;
  const checked = list.querySelectorAll('input[type="checkbox"]:checked').length;
  prog.innerText = '🛡️ 践行防守清单项 (分多项录入 · 已勾选 ' + checked + '/' + total + ' 项)';
}

function addCheckinPageHabitItem() {
  const list = getCheckinEl('checkin-page-habit-list');
  if (!list) return;
  const idx = list.querySelectorAll('.habit-checklist-row').length + 1;
  const row = document.createElement('div');
  row.className = 'habit-checklist-row';
  row.style.cssText = 'display:grid; grid-template-columns:20px 1fr 28px; align-items:center; gap:6px; background:#f0fdf4; padding:4px 8px; border-radius:6px; border:1px solid #bbf7d0;';
  row.innerHTML =
    '<input type="checkbox" checked onchange="updateCheckinPageHabitProgress()" style="accent-color:#059669; cursor:pointer;">' +
    '<input type="text" class="add-module-text-input habit-checklist-text" value="' + idx + '. 新增自律践行防守清单项" style="height:26px; font-size:11px; padding:2px 8px; background:#fff; color:#065f46; font-weight:700;">' +
    '<button type="button" onclick="removeCheckinPageHabitItem(this)" style="height:26px; background:#fef2f2; color:#dc2626; border:1px solid #fecaca; border-radius:6px; cursor:pointer; font-weight:900;">✕</button>';
  list.appendChild(row);
  updateCheckinPageHabitProgress();
  showIslandToast('➕ 已新增一项践行防守清单');
}

function removeCheckinPageHabitItem(btn) {
  const row = btn.closest('.habit-checklist-row');
  const list = row ? row.parentElement : getCheckinEl('checkin-page-habit-list');
  if (list && list.querySelectorAll('.habit-checklist-row').length <= 1) {
    showIslandToast('⚠️ 至少保留 1 项践行防守清单');
    return;
  }
  if (row) row.remove();
  updateCheckinPageHabitProgress();
}

function addCheckinPageReflectionItem() {
  const list = getCheckinEl('checkin-page-reflection-list');
  if (!list) return;
  const idx = list.querySelectorAll('.reflection-improvement-row').length + 1;
  const row = document.createElement('div');
  row.className = 'reflection-improvement-row';
  row.style.cssText = 'display:grid; grid-template-columns:20px 1fr 28px; align-items:center; gap:6px; background:#faf5ff; padding:4px 8px; border-radius:6px; border:1px solid #e9d5ff;';
  row.innerHTML =
    '<input type="checkbox" checked style="accent-color:#7c3aed; cursor:pointer;">' +
    '<input type="text" class="add-module-text-input reflection-improvement-text" value="' + idx + '. 新增靶向提升行动项" style="height:26px; font-size:11px; padding:2px 8px; background:#fff; color:#5b21b6; font-weight:700;">' +
    '<button type="button" onclick="removeCheckinPageReflectionItem(this)" style="height:26px; background:#fef2f2; color:#dc2626; border:1px solid #fecaca; border-radius:6px; cursor:pointer; font-weight:900;">✕</button>';
  list.appendChild(row);
  showIslandToast('➕ 已新增一项复盘提升清单项');
}

function removeCheckinPageReflectionItem(btn) {
  const row = btn.closest('.reflection-improvement-row');
  const list = row ? row.parentElement : getCheckinEl('checkin-page-reflection-list');
  if (list && list.querySelectorAll('.reflection-improvement-row').length <= 1) {
    showIslandToast('⚠️ 至少保留 1 项提升清单');
    return;
  }
  if (row) row.remove();
}

function addCheckinPageCustomField() {
  const list = getCheckinEl('checkin-page-custom-fields-list');
  if (!list) return;
  const row = document.createElement('div');
  row.className = 'picker-custom-field-row';
  row.style.cssText = 'display:grid; grid-template-columns:100px 1fr 28px; align-items:center; gap:6px;';
  row.innerHTML =
    '<input type="text" class="add-module-text-input picker-field-key" value="自定义字段" style="height:28px; font-size:11px; font-weight:800; color:#166534; padding:2px 8px; border:1px solid #86efac;">' +
    '<input type="text" class="add-module-text-input picker-field-val" placeholder="输入字段内容..." style="height:28px; font-size:11px; padding:2px 8px; border:1px solid #86efac;">' +
    '<button type="button" onclick="removePickerCustomDynamicField(this)" style="height:28px; background:#fef2f2; color:#dc2626; border:1px solid #fecaca; border-radius:6px; cursor:pointer; font-weight:900;">✕</button>';
  list.appendChild(row);
  showIslandToast('➕ 已新增自定义字段');
}

function completeCheckinPageCard(type, btn, sealText) {
  const statusEl = getCheckinEl('checkin-page-' + type + '-status');
  if (statusEl) {
    statusEl.innerText = '✓ 已' + sealText + '打卡';
    statusEl.style.background = '#dcfce7';
    statusEl.style.color = '#15803d';
    statusEl.style.borderColor = '#4ade80';
  }
  if (btn) {
    btn.innerText = '✓ 已盖【' + sealText + '】印章';
    btn.style.background = '#10b981';
    btn.style.borderColor = '#059669';
  }
  // 同步更新首页执行视图卡片与通用三级节点页面卡片的状态
  const deckStatus = document.getElementById('status-text-exec-card-' + type);
  if (deckStatus) {
    deckStatus.className = 'task-status-pill completed';
    deckStatus.innerText = '🟢 已' + sealText;
    deckStatus.style.color = '#059669';
  }
  if (window.currentActiveExecDeckCardId) {
    const activeDeckCard = document.getElementById(window.currentActiveExecDeckCardId);
    if (activeDeckCard) {
      const pill = activeDeckCard.querySelector('.task-status-pill');
      if (pill) {
        pill.className = 'task-status-pill completed';
        pill.innerText = '🟢 已' + sealText;
        pill.style.color = '#059669';
      }
      const actionBtn = activeDeckCard.querySelector('.card-graphic-pill.pill-timer, .card-graphic-pill.pill-checkin, .card-graphic-pill.pill-reflection');
      if (actionBtn) {
        actionBtn.innerText = '✓ 已' + sealText;
        actionBtn.style.background = '#10b981';
        actionBtn.style.color = '#fff';
      }
    }
  }
  const tcardMap = { goal: 'tcard-1', drill: 'tcard-2', habit: 'tcard-3', reflection: 'tcard-4', custom: 'tcard-5' };
  if (tcardMap[type]) {
    const tStatus = document.getElementById('status-text-' + tcardMap[type]);
    if (tStatus) {
      tStatus.innerText = '✓ 已' + sealText;
      tStatus.style.color = '#059669';
    }
  }

  const popupTitleEl = document.getElementById('exec-popup-title');
  const realTaskTitle = (popupTitleEl && popupTitleEl.textContent.trim()) ? popupTitleEl.textContent.trim() : (sealText + '节点打卡 (' + type + ')');

  // 数据闭环: 统一调用全域闭环引擎回写甘特、周/月历、HUD与每日随记
  triggerGlobalCheckinClosedLoop({
    taskKey: window.currentActiveExecDeckCardId || ('checkin-page-' + type),
    pavilionId: type,
    title: realTaskTitle,
    focusMinutes: 20
  });

  showIslandToast('🎉 恭喜！已完成【' + sealText + '】打卡闭环！甘特进度、履约率与每日随记已同步更新！');
  if (document.body.classList.contains('has-exec-fullscreen') && typeof closeExecCardPopupView === 'function') {
    setTimeout(() => {
      closeExecCardPopupView();
    }, 950);
  }
}

// ==========================================================================
// 4. 14 大保留高能工具事件响应 (二级与三级工作台真实几何排布与聚焦)
// ==========================================================================

function alignGridLayout() {
  if (typeof pushTertiaryHistory === 'function') pushTertiaryHistory();
  const world = document.getElementById('tertiary-canvas-world');
  if (world) {
    const cards = Array.from(world.querySelectorAll('.tertiary-card'));
    const cols = Math.min(3, Math.max(2, Math.ceil(Math.sqrt(cards.length))));
    cards.forEach((card, idx) => {
      const r = Math.floor(idx / cols);
      const c = idx % cols;
      card.style.left = (80 + c * 420) + 'px';
      card.style.top = (50 + r * 360) + 'px';
    });
    if (typeof renderTertiaryEdges === 'function') renderTertiaryEdges();
    if (typeof saveCurrentProjectCanvasSnapshot === 'function') saveCurrentProjectCanvasSnapshot();
  }
  const container = document.getElementById('ws-canvas-container');
  if (container) {
    container.style.animation = 'none';
    container.offsetHeight;
    container.style.animation = 'islandPanelPopIn 0.3s ease';
  }
  showIslandToast('▦ 网格布局已智能对齐全部节点卡片');
}

function addCustomNodePrompt() {
  openTertiaryAddNodeModal();
}

function fitCanvasView() {
  const stage = document.getElementById('tertiary-canvas-stage');
  if (stage) {
    if (typeof stage.scrollTo === 'function') stage.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    else { stage.scrollLeft = 0; stage.scrollTop = 0; }
  }
  showIslandToast('⛶ 画布视口已自适应居中全量卡片');
}

function focusActiveNode() {
  const firstCard = document.querySelector('#tertiary-canvas-world .tertiary-card');
  if (firstCard && typeof firstCard.scrollIntoView === 'function') {
    firstCard.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    firstCard.style.boxShadow = '0 0 0 4px #f59e0b';
    setTimeout(() => { firstCard.style.boxShadow = ''; }, 1600);
  }
  showIslandToast('🎯 已聚焦到当前核心攻坚节点');
}

function centerActiveNode() {
  const cards = document.querySelectorAll('#tertiary-canvas-world .tertiary-card');
  const midCard = cards[Math.floor(cards.length / 2)] || cards[0];
  if (midCard && typeof midCard.scrollIntoView === 'function') {
    midCard.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }
  showIslandToast('⊙ 已将核心卡片平移至视口中央');
}

function openZoomScopeModal() {
  showIslandToast('🔍 查看范围已切换为：【本日关键任务拓扑】');
}

function createModulePrompt() {
  const name = prompt('请输入新建专项冲刺模块名称：', '综合冲刺专项');
  if (name) {
    showIslandToast('📦 已创建专项模块【' + name + '】！');
  }
}

function createImageEvidencePrompt() {
  showIslandToast('📸 已唤起相机：请拍摄错题验算手稿或物证（已加盖防伪时间戳）');
}

function createTableDataPrompt() {
  showIslandToast('📊 已插入 7 天量化执行打卡表模板至当前卡片流！');
}

function createTextNotePrompt() {
  showIslandToast('📝 已插入 Markdown 心流笔记便签，随时记录顿悟灵感！');
}

function toggleChildrenFollowToolbar() {
  childrenFollowEnabled = !childrenFollowEnabled;
  const btn1 = document.getElementById('btn-ws-children-follow');
  const btn2 = document.getElementById('btn-tertiary-children-follow');
  if (btn1) btn1.classList.toggle('is-active', childrenFollowEnabled);
  if (btn2) btn2.classList.toggle('is-active', childrenFollowEnabled);
  showIslandToast('🔗 子级跟随 (Children Follow)：' + (childrenFollowEnabled ? '已开启' : '已关闭'));
}

function toggleChildrenFollowSetting(val) {
  childrenFollowEnabled = val;
  const btn = document.getElementById('btn-ws-children-follow');
  if (btn) btn.classList.toggle('is-active', childrenFollowEnabled);
}

function openCameraSettings() {
  showIslandToast('🎥 镜头平滑度：平滑插值 (140ms) · 1:1 平板视口');
}

function toggleArchiveView() {
  isArchiveDrawerOpen = !isArchiveDrawerOpen;
  const drawer = document.getElementById('archive-drawer-panel');
  if (drawer) {
    drawer.style.right = isArchiveDrawerOpen ? '0' : '-360px';
  }
}

// ==========================================================================
// 4.1 通用三级节点全景工作台交互调度引擎 (1:1 终身岛民全能按钮 + 路线设置系统)
// ==========================================================================

window.TERTIARY_EDGES = [
  {
    id: 'edge-1-2',
    sourceId: 'tcard-1',
    targetId: 'tcard-2',
    sourceLabel: '目标分解',
    targetLabel: '攻坚实训',
    label: '启动实训',
    type: '关联',
    arrowMode: 'single',
    lineStyle: 'solid',
    lineWidth: 3,
    color: '#f59e0b'
  },
  {
    id: 'edge-2-3',
    sourceId: 'tcard-2',
    targetId: 'tcard-3',
    sourceLabel: '攻坚实训',
    targetLabel: '习惯践行',
    label: '知行躬行',
    type: '前置',
    arrowMode: 'single',
    lineStyle: 'solid',
    lineWidth: 3,
    color: '#f59e0b'
  },
  {
    id: 'edge-3-4',
    sourceId: 'tcard-3',
    targetId: 'tcard-4',
    sourceLabel: '习惯践行',
    targetLabel: '评估复盘',
    label: '错因复盘',
    type: '包含',
    arrowMode: 'single',
    lineStyle: 'dashed',
    lineWidth: 3,
    color: '#10b981'
  },
  {
    id: 'edge-4-5',
    sourceId: 'tcard-4',
    targetId: 'tcard-5',
    sourceLabel: '评估复盘',
    targetLabel: '自定义配置',
    label: '拓展研学',
    type: '关联',
    arrowMode: 'single',
    lineStyle: 'solid',
    lineWidth: 3,
    color: '#16a34a'
  }
];

let currentActiveEdgeId = null;
let connectingSourceCardId = null;
let tertiaryCardIndex = 6;

function toggleTertiaryRouteSetup() {
  showIslandToast('🔀 已开启拓扑连线模式：点击标签切换关系，拖拽端口重新连线！');
}

// 多项目独立三级脑图存储空间 (确保每个甘特项目拥有自己独立的节点卡片与连线拓扑)
window.PROJECT_CANVAS_STORE = {};
window.currentTertiaryProjId = 'p1';
window.TERTIARY_HISTORY = { undoStack: [], redoStack: [] };

function pushTertiaryHistory() {
  const world = document.getElementById('tertiary-canvas-world');
  if (!world) return;
  syncFormStateToAttributes(world);
  const cardsHtml = Array.from(world.querySelectorAll('.tertiary-card')).map(el => {
    const clone = el.cloneNode(true);
    clone.removeAttribute('data-drag-bound');
    return clone.outerHTML;
  }).join('\n');
  window.TERTIARY_HISTORY.undoStack.push({
    cardsHtml: cardsHtml,
    edges: JSON.parse(JSON.stringify(window.TERTIARY_EDGES || []))
  });
  if (window.TERTIARY_HISTORY.undoStack.length > 25) {
    window.TERTIARY_HISTORY.undoStack.shift();
  }
  window.TERTIARY_HISTORY.redoStack = [];
}

function updateTertiaryNodeCountBadge() {
  const totalCards = document.querySelectorAll('#tertiary-canvas-world .tertiary-card').length;
  const activeCountEl = document.getElementById('tertiary-top-active-count');
  if (activeCountEl) activeCountEl.innerText = totalCards + ' 项';
  const statCountEl = document.getElementById('tertiary-stat-node-count');
  if (statCountEl) statCountEl.innerText = totalCards + ' 节点';
}

function saveCurrentProjectCanvasSnapshot() {
  const pid = window.currentTertiaryProjId || 'p1';
  const world = document.getElementById('tertiary-canvas-world');
  if (!world) return;
  syncFormStateToAttributes(world);
  const cardHtmlList = Array.from(world.querySelectorAll('.tertiary-card')).map(el => {
    const clone = el.cloneNode(true);
    clone.removeAttribute('data-drag-bound');
    return clone.outerHTML;
  });
  window.PROJECT_CANVAS_STORE[pid] = {
    cardsHtml: cardHtmlList.join('\n'),
    edges: JSON.parse(JSON.stringify(window.TERTIARY_EDGES || []))
  };
  updateTertiaryNodeCountBadge();
  notifyIslandStateChanged();
}

function buildStarterCanvasForProject(proj) {
  const pTitle = proj ? proj.title : '新成长规划项目';
  const pDesc = proj ? (proj.desc || '稳步推进阶段量化攻坚与日常打卡') : '稳步推进阶段量化攻坚';
  const idBase = 'projnode-' + (proj ? proj.id : Date.now());
  const c1 = idBase + '-1';
  const c2 = idBase + '-2';
  const c3 = idBase + '-3';

  const cardsHtml =
    '<div class="a-my-island-work-node-card tertiary-card tertiary-goal-card" id="' + c1 + '" data-label="阶段目标分解" style="position:absolute; top:90px; left:80px; width:340px;">' +
      '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + c1 + '\', event)">' +
        '<span class="work-node-badge" style="background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe;">🎯 目标分解</span>' +
        '<span class="work-node-title">' + pTitle + ' · 通关目标</span>' +
        '<span id="status-text-' + c1 + '" style="font-size:10px; font-weight:800; color:#1d4ed8;">阶段里程碑</span>' +
      '</div>' +
      '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
        '<div style="background:#eff6ff; border:1px dashed #93c5fd; padding:8px; border-radius:8px; font-size:11px; color:#1e40af;">📋 验收标准：' + pDesc + '</div>' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px;">' +
          '<span style="color:#64748b; font-size:10px; font-weight:700;">支持图文交付归档</span>' +
          '<button type="button" id="btn-deposit-' + c1 + '" class="card-graphic-pill" style="background:linear-gradient(135deg, #f59e0b, #d97706); color:#fff; border:1px solid #b45309; font-weight:850; padding:4px 10px; cursor:pointer;" onclick="depositGoalToAchievement(\'' + c1 + '\', event)">🏆 记录到成就馆</button>' +
        '</div>' +
      '</div>' +
      '<div class="work-card-connect-handle" data-card-id="' + c1 + '" onclick="startOrFinishConnecting(this.dataset.cardId, event)">🔗</div>' +
    '</div>' +
    '<div class="a-my-island-work-node-card tertiary-card tertiary-drill-card" id="' + c2 + '" data-label="核心攻坚实训" style="position:absolute; top:90px; left:490px; width:330px;">' +
      '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + c2 + '\', event)">' +
        '<span class="work-node-badge" style="background:#fef3c7; color:#b45309; border:1px solid #fde68a;">⚡ 攻坚实训</span>' +
        '<span class="work-node-title">' + pTitle + ' · 每日实训</span>' +
        '<span id="status-text-' + c2 + '" style="font-size:10px; font-weight:800; color:#b45309;">待执行打卡</span>' +
      '</div>' +
      '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
        '<p style="font-weight:750; color:#4a3a2a; font-size:11.5px; margin:0;">【执行要领】' + pDesc + '</p>' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px;">' +
          '<span>预计专注：⏱️ 20 分钟</span>' +
          '<button class="card-graphic-pill pill-timer" onclick="handleNodeCheckin(this, \'' + c2 + '\', \'timer\')">🌟 立即打卡</button>' +
        '</div>' +
      '</div>' +
      '<div class="work-card-connect-handle" data-card-id="' + c2 + '" onclick="startOrFinishConnecting(this.dataset.cardId, event)">🔗</div>' +
    '</div>' +
    '<div class="a-my-island-work-node-card tertiary-card tertiary-reflection-card" id="' + c3 + '" data-label="阶段评估复盘" style="position:absolute; top:90px; left:890px; width:330px;">' +
      '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + c3 + '\', event)">' +
        '<span class="work-node-badge" style="background:#f5f3ff; color:#7c3aed; border:1px solid #ddd6fe;">📝 评估复盘</span>' +
        '<span class="work-node-title">' + pTitle + ' · 复盘改进</span>' +
        '<span id="status-text-' + c3 + '" style="font-size:10px; font-weight:800; color:#7c3aed;">待复盘</span>' +
      '</div>' +
      '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
        '<p style="font-weight:750; color:#581c87; font-size:11.5px; margin:0;">【复盘指引】记录执行卡点与突破经验，可一键将提升清单派生为新实训节点。</p>' +
        '<div id="' + c3 + '-improvements" style="display:flex; flex-direction:column; gap:4px;">' +
          '<div class="card-reflection-improvement-item" style="display:grid; grid-template-columns:16px 1fr 20px; align-items:center; gap:4px;">' +
            '<input type="checkbox" checked style="margin:0; accent-color:#7c3aed;">' +
            '<input type="text" value="1. 拆解薄弱动作/卡点进行二次强化" class="add-module-text-input reflection-improvement-input" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#5b21b6; font-weight:700; background:#fff;">' +
            '<button type="button" onclick="removeCardReflectionImprovementItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px;">✕</button>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px; gap:6px;">' +
          '<button type="button" class="card-graphic-pill" style="background:#ede9fe; color:#6d28d9; border:1px solid #c4b5fd; font-weight:800; padding:3px 8px; cursor:pointer;" onclick="deriveNodesFromReflectionCard(\'' + c3 + '\', event)">🌱 派生实训节点</button>' +
          '<button class="card-graphic-pill pill-reflection" onclick="handleNodeCheckin(this, \'' + c3 + '\', \'text\')">✍️ 笃行复盘</button>' +
        '</div>' +
      '</div>' +
      '<div class="work-card-connect-handle" data-card-id="' + c3 + '" onclick="startOrFinishConnecting(this.dataset.cardId, event)">🔗</div>' +
    '</div>';

  const edges = [
    { id: 'edge-' + c1 + '-' + c2, sourceId: c1, targetId: c2, sourceLabel: '目标分解', targetLabel: '攻坚实训', label: '拆解执行', type: '前置', arrowMode: 'single', lineStyle: 'solid', lineWidth: 3, color: '#f59e0b' },
    { id: 'edge-' + c2 + '-' + c3, sourceId: c2, targetId: c3, sourceLabel: '攻坚实训', targetLabel: '评估复盘', label: '复盘纠偏', type: '关联', arrowMode: 'single', lineStyle: 'dashed', lineWidth: 3, color: '#10b981' }
  ];
  return { cardsHtml: cardsHtml, edges: edges };
}

function enterTertiaryWorkspace(projId) {
  const targetId = projId || 'p1';
  const world = document.getElementById('tertiary-canvas-world');
  if (world) {
    // 首次进入前先保存默认项目 p1 的初始画布快照
    if (!window.PROJECT_CANVAS_STORE['p1'] && window.currentTertiaryProjId === 'p1') {
      saveCurrentProjectCanvasSnapshot();
    } else if (window.currentTertiaryProjId) {
      saveCurrentProjectCanvasSnapshot();
    }

    const p = (window.GANTT_PROJECTS || []).find(item => item.id === targetId);
    if (!window.PROJECT_CANVAS_STORE[targetId]) {
      window.PROJECT_CANVAS_STORE[targetId] = buildStarterCanvasForProject(p);
    }

    const snap = window.PROJECT_CANVAS_STORE[targetId];
    if (snap && snap.cardsHtml) {
      world.querySelectorAll('.tertiary-card').forEach(el => el.remove());
      const temp = document.createElement('div');
      temp.innerHTML = snap.cardsHtml;
      Array.from(temp.children).forEach(cardEl => world.appendChild(cardEl));
      window.TERTIARY_EDGES = JSON.parse(JSON.stringify(snap.edges || []));
    }
    window.currentTertiaryProjId = targetId;
  }

  const p = (window.GANTT_PROJECTS || []).find(item => item.id === targetId);
  const leafEl = document.getElementById('tertiary-crumb-leaf');
  if (leafEl) {
    leafEl.innerText = p ? ('⚡ ' + p.title) : '⚡ 攻坚脑图画布';
  }
  switchMainSection('tertiary');
  initTertiaryWorkspace();
  showIslandToast('🔮 已进入项目《' + (p ? p.title : '专项突破') + '》专属三级节点脑图画布');
}

function exitTertiaryWorkspace() {
  saveCurrentProjectCanvasSnapshot();
  currentWsSubView = 'gantt';
  switchMainSection('ws');
  showIslandToast('◀️ 已保存当前项目脑图并返回项目甘特总览');
}

let tertiaryMinimapEventsBound = false;
let isDraggingTertiaryMinimapVp = false;
let tertiaryMinimapBounds = null;
let tertiaryMinimapScale = 1;
let tertiaryMinimapOffsetX = 0;
let tertiaryMinimapOffsetY = 0;

function updateTertiaryMinimap() {
  const dock = document.getElementById('tertiary-navigation-dock');
  const panel = document.getElementById('tertiary-minimap-dock');
  const svg = document.getElementById('tertiary-minimap-svg');
  const nodesGroup = document.getElementById('tertiary-minimap-nodes');
  const vpRect = document.getElementById('tertiary-minimap-viewport');
  const stage = document.getElementById('tertiary-canvas-stage');
  const canvasWorld = document.getElementById('tertiary-canvas-world');
  if (!dock || !panel || !svg || !nodesGroup || !vpRect || !stage || !canvasWorld) return;
  if (panel.classList.contains('is-collapsed')) return;

  if (!tertiaryMinimapEventsBound) {
    initTertiaryMinimapEvents();
  }

  const stageW = stage.clientWidth || 1000;
  const stageH = stage.clientHeight || 700;
  const tZoom = window.tertiaryZoom || 1.0;
  const tPanX = window.tertiaryPanX || 0;
  const tPanY = window.tertiaryPanY || 0;

  // Viewport in canvas space
  const vpLeft = -tPanX / tZoom;
  const vpTop = -tPanY / tZoom;
  const vpRight = (stageW - tPanX) / tZoom;
  const vpBottom = (stageH - tPanY) / tZoom;

  // Tertiary cards in world
  const cards = Array.from(canvasWorld.querySelectorAll('.tertiary-card, .tertiary-node-card'));
  const nodeDataList = cards.map((card, idx) => {
    const left = parseInt(card.style.left, 10) || card.offsetLeft || 0;
    const top = parseInt(card.style.top, 10) || card.offsetTop || 0;
    const w = card.offsetWidth || 340;
    const h = card.offsetHeight || 200;
    let type = 'stage';
    if (card.classList.contains('is-root') || idx === 0) type = 'root';
    else if (card.classList.contains('is-task') || (card.dataset && card.dataset.type === 'task')) type = 'task';
    else if (card.classList.contains('is-project') || (card.dataset && card.dataset.type === 'project')) type = 'project';
    else if (card.classList.contains('is-text') || (card.dataset && card.dataset.type === 'text')) type = 'text';
    return { id: card.id || ('card-' + idx), x: left, y: top, w, h, type };
  });

  const bounds = nodeDataList.reduce((acc, n) => {
    acc.minX = Math.min(acc.minX, n.x);
    acc.minY = Math.min(acc.minY, n.y);
    acc.maxX = Math.max(acc.maxX, n.x + n.w);
    acc.maxY = Math.max(acc.maxY, n.y + n.h);
    return acc;
  }, { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity });

  if (!isFinite(bounds.minX)) {
    bounds.minX = 0; bounds.minY = 0; bounds.maxX = 1000; bounds.maxY = 600;
  }

  const pad = Math.max(80, 0.06 * Math.max(bounds.maxX - bounds.minX, bounds.maxY - bounds.minY));
  const minX = bounds.minX - pad;
  const minY = bounds.minY - pad;
  const maxX = bounds.maxX + pad;
  const maxY = bounds.maxY + pad;

  const spanX = Math.max(1, maxX - minX);
  const spanY = Math.max(1, maxY - minY);
  const scale = Math.min(208 / spanX, 118 / spanY);
  const offsetX = (220 - spanX * scale) / 2;
  const offsetY = (130 - spanY * scale) / 2;

  tertiaryMinimapBounds = { minX, minY, maxX, maxY };
  tertiaryMinimapScale = scale;
  tertiaryMinimapOffsetX = offsetX;
  tertiaryMinimapOffsetY = offsetY;

  // Render nodes
  let nodesHtml = '';
  nodeDataList.forEach(n => {
    const rx = offsetX + (n.x - minX) * scale;
    const ry = offsetY + (n.y - minY) * scale;
    const rw = Math.max(4, n.w * scale);
    const rh = Math.max(4, n.h * scale);
    const round = Math.min(3, rw / 3, rh / 3);
    nodesHtml += `<rect x="${rx.toFixed(1)}" y="${ry.toFixed(1)}" width="${rw.toFixed(1)}" height="${rh.toFixed(1)}" rx="${round.toFixed(1)}" class="a-my-island-work-minimap-node is-${n.type}"></rect>`;
  });
  nodesGroup.innerHTML = nodesHtml;

  // Viewport rect
  const vx = offsetX + (vpLeft - minX) * scale;
  const vy = offsetY + (vpTop - minY) * scale;
  const vw = Math.max(6, (stageW / tZoom) * scale);
  const vh = Math.max(6, (stageH / tZoom) * scale);
  vpRect.setAttribute('x', vx.toFixed(1));
  vpRect.setAttribute('y', vy.toFixed(1));
  vpRect.setAttribute('width', vw.toFixed(1));
  vpRect.setAttribute('height', vh.toFixed(1));
}

function initTertiaryMinimapEvents() {
  const svg = document.getElementById('tertiary-minimap-svg');
  const vpRect = document.getElementById('tertiary-minimap-viewport');
  const stage = document.getElementById('tertiary-canvas-stage');
  if (!svg || !vpRect || !stage || tertiaryMinimapEventsBound) return;
  tertiaryMinimapEventsBound = true;

  // 点击小地图空白处将该点平移居中至画布中心
  svg.addEventListener('click', (e) => {
    if (isDraggingTertiaryMinimapVp || !tertiaryMinimapBounds) return;
    const rect = svg.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * 180;
    const svgY = ((e.clientY - rect.top) / rect.height) * 100;

    const targetX = tertiaryMinimapBounds.minX + (svgX - tertiaryMinimapOffsetX) / tertiaryMinimapScale;
    const targetY = tertiaryMinimapBounds.minY + (svgY - tertiaryMinimapOffsetY) / tertiaryMinimapScale;

    const stageW = stage.clientWidth || 1000;
    const stageH = stage.clientHeight || 700;
    const tZoom = window.tertiaryZoom || 1.0;

    window.tertiaryPanX = stageW / 2 - targetX * tZoom;
    window.tertiaryPanY = stageH / 2 - targetY * tZoom;
    applyTertiaryTransform();
  });

  // 鼠标/触控拖拽视口框实时平移画布
  vpRect.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!tertiaryMinimapBounds) return;
    isDraggingTertiaryMinimapVp = true;
    try { svg.setPointerCapture(e.pointerId); } catch {}

    const initialClientX = e.clientX;
    const initialClientY = e.clientY;
    const initialPanX = window.tertiaryPanX || 0;
    const initialPanY = window.tertiaryPanY || 0;
    const tZoom = window.tertiaryZoom || 1.0;

    const onPointerMove = (ev) => {
      const rect = svg.getBoundingClientRect();
      const deltaSvgX = ((ev.clientX - initialClientX) / rect.width) * 180;
      const deltaSvgY = ((ev.clientY - initialClientY) / rect.height) * 100;
      const deltaCanvasX = deltaSvgX / tertiaryMinimapScale;
      const deltaCanvasY = deltaSvgY / tertiaryMinimapScale;

      window.tertiaryPanX = initialPanX - deltaCanvasX * tZoom;
      window.tertiaryPanY = initialPanY - deltaCanvasY * tZoom;
      applyTertiaryTransform();
    };

    const onPointerUp = (ev) => {
      try { svg.releasePointerCapture(ev.pointerId); } catch {}
      svg.removeEventListener('pointermove', onPointerMove);
      svg.removeEventListener('pointerup', onPointerUp);
      svg.removeEventListener('pointercancel', onPointerUp);
      setTimeout(() => { isDraggingTertiaryMinimapVp = false; }, 50);
    };

    svg.addEventListener('pointermove', onPointerMove);
    svg.addEventListener('pointerup', onPointerUp);
    svg.addEventListener('pointercancel', onPointerUp);
  });
}

function toggleTertiaryMinimapDock(forceState) {
  const panel = document.getElementById('tertiary-minimap-dock');
  const btn = document.getElementById('tertiary-minimap-toggle-btn');
  if (!panel) return;
  const isCurrentlyCollapsed = panel.classList.contains('is-collapsed');
  const shouldCollapse = typeof forceState === 'boolean' ? !forceState : !isCurrentlyCollapsed;
  panel.classList.toggle('is-collapsed', shouldCollapse);
  if (btn) {
    btn.classList.toggle('is-active', !shouldCollapse);
    btn.setAttribute('aria-label', shouldCollapse ? '展开脑图导航' : '收起脑图导航');
  }
  if (!shouldCollapse) {
    updateTertiaryMinimap();
  }
}

function toggleTertiaryMinimap() {
  toggleTertiaryMinimapDock();
}

function cycleGridMode() {
  alignGridLayout();
}

function handleOpenObsidianCanvas(projId) {
  const targetId = projId || window.currentTertiaryProjId || 'p1';
  if (typeof window.__openProjectInObsidianCanvas === 'function') {
    window.__openProjectInObsidianCanvas(targetId);
  } else {
    showIslandToast('🎨 正在 Obsidian Canvas 核心插件中全屏打开项目画布...');
  }
}

function openCurrentProjectInObsidianCanvas() {
  handleOpenObsidianCanvas(window.currentTertiaryProjId);
}


// ==========================================================================
// 终身岛民 1:1 工作图谱多点触控与自由缩放手势引擎 (对标 a-my-island Cytoscape 级体验)
// ==========================================================================
window.tertiaryZoom = 1.0;
window.tertiaryPanX = 60;
window.tertiaryPanY = 40;

const activePointers = new Map();
let isPinching = false;
let pinchStartDistance = 0;
let pinchStartZoom = 1.0;
let pinchWorldAnchorX = 0;
let pinchWorldAnchorY = 0;

let isStagePanning = false;
let stagePanStartClientX = 0;
let stagePanStartClientY = 0;
let stagePanStartPanX = 0;
let stagePanStartPanY = 0;

let activeDraggingCard = null;
let cardDragInitialLeft = 0;
let cardDragInitialTop = 0;
let cardDragStartClientX = 0;
let cardDragStartClientY = 0;
let cardDragHasMoved = false;
let cardFollowerInitialPositions = [];

let tertiaryEngineBound = false;

function applyTertiaryTransform() {
  const world = document.getElementById('tertiary-canvas-world');
  if (!world) return;
  world.style.transform = 'translate3d(' + window.tertiaryPanX + 'px, ' + window.tertiaryPanY + 'px, 0) scale(' + window.tertiaryZoom + ')';
  world.style.transformOrigin = '0 0';
  const badge = document.getElementById('tertiary-zoom-badge');
  if (badge) badge.textContent = Math.round(window.tertiaryZoom * 100) + '%';
  if (typeof updateTertiaryMinimap === 'function') updateTertiaryMinimap();
}

function zoomTertiaryCanvas(factor) {
  const stage = document.getElementById('tertiary-canvas-stage');
  if (!stage) return;
  const oldZoom = window.tertiaryZoom || 1.0;
  const newZoom = Math.min(3.0, Math.max(0.25, oldZoom * factor));
  const centerX = stage.clientWidth / 2;
  const centerY = stage.clientHeight / 2;
  const worldX = (centerX - window.tertiaryPanX) / oldZoom;
  const worldY = (centerY - window.tertiaryPanY) / oldZoom;
  window.tertiaryZoom = newZoom;
  window.tertiaryPanX = centerX - worldX * newZoom;
  window.tertiaryPanY = centerY - worldY * newZoom;
  applyTertiaryTransform();
}

function resetTertiaryCanvasZoom() {
  window.tertiaryZoom = 1.0;
  window.tertiaryPanX = 60;
  window.tertiaryPanY = 40;
  applyTertiaryTransform();
  showIslandToast('🔍 已恢复 100% 原始比例');
}

function fitCanvasView() {
  const stage = document.getElementById('tertiary-canvas-stage');
  const world = document.getElementById('tertiary-canvas-world');
  if (!stage || !world) return;
  const cards = Array.from(world.querySelectorAll('.tertiary-card'));
  if (cards.length === 0) {
    resetTertiaryCanvasZoom();
    return;
  }
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  cards.forEach(c => {
    const l = parseInt(c.style.left, 10) || c.offsetLeft;
    const t = parseInt(c.style.top, 10) || c.offsetTop;
    const w = c.offsetWidth || 340;
    const h = c.offsetHeight || 220;
    minX = Math.min(minX, l);
    minY = Math.min(minY, t);
    maxX = Math.max(maxX, l + w);
    maxY = Math.max(maxY, t + h);
  });
  const bboxW = Math.max(200, maxX - minX);
  const bboxH = Math.max(200, maxY - minY);
  const stageW = stage.clientWidth || 1000;
  const stageH = stage.clientHeight || 700;
  const padding = 60;
  const scaleX = (stageW - padding * 2) / bboxW;
  const scaleY = (stageH - padding * 2) / bboxH;
  const fitScale = Math.min(1.2, Math.max(0.3, Math.min(scaleX, scaleY)));
  window.tertiaryZoom = fitScale;
  window.tertiaryPanX = (stageW - bboxW * fitScale) / 2 - minX * fitScale;
  window.tertiaryPanY = (stageH - bboxH * fitScale) / 2 - minY * fitScale;
  applyTertiaryTransform();
  showIslandToast('⛶ 已自适应居中缩放全部卡片 (' + Math.round(fitScale * 100) + '%)');
}

// 快速更新 SVG 连线 (仅修改 path 的 d 属性，不重绘整个 DOM，保障 60/120fps 流畅度)

// 连线在卡片折叠/展开动画期间的连续动力学平滑追踪循环
function animateTertiaryEdgesDuringTransition(duration = 320) {
  const startTime = performance.now();
  function step(now) {
    updateTertiaryEdgesFast();
    if (now - startTime < duration) {
      requestAnimationFrame(step);
    } else {
      updateTertiaryEdgesFast();
    }
  }
  requestAnimationFrame(step);
}

function updateTertiaryEdgesFast() {
  const linesGroup = document.getElementById('tertiary-lines-group');
  if (!linesGroup) return;
  const edges = window.TERTIARY_EDGES || [];
  let needFull = false;
  edges.forEach(e => {
    const pathEl = document.getElementById('svg-line-' + e.id);
    const labelEl = document.getElementById('edge-label-' + e.id);
    const sEl = document.getElementById(e.sourceId);
    const tEl = document.getElementById(e.targetId);
    if (!sEl || !tEl) return;
    if (!pathEl) { needFull = true; return; }
    const sLeft = parseInt(sEl.style.left, 10) || sEl.offsetLeft;
    const sTop = parseInt(sEl.style.top, 10) || sEl.offsetTop;
    const sWidth = sEl.offsetWidth || 340;
    const sHeight = sEl.offsetHeight || 220;
    const tLeft = parseInt(tEl.style.left, 10) || tEl.offsetLeft;
    const tTop = parseInt(tEl.style.top, 10) || tEl.offsetTop;
    const tWidth = tEl.offsetWidth || 340;
    const tHeight = tEl.offsetHeight || 220;

    let x1, y1, x2, y2;
    if (sLeft + sWidth < tLeft) {
      x1 = sLeft + sWidth; y1 = sTop + sHeight / 2;
      x2 = tLeft; y2 = tTop + tHeight / 2;
    } else if (tLeft + tWidth < sLeft) {
      x1 = sLeft; y1 = sTop + sHeight / 2;
      x2 = tLeft + tWidth; y2 = tTop + tHeight / 2;
    } else {
      x1 = sLeft + sWidth / 2; y1 = sTop + sHeight;
      x2 = tLeft + tWidth / 2; y2 = tTop;
    }

    const dx = Math.abs(x2 - x1) * 0.5;
    const d = 'M ' + x1 + ' ' + y1 + ' C ' + (x1 + dx) + ' ' + y1 + ', ' + (x2 - dx) + ' ' + y2 + ', ' + x2 + ' ' + y2;
    pathEl.setAttribute('d', d);
    const hitEl = document.getElementById('svg-hit-' + e.id);
    if (hitEl) hitEl.setAttribute('d', d);

    if (labelEl) {
      labelEl.style.left = ((x1 + x2) / 2) + 'px';
      labelEl.style.top = ((y1 + y2) / 2) + 'px';
    }
  });
  if (needFull) renderTertiaryEdges();
}

let tertiaryEdgeRaf = 0;
function scheduleTertiaryEdgeRefresh() {
  if (tertiaryEdgeRaf) return;
  tertiaryEdgeRaf = requestAnimationFrame(() => {
    tertiaryEdgeRaf = 0;
    updateTertiaryEdgesFast();
  });
}

// 兼容旧调用：折叠/展开、全部折叠等处使用的连线刷新入口
function renderTertiaryConnections() {
  renderTertiaryEdges();
  scheduleTertiaryEdgeRefresh();
}

let tertiaryResizeObserver = null;
function observeTertiaryCards() {
  if (typeof ResizeObserver === 'undefined') return;
  if (!tertiaryResizeObserver) {
    tertiaryResizeObserver = new ResizeObserver(() => scheduleTertiaryEdgeRefresh());
  }
  document.querySelectorAll('#tertiary-canvas-world .tertiary-card').forEach(c => {
    if (!c._tertiaryRoBound) {
      c._tertiaryRoBound = true;
      tertiaryResizeObserver.observe(c);
    }
  });
}


function initTertiaryWorkspace() {
  initTertiaryCanvasPanZoom();
  renderTertiaryConnections();
  observeTertiaryCards();
  if (typeof updateTertiaryMinimap === 'function') updateTertiaryMinimap();
}

function initTertiaryCanvasPanZoom() {
  const stage = document.getElementById('tertiary-canvas-stage');
  const view = document.getElementById('tertiary-workspace-view');
  if (!stage) return;
  applyTertiaryTransform();
  if (stage._tertiaryGestureBound) return;
  stage._tertiaryGestureBound = true;

  // -------------------------------------------------------------
  // A. 鼠标滚轮自由无级缩放 (以鼠标光标所在点为缩放中心)
  // -------------------------------------------------------------
  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const rect = stage.getBoundingClientRect();
    const cursorStageX = e.clientX - rect.left;
    const cursorStageY = e.clientY - rect.top;
    const oldZoom = window.tertiaryZoom || 1.0;
    const factor = e.deltaY < 0 ? 1.12 : 0.88;
    const newZoom = Math.min(3.5, Math.max(0.25, oldZoom * factor));
    const worldX = (cursorStageX - window.tertiaryPanX) / oldZoom;
    const worldY = (cursorStageY - window.tertiaryPanY) / oldZoom;
    window.tertiaryZoom = newZoom;
    window.tertiaryPanX = cursorStageX - worldX * newZoom;
    window.tertiaryPanY = cursorStageY - worldY * newZoom;
    applyTertiaryTransform();
  }, { passive: false });

  // -------------------------------------------------------------
  // B. 原生移动端触控引擎 (TouchEvents): 完美支持双指捏合无级缩放与平移
  // -------------------------------------------------------------
  let touchStartDist = 0;
  let touchStartZoom = 1.0;
  let touchPivotWorldX = 0;
  let touchPivotWorldY = 0;
  let isTouchPinching = false;
  let isTouchPanning = false;
  let touchPanStartX = 0;
  let touchPanStartY = 0;
  let touchPanInitialPanX = 0;
  let touchPanInitialPanY = 0;

  stage.addEventListener('touchstart', (e) => {
    // 关键：在脑图舞台内无条件阻断向全局冒泡，防止 Obsidian 侧边栏抽屉触发
    e.stopPropagation();

    // 双指触控 -> 启动双指捏合缩放
    if (e.touches.length === 2) {
      isTouchPinching = true;
      isTouchPanning = false;
      if (view) view.classList.add('is-viewport-moving');

      const t1 = e.touches[0];
      const t2 = e.touches[1];
      touchStartDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      touchStartZoom = window.tertiaryZoom || 1.0;

      const rect = stage.getBoundingClientRect();
      const midStageX = (t1.clientX + t2.clientX) / 2 - rect.left;
      const midStageY = (t1.clientY + t2.clientY) / 2 - rect.top;
      touchPivotWorldX = (midStageX - window.tertiaryPanX) / touchStartZoom;
      touchPivotWorldY = (midStageY - window.tertiaryPanY) / touchStartZoom;
      return;
    }

    // 单指触控 -> 检查是否落在卡片上
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const card = e.target.closest('.tertiary-card');
      const isInteractive = !!e.target.closest('button, input, select, textarea, .work-card-connect-handle');

      if (!card && !isInteractive) {
        // 单指落在空白画布背景 -> 启动平移
        isTouchPanning = true;
        isTouchPinching = false;
        touchPanStartX = touch.clientX;
        touchPanStartY = touch.clientY;
        touchPanInitialPanX = window.tertiaryPanX;
        touchPanInitialPanY = window.tertiaryPanY;
        stage.classList.add('is-dragging-canvas');
        if (view) view.classList.add('is-viewport-moving');
      }
    }
  }, { passive: false });

  stage.addEventListener('touchmove', (e) => {
    // 只要在脑图画布内滑动，无条件阻断向外冒泡并阻止原生页面滚动/侧边栏手势
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();

    // 1. 处理双指无级自由缩放 (Pinch-to-zoom)
    if (isTouchPinching && e.touches.length >= 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const currentDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      if (touchStartDist > 0) {
        const factor = currentDist / touchStartDist;
        const newZoom = Math.min(3.5, Math.max(0.25, touchStartZoom * factor));
        const rect = stage.getBoundingClientRect();
        const currentMidStageX = (t1.clientX + t2.clientX) / 2 - rect.left;
        const currentMidStageY = (t1.clientY + t2.clientY) / 2 - rect.top;
        window.tertiaryZoom = newZoom;
        window.tertiaryPanX = currentMidStageX - touchPivotWorldX * newZoom;
        window.tertiaryPanY = currentMidStageY - touchPivotWorldY * newZoom;
        applyTertiaryTransform();
      }
      return;
    }

    // 2. 处理单指画布自由漫游抓手平移
    if (isTouchPanning && e.touches.length === 1) {
      const touch = e.touches[0];
      const dx = touch.clientX - touchPanStartX;
      const dy = touch.clientY - touchPanStartY;
      window.tertiaryPanX = touchPanInitialPanX + dx;
      window.tertiaryPanY = touchPanInitialPanY + dy;
      applyTertiaryTransform();
    }
  }, { passive: false });

  const onTouchEnd = (e) => {
    e.stopPropagation();
    if (e.touches.length < 2 && isTouchPinching) {
      isTouchPinching = false;
      if (view) view.classList.remove('is-viewport-moving');
    }
    if (e.touches.length === 0) {
      isTouchPanning = false;
      stage.classList.remove('is-dragging-canvas');
      if (view) view.classList.remove('is-viewport-moving');
    }
  };
  stage.addEventListener('touchend', onTouchEnd, { passive: false });
  stage.addEventListener('touchcancel', onTouchEnd, { passive: false });

  // -------------------------------------------------------------
  // C. Pointer 事件处理卡片拖拽与鼠标画布漫游 (桌面与手写笔)
  // -------------------------------------------------------------
  stage.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch') return; // 触屏已由上方 TouchEvent 引擎专属处理
    if (e.target.closest('.a-my-island-work-minimap')) return;
    const isInteractive = !!e.target.closest('button, input, select, textarea, .work-card-connect-handle');
    if (isInteractive) return;

    const card = e.target.closest('.tertiary-card');
    if (card) {
      activeDraggingCard = card;
      cardDragHasMoved = false;
      cardDragStartClientX = e.clientX;
      cardDragStartClientY = e.clientY;
      cardDragInitialLeft = parseInt(card.style.left, 10) || card.offsetLeft;
      cardDragInitialTop = parseInt(card.style.top, 10) || card.offsetTop;
      cardFollowerInitialPositions = [];
      if (typeof childrenFollowEnabled !== 'undefined' && childrenFollowEnabled && card.id) {
        getDownstreamChildCardIds(card.id).forEach(cid => {
          const childEl = document.getElementById(cid);
          if (childEl) {
            cardFollowerInitialPositions.push({
              el: childEl,
              left: parseInt(childEl.style.left, 10) || childEl.offsetLeft,
              top: parseInt(childEl.style.top, 10) || childEl.offsetTop
            });
          }
        });
      }
      card.classList.add('is-card-dragging');
      try { card.setPointerCapture(e.pointerId); } catch (_) {}
      return;
    }

    // 鼠标点击空白处平移
    isStagePanning = true;
    stagePanStartClientX = e.clientX;
    stagePanStartClientY = e.clientY;
    stagePanStartPanX = window.tertiaryPanX;
    stagePanStartPanY = window.tertiaryPanY;
    stage.classList.add('is-dragging-canvas');
    if (view) view.classList.add('is-viewport-moving');
    try { stage.setPointerCapture(e.pointerId); } catch (_) {}
  });

  stage.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;

    if (isStagePanning) {
      const dx = e.clientX - stagePanStartClientX;
      const dy = e.clientY - stagePanStartClientY;
      window.tertiaryPanX = stagePanStartPanX + dx;
      window.tertiaryPanY = stagePanStartPanY + dy;
      applyTertiaryTransform();
      return;
    }

    if (activeDraggingCard) {
      const zoom = window.tertiaryZoom || 1.0;
      const dx = (e.clientX - cardDragStartClientX) / zoom;
      const dy = (e.clientY - cardDragStartClientY) / zoom;
      if (!cardDragHasMoved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
        cardDragHasMoved = true;
        if (typeof pushTertiaryHistory === 'function') pushTertiaryHistory();
      }
      activeDraggingCard.style.left = Math.max(10, cardDragInitialLeft + dx) + 'px';
      activeDraggingCard.style.top = Math.max(10, cardDragInitialTop + dy) + 'px';
      cardFollowerInitialPositions.forEach(f => {
        f.el.style.left = Math.max(10, f.left + dx) + 'px';
        f.el.style.top = Math.max(10, f.top + dy) + 'px';
      });
      updateTertiaryEdgesFast();
    }
  });

  const onPointerEnd = (e) => {
    if (activeDraggingCard) {
      try { activeDraggingCard.releasePointerCapture(e.pointerId); } catch (_) {}
      activeDraggingCard.classList.remove('is-card-dragging');
      activeDraggingCard = null;
      updateTertiaryEdgesFast();
    }
    if (isStagePanning) {
      try { stage.releasePointerCapture(e.pointerId); } catch (_) {}
      isStagePanning = false;
      stage.classList.remove('is-dragging-canvas');
      if (view) view.classList.remove('is-viewport-moving');
    }
  };
  stage.addEventListener('pointerup', onPointerEnd);
  stage.addEventListener('pointercancel', onPointerEnd);
}

// 全局一键最小化 / 展开全部三级卡片
let isAllTertiaryCardsMinimized = false;

// ==================== 三级脑图节点卡片最小化与展开交互控制器 ====================
function toggleTertiaryCardMinimize(cardId, event) {
  if (event) event.stopPropagation();
  const card = document.getElementById(cardId);
  if (!card) return;

  const isMin = card.classList.toggle('is-minimized');
  const btn = card.querySelector('.node-card-collapse-toggle');
  if (btn) {
    btn.innerHTML = isMin ? '🔽' : '🔼';
    btn.title = isMin ? '展开卡片显示完整信息' : '最小化卡片仅显示标题';
  }

  // 关键：在卡片折叠/展开动画期间启动 320ms 高频动力学重绘循环，连线与端点箭头 100% 同步平滑移动
  animateTertiaryEdgesDuringTransition(320);

  const titleEl = card.querySelector('.work-node-title');
  const cardTitle = titleEl ? titleEl.textContent : '节点';
  if (isMin) {
    showIslandToast('🗜️ 【' + cardTitle + '】已折叠收起！再次点击或双击展开。');
  } else {
    showIslandToast('📖 【' + cardTitle + '】已展开显示完整规划！');
  }
}

function toggleAllTertiaryCardsMinimize() {
  const cards = document.querySelectorAll('.tertiary-card');
  if (!cards.length) return;

  isAllTertiaryCardsMinimized = !isAllTertiaryCardsMinimized;
  cards.forEach(card => {
    if (isAllTertiaryCardsMinimized) {
      card.classList.add('is-minimized');
    } else {
      card.classList.remove('is-minimized');
    }
    const btn = card.querySelector('.node-card-collapse-toggle');
    if (btn) {
      btn.innerHTML = isAllTertiaryCardsMinimized ? '🔽' : '🔼';
      btn.title = isAllTertiaryCardsMinimized ? '展开卡片显示完整信息' : '最小化卡片仅显示标题';
    }
  });

  const toolBtn = document.getElementById('btn-tool-minimize-all');
  if (toolBtn) {
    const label = toolBtn.querySelector('.a-my-island-graph-tool-label');
    if (label) label.textContent = isAllTertiaryCardsMinimized ? '全部展开' : '全部折叠';
  }

  // 启动连线平滑跟随动画循环
  animateTertiaryEdgesDuringTransition(340);

  showIslandToast(isAllTertiaryCardsMinimized ? '🗜️ 画布上所有节点已一键最小化为纯标题态！' : '📖 画布上所有节点已一键展开完整规划！');
}

function bindTertiaryCardsDrag() {
  // 统一由 initTertiaryCanvasPanZoom 的 Pointer Tracker 高性能统一代理，避免冗余全局事件挂载
}

function getDownstreamChildCardIds(rootId) {
  const visited = new Set([rootId]);
  const queue = [rootId];
  const result = [];
  while (queue.length > 0) {
    const curr = queue.shift();
    (window.TERTIARY_EDGES || []).forEach(e => {
      if (e.sourceId === curr && !visited.has(e.targetId)) {
        visited.add(e.targetId);
        result.push(e.targetId);
        queue.push(e.targetId);
      }
    });
  }
  return result;
}

function bindCardDragSingle(card) {
  if (card._dragInitialized) return;
  card._dragInitialized = true;
  card.dataset.dragBound = 'true';

  let isDragging = false;
  let hasMoved = false;
  let startX = 0, startY = 0;
  let initialLeft = 0, initialTop = 0;
  let followerInitialPositions = [];

  const onPointerDown = (e) => {
    if (e.target.closest('button') || e.target.closest('input') || e.target.closest('select') || e.target.closest('textarea') || e.target.closest('.work-card-connect-handle')) return;
    isDragging = true;
    hasMoved = false;
    startX = e.clientX || (e.touches && e.touches[0].clientX);
    startY = e.clientY || (e.touches && e.touches[0].clientY);
    initialLeft = parseInt(card.style.left, 10) || card.offsetLeft;
    initialTop = parseInt(card.style.top, 10) || card.offsetTop;
    followerInitialPositions = [];
    if (childrenFollowEnabled && card.id) {
      getDownstreamChildCardIds(card.id).forEach(cid => {
        const childEl = document.getElementById(cid);
        if (childEl) {
          followerInitialPositions.push({
            el: childEl,
            left: parseInt(childEl.style.left, 10) || childEl.offsetLeft,
            top: parseInt(childEl.style.top, 10) || childEl.offsetTop
          });
        }
      });
    }
    card.style.zIndex = '35';
    e.stopPropagation();
  };

  let rafPending = false;
  let targetLeft = 0;
  let targetTop = 0;

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const currentZoom = window.tertiaryZoom || 1;
    const dx = (clientX - startX) / currentZoom;
    const dy = (clientY - startY) / currentZoom;
    if (!hasMoved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
      hasMoved = true;
      pushTertiaryHistory();
    }
    targetLeft = Math.max(10, initialLeft + dx);
    targetTop = Math.max(10, initialTop + dy);

    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(() => {
        card.style.left = targetLeft + 'px';
        card.style.top = targetTop + 'px';
        followerInitialPositions.forEach(f => {
          f.el.style.left = Math.max(10, f.left + dx) + 'px';
          f.el.style.top = Math.max(10, f.top + dy) + 'px';
        });
        renderTertiaryEdges();
        rafPending = false;
      });
    }
  };

  const onPointerUp = () => {
    if (isDragging) {
      isDragging = false;
      card.style.zIndex = '20';
      if (hasMoved) {
        saveCurrentProjectCanvasSnapshot();
      }
    }
  };

  card.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);
  card.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);
}

// ==================== 终身岛民 1:1 路线渲染引擎 ====================

function renderTertiaryEdges() {
  const linesGroup = document.getElementById('tertiary-lines-group');
  const labelsLayer = document.getElementById('tertiary-edge-labels-layer');
  const defs = document.getElementById('tertiary-svg-defs');
  if (!linesGroup || !labelsLayer) return;

  let linesHtml = '';
  let labelsHtml = '';
  let defsHtml = '';

  (window.TERTIARY_EDGES || []).forEach(e => {
    const sEl = document.getElementById(e.sourceId);
    const tEl = document.getElementById(e.targetId);
    if (!sEl || !tEl) return;

    const sLeft = parseInt(sEl.style.left, 10) || sEl.offsetLeft;
    const sTop = parseInt(sEl.style.top, 10) || sEl.offsetTop;
    const sWidth = sEl.offsetWidth || 320;
    const sHeight = sEl.offsetHeight || 230;

    const tLeft = parseInt(tEl.style.left, 10) || tEl.offsetLeft;
    const tTop = parseInt(tEl.style.top, 10) || tEl.offsetTop;
    const tWidth = tEl.offsetWidth || 320;
    const tHeight = tEl.offsetHeight || 230;

    let x1, y1, x2, y2;
    if (sLeft + sWidth < tLeft) {
      x1 = sLeft + sWidth;
      y1 = sTop + sHeight / 2;
      x2 = tLeft;
      y2 = tTop + tHeight / 2;
    } else if (tLeft + tWidth < sLeft) {
      x1 = sLeft;
      y1 = sTop + sHeight / 2;
      x2 = tLeft + tWidth;
      y2 = tTop + tHeight / 2;
    } else {
      x1 = sLeft + sWidth / 2;
      y1 = sTop + sHeight;
      x2 = tLeft + tWidth / 2;
      y2 = tTop;
    }

    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const dx = Math.abs(x2 - x1) * 0.5;
    const d = 'M ' + x1 + ' ' + y1 + ' C ' + (x1 + dx) + ' ' + y1 + ', ' + (x2 - dx) + ' ' + y2 + ', ' + x2 + ' ' + y2;

    const safeId = e.id.replace(/[^a-zA-Z0-9_-]/g, '_');
    const markerEndId = 'marker-end-' + safeId;
    const markerStartId = 'marker-start-' + safeId;

    defsHtml += '<marker id="' + markerEndId + '" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
      '<path d="M 0 1 L 10 5 L 0 9 z" fill="' + e.color + '" />' +
    '</marker>' +
    '<marker id="' + markerStartId + '" viewBox="0 0 10 10" refX="3" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
      '<path d="M 10 1 L 0 5 L 10 9 z" fill="' + e.color + '" />' +
    '</marker>';

    const strokeWidth = (e.lineWidth || 3) * 1.2;
    const dashArray = e.lineStyle === 'dashed' ? '6,4' : 'none';
    const markerEndAttr = e.arrowMode !== 'none' ? 'marker-end="url(#' + markerEndId + ')"' : '';
    const markerStartAttr = e.arrowMode === 'double' ? 'marker-start="url(#' + markerStartId + ')"' : '';

    linesHtml += '<path id="svg-hit-' + e.id + '" d="' + d + '" stroke="transparent" stroke-width="24" fill="none" cursor="pointer" data-edge-id="' + e.id + '" onclick="openEdgePopover(this.dataset.edgeId, event)" />' +
      '<path id="svg-line-' + e.id + '" d="' + d + '" stroke="' + e.color + '" stroke-width="' + strokeWidth + '" stroke-dasharray="' + dashArray + '" fill="none" ' + markerEndAttr + ' ' + markerStartAttr + ' cursor="pointer" data-edge-id="' + e.id + '" onclick="openEdgePopover(this.dataset.edgeId, event)" />';

    const labelText = e.label || e.type || '关联';
    labelsHtml += '<div id="edge-label-' + e.id + '" class="a-my-island-work-edge-label" style="left:' + midX + 'px; top:' + midY + 'px;" data-edge-id="' + e.id + '" onclick="openEdgePopover(this.dataset.edgeId, event)">' + labelText + '</div>';
  });

  if (defs) defs.innerHTML = defsHtml;
  linesGroup.innerHTML = linesHtml;
  labelsLayer.innerHTML = labelsHtml;
  if (typeof observeTertiaryCards === 'function') observeTertiaryCards();
  if (typeof updateTertiaryMinimap === 'function') updateTertiaryMinimap();
}

// ==================== 原版 1:1 路线设置 Popover 逻辑 ====================

function openEdgePopover(edgeId, event) {
  if (event) event.stopPropagation();
  const edge = (window.TERTIARY_EDGES || []).find(x => x.id === edgeId);
  if (!edge) return;
  currentActiveEdgeId = edgeId;

  const popover = document.getElementById('tertiary-edge-popover');
  if (!popover) return;

  const btnHierF = document.getElementById('btn-edge-hier-forward');
  const btnHierB = document.getElementById('btn-edge-hier-backward');
  if (btnHierF) btnHierF.innerText = edge.sourceLabel + ' → ' + edge.targetLabel;
  if (btnHierB) btnHierB.innerText = edge.targetLabel + ' → ' + edge.sourceLabel;

  document.querySelectorAll('.btn-arrow-mode').forEach(b => {
    b.classList.toggle('is-active', b.dataset.mode === (edge.arrowMode || 'single'));
  });

  document.querySelectorAll('.btn-line-style').forEach(b => {
    b.classList.toggle('is-active', b.dataset.style === (edge.lineStyle || 'solid'));
  });

  const slider = document.getElementById('edge-width-slider');
  const display = document.getElementById('edge-width-display');
  if (slider) slider.value = edge.lineWidth || 3;
  if (display) display.innerText = (edge.lineWidth || 3) + '档';

  const colors = ['#6fa99b', '#e86f51', '#e6a63d', '#87ad50', '#55a9c8', '#6d8ed1', '#9b76c8', '#d878a5'];
  const colorsContainer = document.getElementById('edge-color-swatches');
  if (colorsContainer) {
    let swatchesHtml = '';
    colors.forEach(c => {
      const active = (edge.color === c) ? 'is-active' : '';
      swatchesHtml += '<button type="button" class="a-my-island-work-edge-color ' + active + '" style="--a-my-island-edge-color:' + c + ';" data-color="' + c + '" onclick="handleEdgeColorSelect(this.dataset.color)" title="' + c + '"></button>';
    });
    colorsContainer.innerHTML = swatchesHtml;
  }

  const labelInput = document.getElementById('edge-custom-label-input');
  if (labelInput) labelInput.value = edge.label || '';

  const typeSelect = document.getElementById('edge-type-select');
  if (typeSelect) typeSelect.value = edge.type || '关联';

  const sEl = document.getElementById(edge.sourceId);
  const tEl = document.getElementById(edge.targetId);
  if (sEl && tEl) {
    const sLeft = parseInt(sEl.style.left, 10) || sEl.offsetLeft;
    const sTop = parseInt(sEl.style.top, 10) || sEl.offsetTop;
    const tLeft = parseInt(tEl.style.left, 10) || tEl.offsetLeft;
    const tTop = parseInt(tEl.style.top, 10) || tEl.offsetTop;
    const midX = (sLeft + tLeft) / 2 + 160;
    const midY = (sTop + tTop) / 2 + 80;
    popover.style.left = midX + 'px';
    popover.style.top = midY + 'px';
  }

  popover.classList.remove('is-hidden');
}

function reverseEdgeDirection() {
  const edge = (window.TERTIARY_EDGES || []).find(x => x.id === currentActiveEdgeId);
  if (!edge) return;
  const tempId = edge.sourceId;
  edge.sourceId = edge.targetId;
  edge.targetId = tempId;

  const tempLabel = edge.sourceLabel;
  edge.sourceLabel = edge.targetLabel;
  edge.targetLabel = tempLabel;

  renderTertiaryEdges();
  openEdgePopover(edge.id);
  showIslandToast('🔄 已反转路线起点与终点');
}

function handleEdgeHierarchy(isReversed) {
  const edge = (window.TERTIARY_EDGES || []).find(x => x.id === currentActiveEdgeId);
  if (!edge) return;
  if (isReversed) {
    reverseEdgeDirection();
  } else {
    showIslandToast('✓ 已确认为当前上下级关系');
  }
}

function setEdgeArrowMode(mode) {
  const edge = (window.TERTIARY_EDGES || []).find(x => x.id === currentActiveEdgeId);
  if (!edge) return;
  edge.arrowMode = mode;
  document.querySelectorAll('.btn-arrow-mode').forEach(b => {
    b.classList.toggle('is-active', b.dataset.mode === mode);
  });
  renderTertiaryEdges();
  showIslandToast('路线箭头模式：' + (mode === 'single' ? '单向' : mode === 'double' ? '双向' : '无向'));
}

function setEdgeLineStyle(style) {
  const edge = (window.TERTIARY_EDGES || []).find(x => x.id === currentActiveEdgeId);
  if (!edge) return;
  edge.lineStyle = style;
  document.querySelectorAll('.btn-line-style').forEach(b => {
    b.classList.toggle('is-active', b.dataset.style === style);
  });
  renderTertiaryEdges();
  showIslandToast('路线样式：' + (style === 'solid' ? '实线' : '虚线'));
}

function handleEdgeWidthInput(val) {
  const edge = (window.TERTIARY_EDGES || []).find(x => x.id === currentActiveEdgeId);
  if (!edge) return;
  edge.lineWidth = parseInt(val, 10);
  const display = document.getElementById('edge-width-display');
  if (display) display.innerText = edge.lineWidth + '档';
  renderTertiaryEdges();
}

function handleEdgeColorSelect(color) {
  const edge = (window.TERTIARY_EDGES || []).find(x => x.id === currentActiveEdgeId);
  if (!edge) return;
  edge.color = color;
  renderTertiaryEdges();
  openEdgePopover(edge.id);
  showIslandToast('🎨 路线颜色已更新');
}

function handleEdgeLabelChange(val) {
  const edge = (window.TERTIARY_EDGES || []).find(x => x.id === currentActiveEdgeId);
  if (!edge) return;
  edge.label = val.trim();
  renderTertiaryEdges();
}

function handleEdgeTypeSelect(val) {
  const edge = (window.TERTIARY_EDGES || []).find(x => x.id === currentActiveEdgeId);
  if (!edge) return;
  edge.type = val;
  if (val !== 'none') {
    edge.label = val;
    const input = document.getElementById('edge-custom-label-input');
    if (input) input.value = val;
  }
  renderTertiaryEdges();
}

function handleDeleteActiveEdge() {
  if (!currentActiveEdgeId) return;
  window.TERTIARY_EDGES = (window.TERTIARY_EDGES || []).filter(x => x.id !== currentActiveEdgeId);
  const popover = document.getElementById('tertiary-edge-popover');
  if (popover) popover.classList.add('is-hidden');
  renderTertiaryEdges();
  showIslandToast('🗑️ 路线已成功移除');
}

function handleTertiaryStageClick(e) {
  if (!e.target.closest('#tertiary-edge-popover') && !e.target.closest('.a-my-island-work-edge-label') && !e.target.closest('.tertiary-tool-dropdown-wrapper')) {
    const popover = document.getElementById('tertiary-edge-popover');
    if (popover) popover.classList.add('is-hidden');
    document.querySelectorAll('.tertiary-dropdown-panel').forEach(p => p.classList.remove('is-open'));
  }
}

function startOrFinishConnecting(cardId, event) {
  if (event) event.stopPropagation();
  const card = document.getElementById(cardId);
  if (!connectingSourceCardId) {
    connectingSourceCardId = cardId;
    if (card) card.style.boxShadow = '0 0 0 3px #f05f35';
    showIslandToast('🔗 已选择起点【' + (card.dataset.label || cardId) + '】，请点击目标节点的 🔗 手柄建立路线');
  } else {
    const prevCard = document.getElementById(connectingSourceCardId);
    if (prevCard) prevCard.style.boxShadow = '';
    if (connectingSourceCardId !== cardId) {
      const sourceCard = prevCard;
      const targetCard = card;
      const newEdgeId = 'edge-' + Date.now();
      const newEdge = {
        id: newEdgeId,
        sourceId: connectingSourceCardId,
        targetId: cardId,
        sourceLabel: sourceCard ? (sourceCard.dataset.label || '节点') : '节点',
        targetLabel: targetCard ? (targetCard.dataset.label || '节点') : '节点',
        label: '关联',
        type: '关联',
        arrowMode: 'single',
        lineStyle: 'solid',
        lineWidth: 3,
        color: '#6fa99b'
      };
      window.TERTIARY_EDGES = window.TERTIARY_EDGES || [];
      window.TERTIARY_EDGES.push(newEdge);
      renderTertiaryEdges();
      openEdgePopover(newEdgeId);
      showIslandToast('✨ 路线建立成功！已打开路线设置');
    }
    connectingSourceCardId = null;
  }
}

// ==================== 终身岛民 1:1 全能工具栏功能实现 ====================

function toggleTertiaryDropdown(menuId) {
  const panel = document.getElementById('dropdown-' + menuId);
  const isOpen = panel && panel.classList.contains('is-open');
  document.querySelectorAll('.tertiary-dropdown-panel').forEach(p => p.classList.remove('is-open'));
  if (panel && !isOpen) {
    panel.classList.add('is-open');
  }
}


// ==========================================================================
// 通用三级页面：新建模块弹窗与新增节点全能系统 (不可操作 4 类 + 可操作打卡 4 类，支持批量添加)
// ==========================================================================

let tertiaryPickerCustomFields = [
  { key: '考点', val: '凑十破十口算' },
  { key: '难度', val: '★★★★☆' },
  { key: '模型', val: '齐次化韦达通解' }
];

function playNodeVideo(title) {
  showIslandToast('▶️ 正在播放：' + title + ' (1080P 高清微课)');
}

function viewNodeImage() {
  showIslandToast('🔍 已全屏查看验算草稿高清原图');
}

// --- 1. 新建模块弹窗交互 ---
function openTertiaryCreateModuleModal() {
  const modal = document.getElementById('modal-tertiary-create-module');
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('open');
    modal.classList.add('is-open');
    const nameInput = document.getElementById('input-tertiary-module-name');
    if (nameInput) {
      nameInput.value = '口算进退位专项突破';
      setTimeout(() => nameInput.focus(), 50);
    }
  }
}

function closeTertiaryCreateModuleModal() {
  const modal = document.getElementById('modal-tertiary-create-module');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('open');
    modal.classList.remove('is-open');
  }
}

function handleTertiaryCreateModuleBackdropClick(e) {
  if (e.target && e.target.id === 'modal-tertiary-create-module') {
    closeTertiaryCreateModuleModal();
  }
}

function pickTertiaryModulePresetIcon(btn, icon) {
  const grid = document.getElementById('tertiary-module-icon-preset-grid');
  if (grid) {
    grid.querySelectorAll('.icon-preset-btn').forEach(b => b.classList.remove('is-active'));
  }
  if (btn) btn.classList.add('is-active');
  const input = document.getElementById('input-tertiary-module-icon');
  if (input) input.value = icon;
}

function handleTertiaryModuleIconInput(val) {
  const grid = document.getElementById('tertiary-module-icon-preset-grid');
  if (!grid) return;
  const btns = grid.querySelectorAll('.icon-preset-btn');
  let matched = false;
  btns.forEach(b => {
    if (b.dataset.icon === val) {
      b.classList.add('is-active');
      matched = true;
    } else {
      b.classList.remove('is-active');
    }
  });
}

function handleConfirmTertiaryCreateModule() {
  const nameInput = document.getElementById('input-tertiary-module-name');
  const iconInput = document.getElementById('input-tertiary-module-icon');
  const descInput = document.getElementById('input-tertiary-module-desc');

  const name = nameInput ? nameInput.value.trim() : '';
  const icon = iconInput ? (iconInput.value.trim() || '⚡') : '⚡';
  const desc = descInput ? descInput.value.trim() : '';

  if (!name) {
    showIslandToast('⚠️ 请输入模块名称！');
    if (nameInput) nameInput.focus();
    return;
  }

  const world = document.getElementById('tertiary-canvas-world');
  if (!world) return;

  const cardId = 'tcard-' + tertiaryCardIndex;
  const newCard = document.createElement('div');
  newCard.className = 'a-my-island-work-node-card tertiary-card tertiary-custom-node';
  newCard.id = cardId;
  newCard.dataset.label = name;
  newCard.style.position = 'absolute';
  newCard.style.left = (120 + ((tertiaryCardIndex - 1) % 4) * 360) + 'px';
  newCard.style.top = (380 + Math.floor((tertiaryCardIndex - 1) / 4) * 260) + 'px';

  newCard.innerHTML = '<div class="work-node-card-header">' +
    '<span class="work-node-badge" style="background:#fef3c7; color:#b45309; border:1px solid #fde68a;">' + (window.tertiaryModuleUploadedImageSrc ? '<img src="' + window.tertiaryModuleUploadedImageSrc + '" style="width:16px;height:16px;object-fit:cover;border-radius:3px;vertical-align:middle;margin-right:2px;"/>' : icon) + ' 攻坚模块</span>' +
    '<span class="work-node-title">' + name + '</span>' +
    '<span style="font-size:10px; font-weight:800; color:#d97706;">课题核心</span>' +
  '</div>' +
  '<div class="work-node-body">' +
    '<p style="font-weight:750; color:#4a3a2a;">【课题目标与说明】</p>' +
    '<div style="background:#fffbeb; border:1px solid #fef3c7; padding:8px 10px; border-radius:8px; font-size:10.5px; color:#92400e; line-height:1.4;">' +
      (desc || '攻坚目标推进中，可通过右侧连线手柄拉取下一级实训节点。') +
    '</div>' +
    '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:8px; border-top:1px solid #f1e4d0; font-size:10.5px;">' +
      '<span style="color:#059669; font-weight:800;">● 状态：攻关中</span>' +
      '<span style="font-size:10px; color:#8c6b45;">创建于 10-28</span>' +
    '</div>' +
  '</div>' +
  '<div class="work-card-connect-handle" data-card-id="' + cardId + '" onclick="startOrFinishConnecting(this.dataset.cardId, event)" title="点击与下一节点建立路线连线">🔗</div>';

  world.appendChild(newCard);
  bindCardDragSingle(newCard);
  tertiaryCardIndex++;

  closeTertiaryCreateModuleModal();
  showIslandToast('✨ 成功创建三级攻坚模块：【' + name + '】');
  renderTertiaryEdges();
}

// --- 2. 新增节点弹窗交互 (不可操作 4 类 + 可操作 4 类，支持批量添加) ---
function openTertiaryAddNodeModal() {
  const modal = document.getElementById('modal-tertiary-add-node');
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('open');
    modal.classList.add('is-open');
    updateNodePickerBatchCount();
  }
}

function closeTertiaryAddNodeModal() {
  const modal = document.getElementById('modal-tertiary-add-node');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('open');
    modal.classList.remove('is-open');
  }
}

// 别名支持：无论以“新建节点”还是“新增节点”调用，均能触发
const openTertiaryCreateNodeModal = openTertiaryAddNodeModal;
const closeTertiaryCreateNodeModal = closeTertiaryAddNodeModal;

function handleTertiaryAddNodeBackdropClick(e) {
  if (e.target && e.target.id === 'modal-tertiary-add-node') {
    closeTertiaryAddNodeModal();
  }
}


// 场馆/模块分类筛选器切换
function filterNodePickerByPavilion(pavilionKey, btnEl) {
  const tabs = document.querySelectorAll('.node-filter-tab');
  tabs.forEach(t => t.classList.remove('is-active'));
  if (btnEl) btnEl.classList.add('is-active');

  const groups = document.querySelectorAll('#modal-tertiary-add-node .node-picker-category-group');
  groups.forEach(g => {
    const gp = g.dataset.groupPavilion;
    if (pavilionKey === 'all' || gp === pavilionKey) {
      g.style.display = 'flex';
    } else {
      g.style.display = 'none';
    }
  });

  const cards = document.querySelectorAll('#modal-tertiary-add-node .node-picker-card');
  cards.forEach(c => {
    const cp = c.dataset.pavilion;
    if (pavilionKey === 'all' || cp === pavilionKey) {
      c.style.display = 'flex';
    } else {
      c.style.display = 'none';
    }
  });
}

function toggleNodePickerSelection(type, cardEl, e) {
  if (!cardEl) return;
  const cb = cardEl.querySelector('.node-picker-checkbox');
  if (cb) {
    cb.checked = !cb.checked;
  }
  updateNodePickerBatchCount();
}

function updateNodePickerBatchCount() {
  const modal = document.getElementById('modal-tertiary-add-node');
  if (!modal) return;
  const cbs = modal.querySelectorAll('.node-picker-checkbox');
  let count = 0;
  cbs.forEach(cb => {
    const card = cb.closest('.node-picker-card');
    if (cb.checked) {
      count++;
      if (card) card.classList.add('is-selected');
    } else {
      if (card) card.classList.remove('is-selected');
    }
  });

  const countEl = document.getElementById('node-picker-batch-count');
  if (countEl) countEl.innerText = count;

  const btnConfirm = document.getElementById('btn-confirm-batch-add');
  if (btnConfirm) {
    btnConfirm.innerText = count > 0 ? ('➕ 批量添加所选 (' + count + '项) 至画布') : '➕ 批量添加所选节点至画布';
  }
}

function selectNodePickerCategory(category) {
  const modal = document.getElementById('modal-tertiary-add-node');
  if (!modal) return;
  const cbs = modal.querySelectorAll('.node-picker-checkbox');
  const nonActionableTypes = ['video', 'image', 'text', 'custom'];
  const actionableTypes = ['checkin-image', 'checkin-video', 'checkin-text', 'checkin-combo'];

  cbs.forEach(cb => {
    const t = cb.dataset.type;
    if (category === 'all') {
      cb.checked = true;
    } else if (category === 'non-actionable') {
      cb.checked = nonActionableTypes.includes(t);
    } else if (category === 'actionable') {
      cb.checked = actionableTypes.includes(t);
    }
  });

  updateNodePickerBatchCount();
}

function clearNodePickerSelection() {
  const modal = document.getElementById('modal-tertiary-add-node');
  if (!modal) return;
  modal.querySelectorAll('.node-picker-checkbox').forEach(cb => cb.checked = false);
  updateNodePickerBatchCount();
}

function addPickerCustomField() {
  const key = prompt('请输入自定义字段名称 (如：难点归因、关联典籍、公式模型)：', '推导耗时');
  if (!key) return;
  const val = prompt('请输入【' + key + '】字段数据取值：', '8分钟');
  if (!val) return;

  tertiaryPickerCustomFields.push({ key: key, val: val });
  const container = document.getElementById('picker-custom-fields-container');
  if (container) {
    const row = container.querySelector('.custom-field-tag-row');
    if (row) {
      const tag = document.createElement('span');
      tag.className = 'custom-preview-tag';
      tag.innerText = key + ': ' + val;
      row.appendChild(tag);
    }
  }
  showIslandToast('✓ 已为自定义卡片新增字段：' + key + ' = ' + val);
}

// 从 4 大通用卡片原型库中精准提取该原型录入的全部专属数据
function getCardConfigFromPicker(type) {
  let archetype = 'drill';
  if (type === 'card-goal' || type === 'goal') archetype = 'goal';
  else if (type === 'card-drill' || type === 'drill') archetype = 'drill';
  else if (type === 'card-habit' || type === 'habit') archetype = 'habit';
  else if (type === 'card-reflection' || type === 'reflection') archetype = 'reflection';
  else if (type === 'card-custom' || type === 'custom') archetype = 'custom';
  else if (type === 'card-text' || type === 'text') archetype = 'text';

  const titleInput = document.getElementById('node-title-' + type);
  const title = titleInput ? titleInput.value.trim() : '';

  const config = {
    archetype: archetype,
    title: title || (archetype === 'goal' ? '进退位口算满分达标目标' :
                     archetype === 'drill' ? '破十法心算 20 分钟极限实训' :
                     archetype === 'habit' ? '每日口算自律防守日课' :
                     '口算错因归因与反思便签')
  };

  if (archetype === 'goal') {
    const metricRows = document.querySelectorAll('#picker-goal-metrics-list .goal-metric-row');
    const metrics = [];
    metricRows.forEach(r => {
      const nEl = r.querySelector('.goal-metric-name');
      const vEl = r.querySelector('.goal-metric-val');
      const n = nEl ? nEl.value.trim() : '';
      const v = vEl ? vEl.value.trim() : '';
      if (n || v) metrics.push({ name: n || '量化指标', val: v || '达标' });
    });
    if (metrics.length === 0) metrics.push({ name: '单元口算正确率', val: '≥ 98%' });
    const acceptanceInput = document.getElementById('node-acceptance-card-goal');
    const deadlineInput = document.getElementById('node-deadline-card-goal');
    const deliverableInput = document.getElementById('node-deliverable-card-goal');
    const deliverableTypeSelect = document.getElementById('node-deliverable-type-card-goal');

    config.metrics = metrics;
    config.metric = metrics.join('；');
    config.acceptance = acceptanceInput ? acceptanceInput.value.trim() : '完成破十法思维实训与 3 次限时打卡，错题红笔归因清零。';
    config.deadline = deadlineInput ? deadlineInput.value.trim() : '2026-11-15T20:00';
    config.deliverableType = deliverableTypeSelect ? deliverableTypeSelect.value : 'photo';
    config.deliverable = deliverableInput ? deliverableInput.value.trim() : '';
  } else if (archetype === 'drill') {
    const formulaInput = document.getElementById('node-formula-card-drill');
    const durationSelect = document.getElementById('node-duration-card-drill');
    const evidenceSelect = document.getElementById('node-evidence-card-drill');
    const imgDescInput = document.getElementById('node-imgdesc-card-drill');

    config.formula = formulaInput ? formulaInput.value.trim() : '破十法心算通解模型：23 - 8 = 13 + (10 - 8) = 15，十位借一当十。';
    config.duration = durationSelect ? durationSelect.value : '20';
    config.evidence = evidenceSelect ? evidenceSelect.value : 'image';
    config.imageDesc = imgDescInput ? imgDescInput.value.trim() : '进退位口算题卡 30 题，红笔圈出借位退位点';
  } else if (archetype === 'habit') {
    const quoteInput = document.getElementById('node-quote-card-habit');
    const evidenceSelect = document.getElementById('node-evidence-card-habit');
    const checklistRows = document.querySelectorAll('#picker-habit-checklist-list .habit-checklist-row');
    const checklistItems = [];
    checklistRows.forEach(r => {
      const tEl = r.querySelector('.habit-checklist-text');
      const t = tEl ? tEl.value.trim() : '';
      if (t) checklistItems.push(t);
    });
    if (checklistItems.length === 0) {
      checklistItems.push('1. 独立审题不依赖草稿', '2. 错题立即红笔标退位点', '3. 做毕自主整理书桌');
    }

    config.quote = quoteInput ? quoteInput.value.trim() : '知行合一日课：“知之者不如好之者”；恪守每日晨间 15 分钟口算自律防守线。';
    config.checklistItems = checklistItems;
    config.checklist = checklistItems.join('；');
    config.evidence = evidenceSelect ? evidenceSelect.value : 'audio';
  } else if (archetype === 'reflection') {
    const causeInput = document.getElementById('node-cause-card-reflection');
    const impRows = document.querySelectorAll('#picker-reflection-improvements-list .reflection-improvement-row');
    const improvements = [];
    impRows.forEach(r => {
      const tEl = r.querySelector('.reflection-improvement-text');
      const t = tEl ? tEl.value.trim() : '';
      if (t) improvements.push(t);
    });
    if (improvements.length === 0) {
      improvements.push('1. 审题时先用红笔圈出加减运算符号', '2. 遇到个位不够减立即标出十位退位点');
    }

    config.cause = causeInput ? causeInput.value.trim() : '个位数不够减忘记从十位借 1 当 10，混淆减法借位原则；运算模型化速度大幅提升，审题需先圈出运算符！';
    config.improvements = improvements;
  } else if (archetype === 'custom') {
    const actSelect = document.getElementById('node-actionable-card-custom');
    config.isActionable = actSelect ? actSelect.value === 'true' : true;
    const evSelect = document.getElementById('node-evidence-card-custom');
    config.checkinType = evSelect ? evSelect.value : 'image';

    // 动态提取用户增减的所有自定义字段行
    const rows = document.querySelectorAll('#picker-custom-fields-list .picker-custom-field-row');
    config.fields = [];
    if (rows && rows.length > 0) {
      rows.forEach(r => {
        const kEl = r.querySelector('.picker-field-key');
        const vEl = r.querySelector('.picker-field-val');
        const k = kEl ? kEl.value.trim() : '';
        const v = vEl ? vEl.value.trim() : '';
        if (k) config.fields.push({ key: k, value: v });
      });
    }
    if (config.fields.length === 0) {
      config.fields = [
        { key: '研学指引', value: '实地记录长征系列火箭参数与推进剂特点' },
        { key: '核心交付', value: '制作简易气压水火箭模型并完成试飞' }
      ];
    }
  } else if (archetype === 'text') {
    const contentEl = document.getElementById('node-content-card-text');
    config.content = contentEl ? contentEl.value.trim() : '长征系列运载火箭谱系与航天知识备忘。本节点为纯文本查阅资料，阅读完毕即可进入后续实操。';
  }

  return config;
}

function quickAddSingleNode(type) {
  const config = getCardConfigFromPicker(type);
  const card = createTertiaryCustomPlanningCard(config);
  closeTertiaryAddNodeModal();
  showIslandToast('🎉 成功单加【' + config.title + '】至画布！已注入全部专属信息！');
  if (card && typeof card.scrollIntoView === 'function') {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function handleConfirmBatchAddNodes() {
  const modal = document.getElementById('modal-tertiary-add-node');
  if (!modal) return;
  const checked = modal.querySelectorAll('.node-picker-checkbox:checked');
  if (checked.length === 0) {
    showIslandToast('⚠️ 请先勾选需要批量添加的通用卡片！');
    return;
  }

  let addedCount = 0;
  checked.forEach(cb => {
    const type = cb.dataset.type;
    const config = getCardConfigFromPicker(type);
    createTertiaryCustomPlanningCard(config);
    addedCount++;
  });

  closeTertiaryAddNodeModal();
  showIslandToast('🎉 批量添加成功！已在画布生成 ' + addedCount + ' 张全新通用卡片（含全部自定义参数）！');
}

// --- 3. 生成 8 种三级节点卡片 (含连线手柄与打卡互动按钮) ---
// --- 3. 生成 4 大通用卡片原型卡片 (彻底取缔为各场馆单独设计卡片的繁冗模式) ---
function createTertiaryNodeCard(type, customTitle) {
  const world = document.getElementById('tertiary-canvas-world');
  if (!world) return;

  const cardId = 'tcard-' + tertiaryCardIndex;
  const card = document.createElement('div');
  const baseLeft = 80 + ((tertiaryCardIndex - 5) % 4) * 460;
  const baseTop = 400 + Math.floor(Math.max(0, tertiaryCardIndex - 5) / 4) * 380;
  card.id = cardId;
  card.style.position = 'absolute';
  card.style.left = baseLeft + 'px';
  card.style.top = baseTop + 'px';

  let headerHtml = '';
  let bodyHtml = '';
  let cardClass = 'a-my-island-work-node-card tertiary-card ';

  // 标准归一化映射：将可能传入的旧分类映射为 4 大通用卡片
  let archetype = 'drill';
  if (type === 'card-goal' || type === 'goal' || type.includes('target') || type.includes('milestone') || type.includes('pact')) {
    archetype = 'goal';
  } else if (type === 'card-habit' || type === 'habit' || type.includes('cult') || type.includes('recite') || type.includes('tree')) {
    archetype = 'habit';
  } else if (type === 'card-reflection' || type === 'reflection' || type.includes('review') || type.includes('cog') || type.includes('note')) {
    archetype = 'reflection';
  } else if (type === 'card-custom' || type === 'custom') {
    archetype = 'custom';
  } else if (type === 'card-text' || type === 'text' || type.includes('memo') || type.includes('read')) {
    archetype = 'text';
  } else {
    archetype = 'drill';
  }

  // === 1. 🎯 目标分解卡原型 (card-goal) ===
  if (archetype === 'goal') {
    cardClass += 'tertiary-goal-card';
    card.style.width = '340px';
    const title = customTitle || '阶段攻坚目标与能力通关里程碑';
    card.dataset.label = title;
    headerHtml = '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + cardId + '\', event)" title="双击标题栏最小化/展开卡片">' +
      '<span class="work-node-badge" style="background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe;">🎯 目标分解</span>' +
      '<span class="work-node-title">' + title + '</span>' +
      '<span id="status-text-' + cardId + '" style="font-size:10px; font-weight:800; color:#1d4ed8;">阶段里程碑</span>' +
    '</div>';
    bodyHtml = '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
      '<div style="background:#f8fafc; border:1px solid #bfdbfe; border-radius:8px; padding:6px 8px;" onclick="event.stopPropagation()">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">' +
          '<span style="font-size:10.5px; font-weight:850; color:#1e3a8a;">🎯 量化通关指标 (指标名 / 指标数据)</span>' +
          '<button type="button" onclick="addCardGoalMetricItem(\'' + cardId + '-metrics\', event)" style="padding:1px 6px; font-size:9.5px; font-weight:800; background:#dbeafe; color:#1d4ed8; border:1px solid #93c5fd; border-radius:4px; cursor:pointer;">➕ 新增指标</button>' +
        '</div>' +
        '<div style="display:grid; grid-template-columns:1fr 1fr 20px; gap:4px; font-size:9.5px; font-weight:800; color:#64748b; padding:0 2px 2px;">' +
          '<span>指标名</span><span>指标数据</span><span></span>' +
        '</div>' +
        '<div id="' + cardId + '-metrics" style="display:flex; flex-direction:column; gap:4px;">' +
          '<div class="card-goal-metric-item" style="display:grid; grid-template-columns:1fr 1fr 20px; align-items:center; gap:4px;">' +
            '<input type="text" value="核心能力测评达标率" placeholder="指标名" class="add-module-text-input goal-metric-name" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#1e3a8a; font-weight:700;">' +
            '<input type="text" value="≥ 95%" placeholder="指标数据" class="add-module-text-input goal-metric-val" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#15803d; font-weight:800;">' +
            '<button type="button" onclick="removeCardGoalMetricItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px; font-weight:900; cursor:pointer; line-height:1;">✕</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="background:#eff6ff; border:1px dashed #93c5fd; padding:6px 8px; border-radius:8px; font-size:10.5px; color:#1e40af;">' +
        '📋 验收标准：完成全部前置实训与习惯打卡，通过单元综合测评或见证验收。' +
      '</div>' +
      '<div style="display:flex; align-items:center; justify-content:space-between; gap:6px; background:#f0f9ff; border:1px solid #bae6fd; border-radius:7px; padding:4px 8px; font-size:10.5px;" onclick="event.stopPropagation()">' +
        '<span style="font-weight:800; color:#0369a1; white-space:nowrap;">📅 期望完成截止时间:</span>' +
        '<input type="datetime-local" id="goal-deadline-' + cardId + '" value="2026-11-15T20:00" onclick="if(this.showPicker) this.showPicker();" onchange="showIslandToast(\'📅 已更新期望完成截止时间：\' + this.value.replace(\'T\', \' \'))" style="border:1px solid #7dd3fc; border-radius:5px; padding:1px 5px; font-size:10px; font-weight:800; color:#0c4a6e; background:#fff; cursor:pointer;">' +
      '</div>' +
      '<div style="background:#fffbeb; border:1px solid #fcd34d; border-radius:8px; padding:6px 8px; display:flex; flex-direction:column; gap:5px;" onclick="event.stopPropagation()">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">' +
          '<span style="font-size:10.5px; font-weight:850; color:#92400e; white-space:nowrap;">📦 交付物提交:</span>' +
          '<select id="goal-deliverable-type-' + cardId + '" onchange="switchGoalDeliverableMode(\'' + cardId + '\', this.value)" style="flex:1; height:22px; font-size:10px; font-weight:800; color:#92400e; background:#fff; border:1px solid #f59e0b; border-radius:5px; padding:0 4px; cursor:pointer;">' +
            '<option value="photo" selected>📷 拍照提交</option>' +
            '<option value="video">🎥 视频提交</option>' +
            '<option value="text">✍️ 文字记录提交</option>' +
          '</select>' +
        '</div>' +
        '<div id="goal-media-box-' + cardId + '" onclick="triggerGoalDeliverableUpload(\'' + cardId + '\', event)" style="background:#fff; border:1.5px dashed #f59e0b; border-radius:6px; padding:6px 8px; font-size:10px; color:#b45309; font-weight:800; cursor:pointer; text-align:center;">📷 点击拍照或上传交付物照片</div>' +
        '<textarea id="goal-deliverable-text-' + cardId + '" class="add-module-text-input" placeholder="✍️ 输入交付物文字记录..." style="display:none; width:100%; box-sizing:border-box; height:38px; font-size:10px; padding:3px 6px; resize:vertical; background:#fff;"></textarea>' +
      '</div>' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px;" onclick="event.stopPropagation()">' +
        '<span style="color:#64748b; font-size:10px; font-weight:700;">支持图文交付归档</span>' +
        '<button type="button" id="btn-deposit-' + cardId + '" class="card-graphic-pill" style="background:linear-gradient(135deg, #f59e0b, #d97706); color:#fff; border:1px solid #b45309; font-weight:850; padding:4px 10px; cursor:pointer; box-shadow:0 2px 6px rgba(217,119,6,0.25);" onclick="depositGoalToAchievement(\'' + cardId + '\', event)">🏆 记录到成就馆</button>' +
      '</div>' +
    '</div>';

  // === 2. ⚡ 攻坚实训卡原型 (card-drill) ===
  } else if (archetype === 'drill') {
    cardClass += 'tertiary-drill-card';
    card.style.width = '330px';
    const title = customTitle || '核心重点技能限时攻坚实训';
    card.dataset.label = title;
    headerHtml = '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + cardId + '\', event)" title="双击标题栏最小化/展开卡片">' +
      '<span class="work-node-badge" style="background:#fef3c7; color:#b45309; border:1px solid #fde68a;">⚡ 攻坚实训</span>' +
      '<span class="work-node-title">' + title + '</span>' +
      '<span style="font-size:10px; font-weight:800; color:#b45309;" id="status-text-' + cardId + '">限时打卡</span>' +
    '</div>';
    bodyHtml = '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
      '<p style="font-weight:750; color:#4a3a2a; font-size:11.5px; margin:0;">【攻坚要领】限时心流专注演算或动作实训，拍照手稿存证并打卡。</p>' +
      '<div style="display:flex; align-items:center; justify-content:space-between; gap:6px; background:#fffbeb; border:1px dashed #fcd34d; padding:5px 8px; border-radius:8px; font-size:10.5px; color:#92400e;" onclick="event.stopPropagation()">' +
        '<span style="font-weight:800;">⏱️ 计划专注时长:</span>' +
        '<select id="drill-duration-select-' + cardId + '" onchange="updateDrillCardDuration(\'' + cardId + '\', this.value)" style="border:1px solid #f59e0b; border-radius:5px; padding:1px 6px; font-size:10.5px; font-weight:800; color:#92400e; background:#fff; cursor:pointer;">' +
          '<option value="5">5 分钟 (微习惯快练)</option>' +
          '<option value="10">10 分钟 (轻量专攻)</option>' +
          '<option value="15">15 分钟 (日常快练)</option>' +
          '<option value="20" selected>20 分钟 (标准实训)</option>' +
          '<option value="25">25 分钟 (深度番茄)</option>' +
          '<option value="30">30 分钟 (强化攻坚)</option>' +
          '<option value="45">45 分钟 (全套模拟)</option>' +
        '</select>' +
      '</div>' +
      '<div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:6px 8px; display:flex; flex-direction:column; gap:5px;" onclick="event.stopPropagation()">' +
        '<span style="font-size:10.5px; font-weight:850; color:#0369a1;">🎬 图片视频说明</span>' +
        '<div id="drill-img-box-' + cardId + '" class="node-img-preview-box" onclick="triggerDrillCardImage(\'' + cardId + '\', event)" style="margin:0; padding:7px 8px; background:#fff; border:1.5px dashed #38bdf8; border-radius:6px; cursor:pointer; text-align:center;">' +
          '<span style="font-size:10.5px; font-weight:800; color:#0284c7;">📷 / 🎥 点击上传图片或视频</span>' +
        '</div>' +
        '<input type="text" id="drill-img-desc-' + cardId + '" class="add-module-text-input" value="实训题干或动作分解示范说明" placeholder="✍️ 输入图片或视频说明..." style="width:100%; box-sizing:border-box; height:22px; font-size:10px; padding:1px 6px; background:#fff; color:#0c4a6e; font-weight:700;">' +
      '</div>' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px;">' +
        '<span id="drill-footer-dur-' + cardId + '">预计专注：⏱️ 20 分钟</span>' +
        '<button class="card-graphic-pill pill-timer" onclick="handleNodeCheckin(this, \'' + cardId + '\', \'timer\')">🌟 立即打卡</button>' +
      '</div>' +
    '</div>';

  // === 3. 🌿 习惯践行卡原型 (card-habit) ===
  } else if (archetype === 'habit') {
    cardClass += 'tertiary-habit-card';
    card.style.width = '330px';
    const title = customTitle || '日常知行合一践行与自律防守日课';
    card.dataset.label = title;
    headerHtml = '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + cardId + '\', event)" title="双击标题栏最小化/展开卡片">' +
      '<span class="work-node-badge" style="background:#ecfdf5; color:#047857; border:1px solid #a7f3d0;">🌿 习惯践行</span>' +
      '<span class="work-node-title">' + title + '</span>' +
      '<span style="font-size:10px; font-weight:800; color:#047857;" id="status-text-' + cardId + '">日常自律</span>' +
    '</div>';
    bodyHtml = '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
      '<p style="font-weight:750; color:#14532d; font-size:11.5px; margin:0;">【知行合一】日常恒常践行与自律防守，完成防守清单核验与录音/拍照存证。</p>' +
      '<div style="background:#ecfdf5; border:1px dashed #6ee7b7; padding:6px 8px; border-radius:8px; font-size:10.5px; color:#065f46;" onclick="event.stopPropagation()">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">' +
          '<span style="font-size:10.5px; font-weight:850; color:#065f46;">🛡️ 践行防守清单 (可增删多项)</span>' +
          '<button type="button" onclick="addCardHabitChecklistItem(\'' + cardId + '-checklist\', event)" style="padding:1px 6px; font-size:9.5px; font-weight:800; background:#d1fae5; color:#047857; border:1px solid #6ee7b7; border-radius:4px; cursor:pointer;">➕ 新增清单项</button>' +
        '</div>' +
        '<div id="' + cardId + '-checklist" style="display:flex; flex-direction:column; gap:4px;">' +
          '<div class="card-habit-checklist-item" style="display:grid; grid-template-columns:16px 1fr 20px; align-items:center; gap:4px;">' +
            '<input type="checkbox" checked style="margin:0; accent-color:#059669; cursor:pointer;">' +
            '<input type="text" value="1. 独立审题不依赖草稿" placeholder="输入践行防守清单项..." class="add-module-text-input habit-checklist-input" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#065f46; font-weight:700; background:#fff;">' +
            '<button type="button" onclick="removeCardHabitChecklistItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px; font-weight:900; cursor:pointer; line-height:1;">✕</button>' +
          '</div>' +
          '<div class="card-habit-checklist-item" style="display:grid; grid-template-columns:16px 1fr 20px; align-items:center; gap:4px;">' +
            '<input type="checkbox" checked style="margin:0; accent-color:#059669; cursor:pointer;">' +
            '<input type="text" value="2. 错题立即红笔标退位点" placeholder="输入践行防守清单项..." class="add-module-text-input habit-checklist-input" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#065f46; font-weight:700; background:#fff;">' +
            '<button type="button" onclick="removeCardHabitChecklistItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px; font-weight:900; cursor:pointer; line-height:1;">✕</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px;">' +
        '<span>预计用时：⏱️ 15 分钟</span>' +
        '<button class="card-graphic-pill pill-checkin" onclick="handleNodeCheckin(this, \'' + cardId + '\', \'habit\')">🌿 知行打卡</button>' +
      '</div>' +
    '</div>';

  // === 4. 📝 评估复盘卡原型 (card-reflection) ===
  } else if (archetype === 'reflection') {
    cardClass += 'tertiary-reflection-card';
    card.style.width = '330px';
    const title = customTitle || '攻坚反思总结与提升复盘卡';
    card.dataset.label = title;
    headerHtml = '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + cardId + '\', event)" title="双击标题栏最小化/展开卡片">' +
      '<span class="work-node-badge" style="background:#f5f3ff; color:#7c3aed; border:1px solid #ddd6fe;">📝 评估复盘</span>' +
      '<span class="work-node-title">' + title + '</span>' +
      '<span style="font-size:10px; font-weight:800; color:#7c3aed;" id="status-text-' + cardId + '">📝 待复盘</span>' +
    '</div>';
    bodyHtml = '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
      '<p style="font-weight:750; color:#581c87; font-size:11.5px; margin:0; line-height:1.45;">【复盘说明】总结阶段卡点原因与反思收获，制定针对性提升行动清单。</p>' +
      '<div style="background:#f5f3ff; border:1px dashed #c4b5fd; padding:6px 8px; border-radius:8px; font-size:10.5px; color:#5b21b6;" onclick="event.stopPropagation()">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">' +
          '<span style="font-size:10.5px; font-weight:850; color:#5b21b6;">🚀 提升清单 (可增删提升项)</span>' +
          '<button type="button" onclick="addCardReflectionImprovementItem(\'' + cardId + '-improvements\', event)" style="padding:1px 6px; font-size:9.5px; font-weight:800; background:#ede9fe; color:#6d28d9; border:1px solid #c4b5fd; border-radius:4px; cursor:pointer;">➕ 新增提升项</button>' +
        '</div>' +
        '<div id="' + cardId + '-improvements" style="display:flex; flex-direction:column; gap:4px;">' +
          '<div class="card-reflection-improvement-item" style="display:grid; grid-template-columns:16px 1fr 20px; align-items:center; gap:4px;">' +
            '<input type="checkbox" checked style="margin:0; accent-color:#7c3aed; cursor:pointer;">' +
            '<input type="text" value="1. 审题时先用红笔圈出加减运算符号" placeholder="输入提升项..." class="add-module-text-input reflection-improvement-input" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#5b21b6; font-weight:700; background:#fff;">' +
            '<button type="button" onclick="removeCardReflectionImprovementItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px; font-weight:900; cursor:pointer; line-height:1;">✕</button>' +
          '</div>' +
          '<div class="card-reflection-improvement-item" style="display:grid; grid-template-columns:16px 1fr 20px; align-items:center; gap:4px;">' +
            '<input type="checkbox" checked style="margin:0; accent-color:#7c3aed; cursor:pointer;">' +
            '<input type="text" value="2. 遇到个位不够减立即标出十位退位点" placeholder="输入提升项..." class="add-module-text-input reflection-improvement-input" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#5b21b6; font-weight:700; background:#fff;">' +
            '<button type="button" onclick="removeCardReflectionImprovementItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px; font-weight:900; cursor:pointer; line-height:1;">✕</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px;">' +
        '<button type="button" class="card-graphic-pill" style="background:#ede9fe; color:#6d28d9; border:1px solid #c4b5fd; font-weight:800; cursor:pointer;" onclick="deriveNodesFromReflectionCard(\'' + cardId + '\', event)">🌱 派生实训节点</button>' +
        '<button class="card-graphic-pill pill-reflection" onclick="handleNodeCheckin(this, \'' + cardId + '\', \'text\')">✍️ 笃行复盘</button>' +
      '</div>' +
    '</div>';
  }

  card.className = cardClass;
  card.innerHTML = headerHtml + bodyHtml +
    '<div class="work-card-connect-handle" data-card-id="' + cardId + '" onclick="startOrFinishConnecting(this.dataset.cardId, event)" title="点击与下一节点建立路线连线">🔗</div>';

  world.appendChild(card);
  bindCardDragSingle(card);
  tertiaryCardIndex++;
  renderTertiaryEdges();
}

function toggleTertiaryCustomCardField(cardId, fieldType) {
  const el = document.getElementById('cfield-' + fieldType + '-' + cardId);
  if (!el) return;
  const isHidden = el.style.display === 'none';
  el.style.display = isHidden ? 'block' : 'none';
  const labelMap = { video: '📹 视频字段', image: '🖼️ 图片字段', text: '📝 文字字段' };
  showIslandToast((isHidden ? '✓ 已为自定义卡片添加' : '✕ 已为自定义卡片隐藏') + labelMap[fieldType]);
  renderTertiaryEdges();
}

// 综合打卡卡片随意添加打卡字段 (图片/文字/视频，支持自定义打卡项名称)
function addComboCardField(cardId, fieldType) {
  const stack = document.getElementById('combo-fields-stack-' + cardId);
  if (!stack) return;

  const typeLabels = { image: '图片打卡项', text: '文字打卡项', video: '视频打卡项' };
  const defaultNames = {
    image: '题设演算手稿拍照存证',
    text: '错因归因与反思心得',
    video: '消元推导费曼口述微课'
  };
  const promptVal = prompt('请输入自定义【' + (typeLabels[fieldType] || '打卡项') + '】名称：', defaultNames[fieldType]);
  if (promptVal === null) return; // 取消
  const finalName = promptVal.trim() || defaultNames[fieldType];

  const now = Date.now();
  const fid = 'chk-field-' + fieldType + '-' + now;
  const titleId = 'title-' + fieldType + '-' + now;
  let fieldHtml = '';

  if (fieldType === 'image') {
    fieldHtml = '<div class="combo-field-item field-image" id="' + fid + '">' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px; gap:6px;">' +
        '<div style="display:flex; align-items:center; gap:4px; min-width:0; flex:1;">' +
          '<span class="combo-field-title" id="' + titleId + '" contenteditable="true" onblur="handleRenameCheckinItem(this)" title="点击可直接修改打卡项名称" style="color:#0e7490;">📷 ' + finalName + '</span>' +
          '<button type="button" class="mini-rename-btn" data-target="' + titleId + '" data-label="图片打卡项" onclick="promptRenameCheckinItem(this.dataset.target, this.dataset.label)">✏️ 改名</button>' +
        '</div>' +
        '<button type="button" class="mini-checkin-subbtn" data-card-id="' + cardId + '" data-field="image" onclick="handleSubFieldCheckin(this.dataset.cardId, this.dataset.field, this)">📷 拍照打卡</button>' +
      '</div>' +
      '<div style="font-size:10px; color:#0891b2; background:#f0fdfa; border:1px dashed #99f6e4; padding:4px 6px; border-radius:4px;">草稿纸演算打卡</div>' +
    '</div>';
    showIslandToast('✓ 已为综合卡片新增【' + finalName + '】图片打卡项');
  } else if (fieldType === 'text') {
    fieldHtml = '<div class="combo-field-item field-text" id="' + fid + '">' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px; gap:6px;">' +
        '<div style="display:flex; align-items:center; gap:4px; min-width:0; flex:1;">' +
          '<span class="combo-field-title" id="' + titleId + '" contenteditable="true" onblur="handleRenameCheckinItem(this)" title="点击可直接修改打卡项名称" style="color:#581c87;">✍️ ' + finalName + '</span>' +
          '<button type="button" class="mini-rename-btn" data-target="' + titleId + '" data-label="文字打卡项" onclick="promptRenameCheckinItem(this.dataset.target, this.dataset.label)">✏️ 改名</button>' +
        '</div>' +
        '<button type="button" class="mini-checkin-subbtn" data-card-id="' + cardId + '" data-field="text" onclick="handleSubFieldCheckin(this.dataset.cardId, this.dataset.field, this)">✍️ 心得打卡</button>' +
      '</div>' +
      '<input type="text" placeholder="输入反思心得..." style="width:100%; box-sizing:border-box; padding:3px 6px; font-size:10px; border:1px solid #e9d5ff; border-radius:4px;">' +
    '</div>';
    showIslandToast('✓ 已为综合卡片新增【' + finalName + '】文字打卡项');
  } else if (fieldType === 'video') {
    fieldHtml = '<div class="combo-field-item field-video" id="' + fid + '">' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px; gap:6px;">' +
        '<div style="display:flex; align-items:center; gap:4px; min-width:0; flex:1;">' +
          '<span class="combo-field-title" id="' + titleId + '" contenteditable="true" onblur="handleRenameCheckinItem(this)" title="点击可直接修改打卡项名称" style="color:#1e40af;">🎥 ' + finalName + '</span>' +
          '<button type="button" class="mini-rename-btn" data-target="' + titleId + '" data-label="视频打卡项" onclick="promptRenameCheckinItem(this.dataset.target, this.dataset.label)">✏️ 改名</button>' +
        '</div>' +
        '<button type="button" class="mini-checkin-subbtn" data-card-id="' + cardId + '" data-field="video" onclick="handleSubFieldCheckin(this.dataset.cardId, this.dataset.field, this)">🎥 讲题打卡</button>' +
      '</div>' +
      '<div style="font-size:10px; color:#2563eb; background:#eff6ff; border:1px dashed #bfdbfe; padding:4px 6px; border-radius:4px;">费曼口述微视频录像打卡</div>' +
    '</div>';
    showIslandToast('✓ 已为综合卡片新增【' + finalName + '】视频打卡项');
  }

  const div = document.createElement('div');
  div.innerHTML = fieldHtml;
  stack.appendChild(div.firstElementChild);
  renderTertiaryEdges();
}

// 子打卡字段响应交互
function handleSubFieldCheckin(cardId, type, btn) {
  if (!btn || btn.classList.contains('is-checked')) return;
  btn.classList.add('is-checked');
  btn.innerText = '✓ 已打卡';
  btn.disabled = true;
  btn.style.background = '#10b981';
  btn.style.color = '#fff';
  btn.style.borderColor = '#059669';

  const typeLabels = { image: '图片打卡', text: '文字打卡', video: '视频打卡' };
  showIslandToast('✨ 【' + (typeLabels[type] || '打卡字段') + '】完成！阶段存证达成，自律记录已入库！');

  // 检查是否所有子打卡都已完成，若已全完成则联动主打卡
  const stack = document.getElementById('combo-fields-stack-' + cardId);
  if (stack) {
    const allBtns = stack.querySelectorAll('.mini-checkin-subbtn');
    const allDone = Array.from(allBtns).every(b => b.classList.contains('is-checked'));
    if (allDone) {
      const mainBtn = document.getElementById('btn-chk-' + cardId);
      if (mainBtn && !mainBtn.classList.contains('is-checked')) {
        handleNodeCheckin(mainBtn, cardId, 'combo');
      }
    }
  }
}

// 主打卡按钮响应逻辑 (所有打卡节点均有打卡按钮)
function handleNodeCheckin(btn, cardId, type) {
  if (!btn || btn.classList.contains('is-checked')) return;

  btn.classList.add('is-checked');
  btn.innerHTML = '✓ 已完成打卡 (10/28)';
  btn.disabled = true;

  const badge = document.getElementById('badge-' + cardId);
  if (badge) {
    badge.classList.add('is-completed');
    badge.innerHTML = '✓ 已打卡';
  }

  const statusText = document.getElementById('status-text-' + cardId);
  if (statusText) {
    statusText.innerText = '状态：已打卡归档 ✓';
    statusText.style.color = '#059669';
    statusText.style.fontWeight = '800';
  }

  if (type === 'combo') {
    const stack = document.getElementById('combo-fields-stack-' + cardId);
    if (stack) {
      stack.querySelectorAll('.mini-checkin-subbtn').forEach(b => {
        b.classList.add('is-checked');
        b.innerText = '✓ 已打卡';
        b.disabled = true;
        b.style.background = '#10b981';
        b.style.color = '#fff';
        b.style.borderColor = '#059669';
      });
    }
  }

  // 奖励与反馈
  const rewardMap = {
    image: { label: '草稿验算拍照打卡', badge: '📷 验算存证' },
    video: { label: '费曼讲题视频打卡', badge: '🎬 视频讲解' },
    text: { label: '心得反思文字打卡', badge: '✍️ 顿悟便签' },
    combo: { label: '口算综合打卡', badge: '🌟 综合攻坚' }
  };
  const r = rewardMap[type] || { label: '节点打卡', badge: '🎯 阶段存证' };
  const cardEl = document.getElementById(cardId);
  const cTitle = cardEl ? (cardEl.dataset.label || (cardEl.querySelector('.work-node-title') ? cardEl.querySelector('.work-node-title').textContent : r.label)) : r.label;

  triggerGlobalCheckinClosedLoop({
    taskKey: 'node-' + cardId,
    pavilionId: currentWsPavilion || 'study',
    projId: window.currentTertiaryProjId,
    title: cTitle,
    focusMinutes: 20
  });

  showIslandToast('🎉 【' + cTitle + '】打卡成功！已回写项目甘特、履约率与每日随记！');
}

// 自定义打卡项与卡片名称重命名交互函数
function promptRenameCardTitle(cardId) {
  const card = document.getElementById(cardId);
  const titleEl = document.getElementById('node-title-display-' + cardId);
  const taskEl = document.getElementById('checkin-name-text-' + cardId);
  const current = titleEl ? titleEl.innerText.trim() : (card ? card.dataset.label : '');
  const next = prompt('请输入自定义打卡项名称：', current);
  if (next && next.trim()) {
    const clean = next.trim();
    if (titleEl) titleEl.innerText = clean;
    if (taskEl) taskEl.innerText = clean;
    if (card) card.dataset.label = clean;
    showIslandToast('✓ 已将打卡项名称自定义为：【' + clean + '】');
  }
}

function handleRenameCardTitle(el, cardId) {
  if (!el) return;
  const clean = el.innerText.trim();
  if (!clean) return;
  const card = document.getElementById(cardId);
  if (card) card.dataset.label = clean;
  const taskEl = document.getElementById('checkin-name-text-' + cardId);
  if (taskEl) taskEl.innerText = clean;
  showIslandToast('✓ 已保存自定义打卡项名称：【' + clean + '】');
}

function handleRenameNodeTask(el, cardId) {
  if (!el) return;
  const clean = el.innerText.trim();
  if (!clean) return;
  const card = document.getElementById(cardId);
  if (card) card.dataset.label = clean;
  const titleEl = document.getElementById('node-title-display-' + cardId);
  if (titleEl) titleEl.innerText = clean;
  showIslandToast('✓ 已保存自定义打卡项名称：【' + clean + '】');
}

function promptRenameCheckinItem(targetId, typeLabel) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const current = el.innerText.replace(/^[📷✍️🎥]s*/, '').trim();
  const next = prompt('请输入自定义【' + (typeLabel || '打卡项') + '】名称：', current);
  if (next && next.trim()) {
    const match = el.innerText.match(/^[📷✍️🎥]/);
    const icon = match ? match[0] : '📌';
    el.innerText = icon + ' ' + next.trim();
    showIslandToast('✓ 已将【' + (typeLabel || '打卡项') + '】名称自定义为：' + next.trim());
  }
}

function handleRenameCheckinItem(el) {
  if (!el) return;
  const clean = el.innerText.trim();
  if (clean) {
    showIslandToast('✓ 已保存自定义打卡项名称：' + clean);
  }
}

// 自定义卡片动态添加属性
function addCustomFieldToCard(cardId) {
  const key = prompt('请输入新属性字段名称 (如：解题模型、验算工具、突破点)：', '解题模型');
  if (!key) return;
  const val = prompt('请输入【' + key + '】数据取值：', '判别式Δ消元法');
  if (!val) return;

  const container = document.getElementById('tcustom-fields-' + cardId);
  if (container) {
    const row = document.createElement('div');
    row.className = 'custom-field-row';
    row.innerHTML = '<span class="field-key">' + key + ':</span><span class="field-val">' + val + '</span>';
    container.appendChild(row);
    showIslandToast('✓ 已为卡片追加字段：' + key + ' = ' + val);
    renderTertiaryEdges();
  }
}

function createCustomModule(type) {

  document.querySelectorAll('.tertiary-dropdown-panel').forEach(p => p.classList.remove('is-open'));
  const typeMap = {
    domain: { name: '经营', icon: '🏛️', color: '#10b981', bg: '#ecfdf5' },
    project: { name: '计划', icon: '📋', color: '#2563eb', bg: '#eff6ff' },
    stage: { name: '目标', icon: '🎯', color: '#f59e0b', bg: '#fefce8' },
    task: { name: '委托', icon: '⚡', color: '#dc2626', bg: '#fef2f2' }
  };
  const m = typeMap[type] || typeMap.task;
  const title = prompt('请输入新建【' + m.name + '】模块标题：', m.name + '攻坚切片 ' + tertiaryCardIndex);
  if (!title) return;

  const world = document.getElementById('tertiary-canvas-world');
  if (!world) return;

  const cardId = 'tcard-' + tertiaryCardIndex;
  const newCard = document.createElement('div');
  newCard.className = 'a-my-island-work-node-card tertiary-card';
  newCard.id = cardId;
  newCard.dataset.label = title;
  newCard.style.position = 'absolute';
  newCard.style.left = (120 + (tertiaryCardIndex - 1) * 70) + 'px';
  newCard.style.top = '380px';
  newCard.innerHTML = '<div class="work-node-card-header">' +
    '<span class="work-node-badge" style="background:' + m.bg + '; color:' + m.color + '; border:1px solid ' + m.color + '44;">' + m.icon + ' ' + m.name + '</span>' +
    '<span class="work-node-title">' + title + '</span>' +
    '<span style="font-size:10px; font-weight:800; color:' + m.color + ';">进行中</span>' +
  '</div>' +
  '<div class="work-node-body">' +
    '<p style="font-weight:750; color:#4a3a2a;">【专项课题分解】新录入的三级攻坚执行单元。</p>' +
    '<div style="background:#f9fafb; border:1px solid #e5e7eb; padding:8px; border-radius:8px; font-size:10.5px; color:#4b5563;">' +
      '📌 任务推进中，可通过右侧 🔗 手柄建立上下级路线。' +
    '</div>' +
    '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:8px; border-top:1px solid #f1e4d0; font-size:10.5px;">' +
      '<span>状态：活跃</span>' +
      '<button class="card-graphic-pill pill-brush" style="padding:2px 8px; font-size:10px;" data-msg="已标记推进" onclick="showIslandToast(this.dataset.msg)">✓ 打卡推进</button>' +
    '</div>' +
  '</div>' +
  '<div class="work-card-connect-handle" data-card-id="' + cardId + '" onclick="startOrFinishConnecting(this.dataset.cardId, event)" title="点击与下一节点建立路线连线">🔗</div>';

  world.appendChild(newCard);
  pushTertiaryHistory();
  bindCardDragSingle(newCard);
  tertiaryCardIndex++;

  const activeCountEl = document.getElementById('tertiary-top-active-count');
  if (activeCountEl) {
    const totalCards = document.querySelectorAll('.tertiary-card, .tertiary-node-card').length;
    activeCountEl.innerText = totalCards + ' 项';
  }

  showIslandToast('✨ 已成功创建【' + m.name + '】模块：' + title);
  renderTertiaryEdges();
  saveCurrentProjectCanvasSnapshot();
}

function createBackgroundGroupPrompt() {
  const name = prompt('请输入新建背景分组框名称：', '口算核心心算组');
  if (!name) return;
  showIslandToast('🔲 已创建背景分组框【' + name + '】，已自动置于底层');
}

function createSequencePrompt() {
  const name = prompt('请输入新建递进序号节点名称：', '序号 4: 弦长公式逆向代入');
  if (!name) return;
  createCustomModule('task');
}

function toggleFocusMode() {
  document.querySelectorAll('.tertiary-dropdown-panel').forEach(p => p.classList.remove('is-open'));
  showIslandToast('🔍 聚焦模式：已将视口镜头锁定至当前核心攻坚序列');
}

function toggleLockNodes() {
  document.querySelectorAll('.tertiary-dropdown-panel').forEach(p => p.classList.remove('is-open'));
  showIslandToast('🔒 节点锁定状态已切换：画布当前卡片已就位');
}

function toggleFixedNodes() {
  document.querySelectorAll('.tertiary-dropdown-panel').forEach(p => p.classList.remove('is-open'));
  showIslandToast('📌 视口固定状态已切换：卡片坐标已锁定');
}

function toggleStatusFilterMenu() {
  document.querySelectorAll('.tertiary-dropdown-panel').forEach(p => p.classList.remove('is-open'));
  showIslandToast('🏷️ 状态筛选：已显示全部学业攻坚课题');
}

function toggleOperationTools() {
  document.querySelectorAll('.tertiary-dropdown-panel').forEach(p => p.classList.remove('is-open'));
  showIslandToast('🛠️ 操作工具栏显示状态已切换');
}

function toggleChildDetails() {
  document.querySelectorAll('.tertiary-dropdown-panel').forEach(p => p.classList.remove('is-open'));
  showIslandToast('📂 子级详情抽屉状态已切换');
}

function toggleEdgeLabels() {
  document.querySelectorAll('.tertiary-dropdown-panel').forEach(p => p.classList.remove('is-open'));
  const labels = document.querySelectorAll('.a-my-island-work-edge-label');
  let isHidden = false;
  labels.forEach(l => {
    isHidden = l.style.display === 'none';
    l.style.display = isHidden ? 'block' : 'none';
  });
  showIslandToast('🔤 连线文字显示：' + (isHidden ? '已开启' : '已关闭'));
}

function handleTertiaryUndo() {
  if (!window.TERTIARY_HISTORY || !window.TERTIARY_HISTORY.undoStack || window.TERTIARY_HISTORY.undoStack.length === 0) {
    showIslandToast('⚠️ 当前暂无可撤销的历史步骤');
    return;
  }
  const world = document.getElementById('tertiary-canvas-world');
  if (!world) return;
  const currentCards = [];
  world.querySelectorAll('.tertiary-card, .tertiary-node-card').forEach(c => {
    currentCards.push({ id: c.id, left: c.style.left, top: c.style.top, html: c.outerHTML });
  });
  window.TERTIARY_HISTORY.redoStack.push({
    cards: currentCards,
    edges: JSON.parse(JSON.stringify(window.TERTIARY_EDGES || []))
  });
  const prevState = window.TERTIARY_HISTORY.undoStack.pop();
  world.querySelectorAll('.tertiary-card, .tertiary-node-card').forEach(c => c.remove());
  (prevState.cards || []).forEach(c => {
    const temp = document.createElement('div');
    temp.innerHTML = c.html;
    const node = temp.firstElementChild;
    if (node) {
      node.removeAttribute('data-drag-bound');
      node.style.left = c.left;
      node.style.top = c.top;
      world.appendChild(node);
    }
  });
  window.TERTIARY_EDGES = JSON.parse(JSON.stringify(prevState.edges || []));
  bindTertiaryCardsDrag();
  renderTertiaryEdges();
  saveCurrentProjectCanvasSnapshot();
  showIslandToast('↩️ 已撤销上一步操作 (剩余可撤销 ' + window.TERTIARY_HISTORY.undoStack.length + ' 步)');
}

function handleTertiaryRedo() {
  if (!window.TERTIARY_HISTORY || !window.TERTIARY_HISTORY.redoStack || window.TERTIARY_HISTORY.redoStack.length === 0) {
    showIslandToast('⚠️ 当前暂无可重做的历史步骤');
    return;
  }
  const world = document.getElementById('tertiary-canvas-world');
  if (!world) return;
  const currentCards = [];
  world.querySelectorAll('.tertiary-card, .tertiary-node-card').forEach(c => {
    currentCards.push({ id: c.id, left: c.style.left, top: c.style.top, html: c.outerHTML });
  });
  window.TERTIARY_HISTORY.undoStack.push({
    cards: currentCards,
    edges: JSON.parse(JSON.stringify(window.TERTIARY_EDGES || []))
  });
  const nextState = window.TERTIARY_HISTORY.redoStack.pop();
  world.querySelectorAll('.tertiary-card, .tertiary-node-card').forEach(c => c.remove());
  (nextState.cards || []).forEach(c => {
    const temp = document.createElement('div');
    temp.innerHTML = c.html;
    const node = temp.firstElementChild;
    if (node) {
      node.removeAttribute('data-drag-bound');
      node.style.left = c.left;
      node.style.top = c.top;
      world.appendChild(node);
    }
  });
  window.TERTIARY_EDGES = JSON.parse(JSON.stringify(nextState.edges || []));
  bindTertiaryCardsDrag();
  renderTertiaryEdges();
  saveCurrentProjectCanvasSnapshot();
  showIslandToast('↪️ 已重做下一步操作');
}

function handleTertiaryDeleteNode() {
  const cards = document.querySelectorAll('.tertiary-card, .tertiary-node-card');
  if (cards.length <= 1) {
    showIslandToast('⚠️ 当前仅剩 1 个核心卡片，不可删除！');
    return;
  }
  pushTertiaryHistory();
  const targetCard = document.querySelector('.tertiary-card.is-selected, .tertiary-node-card.is-selected') || cards[cards.length - 1];
  const cardId = targetCard.id;
  targetCard.remove();
  window.TERTIARY_EDGES = (window.TERTIARY_EDGES || []).filter(e => e.sourceId !== cardId && e.targetId !== cardId);
  renderTertiaryEdges();
  saveCurrentProjectCanvasSnapshot();

  const activeCountEl = document.getElementById('tertiary-top-active-count');
  if (activeCountEl) {
    const totalCards = document.querySelectorAll('.tertiary-card, .tertiary-node-card').length;
    activeCountEl.innerText = totalCards + ' 项';
  }
  showIslandToast('🗑️ 已删除节点卡片及关联路线（可点击 ↩️ 撤销恢复）');
}

function openNodeSearchModal() {
  const kw = prompt('🔍 搜索三级攻坚节点关键词（如：韦达、公式、艾宾浩斯）：', '韦达');
  if (!kw) return;
  const cards = document.querySelectorAll('.tertiary-card');
  let matched = null;
  cards.forEach(c => {
    if (c.innerText.includes(kw)) matched = c;
  });
  if (matched) {
    matched.scrollIntoView({ behavior: 'smooth', block: 'center' });
    matched.style.boxShadow = '0 0 0 4px #f59e0b';
    setTimeout(() => { matched.style.boxShadow = ''; }, 2000);
    showIslandToast('🎯 已定位至匹配节点：' + (matched.dataset.label || '攻坚卡片'));
  } else {
    showIslandToast('未找到包含【' + kw + '】的节点');
  }
}

// 5. 自然天气粒子动效 Canvas 引擎
// ==========================================================================

function initWeatherEngine() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = canvas.width = canvas.offsetWidth;
  let height = canvas.height = canvas.offsetHeight;

  window.addEventListener('resize', () => {
    if (!canvas) return;
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });

  const particles = [];
  const count = 40;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: Math.random() * 0.8 + 0.3,
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    if (currentParticleMode === 'none') { requestAnimationFrame(render); return; }
    for (let p of particles) {
      ctx.beginPath();
      if (currentParticleMode === 'gold') {
        ctx.fillStyle = 'rgba(251, 191, 36, ' + p.alpha + ')';
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      } else if (currentParticleMode === 'leaves') {
        ctx.fillStyle = 'rgba(132, 204, 22, ' + p.alpha + ')';
        ctx.ellipse(p.x, p.y, p.r * 2, p.r, Math.PI / 4, 0, Math.PI * 2);
      } else if (currentParticleMode === 'petals') {
        ctx.fillStyle = 'rgba(244, 114, 182, ' + p.alpha + ')';
        ctx.ellipse(p.x, p.y, p.r * 1.8, p.r, Math.PI / 3, 0, Math.PI * 2);
      } else {
        ctx.fillStyle = 'rgba(56, 189, 248, ' + p.alpha + ')';
        ctx.rect(p.x, p.y, 1.2, p.r * 4);
      }
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y > height) { p.y = -5; p.x = Math.random() * width; }
      if (p.x > width) p.x = 0;
      if (p.x < 0) p.x = width;
    }
    requestAnimationFrame(render);
  }
  render();
}

// 快捷键支持
window.addEventListener('keydown', (e) => {
  if (currentGlobalView === 'exec' && currentExecSubView === 'day') {
    if (e.key === 'ArrowLeft') {
      prevDayCard();
      return;
    } else if (e.key === 'ArrowRight') {
      nextDayCard();
      return;
    }
  }

  if (e.key === 'Escape') {
    if (document.body.classList.contains('is-immersive')) {
      toggleImmersiveMode();
    } else if (activeOriginalPanel) {
      closeOriginalSettingsPanel();
    } else if (document.getElementById('secondary-workspace-view').style.display === 'flex') {
      exitSecondaryWorkspace();
    }
  }
});

// 初始化启动

// ==========================================================================
// 执行视图交互引擎：日视图 3D 卡片 Coverflow 轮播 / 周看板 / 月日历
let currentExecSubView = 'day'; // 'day' | 'week' | 'month'
let currentDayCardIndex = 0;
let totalDayCards = 5;
let currentWeekFilter = 'all';

function switchExecSubView(view) {
  currentExecSubView = view;
  const goalDock = document.getElementById('island-goal-cards-dock');
  if (goalDock) {
    goalDock.style.display = (view === 'day') ? '' : 'none';
  }
  const execCenterEl = document.getElementById('island-execution-center');
  if (execCenterEl) execCenterEl.classList.toggle('is-fullview', view !== 'day');
  ['day', 'week', 'month'].forEach(v => {
    const btn = document.getElementById('btn-exec-' + v);
    const pane = document.getElementById('exec-subview-' + v);
    if (btn) btn.classList.toggle('active', v === view);
    if (pane) pane.classList.toggle('active', v === view);
  });

  if (view === 'week') {
    renderWeekBoard(currentWeekFilter);
  } else if (view === 'month') {
    renderMonthCalendar();
  }
}

function updateDayCarousel() {
  const allCards = document.querySelectorAll('.exec-card-deck .exec-task-card');
  const dotsWrap = document.getElementById('exec-carousel-dots');
  const emptyPlaceholder = document.getElementById('day-deck-empty-placeholder');

  if (allCards.length === 0) {
    totalDayCards = 0;
    currentDayCardIndex = 0;
    if (dotsWrap) dotsWrap.style.display = 'none';
    if (emptyPlaceholder) emptyPlaceholder.style.display = 'flex';
    return;
  }
  if (emptyPlaceholder) emptyPlaceholder.style.display = 'none';
  if (dotsWrap) dotsWrap.style.display = 'flex';
  totalDayCards = allCards.length;
  currentDayCardIndex = Math.max(0, Math.min(currentDayCardIndex, totalDayCards - 1));
  const cards = allCards;
  const dots = document.querySelectorAll('.exec-carousel-pagination .pagination-dot-pill');

  cards.forEach((card, idx) => {
    card.classList.remove('card-active', 'card-prev', 'card-next', 'card-far-prev', 'card-far-next');
    let offset = idx - currentDayCardIndex;
    if (offset > 2) offset -= totalDayCards;
    if (offset < -2) offset += totalDayCards;

    if (offset === 0) {
      card.classList.add('card-active');
    } else if (offset === -1) {
      card.classList.add('card-prev');
    } else if (offset === 1) {
      card.classList.add('card-next');
    } else if (offset <= -2) {
      card.classList.add('card-far-prev');
    } else if (offset >= 2) {
      card.classList.add('card-far-next');
    }
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentDayCardIndex);
  });
}

function nextDayCard() {
  if (totalDayCards <= 0) return;
  currentDayCardIndex = (currentDayCardIndex + 1) % totalDayCards;
  updateDayCarousel();
}

function prevDayCard() {
  if (totalDayCards <= 0) return;
  currentDayCardIndex = (currentDayCardIndex - 1 + totalDayCards) % totalDayCards;
  updateDayCarousel();
}

function goToDayCard(index) {
  currentDayCardIndex = index;
  updateDayCarousel();
}

// 触摸手势与桌面拖拽交互
function setupCarouselGestures() {
  const stage = document.getElementById('exec-carousel-stage');
  if (!stage) return;
  let startX = 0;
  let startY = 0;
  let isSwiping = false;

  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = true;
    }
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    if (!isSwiping || e.changedTouches.length === 0) return;
    const deltaX = e.changedTouches[0].clientX - startX;
    const deltaY = e.changedTouches[0].clientY - startY;
    isSwiping = false;

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0) {
        nextDayCard();
      } else {
        prevDayCard();
      }
    }
  }, { passive: true });

  let mouseStartX = 0;
  let isMouseDown = false;
  stage.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    mouseStartX = e.clientX;
  });
  window.addEventListener('mouseup', (e) => {
    if (!isMouseDown) return;
    isMouseDown = false;
    const deltaX = e.clientX - mouseStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) nextDayCard();
      else prevDayCard();
    }
  });
}

// 打卡完成操作
function completeTask(taskId) {
  const btn = document.getElementById('btn-complete-' + taskId);
  const pill = document.getElementById('task-pill-' + taskId);

  if (btn) {
    btn.classList.remove('primary');
    btn.classList.add('is-completed');
    btn.innerHTML = '<span class="btn-card-scene-icon">✅</span><span class="btn-card-scene-text">今日已打卡完成</span>';
  }
  if (pill) {
    pill.className = 'task-status-pill completed';
    pill.innerText = '🟢 今日已完成';
  }

  triggerGlobalCheckinClosedLoop({
    taskKey: 'home-task-' + taskId,
    pavilionId: 'study',
    title: '今日待办任务 #' + taskId,
    focusMinutes: 20
  });
  showIslandToast('🎉 打卡完成！已回写甘特进度、履约率与每日随记客观流水！');
}

function startTaskFocus(taskId) {
  showIslandToast('⏱️ 已启动沉浸专注番茄钟！开始心流冲刺实训...');
  if (typeof switchMainSection === 'function' && typeof openExecCardPopupView === 'function') {
    switchMainSection('island');
    switchHomeGlobalView('exec');
    openExecCardPopupView('drill');
  }
}

function uploadTaskEvidence(taskId) {
  showIslandToast('📷 已打开真实物证相册！查看上传的草稿演算草稿纸原件与防伪时间戳。');
}

function openClassicLookup(taskId) {
  showIslandToast('📖 古籍问道池：《大学》“知止而后有定，定而后能静”；书单已关联《中庸》《传习录》');
}

function askParentHelp(taskId) {
  showIslandToast('💡 爸爸解惑提示：“熟记破十法口诀，先拆十再减，红笔标出借位点”');
}

function toggleTaskCheck(taskId, checkIdx) {
  showIslandToast('✓ 检查清单已更新打卡状态');
}

function recordDebateNotes(taskId) {
  const note = prompt('请输入亲子思辨探讨要点心得：', '好朋友如果做错事，真正的正直是在私下诚恳劝阻，守住共同底线！');
  if (note) {
    showIslandToast('🧠 认知台思维进化卡片已新增：【' + note + '】');
  }
}

function openQuickNoteModal() {
  const note = prompt('请输入今晚一句暮省心流随记：', '今晚独立攻克了30道进退位口算卡全对，感觉脑子通透了！');
  if (note) {
    showIslandToast('📖 每日随记已归档客观流水与心流感悟！');
  }
}

function nourishBaselineTree() {
  showIslandToast('📜 恪守知止戒律，已为《个人行为规范》增添一枚笃行印记！');
}

// =========================================================================
// 全域闭环控制中心：周看板、月日历、全息任务详情弹窗、动态字段与全域数据流转
// =========================================================================

// 1. 自定义动态业务字段行生成器
function addCustomDynamicFieldRow(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    showIslandToast('⚠️ 未找到自定义字段容器：' + containerId);
    return;
  }
  const row = document.createElement('div');
  row.className = 'picker-custom-field-row';
  row.style.cssText = 'display:grid; grid-template-columns:72px 1fr 22px; align-items:center; gap:6px; margin-top:4px; animation:fadeIn 0.2s ease;';
  row.innerHTML = 
    '<input type="text" class="add-module-text-input picker-field-key" placeholder="业务维度" value="指标维度" style="font-size:10px; padding:3px 6px; border:1px solid #cbd5e1; border-radius:4px; font-weight:700; color:#334155; background:#fff;">' +
    '<input type="text" class="add-module-text-input picker-field-val" placeholder="填写交付物说明或验收指标" style="font-size:10px; padding:3px 6px; border:1px solid #cbd5e1; border-radius:4px; color:#475569; background:#fff;">' +
    '<button type="button" onclick="this.parentElement.remove()" style="background:#fee2e2; color:#ef4444; border:1px solid #fca5a5; border-radius:4px; width:22px; height:22px; cursor:pointer; font-size:11px; font-weight:bold; display:flex; align-items:center; justify-content:center; transition:all 0.15s ease;" title="删除此字段">✕</button>';
  container.appendChild(row);
  showIslandToast('➕ 已新增自定义动态业务字段行');
}

// 2. 周看板全局状态与控制器 (按真实系统日期驱动，不再含任何写死日期)
window.currentWeekOffset = 0;
window.currentWeekFilter = 'all';
window.TASK_HISTORY_BY_DATE = window.TASK_HISTORY_BY_DATE || {};

const WEEK_BOARD_DATA = [
  { dayIndex: 0, dayName: '周一', dateStr: '', tasks: [] },
  { dayIndex: 1, dayName: '周二', dateStr: '', tasks: [] },
  { dayIndex: 2, dayName: '周三', dateStr: '', tasks: [] },
  { dayIndex: 3, dayName: '周四', dateStr: '', tasks: [] },
  { dayIndex: 4, dayName: '周五', dateStr: '', tasks: [] },
  { dayIndex: 5, dayName: '周六', dateStr: '', tasks: [] },
  { dayIndex: 6, dayName: '周日', dateStr: '', tasks: [] }
];

const CAL_WEEK_NAMES = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const CAL_WEEK_NAMES_LONG = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];

function calPad2(n) { return String(n).padStart(2, '0'); }

function calDateKey(d) {
  return d.getFullYear() + '-' + calPad2(d.getMonth() + 1) + '-' + calPad2(d.getDate());
}

function calMondayOf(d) {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  x.setDate(x.getDate() - ((x.getDay() + 6) % 7));
  return x;
}

function calIsoWeekNumber(d) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t - y0) / 86400000 + 1) / 7);
}

function calLunarText(d) {
  try {
    const fmt = new Intl.DateTimeFormat('zh-u-ca-chinese', { month: 'long', day: 'numeric' });
    const s = fmt.format(d);
    const m = s.match(/^(.*月)(.+)$/);
    if (!m) return s;
    return m[2] === '初一' ? m[1] : m[2];
  } catch (e) {
    return '';
  }
}

// 将 WEEK_BOARD_DATA 对齐到系统真实“本周”，跨周/跨日自动归档历史并把未完成转为缺卡
function syncWeekBoardToRealDate() {
  window.TASK_HISTORY_BY_DATE = window.TASK_HISTORY_BY_DATE || {};
  const now = new Date();
  const todayKey = calDateKey(now);
  const monday = calMondayOf(now);
  let legacyTasks = [];

  WEEK_BOARD_DATA.forEach((col, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const key = calDateKey(d);
    if (!Array.isArray(col.tasks)) col.tasks = [];
    if (!col.dateKey) {
      // 旧版快照没有日期信息：统一并入今日，避免丢失用户真实任务
      if (col.tasks.length) legacyTasks = legacyTasks.concat(col.tasks);
      col.tasks = [];
    } else if (col.dateKey !== key) {
      if (col.tasks.length) {
        const archived = col.tasks.map(t => Object.assign({}, t, { status: t.status === 'pending' ? 'overdue' : t.status }));
        window.TASK_HISTORY_BY_DATE[col.dateKey] = (window.TASK_HISTORY_BY_DATE[col.dateKey] || []).concat(archived);
      }
      col.tasks = [];
    }
    col.dateKey = key;
    col.dayIndex = i;
    col.dateStr = calPad2(d.getMonth() + 1) + '/' + calPad2(d.getDate());
    col.isToday = (key === todayKey);
    col.dayName = CAL_WEEK_NAMES[i] + (col.isToday ? ' (今日)' : '');
  });

  if (legacyTasks.length) {
    const todayCol = WEEK_BOARD_DATA.find(c => c.isToday);
    if (todayCol) todayCol.tasks = todayCol.tasks.concat(legacyTasks);
  }
}

function getTodayWeekCol() {
  syncWeekBoardToRealDate();
  return WEEK_BOARD_DATA.find(c => c.isToday) || WEEK_BOARD_DATA[(new Date().getDay() + 6) % 7];
}

function updateWeekRangeLabel() {
  const label = document.querySelector('.week-range-text');
  if (!label) return;
  const monday = calMondayOf(new Date());
  monday.setDate(monday.getDate() + window.currentWeekOffset * 7);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const tag = window.currentWeekOffset === 0 ? '' : (window.currentWeekOffset > 0 ? ' · 未来周' : ' · 历史周');
  label.textContent = monday.getFullYear() + '年第' + calIsoWeekNumber(monday) + '周 (' +
    (monday.getMonth() + 1) + '月' + calPad2(monday.getDate()) + '日 - ' +
    (sunday.getMonth() + 1) + '月' + calPad2(sunday.getDate()) + '日)' + tag;
}

function getWeekColsForOffset(offset) {
  syncWeekBoardToRealDate();
  if (offset === 0) return WEEK_BOARD_DATA;
  const monday = calMondayOf(new Date());
  monday.setDate(monday.getDate() + offset * 7);
  const cols = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const key = calDateKey(d);
    cols.push({
      dayIndex: i,
      dayName: CAL_WEEK_NAMES[i],
      dateStr: calPad2(d.getMonth() + 1) + '/' + calPad2(d.getDate()),
      dateKey: key,
      isToday: false,
      tasks: getRecordsForDate(key)
    });
  }
  return cols;
}

// 某一天的全部记录：本周数据 / 历史归档 / 甘特项目达标打卡
function getRecordsForDate(key) {
  const col = WEEK_BOARD_DATA.find(c => c.dateKey === key);
  let tasks = col ? (col.tasks || []) : ((window.TASK_HISTORY_BY_DATE || {})[key] || []);
  if (tasks.length > 0) return tasks;
  const derived = [];
  (window.GANTT_PROJECTS || []).forEach(p => {
    if (Array.isArray(p.completedDays) && p.completedDays.includes(key)) {
      const meta = (typeof PAVILION_META !== 'undefined' && PAVILION_META[p.pavilion]) ? PAVILION_META[p.pavilion] : { name: p.category || '规划馆', icon: '🎯' };
      derived.push({
        id: 'g-' + p.id + '-' + key,
        pavilion: meta.name || '规划馆',
        pavilionBadge: (meta.icon || '🎯') + ' ' + (meta.name || '规划馆'),
        title: '《' + p.title + '》达标打卡',
        status: 'done',
        duration: '--',
        time: key,
        instruction: p.desc || '',
        evidence: '✓ 项目甘特达标记录',
        reflection: ''
      });
    }
  });
  return derived;
}

function changeWeek(delta) {
  window.currentWeekOffset += delta;
  updateWeekRangeLabel();
  renderWeekBoard(window.currentWeekFilter);
  showIslandToast(window.currentWeekOffset === 0 ? '📅 已切换至本周看板' : (delta > 0 ? '⏩ 已切换至下一周看板' : '⏪ 已切换至上一周看板'));
}

function resetToCurrentWeek() {
  window.currentWeekOffset = 0;
  updateWeekRangeLabel();
  renderWeekBoard(window.currentWeekFilter);
  showIslandToast('📅 已回到本周任务全景看板！');
}

function filterWeekTasks(filter) {
  window.currentWeekFilter = filter;
  const tabs = document.querySelectorAll('.week-filter-tab');
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-filter') === filter);
  });
  renderWeekBoard(filter);
}

function renderWeekBoard(filter) {
  const container = document.getElementById('week-board-columns-container');
  if (!container) return;

  filter = filter || window.currentWeekFilter || 'all';
  const weekCols = getWeekColsForOffset(window.currentWeekOffset || 0);
  updateWeekRangeLabel();

  // 动态统计全周各状态数量并同步刷新顶部筛选标签
  let totalAll = 0, totalDone = 0, totalPending = 0, totalOverdue = 0;
  weekCols.forEach(col => {
    (col.tasks || []).forEach(t => {
      totalAll++;
      if (t.status === 'done') totalDone++;
      else if (t.status === 'pending') totalPending++;
      else if (t.status === 'overdue') totalOverdue++;
    });
  });
  document.querySelectorAll('.week-filter-tab').forEach(tab => {
    const f = tab.getAttribute('data-filter');
    if (f === 'all') tab.textContent = '全部 (' + totalAll + ')';
    else if (f === 'done') tab.textContent = '🟢 已打卡 (' + totalDone + ')';
    else if (f === 'pending') tab.textContent = '🟡 待办 (' + totalPending + ')';
    else if (f === 'overdue') tab.textContent = '🔴 缺卡 (' + totalOverdue + ')';
  });

  let html = '';
  weekCols.forEach((col, idx) => {
    const isToday = !!col.isToday;
    const filteredTasks = col.tasks.filter(t => {
      if (filter === 'all') return true;
      if (filter === 'pending') return t.status === 'pending';
      if (filter === 'done') return t.status === 'done';
      if (filter === 'overdue') return t.status === 'overdue';
      return true;
    });

    html += '<div class="week-board-col' + (isToday ? ' today' : '') + '">';
    html += '  <div class="week-col-header' + (isToday ? ' today-header' : '') + '">';
    html += '    <div style="display:flex; align-items:center; gap:6px;">';
    html += '      <span class="week-col-title">' + col.dayName + '</span>';
    html += '      <span style="font-size:10px; opacity:0.85;">' + col.dateStr + '</span>';
    html += '    </div>';
    if (isToday) {
      html += '    <span class="week-col-today-badge">今日</span>';
    } else {
      html += '    <span style="font-size:10px; font-weight:700; opacity:0.75;">' + filteredTasks.length + ' 项</span>';
    }
    html += '  </div>';

    html += '  <div class="week-col-tasks">';
    if (filteredTasks.length === 0) {
      html += '    <div style="text-align:center; padding:24px 8px; color:#94a3b8; font-size:11px;">无匹配事项</div>';
    } else {
      filteredTasks.forEach(task => {
        const isDone = (task.status === 'done');
        const isPending = (task.status === 'pending');
        const statusColor = isDone ? '#16a34a' : (isPending ? '#d97706' : '#dc2626');
        const statusBg = isDone ? '#dcfce7' : (isPending ? '#fef3c7' : '#fee2e2');
        const statusText = isDone ? '🟢 已打卡' : (isPending ? '🟡 待办' : '🔴 缺卡');

        html += '    <div class="week-task-card" onclick="showWeekTaskDetail(this)" ' +
                '      data-id="' + task.id + '"' +
                '      data-title="' + encodeURIComponent(task.title) + '"' +
                '      data-pavilion="' + encodeURIComponent(task.pavilion) + '"' +
                '      data-pavilion-badge="' + encodeURIComponent(task.pavilionBadge) + '"' +
                '      data-status="' + task.status + '"' +
                '      data-duration="' + encodeURIComponent(task.duration) + '"' +
                '      data-time="' + encodeURIComponent(task.time) + '"' +
                '      data-instruction="' + encodeURIComponent(task.instruction) + '"' +
                '      data-evidence="' + encodeURIComponent(task.evidence) + '"' +
                '      data-reflection="' + encodeURIComponent(task.reflection) + '"' +
                '      style="border-left:3.5px solid ' + statusColor + ';">';
        html += '      <div class="week-task-status-bar">';
        html += '        <span style="font-size:10px; color:#64748b; font-weight:800;">' + task.pavilion + '</span>';
        html += '        <span style="font-size:9.5px; padding:1px 5px; border-radius:6px; background:' + statusBg + '; color:' + statusColor + ';">' + statusText + '</span>';
        html += '      </div>';
        html += '      <div class="week-task-title" style="margin:2px 0 4px 0;">' + task.title + '</div>';
        html += '      <div class="week-task-meta">';
        html += '        <span>⏱️ ' + task.duration + '</span>';
        html += '        <span>🕒 ' + task.time + '</span>';
        html += '      </div>';
        html += '    </div>';
      });
    }
    html += '  </div>';
    html += '</div>';
  });

  container.innerHTML = html;
}

// 3. 通用任务全息详情弹窗控制器
function showWeekTaskDetail(el) {
  const getAttr = (k, def) => {
    const v = el.getAttribute(k);
    if (!v) return def;
    try { return decodeURIComponent(v); } catch(e) { return v; }
  };

  const title = getAttr('data-title', el.getAttribute('data-title') || '攻坚任务详情');
  const pavilion = getAttr('data-pavilion', '校史馆');
  const pavilionBadge = getAttr('data-pavilion-badge', '🏫 校史馆 · 学科攻坚');
  const status = el.getAttribute('data-status') || 'done';
  const duration = getAttr('data-duration', '25 分钟');
  const time = getAttr('data-time', '今日 16:30 ~ 17:00');
  const instruction = getAttr('data-instruction', '按攻坚标准推进，完成手稿留痕与反思总结。');
  const evidence = getAttr('data-evidence', '✓ 物证档案已存证加盖防伪时间戳');
  const reflection = getAttr('data-reflection', '“知止而后有定，按部就班攻克卡点。”');

  const modal = document.getElementById('task-detail-inspector-modal');
  if (!modal) {
    showIslandToast('正在调阅【' + title + '】详细进度与关联证据');
    return;
  }

  // 填充弹窗元素
  const bBadge = document.getElementById('td-modal-pavilion-badge');
  if (bBadge) bBadge.textContent = pavilionBadge;

  const sPill = document.getElementById('td-modal-status-pill');
  if (sPill) {
    if (status === 'done') {
      sPill.textContent = '🟢 已完成打卡';
      sPill.style.background = '#16a34a';
    } else if (status === 'pending') {
      sPill.textContent = '🟡 今日待办';
      sPill.style.background = '#d97706';
    } else {
      sPill.textContent = '🔴 未办缺卡';
      sPill.style.background = '#dc2626';
    }
  }

  const tEl = document.getElementById('td-modal-title');
  if (tEl) tEl.textContent = title;

  const instEl = document.getElementById('td-modal-instruction');
  if (instEl) instEl.textContent = instruction;

  const durEl = document.getElementById('td-modal-duration');
  if (durEl) durEl.textContent = duration;

  const timeEl = document.getElementById('td-modal-time');
  if (timeEl) timeEl.textContent = time;

  const eviEl = document.getElementById('td-modal-evidence-content');
  if (eviEl) eviEl.innerHTML = evidence.replace(/\n/g, '<br>');

  const refEl = document.getElementById('td-modal-reflection-content');
  if (refEl) refEl.textContent = reflection;

  const actRight = document.getElementById('td-modal-actions-right');
  if (actRight) {
    if (status === 'done') {
      actRight.innerHTML = 
        '<button onclick="closeTaskDetailModal(); enterSecondaryWorkspace(\'note\', \'specialized\');" style="background:#10b981; color:#fff; border:none; padding:8px 16px; border-radius:8px; font-weight:bold; font-size:12px; cursor:pointer;">📷 查看随记物证流</button>';
    } else {
      actRight.innerHTML = 
        '<button onclick="closeTaskDetailModal(); openExecCardPopupView(\'' + (pavilion === '校史馆' ? 'study' : (pavilion === '武道馆' ? 'dojo' : 'study')) + '\');" style="background:#f59e0b; color:#fff; border:none; padding:8px 16px; border-radius:8px; font-weight:bold; font-size:12px; cursor:pointer;">⚡ 立即前往打卡</button>';
    }
  }

  modal.style.display = 'flex';
}

function closeTaskDetailModal() {
  const modal = document.getElementById('task-detail-inspector-modal');
  if (modal) modal.style.display = 'none';
}

// 4. 月日历全局状态与控制器 (按真实系统日期动态生成)
window.currentMonthOffset = 0;

function getCalendarBaseMonth() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + (window.currentMonthOffset || 0), 1);
}

function updateMonthTitleLabel() {
  const label = document.getElementById('month-title-label');
  if (!label) return;
  const base = getCalendarBaseMonth();
  label.textContent = base.getFullYear() + ' 年 ' + (base.getMonth() + 1) + ' 月';
}

function changeMonth(delta) {
  window.currentMonthOffset += delta;
  updateMonthTitleLabel();
  renderMonthCalendar();
  showIslandToast(delta > 0 ? '下个月月历足迹' : '上个月月历足迹');
}

function resetToCurrentMonth() {
  window.currentMonthOffset = 0;
  updateMonthTitleLabel();
  renderMonthCalendar();
  showIslandToast('📅 已回到本月足迹矩阵！');
}

function renderMonthCalendar() {
  const grid = document.getElementById('month-calendar-grid');
  if (!grid) return;
  syncWeekBoardToRealDate();
  updateMonthTitleLabel();

  const base = getCalendarBaseMonth();
  const year = base.getFullYear();
  const month = base.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const lead = (base.getDay() + 6) % 7;
  const rows = Math.ceil((lead + daysInMonth) / 7);
  const todayKey = calDateKey(new Date());

  grid.style.gridTemplateRows = '28px repeat(' + rows + ', minmax(0, 1fr))';

  const weekdayHeaders =
    '<div class="cal-weekday-header">一</div><div class="cal-weekday-header">二</div>' +
    '<div class="cal-weekday-header">三</div><div class="cal-weekday-header">四</div>' +
    '<div class="cal-weekday-header">五</div>' +
    '<div class="cal-weekday-header weekend">六</div><div class="cal-weekday-header weekend">日</div>';

  let cellsHtml = '';
  let sumDone = 0, sumPending = 0, sumOverdue = 0;

  const otherCell = (d) =>
    '<div class="month-day-cell other-month" style="opacity:0.4; background:#f8fafc; pointer-events:none;">' +
    '<div class="month-date-row"><span class="month-date-num">' + d.getDate() + '</span>' +
    '<span class="month-date-lunar">' + calLunarText(d) + '</span></div></div>';

  for (let i = lead; i > 0; i--) {
    cellsHtml += otherCell(new Date(year, month, 1 - i));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day);
    const key = calDateKey(d);
    const isToday = (key === todayKey);
    const recs = getRecordsForDate(key);
    const done = recs.filter(t => t.status === 'done').length;
    const pend = recs.filter(t => t.status === 'pending').length;
    const over = recs.filter(t => t.status === 'overdue').length;
    sumDone += done; sumPending += pend; sumOverdue += over;

    let pips = '';
    if (done > 0) pips += '<span class="month-pip" style="background:#dcfce7; color:#15803d;">🟢 ' + done + '</span>';
    if (pend > 0) pips += '<span class="month-pip" style="background:#fef3c7; color:#b45309;">🟡 ' + pend + '</span>';
    if (over > 0) pips += '<span class="month-pip" style="background:#fee2e2; color:#b91c1c;">🔴 ' + over + '</span>';
    if (isToday) {
      const st = window.USER_PROFILE_STATE || {};
      if (st.violationCount > 0) {
        pips += '<span class="month-pip" style="background:#fee2e2; color:#b91c1c;">⚖️ -' + (st.violationCount * 5) + '%</span>';
      }
    }

    cellsHtml +=
      '<div class="month-day-cell' + (isToday ? ' today active is-today' : '') + '" onclick="inspectMonthDate(' + year + ', ' + (month + 1) + ', ' + day + ')">' +
      '  <div class="month-date-row">' +
      '    <span class="month-date-num"' + (isToday ? ' style="color:#c2410c; font-weight:900;"' : '') + '>' + day + '</span>' +
      (isToday
        ? '    <span style="font-size:9px; background:#ea580c; color:#fff; font-weight:800; padding:1px 5px; border-radius:6px;">今日</span>'
        : '    <span class="month-date-lunar">' + calLunarText(d) + '</span>') +
      '  </div>' +
      '  <div class="month-pips-row" style="margin-top:4px;">' + pips + '</div>' +
      '</div>';
  }

  const trail = rows * 7 - lead - daysInMonth;
  for (let i = 1; i <= trail; i++) {
    cellsHtml += otherCell(new Date(year, month + 1, i));
  }

  grid.innerHTML = weekdayHeaders + cellsHtml;

  // 同步月度汇总条 (真实统计)
  const chips = document.querySelectorAll('#exec-subview-month .month-summary-stat .stat-chip');
  const total = sumDone + sumPending + sumOverdue;
  if (chips.length >= 4) {
    chips[0].textContent = '🟢 已办: ' + sumDone + ' 项';
    chips[1].textContent = '🟡 待办: ' + sumPending + ' 项';
    chips[2].textContent = '🔴 未办: ' + sumOverdue + ' 项';
    chips[3].textContent = '⭐ 整体达成率: ' + (total > 0 ? (Math.round(sumDone / total * 1000) / 10) + '%' : '--');
  }
}

// 5. 单日全息清单弹窗 (Day Inspector) —— 仅展示真实记录，无任何演示数据
function inspectMonthDate(year, month, day) {
  const modal = document.getElementById('day-inspector-modal');
  if (!modal) return;
  syncWeekBoardToRealDate();

  const d = new Date(year, month - 1, day);
  const key = calDateKey(d);
  const isToday = key === calDateKey(new Date());
  const recs = getRecordsForDate(key);

  const dateTitle = document.getElementById('inspector-date-title');
  if (dateTitle) {
    dateTitle.textContent = year + '年' + month + '月' + day + '日 ' + CAL_WEEK_NAMES_LONG[(d.getDay() + 6) % 7] + (isToday ? ' (今日)' : '');
  }
  const dateSub = document.getElementById('inspector-date-sub');
  if (dateSub) {
    const lunar = calLunarText(d);
    dateSub.textContent = (lunar ? '农历 ' + lunar + ' · ' : '') + '共 ' + recs.length + ' 项成长记录';
  }

  const item = (t, color, tag) =>
    '<div class="inspector-task-item"><span>' + (t.pavilionBadge ? t.pavilionBadge.split(' ')[0] + ' ' : '') + t.pavilion + '：' + t.title +
    (t.duration && t.duration !== '--' ? ' (' + t.duration + ')' : '') +
    '</span><span style="color:' + color + '; font-weight:800; font-size:11px;">' + tag + '</span></div>';

  const fill = (listId, countId, arr, color, tag, emptyText) => {
    const listEl = document.getElementById(listId);
    const countEl = document.getElementById(countId);
    if (countEl) countEl.textContent = arr.length + ' 项';
    if (listEl) {
      listEl.innerHTML = arr.length > 0
        ? arr.map(t => item(t, color, tag)).join('')
        : '<div style="color:#94a3b8; font-size:11px; padding:6px 0;">' + emptyText + '</div>';
    }
  };

  fill('inspector-list-done', 'inspector-count-done', recs.filter(t => t.status === 'done'), '#16a34a', '✓ 已完成', '暂无已完成事项');
  fill('inspector-list-pending', 'inspector-count-pending', recs.filter(t => t.status === 'pending'), '#d97706', '🟡 待打卡', '暂无待办事项');
  fill('inspector-list-overdue', 'inspector-count-overdue', recs.filter(t => t.status === 'overdue'), '#dc2626', '未办缺卡', '暂无缺卡事项');

  modal.style.display = 'flex';
}

function closeDayInspector() {
  const modal = document.getElementById('day-inspector-modal');
  if (modal) modal.style.display = 'none';
}

function closeDayInspectorOnBackdrop(event) {
  if (event && event.target && event.target.id === 'day-inspector-modal') {
    closeDayInspector();
  }
}

function openEvidenceGalleryForDay() {
  closeDayInspector();
  showIslandToast('📷 已穿透加载当日全息物证相册与演算照片原件！');
  enterSecondaryWorkspace('note', 'specialized');
}

function openStudyMakeUpModal() {
  showIslandToast('🏫 已进入校史馆错题补卡通道：填写反思后由家长见证盖章！');
}

function openMoralTestModal() {
  showIslandToast('⚖️ 进入底线大拷问情景沙盘：登记生活诱惑与原则考验！');
}
// =========================================================================
// 个人行为规范底层两大核心模态弹窗控制器 (亲子立宪公约全文 + 违约裁决 -5% 派发修身闭环)
// =========================================================================
function openFamilyPactModal(scrollToViolation) {
  if (typeof recalcAndRenderGlobalHUD === 'function') {
    recalcAndRenderGlobalHUD();
  }
  const modal = document.getElementById('family-pact-modal');
  if (modal) {
    modal.style.display = 'flex';
    if (scrollToViolation) {
      setTimeout(() => {
        const sec = document.getElementById('pact-violation-console');
        if (sec && typeof sec.scrollIntoView === 'function') {
          sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
          sec.style.boxShadow = '0 0 0 3px #ef4444';
          setTimeout(() => { sec.style.boxShadow = ''; }, 1400);
        }
      }, 120);
    }
  } else {
    showIslandToast('📜 调阅亲子立宪公证书：已确立做人底线与行事准则，全域生效');
  }
}

function submitPactViolationAdjudication() {
  const clauseEl = document.getElementById('pact-violation-clause');
  const reasonEl = document.getElementById('pact-violation-reason');
  const chkEl = document.getElementById('pact-violation-confirm-chk');

  const clause = clauseEl ? clauseEl.value : '诚意慎独';
  const reason = reasonEl ? reasonEl.value.trim() : '';
  if (!reason) {
    showIslandToast('⚠️ 请如实填写客观违约事实简述，坚持实事求是！');
    if (reasonEl) reasonEl.focus();
    return;
  }
  if (chkEl && !chkEl.checked) {
    showIslandToast('⚠️ 请先勾选【家长与孩子双方已心平气和核实事实】确认框！');
    return;
  }

  const st = window.USER_PROFILE_STATE;
  st.violationCount = (st.violationCount || 0) + 1;
  const now = new Date();
  const dateStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0') + ' ' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  const newRate = computeCurrentFulfillmentRate();

  const record = {
    id: 'VIO-' + Date.now(),
    time: dateStr,
    clause: clause,
    reason: reason,
    rateAfter: newRate
  };
  st.violationRecords.unshift(record);

  // 1. 更新公约内违约历史列表与全局 HUD 履约率 (-5%)
  const histEl = document.getElementById('pact-violation-history-list');
  if (histEl) {
    histEl.innerHTML = st.violationRecords.map(r =>
      '<div style="background:#fff; border:1px solid #fecaca; border-left:3px solid #dc2626; padding:6px 10px; border-radius:6px; display:flex; justify-content:space-between; align-items:center; gap:8px;">' +
        '<span><strong>[' + r.clause.split('（')[0] + ']</strong> ' + r.reason + ' <span style="color:#94a3b8;">(' + r.time + ')</span></span>' +
        '<span style="color:#dc2626; font-weight:900; white-space:nowrap;">-5% ➔ 已派发修身阁</span>' +
      '</div>'
    ).join('');
  }
  recalcAndRenderGlobalHUD();
  if (typeof renderMonthCalendar === 'function') renderMonthCalendar();

  // 2. 自动向【修身阁】甘特立项池派发针对性修身弥补项目与复盘卡
  const projId = 'proj_remedy_' + Date.now();
  const shortClause = clause.split('（')[0];
  const todayG = typeof GANTT_TODAY !== 'undefined' ? GANTT_TODAY : '2026-10-27';
  const endD = typeof parseGanttDate === 'function' ? parseGanttDate(todayG) : new Date(2026, 9, 27);
  endD.setDate(endD.getDate() + 7);
  const endG = typeof formatGanttDate === 'function' ? formatGanttDate(endD) : '2026-11-03';

  if (Array.isArray(window.GANTT_PROJECTS)) {
    const remProj = {
      id: projId,
      pavilion: 'cultivation',
      category: '修身立宪',
      title: '【修身弥补】' + shortClause + ' · 七日慎独纠偏',
      desc: '针对违约事实「' + reason + '」开展古籍映照自省与七日知行合一弥补打卡。',
      startDate: todayG,
      endDate: endG,
      completedDays: [],
      isArchived: false
    };
    window.GANTT_PROJECTS.unshift(remProj);
    if (window.PROJECT_CANVAS_STORE) {
      window.PROJECT_CANVAS_STORE[projId] = buildStarterCanvasForProject(remProj);
    }
    renderHomeSemesterGoalsBanner();
  }

  // 3. 自动同步一张修身复盘弥补任务卡至首页今日待办轮播
  if (typeof syncNewNodeToHomeExecution === 'function') {
    syncNewNodeToHomeExecution({
      id: 'remedy-' + Date.now(),
      title: '【修身复盘】' + shortClause + '纠偏躬行',
      desc: '违约事实复盘：' + reason + ' · 研读《大学》诚意慎独章并落实改进',
      pavilionId: 'cultivation',
      duration: 15
    });
  }

  // 4. 同步写入每日随记客观事实流水
  appendDailyAutoLog('⚖️ 亲子公约裁决：登记【' + shortClause + '】违约事实（' + reason + '），综合履约率 -5%（现 ' + newRate + '%），已自动派发修身弥补项目至修身阁');

  if (reasonEl) reasonEl.value = '';
  if (chkEl) chkEl.checked = false;
  showIslandToast('⚖️ 已登记违约并扣减 5% 履约率（当前 ' + newRate + '%）！针对性修身复盘卡已自动派发至【修身阁】与今日待办！');
}

function closeFamilyPactModal() {
  const modal = document.getElementById('family-pact-modal');
  if (modal) modal.style.display = 'none';
}

function printFamilyPact() {
  showIslandToast('🖨️ 亲子立宪公约正本格式化档案已生成！已唤起高保真打印长卷预览');
}

function openDaxuePhilosophyModal() {
  const modal = document.getElementById('daxue-philosophy-modal');
  if (modal) {
    modal.style.display = 'flex';
  } else {
    showDaxueEightPhilosophy();
  }
}

function closeDaxuePhilosophyModal() {
  const modal = document.getElementById('daxue-philosophy-modal');
  if (modal) modal.style.display = 'none';
}

function showDaxueEightPhilosophy() {
  openDaxuePhilosophyModal();
}

function locateDaxueItemFromModal(itemId) {
  closeDaxuePhilosophyModal();
  switchDaxueTab(itemId);
  const card = document.getElementById('daxue-item-' + itemId);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.style.transition = 'all 0.3s ease';
    card.style.borderColor = '#b91c1c';
    card.style.boxShadow = '0 0 20px rgba(185, 28, 28, 0.4)';
    setTimeout(() => {
      card.style.borderColor = '';
      card.style.boxShadow = '';
    }, 2000);
  }
}
// ==================== 藏金屋独立财商实践核心数据模型与交互控制器 (收支记录) ====================
window.TREASURY_STATE = {
  totalBalance: 0.00,
  totalIncome: 0.00,
  totalExpense: 0.00,
  currentRecordType: 'income',
  ledger: []
};

function switchTreasuryRecordType(type) {
  window.TREASURY_STATE.currentRecordType = type;
  const btnIncome = document.getElementById('treasury-type-btn-income');
  const btnExpense = document.getElementById('treasury-type-btn-expense');
  const categorySelect = document.getElementById('treasury-tx-category-select');
  const amountInput = document.getElementById('treasury-tx-amount-input');
  const descInput = document.getElementById('treasury-tx-desc-input');

  if (type === 'income') {
    if (btnIncome) {
      btnIncome.classList.add('is-active');
      btnIncome.style.background = '';
      btnIncome.style.color = '';
      btnIncome.style.borderColor = '';
    }
    if (btnExpense) {
      btnExpense.classList.remove('is-active');
      btnExpense.style.background = '';
      btnExpense.style.color = '';
      btnExpense.style.borderColor = '';
    }
    if (categorySelect) {
      categorySelect.innerHTML = 
        '<option value="零花钱">💵 常规零花钱</option>' +
        '<option value="劳动奖励">🧹 自主劳动奖励</option>' +
        '<option value="节日红包">🧧 节日压岁红包</option>' +
        '<option value="其他所得">✨ 其他自主所得</option>';
    }
    if (descInput && !descInput.value) {
      descInput.placeholder = '如：每周自主生活零花钱常规发放存入';
    }
  } else {
    if (btnIncome) {
      btnIncome.classList.remove('is-active');
      btnIncome.style.background = '';
      btnIncome.style.color = '';
      btnIncome.style.borderColor = '';
    }
    if (btnExpense) {
      btnExpense.classList.add('is-active');
      btnExpense.style.background = '';
      btnExpense.style.color = '';
      btnExpense.style.borderColor = '';
    }
    if (categorySelect) {
      categorySelect.innerHTML = 
        '<option value="学科文具">✏️ 学科文具与笔记本</option>' +
        '<option value="课外书籍">📚 经典课外读物</option>' +
        '<option value="健康零食">🥛 健康酸奶/水果</option>' +
        '<option value="孝亲礼物">🎁 长辈节日孝亲礼物</option>' +
        '<option value="其他日常">🛒 其他日常小开销</option>';
    }
    if (descInput && !descInput.value) {
      descInput.placeholder = '如：新华书店购买错题活页本与红笔';
    }
  }
}

function setQuickRecordAmount(amt) {
  const input = document.getElementById('treasury-tx-amount-input');
  if (input) {
    input.value = Number(amt).toFixed(2);
  }
}

function recordLiveTreasuryTransaction() {
  const type = window.TREASURY_STATE.currentRecordType || 'income';
  const amountInput = document.getElementById('treasury-tx-amount-input');
  const categorySelect = document.getElementById('treasury-tx-category-select');
  const descInput = document.getElementById('treasury-tx-desc-input');
  const proofInput = document.getElementById('treasury-tx-proof-input');

  if (!amountInput) return;
  const amountVal = parseFloat(amountInput.value) || 0;
  if (amountVal <= 0) {
    showIslandToast('⚠️ 请输入有效的金额 (必须大于 0)！');
    return;
  }

  const category = (categorySelect && categorySelect.value) ? categorySelect.value : (type === 'income' ? '零花钱' : '学科文具');
  const desc = (descInput && descInput.value.trim()) ? descInput.value.trim() : (type === 'income' ? '零用金发放收入' : '日常消费支出');
  const proof = (proofInput && proofInput.value.trim()) ? proofInput.value.trim() : (type === 'income' ? '📷 零用金记录' : '🧾 小票凭据已核验');

  if (type === 'expense') {
    if (window.TREASURY_STATE.totalBalance < amountVal) {
      showIslandToast('⚠️ 余额不足！当前零用金总结余仅为 ¥' + window.TREASURY_STATE.totalBalance.toFixed(2) + '，严禁透支！');
      return;
    }
    window.TREASURY_STATE.totalBalance -= amountVal;
    window.TREASURY_STATE.totalExpense += amountVal;
  } else {
    window.TREASURY_STATE.totalBalance += amountVal;
    window.TREASURY_STATE.totalIncome += amountVal;
  }

  // 数据闭环: 自动将零用金收支流水同步至每日随记上半轨与历史卷宗
  const txLog = (type === 'income' ? '💰 藏金屋收入：+¥' : '💸 藏金屋支出：-¥') + amountVal.toFixed(2) + ' (' + category + ' · ' + desc + '，结余 ¥' + window.TREASURY_STATE.totalBalance.toFixed(2) + ')';
  appendDailyAutoLog(txLog, 0);

  const now = new Date();
  const timeStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0') + ' ' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');

  window.TREASURY_STATE.ledger.unshift({
    id: 'TX-' + Date.now(),
    time: timeStr,
    type: type,
    category: category,
    amount: type === 'income' ? amountVal : -amountVal,
    balanceAfter: window.TREASURY_STATE.totalBalance,
    note: desc,
    proof: proof
  });

  if (amountInput) amountInput.value = '';
  if (descInput) descInput.value = '';

  updateTreasuryLiveDOM();
  showIslandToast('📝 记账成功！已记录一笔' + (type === 'income' ? '收入 +¥' : '支出 -¥') + amountVal.toFixed(2) + ' (' + category + ')');
}

function renderTreasuryLedgerRows(rows) {
  if (!rows || rows.length === 0) {
    return '<tr><td colspan="6" style="text-align:center; padding:24px; color:#94a3b8; font-size:12px;">暂无明细流水记录</td></tr>';
  }

  return rows.map(r => {
    const isInc = r.type === 'income';
    const sign = isInc ? '+¥' : '-¥';
    const color = isInc ? '#059669' : '#dc2626';
    const bgBadge = isInc ? '#ecfdf5' : '#fef2f2';
    const borderBadge = isInc ? '#a7f3d0' : '#fecaca';
    const label = isInc ? '🟢 收入' : '🔴 支出';

    return '<tr style="border-bottom:1px dashed #e2e8f0;">' +
      '  <td style="padding:10px 12px; font-weight:600; color:#475569;">' + r.time + '</td>' +
      '  <td style="padding:10px 12px; text-align:center;"><span style="background:' + bgBadge + '; color:' + color + '; border:1px solid ' + borderBadge + '; padding:2px 8px; border-radius:10px; font-size:10px; font-weight:bold;">' + label + '</span></td>' +
      '  <td style="padding:10px 12px; font-weight:bold; color:#1e293b;">' + r.category + '</td>' +
      '  <td style="padding:10px 12px; text-align:right; font-weight:bold; color:' + color + '; font-size:13px;">' + sign + Math.abs(r.amount).toFixed(2) + '</td>' +
      '  <td style="padding:10px 12px; text-align:right; font-weight:600; color:#64748b;">¥' + Number(r.balanceAfter).toFixed(2) + '</td>' +
      '  <td style="padding:10px 12px; color:#334155;">' +
      '    <div style="font-weight:500;">' + r.note + '</div>' +
      '    <div style="font-size:10px; color:#94a3b8; margin-top:2px;">' + (r.proof || '') + '</div>' +
      '  </td>' +
      '</tr>';
  }).join('');
}

function updateTreasuryLiveDOM() {
  const state = window.TREASURY_STATE;
  const totalAssetsEl = document.getElementById('treasury-total-assets');
  if (totalAssetsEl) totalAssetsEl.innerText = '总净资产：¥' + state.totalBalance.toFixed(2);

  const statBalEl = document.getElementById('treasury-stat-balance-val');
  if (statBalEl) statBalEl.innerText = '¥' + state.totalBalance.toFixed(2);

  const statIncEl = document.getElementById('treasury-stat-income-val');
  if (statIncEl) statIncEl.innerText = '+¥' + state.totalIncome.toFixed(2);

  const statExpEl = document.getElementById('treasury-stat-expense-val');
  if (statExpEl) statExpEl.innerText = '-¥' + state.totalExpense.toFixed(2);

  const tbody = document.getElementById('treasury-ledger-tbody');
  if (tbody) {
    tbody.innerHTML = renderTreasuryLedgerRows(state.ledger);
  }
}

function filterTreasuryLedgerRows(filter, btn) {
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.treasury-filter-tab-btn').forEach(b => {
      b.classList.remove('is-active');
      b.style.background = '';
      b.style.color = '';
      b.style.borderColor = '';
    });
    btn.classList.add('is-active');
  }

  const tbody = document.getElementById('treasury-ledger-tbody');
  if (!tbody) return;

  const ledger = window.TREASURY_STATE.ledger || [];
  let filtered = ledger;
  if (filter === 'income') {
    filtered = ledger.filter(x => x.type === 'income');
  } else if (filter === 'expense') {
    filtered = ledger.filter(x => x.type === 'expense');
  }
  tbody.innerHTML = renderTreasuryLedgerRows(filtered);
}

function scrollToTreasurySection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.style.boxShadow = '0 0 0 3px #f59e0b';
    setTimeout(() => {
      el.style.boxShadow = '';
    }, 1200);
  }
}

function executeThreeJarSplit() {
  scrollToTreasurySection('treasury-quick-record-card');
}
function recordLiveTreasuryExpense() {
  recordLiveTreasuryTransaction();
}

function renderTreasurySpecializedWorkspace() {
  const state = window.TREASURY_STATE || {
    totalBalance: 0.00,
    totalIncome: 0.00,
    totalExpense: 0.00,
    ledger: []
  };

  const isIncome = (state.currentRecordType !== 'expense');

  return '<div class="ws-layout-treasury-jars">' +
    '  <!-- 顶栏独立性规范横幅 -->' +
    '  <div class="ws-spec-notice-banner" style="background:linear-gradient(135deg, rgba(255, 251, 235, 0.95) 0%, rgba(254, 243, 199, 0.92) 50%, rgba(254, 215, 170, 0.88) 100%); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); border-color:#d97706; border-left-color:#b45309;">' +
    '    <div style="flex:1;">' +
    '      <div class="ws-spec-notice-title" style="color:#78350f; display:flex; align-items:center; gap:8px;">' +
    '        <span>💰 藏金屋 · 少儿独立财商实践与零用金收支记账</span>' +
    '        <span style="font-size:10px; background:#fef3c7; color:#92400e; border:1px solid #f59e0b; padding:2px 8px; border-radius:10px; font-weight:800;">独立模块 · 严禁对赌</span>' +
    '      </div>' +
    '      <div class="ws-spec-notice-desc" style="color:#92400e;">培养"劳动所得、量入为出、理性消费"金钱观 · 记录真实零用金收支 · 严格无项目规划甘特</div>' +
    '    </div>' +
    '    <div style="display:flex; align-items:center; gap:8px;">' +
    '      <button class="treasury-cta-btn" onclick="scrollToTreasurySection(&apos;treasury-quick-record-card&apos;)">✍️ 快速记一笔</button>' +
    '    </div>' +
    '  </div>' +

    '  <!-- 卡片 1: 📊 资产总览看板 -->' +
    '  <div class="treasury-card-box">' +
    '    <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1.5px dashed #d4c5a9; padding-bottom:12px; margin-bottom:16px;">' +
    '      <div>' +
    '        <h3 style="margin:0; font-size:16px; color:#78350f; font-weight:900; display:flex; align-items:center; gap:8px;">' +
    '          <span>📊 个人零用金资产总览</span>' +
    '          <span style="font-size:11px; font-weight:normal; color:#8c6b49;">(真实收支清晰透明 · 账实相符)</span>' +
    '        </h3>' +
    '      </div>' +
    '      <div style="display:flex; align-items:center; gap:10px;">' +
    '        <span style="background:#fef3c7; color:#92400e; font-size:13px; font-weight:900; padding:5px 14px; border-radius:14px; border:1.5px solid #f59e0b; box-shadow:0 2px 6px rgba(245,158,11,0.2);" id="treasury-total-assets">总净资产：¥' + state.totalBalance.toFixed(2) + '</span>' +
    '      </div>' +
    '    </div>' +
    '    <div class="treasury-jars-row" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:14px;">' +
    '      <!-- 指标 1: 当前零用金结余 -->' +
    '      <div class="treasury-jar-card" style="background:linear-gradient(180deg, #fffcf5 0%, #ffffff 100%); border:2px solid #f59e0b; border-radius:16px; padding:14px; text-align:center; box-shadow:0 4px 12px rgba(245,158,11,0.12);">' +
    '        <div style="font-size:28px; margin-bottom:2px;">💰</div>' +
    '        <div style="font-size:13px; font-weight:900; color:#78350f;">当前总净资产结余</div>' +
    '        <div style="font-size:24px; font-weight:900; color:#b45309; margin:8px 0;" id="treasury-stat-balance-val">¥' + state.totalBalance.toFixed(2) + '</div>' +
    '        <div style="font-size:11px; color:#8c6b49;">随时自主支配：文具、购书与日常</div>' +
    '      </div>' +
    '      <!-- 指标 2: 累计总收入 -->' +
    '      <div class="treasury-jar-card" style="background:linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%); border:2px solid #10b981; border-radius:16px; padding:14px; text-align:center; box-shadow:0 4px 12px rgba(16,185,129,0.12);">' +
    '        <div style="font-size:28px; margin-bottom:2px;">📥</div>' +
    '        <div style="font-size:13px; font-weight:900; color:#065f46;">累计总收入</div>' +
    '        <div style="font-size:24px; font-weight:900; color:#059669; margin:8px 0;" id="treasury-stat-income-val">+¥' + state.totalIncome.toFixed(2) + '</div>' +
    '        <div style="font-size:11px; color:#047857;">来源：每周常规零花钱、劳动所得等</div>' +
    '      </div>' +
    '      <!-- 指标 3: 累计总支出 -->' +
    '      <div class="treasury-jar-card" style="background:linear-gradient(180deg, #fef2f2 0%, #ffffff 100%); border:2px solid #ef4444; border-radius:16px; padding:14px; text-align:center; box-shadow:0 4px 12px rgba(239,68,68,0.12);">' +
    '        <div style="font-size:28px; margin-bottom:2px;">📤</div>' +
    '        <div style="font-size:13px; font-weight:900; color:#991b1b;">累计总支出</div>' +
    '        <div style="font-size:24px; font-weight:900; color:#dc2626; margin:8px 0;" id="treasury-stat-expense-val">-¥' + state.totalExpense.toFixed(2) + '</div>' +
    '        <div style="font-size:11px; color:#b91c1c;">用途：学科文具、书籍、礼物等实物开销</div>' +
    '      </div>' +
    '    </div>' +
    '  </div>' +

    '  <!-- 卡片 2: ✍️ 零用金极速收支记账操作台 -->' +
    '  <div id="treasury-quick-record-card" class="treasury-card-box" style="border-color:#f59e0b;">' +
    '    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">' +
    '      <div>' +
    '        <h3 style="margin:0; font-size:15px; color:#78350f; font-weight:900;">✍️ 零用金极速收支记账操作台</h3>' +
    '        <div style="font-size:11px; color:#8c6b49; margin-top:2px;">选择收支类型 ➔ 录入金额分类 ➔ 附带说明或小票凭据 ➔ 一键记入账本（严禁透支）</div>' +
    '      </div>' +
    '      <div style="display:flex; gap:8px;">' +
    '        <button type="button" id="treasury-type-btn-income" class="treasury-type-tab-btn is-income' + (isIncome ? ' is-active' : '') + '" onclick="switchTreasuryRecordType(&apos;income&apos;)">🟢 记收入 (+¥)</button>' +
    '        <button type="button" id="treasury-type-btn-expense" class="treasury-type-tab-btn is-expense' + (!isIncome ? ' is-active' : '') + '" onclick="switchTreasuryRecordType(&apos;expense&apos;)">🔴 记支出 (-¥)</button>' +
    '      </div>' +
    '    </div>' +
    '    <div style="background:rgba(255, 252, 245, 0.9); border:1.5px solid #fed7aa; border-radius:14px; padding:14px;">' +
    '      <div style="display:grid; grid-template-columns: 200px 180px 1fr; gap:12px; margin-bottom:12px;">' +
    '        <div>' +
    '          <label style="font-size:11px; font-weight:bold; color:#78350f; display:block; margin-bottom:4px;">发生金额 (¥)：</label>' +
    '          <div style="position:relative;">' +
    '            <span style="position:absolute; left:10px; top:50%; transform:translateY(-50%); font-size:15px; font-weight:bold; color:#b45309;">¥</span>' +
    '            <input id="treasury-tx-amount-input" type="number" step="1" min="0.1" placeholder="如 50.00" style="width:100%; padding:8px 12px 8px 26px; border:1.5px solid #f59e0b; border-radius:8px; font-size:14px; font-weight:bold; color:#78350f; background:#fff; box-sizing:border-box;">' +
    '          </div>' +
    '        </div>' +
    '        <div>' +
    '          <label style="font-size:11px; font-weight:bold; color:#78350f; display:block; margin-bottom:4px;">收支业务分类：</label>' +
    '          <select id="treasury-tx-category-select" style="width:100%; padding:8px; border:1.5px solid #f59e0b; border-radius:8px; font-size:12px; font-weight:bold; color:#78350f; background:#fff;">' +
    (isIncome ?
      '            <option value="零花钱">💵 常规零花钱</option>' +
      '            <option value="劳动奖励">🧹 自主劳动奖励</option>' +
      '            <option value="节日红包">🧧 节日压岁红包</option>' +
      '            <option value="其他所得">✨ 其他自主所得</option>' :
      '            <option value="学科文具">✏️ 学科文具与笔记本</option>' +
      '            <option value="课外书籍">📚 经典课外读物</option>' +
      '            <option value="健康零食">🥛 健康酸奶/水果</option>' +
      '            <option value="孝亲礼物">🎁 长辈节日孝亲礼物</option>' +
      '            <option value="其他日常">🛒 其他日常小开销</option>'
    ) +
    '          </select>' +
    '        </div>' +
    '        <div>' +
    '          <label style="font-size:11px; font-weight:bold; color:#78350f; display:block; margin-bottom:4px;">用途或来源说明：</label>' +
    '          <input id="treasury-tx-desc-input" type="text" placeholder="' + (isIncome ? '如：每周自主生活零花钱常规发放存入' : '如：新华书店购买错题活页本与红笔') + '" style="width:100%; padding:8px 12px; border:1.5px solid #d4c5a9; border-radius:8px; font-size:12px; background:#fff; box-sizing:border-box;">' +
    '        </div>' +
    '      </div>' +
    '      <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px dashed #fed7aa; padding-top:10px;">' +
    '        <div style="display:flex; align-items:center; gap:6px;">' +
    '          <span style="font-size:11px; color:#8c6b49; font-weight:bold;">快捷金额：</span>' +
    '          <button type="button" class="treasury-quick-amt-token" onclick="setQuickRecordAmount(10)">¥10</button>' +
    '          <button type="button" class="treasury-quick-amt-token" onclick="setQuickRecordAmount(20)">¥20</button>' +
    '          <button type="button" class="treasury-quick-amt-token" onclick="setQuickRecordAmount(50)">¥50</button>' +
    '          <button type="button" class="treasury-quick-amt-token" onclick="setQuickRecordAmount(100)">¥100</button>' +
    '        </div>' +
    '        <div style="display:flex; align-items:center; gap:10px;">' +
    '          <input id="treasury-tx-proof-input" type="text" placeholder="物证/凭据说明 (如：🧾 新华书店收银小票)" style="width:220px; padding:7px 10px; font-size:11px; border:1.5px solid #d4c5a9; border-radius:8px; background:#fff;">' +
    '          <button type="button" class="treasury-submit-btn" onclick="recordLiveTreasuryTransaction()">📝 确认记入账本</button>' +
    '        </div>' +
    '      </div>' +
    '    </div>' +
    '  </div>' +

    '  <!-- 卡片 3: 🏛️ 零用金收支明细台账 -->' +
    '  <div id="treasury-ledger-card" class="treasury-card-box" style="border-color:#78350f;">' +
    '    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px dashed #d4c5a9; padding-bottom:12px; margin-bottom:14px;">' +
    '      <div>' +
    '        <h3 style="margin:0; font-size:15px; color:#78350f; font-weight:900; display:flex; align-items:center; gap:8px;">' +
    '          <span>🏛️ 藏金屋零用金收支明细台账</span>' +
    '          <span style="font-size:10px; background:#fee2e2; color:#991b1b; padding:2px 8px; border-radius:8px; font-weight:bold;">🔒 真实客观账本 · 不可随意篡改</span>' +
    '        </h3>' +
    '        <div style="font-size:11px; color:#8c6b49; margin-top:2px;">每一笔收入与支出均记录时间、业务分类、发生金额与凭据说明</div>' +
    '      </div>' +
    '      <div style="display:flex; gap:6px;">' +
    '        <button class="treasury-filter-tab-btn is-active" onclick="filterTreasuryLedgerRows(&apos;all&apos;, this)">全部明细</button>' +
    '        <button class="treasury-filter-tab-btn" onclick="filterTreasuryLedgerRows(&apos;income&apos;, this)">🟢 收入流水</button>' +
    '        <button class="treasury-filter-tab-btn" onclick="filterTreasuryLedgerRows(&apos;expense&apos;, this)">🔴 支出流水</button>' +
    '      </div>' +
    '    </div>' +
    '    <div style="max-height:360px; overflow-y:auto; border-radius:10px; border:1px solid #e2e8f0;">' +
    '      <table class="treasury-ledger-table" style="width:100%; border-collapse:collapse; font-size:11.5px;">' +
    '        <thead>' +
    '          <tr style="background:#faf4e6; color:#78350f; position:sticky; top:0; z-index:2;">' +
    '            <th style="padding:8px 10px; text-align:left;">交易时间</th>' +
    '            <th style="padding:8px 10px; text-align:center;">类型</th>' +
    '            <th style="padding:8px 10px; text-align:left;">收支分类</th>' +
    '            <th style="padding:8px 10px; text-align:right;">发生金额</th>' +
    '            <th style="padding:8px 10px; text-align:right;">账户结余</th>' +
    '            <th style="padding:8px 10px; text-align:left;">说明与物证凭据</th>' +
    '          </tr>' +
    '        </thead>' +
    '        <tbody id="treasury-ledger-tbody">' +
    renderTreasuryLedgerRows(state.ledger) +
    '        </tbody>' +
    '      </table>' +
    '    </div>' +
    '  </div>' +
    '</div>';
}

// =========================================================================
// 《大学》八目行为规范立宪体系核心数据模型 (纯查阅·已确立行为戒律长卷)
// =========================================================================
window.CURRENT_DAXUE_TAB = 'all';

window.UNIVERSITY_EIGHT_ITEMS_DATA = [
  {
    id: 'gewu',
    idxStr: '第一目',
    name: '格物',
    fullName: '第一目：格物 · 穷理致真',
    icon: '🌿',
    summary: '穷究事理 · 探求本质 · 专注实相',
    classicQuote: '《大学》：“致知在格物。物格而后知至。”',
    classicExplain: '探究事物之客观原理与发展规律，直到透彻明了。做题学习不瞎猜、不敷衍塞责。',
    rules: [
      {
        code: '条款 1-1',
        title: '学业求真，深究推导逻辑',
        scene: '学业攻坚',
        desc: '遇难题必深究推导原理与解题模型，演算草稿清晰规范留存；绝不照抄题解、绝不盲目瞎猜答案。',
        seal: '穷理验讫'
      },
      {
        code: '条款 1-2',
        title: '实事求是，错题原样红笔订正',
        scene: '反思复盘',
        desc: '对待错漏不遮掩、不护短，每一道错题必须用红笔原样标注思考卡点，查明真因直至彻底清零。',
        seal: '求真无欺'
      }
    ]
  },
  {
    id: 'zhizhi',
    idxStr: '第二目',
    name: '致知',
    fullName: '第二目：致知 · 启智博学',
    icon: '💡',
    summary: '启迪认知 · 融会贯通 · 博学精思',
    classicQuote: '《大学》：“所谓致知在格物者，言欲致吾之知，在即物而穷其理也。”',
    classicExplain: '推极内在的良知与智慧，开阔眼界，善于举一反三，在实践中验证真知。',
    rules: [
      {
        code: '条款 2-1',
        title: '日新博学，每日晨诵不辍',
        scene: '经典诵读',
        desc: '每日清晨专注朗诵古籍经典或精选范文不少于15分钟，学而不厌，在反复诵读中体味先贤智慧风骨。',
        seal: '温故知新'
      },
      {
        code: '条款 2-2',
        title: '学思结合，知行相互印证',
        scene: '知行合一',
        desc: '每学完一项核心技能或解题模型，必须在现实中尝试应用与讲解复述，知其然更知其所以然。',
        seal: '融会贯通'
      }
    ]
  },
  {
    id: 'chengyi',
    idxStr: '第三目',
    name: '诚意',
    fullName: '第三目：诚意 · 慎独守诺',
    icon: '🧭',
    summary: '慎独克己 · 不欺暗室 · 言出必践',
    classicQuote: '《大学》：“所谓诚其意者，毋自欺也，如恶恶臭，如好好色，此之谓自谦，故君子必慎其独也。”',
    classicExplain: '不自欺欺人，心口如一。独处之时依然如面对神明长者，严守自律底线。',
    rules: [
      {
        code: '条款 3-1',
        title: '暗室慎独，考试测验绝不作弊',
        scene: '道德底线',
        desc: '无论身边是否有人监督，测试做题坚决不翻看参考答案，绝不伪造专注工时与打卡凭证，光明磊落。',
        seal: '慎独克己'
      },
      {
        code: '条款 3-2',
        title: '重诺千金，契约约定全力践行',
        scene: '守信立宪',
        desc: '凡经亲子协商签字确立的攻坚目标与契约，克服困难拼尽全力履约；若违诺主动认罚，绝不推诿抵赖。',
        seal: '言必信果'
      }
    ]
  },
  {
    id: 'zhengxin',
    idxStr: '第四目',
    name: '正心',
    fullName: '第四目：正心 · 定力克浮',
    icon: '⚖️',
    summary: '端正心性 · 戒除浮躁 · 情绪定力',
    classicQuote: '《大学》：“身有所忿懥，则不得其正；有所恐惧，则不得其正；有所好乐，则不得其正；有所忧患，则不得其正。”',
    classicExplain: '端正内心情感，不受愤怒、恐惧、贪乐、忧患所动摇，保持定力与中正。',
    rules: [
      {
        code: '条款 4-1',
        title: '诱惑断念，电子屏幕5分钟冷静期',
        scene: '防沉迷防线',
        desc: '面对手机、网络游戏与不良娱乐诱惑，严格遵守非学习用途不碰原则，执行5分钟深呼吸冷静期切断诱惑。',
        seal: '定力不动'
      },
      {
        code: '条款 4-2',
        title: '胜不骄败不馁，不迁怒不抱怨',
        scene: '逆境心智',
        desc: '竞赛得奖不狂妄轻敌，遭遇挫折失利不摔东西、不迁怒父母同伴，心平气和分析卡点，从头再战。',
        seal: '中正平和'
      }
    ]
  },
  {
    id: 'xiushen',
    idxStr: '第五目',
    name: '修身',
    fullName: '第五目：修身 · 强健律己',
    icon: '🥋',
    summary: '严于律己 · 强健体魄 · 规律起居',
    classicQuote: '《大学》：“心正而后身修……自天子以至于庶人，壹是皆以修身为本。”',
    classicExplain: '将内心的修养落实于举手投足与起居作息，持之以恒，强健筋骨，仪容端庄。',
    rules: [
      {
        code: '条款 5-1',
        title: '作息如钟，早睡早起不拖拉',
        scene: '生活作息',
        desc: '按时就寝不熬夜，睡前30分钟停止使用电子屏幕并收纳好书包桌面；晨起利落不赖床，以充沛精力迎朝阳。',
        seal: '作息有度'
      },
      {
        code: '条款 5-2',
        title: '刚健不息，每日专项体适能实训',
        scene: '武道体能',
        desc: '每日坚持跳绳不少于500次或体适能专项训练不少于30分钟，风雨无阻，磨砺坚忍不拔的钢铁体魄。',
        seal: '自强不息'
      }
    ]
  },
  {
    id: 'qijia',
    idxStr: '第六目',
    name: '齐家',
    fullName: '第六目：齐家 · 孝亲担当',
    icon: '🏡',
    summary: '孝亲敬长 · 友爱同侪 · 家庭责任',
    classicQuote: '《大学》：“身修而后家齐……其家不可教而能教人者，无之。”',
    classicExplain: '在家庭中恪守孝道、分担责任，使家人和睦相处、其乐融融。',
    rules: [
      {
        code: '条款 6-1',
        title: '孝亲体恤，出必告反必面',
        scene: '家庭礼序',
        desc: '外出归家必向长辈主动招呼，同父母说话语气温和、态度恭谨，体谅父母工作辛劳，不任性顶撞。',
        seal: '温良恭俭'
      },
      {
        code: '条款 6-2',
        title: '共担家责，个人内务自主料理',
        scene: '生活自立',
        desc: '自己的卧室、被褥、书桌与衣物全部自主整理整洁，每日主动分担餐后洗碗、倒垃圾等家庭公共家务。',
        seal: '自立齐家'
      }
    ]
  },
  {
    id: 'zhiguo',
    idxStr: '第七目',
    name: '治国',
    fullName: '第七目：治国 · 遵规守纪',
    icon: '🏛️',
    summary: '遵规守纪 · 集体担当 · 公德操守',
    classicQuote: '《大学》：“家齐而后国治……一家仁，一国兴仁；一家让，一国兴让。”',
    classicExplain: '将修身齐家的品德扩展到集体与社会，讲求公德、遵守规则、勇于担当。',
    rules: [
      {
        code: '条款 7-1',
        title: '严守公德，遵守公共校规班规',
        scene: '集体公德',
        desc: '在校严格遵守中职少儿校规班纪，在公共场所轻声慢步、不喧哗插队、爱护公物与图书，讲文明懂礼让。',
        seal: '规矩方圆'
      },
      {
        code: '条款 7-2',
        title: '同伴协同，全力维护集体荣誉',
        scene: '团队担当',
        desc: '对同伴平等尊重、友好互助，不拉帮结派孤立他人；班级活动与团队集训中全力以赴，为集体争光。',
        seal: '团结协力'
      }
    ]
  },
  {
    id: 'pingtianxia',
    idxStr: '第八目',
    name: '平天下',
    fullName: '第八目：平天下 · 志存高远',
    icon: '🌏',
    summary: '胸怀大义 · 仁爱万物 · 远大抱负',
    classicQuote: '《大学》：“国治而后天下平……尧舜帅天下以仁，而民从之。”',
    classicExplain: '立志以仁爱兼济天下，关爱众生自然，成为对国家社会有益的坚毅栋梁之材。',
    rules: [
      {
        code: '条款 8-1',
        title: '仁爱万物，勤俭惜物关爱自然',
        scene: '社会自然',
        desc: '厉行节约，不浪费每一粒粮食与水资源；关爱保护动植物，热心参与社区义卖与助人志愿公益。',
        seal: '厚德载物'
      },
      {
        code: '条款 8-2',
        title: '立鸿鹄志，不困于一时一隅得失',
        scene: '远大志向',
        desc: '胸怀家国大义，不为一时一次的考试挫折所沮丧，以坚韧不拔的恒心志气，立志成为国之栋梁。',
        seal: '志存高远'
      }
    ]
  }
];

// 渲染《大学》八目分类法典列表 HTML
function renderDaxueEightItemsHtml(filterId) {
  const list = window.UNIVERSITY_EIGHT_ITEMS_DATA || [];
  
  // 1. 如果是“八目全景通览” (all)，采用紧凑型 2-3 列响应式栅格布局展示精炼金石卡
  if (!filterId || filterId === 'all') {
    return '<div class="daxue-eight-grid">' +
      list.map(item => {
        const isNeiSheng = ['gewu', 'zhizhi', 'chengyi', 'zhengxin'].includes(item.id);
        const stageBadge = isNeiSheng ? '🌿 内圣之基' : '🌏 外王之成';
        const stageColor = isNeiSheng ? '#b45309' : '#059669';

        return '<div class="daxue-grid-card" onclick="openDaxueItemDetailModal(&apos;' + item.id + '&apos;)">' +
          '  <div>' +
          '    <div class="card-top">' +
          '      <div style="display:flex; align-items:center; gap:8px;">' +
          '        <span style="font-size:20px;">' + item.icon + '</span>' +
          '        <strong style="font-size:14px; font-weight:900; color:#7f1d1d;">' + item.fullName + '</strong>' +
          '      </div>' +
          '      <span style="font-size:10px; font-weight:800; color:' + stageColor + '; background:#fffbeb; border:1px solid #fed7aa; padding:1px 6px; border-radius:6px;">' + stageBadge + '</span>' +
          '    </div>' +
          '    <div class="card-keynote">“' + item.summary + '”</div>' +
          '    <div class="card-quote-snippet" title="' + item.classicQuote + '">' + item.classicQuote + '</div>' +
          '    <div class="rules-compact-list">' +
          item.rules.map(r => {
            return '      <div class="rule-compact-chip">' +
              '        <span style="font-weight:700; color:#1e293b; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">• ' + r.title + '</span>' +
              '        <span style="font-size:9.5px; color:#b91c1c; font-weight:bold; flex-shrink:0;">' + r.seal + ' ✓</span>' +
              '      </div>';
          }).join('') +
          '    </div>' +
          '  </div>' +
          '  <div class="card-footer-action">' +
          '    <span>📖 调阅立宪原典与条目细则</span>' +
          '    <span>➔</span>' +
          '  </div>' +
          '</div>';
      }).join('') +
      '</div>';
  }

  // 2. 如果选中了单目 Tab，采用双列聚焦栅格布局 (左侧先贤圣言渊源，右侧立宪条款列表)
  const item = list.find(x => x.id === filterId);
  if (!item) return '';

  return '<div class="daxue-single-grid" id="daxue-item-' + item.id + '">' +
    '  <!-- 左列：圣贤原典与知行要义引据卡 -->' +
    '  <div style="background:#ffffff; border:1.5px solid #d4c5a9; border-left:5px solid #991b1b; border-radius:14px; padding:18px 20px; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 3px 10px rgba(120,53,15,0.06);">' +
    '    <div>' +
    '      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px dashed #e2d9c8; padding-bottom:10px;">' +
    '        <div style="display:flex; align-items:center; gap:10px;">' +
    '          <span style="font-size:26px;">' + item.icon + '</span>' +
    '          <div>' +
    '            <h3 style="margin:0; font-size:16px; font-weight:900; color:#7f1d1d;">' + item.fullName + '</h3>' +
    '            <div style="font-size:11.5px; color:#b45309; margin-top:2px; font-weight:bold;">' + item.summary + '</div>' +
    '          </div>' +
    '        </div>' +
    '        <span class="classic-vermilion-seal">' + item.idxStr + ' · 终身戒律</span>' +
    '      </div>' +
    '      <div class="daxue-quote-box" style="margin-bottom:12px;">' +
    '        <div style="font-weight:bold; color:#78350f; font-size:11.5px; margin-bottom:4px;">📖 先贤圣言原典出处：</div>' +
    '        <div style="color:#991b1b; font-style:italic; font-family:STSong, serif; font-size:12.5px; line-height:1.6;">' + item.classicQuote + '</div>' +
    '        <div style="font-size:11.5px; color:#451a03; margin-top:8px; line-height:1.6; background:#fff; padding:8px 12px; border-radius:6px; border:1px solid #e5dccb;">' +
    '          <strong>【知行合一要义】</strong> ' + item.classicExplain +
    '        </div>' +
    '      </div>' +
    '    </div>' +
    '    <button type="button" class="modal-3d-btn parchment" style="width:100%; margin-top:8px;" onclick="openDaxueItemDetailModal(&apos;' + item.id + '&apos;)">🔍 点击全屏检视此目法典详注 ➔</button>' +
    '  </div>' +

    '  <!-- 右列：亲子确立生效之行为规范条款网格 -->' +
    '  <div style="display:flex; flex-direction:column; gap:10px;">' +
    item.rules.map(r => {
      return '    <div class="daxue-rule-row" style="background:#ffffff; box-shadow:0 2px 6px rgba(0,0,0,0.03);">' +
        '      <div style="flex:1;">' +
        '        <div style="display:flex; align-items:center; gap:8px;">' +
        '          <span style="font-size:10px; background:#fef2f2; color:#991b1b; border:1px solid #fecaca; padding:1px 6px; border-radius:4px; font-weight:bold;">' + r.code + '</span>' +
        '          <strong style="font-size:13px; color:#1e293b;">' + r.title + '</strong>' +
        '          <span style="font-size:10px; background:#f1f5f9; color:#475569; padding:1px 6px; border-radius:4px;">' + r.scene + '</span>' +
        '        </div>' +
        '        <div style="font-size:11.5px; color:#475569; margin-top:6px; line-height:1.5;">' + r.desc + '</div>' +
        '      </div>' +
        '      <div style="display:flex; flex-direction:column; align-items:center; flex-shrink:0;">' +
        '        <span class="classic-vermilion-seal" style="font-size:10px; padding:2px 6px;">' + r.seal + ' ✓</span>' +
        '        <span style="font-size:9.5px; color:#15803d; margin-top:3px; font-weight:bold;">已确立生效</span>' +
        '      </div>' +
        '    </div>';
    }).join('') +
    '  </div>' +
    '</div>';
}

function openDaxueItemDetailModal(itemId) {
  const item = (window.UNIVERSITY_EIGHT_ITEMS_DATA || []).find(x => x.id === itemId);
  if (!item) return;

  const modal = document.getElementById('daxue-item-detail-modal');
  if (!modal) return;

  const bodyElem = document.getElementById('daxue-item-modal-body');
  if (bodyElem) {
    bodyElem.innerHTML = renderDaxueItemModalBody(item);
  }
  modal.style.display = 'flex';
}

function closeDaxueItemDetailModal() {
  const modal = document.getElementById('daxue-item-detail-modal');
  if (modal) modal.style.display = 'none';
}

function renderDaxueItemModalBody(item) {
  const currentIndex = (window.UNIVERSITY_EIGHT_ITEMS_DATA || []).findIndex(x => x.id === item.id);
  const total = (window.UNIVERSITY_EIGHT_ITEMS_DATA || []).length;
  const prevId = currentIndex > 0 ? window.UNIVERSITY_EIGHT_ITEMS_DATA[currentIndex - 1].id : null;
  const nextId = currentIndex < total - 1 ? window.UNIVERSITY_EIGHT_ITEMS_DATA[currentIndex + 1].id : null;

  return '<div style="display:flex; flex-direction:column; gap:16px;">' +
    '  <!-- 典籍题头 -->' +
    '  <div style="background:#faf6ed; border:1.5px solid #d4c5a9; border-left:5px solid #991b1b; border-radius:12px; padding:16px 20px;">' +
    '    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">' +
    '      <div style="display:flex; align-items:center; gap:10px;">' +
    '        <span style="font-size:28px;">' + item.icon + '</span>' +
    '        <div>' +
    '          <h3 style="margin:0; font-size:17px; font-weight:900; color:#7f1d1d; letter-spacing:1px;">' + item.fullName + '</h3>' +
    '          <div style="font-size:12px; color:#b45309; margin-top:3px; font-weight:bold;">' + item.summary + '</div>' +
    '        </div>' +
    '      </div>' +
    '      <span class="classic-vermilion-seal" style="font-size:11px; padding:4px 10px;">' + item.idxStr + ' · 终身自律底线</span>' +
    '    </div>' +
    '    <div style="margin-top:14px; padding-top:12px; border-top:1px dashed #e2d9c8;">' +
    '      <div style="font-size:12px; color:#78350f; font-weight:bold; margin-bottom:4px;">📖 先贤圣言原典出处：</div>' +
    '      <div style="font-size:13px; color:#991b1b; font-style:italic; font-family:STSong, serif; line-height:1.6;">' + item.classicQuote + '</div>' +
    '      <div style="font-size:12px; color:#451a03; margin-top:8px; line-height:1.6; background:#fff; padding:10px 14px; border-radius:8px; border:1px solid #e5dccb;">' +
    '        <strong>【知行合一释义】</strong> ' + item.classicExplain +
    '      </div>' +
    '    </div>' +
    '  </div>' +

    '  <!-- 已确立的法典戒律清单 -->' +
    '  <div>' +
    '    <div style="font-size:14px; font-weight:900; color:#7f1d1d; margin-bottom:10px; display:flex; align-items:center; gap:6px;">' +
    '      <span>⚖️ 亲子共同确立生效之行为戒律条款</span>' +
    '      <span style="font-size:11px; color:#15803d; font-weight:bold;">(共 ' + item.rules.length + ' 条 · 终身履约)</span>' +
    '    </div>' +
    '    <div style="display:flex; flex-direction:column; gap:10px;">' +
    item.rules.map(r => {
      return '      <div style="background:#ffffff; border:1.5px solid #d4c5a9; border-radius:10px; padding:14px 16px; display:flex; justify-content:space-between; align-items:flex-start; gap:14px;">' +
        '        <div style="flex:1;">' +
        '          <div style="display:flex; align-items:center; gap:8px;">' +
        '            <span style="font-size:10.5px; background:#fef2f2; color:#991b1b; border:1px solid #fecaca; padding:2px 7px; border-radius:4px; font-weight:bold;">' + r.code + '</span>' +
        '            <strong style="font-size:13.5px; color:#1e293b;">' + r.title + '</strong>' +
        '            <span style="font-size:10px; background:#f1f5f9; color:#475569; padding:2px 7px; border-radius:4px;">适用场景：' + r.scene + '</span>' +
        '          </div>' +
        '          <div style="font-size:12px; color:#475569; margin-top:8px; line-height:1.6;">' + r.desc + '</div>' +
        '        </div>' +
        '        <div style="display:flex; flex-direction:column; align-items:center; flex-shrink:0;">' +
        '          <span class="classic-vermilion-seal" style="font-size:10.5px; padding:3px 8px;">' + r.seal + ' ✓</span>' +
        '          <span style="font-size:10px; color:#15803d; margin-top:4px; font-weight:bold;">契约加盖生效</span>' +
        '        </div>' +
        '      </div>';
    }).join('') +
    '    </div>' +
    '  </div>' +

    '  <!-- 翻页导航 -->' +
    '  <div style="display:flex; justify-content:space-between; align-items:center; padding-top:12px; border-top:1.5px dashed #d4c5a9;">' +
    (prevId ? '    <button type="button" class="modal-3d-btn parchment" onclick="openDaxueItemDetailModal(&apos;' + prevId + '&apos;)">◀️ 上一目：' + window.UNIVERSITY_EIGHT_ITEMS_DATA[currentIndex - 1].name + '</button>' : '<div></div>') +
    (nextId ? '    <button type="button" class="modal-3d-btn parchment" onclick="openDaxueItemDetailModal(&apos;' + nextId + '&apos;)">下一目：' + window.UNIVERSITY_EIGHT_ITEMS_DATA[currentIndex + 1].name + ' ▶️</button>' : '<div></div>') +
    '  </div>' +
    '</div>';
}

function switchDaxueTab(tabId, btn) {
  window.CURRENT_DAXUE_TAB = tabId;
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.daxue-eight-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  const container = document.getElementById('daxue-eight-cards-container');
  if (container) {
    container.innerHTML = renderDaxueEightItemsHtml(tabId);
  }
}

// 渲染个人行为规范全景专属工作台
function renderTreeSpecializedWorkspace() {
  const currentTab = window.CURRENT_DAXUE_TAB || 'all';

  return '<div class="classic-code-book-wrapper">' +
    '  <!-- 顶栏横幅 -->' +
    '  <div class="ws-spec-notice-banner" style="margin-bottom:16px; background:#fffbf0; border-color:#991b1b; border-left-color:#7f1d1d;">' +
    '    <div>' +
    '      <div class="ws-spec-notice-title" style="color:#7f1d1d; display:flex; align-items:center; gap:8px;">' +
    '        <span>📜《个人行为规范》· 遵《大学》八目立宪法典长卷</span>' +
    '        <span style="font-size:10px; background:#fef2f2; color:#991b1b; border:1px solid #fecaca; padding:2px 8px; border-radius:10px; font-weight:bold;">三纲八目体系</span>' +
    '      </div>' +
    '      <div class="ws-spec-notice-desc" style="color:#991b1b;">【纯查阅功能 · 严格无打卡】遵照《大学》八目（格物、致知、诚意、正心、修身、齐家、治国、平天下）系统分类展示之前已确立生效的终身行为戒律，绝不作为每日真实行为输入源。</div>' +
    '    </div>' +
    '    <span class="classic-vermilion-seal">立身之本 · 八目立宪</span>' +
    '  </div>' +

    '  <!-- 法典题头 -->' +
    '  <div class="classic-code-header">' +
    '    <div>' +
    '      <div class="classic-code-title">📜 齐天终身行为规范戒律法典 · 八目经纬</div>' +
    '      <div style="font-size:11px; color:#78350f; margin-top:4px;">格物致知以穷理 · 诚意正心以立命 · 修齐治平以达天下 · 亲子立宪朱砂印存</div>' +
    '    </div>' +
    '    <span class="classic-vermilion-seal">朱砂钤印 · 不可逾越</span>' +
    '  </div>' +

    '  <!-- 《大学》八目分类经纬导航栏 -->' +
    '  <div class="daxue-eight-tabs-bar" id="daxue-eight-tabs">' +
    '    <button type="button" class="daxue-eight-pill' + (currentTab === 'all' ? ' active' : '') + '" onclick="switchDaxueTab(&apos;all&apos;, this)">📜 八目全景通览</button>' +
    '    <button type="button" class="daxue-eight-pill' + (currentTab === 'gewu' ? ' active' : '') + '" onclick="switchDaxueTab(&apos;gewu&apos;, this)">🌿 1. 格物</button>' +
    '    <button type="button" class="daxue-eight-pill' + (currentTab === 'zhizhi' ? ' active' : '') + '" onclick="switchDaxueTab(&apos;zhizhi&apos;, this)">💡 2. 致知</button>' +
    '    <button type="button" class="daxue-eight-pill' + (currentTab === 'chengyi' ? ' active' : '') + '" onclick="switchDaxueTab(&apos;chengyi&apos;, this)">🧭 3. 诚意</button>' +
    '    <button type="button" class="daxue-eight-pill' + (currentTab === 'zhengxin' ? ' active' : '') + '" onclick="switchDaxueTab(&apos;zhengxin&apos;, this)">⚖️ 4. 正心</button>' +
    '    <button type="button" class="daxue-eight-pill' + (currentTab === 'xiushen' ? ' active' : '') + '" onclick="switchDaxueTab(&apos;xiushen&apos;, this)">🥋 5. 修身</button>' +
    '    <button type="button" class="daxue-eight-pill' + (currentTab === 'qijia' ? ' active' : '') + '" onclick="switchDaxueTab(&apos;qijia&apos;, this)">🏡 6. 齐家</button>' +
    '    <button type="button" class="daxue-eight-pill' + (currentTab === 'zhiguo' ? ' active' : '') + '" onclick="switchDaxueTab(&apos;zhiguo&apos;, this)">🏛️ 7. 治国</button>' +
    '    <button type="button" class="daxue-eight-pill' + (currentTab === 'pingtianxia' ? ' active' : '') + '" onclick="switchDaxueTab(&apos;pingtianxia&apos;, this)">🌏 8. 平天下</button>' +
    '  </div>' +

    '  <!-- 《大学》八目分类法典大卡片长卷容器 -->' +
    '  <div id="daxue-eight-cards-container">' +
    renderDaxueEightItemsHtml(currentTab) +
    '  </div>' +

    '  <!-- 历次现实诱惑考验实录 (金石谱) -->' +
    '  <div style="background:#ffffff; border:1.5px solid #d4c5a9; border-radius:12px; padding:14px; margin-top:16px;">' +
    '    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">' +
    '      <div style="font-size:13px; font-weight:900; color:#7f1d1d;">⚡ 历次现实诱惑考验实录 (金石谱)</div>' +
    '      <span style="font-size:11px; color:#15803d; font-weight:800;">✅ 已成功通过 14 次诱惑考验</span>' +
    '    </div>' +
    '    <div style="display:flex; flex-direction:column; gap:8px;">' +
    '      <div style="background:#faf6ed; border-left:3px solid #16a34a; padding:8px 12px; border-radius:6px; font-size:11px; display:flex; justify-content:space-between;">' +
    '        <span><strong>考验 14【正心·断念】：</strong> 周末好友联机游戏升级诱惑 ➔ 【决断：坚守原则主动关机交付父母保管】</span>' +
    '        <span style="color:#b91c1c; font-weight:bold;">朱砂盖印 ✓</span>' +
    '      </div>' +
    '      <div style="background:#faf6ed; border-left:3px solid #16a34a; padding:8px 12px; border-radius:6px; font-size:11px; display:flex; justify-content:space-between;">' +
    '        <span><strong>考验 13【格物·求真】：</strong> 压轴大题验算受挫想翻看答案 ➔ 【决断：独立重推 40 分钟成功破解】</span>' +
    '        <span style="color:#b91c1c; font-weight:bold;">朱砂盖印 ✓</span>' +
    '      </div>' +
    '    </div>' +
    '  </div>' +

    '  <!-- 底部双驱古典 3D 拟物操作大按键 -->' +
    '  <div class="tree-footer-action-bar">' +
    '    <button type="button" class="tree-action-btn pact-btn" onclick="openFamilyPactModal()">' +
    '      <span style="font-size:16px;">📜</span>' +
    '      <span>亲子立宪公约全文与戒律法典</span>' +
    '      <span class="btn-badge">正本存证</span>' +
    '    </button>' +
    '    <button type="button" class="tree-action-btn philo-btn" onclick="openDaxuePhilosophyModal()">' +
    '      <span style="font-size:16px;">🔍</span>' +
    '      <span>检视《大学》八目修身哲学体系</span>' +
    '      <span class="btn-badge">全息解构</span>' +
    '    </button>' +
    '  </div>' +
    '</div>';
}

function showDaxueEightPhilosophy() {
  openDaxuePhilosophyModal();
}


window.ACHIEVEMENT_STATE = {
  currentTab: 'cultivation',
  cultivationItems: [],
  accidentalItems: []
};

// 渲染成就馆全景专属工作区
function renderAchieveSpecializedWorkspace() {
  const cultItems = window.ACHIEVEMENT_STATE.cultivationItems || [];
  const accItems = window.ACHIEVEMENT_STATE.accidentalItems || [];
  const currentTab = window.ACHIEVEMENT_STATE.currentTab || 'cultivation';

  return '<div class="achieve-hall-wrapper">' +
    '  <!-- 顶栏双轨机制横幅 (晨曦阳光暖阳金殿) -->' +
    '  <div class="ws-spec-notice-banner" style="background:linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%); border:1.5px solid #fbbf24; border-left:5px solid #f59e0b; margin-bottom:20px; box-shadow:0 4px 14px rgba(245, 158, 11, 0.12);">' +
    '    <div style="flex:1;">' +
    '      <div class="ws-spec-notice-title" style="color:#78350f; display:flex; align-items:center; gap:8px;">' +
    '        <span style="font-size:20px;">🏆</span>' +
    '        <span style="font-weight:900; font-size:15px; letter-spacing:0.5px;">成就馆 · 青少年成长高光史诗荣誉殿堂</span>' +
    '        <span style="background:linear-gradient(135deg, #f59e0b, #d97706); color:#fff; font-size:10px; font-weight:900; padding:2px 8px; border-radius:8px; box-shadow:0 1px 3px rgba(217,119,6,0.3);">双轨分类架构</span>' +
    '      </div>' +
    '      <div class="ws-spec-notice-desc" style="color:#92400e; font-size:11.5px; margin-top:3px;">' +
    '        🌱 养成类成就（各模块项目执行通关沉淀 · 严禁手动新增 · 按项目类型分组） ｜ ✨ 偶然成就（生活学习高光抓取 · 支持随时自主新增 · 按成就类别分组）' +
    '      </div>' +
    '    </div>' +
    '    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">' +
    '      <button type="button" class="tree-action-btn philo-btn" style="height:36px; padding:0 13px; font-size:11.5px;" onclick="openRegisterAccidentalAchievementModal()">' +
    '        <span>✨</span>' +
    '        <span>记录偶然成就</span>' +
    '      </button>' +
    '      <button type="button" class="tree-action-btn rule-btn" style="height:36px; padding:0 13px; font-size:11.5px;" onclick="openBountyModal()">' +
    '        <span>📜</span>' +
    '        <span>置顶悬赏荣誉</span>' +
    '      </button>' +
    '      <button type="button" class="tree-action-btn law-btn" style="height:36px; padding:0 13px; font-size:11.5px;" onclick="jumpFromAchieveToProjectWorkspace(&apos;note&apos;, &apos;每日随记&apos;)">' +
    '        <span>📝</span>' +
    '        <span>时序随记</span>' +
    '      </button>' +
    '    </div>' +
    '  </div>' +

    '  <!-- 顶层核心分类切换标签栏 -->' +
    '  <div class="achieve-tab-bar">' +
    '    <button type="button" class="achieve-tab-btn' + (currentTab === 'cultivation' ? ' active' : '') + '" onclick="switchAchieveTab(&apos;cultivation&apos;, this)">' +
    '      <span>🌱 项目养成类成就</span>' +
    '      <span class="badge-count">' + cultItems.length + ' 项</span>' +
    '    </button>' +
    '    <button type="button" class="achieve-tab-btn' + (currentTab === 'accidental' ? ' active' : '') + '" onclick="switchAchieveTab(&apos;accidental&apos;, this)">' +
    '      <span>✨ 生活学习偶然成就</span>' +
    '      <span class="badge-count">' + accItems.length + ' 项</span>' +
    '    </button>' +
    '    <button type="button" class="achieve-tab-btn' + (currentTab === 'all' ? ' active' : '') + '" onclick="switchAchieveTab(&apos;all&apos;, this)">' +
    '      <span>🏛️ 双轨全貌总览</span>' +
    '      <span class="badge-count">' + (cultItems.length + accItems.length) + ' 枚</span>' +
    '    </button>' +
    '  </div>' +

    '  <!-- 专区 1: 🌱 项目养成类成就展厅 (按项目类型分组，组内按时间线展示) -->' +
    '  <div id="achieve-cultivation-section" style="' + (currentTab === 'accidental' ? 'display:none;' : 'display:block;') + '">' +
    '    <!-- 铁律提示卡 -->' +
    '    <div style="background:linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); border:1.5px solid #fde68a; border-left:4.5px solid #f59e0b; border-radius:14px; padding:12px 18px; margin-bottom:18px; display:flex; align-items:center; justify-content:space-between; box-shadow:0 2px 8px rgba(245,158,11,0.06);">' +
    '      <div style="display:flex; align-items:center; gap:10px;">' +
    '        <span style="font-size:22px;">🔒</span>' +
    '        <div>' +
    '          <strong style="color:#78350f; font-size:13.5px;">养成类成就沉淀铁律：不可手动新增</strong>' +
    '          <div style="font-size:11.5px; color:#92400e; margin-top:2px;">只能在各模块项目规划与执行中，完成目标分解卡片的通关验收后，点击【记录到成就馆】自动将实测指标与交付物归档沉淀于此。</div>' +
    '        </div>' +
    '      </div>' +
    '      <span style="font-size:11px; color:#b45309; font-weight:850; background:#ffffff; padding:4px 12px; border-radius:12px; border:1px solid #f59e0b; white-space:nowrap; box-shadow:0 1px 3px rgba(245,158,11,0.15);">按项目类型分组 · 倒序时间线</span>' +
    '    </div>' +

    '    <!-- 养成类分组列表 -->' +
    '    <div id="achieve-cultivation-groups">' +
    renderCultivationGroupsHtml(cultItems) +
    '    </div>' +
    '  </div>' +

    '  <!-- 专区 2: ✨ 生活学习偶然成就展厅 (按成就类别分组，组内按时间线展示) -->' +
    '  <div id="achieve-accidental-section" style="' + (currentTab === 'cultivation' ? 'display:none;' : 'display:block;') + '">' +
    '    <!-- 偶然成就引导卡 -->' +
    '    <div style="background:linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%); border:1.5px solid #bbf7d0; border-left:4.5px solid #10b981; border-radius:14px; padding:12px 18px; margin-bottom:18px; display:flex; align-items:center; justify-content:space-between; box-shadow:0 2px 8px rgba(16,185,129,0.06);">' +
    '      <div style="display:flex; align-items:center; gap:10px;">' +
    '        <span style="font-size:22px;">✨</span>' +
    '        <div>' +
    '          <strong style="color:#065f46; font-size:13.5px;">偶然成就高光捕手：支持随时自主记录</strong>' +
    '          <div style="font-size:11.5px; color:#047857; margin-top:2px;">生活自立、探索发现、艺术表达、意外荣誉——只要是你感到自豪的成长瞬间，随时点击右上角记录，上传物证照片，以时间轴镌刻青春印记！</div>' +
    '        </div>' +
    '      </div>' +
    '      <button type="button" class="exec-action-btn primary" style="background:linear-gradient(135deg, #10b981, #059669); border:1.5px solid #34d399; color:#fff; font-weight:900; padding:6px 16px; font-size:11.5px; white-space:nowrap;" onclick="openRegisterAccidentalAchievementModal()">➕ 记录偶然成就</button>' +
    '    </div>' +

    '    <!-- 偶然类分组列表 -->' +
    '    <div id="achieve-accidental-groups">' +
    renderAccidentalGroupsHtml(accItems) +
    '    </div>' +
    '  </div>' +
    '</div>';
}

// 切换成就馆主标签
function switchAchieveTab(tab, btn) {
  window.ACHIEVEMENT_STATE.currentTab = tab;
  if (btn) {
    document.querySelectorAll('.achieve-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  const cultSec = document.getElementById('achieve-cultivation-section');
  const accSec = document.getElementById('achieve-accidental-section');

  if (tab === 'cultivation') {
    if (cultSec) cultSec.style.display = 'block';
    if (accSec) accSec.style.display = 'none';
  } else if (tab === 'accidental') {
    if (cultSec) cultSec.style.display = 'none';
    if (accSec) accSec.style.display = 'block';
  } else {
    // all
    if (cultSec) cultSec.style.display = 'block';
    if (accSec) accSec.style.display = 'block';
  }
}

// 渲染养成类成就分组（按项目类型分组，每组内按时间线展示）
function renderCultivationGroupsHtml(items) {
  const groupsDef = [
    { type: 'study', title: '📐 校史馆 · 学科学业攻坚', icon: '📐', desc: '口算通关、错题清零、专项题解等成果' },
    { type: 'dojo', title: '🥋 武道馆 · 兴趣体能特长', icon: '🥋', desc: '跳绳连跳突破、羽毛球实训、体能意志成果' },
    { type: 'cultivation', title: '📜 修身阁 · 德育经典修身', icon: '📜', desc: '经典研读知行合一、自律守诺品格成果' },
    { type: 'treasury', title: '💰 藏金屋 · 少儿财商储蓄', icon: '💰', desc: '零用金规划、记账自律、契约储蓄成果' }
  ];

  return '<div class="achieve-projects-grid">' +
    groupsDef.map(grp => {
      const grpItems = (items || []).filter(x => x.projectType === grp.type).sort((a, b) => (b.date > a.date ? 1 : -1));

      let tilesHtml = '';
      if (grpItems.length === 0) {
        tilesHtml = '<div style="color:#94a3b8; font-size:11.5px; padding:18px 0; text-align:center; font-style:italic;">暂无该项目结业成果<br><span style="font-size:10.5px;">完成目标卡片后点击【记录到成就馆】沉淀</span></div>';
      } else {
        tilesHtml = grpItems.map(item => {
          const firstMetric = (item.metrics && item.metrics[0]) ? item.metrics[0].name + ': ' + item.metrics[0].actual : '指标全部达标';

          return '<div class="achieve-compact-tile" onclick="openAchievementDetailModal(&apos;cultivation&apos;, &apos;' + item.id + '&apos;)">' +
            '  <div style="display:flex; justify-content:space-between; align-items:center;">' +
            '    <div style="display:flex; align-items:center; gap:6px;">' +
            '      <span style="font-size:18px;">' + (item.icon || '🏆') + '</span>' +
            '      <strong style="font-size:13px; color:#1e293b; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">' + item.title + '</strong>' +
            '    </div>' +
            '    <span style="background:#fffbeb; color:#b45309; border:1px solid #fde68a; font-size:10px; font-weight:850; padding:1px 6px; border-radius:4px;">📅 ' + item.date + '</span>' +
            '  </div>' +
            '  <div style="font-size:11px; color:#059669; font-weight:800; background:#f0fdf4; border:1px solid #bbf7d0; padding:3px 8px; border-radius:6px; display:flex; justify-content:space-between;">' +
            '    <span>' + firstMetric + '</span>' +
            '    <span style="color:#15803d;">验收通过 ✓</span>' +
            '  </div>' +
            '  <div style="display:flex; justify-content:space-between; align-items:center; font-size:10.5px; color:#64748b; margin-top:2px;">' +
            '    <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:140px;">' + item.proof + '</span>' +
            '    <div style="display:flex; align-items:center; gap:5px;">' +
            '      <button type="button" class="tile-penetrate-btn" onclick="event.stopPropagation(); jumpFromAchieveToProjectWorkspace(&apos;' + item.projectType + '&apos;, &apos;' + (item.projectName || '').replace(/'/g, "\\'") + '&apos;);" title="逆向穿透直达所属场馆业务沙盘">🚀 穿透沙盘</button>' +
            '      <span style="color:#d97706; font-weight:bold;">原件 ➔</span>' +
            '    </div>' +
            '  </div>' +
            '</div>';
        }).join('');
      }

      return '<div class="achieve-grid-cabinet">' +
        '  <div class="achieve-cabinet-header">' +
        '    <div style="display:flex; align-items:center; gap:8px;">' +
        '      <span style="font-size:20px;">' + grp.icon + '</span>' +
        '      <div>' +
        '        <h4 style="margin:0; font-size:14px; color:#78350f; font-weight:900;">' + grp.title + '</h4>' +
        '        <div style="font-size:10.5px; color:#92400e; margin-top:1px;">' + grp.desc + '</div>' +
        '      </div>' +
        '    </div>' +
        '    <span style="font-size:11px; font-weight:900; color:#b45309; background:#fffbeb; border:1px solid #fde68a; padding:2px 8px; border-radius:10px;">' + grpItems.length + ' 项</span>' +
        '  </div>' +
        '  <div>' + tilesHtml + '</div>' +
        '</div>';
    }).join('') +
    '</div>';
}

function renderAccidentalGroupsHtml(items) {
  const categoriesDef = [
    { cat: 'life', title: '🍳 生活自立', icon: '🍳', desc: '独立下厨、整理家务、自立突破' },
    { cat: 'arts', title: '🎨 艺术才华', icon: '🎨', desc: '书画创作、考级演奏、艺术荣誉' },
    { cat: 'discovery', title: '🔭 科学探索', icon: '🔭', desc: '自然观察、创客发明、天文观测' },
    { cat: 'social', title: '🤝 善意关怀', icon: '🤝', desc: '志愿奉献、尊老助人、爱心公益' },
    { cat: 'honor', title: '🏆 意外荣誉', icon: '🏆', desc: '校外竞赛、突发表彰、临场逆转' },
    { cat: 'other', title: '✨ 其他高光', icon: '✨', desc: '成长生活触动心灵之闪光瞬间' }
  ];

  return '<div class="achieve-categories-grid">' +
    categoriesDef.map(grp => {
      const grpItems = (items || []).filter(x => x.category === grp.cat).sort((a, b) => (b.date > a.date ? 1 : -1));

      let tilesHtml = '';
      if (grpItems.length === 0) {
        tilesHtml = '<div style="color:#94a3b8; font-size:11px; padding:14px 0; text-align:center; font-style:italic;">暂无该类高光瞬间<br><span style="font-size:10px;">点击上方记录生活瞬间</span></div>';
      } else {
        tilesHtml = grpItems.map(item => {
          return '<div class="achieve-polaroid-tile" onclick="openAchievementDetailModal(&apos;accidental&apos;, &apos;' + item.id + '&apos;)">' +
            '  <div style="width:44px; height:44px; border-radius:8px; background:linear-gradient(135deg, #ecfdf5, #eff6ff); border:1.5px solid #10b981; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:22px;">' +
            (item.image.includes('🍳') ? '🍳' : (item.image.includes('🔭') ? '🔭' : (item.image.includes('🎨') ? '🎨' : (item.image.includes('🏸') ? '🏸' : '📷')))) +
            '  </div>' +
            '  <div style="flex:1; overflow:hidden;">' +
            '    <div style="font-size:12.5px; font-weight:900; color:#1e293b; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">' + item.title + '</div>' +
            '    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:3px; font-size:10.5px;">' +
            '      <span style="color:#059669; font-weight:bold;">' + item.date + '</span>' +
            '      <div style="display:flex; align-items:center; gap:4px;">' +
            '        <button type="button" class="tile-penetrate-btn" style="background:#ecfdf5; color:#047857; border-color:#a7f3d0;" onclick="event.stopPropagation(); jumpFromAchieveToProjectWorkspace(&apos;note&apos;, &apos;生活心流&apos;);" title="逆向穿透直达每日随记心流">📖 随记</button>' +
            '        <span style="color:#3b82f6; font-weight:800;">物证 ➔</span>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</div>';
        }).join('');
      }

      return '<div class="achieve-grid-cabinet" style="border-color:#a7f3d0;">' +
        '  <div class="achieve-cabinet-header" style="border-bottom-color:#a7f3d0;">' +
        '    <div style="display:flex; align-items:center; gap:8px;">' +
        '      <span style="font-size:18px;">' + grp.icon + '</span>' +
        '      <div>' +
        '        <h4 style="margin:0; font-size:13.5px; color:#065f46; font-weight:900;">' + grp.title + '</h4>' +
        '        <div style="font-size:10px; color:#047857;">' + grp.desc + '</div>' +
        '      </div>' +
        '    </div>' +
        '    <span style="font-size:10.5px; font-weight:900; color:#059669; background:#ecfdf5; border:1px solid #a7f3d0; padding:1px 6px; border-radius:8px;">' + grpItems.length + ' 项</span>' +
        '  </div>' +
        '  <div>' + tilesHtml + '</div>' +
        '</div>';
    }).join('') +
    '</div>';
}


// =====================================================================
// 🏆 成就馆跨模块全域双向逻辑闭环驱动函数
// =====================================================================

// 1. 成就馆逆向穿透直达所属场馆业务工作台沙盘 (根据场馆属性自动路由至甘特规划或专属空间)
function jumpFromAchieveToProjectWorkspace(projectType, label) {
  if (typeof closeAchievementDetailModal === 'function') {
    closeAchievementDetailModal();
  }
  const target = (projectType && (PAVILION_META[projectType] || String(projectType).startsWith('custom-'))) ? projectType : 'study';
  const meta = PAVILION_META[target] || {};
  const targetSub = meta.hasGantt ? 'gantt' : 'specialized';

  if (typeof enterSecondaryWorkspace === 'function') {
    enterSecondaryWorkspace(target, targetSub);
  }

  const modName = meta.name || target;
  showIslandToast('🚀 已成功逆向穿透直达【' + modName + '】' + (targetSub === 'gantt' ? '项目甘特总览' : '专属工作台') + '！');
}

// 2. 成就达成数据反哺同步至每日随记客观事实时序流水
function syncAchievementToDailyNote(sourceType, achTitle) {
  appendDailyAutoLog('🏆 成就荣誉归档：成功解锁【' + achTitle + '】(' + sourceType + ')', 0);
}


function openAchievementDetailModal(type, id) {
  let item = null;
  if (type === 'cultivation') {
    item = (window.ACHIEVEMENT_STATE.cultivationItems || []).find(x => x.id === id);
  } else {
    item = (window.ACHIEVEMENT_STATE.accidentalItems || []).find(x => x.id === id);
  }
  if (!item) return;

  const modal = document.getElementById('achievement-detail-modal');
  if (!modal) return;

  const bodyElem = document.getElementById('achievement-detail-modal-body');
  if (bodyElem) {
    bodyElem.innerHTML = renderAchievementModalBody(type, item);
  }
  modal.style.display = 'flex';
}

function closeAchievementDetailModal() {
  const modal = document.getElementById('achievement-detail-modal');
  if (modal) modal.style.display = 'none';
}

function renderAchievementModalBody(type, item) {
  if (type === 'cultivation') {
    let metricsHtml = '';
    if (item.metrics && item.metrics.length > 0) {
      metricsHtml = '<div style="margin-top:14px; background:#fcfbf8; border:1.5px solid #fed7aa; border-radius:12px; padding:14px 16px;">' +
        '<div style="font-size:12px; font-weight:850; color:#78350f; margin-bottom:10px; display:flex; align-items:center; gap:6px;">' +
        '  <span>📊 攻坚目标指标核验对比清单</span>' +
        '  <span style="font-size:10.5px; color:#15803d; font-weight:bold;">(全部达标归档)</span>' +
        '</div>' +
        '<div style="display:flex; flex-direction:column; gap:8px;">' +
        item.metrics.map(m => {
          return '<div style="display:flex; justify-content:space-between; align-items:center; background:#ffffff; border:1px solid #fde68a; border-radius:8px; padding:8px 12px; font-size:12px;">' +
            '<span style="font-weight:700; color:#1e293b;">• ' + m.name + '</span>' +
            '<div style="display:flex; align-items:center; gap:8px;">' +
            '  <span style="font-size:11px; color:#64748b;">目标要求: ' + m.target + '</span>' +
            '  <span style="color:#059669; font-weight:900; background:#ecfdf5; border:1px solid #a7f3d0; padding:2px 8px; border-radius:6px;">实测: ' + m.actual + '</span>' +
            '</div>' +
            '</div>';
        }).join('') +
        '</div>' +
        '</div>';
    }

    const safeProjName = (item.projectName || '专项课题').replace(/'/g, "\\'");

    return '<div style="display:flex; flex-direction:column; gap:16px;">' +
      '  <div style="background:linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); border:2px solid #f59e0b; border-radius:16px; padding:18px 22px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">' +
      '    <div style="display:flex; align-items:center; gap:14px;">' +
      '      <span style="font-size:36px; line-height:1;">' + (item.icon || '🏆') + '</span>' +
      '      <div>' +
      '        <h3 style="margin:0; font-size:17px; font-weight:900; color:#78350f;">' + item.title + '</h3>' +
      '        <div style="font-size:12px; color:#b45309; margin-top:4px; font-weight:800;">所属课题：' + item.projectName + ' ｜ ' + item.projectTypeLabel + '</div>' +
      '      </div>' +
      '    </div>' +
      '    <span style="background:linear-gradient(135deg, #f59e0b, #d97706); color:#ffffff; font-size:11px; font-weight:900; padding:4px 12px; border-radius:8px; box-shadow:0 2px 6px rgba(217,119,6,0.3);">📅 达成日期：' + item.date + '</span>' +
      '  </div>' +

      metricsHtml +

      '  <div style="background:#ffffff; border:1.5px solid #fed7aa; border-radius:12px; padding:16px; display:flex; flex-direction:column; gap:10px;">' +
      '    <div style="font-size:12.5px; font-weight:850; color:#78350f;">📝 课题攻坚结业成果评述</div>' +
      '    <div style="font-size:12px; color:#334155; line-height:1.65; background:#fffdf8; padding:12px 14px; border-radius:8px; border:1px dashed #fed7aa;">' + item.desc + '</div>' +
      '    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px; font-size:11.5px; flex-wrap:wrap; gap:8px;">' +
      '      <span style="background:#eff6ff; color:#1d4ed8; border:1.5px solid #bfdbfe; padding:4px 10px; border-radius:8px; font-weight:bold;">📦 归档物证：' + item.proof + '</span>' +
      '      <span style="color:#64748b; font-weight:bold;">🏛️ 核验审核方：' + item.issuer + '</span>' +
      '    </div>' +
      '  </div>' +

      '  <!-- 🚀 逆向穿透业务场馆沙盘 CTA -->' +
      '  <div style="background:linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); border:1.8px solid #f59e0b; border-radius:12px; padding:14px 18px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 8px rgba(245, 158, 11, 0.12); flex-wrap:wrap; gap:12px;">' +
      '    <div style="display:flex; align-items:center; gap:10px;">' +
      '      <span style="font-size:24px;">🧭</span>' +
      '      <div>' +
      '        <div style="font-size:12.5px; font-weight:900; color:#78350f;">课题执行沙盘源头追溯与闭环联动</div>' +
      '        <div style="font-size:11px; color:#92400e; margin-top:2px;">所属场馆：<strong>' + item.projectTypeLabel + '</strong> ｜ 项目：' + item.projectName + '</div>' +
      '      </div>' +
      '    </div>' +
      '    <button type="button" class="modal-3d-btn golden" style="padding:7px 16px; font-size:11.5px; font-weight:900; box-shadow:0 3px 8px rgba(217,119,6,0.3);" onclick="jumpFromAchieveToProjectWorkspace(&apos;' + item.projectType + '&apos;, &apos;' + safeProjName + '&apos;)">' +
      '      🚀 穿透前往业务场馆沙盘 ➔' +
      '    </button>' +
      '  </div>' +
      '</div>';
  } else {
    return '<div style="display:flex; flex-direction:column; gap:16px;">' +
      '  <div style="background:linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%); border:2px solid #10b981; border-radius:16px; padding:18px 22px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">' +
      '    <div style="display:flex; align-items:center; gap:14px;">' +
      '      <span style="font-size:36px; line-height:1;">✨</span>' +
      '      <div>' +
      '        <h3 style="margin:0; font-size:17px; font-weight:900; color:#065f46;">' + item.title + '</h3>' +
      '        <div style="font-size:12px; color:#047857; margin-top:4px; font-weight:800;">成就所属类别：' + (item.categoryLabel || '生活高光瞬间') + '</div>' +
      '      </div>' +
      '    </div>' +
      '    <span style="background:linear-gradient(135deg, #10b981, #059669); color:#ffffff; font-size:11px; font-weight:900; padding:4px 12px; border-radius:8px; box-shadow:0 2px 6px rgba(16,185,129,0.3);">📅 记录日期：' + item.date + '</span>' +
      '  </div>' +

      '  <div style="background:#ffffff; border:1.5px solid #a7f3d0; border-radius:12px; padding:16px; display:flex; gap:16px; align-items:center;">' +
      '    <div style="width:130px; height:105px; border-radius:10px; background:linear-gradient(135deg, #ecfdf5, #eff6ff); border:2px solid #10b981; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; flex-shrink:0; box-shadow:0 3px 10px rgba(16,185,129,0.15);">' +
      '      <span style="font-size:36px;">' + (item.image.includes('🍳') ? '🍳' : (item.image.includes('🔭') ? '🔭' : (item.image.includes('🎨') ? '🎨' : (item.image.includes('🏸') ? '🏸' : '📷')))) + '</span>' +
      '      <span style="font-size:10.5px; font-weight:bold; color:#065f46; margin-top:3px;">实拍照高清原件</span>' +
      '    </div>' +
      '    <div style="flex:1;">' +
      '      <div style="font-size:12.5px; font-weight:850; color:#065f46; margin-bottom:6px;">📸 实拍物证档案：' + item.image + '</div>' +
      '      <div style="font-size:12px; color:#334155; line-height:1.65; background:#fcfbf8; padding:10px 12px; border-radius:8px; border:1px dashed #fed7aa;">' + item.desc + '</div>' +
      '      <div style="margin-top:8px; font-size:11px; color:#64748b;">发生地点 / 见证人：<strong style="color:#0f766e;">' + (item.issuer || '自主生活发现') + '</strong></div>' +
      '    </div>' +
      '  </div>' +

      '  <!-- 📖 逆向穿透每日随记心流 CTA -->' +
      '  <div style="background:linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border:1.8px solid #10b981; border-radius:12px; padding:14px 18px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 8px rgba(16, 185, 129, 0.12); flex-wrap:wrap; gap:12px;">' +
      '    <div style="display:flex; align-items:center; gap:10px;">' +
      '      <span style="font-size:24px;">📖</span>' +
      '      <div>' +
      '        <div style="font-size:12.5px; font-weight:900; color:#065f46;">时序心流生活日记追溯与闭环联动</div>' +
      '        <div style="font-size:11px; color:#047857; margin-top:2px;">生活偶发高光已同步收录至齐天每日双轨时序流水中</div>' +
      '      </div>' +
      '    </div>' +
      '    <button type="button" class="modal-3d-btn jade" style="padding:7px 16px; font-size:11.5px; font-weight:900; box-shadow:0 3px 8px rgba(16,185,129,0.3);" onclick="jumpFromAchieveToProjectWorkspace(&apos;note&apos;, &apos;生活心流&apos;)">' +
      '      📖 穿透前往每日随记 ➔' +
      '    </button>' +
      '  </div>' +
      '</div>';
  }
}

function viewCultivationDetail(id) {
  openAchievementDetailModal('cultivation', id);
}

function viewAccidentalDetail(id) {
  openAchievementDetailModal('accidental', id);
}

// 打开记录偶然成就模态弹窗
function openRegisterAccidentalAchievementModal() {
  const modal = document.getElementById('register-accidental-achievement-modal');
  if (modal) {
    modal.style.display = 'flex';
    const dateInput = document.getElementById('achieve-acc-date');
    if (dateInput && !dateInput.value) {
      const now = new Date();
      dateInput.value = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
    }
  }
}

// 关闭记录偶然成就模态弹窗
function closeRegisterAccidentalAchievementModal() {
  const modal = document.getElementById('register-accidental-achievement-modal');
  if (modal) modal.style.display = 'none';
}

// 快速填入偶然成就样例
function fillAccidentalSample(type) {
  const titleInput = document.getElementById('achieve-acc-title');
  const catSelect = document.getElementById('achieve-acc-category');
  const descInput = document.getElementById('achieve-acc-desc');
  const issuerInput = document.getElementById('achieve-acc-issuer');
  const imagePreview = document.getElementById('achieve-acc-image-preview');

  if (type === 'cook') {
    if (catSelect) catSelect.value = 'life';
    if (titleInput) titleInput.value = '第一次独立为全家人做番茄炒蛋晚餐';
    if (descInput) descInput.value = '自己洗切番茄、热油炒蛋，掌握了翻炒火候，虽然被油星溅了一下但坚持做完，爸爸妈妈吃得很开心！';
    if (issuerInput) issuerInput.value = '爸爸妈妈见证 · 家里厨房';
    if (imagePreview) {
      imagePreview.style.display = 'flex';
      imagePreview.innerText = '🍳 样例图片已就绪：热气腾腾的番茄炒蛋出锅实拍照.jpg';
    }
  } else if (type === 'astro') {
    if (catSelect) catSelect.value = 'discovery';
    if (titleInput) titleInput.value = '独立动手制作折射式天文望远镜观测月坑';
    if (descInput) descInput.value = '用纸筒和凸透镜自己调试焦距，晚上在阳台清晰看到了月球第谷环形山，激发起对宇宙的无限好奇。';
    if (issuerInput) issuerInput.value = '学校科技创客指导老师 · 阳台观测';
    if (imagePreview) {
      imagePreview.style.display = 'flex';
      imagePreview.innerText = '🔭 样例图片已就绪：自制折射望远镜与清晰月球环形山目镜实拍.jpg';
    }
  } else if (type === 'art') {
    if (catSelect) catSelect.value = 'arts';
    if (titleInput) titleInput.value = '水墨国画创作入围少儿书画大展特等奖';
    if (descInput) descInput.value = '历时两周完成水墨长卷，在虚实浓淡中体会传统书画的韵味，荣获全国少儿组特等奖。';
    if (issuerInput) issuerInput.value = '全国青少儿书画教育联合会';
    if (imagePreview) {
      imagePreview.style.display = 'flex';
      imagePreview.innerText = '🎨 样例图片已就绪：水墨长卷参赛原件实拍照与特等金奖证书.jpg';
    }
  }
}

// 模拟图片上传
function handleAccidentalImageUpload(input) {
  const preview = document.getElementById('achieve-acc-image-preview');
  if (input && input.files && input.files[0]) {
    const file = input.files[0];
    if (preview) {
      preview.style.display = 'flex';
      preview.innerText = '📷 已上传实拍照片：' + file.name + ' (' + Math.round(file.size / 1024) + 'KB)';
    }
    showIslandToast('📷 偶然成就实拍照已载入！');
  }
}

// 提交偶然成就登记
function submitRegisterAccidentalAchievement() {
  const catSelect = document.getElementById('achieve-acc-category');
  const titleInput = document.getElementById('achieve-acc-title');
  const descInput = document.getElementById('achieve-acc-desc');
  const dateInput = document.getElementById('achieve-acc-date');
  const issuerInput = document.getElementById('achieve-acc-issuer');
  const imagePreview = document.getElementById('achieve-acc-image-preview');

  if (!titleInput || !titleInput.value.trim()) {
    showIslandToast('✍️ 请输入偶然成就的内容标题！');
    if (titleInput) titleInput.focus();
    return;
  }

  const category = (catSelect && catSelect.value) ? catSelect.value : 'life';
  const catMap = {
    life: '🍳 生活自立',
    arts: '🎨 艺术才华',
    discovery: '🔭 科学探索',
    social: '🤝 善意关怀',
    honor: '🏆 意外荣誉',
    other: '✨ 其他高光'
  };
  const categoryLabel = catMap[category] || '✨ 生活偶发高光';
  const title = titleInput.value.trim();
  const desc = (descInput && descInput.value.trim()) ? descInput.value.trim() : '记录生活与学习中的闪光时刻，见证独立心智成长。';
  const date = (dateInput && dateInput.value) ? dateInput.value : '2026-11-02';
  const issuer = (issuerInput && issuerInput.value.trim()) ? issuerInput.value.trim() : '自主生活发现 · 自信留痕';
  let imageText = '🖼️ 现场实拍照片已存档';
  if (imagePreview && imagePreview.innerText) {
    imageText = imagePreview.innerText;
  }

  const newAcc = {
    id: 'ACH-ACC-' + Date.now(),
    date: date,
    category: category,
    categoryLabel: categoryLabel,
    title: title,
    image: imageText,
    desc: desc,
    issuer: issuer
  };

  window.ACHIEVEMENT_STATE.accidentalItems.unshift(newAcc);

  // 📝【双向闭环 4】偶然成就提交时，自动同步至每日随记客观事实流水
  if (typeof syncAchievementToDailyNote === 'function') {
    syncAchievementToDailyNote(categoryLabel, title);
  }

  // 清空表单
  titleInput.value = '';
  if (descInput) descInput.value = '';
  if (issuerInput) issuerInput.value = '';
  if (imagePreview) {
    imagePreview.style.display = 'none';
    imagePreview.innerText = '';
  }

  closeRegisterAccidentalAchievementModal();
  updateAchieveWorkspaceLiveDOM();
  showIslandToast('🌟 恭喜！偶然成就《' + title + '》已成功镌刻入【' + categoryLabel + '】时间线！');
}

// 刷新成就馆当前视图的 DOM
function updateAchieveWorkspaceLiveDOM() {
  const specContainer = document.getElementById('ws-specialized-container');
  if (specContainer && typeof currentWsPavilion !== 'undefined' && currentWsPavilion === 'achieve') {
    specContainer.innerHTML = renderAchieveSpecializedWorkspace();
  }
}


function renderStudySpecializedWorkspace() {
  return '<div class="ws-layout-study-workbench">' +
    '<div style="background:#fffcf5; border:2px solid #8b5a2b; border-radius:18px; padding:16px; display:flex; flex-direction:column; gap:12px; overflow-y:auto;">' +
    '  <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1.5px dashed #d4c5a9; padding-bottom:8px;">' +
    '    <h3 style="margin:0; font-size:15px; color:#3f2711; font-weight:900;">📚 学科知识树与四维错因归因</h3>' +
    '    <span style="font-size:11px; color:#c2410c; font-weight:800;">待攻坚 3 题</span>' +
    '  </div>' +
    '  <div style="display:flex; gap:6px; flex-wrap:wrap;">' +
    '    <span style="background:#92400e; color:#fff; padding:3px 8px; border-radius:8px; font-size:11px; font-weight:800;">数学 (口算与数感)</span>' +
    '    <span style="background:#f3e8ff; color:#7e22ce; padding:3px 8px; border-radius:8px; font-size:11px; font-weight:800;">语文 (拼音与字形)</span>' +
    '    <span style="background:#e0f2fe; color:#0369a1; padding:3px 8px; border-radius:8px; font-size:11px; font-weight:800;">德育 (知行与习惯)</span>' +
    '  </div>' +
    '  <div style="background:#ffffff; border:1.5px solid #e7dac2; border-radius:12px; padding:10px;">' +
    '    <div style="font-size:12px; font-weight:800; color:#3b240f;">错题 1: 进退位口算借位遗漏</div>' +
    '    <div style="font-size:11px; color:#ea580c; margin-top:2px;">【四维错因：运算规则生疏】</div>' +
    '    <div style="font-size:10px; color:#8c6b49; margin-top:4px;">未熟练运用破十法口诀，个位数不够减未从十位退1，导致计算错误。</div>' +
    '  </div>' +
    '  <div style="background:#ffffff; border:1.5px solid #e7dac2; border-radius:12px; padding:10px;">' +
    '    <div style="font-size:12px; font-weight:800; color:#3b240f;">错题 2: 两位数加减法进退位对齐与草稿核验</div>' +
    '    <div style="font-size:11px; color:#ea580c; margin-top:2px;">【四维错因：审题粗心漏条件】</div>' +
    '    <div style="font-size:10px; color:#8c6b49; margin-top:4px;">漏看弹簧锁定解除瞬间的临界速度，少列一条机械能守恒方程。</div>' +
    '  </div>' +
    '  <button class="exec-action-btn tool-btn" style="margin-top:auto;" onclick="enterTertiaryWorkspace(\&apos;study\&apos;)">🔮 穿透至学科三级思维导图</button>' +
    '</div>' +
    '<div style="background:#fffcf5; border:2px solid #8b5a2b; border-radius:18px; padding:16px; display:flex; flex-direction:column; justify-content:space-between;">' +
    '  <div>' +
    '    <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1.5px dashed #d4c5a9; padding-bottom:8px; margin-bottom:14px;">' +
    '      <h3 style="margin:0; font-size:15px; color:#3f2711; font-weight:900;">⏱️ 番茄秒表限时突破台</h3>' +
    '      <span style="background:#fef3c7; color:#b45309; font-size:11px; font-weight:800; padding:3px 8px; border-radius:8px;">家长置顶悬赏进行中</span>' +
    '    </div>' +
    '    <div style="text-align:center; padding:24px 0;">' +
    '      <div style="font-size:48px; font-weight:900; font-family:monospace; color:#92400e; letter-spacing:2px;" id="study-pomodoro-timer">25:00</div>' +
    '      <div style="font-size:12px; font-weight:700; color:#78350f; margin-top:6px;">闭卷沉浸推演 · 防伪计时中</div>' +
    '    </div>' +
    '    <div style="background:#f0fdf4; border:1px solid #86efac; border-radius:10px; padding:10px; font-size:11px; color:#14532d;">' +
    '      <strong>反思总结计划：</strong> 第 1 轮已攻克 · 第 2 轮今日待刷 · 第 3 轮待解锁' +
    '    </div>' +
    '  </div>' +
    '  <div style="display:flex; gap:10px;">' +
    '    <button class="exec-action-btn primary" style="flex:1;" onclick="startTaskFocus(2)">⏱️ 启动专注计时</button>' +
    '    <button class="exec-action-btn tool-btn" style="flex:1;" onclick="switchSecondarySubView(\&apos;gantt\&apos;)">📊 查看甘特图总览</button>' +
    '  </div>' +
    '</div>' +
  '</div>';
}

function renderDojoSpecializedWorkspace() {
  return '<div class="dojo-cockpit-wrapper">' +
    '<div class="ws-spec-notice-banner" style="background:#f0fdfa; border-color:#0f766e; border-left-color:#0d9488; margin-bottom:16px;">' +
    '  <div>' +
    '    <div class="ws-spec-notice-title" style="color:#0f766e;">🥋 兴趣屋 · 运动竞技战备舱</div>' +
    '    <div class="ws-spec-notice-desc" style="color:#115e59;">赛事倒计时靶向 + 42次动作切片打磨与体能考级界碑 + 技战术白板拆解</div>' +
    '  </div>' +
    '  <button class="exec-action-btn tool-btn" style="padding:4px 10px; font-size:11px;" onclick="switchSecondarySubView(\&apos;gantt\&apos;)">📊 查看兴趣甘特图</button>' +
    '</div>' +
    '<div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-bottom:16px;">' +
    '  <div style="background:#ffffff; border:1.5px solid #0f766e; border-radius:14px; padding:12px; text-align:center;">' +
    '    <div style="font-size:11px; color:#0f766e; font-weight:800;">🏆 目标赛事倒计时</div>' +
    '    <div style="font-size:20px; font-weight:900; color:#042f2e; margin:4px 0;">38 天</div>' +
    '    <div style="font-size:10px; color:#14b8a6;">2026 市区青少年羽毛球锦标赛</div>' +
    '  </div>' +
    '  <div style="background:#ffffff; border:1.5px solid #0f766e; border-radius:14px; padding:12px; text-align:center;">' +
    '    <div style="font-size:11px; color:#0f766e; font-weight:800;">🎯 万次杀球实训进度</div>' +
    '    <div style="font-size:20px; font-weight:900; color:#042f2e; margin:4px 0;">42 次切片实录</div>' +
    '    <div style="background:#ccfbf1; border-radius:6px; height:6px; margin:4px 0; overflow:hidden;"><div style="background:#0d9488; width:84.2%; height:100%;"></div></div>' +
    '    <div style="font-size:10px; color:#14b8a6;">达成率 84.2%</div>' +
    '  </div>' +
    '  <div style="background:#ffffff; border:1.5px solid #0f766e; border-radius:14px; padding:12px; text-align:center;">' +
    '    <div style="font-size:11px; color:#0f766e; font-weight:800;">🔥 今日卡路里与挥拍</div>' +
    '    <div style="font-size:20px; font-weight:900; color:#042f2e; margin:4px 0;">300 次 · 280 kcal</div>' +
    '    <div style="font-size:10px; color:#14b8a6;">今日特训已完成</div>' +
    '  </div>' +
    '</div>' +
    '<div class="dojo-cockpit-grid">' +
    '  <div style="background:#ffffff; border:1.5px solid #d4c5a9; border-radius:14px; padding:14px;">' +
    '    <div style="font-size:13px; font-weight:900; color:#0f766e; margin-bottom:8px;">📋 技战术拆解白板 (战术路线图)</div>' +
    '    <div style="font-size:11px; color:#475569; line-height:1.6;">' +
    '      <div>• <strong>后场反手抽对角：</strong> 侧身引拍幅度加大，利用小臂内旋爆发力抢点击球。</div>' +
    '      <div style="margin-top:6px;">• <strong>接发球抢攻扑网：</strong> 重心压低向前，捕捉对手发球过高的前场半高球直接封死。</div>' +
    '    </div>' +
    '  </div>' +
    '  <div style="background:#ffffff; border:1.5px solid #d4c5a9; border-radius:14px; padding:14px; display:flex; flex-direction:column; justify-content:space-between;">' +
    '    <div>' +
    '      <div style="font-size:13px; font-weight:900; color:#0f766e; margin-bottom:8px;">⏱️ 实训秒表与多维度步法打卡</div>' +
    '      <div style="font-size:11px; color:#64748b;">支持米字步法计时、连续挥拍计数与肌肉耐力实训记录。</div>' +
    '    </div>' +
    '    <button class="exec-action-btn primary" style="background:#0d9488; border-color:#0f766e; margin-top:12px;" onclick="showIslandToast(\&apos;🏸 今日实训动作打卡成功，已沉淀至成长档案！\&apos;)">🏸 完成动作实训打卡</button>' +
    '  </div>' +
    '</div>' +
  '</div>';
}

function renderCognitionSpecializedWorkspace() {
  return '<div class="cognition-studio-wrapper">' +
    '<div class="ws-spec-notice-banner" style="background:#f5f3ff; border-color:#6366f1; border-left-color:#4f46e5; margin-bottom:16px;">' +
    '  <div>' +
    '    <div class="ws-spec-notice-title" style="color:#4338ca;">🧠 认知台 · 哲思工坊与能力罗盘</div>' +
    '    <div class="ws-spec-notice-desc" style="color:#3730a3;">双愿景罗盘 + 苏格拉底思辨问答场 + 五维认知能力雷达模型</div>' +
    '  </div>' +
    '  <button class="exec-action-btn tool-btn" style="padding:4px 10px; font-size:11px;" onclick="switchSecondarySubView(\&apos;gantt\&apos;)">📊 查看认知甘特图</button>' +
    '</div>' +
    '<div class="cognition-studio-grid">' +
    '  <div style="background:#ffffff; border:1.5px solid #c7d2fe; border-radius:14px; padding:14px;">' +
    '    <div style="font-size:13px; font-weight:900; color:#4338ca; margin-bottom:8px;">🧭 双愿景罗盘 (现实靶标 vs 终极品格)</div>' +
    '    <div style="background:#eef2ff; border-radius:8px; padding:10px; font-size:11px; margin-bottom:8px;">' +
    '      <strong style="color:#3730a3;">现实靶标：</strong> 小学低年级习惯奠基优秀，少儿跳绳连跳达标，专注独立自理' +
    '    </div>' +
    '    <div style="background:#faf5ff; border-radius:8px; padding:10px; font-size:11px;">' +
    '      <strong style="color:#6b21a8;">终极品格：</strong> 知止而后有定，做坦荡诚实、有深度独立思考力与担当精神的自律者' +
    '    </div>' +
    '  </div>' +
    '  <div style="background:#ffffff; border:1.5px solid #c7d2fe; border-radius:14px; padding:14px;">' +
    '    <div style="font-size:13px; font-weight:900; color:#4338ca; margin-bottom:8px;">🕸️ 五维认知能力雷达</div>' +
    '    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px; font-size:11px;">' +
    '      <div style="background:#f8fafc; padding:6px; border-radius:6px;">• 元认知监控: <strong style="color:#4f46e5;">88分</strong></div>' +
    '      <div style="background:#f8fafc; padding:6px; border-radius:6px;">• 逻辑批判力: <strong style="color:#4f46e5;">92分</strong></div>' +
    '      <div style="background:#f8fafc; padding:6px; border-radius:6px;">• 情绪觉察度: <strong style="color:#4f46e5;">85分</strong></div>' +
    '      <div style="background:#f8fafc; padding:6px; border-radius:6px;">• 长期主义观: <strong style="color:#4f46e5;">90分</strong></div>' +
    '    </div>' +
    '  </div>' +
    '</div>' +
    '<div style="background:#ffffff; border:1.5px solid #c7d2fe; border-radius:14px; padding:14px; margin-top:14px;">' +
    '  <div style="font-size:13px; font-weight:900; color:#4338ca; margin-bottom:8px;">🗣️ 苏格拉底思辨问答场 (亲子双轨辩论录)</div>' +
    '  <div style="background:#faf5ff; border-left:4px solid #6366f1; padding:10px; border-radius:8px; font-size:11px; line-height:1.6;">' +
    '    <div><strong>本周论题：</strong>【在竞争激烈的时代，坦荡诚实是否会导致现实吃亏？】</div>' +
    '    <div style="margin-top:4px;"><strong>孩子立论：</strong> 短期可能放弃投机小利，但长期积累最稳固的信誉与内心笃定，能吸引最高质量的伙伴。</div>' +
    '    <div style="margin-top:4px;"><strong>家长指引：</strong> 诚实需要智慧和实力护航，坦荡不等于天真，要有洞察人性的清醒。</div>' +
    '  </div>' +
    '</div>' +
  '</div>';
}

// =====================================================================
// 每日随记状态与交互引擎 (双轨时序流水 + 主观心流随笔 + 真实照片与视频物证)
// =====================================================================
window.NOTE_STATE = {
  currentMood: '☀️ 专注充实',
  currentEnergy: 4,
  todayFocusMinutes: 0,
  journalText: '',
  todayAutoLogs: [],
  mediaList: [],
  historyEntries: []
};

function renderNoteSpecializedWorkspace() {
  const state = window.NOTE_STATE;
  const curEnergy = state.currentEnergy || 4;
  const autoLogsList = state.todayAutoLogs || [];
  const autoLogsHtml = autoLogsList.length > 0 ? autoLogsList.map((item, idx) => {
    const txt = typeof item === 'string' ? item : item.text;
    const tm = (typeof item === 'object' && item.time) ? item.time : '今日';
    const isMoney = txt.includes('藏金屋') || txt.includes('¥');
    const isSport = txt.includes('武道馆') || txt.includes('兴趣');
    const bg = isMoney ? '#fffbeb' : (isSport ? '#eff6ff' : '#f0fdf4');
    const bd = isMoney ? '#fed7aa' : (isSport ? '#bfdbfe' : '#bbf7d0');
    const bl = isMoney ? '#d97706' : (isSport ? '#2563eb' : '#16a34a');
    const col = isMoney ? '#92400e' : (isSport ? '#1d4ed8' : '#166534');
    return '<div style="background:' + bg + '; border:1.2px solid ' + bd + '; border-left:3.5px solid ' + bl + '; padding:10px 12px; border-radius:10px; font-size:11.5px;">' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">' +
        '<span style="font-weight:900; color:' + col + ';">自动归集 #' + (idx + 1) + '</span>' +
        '<span style="font-size:10px; color:#64748b; font-weight:700;">🕒 ' + tm + '</span>' +
      '</div>' +
      '<div style="color:' + col + '; line-height:1.45;">' + txt + '</div>' +
    '</div>';
  }).join('') : '<div style="grid-column:1 / -1; padding:20px; text-align:center; color:#94a3b8; font-size:12px; background:#f8fafc; border:1px dashed #cbd5e1; border-radius:10px;">今日暂无自动汇集的打卡或流水，完成各模块任务后将自动在此留痕 ⏱️</div>';

  let starsHtml = '';
  for (let s = 1; s <= 5; s++) {
    const active = s <= curEnergy;
    starsHtml += '<button type="button" onclick="switchNoteEnergy(' + s + ')" style="background:none; border:none; padding:0 2px; font-size:15px; cursor:pointer; color:' + (active ? '#f59e0b' : '#cbd5e1') + '; line-height:1;" title="精力 ' + s + ' 星">★</button>';
  }

  return '<div class="note-dual-track-wrapper">' +
    '  <!-- 顶栏横幅 -->' +
    '  <div class="ws-spec-notice-banner" style="background:linear-gradient(135deg, rgba(239, 246, 255, 0.95) 0%, rgba(219, 234, 254, 0.92) 50%, rgba(191, 219, 254, 0.88) 100%); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); border-color:#3b82f6; border-left-color:#2563eb;">' +
    '    <div style="flex:1;">' +
    '      <div class="ws-spec-notice-title" style="color:#1e40af; display:flex; align-items:center; gap:8px;">' +
    '        <span>📝 每日随记 · 时序心流双轨日记簿</span>' +
    '        <span style="font-size:10px; background:#dbeafe; color:#1e40af; border:1px solid #93c5fd; padding:2px 8px; border-radius:10px; font-weight:800;">双轨自动汇流 · 真实影像留痕</span>' +
    '      </div>' +
    '      <div class="ws-spec-notice-desc" style="color:#1d4ed8;">上半轨自动汇聚全域真实硬核客观付出 · 下半轨记录心流感悟与照片视频影像物证 · 免除冗余流水负担</div>' +
    '    </div>' +
    '    <div style="display:flex; align-items:center; gap:8px;">' +
    '      <button class="note-media-action-btn" onclick="scrollToNoteSection(&apos;note-journal-editor-card&apos;)">✍️ 今日随笔</button>' +
    '      <button class="note-media-action-btn secondary" onclick="scrollToNoteSection(&apos;note-history-section&apos;)">📜 历史卷宗</button>' +
    '    </div>' +
    '  </div>' +

    '  <!-- 卡片 1: 🛤️ 上半轨：全自动真实客观行为流水 -->' +
    '  <div class="note-card-box">' +
    '    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px dashed #bfdbfe; padding-bottom:12px; margin-bottom:14px;">' +
    '      <div>' +
    '        <h3 style="margin:0; font-size:15px; color:#1e40af; font-weight:900; display:flex; align-items:center; gap:8px;">' +
    '          <span>🛤️ 上半轨：今日真实客观行为流水（共 ' + (state.todayAutoLogs ? state.todayAutoLogs.length : 0) + ' 条）</span>' +
    '          <span style="font-size:10px; background:#dcfce7; color:#166534; padding:2px 8px; border-radius:8px; font-weight:800; border:1px solid #86efac;">🔒 系统自动聚合 · 实时同步</span>' +
    '        </h3>' +
    '        <div style="font-size:11px; color:#64748b; margin-top:2px;">孩子无需重复手抄流水账，系统底层自动提取当日各场馆打卡工时、成就入馆、悬赏兑现与财商收支</div>' +
    '      </div>' +
    '      <div style="display:flex; align-items:center; gap:8px;">' +
    '        <span id="note-today-focus-pill" style="background:#eff6ff; color:#1d4ed8; font-size:12px; font-weight:800; padding:4px 12px; border-radius:12px; border:1px solid #bfdbfe;">今日累计专注：' + (state.todayFocusMinutes || 60) + ' 分钟</span>' +
    '      </div>' +
    '    </div>' +
    '    <div id="note-today-autologs-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">' +
           autoLogsHtml +
    '    </div>' +
    '  </div>' +

    '  <!-- 卡片 2: ✍️ 下半轨：主观心流日记与照片/视频留痕操作台 -->' +
    '  <div id="note-journal-editor-card" class="note-card-box">' +
    '    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; border-bottom:1.5px dashed #bfdbfe; padding-bottom:12px; margin-bottom:14px;">' +
    '      <div>' +
    '        <h3 style="margin:0; font-size:15px; color:#1e40af; font-weight:900; display:flex; align-items:center; gap:8px;">' +
    '          <span>✍️ 下半轨：今日主观心流日记与生活留痕</span>' +
    '          <span style="font-size:10px; background:#eff6ff; color:#1d4ed8; padding:2px 8px; border-radius:8px; font-weight:bold;">✨ 灵感随笔 · 照片视频存证</span>' +
    '        </h3>' +
    '        <div style="font-size:11px; color:#64748b; margin-top:2px;">记录触动感悟、突破心得或勇敢自省，并上传真实做题手稿照片与自省视频</div>' +
    '      </div>' +
    '      <!-- 心流晴雨表 + 1~5星精力值 -->' +
    '      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">' +
    '        <div style="display:flex; align-items:center; gap:4px; background:#fffbeb; border:1px solid #fde68a; padding:3px 8px; border-radius:8px;">' +
    '          <span style="font-size:11px; font-weight:800; color:#92400e;">⚡ 精力:</span>' +
    '          <span id="note-energy-stars-box">' + starsHtml + '</span>' +
    '        </div>' +
    '        <div style="display:flex; align-items:center; gap:6px;">' +
    '          <span style="font-size:11px; font-weight:800; color:#1e40af;">心流晴雨表:</span>' +
    '          <div style="display:flex; gap:4px;" id="note-mood-pills-row">' +
    '            <button type="button" class="note-mood-pill' + (state.currentMood === '☀️ 专注充实' ? ' is-active' : '') + '" onclick="switchNoteMood(&apos;☀️ 专注充实&apos;, this)">☀️ 专注充实</button>' +
    '            <button type="button" class="note-mood-pill' + (state.currentMood === '🌈 顿悟突破' ? ' is-active' : '') + '" onclick="switchNoteMood(&apos;🌈 顿悟突破&apos;, this)">🌈 顿悟突破</button>' +
    '            <button type="button" class="note-mood-pill' + (state.currentMood === '🌤️ 平和恬淡' ? ' is-active' : '') + '" onclick="switchNoteMood(&apos;🌤️ 平和恬淡&apos;, this)">🌤️ 平和恬淡</button>' +
    '            <button type="button" class="note-mood-pill' + (state.currentMood === '🌧️ 遭遇挫折' ? ' is-active' : '') + '" onclick="switchNoteMood(&apos;🌧️ 遭遇挫折&apos;, this)">🌧️ 遭遇挫折</button>' +
    '          </div>' +
    '        </div>' +
    '      </div>' +
    '    </div>' +

    '    <!-- 思考启发卡片 -->' +
    '    <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:10px; padding:10px 14px; margin-bottom:12px; display:flex; align-items:center; gap:10px;">' +
    '      <span style="font-size:18px;">💡</span>' +
    '      <div style="font-size:12px; color:#1e40af; font-weight:700;">今日启发思考题：今天面对卡点或疲劳时，你是如何坚定意志跨过障碍的？哪一瞬间让你最有成就感？</div>' +
    '    </div>' +

    '    <!-- 随笔输入框 -->' +
    '    <div style="margin-bottom:14px;">' +
    '      <textarea id="note-journal-textarea" oninput="updateNoteTextCounter()" style="width:100%; height:96px; border:1.5px solid #93c5fd; border-radius:10px; padding:12px; font-size:12.5px; line-height:1.6; color:#1e293b; background:#ffffff; box-sizing:border-box; outline:none; resize:vertical;" placeholder="在此记录今天最触动你的一件事、顿悟突破的心得、或者一次面对挫折的勇敢自省...">' + (state.journalText || '') + '</textarea>' +
    '    </div>' +

    '    <!-- 📸 📷 🎥 多媒体影像留痕专区 (用户特别要求的核心功能) -->' +
    '    <div style="background:#f8fafc; border:1.5px solid #cbd5e1; border-radius:14px; padding:14px; margin-bottom:14px;">' +
    '      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">' +
    '        <div style="display:flex; align-items:center; gap:8px;">' +
    '          <span style="font-size:16px;">📸</span>' +
    '          <div>' +
    '            <div style="font-size:13px; font-weight:900; color:#0f172a;">今日影像物证记录 (照片与视频)</div>' +
    '            <div style="font-size:10.5px; color:#64748b;">拍照留存做题草稿、书法手工作品，或录制一段 1 分钟心流自省小视频</div>' +
    '          </div>' +
    '        </div>' +
    '        <div style="display:flex; align-items:center; gap:8px;">' +
    '          <input type="file" id="note-photo-file-input" accept="image/*" style="display:none;" onchange="handleNotePhotoFile(this)">' +
    '          <input type="file" id="note-video-file-input" accept="video/*" style="display:none;" onchange="handleNoteVideoFile(this)">' +
    '          <button type="button" class="note-media-action-btn" onclick="triggerNotePhotoUpload()">📷 拍照/上传图片</button>' +
    '          <button type="button" class="note-media-action-btn" onclick="triggerNoteVideoUpload()">🎥 录制/上传视频</button>' +
    '          <button type="button" class="note-media-action-btn secondary" onclick="addNoteDemoMedia()">✨ 快速添加样例</button>' +
    '        </div>' +
    '      </div>' +

    '      <!-- 媒体缩略图陈列网格 -->' +
    '      <div id="note-media-gallery" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px;">' +
    renderNoteMediaGalleryHtml() +
    '      </div>' +
    '    </div>' +

    '    <!-- 底部操作栏 -->' +
    '    <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px dashed #bfdbfe; padding-top:12px;">' +
    '      <div style="font-size:11.5px; color:#64748b; font-weight:600;" id="note-status-summary">' +
    getNoteStatusSummaryText() +
    '      </div>' +
    '      <div style="display:flex; align-items:center; gap:10px;">' +
    '        <button type="button" class="note-submit-btn" onclick="saveNoteDailyEntry()">💾 保存今日双轨随记</button>' +
    '      </div>' +
    '    </div>' +
    '  </div>' +

    '  <!-- 卡片 3: 📜 往期双轨随记卷宗长卷 (历史成长档案瀑布流) -->' +
    '  <div id="note-history-section" class="note-card-box">' +
    '    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px dashed #bfdbfe; padding-bottom:12px; margin-bottom:14px;">' +
    '      <div>' +
    '        <h3 style="margin:0; font-size:15px; color:#1e40af; font-weight:900; display:flex; align-items:center; gap:8px;">' +
    '          <span>📜 往期双轨随记卷宗长卷</span>' +
    '          <span style="font-size:10px; background:#eff6ff; color:#1d4ed8; padding:2px 8px; border-radius:8px; font-weight:bold;">自传体成长印记</span>' +
    '        </h3>' +
    '        <div style="font-size:11px; color:#64748b; margin-top:2px;">每一天真实客观流水与主观心流随笔的永久沉淀，包含当时留存的照片与视频物证</div>' +
    '      </div>' +
    '      <div style="font-size:11.5px; color:#2563eb; font-weight:bold;">' +
    '        累计收录：<span id="note-history-count">' + (state.historyEntries ? state.historyEntries.length : 0) + '</span> 篇' +
    '      </div>' +
    '    </div>' +

    '    <!-- 历史记录列表容器 -->' +
    '    <div id="note-history-list" style="display:flex; flex-direction:column; gap:14px;">' +
    renderNoteHistoryEntriesHtml() +
    '    </div>' +
    '  </div>' +
    '</div>';
}

function getNoteStatusSummaryText() {
  const state = window.NOTE_STATE;
  const textEl = document.getElementById('note-journal-textarea');
  const txtLen = textEl ? textEl.value.trim().length : (state.journalText ? state.journalText.length : 0);
  const photos = state.mediaList.filter(x => x.type === 'image').length;
  const videos = state.mediaList.filter(x => x.type === 'video').length;
  return '随笔字数：' + txtLen + ' 字 · 影像物证：' + (photos + videos) + ' 个 (照片 ' + photos + ' 张 · 视频 ' + videos + ' 段)';
}

function updateNoteTextCounter() {
  const sumEl = document.getElementById('note-status-summary');
  if (sumEl) sumEl.innerText = getNoteStatusSummaryText();
}

function renderNoteMediaGalleryHtml() {
  const list = window.NOTE_STATE.mediaList || [];
  if (list.length === 0) {
    return '<div style="grid-column:1 / -1; padding:24px; text-align:center; background:#ffffff; border:1.5px dashed #cbd5e1; border-radius:12px; color:#64748b; font-size:12px;">' +
      '  <div style="font-size:24px; margin-bottom:4px;">📷 🎥</div>' +
      '  <div style="font-weight:bold; color:#475569;">暂未添加图片或视频物证</div>' +
      '  <div style="font-size:11px; color:#94a3b8; margin-top:2px;">点击右上角按钮即可拍照上传做题草稿手稿，或录制心流反思视频</div>' +
      '</div>';
  }

  return list.map(m => {
    const isVid = m.type === 'video';
    const tagText = isVid ? '🎬 视频 (' + (m.duration || '01:00') + ')' : '📷 照片';
    const tagBg = isVid ? 'rgba(15, 23, 42, 0.85)' : 'rgba(30, 58, 138, 0.85)';
    
    // Thumbnail illustration
    const thumbVisual = isVid ?
      '<div style="width:100%; height:100%; background:linear-gradient(135deg, #0f172a, #1e293b); display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; position:relative;">' +
      '  <div style="width:36px; height:36px; border-radius:50%; background:rgba(255,255,255,0.25); display:flex; align-items:center; justify-content:center; font-size:16px; box-shadow:0 2px 8px rgba(0,0,0,0.4);">▶️</div>' +
      '  <span style="font-size:10px; color:#cbd5e1; margin-top:4px; font-weight:600;">点击播放预览</span>' +
      '</div>' :
      '<div style="width:100%; height:100%; background:linear-gradient(135deg, #f8fafc, #eff6ff); display:flex; flex-direction:column; align-items:center; justify-content:center; color:#1e40af; border:1px solid #e2e8f0;">' +
      '  <div style="font-size:28px;">📄</div>' +
      '  <span style="font-size:10px; color:#3b82f6; font-weight:700; margin-top:2px;">真实手稿图片</span>' +
      '</div>';

    return '<div class="note-media-thumb-card" id="note-media-card-' + m.id + '">' +
      '  <div class="note-media-thumb-box" onclick="openNoteMediaPreviewModal(&apos;' + m.id + '&apos;)" title="点击查看大图/播放视频">' +
      thumbVisual +
      '    <span class="note-media-badge-tag" style="background:' + tagBg + ';">' + tagText + '</span>' +
      '    <button type="button" class="note-media-remove-btn" onclick="event.stopPropagation(); removeNoteMedia(&apos;' + m.id + '&apos;)" title="移除此项">✕</button>' +
      '  </div>' +
      '  <div class="note-media-card-meta">' +
      '    <div class="note-media-card-title" title="' + m.name + '">' + m.name + '</div>' +
      '    <div class="note-media-card-sub">' +
      '      <span>' + (m.caption || '影像物证') + '</span>' +
      '      <span>' + (m.time || '刚刚') + '</span>' +
      '    </div>' +
      '  </div>' +
      '</div>';
  }).join('');
}

function renderNoteHistoryEntriesHtml() {
  const entries = window.NOTE_STATE.historyEntries || [];
  if (entries.length === 0) {
    return '<div style="padding:20px; text-align:center; color:#94a3b8; font-size:12px;">暂无往期双轨日记记录</div>';
  }

  return entries.map(e => {
    const logsHtml = (e.autoLogs || []).map(l => '<div style="padding:4px 8px; background:#f0fdf4; border-left:3px solid #16a34a; border-radius:4px; font-size:11px; color:#166534;">' + l + '</div>').join('');
    
    const mediaPills = (e.media || []).map(m => {
      const isV = m.type === 'video';
      const badge = isV ? '🎬 ' + m.name + ' (' + (m.duration || '01:00') + ')' : '📷 ' + m.name;
      return '<span style="display:inline-flex; align-items:center; gap:4px; background:#eff6ff; color:#1e40af; border:1px solid #bfdbfe; padding:2px 8px; border-radius:6px; font-size:10.5px; font-weight:700;">' + badge + '</span>';
    }).join('');

    return '<div class="note-history-card">' +
      '  <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px dashed #e2e8f0; padding-bottom:8px;">' +
      '    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">' +
      '      <span style="font-size:13px; font-weight:900; color:#1e293b;">📅 ' + e.date + '</span>' +
      '      <span style="font-size:11px; background:#f1f5f9; color:#475569; padding:2px 8px; border-radius:8px; font-weight:700;">' + e.mood + '</span>' +
      '      <span style="font-size:11px; background:#fffbeb; color:#b45309; border:1px solid #fde68a; padding:2px 8px; border-radius:8px; font-weight:800;">⚡ 精力 ' + '★'.repeat(e.energy || 4) + '</span>' +
      '    </div>' +
      '    <span style="font-size:10.5px; color:#94a3b8;">已同步归档入自传体知识库</span>' +
      '  </div>' +
      '  <div style="display:flex; flex-direction:column; gap:4px;">' +
      '    <div style="font-size:11px; font-weight:800; color:#64748b;">🛤️ 上半轨客观事实流水：</div>' +
      logsHtml +
      '  </div>' +
      '  <div style="background:#fffcf5; border:1px solid #fed7aa; border-radius:8px; padding:10px 12px; font-size:12px; color:#334155; line-height:1.6;">' +
      '    <div style="font-weight:800; color:#b45309; margin-bottom:2px;">✍️ 下半轨心流感悟：</div>' +
      e.text +
      '  </div>' +
      (mediaPills ? 
      '  <div style="display:flex; flex-wrap:wrap; align-items:center; gap:6px; padding-top:4px;">' +
      '    <span style="font-size:11px; font-weight:800; color:#64748b;">📸 附带影像物证：</span>' +
      mediaPills +
      '  </div>' : '') +
      '</div>';
  }).join('');
}

function switchNoteEnergy(stars) {
  const val = Math.max(1, Math.min(5, parseInt(stars, 10) || 4));
  window.NOTE_STATE.currentEnergy = val;
  const box = document.getElementById('note-energy-stars-box');
  if (box) {
    let html = '';
    for (let s = 1; s <= 5; s++) {
      html += '<button type="button" onclick="switchNoteEnergy(' + s + ')" style="background:none; border:none; padding:0 2px; font-size:15px; cursor:pointer; color:' + (s <= val ? '#f59e0b' : '#cbd5e1') + '; line-height:1;" title="精力 ' + s + ' 星">★</button>';
    }
    box.innerHTML = html;
  }
  showIslandToast('⚡ 今日心流精力状态已标记为 ' + val + ' 颗星！');
}

function switchNoteMood(mood, btn) {
  window.NOTE_STATE.currentMood = mood;
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.note-mood-pill').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
  }
}

function triggerNotePhotoUpload() {
  const input = document.getElementById('note-photo-file-input');
  if (input) input.click();
}

function handleNotePhotoFile(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const now = new Date();
    const timeStr = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
    
    window.NOTE_STATE.mediaList.unshift({
      id: 'm-photo-' + Date.now(),
      type: 'image',
      name: file.name || '今日手稿拍照留痕.png',
      caption: '真实做题草稿原卷照片',
      time: timeStr,
      demoIcon: '📷',
      previewContent: '【本地上传照片】' + file.name + ' (' + Math.round(file.size / 1024) + ' KB)'
    });
    
    refreshNoteMediaGallery();
    showIslandToast('📷 成功上传并关联照片：' + file.name);
  }
}

function triggerNoteVideoUpload() {
  const input = document.getElementById('note-video-file-input');
  if (input) input.click();
}

function handleNoteVideoFile(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const now = new Date();
    const timeStr = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
    
    window.NOTE_STATE.mediaList.unshift({
      id: 'm-video-' + Date.now(),
      type: 'video',
      name: file.name || '心流反思录像.mp4',
      caption: '1分钟自省反思视频',
      time: timeStr,
      duration: '01:12',
      demoIcon: '🎬',
      previewContent: '【本地上传视频】' + file.name + ' (' + (file.size / (1024*1024)).toFixed(1) + ' MB)'
    });
    
    refreshNoteMediaGallery();
    showIslandToast('🎥 成功上传并关联视频：' + file.name);
  }
}

function addNoteDemoMedia() {
  const now = new Date();
  const timeStr = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  
  const demoPool = [
    { type: 'image', name: '错题红笔重做清零验算卷.png', caption: '进退位运算清零草稿', duration: null, icon: '📐' },
    { type: 'video', name: '跳绳双摇30个连续打卡实录.mp4', caption: '武道馆竞技动作切片', duration: '00:48', icon: '🏸' },
    { type: 'image', name: '《大学》手抄本墨迹留痕.png', caption: '修身阁晨读书法实录', duration: null, icon: '📜' },
    { type: 'video', name: '晚间1分钟亲子思辨辩论片段.mp4', caption: '哲思工坊深度对话', duration: '01:25', icon: '🧠' }
  ];

  const randomItem = demoPool[Math.floor(Math.random() * demoPool.length)];
  window.NOTE_STATE.mediaList.unshift({
    id: 'm-demo-' + Date.now(),
    type: randomItem.type,
    name: randomItem.name,
    caption: randomItem.caption,
    time: timeStr,
    duration: randomItem.duration,
    demoIcon: randomItem.icon,
    previewContent: '【样例物证】' + randomItem.name + '\n归档时间: ' + timeStr + ' · 物证留存有效'
  });

  refreshNoteMediaGallery();
  showIslandToast('✨ 已添加影像物证：' + randomItem.name);
}

function removeNoteMedia(id) {
  window.NOTE_STATE.mediaList = window.NOTE_STATE.mediaList.filter(x => x.id !== id);
  refreshNoteMediaGallery();
  showIslandToast('🗑️ 已移除该影像物证');
}

function refreshNoteMediaGallery() {
  const gal = document.getElementById('note-media-gallery');
  if (gal) {
    gal.innerHTML = renderNoteMediaGalleryHtml();
  }
  updateNoteTextCounter();
}

function openNoteMediaPreviewModal(mediaId) {
  const media = window.NOTE_STATE.mediaList.find(x => x.id === mediaId);
  if (!media) return;

  const modal = document.getElementById('note-media-preview-modal');
  const iconEl = document.getElementById('note-preview-modal-icon');
  const titleEl = document.getElementById('note-preview-modal-title');
  const bodyEl = document.getElementById('note-preview-modal-body');
  const captionEl = document.getElementById('note-preview-modal-caption');

  if (modal) {
    modal.style.display = 'flex';
    if (iconEl) iconEl.innerText = media.type === 'video' ? '🎬' : '📷';
    if (titleEl) titleEl.innerText = media.name;
    if (captionEl) captionEl.innerText = (media.caption || '影像物证') + ' · 记录时间 ' + (media.time || '今日');

    if (bodyEl) {
      if (media.type === 'video') {
        bodyEl.innerHTML = 
          '<div style="width:100%; height:260px; background:#0f172a; border-radius:12px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; position:relative; box-shadow:0 8px 24px rgba(0,0,0,0.4);">' +
          '  <div style="width:56px; height:56px; border-radius:50%; background:linear-gradient(135deg, #2563eb, #1d4ed8); display:flex; align-items:center; justify-content:center; font-size:24px; box-shadow:0 4px 16px rgba(37,99,235,0.6); cursor:pointer;" onclick="showIslandToast(&apos;▶️ 正在全屏播放 1080P 高清反思短片...&apos;)">▶️</div>' +
          '  <div style="font-size:13px; font-weight:800; margin-top:12px;">' + media.name + '</div>' +
          '  <div style="font-size:11px; color:#94a3b8; margin-top:4px;">视频规格：1080P 高清 · 时长 ' + (media.duration || '01:05') + ' · 帧率 60fps</div>' +
          '  <div style="position:absolute; bottom:12px; left:16px; right:16px; display:flex; align-items:center; gap:8px;">' +
          '    <span style="font-size:10px; color:#cbd5e1;">00:00</span>' +
          '    <div style="flex:1; height:4px; background:rgba(255,255,255,0.3); border-radius:2px; overflow:hidden;"><div style="width:35%; height:100%; background:#3b82f6;"></div></div>' +
          '    <span style="font-size:10px; color:#cbd5e1;">' + (media.duration || '01:05') + '</span>' +
          '  </div>' +
          '</div>';
      } else {
        bodyEl.innerHTML = 
          '<div style="width:100%; min-height:260px; background:#f8fafc; border:2px dashed #bfdbfe; border-radius:12px; padding:20px; display:flex; flex-direction:column; align-items:center; justify-content:center; box-sizing:border-box;">' +
          '  <div style="font-size:54px; margin-bottom:8px;">📄</div>' +
          '  <div style="font-size:14px; font-weight:900; color:#1e40af;">' + media.name + '</div>' +
          '  <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:12px 16px; margin-top:12px; max-width:440px; font-size:12px; line-height:1.6; color:#334155; white-space:pre-line; text-align:left; box-shadow:0 2px 8px rgba(0,0,0,0.04);">' +
          (media.previewContent || '【演算原稿照片】红笔订正清晰无误，错因归因深刻客观，符合知行合一存证规范。') +
          '  </div>' +
          '  <div style="font-size:11px; color:#16a34a; font-weight:bold; margin-top:10px;">✓ 原始试卷物证验讫 · 已永久固化防篡改</div>' +
          '</div>';
      }
    }
  }
}

function closeNoteMediaPreviewModal() {
  const modal = document.getElementById('note-media-preview-modal');
  if (modal) modal.style.display = 'none';
}

function saveNoteDailyEntry() {
  const textEl = document.getElementById('note-journal-textarea');
  const textVal = textEl ? textEl.value.trim() : '';

  if (textVal.length < 5 && window.NOTE_STATE.mediaList.length === 0) {
    showIslandToast('✍️ 请在随笔框中至少书写一句今日感悟，或上传物证后再封存！');
    if (textEl) textEl.focus();
    return;
  }

  const now = new Date();
  const dateStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
  const liveAutoLogs = (window.NOTE_STATE.todayAutoLogs || []).map(item =>
    typeof item === 'string' ? item : (item.time ? '[' + item.time + '] ' + item.text : item.text)
  );
  
  const newEntry = {
    id: 'entry-' + Date.now(),
    date: dateStr,
    mood: window.NOTE_STATE.currentMood,
    energy: window.NOTE_STATE.currentEnergy || 4,
    text: textVal || '（今日上传了 ' + window.NOTE_STATE.mediaList.length + ' 项影像物证，专注完成了各项课题）',
    autoLogs: liveAutoLogs.length > 0 ? liveAutoLogs : [
      '⏱️ 校史馆：完成 1 个番茄钟专注限时口算 (25分钟)，清零错题 3 道'
    ],
    media: window.NOTE_STATE.mediaList.map(m => ({ ...m }))
  };

  window.NOTE_STATE.historyEntries.unshift(newEntry);
  window.NOTE_STATE.journalText = '';
  if (textEl) textEl.value = '';

  // 更新历史长卷列表
  const histList = document.getElementById('note-history-list');
  if (histList) {
    histList.innerHTML = renderNoteHistoryEntriesHtml();
  }
  const histCount = document.getElementById('note-history-count');
  if (histCount) {
    histCount.innerText = window.NOTE_STATE.historyEntries.length;
  }
  updateNoteTextCounter();

  showIslandToast('🎉 今日双轨随记已封存！包含 ' + newEntry.media.length + ' 个影像物证与心流随笔，已永久沉淀至成长时间轴！');
  scrollToNoteSection('note-history-section');
}

function scrollToNoteSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.style.boxShadow = '0 0 0 3px #3b82f6';
    setTimeout(() => {
      el.style.boxShadow = '';
    }, 1200);
  }
}


// 键盘左右切卡支持
window.addEventListener('keydown', (e) => {
  if (currentGlobalView === 'exec' && currentExecSubView === 'day') {
    if (e.key === 'ArrowLeft') {
      prevDayCard();
      return;
    } else if (e.key === 'ArrowRight') {
      nextDayCard();
      return;
    }
  }
});

// 初始化启动
window.addEventListener('DOMContentLoaded', () => {
  syncWeekBoardToRealDate();
  const _ps = document.getElementById('input-proj-start');
  if (_ps && !_ps.value) _ps.value = GANTT_TODAY;
  initIslandSettings();
  initWeatherEngine();
  initCanvasPanZoomAndDrag();
  updatePavilionBadges('exec');
  setupCarouselGestures();
  updateDayCarousel();
  renderWeekBoard('all');
  renderMonthCalendar();
  if (typeof renderHomeSemesterGoalsBanner === 'function') renderHomeSemesterGoalsBanner();
  if (typeof recalcAndRenderGlobalHUD === 'function') recalcAndRenderGlobalHUD();
  if (typeof renderBountyModalAndBillboard === 'function') renderBountyModalAndBillboard();
  switchHomeGlobalView('exec');
});
setTimeout(() => {
  initWeatherEngine();
  initCanvasPanZoomAndDrag();
  setupCarouselGestures();
  updateDayCarousel();
  renderWeekBoard('all');
  renderMonthCalendar();
  if (typeof renderHomeSemesterGoalsBanner === 'function') renderHomeSemesterGoalsBanner();
  if (typeof recalcAndRenderGlobalHUD === 'function') recalcAndRenderGlobalHUD();
  if (typeof renderBountyModalAndBillboard === 'function') renderBountyModalAndBillboard();
  switchHomeGlobalView('exec');
}, 200);













// ==========================================================================
// 通用二级节点项目甘特图控制中心 (Universal Secondary Workspace Gantt Controller)
// ==========================================================================
const GANTT_TODAY = (function () {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
})();
const GANTT_START_DATE = '2026-10-18';
const GANTT_END_DATE = '2026-11-20';
const GANTT_DAY_WIDTH = 38;

// 甘特图日期与时间差计算核心工具函数
function parseGanttDate(str) {
  if (!str) return new Date();
  if (str instanceof Date) return str;
  const parts = String(str).split('-').map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function formatGanttDate(d) {
  if (!d) return GANTT_TODAY;
  const dt = (d instanceof Date) ? d : new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const day = String(dt.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

function diffGanttDays(d1, d2) {
  const date1 = typeof d1 === 'string' ? parseGanttDate(d1) : (d1 || new Date());
  const date2 = typeof d2 === 'string' ? parseGanttDate(d2) : (d2 || new Date());
  const oneDayMs = 24 * 60 * 60 * 1000;
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return Math.round((utc2 - utc1) / oneDayMs);
}

let currentGanttCategory = 'all';
let currentGanttStatus = 'all';
let selectedNewProjCategory = '学业攻坚';

window.GANTT_PROJECTS = [];

function computeProjectProgressAndStatus(p) {
  const totalDays = Math.max(1, diffGanttDays(p.startDate, p.endDate) + 1);
  const completedCount = (p.completedDays && Array.isArray(p.completedDays)) ? p.completedDays.length : 0;
  const progress = Math.min(100, Math.round((completedCount / totalDays) * 100));

  let status = '进行中';
  if (p.isArchived) {
    status = '已归档';
  } else if (progress >= 100 || completedCount >= totalDays) {
    status = '已完成';
  } else if (GANTT_TODAY < p.startDate) {
    const diff = diffGanttDays(GANTT_TODAY, p.startDate);
    status = (diff > 5) ? '待规划' : '待执行';
  } else if (GANTT_TODAY >= p.startDate && GANTT_TODAY <= p.endDate) {
    status = '进行中';
  } else {
    // 超过结束时间但小方格未全满
    status = '待执行';
  }

  return { totalDays, completedCount, progress, status };
}

function getStatusMeta(status) {
  switch (status) {
    case '待规划': return { cls: 'status-planned', label: '待规划', icon: '📝' };
    case '待执行': return { cls: 'status-pending', label: '待执行', icon: '⏳' };
    case '进行中': return { cls: 'status-exec', label: '进行中', icon: '⚡' };
    case '已完成': return { cls: 'status-done', label: '已完成', icon: '✅' };
    case '已归档': return { cls: 'status-archived', label: '已归档', icon: '📦' };
    default: return { cls: 'status-planned', label: status, icon: '📌' };
  }
}

function getCategoryMeta(cat) {
  switch (cat) {
    case '学业攻坚': return { icon: '📘', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' };
    case '修身立宪': return { icon: '🧘‍♂️', color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' };
    case '兴趣特长': return { icon: '🏸', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' };
    case '财商实践': return { icon: '💰', color: '#d97706', bg: '#fffbeb', border: '#fde68a' };
    case '认知思辨': return { icon: '🧠', color: '#db2777', bg: '#fdf2f8', border: '#fbcfe8' };
    case '实践探索': return { icon: '🚀', color: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe' };
    default: return { icon: '🏷️', color: '#4b5563', bg: '#f3f4f6', border: '#e5e7eb' };
  }
}

function filterGanttCategory(cat) {
  currentGanttCategory = cat;
  document.querySelectorAll('#gantt-category-filters .gantt-filter-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.cat === cat);
  });
  renderGanttChart();
}

function filterGanttStatus(status) {
  currentGanttStatus = status;
  document.querySelectorAll('#gantt-status-filters .gantt-status-pill').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.status === status);
  });
  renderGanttChart();
}

function scrollGanttToToday() {
  const timelineCol = document.getElementById('gantt-timeline-col');
  if (!timelineCol) return;
  const targetX = 9 * GANTT_DAY_WIDTH + (GANTT_DAY_WIDTH / 2);
  const scrollPos = Math.max(0, targetX - (timelineCol.clientWidth / 2));
  timelineCol.scrollTo({ left: scrollPos, behavior: 'smooth' });
}

function handleGanttEditPlan(btn) {
  const id = btn.dataset.id;
  if (id) enterTertiaryWorkspace(id);
}

function handleGanttArchive(btn) {
  const id = btn.dataset.id;
  if (id) toggleProjectArchive(id);
}

// 甘特图小方格只读查阅提示：不可在此处编辑，只可查看
function handleSquareReadOnlyClick(el) {
  const projTitle = el.dataset.title || '成长项目';
  const dateStr = el.dataset.date || '';
  const isDone = el.dataset.done === 'true';
  showIslandToast('💡 [' + projTitle + '] ' + dateStr + (isDone ? ' 已执行达成 ✓' : ' 待推进') + '（甘特图小方格仅供全景查阅，不可在此直接编辑）');
}

function toggleProjectArchive(id) {
  const p = window.GANTT_PROJECTS.find(item => item.id === id);
  if (!p) return;
  p.isArchived = !p.isArchived;
  if (p.isArchived) {
    showIslandToast('📦 项目【' + p.title + '】已归档至历史荣耀库！');
  } else {
    showIslandToast('📂 项目【' + p.title + '】已解除归档，重新排入推进中！');
  }
  renderGanttChart();
}

function renderGanttChart() {
  const tableRowsContainer = document.getElementById('gantt-table-rows');
  const headerContainer = document.getElementById('gantt-timeline-header');
  const timelineRowsContainer = document.getElementById('gantt-timeline-rows');
  if (!tableRowsContainer || !headerContainer || !timelineRowsContainer) return;

  // 1. 统计当前状态计数
  let counts = { all: window.GANTT_PROJECTS.length, planned: 0, pending: 0, exec: 0, done: 0, archived: 0 };
  window.GANTT_PROJECTS.forEach(p => {
    const res = computeProjectProgressAndStatus(p);
    if (res.status === '待规划') counts.planned++;
    else if (res.status === '待执行') counts.pending++;
    else if (res.status === '进行中') counts.exec++;
    else if (res.status === '已完成') counts.done++;
    else if (res.status === '已归档') counts.archived++;
  });

  const elAll = document.getElementById('count-all');
  const elPlanned = document.getElementById('count-planned');
  const elPending = document.getElementById('count-pending');
  const elExec = document.getElementById('count-exec');
  const elDone = document.getElementById('count-done');
  const elArchived = document.getElementById('count-archived');
  const elActiveCount = document.getElementById('ws-top-active-count');

  if (elAll) elAll.innerText = counts.all;
  if (elPlanned) elPlanned.innerText = counts.planned;
  if (elPending) elPending.innerText = counts.pending;
  if (elExec) elExec.innerText = counts.exec;
  if (elDone) elDone.innerText = counts.done;
  if (elArchived) elArchived.innerText = counts.archived;
  if (elActiveCount) elActiveCount.innerText = counts.exec + ' 个';

  // 2. 筛选列表
  const filteredProjects = window.GANTT_PROJECTS.filter(p => {
    const res = computeProjectProgressAndStatus(p);
    const catMatch = (currentGanttCategory === 'all' || p.category === currentGanttCategory);
    const statusMatch = (currentGanttStatus === 'all' || res.status === currentGanttStatus);
    return catMatch && statusMatch;
  });

  // 3. 渲染左侧固定表格行 (加宽至 580px，充分预留状态列与操作列间距，绝不遮盖)
  let tableHtml = '';
  if (filteredProjects.length === 0) {
    tableHtml = '<div style="padding: 40px 16px; text-align: center; color: #8c6b45; font-size: 13px; font-weight: 700;">🏝️ 当前筛选条件下暂无项目，点击顶栏【新增项目】快速创建攻坚规划！</div>';
  } else {
    filteredProjects.forEach(p => {
      const res = computeProjectProgressAndStatus(p);
      const sm = getStatusMeta(res.status);
      const cm = getCategoryMeta(p.category);

      // 构建微型 5 个小方格进度链
      const filledMini = Math.round((res.progress / 100) * 5);
      let miniSquaresHtml = '';
      for (let k = 0; k < 5; k++) {
        miniSquaresHtml += '<span class="mini-sq ' + (k < filledMini ? 'done' : 'empty') + '"></span>';
      }

      tableHtml += '<div class="gantt-table-row" id="row-tbl-' + p.id + '">' +
        '<div class="col-cell-cat">' +
          '<span class="gantt-cat-tag" style="background:' + cm.bg + '; color:' + cm.color + '; border-color:' + cm.border + ';">' +
            cm.icon + ' ' + p.category +
          '</span>' +
        '</div>' +
        '<div class="col-cell-title">' +
          '<div class="gantt-proj-name" title="' + p.title + '">' +
            p.title +
            '<span class="gantt-drilldown-link" data-id="' + p.id + '" onclick="enterTertiaryWorkspace(this.dataset.id)" title="下钻进入该三级节点攻坚拓扑画布">🔮 下钻</span>' +
          '</div>' +
          '<div class="gantt-proj-desc" title="' + p.desc + '">' + p.desc + '</div>' +
        '</div>' +
        '<div class="col-cell-dates">' +
          '<span class="gantt-date-chip">' + p.startDate.slice(5) + ' ~ ' + p.endDate.slice(5) + '</span>' +
          '<div class="gantt-mini-squares" title="打卡达成：' + res.completedCount + '/' + res.totalDays + ' 天 (' + res.progress + '%)">' +
            miniSquaresHtml +
          '</div>' +
          '<div class="gantt-mini-pct">' + res.progress + '%</div>' +
        '</div>' +
        '<div class="col-cell-status">' +
          '<span class="gantt-status-pill ' + sm.cls + '">' + sm.label + '</span>' +
        '</div>' +
        '<div class="col-cell-ops">' +
          '<button class="gantt-op-btn gantt-plan-btn" data-id="' + p.id + '" onclick="handleOpenObsidianCanvas(this.dataset.id)" title="在 Obsidian 原生 Canvas 核心画布插件中全屏打开（原生加速，丝滑顺畅）" style="background:#eff6ff; color:#2563eb; border-color:#93c5fd;">🎨 Canvas</button>' +
          '<button class="gantt-op-btn gantt-plan-btn" data-id="' + p.id + '" onclick="openEditProjectModal(this.dataset.id)" title="编辑项目名称、起止周期与攻坚策略">✏️ 编辑</button>' +
          '<button class="gantt-op-btn gantt-plan-btn" data-id="' + p.id + '" onclick="handleGanttEditPlan(this)" title="进入该项目三级思维导图拆解画布">🔮 脑图</button>' +
          '<button class="gantt-op-btn gantt-archive-btn ' + (p.isArchived ? 'is-archived' : '') + '" data-id="' + p.id + '" onclick="handleGanttArchive(this)" title="' + (p.isArchived ? '解除归档' : '归档该项目') + '">' +
            (p.isArchived ? '📂 已归' : '📦 归档') +
          '</button>' +
        '</div>' +
      '</div>';
    });
  }
  tableRowsContainer.innerHTML = tableHtml;

  // 4. 构建时间轴刻度头部 (2026-10-18 ~ 2026-11-20 共 34 天)
  const totalDays = diffGanttDays(GANTT_START_DATE, GANTT_END_DATE) + 1;
  const canvasWidth = totalDays * GANTT_DAY_WIDTH;
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];

  const octDays = 14;
  const novDays = totalDays - octDays;
  const octWidth = octDays * GANTT_DAY_WIDTH;
  const novWidth = novDays * GANTT_DAY_WIDTH;

  let headerHtml = '<div class="gantt-timeline-inner" style="width:' + canvasWidth + 'px;">' +
    '<div class="gantt-month-row">' +
      '<div class="gantt-month-cell" style="width:' + octWidth + 'px;">🍁 2026年 10月（金秋学业攻坚季）</div>' +
      '<div class="gantt-month-cell" style="width:' + novWidth + 'px;">🌾 2026年 11月（素养跃升进阶季）</div>' +
    '</div>' +
    '<div class="gantt-day-row">';

  for (let i = 0; i < totalDays; i++) {
    const curDate = new Date(2026, 9, 18 + i);
    const curDateStr = formatGanttDate(curDate);
    const dayNum = curDate.getDate();
    const dayWeek = weekdays[curDate.getDay()];
    const isToday = (curDateStr === GANTT_TODAY);
    headerHtml += '<div class="gantt-day-cell ' + (isToday ? 'is-today' : '') + '" style="width:' + GANTT_DAY_WIDTH + 'px;" title="' + curDateStr + ' 星期' + dayWeek + '">' +
      '<div class="day-num">' + dayNum + '</div>' +
      '<div class="day-week">' + (isToday ? '★今' : dayWeek) + '</div>' +
    '</div>';
  }
  headerHtml += '</div></div>';
  headerContainer.innerHTML = headerHtml;

  // 5. 构建右侧甘特时间轴行：【小方格矩阵只读查阅模式】
  const todayIndex = diffGanttDays(GANTT_START_DATE, GANTT_TODAY);
  const todayLineLeft = todayIndex * GANTT_DAY_WIDTH + (GANTT_DAY_WIDTH / 2);

  let timelineRowsHtml = '<div class="gantt-timeline-inner" style="width:' + canvasWidth + 'px; position:relative;">' +
    '<!-- 今日垂直基准参考线 -->' +
    '<div class="gantt-today-vertical-line" style="left:' + todayLineLeft + 'px;">' +
      '<span class="gantt-today-tag">📍 今日 10/27</span>' +
    '</div>';

  if (filteredProjects.length === 0) {
    timelineRowsHtml += '<div style="height: 120px; display:flex; align-items:center; justify-content:center; color:#8c6b45; font-size:12px;">(暂无排期项目)</div>';
  } else {
    filteredProjects.forEach(p => {
      const res = computeProjectProgressAndStatus(p);

      // 计算项目起止对应当前 34 天时间轴内的天数区间
      const startDiff = diffGanttDays(GANTT_START_DATE, p.startDate);
      const spanDays = diffGanttDays(p.startDate, p.endDate) + 1;

      // 轨道底衬位置
      const trackLeft = Math.max(0, startDiff * GANTT_DAY_WIDTH + 2);
      const trackWidth = Math.max(34, spanDays * GANTT_DAY_WIDTH - 4);

      // 构造每个小方格 (只读查阅模式，不可在此处编辑)
      let squaresHtml = '';
      for (let d = 0; d < spanDays; d++) {
        const curProjDate = parseGanttDate(p.startDate);
        curProjDate.setDate(curProjDate.getDate() + d);
        const curDateStr = formatGanttDate(curProjDate);
        const dayIdxInCanvas = diffGanttDays(GANTT_START_DATE, curDateStr);

        if (dayIdxInCanvas >= 0 && dayIdxInCanvas < totalDays) {
          const isDone = p.completedDays && p.completedDays.includes(curDateStr);
          const isToday = (curDateStr === GANTT_TODAY);
          const sqLeft = dayIdxInCanvas * GANTT_DAY_WIDTH + 4;
          const dayNum = curProjDate.getDate();

          squaresHtml += '<div class="gantt-day-square ' + (isDone ? 'sq-done' : 'sq-pending') + ' ' + (isToday ? 'sq-today' : '') + '" ' +
            'style="position:absolute; left:' + sqLeft + 'px;" ' +
            'data-id="' + p.id + '" data-date="' + curDateStr + '" data-done="' + isDone + '" data-title="' + p.title + '" ' +
            'onclick="handleSquareReadOnlyClick(this)" ' +
            'title="' + p.title + ' | ' + curDateStr + ' | 状态：' + (isDone ? '已执行达成 ✓' : '待推进') + '（仅供查阅，不可在此编辑）">' +
            (isDone ? '<span class="sq-check-icon">✓</span>' : '<span class="sq-date-num">' + dayNum + '</span>') +
          '</div>';
        }
      }

      timelineRowsHtml += '<div class="gantt-timeline-row" id="row-tml-' + p.id + '">' +
        '<!-- 背景网格竖线参考 -->' +
        '<div class="gantt-row-grid-bg">';
      for (let j = 0; j < totalDays; j++) {
        timelineRowsHtml += '<div class="gantt-grid-cell" style="width:' + GANTT_DAY_WIDTH + 'px;"></div>';
      }
      timelineRowsHtml += '</div>' +
        '<!-- 项目小方格底衬连线轨道 -->' +
        '<div class="gantt-squares-track" style="left:' + trackLeft + 'px; width:' + trackWidth + 'px;" title="' + p.title + ' 全周期连贯轨道"></div>' +
        '<!-- 核心小方格进度链 (只读查阅) -->' +
        squaresHtml +
      '</div>';
    });
  }

  timelineRowsHtml += '</div>';
  timelineRowsContainer.innerHTML = timelineRowsHtml;

  const tableCol = document.getElementById('gantt-table-col');
  const timeRowsCol = document.getElementById('gantt-timeline-col');
  if (tableCol && timeRowsCol) {
    timeRowsCol.onscroll = function() {
      headerContainer.scrollLeft = timeRowsCol.scrollLeft;
    };
  }
}

// --------------------------------------------------------------------------
// 新增与编辑项目规划模态框 (Add / Edit Project Modal Controller)
// --------------------------------------------------------------------------
function openAddProjectModal() {
  const modal = document.getElementById('add-project-modal');
  if (!modal) return;

  const editIdInput = document.getElementById('input-proj-edit-id');
  const mainTitle = document.getElementById('proj-modal-main-title');
  const subTitle = document.getElementById('proj-modal-sub-title');
  const submitBtn = document.getElementById('btn-submit-proj-modal');

  if (editIdInput) editIdInput.value = '';
  if (mainTitle) mainTitle.innerText = '新增成长规划项目';
  if (subTitle) subTitle.innerText = '设定起止周期与攻坚策略 · 系统自动判定状态并排入小方格甘特图';
  if (submitBtn) submitBtn.innerText = '✓ 保存并排入甘特图';

  const titleInput = document.getElementById('input-proj-title');
  const descInput = document.getElementById('input-proj-desc');
  const startInput = document.getElementById('input-proj-start');
  const endInput = document.getElementById('input-proj-end');

  if (titleInput) titleInput.value = '';
  if (descInput) descInput.value = '';
  if (startInput) startInput.value = GANTT_TODAY;
  if (endInput) {
    const d = new Date(2026, 9, 27);
    d.setDate(d.getDate() + 14);
    endInput.value = formatGanttDate(d);
  }

  const defaultCat = (typeof currentWsPavilion !== 'undefined' && PAVILION_META[currentWsPavilion] && PAVILION_META[currentWsPavilion].cat)
    ? PAVILION_META[currentWsPavilion].cat
    : '学业攻坚';
  selectedNewProjCategory = defaultCat;
  document.querySelectorAll('#proj-category-picker .proj-cat-chip').forEach(c => {
    c.classList.toggle('is-active', c.dataset.cat === defaultCat);
  });

  document.querySelectorAll('.proj-date-preset-pill').forEach(b => {
    b.classList.toggle('is-active', b.innerText.includes('14'));
  });

  handleProjDateChange();
  modal.style.display = 'flex';
  modal.classList.add('open');
  modal.classList.add('is-open');
  if (titleInput) setTimeout(() => titleInput.focus(), 100);
}

function openEditProjectModal(id) {
  const p = window.GANTT_PROJECTS.find(item => item.id === id);
  if (!p) return;
  const modal = document.getElementById('add-project-modal');
  if (!modal) return;

  const editIdInput = document.getElementById('input-proj-edit-id');
  const mainTitle = document.getElementById('proj-modal-main-title');
  const subTitle = document.getElementById('proj-modal-sub-title');
  const submitBtn = document.getElementById('btn-submit-proj-modal');

  if (editIdInput) editIdInput.value = p.id;
  if (mainTitle) mainTitle.innerText = '调整项目规划与攻坚策略';
  if (subTitle) subTitle.innerText = '修改起止周期与目标描述 · 系统自动联动小方格甘特图与状态';
  if (submitBtn) submitBtn.innerText = '✓ 保存规划修改';

  const titleInput = document.getElementById('input-proj-title');
  const descInput = document.getElementById('input-proj-desc');
  const startInput = document.getElementById('input-proj-start');
  const endInput = document.getElementById('input-proj-end');

  if (titleInput) titleInput.value = p.title;
  if (descInput) descInput.value = p.desc;
  if (startInput) startInput.value = p.startDate;
  if (endInput) endInput.value = p.endDate;

  selectedNewProjCategory = p.category;
  document.querySelectorAll('#proj-category-picker .proj-cat-chip').forEach(c => {
    c.classList.toggle('is-active', c.dataset.cat === p.category);
  });

  handleProjDateChange();
  modal.style.display = 'flex';
  if (titleInput) setTimeout(() => titleInput.focus(), 100);
}

function closeAddProjectModal() {
  const modal = document.getElementById('add-project-modal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('open');
    modal.classList.remove('is-open');
  }
}

function handleAddProjectBackdropClick(event) {
  if (event.target.id === 'add-project-modal') {
    closeAddProjectModal();
  }
}

function selectProjCategory(btn, cat) {
  selectedNewProjCategory = cat;
  document.querySelectorAll('#proj-category-picker .proj-cat-chip').forEach(c => {
    c.classList.toggle('is-active', c === btn);
  });
}

function setProjDatePreset(days) {
  const startInput = document.getElementById('input-proj-start');
  const endInput = document.getElementById('input-proj-end');
  if (!startInput || !endInput) return;

  const startDateStr = startInput.value || GANTT_TODAY;
  const d = parseGanttDate(startDateStr);
  d.setDate(d.getDate() + days);
  endInput.value = formatGanttDate(d);

  document.querySelectorAll('.proj-date-preset-pill').forEach(b => {
    b.classList.toggle('is-active', b.innerText.includes(String(days)));
  });

  handleProjDateChange();
}

function handleProjDateChange() {
  const startInput = document.getElementById('input-proj-start');
  const endInput = document.getElementById('input-proj-end');
  const badge = document.getElementById('proj-status-preview-badge');
  const hint = document.getElementById('proj-status-preview-hint');
  if (!startInput || !endInput || !badge || !hint) return;

  const sDate = startInput.value || GANTT_TODAY;
  const eDate = endInput.value || sDate;

  const mockProj = {
    startDate: sDate,
    endDate: eDate,
    completedDays: [],
    isArchived: false
  };

  const res = computeProjectProgressAndStatus(mockProj);
  const sm = getStatusMeta(res.status);

  badge.className = 'gantt-status-pill ' + sm.cls;
  badge.innerText = sm.label;

  if (res.status === '进行中') {
    hint.innerText = '起止周期覆盖今日 (' + GANTT_TODAY + ')，系统自动判定为【进行中】；小方格全部达成后自动升级为【已完成】。';
  } else if (res.status === '待执行') {
    hint.innerText = '即将启动或待冲刺，系统自动列入【待执行】攻坚清单。';
  } else if (res.status === '待规划') {
    hint.innerText = '起步日期距离今日较远，系统自动列入【待规划】远景项目。';
  } else {
    hint.innerText = '系统依据实际小方格执行情况与时间周期实时判定。';
  }
}

function confirmAddNewProject() {
  const editIdInput = document.getElementById('input-proj-edit-id');
  const titleInput = document.getElementById('input-proj-title');
  const descInput = document.getElementById('input-proj-desc');
  const startInput = document.getElementById('input-proj-start');
  const endInput = document.getElementById('input-proj-end');

  const editId = editIdInput ? editIdInput.value.trim() : '';
  const title = (titleInput ? titleInput.value : '').trim();
  const desc = (descInput ? descInput.value : '').trim();
  const startDate = startInput ? startInput.value : GANTT_TODAY;
  const endDate = endInput ? endInput.value : startDate;

  if (!title) {
    showIslandToast('⚠️ 请填写项目标题！');
    if (titleInput) titleInput.focus();
    return;
  }

  if (endDate < startDate) {
    showIslandToast('⚠️ 结束日期不能早于开始日期！');
    return;
  }

  const catToPavMap = { '学业攻坚': 'study', '兴趣特长': 'dojo', '修身立宪': 'cultivation', '认知思辨': 'cognition' };
  const resolvedPav = catToPavMap[selectedNewProjCategory] || (typeof currentWsPavilion !== 'undefined' ? currentWsPavilion : 'study');

  if (editId) {
    const existing = window.GANTT_PROJECTS.find(item => item.id === editId);
    if (existing) {
      existing.pavilion = resolvedPav;
      existing.category = selectedNewProjCategory;
      existing.title = title;
      existing.desc = desc || '按照战术策略推进攻坚。';
      existing.startDate = startDate;
      existing.endDate = endDate;
      if (typeof renderHomeSemesterGoalsBanner === 'function') renderHomeSemesterGoalsBanner();
      showIslandToast('🎉 成功保存【' + title + '】规划调整！甘特图与首页目标条已自动更新！');
    }
  } else {
    const newProj = {
      id: 'proj_' + Date.now(),
      pavilion: resolvedPav,
      category: selectedNewProjCategory,
      title: title,
      desc: desc || '按照战术策略推进攻坚。',
      startDate: startDate,
      endDate: endDate,
      completedDays: [],
      isArchived: false
    };
    window.GANTT_PROJECTS.unshift(newProj);
    if (window.PROJECT_CANVAS_STORE && typeof buildStarterCanvasForProject === 'function') {
      window.PROJECT_CANVAS_STORE[newProj.id] = buildStarterCanvasForProject(newProj);
    }
    if (typeof renderHomeSemesterGoalsBanner === 'function') renderHomeSemesterGoalsBanner();
    if (typeof appendDailyAutoLog === 'function') {
      appendDailyAutoLog('📊 规划立项：在【' + selectedNewProjCategory + '】新建甘特项目《' + title + '》(' + startDate + ' ~ ' + endDate + ')');
    }
    showIslandToast('🎉 成功新增【' + selectedNewProjCategory + '】项目：' + title + ' 并排入小方格甘特图与专属脑图画布！');
  }

  closeAddProjectModal();
  renderGanttChart();
}


  
// =========================================================================
// 自定义规划打卡节点全生命周期逻辑 + 三级节点自动同步首页待办 + 复盘卡派生节点闭环
// =========================================================================
let currentCustomPlanCheckinType = 'image';
let customCardTimerIntervals = {};

function syncNewNodeToHomeExecution(taskCfg) {
  const cfg = taskCfg || {};
  const deck = document.getElementById('day-card-deck');
  if (!deck) return;

  const taskId = cfg.id || ('sync-' + Date.now());
  if (document.getElementById('exec-sync-' + taskId)) return;

  const title = cfg.title || '新增规划执行任务';
  const desc = cfg.desc || '按规划节点要求专注执行并上传真实物证完成打卡。';
  const pavId = cfg.pavilionId || (typeof currentWsPavilion !== 'undefined' ? currentWsPavilion : 'study');
  const dur = parseInt(cfg.duration, 10) || 20;
  const pavMeta = (typeof PAVILION_META !== 'undefined' && PAVILION_META[pavId]) ? PAVILION_META[pavId] : { name: '执行任务', icon: '⚡' };

  const newIdx = deck.querySelectorAll('.exec-task-card').length;
  const placeholder = document.getElementById('day-deck-empty-placeholder');
  if (placeholder) placeholder.style.display = 'none';
  const dotsWrapEl = document.getElementById('exec-carousel-dots');
  if (dotsWrapEl) dotsWrapEl.style.display = 'flex';

  const cardEl = document.createElement('div');
  cardEl.className = 'exec-task-card tertiary-drill-card card-far-next';
  cardEl.id = 'exec-sync-' + taskId;
  cardEl.dataset.index = String(newIdx);
  cardEl.dataset.taskId = taskId;
  cardEl.dataset.pavilion = pavId;
  cardEl.dataset.label = title;
  cardEl.onclick = function(ev) { handleTaskCardClick(ev, 'drill'); };

  const safeTitle = title.replace(/"/g, '&quot;');
  const safeDesc = desc.replace(/"/g, '&quot;');
  cardEl.innerHTML =
    '<div class="work-node-card-header">' +
      '<span class="work-node-badge" style="background:#fef3c7; color:#b45309; border:1px solid #fde68a;">' + (pavMeta.icon || '⚡') + ' ' + (pavMeta.name || '规划同步') + '</span>' +
      '<span class="work-node-title">' + title + '</span>' +
      '<span class="task-status-pill pending" id="task-pill-' + taskId + '" style="font-size:10px; font-weight:800; color:#b45309;">🟡 今日待打卡</span>' +
    '</div>' +
    '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
      '<p style="font-weight:750; color:#4a3a2a; font-size:11.5px; margin:0; line-height:1.5;">' + desc + '</p>' +
      '<div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:6px 8px; display:flex; flex-direction:column; gap:5px;" onclick="event.stopPropagation()">' +
        '<span style="font-size:10.5px; font-weight:850; color:#0369a1;">🎬 交付物证要求</span>' +
        '<div id="drill-img-box-sync-' + taskId + '" class="node-img-preview-box" onclick="triggerDrillCardImage(\'sync-' + taskId + '\', event)" style="margin:0; padding:7px 8px; background:#fff; border:1.5px dashed #38bdf8; border-radius:6px; cursor:pointer; text-align:center;">' +
          '<span style="font-size:10.5px; font-weight:800; color:#0284c7;">📷 / 🎥 点击上传执行照片或视频物证</span>' +
        '</div>' +
        '<input type="text" id="drill-img-desc-sync-' + taskId + '" class="add-module-text-input" value="' + safeDesc + '" style="width:100%; box-sizing:border-box; height:22px; font-size:10px; padding:1px 6px; background:#fff; color:#0c4a6e; font-weight:700;">' +
      '</div>' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px;" onclick="event.stopPropagation()">' +
        '<span>预计专注：⏱️ ' + dur + ' 分钟</span>' +
        '<button type="button" id="btn-complete-' + taskId + '" class="card-graphic-pill pill-timer" onclick="completeTask(\'' + taskId + '\')">🌟 立即打卡</button>' +
      '</div>' +
    '</div>';

  deck.appendChild(cardEl);

  const dotsWrap = document.getElementById('exec-carousel-dots');
  if (dotsWrap) {
    const dot = document.createElement('div');
    dot.className = 'pagination-dot-pill';
    dot.onclick = function() { goToDayCard(newIdx); };
    dot.innerHTML = '<span class="dot-circle"></span><span class="dot-text">' + (pavMeta.icon || '⚡') + ' ' + title.slice(0, 6) + '</span>';
    dotsWrap.appendChild(dot);
  }

  if (window.USER_PROFILE_STATE) {
    window.USER_PROFILE_STATE.totalTodayCount = deck.querySelectorAll('.exec-task-card').length;
  }
  if (typeof WEEK_BOARD_DATA !== 'undefined' && Array.isArray(WEEK_BOARD_DATA)) {
    const todayCol = getTodayWeekCol();
    if (todayCol && Array.isArray(todayCol.tasks)) {
      todayCol.tasks.push({
        id: 'w-' + taskId,
        pavilion: pavMeta.name || '校史馆',
        pavilionBadge: (pavMeta.icon || '⚡') + ' ' + (pavMeta.name || '新增待办'),
        title: title,
        status: 'pending',
        duration: dur + ' 分钟',
        time: '今日待执行',
        instruction: desc,
        evidence: '待打卡上传真实物证',
        reflection: '待填写'
      });
    }
    if (typeof renderWeekBoard === 'function') renderWeekBoard(window.currentWeekFilter || 'all');
  }
  if (typeof renderMonthCalendar === 'function') renderMonthCalendar();
  if (typeof updateDayCarousel === 'function') {
    currentDayCardIndex = newIdx;
    updateDayCarousel();
  }
  if (typeof recalcAndRenderGlobalHUD === 'function') recalcAndRenderGlobalHUD();
}

function deriveNodesFromReflectionCard(cardId, event) {
  if (event) event.stopPropagation();
  const card = document.getElementById(cardId);
  if (!card) return;

  const inputs = card.querySelectorAll('.reflection-improvement-input');
  const items = [];
  inputs.forEach(inp => {
    const row = inp.closest('.card-reflection-improvement-item');
    const chk = row ? row.querySelector('input[type="checkbox"]') : null;
    if (!chk || chk.checked) {
      const val = (inp.value || '').replace(/^\d+[\.\、\s]*/, '').trim();
      if (val) items.push(val);
    }
  });

  if (items.length === 0) {
    showIslandToast('⚠️ 请先在提升清单中填写并勾选至少 1 项具体提升行动！');
    return;
  }

  let spawnedCount = 0;
  const isOnTertiaryCanvas = !!card.closest('#tertiary-canvas-world');

  items.forEach((impText, idx) => {
    const nodeTitle = '【复盘派生】' + impText.slice(0, 14);
    if (isOnTertiaryCanvas && typeof createTertiaryCustomPlanningCard === 'function') {
      const newCard = createTertiaryCustomPlanningCard({
        archetype: 'drill',
        title: nodeTitle,
        formula: impText,
        duration: '20',
        imageDesc: '针对复盘提升项完成专项纠偏实训并拍照存证',
        skipAutoSync: false
      });
      if (newCard && Array.isArray(window.TERTIARY_EDGES)) {
        const baseLeft = (parseInt(card.style.left, 10) || 400) + 390;
        const baseTop = (parseInt(card.style.top, 10) || 320) + idx * 290;
        newCard.style.left = baseLeft + 'px';
        newCard.style.top = baseTop + 'px';
        window.TERTIARY_EDGES.push({
          id: 'edge-' + cardId + '-' + newCard.id,
          sourceId: cardId,
          targetId: newCard.id,
          sourceLabel: card.dataset.label || '评估复盘',
          targetLabel: nodeTitle,
          label: '复盘派生',
          type: '派生',
          arrowMode: 'single',
          lineStyle: 'dashed',
          lineWidth: 3,
          color: '#7c3aed'
        });
      }
    } else {
      syncNewNodeToHomeExecution({
        id: 'derived-' + Date.now() + '-' + idx,
        title: nodeTitle,
        desc: '复盘提升项落地：' + impText,
        pavilionId: typeof currentWsPavilion !== 'undefined' ? currentWsPavilion : 'study',
        duration: 20
      });
    }
    spawnedCount++;
  });

  if (isOnTertiaryCanvas && typeof renderTertiaryEdges === 'function') {
    renderTertiaryEdges();
    if (typeof saveCurrentProjectCanvasSnapshot === 'function') saveCurrentProjectCanvasSnapshot();
  }
  if (typeof appendDailyAutoLog === 'function') {
    appendDailyAutoLog('🌱 复盘闭环派生：从评估复盘卡一键派生 ' + spawnedCount + ' 个靶向【⚡ 攻坚实训】节点并同步至首页今日待办');
  }
  showIslandToast('🌱 成功从提升清单派生 ' + spawnedCount + ' 个【⚡ 攻坚实训节点】并自动同步至首页今日待办！');
}

function handleCustomCardCheckin(btn, cardId, sealText, checkinType) {
  const card = document.getElementById(cardId);
  if (!card) return;
  const statusEl = document.getElementById('status-text-' + cardId);
  const sealEl = document.getElementById('card-seal-' + cardId);

  if (sealEl) sealEl.style.display = 'inline-block';
  if (statusEl) {
    statusEl.innerHTML = '<span style="color:#16a34a; font-weight:900;">✓ 已' + (sealText || '打卡') + '</span>';
  }
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '✓ 已' + (sealText || '通关');
    btn.classList.add('is-checked');
    btn.style.background = '#10b981';
    btn.style.color = '#fff';
    btn.style.borderColor = '#059669';
  }
  triggerGlobalCheckinClosedLoop({
    taskKey: 'custom-card-' + cardId,
    pavilionId: typeof currentWsPavilion !== 'undefined' ? currentWsPavilion : 'custom',
    title: (card && card.dataset.label) ? card.dataset.label : '自定义配置节点',
    focusMinutes: 20
  });
  showIslandToast('🎉 恭喜！已完成【' + (sealText || '自主通关') + '】打卡闭环！已回写甘特进度与每日随记！');
}


// 动态增减原型库自定义卡片字段行
function addPickerCustomDynamicField(k = '', v = '') {
  const container = document.getElementById('picker-custom-fields-list');
  if (!container) return;
  const row = document.createElement('div');
  row.className = 'picker-custom-field-row';
  row.style.cssText = 'display:flex; gap:6px; align-items:center;';
  row.innerHTML = 
    '<input type="text" class="picker-field-key add-module-text-input" value="' + (k || '自定义要点') + '" placeholder="字段名" style="width:80px; height:28px; font-size:10.5px; font-weight:800; border:1px solid #86efac; border-radius:4px; padding:0 6px;">' +
    '<input type="text" class="picker-field-val add-module-text-input" value="' + (v || '') + '" placeholder="字段说明内容" style="flex:1; height:28px; font-size:10.5px; border:1px solid #86efac; border-radius:4px; padding:0 6px;">' +
    '<button type="button" onclick="removePickerCustomDynamicField(this)" style="background:#fee2e2; color:#dc2626; border:1px solid #fca5a5; border-radius:4px; width:22px; height:22px; font-size:11px; cursor:pointer; display:flex; align-items:center; justify-content:center;" title="删除此字段">✕</button>';
  container.appendChild(row);
  showIslandToast('✓ 已为原型库自定义卡片追加新字段');
}

function removePickerCustomDynamicField(btn) {
  if (!btn) return;
  const row = btn.closest('.picker-custom-field-row');
  if (row) {
    row.remove();
    showIslandToast('✓ 已删除该字段');
  }
}

// 真实依据 4 大通用卡片原型完整渲染三级卡片 (展示所有录入专属信息)

// === 🎯 目标分解卡：两列（指标名 + 指标数据）动态增删、交付物上传与沉淀到成就馆控制器 ===
function addGoalMetricModalRow(listId) {
  const list = document.getElementById(listId);
  if (!list) return;
  const isPicker = listId.includes('picker');
  const row = document.createElement('div');
  row.className = 'goal-metric-row';
  row.style.cssText = 'display:grid; grid-template-columns:1fr 1fr ' + (isPicker ? '24px' : '64px') + '; align-items:center; gap:' + (isPicker ? '4px' : '6px') + ';';
  row.innerHTML =
    '<input type="text" class="add-module-text-input goal-metric-name" placeholder="指标名..." style="width:100%; box-sizing:border-box; height:' + (isPicker ? '25px' : '30px') + '; font-size:' + (isPicker ? '10.5px' : '11.5px') + '; padding:2px 6px;">' +
    '<input type="text" class="add-module-text-input goal-metric-val" placeholder="指标数据..." style="width:100%; box-sizing:border-box; height:' + (isPicker ? '25px' : '30px') + '; font-size:' + (isPicker ? '10.5px' : '11.5px') + '; padding:2px 6px; font-weight:800; color:#15803d;">' +
    '<button type="button" onclick="removeGoalMetricModalRow(this)" style="height:' + (isPicker ? '25px' : '30px') + '; padding:0 ' + (isPicker ? '0' : '8px') + '; font-size:' + (isPicker ? '10px' : '11px') + '; font-weight:800; background:#fef2f2; color:#dc2626; border:1px solid #fecaca; border-radius:4px; cursor:pointer;">✕' + (isPicker ? '' : ' 删除') + '</button>';
  list.appendChild(row);
  const input = row.querySelector('.goal-metric-name');
  if (input) input.focus();
}

function removeGoalMetricModalRow(btn) {
  if (!btn) return;
  const row = btn.closest('.goal-metric-row');
  if (!row) return;
  const list = row.parentElement;
  if (list && list.querySelectorAll('.goal-metric-row').length <= 1) {
    showIslandToast('⚠️ 至少需保留 1 项量化通关指标！');
    return;
  }
  row.remove();
}

function addCardGoalMetricItem(containerId, event) {
  if (event) event.stopPropagation();
  const container = document.getElementById(containerId);
  if (!container) return;
  const item = document.createElement('div');
  item.className = 'card-goal-metric-item';
  item.style.cssText = 'display:grid; grid-template-columns:1fr 1fr 20px; align-items:center; gap:4px;';
  item.innerHTML =
    '<input type="text" placeholder="指标名" class="add-module-text-input goal-metric-name" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#1e3a8a; font-weight:700;">' +
    '<input type="text" placeholder="指标数据" class="add-module-text-input goal-metric-val" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#15803d; font-weight:800;">' +
    '<button type="button" onclick="removeCardGoalMetricItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px; font-weight:900; cursor:pointer; line-height:1;">✕</button>';
  container.appendChild(item);
  const input = item.querySelector('.goal-metric-name');
  if (input) input.focus();
}

function removeCardGoalMetricItem(btn, event) {
  if (event) event.stopPropagation();
  if (!btn) return;
  const item = btn.closest('.card-goal-metric-item');
  if (!item) return;
  const container = item.parentElement;
  if (container && container.querySelectorAll('.card-goal-metric-item').length <= 1) {
    showIslandToast('⚠️ 目标分解卡至少需保留 1 项量化通关指标！');
    return;
  }
  item.remove();
}

// === 🌿 习惯践行卡：践行防守清单多项动态新增与删除控制器 ===
function addHabitChecklistModalRow(listId) {
  const list = document.getElementById(listId);
  if (!list) return;
  const isPicker = listId.includes('picker');
  const nextIdx = list.querySelectorAll('.habit-checklist-row').length + 1;
  const row = document.createElement('div');
  row.className = 'habit-checklist-row';
  row.style.cssText = 'display:grid; grid-template-columns:1fr ' + (isPicker ? '24px' : '64px') + '; align-items:center; gap:' + (isPicker ? '4px' : '6px') + ';';
  row.innerHTML =
    '<input type="text" class="add-module-text-input habit-checklist-text" value="' + nextIdx + '. " placeholder="输入践行防守清单项..." style="width:100%; box-sizing:border-box; height:' + (isPicker ? '25px' : '30px') + '; font-size:' + (isPicker ? '10.5px' : '11.5px') + '; padding:2px 6px;">' +
    '<button type="button" onclick="removeHabitChecklistModalRow(this)" style="height:' + (isPicker ? '25px' : '30px') + '; padding:0 ' + (isPicker ? '0' : '8px') + '; font-size:' + (isPicker ? '10px' : '11px') + '; font-weight:800; background:#fef2f2; color:#dc2626; border:1px solid #fecaca; border-radius:4px; cursor:pointer;">✕' + (isPicker ? '' : ' 删除') + '</button>';
  list.appendChild(row);
  const input = row.querySelector('.habit-checklist-text');
  if (input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

function removeHabitChecklistModalRow(btn) {
  if (!btn) return;
  const row = btn.closest('.habit-checklist-row');
  if (!row) return;
  const list = row.parentElement;
  if (list && list.querySelectorAll('.habit-checklist-row').length <= 1) {
    showIslandToast('⚠️ 至少需保留 1 项践行防守清单项！');
    return;
  }
  row.remove();
}

function addCardHabitChecklistItem(containerId, event) {
  if (event) event.stopPropagation();
  const container = document.getElementById(containerId);
  if (!container) return;
  const nextIdx = container.querySelectorAll('.card-habit-checklist-item').length + 1;
  const item = document.createElement('div');
  item.className = 'card-habit-checklist-item';
  item.style.cssText = 'display:grid; grid-template-columns:16px 1fr 20px; align-items:center; gap:4px;';
  item.innerHTML =
    '<input type="checkbox" checked style="margin:0; accent-color:#059669; cursor:pointer;">' +
    '<input type="text" value="' + nextIdx + '. " placeholder="输入践行防守清单项..." class="add-module-text-input habit-checklist-input" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#065f46; font-weight:700; background:#fff;">' +
    '<button type="button" onclick="removeCardHabitChecklistItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px; font-weight:900; cursor:pointer; line-height:1;">✕</button>';
  container.appendChild(item);
  const input = item.querySelector('.habit-checklist-input');
  if (input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

function removeCardHabitChecklistItem(btn, event) {
  if (event) event.stopPropagation();
  if (!btn) return;
  const item = btn.closest('.card-habit-checklist-item');
  if (!item) return;
  const container = item.parentElement;
  if (container && container.querySelectorAll('.card-habit-checklist-item').length <= 1) {
    showIslandToast('⚠️ 习惯践行卡至少需保留 1 项践行防守清单项！');
    return;
  }
  item.remove();
}

// === 📝 评估复盘卡：提升清单多项动态新增与删除控制器 ===
function addReflectionImprovementModalRow(listId) {
  const list = document.getElementById(listId);
  if (!list) return;
  const isPicker = listId.includes('picker');
  const nextIdx = list.querySelectorAll('.reflection-improvement-row').length + 1;
  const row = document.createElement('div');
  row.className = 'reflection-improvement-row';
  row.style.cssText = 'display:grid; grid-template-columns:1fr ' + (isPicker ? '24px' : '64px') + '; align-items:center; gap:' + (isPicker ? '4px' : '6px') + ';';
  row.innerHTML =
    '<input type="text" class="add-module-text-input reflection-improvement-text" value="' + nextIdx + '. " placeholder="输入具体提升项..." style="width:100%; box-sizing:border-box; height:' + (isPicker ? '25px' : '30px') + '; font-size:' + (isPicker ? '10.5px' : '11.5px') + '; padding:2px 6px;">' +
    '<button type="button" onclick="removeReflectionImprovementModalRow(this)" style="height:' + (isPicker ? '25px' : '30px') + '; padding:0 ' + (isPicker ? '0' : '8px') + '; font-size:' + (isPicker ? '10px' : '11px') + '; font-weight:800; background:#fef2f2; color:#dc2626; border:1px solid #fecaca; border-radius:4px; cursor:pointer;">✕' + (isPicker ? '' : ' 删除') + '</button>';
  list.appendChild(row);
  const input = row.querySelector('.reflection-improvement-text');
  if (input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

function removeReflectionImprovementModalRow(btn) {
  if (!btn) return;
  const row = btn.closest('.reflection-improvement-row');
  if (!row) return;
  const list = row.parentElement;
  if (list && list.querySelectorAll('.reflection-improvement-row').length <= 1) {
    showIslandToast('⚠️ 至少需保留 1 项提升清单项！');
    return;
  }
  row.remove();
}

function addCardReflectionImprovementItem(containerId, event) {
  if (event) event.stopPropagation();
  const container = document.getElementById(containerId);
  if (!container) return;
  const nextIdx = container.querySelectorAll('.card-reflection-improvement-item').length + 1;
  const item = document.createElement('div');
  item.className = 'card-reflection-improvement-item';
  item.style.cssText = 'display:grid; grid-template-columns:16px 1fr 20px; align-items:center; gap:4px;';
  item.innerHTML =
    '<input type="checkbox" checked style="margin:0; accent-color:#7c3aed; cursor:pointer;">' +
    '<input type="text" value="' + nextIdx + '. " placeholder="输入提升项..." class="add-module-text-input reflection-improvement-input" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#5b21b6; font-weight:700; background:#fff;">' +
    '<button type="button" onclick="removeCardReflectionImprovementItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px; font-weight:900; cursor:pointer; line-height:1;">✕</button>';
  container.appendChild(item);
  const input = item.querySelector('.reflection-improvement-input');
  if (input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

function removeCardReflectionImprovementItem(btn, event) {
  if (event) event.stopPropagation();
  if (!btn) return;
  const item = btn.closest('.card-reflection-improvement-item');
  if (!item) return;
  const container = item.parentElement;
  if (container && container.querySelectorAll('.card-reflection-improvement-item').length <= 1) {
    showIslandToast('⚠️ 评估复盘卡至少需保留 1 项提升项！');
    return;
  }
  item.remove();
}

function switchModalGoalDeliverable(prefix, mode) {
  const mediaBox = document.getElementById(prefix + '-goal-deliverable-media');
  const textBox = document.getElementById(prefix === 'custom' ? 'custom-goal-deliverable' : 'node-deliverable-card-goal');
  if (mode === 'text') {
    if (mediaBox) mediaBox.style.display = 'none';
    if (textBox) { textBox.style.display = 'block'; textBox.focus(); }
  } else {
    if (textBox) textBox.style.display = 'none';
    if (mediaBox) {
      mediaBox.style.display = 'block';
      mediaBox.innerHTML = mode === 'video' ? '🎥 点击录制或上传交付物视频' : '📷 点击拍照或上传交付物照片';
    }
  }
}

function switchGoalDeliverableMode(cardId, mode) {
  const mediaBox = document.getElementById('goal-media-box-' + cardId);
  const textEl = document.getElementById('goal-deliverable-text-' + cardId);
  if (mode === 'text') {
    if (mediaBox) mediaBox.style.display = 'none';
    if (textEl) {
      textEl.style.display = 'block';
      textEl.focus();
    }
    showIslandToast('✍️ 已切换为【文字记录提交】模式');
  } else {
    if (textEl) textEl.style.display = 'none';
    if (mediaBox) {
      mediaBox.style.display = 'block';
      if (mediaBox.dataset.uploaded !== 'true') {
        mediaBox.innerHTML = mode === 'video' ? '🎥 点击录制或上传交付物视频' : '📷 点击拍照或上传交付物照片';
      }
    }
    showIslandToast(mode === 'video' ? '🎥 已切换为【视频提交】模式' : '📷 已切换为【拍照提交】模式');
  }
}

function triggerGoalDeliverableUpload(cardId, event) {
  if (event) event.stopPropagation();
  const typeSelect = document.getElementById('goal-deliverable-type-' + cardId);
  const mode = typeSelect ? typeSelect.value : 'photo';
  const mediaBox = document.getElementById('goal-media-box-' + cardId);
  if (mediaBox) {
    const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    mediaBox.dataset.uploaded = 'true';
    mediaBox.style.background = '#ecfdf5';
    mediaBox.style.borderColor = '#10b981';
    mediaBox.style.color = '#047857';
    if (mode === 'video') {
      mediaBox.innerHTML = '🎬 已上传交付物视频存证 (' + nowStr + ' · 点击更换)';
      showIslandToast('🎥 交付物视频提交成功！可点击下方【🏆 记录到成就馆】归档');
    } else {
      mediaBox.innerHTML = '🖼️ 已上传交付物照片存证 (' + nowStr + ' · 点击更换)';
      showIslandToast('📷 交付物照片提交成功！可点击下方【🏆 记录到成就馆】归档');
    }
  }
}

function depositGoalToAchievement(cardId, event) {
  if (event) event.stopPropagation();
  const card = document.getElementById(cardId);
  const btn = document.getElementById('btn-deposit-' + cardId) || (event && event.target ? event.target.closest('button') : null);
  const statusEl = document.getElementById('status-text-' + cardId);
  const typeSelect = document.getElementById('goal-deliverable-type-' + cardId);
  const mode = typeSelect ? typeSelect.value : 'photo';
  const textEl = document.getElementById('goal-deliverable-text-' + cardId);
  const mediaBox = document.getElementById('goal-media-box-' + cardId);

  if (btn && btn.dataset.deposited === 'true') {
    enterSecondaryWorkspace('achieve', 'specialized');
    return;
  }

  const title = (card && card.dataset.label) ? card.dataset.label : '阶段目标成果';
  if (mode === 'text' && textEl && textEl.value.trim().length === 0) {
    showIslandToast('⚠️ 请先输入交付物文字记录后再记录到成就馆！');
    textEl.focus();
    return;
  }

  let proofStr = '📷 目标交付物手稿照片已归档';
  if (mode === 'video') {
    proofStr = '🎬 目标通关实况视频已归档';
  } else if (mode === 'text' && textEl) {
    proofStr = '✍️ 交付物记录：' + textEl.value.trim().substring(0, 20) + '...';
  }

  if (mediaBox && mediaBox.dataset.uploaded !== 'true' && mode !== 'text') {
    mediaBox.dataset.uploaded = 'true';
    mediaBox.style.background = '#ecfdf5';
    mediaBox.style.borderColor = '#10b981';
    mediaBox.style.color = '#047857';
    mediaBox.innerHTML = mode === 'video' ? '🎬 已归档交付物视频存证' : '🖼️ 已归档交付物照片存证';
  }

  if (statusEl) {
    statusEl.innerText = '🏆 已记录到成就馆';
    statusEl.style.color = '#b45309';
    statusEl.style.background = '#fef3c7';
    statusEl.style.padding = '1px 6px';
    statusEl.style.borderRadius = '4px';
  }

  if (btn) {
    btn.dataset.deposited = 'true';
    btn.innerHTML = '🏛️ 已记录 · 前往成就馆查看';
    btn.style.background = '#10b981';
    btn.style.borderColor = '#059669';
  }

  // 判定当前所属项目类型
  let projectType = 'study';
  let projectTypeLabel = '校史馆 · 学科学业攻坚';
  let projectName = '100以内混合进退位口算进阶攻坚';
  let issuer = '校史馆学科教研组 · 审验';
  let icon = '🎯';

  if (typeof currentWsPavilion !== 'undefined') {
    if (currentWsPavilion === 'dojo') {
      projectType = 'dojo';
      projectTypeLabel = '武道馆 · 兴趣体能竞技';
      projectName = '跳绳体适能专项突破';
      issuer = '武道馆教练组 · 审验';
      icon = '🥋';
    } else if (currentWsPavilion === 'cultivation') {
      projectType = 'cultivation';
      projectTypeLabel = '修身阁 · 品格立宪研读';
      projectName = '《大学》经典晨读与知行合一践行计划';
      issuer = '修身阁问道师长 · 见证';
      icon = '📜';
    } else if (currentWsPavilion === 'cognition') {
      projectType = 'cognition';
      projectTypeLabel = '思辨馆 · 认知哲思训练';
      projectName = '少儿多元思维与亲子议题思辨训练';
      issuer = '思辨馆导师组 · 见证';
      icon = '🧠';
    } else if (PAVILION_META[currentWsPavilion]) {
      projectType = currentWsPavilion;
      projectTypeLabel = PAVILION_META[currentWsPavilion].name + ' · 专项课题';
      projectName = title;
      issuer = PAVILION_META[currentWsPavilion].name + ' · 核验';
      icon = PAVILION_META[currentWsPavilion].icon || '🏆';
    }
  }

  const now = new Date();
  const dateStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');

  // 写入养成类成就清单 (不可手动新增，只可在目标卡片点击产生)
  if (window.ACHIEVEMENT_STATE && window.ACHIEVEMENT_STATE.cultivationItems) {
    const existing = window.ACHIEVEMENT_STATE.cultivationItems.find(x => x.id === 'ACH-CULT-' + cardId);
    if (!existing) {
      window.ACHIEVEMENT_STATE.cultivationItems.unshift({
        id: 'ACH-CULT-' + cardId,
        date: dateStr,
        title: title + ' · 阶段结业通关章',
        icon: icon,
        projectType: projectType,
        projectTypeLabel: projectTypeLabel,
        projectName: projectName,
        metrics: [
          { name: '量化通关综合指标', target: '达标', actual: '100% 达成' },
          { name: '限时与准确率验收', target: '优秀标准', actual: '全部合格' }
        ],
        proof: proofStr,
        issuer: issuer,
        desc: '各模块项目目标通关结业沉淀 · 达成既定指标验收标准，交付真实凭证。'
      });
      updateAchieveWorkspaceLiveDOM();

      // 📝【双向闭环 3】目标成果沉淀时，自动同步至每日随记客观事实流水
      if (typeof syncAchievementToDailyNote === 'function') {
        syncAchievementToDailyNote(projectTypeLabel, title + ' · 阶段结业通关章');
      }
    }
  }

  const deckStatus = document.getElementById('status-text-exec-card-goal');
  if (deckStatus) {
    deckStatus.className = 'task-status-pill completed';
    deckStatus.innerText = '🏆 已记录到成就馆';
  }
  const tcardStatus = document.getElementById('status-text-tcard-1');
  if (tcardStatus) {
    tcardStatus.innerText = '🏆 已记录到成就馆';
    tcardStatus.style.color = '#b45309';
  }

  showIslandToast('🏆 目标结果数据已成功记录并沉淀到【成就馆·项目养成展厅】！再次点击按钮可直达成就馆查阅');
}

function updateDrillCardDuration(cardId, val) {
  const footerDur = document.getElementById('drill-footer-dur-' + cardId);
  if (footerDur) {
    footerDur.innerText = '预计专注：⏱️ ' + val + ' 分钟';
  }
  showIslandToast('⏱️ 已将当前攻坚实训卡计划专注时长设为 ' + val + ' 分钟');
}

function triggerDrillCardImage(cardId, event) {
  if (event) event.stopPropagation();
  let fileInput = document.getElementById('drill-hidden-media-input');
  if (!fileInput) {
    fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'drill-hidden-media-input';
    fileInput.accept = 'image/*,video/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
  }
  fileInput.onchange = function(ev) {
    const file = ev.target.files && ev.target.files[0];
    const box = document.getElementById('drill-img-box-' + cardId);
    const descInput = document.getElementById('drill-img-desc-' + cardId);
    if (box) {
      const isVideo = file && file.type && file.type.startsWith('video/');
      const fileName = file ? file.name : '实训素材文件';
      box.style.background = '#ecfdf5';
      box.style.borderColor = '#10b981';
      box.innerHTML =
        '<span style="font-size:10.5px; font-weight:800; color:#047857;">' + (isVideo ? '🎬 已上传视频: ' : '🖼️ 已上传图片: ') + fileName + ' (点击更换)</span>';
    }
    showIslandToast('✅ 已上传实训图片/视频！可在下方输入框补充说明');
    if (descInput) descInput.focus();
  };
  fileInput.click();
}

function createTertiaryCustomPlanningCard(config) {
  const world = document.getElementById('tertiary-canvas-world');
  if (!world) return null;

  const archetype = config.archetype || 'drill';
  const cardId = 'tcard-custom-' + Date.now();
  const card = document.createElement('div');
  const baseLeft = 100 + ((tertiaryCardIndex - 5) % 4) * 440;
  const baseTop = 400 + Math.floor(Math.max(0, tertiaryCardIndex - 5) / 4) * 380;
  card.id = cardId;
  card.style.position = 'absolute';
  card.style.left = baseLeft + 'px';
  card.style.top = baseTop + 'px';

  const title = config.title || '通用规划课题';
  card.className = 'a-my-island-work-node-card tertiary-card custom-planning-card';
  card.dataset.label = title;
  card.dataset.archetype = archetype;

  let headerHtml = '';
  let bodyHtml = '';

  // === 1. 🎯 目标分解卡原型 ===
  if (archetype === 'goal') {
    card.classList.add('tertiary-goal-card');
    card.style.width = '340px';
    const metricsList = (Array.isArray(config.metrics) && config.metrics.length > 0)
      ? config.metrics
      : [{ name: '阶段量化指标', val: '≥ 95%' }];
    const acceptance = config.acceptance || '完成前置实训与打卡验收';
    const deadline = (config.deadline && config.deadline.includes('T')) ? config.deadline : '2026-11-15T20:00';
    const deliverable = config.deliverable || '';

    const metricsRowsHtml = metricsList.map(m => {
      const mName = (typeof m === 'object' && m !== null) ? (m.name || '量化指标') : String(m);
      const mVal = (typeof m === 'object' && m !== null) ? (m.val || '达标') : '达标';
      return '<div class="card-goal-metric-item" style="display:grid; grid-template-columns:1fr 1fr 20px; align-items:center; gap:4px;">' +
        '<input type="text" value="' + mName.replace(/"/g, '&quot;') + '" placeholder="指标名" class="add-module-text-input goal-metric-name" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#1e3a8a; font-weight:700;">' +
        '<input type="text" value="' + mVal.replace(/"/g, '&quot;') + '" placeholder="指标数据" class="add-module-text-input goal-metric-val" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#15803d; font-weight:800;">' +
        '<button type="button" onclick="removeCardGoalMetricItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px; font-weight:900; cursor:pointer; line-height:1;">✕</button>' +
      '</div>';
    }).join('');

    headerHtml = '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + cardId + '\', event)" title="双击标题栏最小化/展开卡片">' +
      '<span class="work-node-badge" style="background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe;">🎯 目标分解</span>' +
      '<span class="work-node-title">' + title + '</span>' +
      '<span id="status-text-' + cardId + '" style="font-size:10px; font-weight:800; color:#1d4ed8;">阶段里程碑</span>' +
    '</div>';

    bodyHtml = '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
      '<div style="background:#f8fafc; border:1px solid #bfdbfe; border-radius:8px; padding:6px 8px;" onclick="event.stopPropagation()">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">' +
          '<span style="font-size:10.5px; font-weight:850; color:#1e3a8a;">🎯 量化通关指标 (指标名 / 指标数据)</span>' +
          '<button type="button" onclick="addCardGoalMetricItem(\'' + cardId + '-metrics\', event)" style="padding:1px 6px; font-size:9.5px; font-weight:800; background:#dbeafe; color:#1d4ed8; border:1px solid #93c5fd; border-radius:4px; cursor:pointer;">➕ 新增指标</button>' +
        '</div>' +
        '<div style="display:grid; grid-template-columns:1fr 1fr 20px; gap:4px; font-size:9.5px; font-weight:800; color:#64748b; padding:0 2px 2px;">' +
          '<span>指标名</span><span>指标数据</span><span></span>' +
        '</div>' +
        '<div id="' + cardId + '-metrics" style="display:flex; flex-direction:column; gap:4px;">' +
          metricsRowsHtml +
        '</div>' +
      '</div>' +
      '<div style="background:#eff6ff; border:1px dashed #93c5fd; padding:6px 8px; border-radius:8px; font-size:10.5px; color:#1e40af;">' +
        '📋 验收标准：' + acceptance +
      '</div>' +
      '<div style="display:flex; align-items:center; justify-content:space-between; gap:6px; background:#f0f9ff; border:1px solid #bae6fd; border-radius:7px; padding:4px 8px; font-size:10.5px;" onclick="event.stopPropagation()">' +
        '<span style="font-weight:800; color:#0369a1; white-space:nowrap;">📅 期望完成截止时间:</span>' +
        '<input type="datetime-local" id="goal-deadline-' + cardId + '" value="' + deadline + '" onclick="if(this.showPicker) this.showPicker();" onchange="showIslandToast(\'📅 已更新期望完成截止时间：\' + this.value.replace(\'T\', \' \'))" style="border:1px solid #7dd3fc; border-radius:5px; padding:1px 5px; font-size:10px; font-weight:800; color:#0c4a6e; background:#fff; cursor:pointer;">' +
      '</div>' +
      (function() {
        const dType = config.deliverableType || 'photo';
        const isText = dType === 'text';
        const mediaPrompt = dType === 'video' ? '🎥 点击录制或上传交付物视频' : '📷 点击拍照或上传交付物照片';
        return '<div style="background:#fffbeb; border:1px solid #fcd34d; border-radius:8px; padding:6px 8px; display:flex; flex-direction:column; gap:5px;" onclick="event.stopPropagation()">' +
          '<div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">' +
            '<span style="font-size:10.5px; font-weight:850; color:#92400e; white-space:nowrap;">📦 交付物提交:</span>' +
            '<select id="goal-deliverable-type-' + cardId + '" onchange="switchGoalDeliverableMode(\'' + cardId + '\', this.value)" style="flex:1; height:22px; font-size:10px; font-weight:800; color:#92400e; background:#fff; border:1px solid #f59e0b; border-radius:5px; padding:0 4px; cursor:pointer;">' +
              '<option value="photo"' + (dType === 'photo' ? ' selected' : '') + '>📷 拍照提交</option>' +
              '<option value="video"' + (dType === 'video' ? ' selected' : '') + '>🎥 视频提交</option>' +
              '<option value="text"' + (dType === 'text' ? ' selected' : '') + '>✍️ 文字记录提交</option>' +
            '</select>' +
          '</div>' +
          '<div id="goal-media-box-' + cardId + '" onclick="triggerGoalDeliverableUpload(\'' + cardId + '\', event)" style="display:' + (isText ? 'none' : 'block') + '; background:#fff; border:1.5px dashed #f59e0b; border-radius:6px; padding:6px 8px; font-size:10px; color:#b45309; font-weight:800; cursor:pointer; text-align:center;">' + mediaPrompt + '</div>' +
          '<textarea id="goal-deliverable-text-' + cardId + '" class="add-module-text-input" placeholder="✍️ 输入交付物文字记录..." style="display:' + (isText ? 'block' : 'none') + '; width:100%; box-sizing:border-box; height:38px; font-size:10px; padding:3px 6px; resize:vertical; background:#fff;">' + deliverable + '</textarea>' +
        '</div>';
      })() +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px;" onclick="event.stopPropagation()">' +
        '<span style="color:#64748b; font-size:10px; font-weight:700;">支持图文交付归档</span>' +
        '<button type="button" id="btn-deposit-' + cardId + '" class="card-graphic-pill" style="background:linear-gradient(135deg, #f59e0b, #d97706); color:#fff; border:1px solid #b45309; font-weight:850; padding:4px 10px; cursor:pointer; box-shadow:0 2px 6px rgba(217,119,6,0.25);" onclick="depositGoalToAchievement(\'' + cardId + '\', event)">🏆 记录到成就馆</button>' +
      '</div>' +
    '</div>';

  // === 2. ⚡ 攻坚实训卡原型 ===
  } else if (archetype === 'drill') {
    card.classList.add('tertiary-drill-card');
    card.style.width = '330px';
    const formula = config.formula || '核心攻坚要领与题解模型';
    const duration = String(config.duration || '20');
    const imageDesc = config.imageDesc || '进退位口算题卡 30 题，红笔圈出借位退位点';
    const durOptions = [
      { v: '5', l: '5 分钟 (微习惯快练)' },
      { v: '10', l: '10 分钟 (轻量专攻)' },
      { v: '15', l: '15 分钟 (日常快练)' },
      { v: '20', l: '20 分钟 (标准实训)' },
      { v: '25', l: '25 分钟 (深度番茄)' },
      { v: '30', l: '30 分钟 (强化攻坚)' },
      { v: '45', l: '45 分钟 (全套模拟)' }
    ].map(o => '<option value="' + o.v + '"' + (o.v === duration ? ' selected' : '') + '>' + o.l + '</option>').join('');

    headerHtml = '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + cardId + '\', event)" title="双击标题栏最小化/展开卡片">' +
      '<span class="work-node-badge" style="background:#fef3c7; color:#b45309; border:1px solid #fde68a;">⚡ 攻坚实训</span>' +
      '<span class="work-node-title">' + title + '</span>' +
      '<span style="font-size:10px; font-weight:800; color:#b45309;" id="status-text-' + cardId + '">限时打卡</span>' +
    '</div>';

    bodyHtml = '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
      '<p style="font-weight:750; color:#4a3a2a; font-size:11.5px; margin:0;">【攻坚要领】' + formula + '</p>' +
      '<div style="display:flex; align-items:center; justify-content:space-between; gap:6px; background:#fffbeb; border:1px dashed #fcd34d; padding:5px 8px; border-radius:8px; font-size:10.5px; color:#92400e;" onclick="event.stopPropagation()">' +
        '<span style="font-weight:800;">⏱️ 计划专注时长:</span>' +
        '<select id="drill-duration-select-' + cardId + '" onchange="updateDrillCardDuration(\'' + cardId + '\', this.value)" style="border:1px solid #f59e0b; border-radius:5px; padding:1px 6px; font-size:10.5px; font-weight:800; color:#92400e; background:#fff; cursor:pointer;">' +
          durOptions +
        '</select>' +
      '</div>' +
      '<div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:6px 8px; display:flex; flex-direction:column; gap:5px;" onclick="event.stopPropagation()">' +
        '<span style="font-size:10.5px; font-weight:850; color:#0369a1;">🎬 图片视频说明</span>' +
        '<div id="drill-img-box-' + cardId + '" class="node-img-preview-box" onclick="triggerDrillCardImage(\'' + cardId + '\', event)" style="margin:0; padding:7px 8px; background:#fff; border:1.5px dashed #38bdf8; border-radius:6px; cursor:pointer; text-align:center;">' +
          '<span style="font-size:10.5px; font-weight:800; color:#0284c7;">📷 / 🎥 点击上传图片或视频</span>' +
        '</div>' +
        '<input type="text" id="drill-img-desc-' + cardId + '" class="add-module-text-input" value="' + imageDesc.replace(/"/g, '&quot;') + '" placeholder="✍️ 输入图片或视频说明..." style="width:100%; box-sizing:border-box; height:22px; font-size:10px; padding:1px 6px; background:#fff; color:#0c4a6e; font-weight:700;">' +
      '</div>' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px;">' +
        '<span id="drill-footer-dur-' + cardId + '">预计专注：⏱️ ' + duration + ' 分钟</span>' +
        '<button class="card-graphic-pill pill-timer" onclick="handleNodeCheckin(this, \'' + cardId + '\', \'timer\')">🌟 立即打卡</button>' +
      '</div>' +
    '</div>';

  // === 3. 🌿 习惯践行卡原型 ===
  } else if (archetype === 'habit') {
    card.classList.add('tertiary-habit-card');
    card.style.width = '330px';
    const quote = config.quote || '知行合一古训与自律守则';
    const itemsList = (Array.isArray(config.checklistItems) && config.checklistItems.length > 0)
      ? config.checklistItems
      : (config.checklist ? String(config.checklist).split(/[\n；;]+/).map(s => s.trim()).filter(Boolean) : ['1. 独立审题不依赖草稿', '2. 错题立即红笔标退位点']);
    const checklistRowsHtml = itemsList.map(itemText =>
      '<div class="card-habit-checklist-item" style="display:grid; grid-template-columns:16px 1fr 20px; align-items:center; gap:4px;">' +
        '<input type="checkbox" checked style="margin:0; accent-color:#059669; cursor:pointer;">' +
        '<input type="text" value="' + String(itemText).replace(/"/g, '&quot;') + '" placeholder="输入践行防守清单项..." class="add-module-text-input habit-checklist-input" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#065f46; font-weight:700; background:#fff;">' +
        '<button type="button" onclick="removeCardHabitChecklistItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px; font-weight:900; cursor:pointer; line-height:1;">✕</button>' +
      '</div>'
    ).join('');

    headerHtml = '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + cardId + '\', event)" title="双击标题栏最小化/展开卡片">' +
      '<span class="work-node-badge" style="background:#ecfdf5; color:#047857; border:1px solid #a7f3d0;">🌿 习惯践行</span>' +
      '<span class="work-node-title">' + title + '</span>' +
      '<span style="font-size:10px; font-weight:800; color:#047857;" id="status-text-' + cardId + '">日常自律</span>' +
    '</div>';

    bodyHtml = '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
      '<p style="font-weight:750; color:#14532d; font-size:11.5px; margin:0;">【知行合一】' + quote + '</p>' +
      '<div style="background:#ecfdf5; border:1px dashed #6ee7b7; padding:6px 8px; border-radius:8px; font-size:10.5px; color:#065f46;" onclick="event.stopPropagation()">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">' +
          '<span style="font-size:10.5px; font-weight:850; color:#065f46;">🛡️ 践行防守清单 (可增删多项)</span>' +
          '<button type="button" onclick="addCardHabitChecklistItem(\'' + cardId + '-checklist\', event)" style="padding:1px 6px; font-size:9.5px; font-weight:800; background:#d1fae5; color:#047857; border:1px solid #6ee7b7; border-radius:4px; cursor:pointer;">➕ 新增清单项</button>' +
        '</div>' +
        '<div id="' + cardId + '-checklist" style="display:flex; flex-direction:column; gap:4px;">' +
          checklistRowsHtml +
        '</div>' +
      '</div>' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px;">' +
        '<span>预计践行：⏱️ 15 分钟</span>' +
        '<button class="card-graphic-pill pill-checkin" onclick="handleNodeCheckin(this, \'' + cardId + '\', \'habit\')">🌿 知行打卡</button>' +
      '</div>' +
    '</div>';

  // === 4. 📝 评估复盘卡原型 ===
  } else if (archetype === 'reflection') {
    card.classList.add('tertiary-reflection-card');
    card.style.width = '330px';
    const reviewDesc = config.cause || '复盘说明与反思总结';
    const impList = (Array.isArray(config.improvements) && config.improvements.length > 0)
      ? config.improvements
      : ['1. 审题时先用红笔圈出加减运算符号', '2. 遇到个位不够减立即标出十位退位点'];
    const impRowsHtml = impList.map(itemText =>
      '<div class="card-reflection-improvement-item" style="display:grid; grid-template-columns:16px 1fr 20px; align-items:center; gap:4px;">' +
        '<input type="checkbox" checked style="margin:0; accent-color:#7c3aed; cursor:pointer;">' +
        '<input type="text" value="' + String(itemText).replace(/"/g, '&quot;') + '" placeholder="输入提升项..." class="add-module-text-input reflection-improvement-input" style="width:100%; box-sizing:border-box; height:22px; font-size:10.5px; padding:1px 6px; color:#5b21b6; font-weight:700; background:#fff;">' +
        '<button type="button" onclick="removeCardReflectionImprovementItem(this, event)" style="width:20px; height:20px; border:1px solid #fca5a5; background:#fef2f2; color:#dc2626; border-radius:4px; font-size:10px; font-weight:900; cursor:pointer; line-height:1;">✕</button>' +
      '</div>'
    ).join('');

    headerHtml = '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + cardId + '\', event)" title="双击标题栏最小化/展开卡片">' +
      '<span class="work-node-badge" style="background:#f5f3ff; color:#7c3aed; border:1px solid #ddd6fe;">📝 评估复盘</span>' +
      '<span class="work-node-title">' + title + '</span>' +
      '<span style="font-size:10px; font-weight:800; color:#7c3aed;" id="status-text-' + cardId + '">📝 待复盘</span>' +
    '</div>';

    bodyHtml = '<div class="work-node-body" style="display:flex; flex-direction:column; gap:7px;">' +
      '<p style="font-weight:750; color:#581c87; font-size:11.5px; margin:0; line-height:1.45;">【复盘说明】' + reviewDesc + '</p>' +
      '<div style="background:#f5f3ff; border:1px dashed #c4b5fd; padding:6px 8px; border-radius:8px; font-size:10.5px; color:#5b21b6;" onclick="event.stopPropagation()">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">' +
          '<span style="font-size:10.5px; font-weight:850; color:#5b21b6;">🚀 提升清单 (可增删提升项)</span>' +
          '<button type="button" onclick="addCardReflectionImprovementItem(\'' + cardId + '-improvements\', event)" style="padding:1px 6px; font-size:9.5px; font-weight:800; background:#ede9fe; color:#6d28d9; border:1px solid #c4b5fd; border-radius:4px; cursor:pointer;">➕ 新增提升项</button>' +
        '</div>' +
        '<div id="' + cardId + '-improvements" style="display:flex; flex-direction:column; gap:4px;">' +
          impRowsHtml +
        '</div>' +
      '</div>' +
      '<div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-top:auto; padding-top:6px; border-top:1px solid #f1e4d0; font-size:10.5px;">' +
        '<button type="button" class="card-graphic-pill" style="background:#ede9fe; color:#6d28d9; border:1px solid #c4b5fd; font-weight:800; cursor:pointer;" onclick="deriveNodesFromReflectionCard(\'' + cardId + '\', event)">🌱 派生实训节点</button>' +
        '<button class="card-graphic-pill pill-reflection" onclick="handleNodeCheckin(this, \'' + cardId + '\', \'text\')">✍️ 笃行复盘</button>' +
      '</div>' +
    '</div>';

  // === 5. ⚙️ 自定义配置卡原型 (已去除自定义印章与达成激励项) ===
  } else if (archetype === 'custom') {
    card.classList.add('tertiary-custom-card');
    const isActionable = config.isActionable !== false;
    const checkinType = config.checkinType || 'image';
    const duration = config.duration || '20';

    headerHtml = '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + cardId + '\', event)" title="双击标题栏最小化/展开卡片">' +
      '<span class="work-node-badge" style="background:#f0fdf4; color:#15803d; border:1.5px solid #86efac;">⚙️ 自定义配置</span>' +
      '<span class="work-node-title">' + title + '</span>' +
      '<span style="font-size:10px; font-weight:800; color:' + (isActionable ? '#16a34a' : '#6b7280') + ';" id="status-text-' + cardId + '">' +
        (isActionable ? '待打卡' : '纯信息沉淀') +
      '</span>' +
    '</div>';

    let fieldsHtml = '';
    const fields = config.fields && config.fields.length > 0 ? config.fields : [
      { key: '研学要点', value: '自主探究与实践' }
    ];
    fields.forEach(f => {
      fieldsHtml += '<div style="background:#f0fdf4; border:1px dashed #86efac; padding:6px 10px; border-radius:8px; font-size:10.5px; color:#14532d;">' +
        '<strong>【' + f.key + '】</strong> ' + f.value +
      '</div>';
    });

    let checkinAreaHtml = '';
    if (isActionable) {
      const typeIcons = { timer: '⏱️ 计时实训 (' + duration + '分钟)', image: '📷 拍照存证', text: '✍️ 心得便签', audio: '🎙️ 原声录音', video: '🎥 动作视频', composite: '🌟 综合打卡' };
      const typeLabel = typeIcons[checkinType] || '📷 拍照存证';

      checkinAreaHtml = '<div style="margin-top:auto; padding-top:8px; border-top:1px solid #bbf7d0; display:flex; justify-content:space-between; align-items:center; font-size:10.5px; color:#166534;">' +
        '<span>交付类型：' + typeLabel + '</span>' +
        '<button class="card-graphic-pill pill-checkin" id="btn-checkin-' + cardId + '" style="background:#16a34a; color:#fff; border:1px solid #15803d; font-weight:800;" onclick="handleCustomCardCheckin(this, \'' + cardId + '\', \'打卡\', \'' + checkinType + '\')">🌟 立即打卡</button>' +
      '</div>';
    } else {
      checkinAreaHtml = '<div style="margin-top:auto; padding-top:8px; border-top:1px solid #bbf7d0; display:flex; justify-content:space-between; align-items:center; font-size:10.5px;">' +
        '<span style="color:#6b7280;">📄 知识沉淀与备忘（无需打卡）</span>' +
        '<button class="card-graphic-pill" style="background:#f3f4f6; color:#4b5563; border:1px solid #d1d5db;" onclick="showIslandToast(\'📄 此节点为纯知识与备忘信息沉淀，无需打卡！\')">📋 查阅备忘</button>' +
      '</div>';
    }

    bodyHtml = '<div class="work-node-body">' +
      '<div style="display:flex; flex-direction:column; gap:6px;">' + fieldsHtml + '</div>' +
      checkinAreaHtml +
    '</div>';

  // === 6. 📄 简单文本节点原型 (只显示标题与内容) ===
  } else if (archetype === 'text') {
    card.classList.add('tertiary-text-card');
    const content = config.content || '暂无详细文本内容，仅供查阅。';

    headerHtml = '<div class="work-node-card-header" ondblclick="toggleTertiaryCardMinimize(\'' + cardId + '\', event)" title="双击标题栏最小化/展开卡片">' +
      '<span class="work-node-badge" style="background:#f1f5f9; color:#475569; border:1.5px solid #cbd5e1;">📄 简单文本</span>' +
      '<span class="work-node-title">' + title + '</span>' +
      '<span style="font-size:10px; font-weight:800; color:#64748b;" id="status-text-' + cardId + '">📄 仅查阅</span>' +
    '</div>';

    bodyHtml = '<div class="work-node-body">' +
      '<div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:3px solid #64748b; padding:10px 12px; border-radius:8px; font-size:11px; line-height:1.6; color:#334155; white-space:pre-line; max-height:180px; overflow-y:auto;">' +
        content +
      '</div>' +
    '</div>';
  }

  card.innerHTML = headerHtml + bodyHtml +
    '<div class="work-card-connect-handle" data-card-id="' + cardId + '" onclick="startOrFinishConnecting(this.dataset.cardId, event)" title="点击与下一节点建立路线连线">🔗</div>';

  world.appendChild(card);
  bindCardDragSingle(card);
  tertiaryCardIndex++;
  renderTertiaryEdges();

  // 数据闭环: 新增需打卡执行的三级节点时，自动同步进入首页【今日待办】与【周看板】
  if (config.skipAutoSync !== true && (archetype === 'drill' || archetype === 'habit' || (archetype === 'custom' && config.isActionable !== false))) {
    syncNewNodeToHomeExecution({
      id: cardId,
      title: title,
      desc: config.formula || config.quote || '来自三级脑图规划节点的每日执行任务',
      pavilionId: typeof currentWsPavilion !== 'undefined' ? currentWsPavilion : 'study',
      duration: parseInt(config.duration, 10) || (archetype === 'habit' ? 15 : 20)
    });
  }

  return card;
}

function executeCustomCardCheckin(cardId, type) {
  const card = document.getElementById(cardId);
  if (!card) return;

  const btnCheckin = document.getElementById('btn-checkin-' + cardId);
  const sealEl = document.getElementById('card-seal-' + cardId);
  const statusEl = document.getElementById('status-text-' + cardId);
  const title = card.dataset.title || card.dataset.label || '自定义规划课题';

  if (type === 'image') {
    const previewText = document.getElementById('preview-text-' + cardId);
    if (previewText) previewText.innerHTML = '<span style="color:#059669; font-weight:800;">✓ 已采集手稿物证 (SHA-256存证)</span>';
  }

  if (sealEl) sealEl.style.display = 'flex';
  if (statusEl) {
    statusEl.innerHTML = '<span style="color:#059669; font-weight:900;">✓ 已打卡存证</span>';
  }
  if (btnCheckin) {
    btnCheckin.disabled = true;
    btnCheckin.innerHTML = '✓ 已圆满打卡';
    btnCheckin.classList.add('is-checked');
    btnCheckin.style.background = '#10b981';
    btnCheckin.style.color = '#fff';
    btnCheckin.style.borderColor = '#059669';
  }

  if (customCardTimerIntervals[cardId]) {
    clearInterval(customCardTimerIntervals[cardId]);
    delete customCardTimerIntervals[cardId];
  }

  triggerGlobalCheckinClosedLoop({
    taskKey: 'exec-custom-' + cardId,
    pavilionId: typeof currentWsPavilion !== 'undefined' ? currentWsPavilion : 'custom',
    title: title,
    focusMinutes: 20
  });

  showIslandToast('🎉 恭喜！已圆满完成自定义规划打卡【' + title + '】！已同步回写甘特与每日随记！');
}

// 自定义卡片专注倒计时
function toggleCustomCardTimer(cardId, minutes) {
  const btnTimer = document.getElementById('btn-timer-' + cardId);
  const displayEl = document.getElementById('timer-display-' + cardId);
  if (!btnTimer || !displayEl) return;

  if (customCardTimerIntervals[cardId]) {
    clearInterval(customCardTimerIntervals[cardId]);
    delete customCardTimerIntervals[cardId];
    btnTimer.innerHTML = '▶️ 继续专注';
    showIslandToast('⏸️ 专注计时已暂停');
    return;
  }

  let totalSec = (parseInt(displayEl.dataset.remaining) || minutes * 60) - 1;
  btnTimer.innerHTML = '⏸️ 暂停专注';
  showIslandToast('⏱️ 已启动【' + minutes + '分钟】专注倒计时，加油！');

  customCardTimerIntervals[cardId] = setInterval(() => {
    if (totalSec <= 0) {
      clearInterval(customCardTimerIntervals[cardId]);
      delete customCardTimerIntervals[cardId];
      displayEl.textContent = '00:00';
      btnTimer.innerHTML = '✓ 计时结束';
      btnTimer.disabled = true;
      executeCustomCardCheckin(cardId, 'timer');
      return;
    }
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    displayEl.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    displayEl.dataset.remaining = totalSec;
    totalSec--;
  }, 1000);
}

// 模拟上传物证
function uploadCustomCardEvidence(cardId) {
  const previewText = document.getElementById('preview-text-' + cardId);
  const box = document.getElementById('preview-box-' + cardId);
  if (box) {
    box.style.background = '#ecfdf5';
    box.style.borderColor = '#10b981';
  }
  if (previewText) {
    previewText.innerHTML = '<span style="color:#059669; font-weight:800;">📷 已选取手稿图片：math_draft_2026.png (4.2MB)</span>';
  }
  showIslandToast('📸 已选取物证照片，可点击下方打卡按钮提交存证！');
}

function recordCustomCardVideo(cardId) {
  const previewText = document.getElementById('preview-text-' + cardId);
  if (previewText) {
    previewText.innerHTML = '<span style="color:#e11d48; font-weight:800;">🎥 已录制切片视频：action_clip_45s.mp4</span>';
  }
  showIslandToast('🎬 已成功录制 45 秒动作切片！');
}

// 修改自定义规划卡片内容
function editCustomPlanningCard(cardId) {
  const card = document.getElementById(cardId);
  if (!card) return;
  const currentTitle = card.dataset.title || '';
  const currentDesc = card.dataset.desc || '';

  const newTitle = prompt('修改规划节点课题名称：', currentTitle);
  if (newTitle === null) return;
  const newDesc = prompt('修改规划打卡内容与要求：', currentDesc);
  if (newDesc === null) return;

  const cleanTitle = newTitle.trim() || currentTitle;
  const cleanDesc = newDesc.trim() || currentDesc;

  card.dataset.title = cleanTitle;
  card.dataset.desc = cleanDesc;

  const titleEl = document.getElementById('card-title-' + cardId);
  const descEl = document.getElementById('card-desc-' + cardId);
  if (titleEl) titleEl.textContent = cleanTitle;
  if (descEl) descEl.textContent = cleanDesc;

  showIslandToast('✓ 已成功更新规划打卡内容！');
}

// 移除自定义规划节点
function removeCustomPlanningCard(cardId) {
  const card = document.getElementById(cardId);
  if (!card) return;
  if (confirm('确定要移除此规划打卡节点吗？')) {
    if (customCardTimerIntervals[cardId]) {
      clearInterval(customCardTimerIntervals[cardId]);
      delete customCardTimerIntervals[cardId];
    }
    card.remove();
    renderTertiaryEdges();
    showIslandToast('🗑️ 已移除规划打卡节点');
  }
}


// ======================================================================
// 古籍问道池全生命周期交互控制器 (存入问道池 ➔ 古籍原典匹配 ➔ 转化修身甘特项目与待办)
// ======================================================================
window.INQUIRY_POOL_STATE = [
  {
    id: 'inq-1',
    cat: '🤝 同伴交往',
    question: '同桌经常嘲笑别人，怎样坚持原则又不伤害友谊？',
    classic: '《论语·卫灵公》“躬自厚而薄责于人”',
    classicFull: '《论语·卫灵公》——“躬自厚而薄责于人，则远怨矣。”',
    guide: '守住自我底线，以宽厚平和面对言语纷扰，专注自我成长。',
    converted: false
  },
  {
    id: 'inq-2',
    cat: '📖 学业毅力',
    question: '做数学题很难想放弃，怎样克服懒惰和急躁？',
    classic: '《传习录》“志不立，天下无可成之事”',
    classicFull: '《传习录》——“志不立，天下无可成之事。虽百工技艺，未有不本于志者。”',
    guide: '先立攻坚之志，以小步拆解化解畏难，在事上磨炼心力。',
    converted: false
  },
  {
    id: 'inq-3',
    cat: '🧘 情绪自控',
    question: '羽毛球输掉积分赛特别生气，怎样平和面对输赢？',
    classic: '《大学》“知止而后有定，定而后能静”',
    classicFull: '《大学》——“知止而后有定，定而后能静，静而后能安，安而后能虑，虑而后能得。”',
    guide: '胜负皆为球道镜像，深呼吸静心复盘技战术失误，转化为下次提升动力。',
    converted: false
  }
];

function renderInquiryPoolList() {
  const listEl = document.getElementById('inquiry-items-list');
  const badgeEl = document.getElementById('inquiry-count-badge');
  if (!listEl) return;
  const items = window.INQUIRY_POOL_STATE || [];
  const pendingCount = items.filter(x => !x.converted).length;
  if (badgeEl) badgeEl.innerText = pendingCount + ' 个待规划困惑';

  listEl.innerHTML = items.map(item => {
    const safeQ = item.question.replace(/'/g, "\\'");
    const safeC = item.classic.replace(/'/g, "\\'");
    return '<div style="background:' + (item.converted ? '#f8fafc' : '#fffdfa') + '; border:1.5px solid ' + (item.converted ? '#cbd5e1' : '#e2d9c8') + '; border-radius:10px; padding:12px;">' +
      '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">' +
        '<span style="font-size:11px; background:#fef3c7; color:#92400e; padding:1px 6px; border-radius:4px; font-weight:bold;">' + item.cat + '</span>' +
        (item.converted
          ? '<span style="font-size:11px; background:#dcfce7; color:#15803d; padding:2px 8px; border-radius:6px; font-weight:800;">✓ 已转化修身项目</span>'
          : '<button class="a-my-island-graph-tool" style="height:26px; font-size:11px; padding:0 8px;" onclick="convertInquiryToPlan(\'' + safeQ + '\', \'' + safeC + '\')">📥 选取并生成修身规划</button>') +
      '</div>' +
      '<div style="font-size:13px; font-weight:bold; color:#451a03; margin-top:6px;">' + item.question + '</div>' +
      '<div style="margin-top:6px; font-size:11.5px; color:#15803d; background:#f0fdf4; padding:6px 10px; border-radius:6px; border:1px dashed #86efac;">' +
        '📖 <strong>古籍指引</strong>：' + item.classicFull + '<br>' +
        '🌱 <strong>践行要领</strong>：' + item.guide +
      '</div>' +
    '</div>';
  }).join('');
}

function openInquiryModal() {
  renderInquiryPoolList();
  const modal = document.getElementById('inquiry-pool-modal');
  if (modal) modal.style.display = 'flex';
}

function closeInquiryModal() {
  const modal = document.getElementById('inquiry-pool-modal');
  if (modal) modal.style.display = 'none';
}

function submitNewInquiry() {
  const textEl = document.getElementById('inquiry-new-text');
  const catEl = document.getElementById('inquiry-new-cat');
  if (!textEl || !textEl.value.trim()) {
    showIslandToast('⚠️ 请输入真实的生活困惑内容');
    return;
  }
  const q = textEl.value.trim();
  const rawCat = catEl ? catEl.value : '情绪自控';
  const catMetaMap = {
    '情绪自控': {
      cat: '🧘 情绪自控',
      classic: '《大学》“知止而后有定，定而后能静”',
      classicFull: '《大学》——“知止而后有定，定而后能静，静而后能安，安而后能虑，虑而后能得。”',
      guide: '觉察情绪起伏，先深呼吸静心三秒，再用理性复盘代替冲动反应。'
    },
    '同伴交往': {
      cat: '🤝 同伴交往',
      classic: '《论语·卫灵公》“躬自厚而薄责于人”',
      classicFull: '《论语·卫灵公》——“躬自厚而薄责于人，则远怨矣。”',
      guide: '温和而坚定地表达边界，严于律己、宽以待人。'
    },
    '学业毅力': {
      cat: '📖 学业毅力',
      classic: '《传习录》“志不立，天下无可成之事”',
      classicFull: '《传习录》——“志不立，天下无可成之事。”',
      guide: '将大难题拆成 15 分钟微目标，在事上磨炼定力。'
    },
    '生活自律': {
      cat: '🛡️ 生活自律',
      classic: '《大学》“君子必慎其独也”',
      classicFull: '《大学》——“诚于中，形于外，故君子必慎其独也。”',
      guide: '无人监督时依然坚守屏幕与作息边界，做自己内心的主人。'
    }
  };
  const cm = catMetaMap[rawCat] || catMetaMap['情绪自控'];
  window.INQUIRY_POOL_STATE.unshift({
    id: 'inq-' + Date.now(),
    cat: cm.cat,
    question: q,
    classic: cm.classic,
    classicFull: cm.classicFull,
    guide: cm.guide,
    converted: false
  });
  renderInquiryPoolList();
  textEl.value = '';
  if (typeof appendDailyAutoLog === 'function') {
    appendDailyAutoLog('❓ 古籍问道登记：少年存入生活新困惑「' + q + '」，系统匹配先贤原典 ' + cm.classic);
  }
  showIslandToast('📜 成功将困惑存入问道池！已自动匹配先贤原典指引破局之道。');
}

function convertInquiryToPlan(question, classicQuote) {
  const q = question || '日常修身困惑';
  const quote = classicQuote || '《大学》知止定静';
  const matched = (window.INQUIRY_POOL_STATE || []).find(x => x.question === q);
  if (matched) matched.converted = true;

  const projId = 'proj_inq_' + Date.now();
  const todayG = typeof GANTT_TODAY !== 'undefined' ? GANTT_TODAY : '2026-10-27';
  const endD = typeof parseGanttDate === 'function' ? parseGanttDate(todayG) : new Date(2026, 9, 27);
  endD.setDate(endD.getDate() + 10);
  const endG = typeof formatGanttDate === 'function' ? formatGanttDate(endD) : '2026-11-06';

  const newProj = {
    id: projId,
    pavilion: 'cultivation',
    category: '修身立宪',
    title: '【问道笃行】' + q.slice(0, 14),
    desc: '古籍映照：' + quote + ' ｜ 针对「' + q + '」开展晨读自省与知行合一打卡。',
    startDate: todayG,
    endDate: endG,
    completedDays: [],
    isArchived: false
  };
  if (Array.isArray(window.GANTT_PROJECTS)) {
    window.GANTT_PROJECTS.unshift(newProj);
    if (window.PROJECT_CANVAS_STORE && typeof buildStarterCanvasForProject === 'function') {
      window.PROJECT_CANVAS_STORE[projId] = buildStarterCanvasForProject(newProj);
    }
    if (typeof renderHomeSemesterGoalsBanner === 'function') renderHomeSemesterGoalsBanner();
  }
  if (typeof syncNewNodeToHomeExecution === 'function') {
    syncNewNodeToHomeExecution({
      id: 'inq-task-' + Date.now(),
      title: '【问道日课】' + quote,
      desc: '化解困惑「' + q + '」：诵读原典三遍并在生活中践行慎独守正。',
      pavilionId: 'cultivation',
      duration: 15
    });
  }
  if (typeof appendDailyAutoLog === 'function') {
    appendDailyAutoLog('📥 问道池转化立项：选取困惑「' + q + '」生成修身阁甘特项目与今日待办日课（' + quote + '）');
  }

  closeInquiryModal();
  enterSecondaryWorkspace('cultivation', 'gantt');
  showIslandToast('📥 已将困惑「' + q.slice(0, 12) + '...」转化为【修身阁】甘特项目与今日待办日课！');
}

function deriveEbbinghausDemo() {
  showIslandToast('⚡ 已根据艾宾浩斯记忆遗忘曲线派生未来 7 天专项训练链！');
}

function incrementDojoReps(count) {
  showIslandToast((count > 0 ? '🔥 实训完成 +' : '↩️ 调整计数 ') + Math.abs(count) + ' 次，已累入万次突破大盘！');
}

function recordTreeTestDemo() {
  showIslandToast('🏆 成功盖上【百炼成金】品格印章，今日防守考验 +1！');
}

  // Expose all top-level functions to window for inline HTML handlers
  if (typeof applyIslandTransform === "function") (window as any).applyIslandTransform = applyIslandTransform;
  if (typeof updateIslandMinimap === "function") (window as any).updateIslandMinimap = updateIslandMinimap;
  if (typeof initIslandMinimapEvents === "function") (window as any).initIslandMinimapEvents = initIslandMinimapEvents;
  if (typeof toggleIslandMinimapDock === "function") (window as any).toggleIslandMinimapDock = toggleIslandMinimapDock;
  if (typeof toggleMinimap === "function") (window as any).toggleMinimap = toggleMinimap;
  if (typeof updateMinimapViewport === "function") (window as any).updateMinimapViewport = updateMinimapViewport;
  if (typeof toggleIslandGoalDock === "function") (window as any).toggleIslandGoalDock = toggleIslandGoalDock;
  if (typeof cycleHomeLayout === "function") (window as any).cycleHomeLayout = cycleHomeLayout;
  if (typeof fitHomeCanvasView === "function") (window as any).fitHomeCanvasView = fitHomeCanvasView;
  if (typeof focusHomeActiveNode === "function") (window as any).focusHomeActiveNode = focusHomeActiveNode;
  if (typeof centerHomeActiveNode === "function") (window as any).centerHomeActiveNode = centerHomeActiveNode;
  if (typeof toggleHomeViewScope === "function") (window as any).toggleHomeViewScope = toggleHomeViewScope;
  if (typeof openAddModuleModal === "function") (window as any).openAddModuleModal = openAddModuleModal;
  if (typeof closeAddModuleModal === "function") (window as any).closeAddModuleModal = closeAddModuleModal;
  if (typeof handleAddModuleBackdropClick === "function") (window as any).handleAddModuleBackdropClick = handleAddModuleBackdropClick;
  if (typeof pickModulePresetIcon === "function") (window as any).pickModulePresetIcon = pickModulePresetIcon;
  if (typeof handleCustomModuleIconInput === "function") (window as any).handleCustomModuleIconInput = handleCustomModuleIconInput;
  if (typeof confirmAddNewModule === "function") (window as any).confirmAddNewModule = confirmAddNewModule;
  if (typeof addHomeCustomNodePrompt === "function") (window as any).addHomeCustomNodePrompt = addHomeCustomNodePrompt;
  if (typeof handlePavilionClick === "function") (window as any).handlePavilionClick = handlePavilionClick;
  if (typeof initCanvasPanZoomAndDrag === "function") (window as any).initCanvasPanZoomAndDrag = initCanvasPanZoomAndDrag;
  if (typeof bindPavilionNodesClickGuards === "function") (window as any).bindPavilionNodesClickGuards = bindPavilionNodesClickGuards;
  if (typeof initNodeDragging === "function") (window as any).initNodeDragging = initNodeDragging;
  if (typeof updateTwinPathLine === "function") (window as any).updateTwinPathLine = updateTwinPathLine;
  if (typeof switchHomeGlobalView === "function") (window as any).switchHomeGlobalView = switchHomeGlobalView;
  if (typeof toggleIslandControlsGroup === "function") (window as any).toggleIslandControlsGroup = toggleIslandControlsGroup;
  if (typeof openOriginalSettingsPanel === "function") (window as any).openOriginalSettingsPanel = openOriginalSettingsPanel;
  if (typeof closeOriginalSettingsPanel === "function") (window as any).closeOriginalSettingsPanel = closeOriginalSettingsPanel;
  if (typeof toggleBrowseMode === "function") (window as any).toggleBrowseMode = toggleBrowseMode;
  if (typeof defaultIslandSettings === "function") (window as any).defaultIslandSettings = defaultIslandSettings;
  if (typeof loadIslandSettings === "function") (window as any).loadIslandSettings = loadIslandSettings;
  if (typeof getIslandSettings === "function") (window as any).getIslandSettings = getIslandSettings;
  if (typeof saveIslandSettings === "function") (window as any).saveIslandSettings = saveIslandSettings;
  if (typeof initIslandSettings === "function") (window as any).initIslandSettings = initIslandSettings;
  if (typeof applyAvatarSettings === "function") (window as any).applyAvatarSettings = applyAvatarSettings;
  if (typeof selectPlayerAvatar === "function") (window as any).selectPlayerAvatar = selectPlayerAvatar;
  if (typeof saveNickname === "function") (window as any).saveNickname = saveNickname;
  if (typeof resolveWallpaperFor === "function") (window as any).resolveWallpaperFor = resolveWallpaperFor;
  if (typeof applyIslandWallpaper === "function") (window as any).applyIslandWallpaper = applyIslandWallpaper;
  if (typeof applyPavilionWallpaper === "function") (window as any).applyPavilionWallpaper = applyPavilionWallpaper;
  if (typeof selectBgTarget === "function") (window as any).selectBgTarget = selectBgTarget;
  if (typeof applyWallpaper === "function") (window as any).applyWallpaper = applyWallpaper;
  if (typeof toggleGlobalBg === "function") (window as any).toggleGlobalBg = toggleGlobalBg;
  if (typeof syncBgEditor === "function") (window as any).syncBgEditor = syncBgEditor;
  if (typeof toggleEnvEffect === "function") (window as any).toggleEnvEffect = toggleEnvEffect;
  if (typeof syncEnvButtons === "function") (window as any).syncEnvButtons = syncEnvButtons;
  if (typeof saveImmersivePref === "function") (window as any).saveImmersivePref = saveImmersivePref;
  if (typeof syncImmersiveCheckboxes === "function") (window as any).syncImmersiveCheckboxes = syncImmersiveCheckboxes;
  if (typeof applyImmersiveClasses === "function") (window as any).applyImmersiveClasses = applyImmersiveClasses;
  if (typeof enterImmersiveModeNow === "function") (window as any).enterImmersiveModeNow = enterImmersiveModeNow;
  if (typeof launchQuickFocusTimer === "function") (window as any).launchQuickFocusTimer = launchQuickFocusTimer;
  if (typeof toggleImmersiveMode === "function") (window as any).toggleImmersiveMode = toggleImmersiveMode;
  if (typeof showIslandToast === "function") (window as any).showIslandToast = showIslandToast;
  if (typeof switchMainSection === "function") (window as any).switchMainSection = switchMainSection;
  if (typeof toggleTabletFrameMode === "function") (window as any).toggleTabletFrameMode = toggleTabletFrameMode;
  if (typeof openCardCheckinFromPlanning === "function") (window as any).openCardCheckinFromPlanning = openCardCheckinFromPlanning;
  if (typeof enterModuleExecutionView === "function") (window as any).enterModuleExecutionView = enterModuleExecutionView;
  if (typeof openExecutionWorkspace === "function") (window as any).openExecutionWorkspace = openExecutionWorkspace;
  if (typeof normalizeExecCheckinType === "function") (window as any).normalizeExecCheckinType = normalizeExecCheckinType;
  if (typeof syncFormStateToAttributes === "function") (window as any).syncFormStateToAttributes = syncFormStateToAttributes;
  if (typeof notifyIslandStateChanged === "function") (window as any).notifyIslandStateChanged = notifyIslandStateChanged;
  if (typeof toggleObsidianTabletFullscreen === "function") (window as any).toggleObsidianTabletFullscreen = toggleObsidianTabletFullscreen;
  if (typeof renderTailoredExecutionStage === "function") (window as any).renderTailoredExecutionStage = renderTailoredExecutionStage;
  if (typeof openExecCardPopupView === "function") (window as any).openExecCardPopupView = openExecCardPopupView;
  if (typeof closeExecutionWorkspace === "function") (window as any).closeExecutionWorkspace = closeExecutionWorkspace;
  if (typeof closeExecCardPopupView === "function") (window as any).closeExecCardPopupView = closeExecCardPopupView;
  if (typeof toggleExecPopupProjectNodesView === "function") (window as any).toggleExecPopupProjectNodesView = toggleExecPopupProjectNodesView;
  if (typeof renderExecProjectAssociatedNodes === "function") (window as any).renderExecProjectAssociatedNodes = renderExecProjectAssociatedNodes;
  if (typeof initExecProjectCanvasPan === "function") (window as any).initExecProjectCanvasPan = initExecProjectCanvasPan;
  if (typeof toggleExecPopupTimer === "function") (window as any).toggleExecPopupTimer = toggleExecPopupTimer;
  if (typeof resetExecPopupTimer === "function") (window as any).resetExecPopupTimer = resetExecPopupTimer;
  if (typeof computeCurrentFulfillmentRate === "function") (window as any).computeCurrentFulfillmentRate = computeCurrentFulfillmentRate;
  if (typeof recalcAndRenderGlobalHUD === "function") (window as any).recalcAndRenderGlobalHUD = recalcAndRenderGlobalHUD;
  if (typeof appendDailyAutoLog === "function") (window as any).appendDailyAutoLog = appendDailyAutoLog;
  if (typeof renderHomeSemesterGoalsBanner === "function") (window as any).renderHomeSemesterGoalsBanner = renderHomeSemesterGoalsBanner;
  if (typeof triggerGlobalCheckinClosedLoop === "function") (window as any).triggerGlobalCheckinClosedLoop = triggerGlobalCheckinClosedLoop;
  if (typeof handleExecPopupMainCheckin === "function") (window as any).handleExecPopupMainCheckin = handleExecPopupMainCheckin;
  if (typeof handleTertiaryModuleFileUpload === "function") (window as any).handleTertiaryModuleFileUpload = handleTertiaryModuleFileUpload;
  if (typeof removeTertiaryModuleUploadedFile === "function") (window as any).removeTertiaryModuleUploadedFile = removeTertiaryModuleUploadedFile;
  if (typeof handleTaskCardClick === "function") (window as any).handleTaskCardClick = handleTaskCardClick;
  if (typeof enterSecondaryWorkspace === "function") (window as any).enterSecondaryWorkspace = enterSecondaryWorkspace;
  if (typeof switchSecondarySubView === "function") (window as any).switchSecondarySubView = switchSecondarySubView;
  if (typeof exitSecondaryWorkspace === "function") (window as any).exitSecondaryWorkspace = exitSecondaryWorkspace;
  if (typeof renderWorkspaceContent === "function") (window as any).renderWorkspaceContent = renderWorkspaceContent;
  if (typeof switchGlobalViewMode === "function") (window as any).switchGlobalViewMode = switchGlobalViewMode;
  if (typeof updatePavilionBadges === "function") (window as any).updatePavilionBadges = updatePavilionBadges;
  if (typeof renderBountyModalAndBillboard === "function") (window as any).renderBountyModalAndBillboard = renderBountyModalAndBillboard;
  if (typeof openBountyModal === "function") (window as any).openBountyModal = openBountyModal;
  if (typeof closeBountyModal === "function") (window as any).closeBountyModal = closeBountyModal;
  if (typeof handleBountyBackdropClick === "function") (window as any).handleBountyBackdropClick = handleBountyBackdropClick;
  if (typeof toggleBountyPublishForm === "function") (window as any).toggleBountyPublishForm = toggleBountyPublishForm;
  if (typeof submitNewParentBounty === "function") (window as any).submitNewParentBounty = submitNewParentBounty;
  if (typeof acceptParentBounty === "function") (window as any).acceptParentBounty = acceptParentBounty;
  if (typeof uploadBountyEvidence === "function") (window as any).uploadBountyEvidence = uploadBountyEvidence;
  if (typeof completeBountyDemo === "function") (window as any).completeBountyDemo = completeBountyDemo;
  if (typeof initPomodoroDisplay === "function") (window as any).initPomodoroDisplay = initPomodoroDisplay;
  if (typeof togglePomodoroTimer === "function") (window as any).togglePomodoroTimer = togglePomodoroTimer;
  if (typeof resetPomodoroTimer === "function") (window as any).resetPomodoroTimer = resetPomodoroTimer;
  if (typeof updatePomoText === "function") (window as any).updatePomoText = updatePomoText;
  if (typeof toggleWsMinimap === "function") (window as any).toggleWsMinimap = toggleWsMinimap;
  if (typeof filterGallery === "function") (window as any).filterGallery = filterGallery;
  if (typeof getCheckinEl === "function") (window as any).getCheckinEl = getCheckinEl;
  if (typeof addCheckinPageGoalMetric === "function") (window as any).addCheckinPageGoalMetric = addCheckinPageGoalMetric;
  if (typeof switchCheckinPageGoalDeliverable === "function") (window as any).switchCheckinPageGoalDeliverable = switchCheckinPageGoalDeliverable;
  if (typeof handleCheckinPageGoalFile === "function") (window as any).handleCheckinPageGoalFile = handleCheckinPageGoalFile;
  if (typeof handleCheckinPageGoalDeposit === "function") (window as any).handleCheckinPageGoalDeposit = handleCheckinPageGoalDeposit;
  if (typeof handleCheckinPageDrillMedia === "function") (window as any).handleCheckinPageDrillMedia = handleCheckinPageDrillMedia;
  if (typeof changeCheckinPageDrillDuration === "function") (window as any).changeCheckinPageDrillDuration = changeCheckinPageDrillDuration;
  if (typeof toggleCheckinPageDrillTimer === "function") (window as any).toggleCheckinPageDrillTimer = toggleCheckinPageDrillTimer;
  if (typeof resetCheckinPageDrillTimer === "function") (window as any).resetCheckinPageDrillTimer = resetCheckinPageDrillTimer;
  if (typeof updateCheckinPageHabitProgress === "function") (window as any).updateCheckinPageHabitProgress = updateCheckinPageHabitProgress;
  if (typeof addCheckinPageHabitItem === "function") (window as any).addCheckinPageHabitItem = addCheckinPageHabitItem;
  if (typeof removeCheckinPageHabitItem === "function") (window as any).removeCheckinPageHabitItem = removeCheckinPageHabitItem;
  if (typeof addCheckinPageReflectionItem === "function") (window as any).addCheckinPageReflectionItem = addCheckinPageReflectionItem;
  if (typeof removeCheckinPageReflectionItem === "function") (window as any).removeCheckinPageReflectionItem = removeCheckinPageReflectionItem;
  if (typeof addCheckinPageCustomField === "function") (window as any).addCheckinPageCustomField = addCheckinPageCustomField;
  if (typeof completeCheckinPageCard === "function") (window as any).completeCheckinPageCard = completeCheckinPageCard;
  if (typeof alignGridLayout === "function") (window as any).alignGridLayout = alignGridLayout;
  if (typeof addCustomNodePrompt === "function") (window as any).addCustomNodePrompt = addCustomNodePrompt;
  if (typeof fitCanvasView === "function") (window as any).fitCanvasView = fitCanvasView;
  if (typeof focusActiveNode === "function") (window as any).focusActiveNode = focusActiveNode;
  if (typeof centerActiveNode === "function") (window as any).centerActiveNode = centerActiveNode;
  if (typeof openZoomScopeModal === "function") (window as any).openZoomScopeModal = openZoomScopeModal;
  if (typeof createModulePrompt === "function") (window as any).createModulePrompt = createModulePrompt;
  if (typeof createImageEvidencePrompt === "function") (window as any).createImageEvidencePrompt = createImageEvidencePrompt;
  if (typeof createTableDataPrompt === "function") (window as any).createTableDataPrompt = createTableDataPrompt;
  if (typeof createTextNotePrompt === "function") (window as any).createTextNotePrompt = createTextNotePrompt;
  if (typeof toggleChildrenFollowToolbar === "function") (window as any).toggleChildrenFollowToolbar = toggleChildrenFollowToolbar;
  if (typeof toggleChildrenFollowSetting === "function") (window as any).toggleChildrenFollowSetting = toggleChildrenFollowSetting;
  if (typeof openCameraSettings === "function") (window as any).openCameraSettings = openCameraSettings;
  if (typeof toggleArchiveView === "function") (window as any).toggleArchiveView = toggleArchiveView;
  if (typeof toggleTertiaryRouteSetup === "function") (window as any).toggleTertiaryRouteSetup = toggleTertiaryRouteSetup;
  if (typeof pushTertiaryHistory === "function") (window as any).pushTertiaryHistory = pushTertiaryHistory;
  if (typeof updateTertiaryNodeCountBadge === "function") (window as any).updateTertiaryNodeCountBadge = updateTertiaryNodeCountBadge;
  if (typeof saveCurrentProjectCanvasSnapshot === "function") (window as any).saveCurrentProjectCanvasSnapshot = saveCurrentProjectCanvasSnapshot;
  if (typeof buildStarterCanvasForProject === "function") (window as any).buildStarterCanvasForProject = buildStarterCanvasForProject;
  if (typeof enterTertiaryWorkspace === "function") (window as any).enterTertiaryWorkspace = enterTertiaryWorkspace;
  if (typeof exitTertiaryWorkspace === "function") (window as any).exitTertiaryWorkspace = exitTertiaryWorkspace;
  if (typeof updateTertiaryMinimap === "function") (window as any).updateTertiaryMinimap = updateTertiaryMinimap;
  if (typeof initTertiaryMinimapEvents === "function") (window as any).initTertiaryMinimapEvents = initTertiaryMinimapEvents;
  if (typeof toggleTertiaryMinimapDock === "function") (window as any).toggleTertiaryMinimapDock = toggleTertiaryMinimapDock;
  if (typeof toggleTertiaryMinimap === "function") (window as any).toggleTertiaryMinimap = toggleTertiaryMinimap;
  if (typeof cycleGridMode === "function") (window as any).cycleGridMode = cycleGridMode;
  if (typeof handleOpenObsidianCanvas === "function") (window as any).handleOpenObsidianCanvas = handleOpenObsidianCanvas;
  if (typeof openCurrentProjectInObsidianCanvas === "function") (window as any).openCurrentProjectInObsidianCanvas = openCurrentProjectInObsidianCanvas;
  if (typeof applyTertiaryTransform === "function") (window as any).applyTertiaryTransform = applyTertiaryTransform;
  if (typeof zoomTertiaryCanvas === "function") (window as any).zoomTertiaryCanvas = zoomTertiaryCanvas;
  if (typeof resetTertiaryCanvasZoom === "function") (window as any).resetTertiaryCanvasZoom = resetTertiaryCanvasZoom;
  if (typeof animateTertiaryEdgesDuringTransition === "function") (window as any).animateTertiaryEdgesDuringTransition = animateTertiaryEdgesDuringTransition;
  if (typeof step === "function") (window as any).step = step;
  if (typeof updateTertiaryEdgesFast === "function") (window as any).updateTertiaryEdgesFast = updateTertiaryEdgesFast;
  if (typeof scheduleTertiaryEdgeRefresh === "function") (window as any).scheduleTertiaryEdgeRefresh = scheduleTertiaryEdgeRefresh;
  if (typeof renderTertiaryConnections === "function") (window as any).renderTertiaryConnections = renderTertiaryConnections;
  if (typeof observeTertiaryCards === "function") (window as any).observeTertiaryCards = observeTertiaryCards;
  if (typeof initTertiaryWorkspace === "function") (window as any).initTertiaryWorkspace = initTertiaryWorkspace;
  if (typeof initTertiaryCanvasPanZoom === "function") (window as any).initTertiaryCanvasPanZoom = initTertiaryCanvasPanZoom;
  if (typeof toggleTertiaryCardMinimize === "function") (window as any).toggleTertiaryCardMinimize = toggleTertiaryCardMinimize;
  if (typeof toggleAllTertiaryCardsMinimize === "function") (window as any).toggleAllTertiaryCardsMinimize = toggleAllTertiaryCardsMinimize;
  if (typeof bindTertiaryCardsDrag === "function") (window as any).bindTertiaryCardsDrag = bindTertiaryCardsDrag;
  if (typeof getDownstreamChildCardIds === "function") (window as any).getDownstreamChildCardIds = getDownstreamChildCardIds;
  if (typeof bindCardDragSingle === "function") (window as any).bindCardDragSingle = bindCardDragSingle;
  if (typeof renderTertiaryEdges === "function") (window as any).renderTertiaryEdges = renderTertiaryEdges;
  if (typeof openEdgePopover === "function") (window as any).openEdgePopover = openEdgePopover;
  if (typeof reverseEdgeDirection === "function") (window as any).reverseEdgeDirection = reverseEdgeDirection;
  if (typeof handleEdgeHierarchy === "function") (window as any).handleEdgeHierarchy = handleEdgeHierarchy;
  if (typeof setEdgeArrowMode === "function") (window as any).setEdgeArrowMode = setEdgeArrowMode;
  if (typeof setEdgeLineStyle === "function") (window as any).setEdgeLineStyle = setEdgeLineStyle;
  if (typeof handleEdgeWidthInput === "function") (window as any).handleEdgeWidthInput = handleEdgeWidthInput;
  if (typeof handleEdgeColorSelect === "function") (window as any).handleEdgeColorSelect = handleEdgeColorSelect;
  if (typeof handleEdgeLabelChange === "function") (window as any).handleEdgeLabelChange = handleEdgeLabelChange;
  if (typeof handleEdgeTypeSelect === "function") (window as any).handleEdgeTypeSelect = handleEdgeTypeSelect;
  if (typeof handleDeleteActiveEdge === "function") (window as any).handleDeleteActiveEdge = handleDeleteActiveEdge;
  if (typeof handleTertiaryStageClick === "function") (window as any).handleTertiaryStageClick = handleTertiaryStageClick;
  if (typeof startOrFinishConnecting === "function") (window as any).startOrFinishConnecting = startOrFinishConnecting;
  if (typeof toggleTertiaryDropdown === "function") (window as any).toggleTertiaryDropdown = toggleTertiaryDropdown;
  if (typeof playNodeVideo === "function") (window as any).playNodeVideo = playNodeVideo;
  if (typeof viewNodeImage === "function") (window as any).viewNodeImage = viewNodeImage;
  if (typeof openTertiaryCreateModuleModal === "function") (window as any).openTertiaryCreateModuleModal = openTertiaryCreateModuleModal;
  if (typeof closeTertiaryCreateModuleModal === "function") (window as any).closeTertiaryCreateModuleModal = closeTertiaryCreateModuleModal;
  if (typeof handleTertiaryCreateModuleBackdropClick === "function") (window as any).handleTertiaryCreateModuleBackdropClick = handleTertiaryCreateModuleBackdropClick;
  if (typeof pickTertiaryModulePresetIcon === "function") (window as any).pickTertiaryModulePresetIcon = pickTertiaryModulePresetIcon;
  if (typeof handleTertiaryModuleIconInput === "function") (window as any).handleTertiaryModuleIconInput = handleTertiaryModuleIconInput;
  if (typeof handleConfirmTertiaryCreateModule === "function") (window as any).handleConfirmTertiaryCreateModule = handleConfirmTertiaryCreateModule;
  if (typeof openTertiaryAddNodeModal === "function") (window as any).openTertiaryAddNodeModal = openTertiaryAddNodeModal;
  if (typeof closeTertiaryAddNodeModal === "function") (window as any).closeTertiaryAddNodeModal = closeTertiaryAddNodeModal;
  if (typeof handleTertiaryAddNodeBackdropClick === "function") (window as any).handleTertiaryAddNodeBackdropClick = handleTertiaryAddNodeBackdropClick;
  if (typeof filterNodePickerByPavilion === "function") (window as any).filterNodePickerByPavilion = filterNodePickerByPavilion;
  if (typeof toggleNodePickerSelection === "function") (window as any).toggleNodePickerSelection = toggleNodePickerSelection;
  if (typeof updateNodePickerBatchCount === "function") (window as any).updateNodePickerBatchCount = updateNodePickerBatchCount;
  if (typeof selectNodePickerCategory === "function") (window as any).selectNodePickerCategory = selectNodePickerCategory;
  if (typeof clearNodePickerSelection === "function") (window as any).clearNodePickerSelection = clearNodePickerSelection;
  if (typeof addPickerCustomField === "function") (window as any).addPickerCustomField = addPickerCustomField;
  if (typeof getCardConfigFromPicker === "function") (window as any).getCardConfigFromPicker = getCardConfigFromPicker;
  if (typeof quickAddSingleNode === "function") (window as any).quickAddSingleNode = quickAddSingleNode;
  if (typeof handleConfirmBatchAddNodes === "function") (window as any).handleConfirmBatchAddNodes = handleConfirmBatchAddNodes;
  if (typeof createTertiaryNodeCard === "function") (window as any).createTertiaryNodeCard = createTertiaryNodeCard;
  if (typeof toggleTertiaryCustomCardField === "function") (window as any).toggleTertiaryCustomCardField = toggleTertiaryCustomCardField;
  if (typeof addComboCardField === "function") (window as any).addComboCardField = addComboCardField;
  if (typeof handleSubFieldCheckin === "function") (window as any).handleSubFieldCheckin = handleSubFieldCheckin;
  if (typeof handleNodeCheckin === "function") (window as any).handleNodeCheckin = handleNodeCheckin;
  if (typeof promptRenameCardTitle === "function") (window as any).promptRenameCardTitle = promptRenameCardTitle;
  if (typeof handleRenameCardTitle === "function") (window as any).handleRenameCardTitle = handleRenameCardTitle;
  if (typeof handleRenameNodeTask === "function") (window as any).handleRenameNodeTask = handleRenameNodeTask;
  if (typeof promptRenameCheckinItem === "function") (window as any).promptRenameCheckinItem = promptRenameCheckinItem;
  if (typeof handleRenameCheckinItem === "function") (window as any).handleRenameCheckinItem = handleRenameCheckinItem;
  if (typeof addCustomFieldToCard === "function") (window as any).addCustomFieldToCard = addCustomFieldToCard;
  if (typeof createCustomModule === "function") (window as any).createCustomModule = createCustomModule;
  if (typeof createBackgroundGroupPrompt === "function") (window as any).createBackgroundGroupPrompt = createBackgroundGroupPrompt;
  if (typeof createSequencePrompt === "function") (window as any).createSequencePrompt = createSequencePrompt;
  if (typeof toggleFocusMode === "function") (window as any).toggleFocusMode = toggleFocusMode;
  if (typeof toggleLockNodes === "function") (window as any).toggleLockNodes = toggleLockNodes;
  if (typeof toggleFixedNodes === "function") (window as any).toggleFixedNodes = toggleFixedNodes;
  if (typeof toggleStatusFilterMenu === "function") (window as any).toggleStatusFilterMenu = toggleStatusFilterMenu;
  if (typeof toggleOperationTools === "function") (window as any).toggleOperationTools = toggleOperationTools;
  if (typeof toggleChildDetails === "function") (window as any).toggleChildDetails = toggleChildDetails;
  if (typeof toggleEdgeLabels === "function") (window as any).toggleEdgeLabels = toggleEdgeLabels;
  if (typeof handleTertiaryUndo === "function") (window as any).handleTertiaryUndo = handleTertiaryUndo;
  if (typeof handleTertiaryRedo === "function") (window as any).handleTertiaryRedo = handleTertiaryRedo;
  if (typeof handleTertiaryDeleteNode === "function") (window as any).handleTertiaryDeleteNode = handleTertiaryDeleteNode;
  if (typeof openNodeSearchModal === "function") (window as any).openNodeSearchModal = openNodeSearchModal;
  if (typeof initWeatherEngine === "function") (window as any).initWeatherEngine = initWeatherEngine;
  if (typeof switchExecSubView === "function") (window as any).switchExecSubView = switchExecSubView;
  if (typeof updateDayCarousel === "function") (window as any).updateDayCarousel = updateDayCarousel;
  if (typeof nextDayCard === "function") (window as any).nextDayCard = nextDayCard;
  if (typeof prevDayCard === "function") (window as any).prevDayCard = prevDayCard;
  if (typeof goToDayCard === "function") (window as any).goToDayCard = goToDayCard;
  if (typeof setupCarouselGestures === "function") (window as any).setupCarouselGestures = setupCarouselGestures;
  if (typeof completeTask === "function") (window as any).completeTask = completeTask;
  if (typeof startTaskFocus === "function") (window as any).startTaskFocus = startTaskFocus;
  if (typeof uploadTaskEvidence === "function") (window as any).uploadTaskEvidence = uploadTaskEvidence;
  if (typeof openClassicLookup === "function") (window as any).openClassicLookup = openClassicLookup;
  if (typeof askParentHelp === "function") (window as any).askParentHelp = askParentHelp;
  if (typeof toggleTaskCheck === "function") (window as any).toggleTaskCheck = toggleTaskCheck;
  if (typeof recordDebateNotes === "function") (window as any).recordDebateNotes = recordDebateNotes;
  if (typeof openQuickNoteModal === "function") (window as any).openQuickNoteModal = openQuickNoteModal;
  if (typeof nourishBaselineTree === "function") (window as any).nourishBaselineTree = nourishBaselineTree;
  if (typeof addCustomDynamicFieldRow === "function") (window as any).addCustomDynamicFieldRow = addCustomDynamicFieldRow;
  if (typeof calPad2 === "function") (window as any).calPad2 = calPad2;
  if (typeof calDateKey === "function") (window as any).calDateKey = calDateKey;
  if (typeof calMondayOf === "function") (window as any).calMondayOf = calMondayOf;
  if (typeof calIsoWeekNumber === "function") (window as any).calIsoWeekNumber = calIsoWeekNumber;
  if (typeof calLunarText === "function") (window as any).calLunarText = calLunarText;
  if (typeof syncWeekBoardToRealDate === "function") (window as any).syncWeekBoardToRealDate = syncWeekBoardToRealDate;
  if (typeof getTodayWeekCol === "function") (window as any).getTodayWeekCol = getTodayWeekCol;
  if (typeof updateWeekRangeLabel === "function") (window as any).updateWeekRangeLabel = updateWeekRangeLabel;
  if (typeof getWeekColsForOffset === "function") (window as any).getWeekColsForOffset = getWeekColsForOffset;
  if (typeof getRecordsForDate === "function") (window as any).getRecordsForDate = getRecordsForDate;
  if (typeof changeWeek === "function") (window as any).changeWeek = changeWeek;
  if (typeof resetToCurrentWeek === "function") (window as any).resetToCurrentWeek = resetToCurrentWeek;
  if (typeof filterWeekTasks === "function") (window as any).filterWeekTasks = filterWeekTasks;
  if (typeof renderWeekBoard === "function") (window as any).renderWeekBoard = renderWeekBoard;
  if (typeof showWeekTaskDetail === "function") (window as any).showWeekTaskDetail = showWeekTaskDetail;
  if (typeof closeTaskDetailModal === "function") (window as any).closeTaskDetailModal = closeTaskDetailModal;
  if (typeof getCalendarBaseMonth === "function") (window as any).getCalendarBaseMonth = getCalendarBaseMonth;
  if (typeof updateMonthTitleLabel === "function") (window as any).updateMonthTitleLabel = updateMonthTitleLabel;
  if (typeof changeMonth === "function") (window as any).changeMonth = changeMonth;
  if (typeof resetToCurrentMonth === "function") (window as any).resetToCurrentMonth = resetToCurrentMonth;
  if (typeof renderMonthCalendar === "function") (window as any).renderMonthCalendar = renderMonthCalendar;
  if (typeof inspectMonthDate === "function") (window as any).inspectMonthDate = inspectMonthDate;
  if (typeof closeDayInspector === "function") (window as any).closeDayInspector = closeDayInspector;
  if (typeof closeDayInspectorOnBackdrop === "function") (window as any).closeDayInspectorOnBackdrop = closeDayInspectorOnBackdrop;
  if (typeof openEvidenceGalleryForDay === "function") (window as any).openEvidenceGalleryForDay = openEvidenceGalleryForDay;
  if (typeof openStudyMakeUpModal === "function") (window as any).openStudyMakeUpModal = openStudyMakeUpModal;
  if (typeof openMoralTestModal === "function") (window as any).openMoralTestModal = openMoralTestModal;
  if (typeof openFamilyPactModal === "function") (window as any).openFamilyPactModal = openFamilyPactModal;
  if (typeof submitPactViolationAdjudication === "function") (window as any).submitPactViolationAdjudication = submitPactViolationAdjudication;
  if (typeof closeFamilyPactModal === "function") (window as any).closeFamilyPactModal = closeFamilyPactModal;
  if (typeof printFamilyPact === "function") (window as any).printFamilyPact = printFamilyPact;
  if (typeof openDaxuePhilosophyModal === "function") (window as any).openDaxuePhilosophyModal = openDaxuePhilosophyModal;
  if (typeof closeDaxuePhilosophyModal === "function") (window as any).closeDaxuePhilosophyModal = closeDaxuePhilosophyModal;
  if (typeof showDaxueEightPhilosophy === "function") (window as any).showDaxueEightPhilosophy = showDaxueEightPhilosophy;
  if (typeof locateDaxueItemFromModal === "function") (window as any).locateDaxueItemFromModal = locateDaxueItemFromModal;
  if (typeof switchTreasuryRecordType === "function") (window as any).switchTreasuryRecordType = switchTreasuryRecordType;
  if (typeof setQuickRecordAmount === "function") (window as any).setQuickRecordAmount = setQuickRecordAmount;
  if (typeof recordLiveTreasuryTransaction === "function") (window as any).recordLiveTreasuryTransaction = recordLiveTreasuryTransaction;
  if (typeof renderTreasuryLedgerRows === "function") (window as any).renderTreasuryLedgerRows = renderTreasuryLedgerRows;
  if (typeof updateTreasuryLiveDOM === "function") (window as any).updateTreasuryLiveDOM = updateTreasuryLiveDOM;
  if (typeof filterTreasuryLedgerRows === "function") (window as any).filterTreasuryLedgerRows = filterTreasuryLedgerRows;
  if (typeof scrollToTreasurySection === "function") (window as any).scrollToTreasurySection = scrollToTreasurySection;
  if (typeof executeThreeJarSplit === "function") (window as any).executeThreeJarSplit = executeThreeJarSplit;
  if (typeof recordLiveTreasuryExpense === "function") (window as any).recordLiveTreasuryExpense = recordLiveTreasuryExpense;
  if (typeof renderTreasurySpecializedWorkspace === "function") (window as any).renderTreasurySpecializedWorkspace = renderTreasurySpecializedWorkspace;
  if (typeof renderDaxueEightItemsHtml === "function") (window as any).renderDaxueEightItemsHtml = renderDaxueEightItemsHtml;
  if (typeof openDaxueItemDetailModal === "function") (window as any).openDaxueItemDetailModal = openDaxueItemDetailModal;
  if (typeof closeDaxueItemDetailModal === "function") (window as any).closeDaxueItemDetailModal = closeDaxueItemDetailModal;
  if (typeof renderDaxueItemModalBody === "function") (window as any).renderDaxueItemModalBody = renderDaxueItemModalBody;
  if (typeof switchDaxueTab === "function") (window as any).switchDaxueTab = switchDaxueTab;
  if (typeof renderTreeSpecializedWorkspace === "function") (window as any).renderTreeSpecializedWorkspace = renderTreeSpecializedWorkspace;
  if (typeof renderAchieveSpecializedWorkspace === "function") (window as any).renderAchieveSpecializedWorkspace = renderAchieveSpecializedWorkspace;
  if (typeof switchAchieveTab === "function") (window as any).switchAchieveTab = switchAchieveTab;
  if (typeof renderCultivationGroupsHtml === "function") (window as any).renderCultivationGroupsHtml = renderCultivationGroupsHtml;
  if (typeof renderAccidentalGroupsHtml === "function") (window as any).renderAccidentalGroupsHtml = renderAccidentalGroupsHtml;
  if (typeof jumpFromAchieveToProjectWorkspace === "function") (window as any).jumpFromAchieveToProjectWorkspace = jumpFromAchieveToProjectWorkspace;
  if (typeof syncAchievementToDailyNote === "function") (window as any).syncAchievementToDailyNote = syncAchievementToDailyNote;
  if (typeof openAchievementDetailModal === "function") (window as any).openAchievementDetailModal = openAchievementDetailModal;
  if (typeof closeAchievementDetailModal === "function") (window as any).closeAchievementDetailModal = closeAchievementDetailModal;
  if (typeof renderAchievementModalBody === "function") (window as any).renderAchievementModalBody = renderAchievementModalBody;
  if (typeof viewCultivationDetail === "function") (window as any).viewCultivationDetail = viewCultivationDetail;
  if (typeof viewAccidentalDetail === "function") (window as any).viewAccidentalDetail = viewAccidentalDetail;
  if (typeof openRegisterAccidentalAchievementModal === "function") (window as any).openRegisterAccidentalAchievementModal = openRegisterAccidentalAchievementModal;
  if (typeof closeRegisterAccidentalAchievementModal === "function") (window as any).closeRegisterAccidentalAchievementModal = closeRegisterAccidentalAchievementModal;
  if (typeof fillAccidentalSample === "function") (window as any).fillAccidentalSample = fillAccidentalSample;
  if (typeof handleAccidentalImageUpload === "function") (window as any).handleAccidentalImageUpload = handleAccidentalImageUpload;
  if (typeof submitRegisterAccidentalAchievement === "function") (window as any).submitRegisterAccidentalAchievement = submitRegisterAccidentalAchievement;
  if (typeof updateAchieveWorkspaceLiveDOM === "function") (window as any).updateAchieveWorkspaceLiveDOM = updateAchieveWorkspaceLiveDOM;
  if (typeof renderStudySpecializedWorkspace === "function") (window as any).renderStudySpecializedWorkspace = renderStudySpecializedWorkspace;
  if (typeof renderDojoSpecializedWorkspace === "function") (window as any).renderDojoSpecializedWorkspace = renderDojoSpecializedWorkspace;
  if (typeof renderCognitionSpecializedWorkspace === "function") (window as any).renderCognitionSpecializedWorkspace = renderCognitionSpecializedWorkspace;
  if (typeof renderNoteSpecializedWorkspace === "function") (window as any).renderNoteSpecializedWorkspace = renderNoteSpecializedWorkspace;
  if (typeof getNoteStatusSummaryText === "function") (window as any).getNoteStatusSummaryText = getNoteStatusSummaryText;
  if (typeof updateNoteTextCounter === "function") (window as any).updateNoteTextCounter = updateNoteTextCounter;
  if (typeof renderNoteMediaGalleryHtml === "function") (window as any).renderNoteMediaGalleryHtml = renderNoteMediaGalleryHtml;
  if (typeof renderNoteHistoryEntriesHtml === "function") (window as any).renderNoteHistoryEntriesHtml = renderNoteHistoryEntriesHtml;
  if (typeof switchNoteEnergy === "function") (window as any).switchNoteEnergy = switchNoteEnergy;
  if (typeof switchNoteMood === "function") (window as any).switchNoteMood = switchNoteMood;
  if (typeof triggerNotePhotoUpload === "function") (window as any).triggerNotePhotoUpload = triggerNotePhotoUpload;
  if (typeof handleNotePhotoFile === "function") (window as any).handleNotePhotoFile = handleNotePhotoFile;
  if (typeof triggerNoteVideoUpload === "function") (window as any).triggerNoteVideoUpload = triggerNoteVideoUpload;
  if (typeof handleNoteVideoFile === "function") (window as any).handleNoteVideoFile = handleNoteVideoFile;
  if (typeof addNoteDemoMedia === "function") (window as any).addNoteDemoMedia = addNoteDemoMedia;
  if (typeof removeNoteMedia === "function") (window as any).removeNoteMedia = removeNoteMedia;
  if (typeof refreshNoteMediaGallery === "function") (window as any).refreshNoteMediaGallery = refreshNoteMediaGallery;
  if (typeof openNoteMediaPreviewModal === "function") (window as any).openNoteMediaPreviewModal = openNoteMediaPreviewModal;
  if (typeof closeNoteMediaPreviewModal === "function") (window as any).closeNoteMediaPreviewModal = closeNoteMediaPreviewModal;
  if (typeof saveNoteDailyEntry === "function") (window as any).saveNoteDailyEntry = saveNoteDailyEntry;
  if (typeof scrollToNoteSection === "function") (window as any).scrollToNoteSection = scrollToNoteSection;
  if (typeof parseGanttDate === "function") (window as any).parseGanttDate = parseGanttDate;
  if (typeof formatGanttDate === "function") (window as any).formatGanttDate = formatGanttDate;
  if (typeof diffGanttDays === "function") (window as any).diffGanttDays = diffGanttDays;
  if (typeof computeProjectProgressAndStatus === "function") (window as any).computeProjectProgressAndStatus = computeProjectProgressAndStatus;
  if (typeof getStatusMeta === "function") (window as any).getStatusMeta = getStatusMeta;
  if (typeof getCategoryMeta === "function") (window as any).getCategoryMeta = getCategoryMeta;
  if (typeof filterGanttCategory === "function") (window as any).filterGanttCategory = filterGanttCategory;
  if (typeof filterGanttStatus === "function") (window as any).filterGanttStatus = filterGanttStatus;
  if (typeof scrollGanttToToday === "function") (window as any).scrollGanttToToday = scrollGanttToToday;
  if (typeof handleGanttEditPlan === "function") (window as any).handleGanttEditPlan = handleGanttEditPlan;
  if (typeof handleGanttArchive === "function") (window as any).handleGanttArchive = handleGanttArchive;
  if (typeof handleSquareReadOnlyClick === "function") (window as any).handleSquareReadOnlyClick = handleSquareReadOnlyClick;
  if (typeof toggleProjectArchive === "function") (window as any).toggleProjectArchive = toggleProjectArchive;
  if (typeof renderGanttChart === "function") (window as any).renderGanttChart = renderGanttChart;
  if (typeof openAddProjectModal === "function") (window as any).openAddProjectModal = openAddProjectModal;
  if (typeof openEditProjectModal === "function") (window as any).openEditProjectModal = openEditProjectModal;
  if (typeof closeAddProjectModal === "function") (window as any).closeAddProjectModal = closeAddProjectModal;
  if (typeof handleAddProjectBackdropClick === "function") (window as any).handleAddProjectBackdropClick = handleAddProjectBackdropClick;
  if (typeof selectProjCategory === "function") (window as any).selectProjCategory = selectProjCategory;
  if (typeof setProjDatePreset === "function") (window as any).setProjDatePreset = setProjDatePreset;
  if (typeof handleProjDateChange === "function") (window as any).handleProjDateChange = handleProjDateChange;
  if (typeof confirmAddNewProject === "function") (window as any).confirmAddNewProject = confirmAddNewProject;
  if (typeof syncNewNodeToHomeExecution === "function") (window as any).syncNewNodeToHomeExecution = syncNewNodeToHomeExecution;
  if (typeof deriveNodesFromReflectionCard === "function") (window as any).deriveNodesFromReflectionCard = deriveNodesFromReflectionCard;
  if (typeof handleCustomCardCheckin === "function") (window as any).handleCustomCardCheckin = handleCustomCardCheckin;
  if (typeof addPickerCustomDynamicField === "function") (window as any).addPickerCustomDynamicField = addPickerCustomDynamicField;
  if (typeof removePickerCustomDynamicField === "function") (window as any).removePickerCustomDynamicField = removePickerCustomDynamicField;
  if (typeof addGoalMetricModalRow === "function") (window as any).addGoalMetricModalRow = addGoalMetricModalRow;
  if (typeof removeGoalMetricModalRow === "function") (window as any).removeGoalMetricModalRow = removeGoalMetricModalRow;
  if (typeof addCardGoalMetricItem === "function") (window as any).addCardGoalMetricItem = addCardGoalMetricItem;
  if (typeof removeCardGoalMetricItem === "function") (window as any).removeCardGoalMetricItem = removeCardGoalMetricItem;
  if (typeof addHabitChecklistModalRow === "function") (window as any).addHabitChecklistModalRow = addHabitChecklistModalRow;
  if (typeof removeHabitChecklistModalRow === "function") (window as any).removeHabitChecklistModalRow = removeHabitChecklistModalRow;
  if (typeof addCardHabitChecklistItem === "function") (window as any).addCardHabitChecklistItem = addCardHabitChecklistItem;
  if (typeof removeCardHabitChecklistItem === "function") (window as any).removeCardHabitChecklistItem = removeCardHabitChecklistItem;
  if (typeof addReflectionImprovementModalRow === "function") (window as any).addReflectionImprovementModalRow = addReflectionImprovementModalRow;
  if (typeof removeReflectionImprovementModalRow === "function") (window as any).removeReflectionImprovementModalRow = removeReflectionImprovementModalRow;
  if (typeof addCardReflectionImprovementItem === "function") (window as any).addCardReflectionImprovementItem = addCardReflectionImprovementItem;
  if (typeof removeCardReflectionImprovementItem === "function") (window as any).removeCardReflectionImprovementItem = removeCardReflectionImprovementItem;
  if (typeof switchModalGoalDeliverable === "function") (window as any).switchModalGoalDeliverable = switchModalGoalDeliverable;
  if (typeof switchGoalDeliverableMode === "function") (window as any).switchGoalDeliverableMode = switchGoalDeliverableMode;
  if (typeof triggerGoalDeliverableUpload === "function") (window as any).triggerGoalDeliverableUpload = triggerGoalDeliverableUpload;
  if (typeof depositGoalToAchievement === "function") (window as any).depositGoalToAchievement = depositGoalToAchievement;
  if (typeof updateDrillCardDuration === "function") (window as any).updateDrillCardDuration = updateDrillCardDuration;
  if (typeof triggerDrillCardImage === "function") (window as any).triggerDrillCardImage = triggerDrillCardImage;
  if (typeof createTertiaryCustomPlanningCard === "function") (window as any).createTertiaryCustomPlanningCard = createTertiaryCustomPlanningCard;
  if (typeof executeCustomCardCheckin === "function") (window as any).executeCustomCardCheckin = executeCustomCardCheckin;
  if (typeof toggleCustomCardTimer === "function") (window as any).toggleCustomCardTimer = toggleCustomCardTimer;
  if (typeof uploadCustomCardEvidence === "function") (window as any).uploadCustomCardEvidence = uploadCustomCardEvidence;
  if (typeof recordCustomCardVideo === "function") (window as any).recordCustomCardVideo = recordCustomCardVideo;
  if (typeof editCustomPlanningCard === "function") (window as any).editCustomPlanningCard = editCustomPlanningCard;
  if (typeof removeCustomPlanningCard === "function") (window as any).removeCustomPlanningCard = removeCustomPlanningCard;
  if (typeof renderInquiryPoolList === "function") (window as any).renderInquiryPoolList = renderInquiryPoolList;
  if (typeof openInquiryModal === "function") (window as any).openInquiryModal = openInquiryModal;
  if (typeof closeInquiryModal === "function") (window as any).closeInquiryModal = closeInquiryModal;
  if (typeof submitNewInquiry === "function") (window as any).submitNewInquiry = submitNewInquiry;
  if (typeof convertInquiryToPlan === "function") (window as any).convertInquiryToPlan = convertInquiryToPlan;
  if (typeof deriveEbbinghausDemo === "function") (window as any).deriveEbbinghausDemo = deriveEbbinghausDemo;
  if (typeof incrementDojoReps === "function") (window as any).incrementDojoReps = incrementDojoReps;
  if (typeof recordTreeTestDemo === "function") (window as any).recordTreeTestDemo = recordTreeTestDemo;

  // Expose core state stores on window for VaultStorageAdapter bidirectional sync
  if (typeof USER_PROFILE_STATE !== "undefined") (window as any).USER_PROFILE_STATE = USER_PROFILE_STATE;
  if (typeof GANTT_PROJECTS !== "undefined") (window as any).GANTT_PROJECTS = GANTT_PROJECTS;
  if (typeof PROJECT_CANVAS_STORE !== "undefined") (window as any).PROJECT_CANVAS_STORE = PROJECT_CANVAS_STORE;
  if (typeof PAVILION_META !== "undefined") (window as any).PAVILION_META = PAVILION_META;
  if (typeof EXEC_CARDS_DATA !== "undefined") (window as any).EXEC_CARDS_DATA = EXEC_CARDS_DATA;
  if (typeof WEEK_BOARD_DATA !== "undefined") (window as any).WEEK_BOARD_DATA = WEEK_BOARD_DATA;
  if (typeof TREASURY_STATE !== "undefined") (window as any).TREASURY_STATE = TREASURY_STATE;
  if (typeof ACHIEVEMENT_STATE !== "undefined") (window as any).ACHIEVEMENT_STATE = ACHIEVEMENT_STATE;
  if (typeof NOTE_STATE !== "undefined") (window as any).NOTE_STATE = NOTE_STATE;
  if (typeof BOUNTY_STATE !== "undefined") (window as any).BOUNTY_STATE = BOUNTY_STATE;
  if (typeof INQUIRY_POOL_STATE !== "undefined") (window as any).INQUIRY_POOL_STATE = INQUIRY_POOL_STATE;

  (window as any).__reinitYouthIslandDom = function () {
    islandSettingsBound = false;
    if (typeof initIslandSettings === "function") initIslandSettings();
    if (typeof initWeatherEngine === "function") initWeatherEngine();
    if (typeof initCanvasPanZoomAndDrag === "function") initCanvasPanZoomAndDrag();
    if (typeof updatePavilionBadges === "function") updatePavilionBadges("exec");
    if (typeof setupCarouselGestures === "function") setupCarouselGestures();
    if (typeof updateDayCarousel === "function") updateDayCarousel();
    if (typeof renderWeekBoard === "function") renderWeekBoard("all");
    if (typeof renderMonthCalendar === "function") renderMonthCalendar();
    if (typeof renderHomeSemesterGoalsBanner === "function") renderHomeSemesterGoalsBanner();
    if (typeof recalcAndRenderGlobalHUD === "function") recalcAndRenderGlobalHUD();
    if (typeof renderBountyModalAndBillboard === "function") renderBountyModalAndBillboard();
    if (typeof renderGanttChart === "function") renderGanttChart();
    if (typeof initTertiaryWorkspace === "function") initTertiaryWorkspace();
    if (typeof switchHomeGlobalView === "function") switchHomeGlobalView("exec");
  };

  (window as any).__reinitYouthIslandDom();
}
