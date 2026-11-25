// ==========================================================================
// 像素桌遊屋 Pixel BoardGame Cafe - Core Application JavaScript
// ==========================================================================

// --- 初始官方館藏桌遊資料庫 (12 款精選) ---
const INITIAL_GAMES = [
  {
    id: "GM-001",
    name: "卡卡頌 (Carcassonne)",
    icon: "🏰",
    category: "闔家歡樂",
    players: "2-5人",
    minPlayers: 2,
    maxPlayers: 5,
    playTime: "30-45 分鐘",
    difficulty: "新手入門",
    rentalFee: "$100/日",
    hourlyRate: 30,
    tags: ["拼放", "城堡", "經典", "德式桌遊"],
    description: "榮獲無數大獎的經典板塊拼放遊戲！玩家扮演中世紀領主，輪流抽取並拼接地圖板塊（城堡、道路、修道院與草原），並指派米波 (Meeple) 佔領得分。規則簡單易懂，但充滿策略深度。"
  },
  {
    id: "GM-002",
    name: "璀璨寶石 (Splendor)",
    icon: "💎",
    category: "策略燒腦",
    players: "2-4人",
    minPlayers: 2,
    maxPlayers: 4,
    playTime: "30 分鐘",
    difficulty: "中度策略",
    rentalFee: "$120/日",
    hourlyRate: 35,
    tags: ["寶石", "引擎構築", "熱門", "卡牌收集"],
    description: "文藝復興時期的富商傳奇！收集厚實手感的寶石籌碼、收購礦脈與運輸船隊、吸引貴族贊助，先獲得 15 點聲望的玩家獲勝。節奏明快、零運氣成分的引擎構築代表作。"
  },
  {
    id: "GM-003",
    name: "狼人殺 (Werewolves)",
    icon: "🐺",
    category: "心機陣營",
    players: "8-18人",
    minPlayers: 8,
    maxPlayers: 18,
    playTime: "30-60 分鐘",
    difficulty: "新手入門",
    rentalFee: "$80/日",
    hourlyRate: 25,
    tags: ["陣營", "心機", "派對", "語言推理"],
    description: "天黑請閉眼，狼人請睜眼！風靡全球的語言對抗與陣營推理遊戲。村民與神職角色（預言家、女巫、獵人）必須在白天的發言中揪出隱藏在身邊的狡猾狼人。"
  },
  {
    id: "GM-004",
    name: "阿瓦隆 (Avalon)",
    icon: "⚔️",
    category: "心機陣營",
    players: "5-10人",
    minPlayers: 5,
    maxPlayers: 10,
    playTime: "30-45 分鐘",
    difficulty: "中度策略",
    rentalFee: "$90/日",
    hourlyRate: 30,
    tags: ["陣營", "亞瑟王", "不淘汰", "邏輯對決"],
    description: "圓桌騎士與莫德雷德叛徒的終極對抗！無須中途淘汰玩家，透過五次出任務投票與發言邏輯，梅林必須引導正義陣營邁向勝利，同時避免被刺客在最後一刻暗殺！"
  },
  {
    id: "GM-005",
    name: "爆炸貓 (Exploding Kittens)",
    icon: "💣",
    category: "派對同樂",
    players: "2-5人",
    minPlayers: 2,
    maxPlayers: 5,
    playTime: "15 分鐘",
    difficulty: "新手入門",
    rentalFee: "$80/日",
    hourlyRate: 25,
    tags: ["爆笑", "快節奏", "俄羅斯輪盤", "派對必備"],
    description: "如同貓咪版的俄羅斯輪盤！玩家輪流抽牌，抽到爆炸貓的倒楣鬼若沒有拆彈卡就會瞬間出局。利用跳過、攻擊、偷牌等無厘頭卡牌陷害朋友，最後活下來的人贏！"
  },
  {
    id: "GM-006",
    name: "矮人礦坑 (Saboteur)",
    icon: "⛏️",
    category: "心機陣營",
    players: "3-10人",
    minPlayers: 3,
    maxPlayers: 10,
    playTime: "30 分鐘",
    difficulty: "新手入門",
    rentalFee: "$80/日",
    hourlyRate: 25,
    tags: ["挖礦", "壞矮人", "路徑拼放", "大團首選"],
    description: "辛勤的淘金矮人試圖挖出通往寶藏的隧道，但隊伍中潛伏著心懷不軌的壞矮人！他會在暗地裡砸壞礦車、弄熄提燈、把隧道挖向死路。到底誰才是真正的隊友？"
  },
  {
    id: "GM-007",
    name: "展翅翱翔 (Wingspan)",
    icon: "🦅",
    category: "策略燒腦",
    players: "1-5人",
    minPlayers: 1,
    maxPlayers: 5,
    playTime: "40-70 分鐘",
    difficulty: "中度策略",
    rentalFee: "$180/日",
    hourlyRate: 45,
    tags: ["鳥類生態", "引擎構築", "美術精美", "得獎名作"],
    description: "德國年度遊戲大獎得主！扮演鳥類愛好者，在森林、草原、濕地建立生態網絡。每隻鳥類皆有獨特技能與真實科普插畫，透過餵食、產卵、築巢形成強大的連鎖得分效應。"
  },
  {
    id: "GM-008",
    name: "妙語說書人 (Dixit)",
    icon: "🎨",
    category: "闔家歡樂",
    players: "3-8人",
    minPlayers: 3,
    maxPlayers: 8,
    playTime: "30 分鐘",
    difficulty: "新手入門",
    rentalFee: "$100/日",
    hourlyRate: 30,
    tags: ["聯想", "夢幻插畫", "心理共鳴", "破冰"],
    description: "一張卡片，一句暗號，無限想像！說書人出一道謎題，其他玩家挑選最貼切的手牌混入。謎題不能太直白也不能太晦澀，考驗玩家間的靈犀相通與幽默感。"
  },
  {
    id: "GM-009",
    name: "傳情畫意 (Telestrations)",
    icon: "✏️",
    category: "派對同樂",
    players: "4-8人",
    minPlayers: 4,
    maxPlayers: 8,
    playTime: "20-30 分鐘",
    difficulty: "新手入門",
    rentalFee: "$90/日",
    hourlyRate: 25,
    tags: ["畫畫", "傳話歪樓", "爆笑破冰", "靈魂畫家"],
    description: "傳話遊戲的繪圖版！一人畫、一人猜，再由下一人畫出前一人的猜測。往往在三棒之後，原本的「太空人」就會神奇地退化成「穿雨衣的炸蝦」，笑果滿分！"
  },
  {
    id: "GM-010",
    name: "拼布對決 (Patchwork)",
    icon: "🧵",
    category: "雙人對決",
    players: "2人",
    minPlayers: 2,
    maxPlayers: 2,
    playTime: "30 分鐘",
    difficulty: "中度策略",
    rentalFee: "$90/日",
    hourlyRate: 25,
    tags: ["雙人專屬", "俄羅斯方塊", "鈕扣經濟", "情侶首選"],
    description: "桌遊大師烏夫 (Uwe Rosenberg) 的雙人經典。利用鈕扣作為貨幣，精算時間與空間，將不同形狀的布料板塊拼入自己的拼布圖板上，既燒腦又充滿溫馨手作感。"
  },
  {
    id: "GM-011",
    name: "深入絕地：暗黑世界傳奇",
    icon: "🐉",
    category: "冒險合作",
    players: "1-4人",
    minPlayers: 1,
    maxPlayers: 4,
    playTime: "90-150 分鐘",
    difficulty: "硬核燒腦",
    rentalFee: "$250/日",
    hourlyRate: 60,
    tags: ["RPG地城", "立體地形", "App聯動", "美式冒險"],
    description: "極致的 3D 立體地城冒險！搭配官方專屬 APP 引導戰鬥、劇情與怪物 AI。玩家扮演勇者小隊，探索未知地城、升級武器鍛造裝備，體驗史詩級劇本戰役！"
  },
  {
    id: "GM-012",
    name: "嗒寶 (Dobble / Spot It!)",
    icon: "👀",
    category: "派對同樂",
    players: "2-8人",
    minPlayers: 2,
    maxPlayers: 8,
    playTime: "15 分鐘",
    difficulty: "新手入門",
    rentalFee: "$70/日",
    hourlyRate: 20,
    tags: ["反應力", "眼力大考驗", "快節奏", "攜帶方便"],
    description: "任意兩張卡片之間，絕對只存在一個相同的圖案！玩家必須發揮極速眼力與敏捷反應，比誰先喊出相同圖案並出牌。老少咸宜，開場熱身首選！"
  }
];

// --- 初始官方預約範例資料 ---
const INITIAL_BOOKINGS = [
  {
    id: "BK-701",
    tableId: "VIP1",
    tableName: "巨龍地城・日式和室大包廂（8-10人）",
    bookDate: "2026-11-28",
    bookTime: "16:00 - 19:00",
    name: "林小宇",
    phone: "0912-345-678",
    people: 8,
    drink: "無限續杯碳酸飲料 (+40元/人)",
    note: "慶生開「阿瓦隆」與「狼人殺」，需要店長引導新手",
    status: "已預約",
    createdAt: "2026-11-24 14:30"
  },
  {
    id: "BK-702",
    tableId: "T2",
    tableName: "冒險者公會 A 桌（4人方桌）",
    bookDate: "2026-11-29",
    bookTime: "13:00 - 16:00",
    name: "陳心怡",
    phone: "0988-123-456",
    people: 4,
    drink: "基本暢飲 (免費提供冷泡茶)",
    note: "想玩「璀璨寶石」與「卡卡頌」",
    status: "已入座",
    createdAt: "2026-11-24 15:10"
  }
];

// --- 全域狀態 ---
let gamesState = [];
let bookingsState = [];
let isSoundEnabled = true;
let audioCtx = null;

// --- 8-Bit 像素音效合成器 (Web Audio API) ---
function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

function playRetroSound(type) {
  if (!isSoundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === 'coin') {
      // 復古金幣音效 (8-bit Coin Chime)
      osc.type = 'square';
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'click') {
      // 復古按鈕點擊 (Short blip)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.05);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'dice') {
      // 擲骰滾動音效 (Rapid rumble)
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(320, now + 0.15);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.18);
      osc.start(now);
      osc.stop(now + 0.18);
    } else if (type === 'success') {
      // 成功號角 (Tada Chime)
      osc.type = 'square';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    } else if (type === 'delete') {
      // 刪除低音 (Low blip)
      osc.type = 'square';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.linearRampToValueAtTime(80, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  } catch (e) {
    console.warn("Audio synth notice:", e);
  }
}

// 音效開關切換
function toggleSound() {
  isSoundEnabled = !isSoundEnabled;
  localStorage.setItem('pixel_boardgame_sound', isSoundEnabled ? '1' : '0');
  updateSoundUI();
  if (isSoundEnabled) {
    playRetroSound('coin');
    showToast("🔊 8-Bit 像素音效已開啟！");
  } else {
    showToast("🔇 像素音效已靜音");
  }
}

function updateSoundUI() {
  const icon = document.getElementById('soundIcon');
  const text = document.getElementById('soundText');
  if (icon && text) {
    icon.textContent = isSoundEnabled ? '🔊' : '🔇';
    text.textContent = isSoundEnabled ? '音效 ON' : '音效 OFF';
  }
}

// --- 資料持久化 (LocalStorage) ---
function loadData() {
  // 載入音效設定
  const savedSound = localStorage.getItem('pixel_boardgame_sound');
  if (savedSound !== null) {
    isSoundEnabled = savedSound === '1';
  }
  updateSoundUI();

  // 載入桌遊資料
  const savedGames = localStorage.getItem('pixel_boardgame_catalog');
  if (savedGames) {
    try {
      gamesState = JSON.parse(savedGames);
    } catch (e) {
      gamesState = [...INITIAL_GAMES];
    }
  } else {
    gamesState = [...INITIAL_GAMES];
    saveGames();
  }

  // 載入預約資料
  const savedBookings = localStorage.getItem('pixel_boardgame_bookings');
  if (savedBookings) {
    try {
      bookingsState = JSON.parse(savedBookings);
    } catch (e) {
      bookingsState = [...INITIAL_BOOKINGS];
    }
  } else {
    bookingsState = [...INITIAL_BOOKINGS];
    saveBookings();
  }
}

function saveGames() {
  localStorage.setItem('pixel_boardgame_catalog', JSON.stringify(gamesState));
}

function saveBookings() {
  localStorage.setItem('pixel_boardgame_bookings', JSON.stringify(bookingsState));
}

// --- 畫面渲染 (Render Functions) ---

// 渲染前端遊戲卡片網格 (Filtered)
function renderGamesGrid() {
  const container = document.getElementById('gamesGrid');
  if (!container) return;

  const searchKeyword = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();
  const selectedCat = document.getElementById('categoryFilter')?.value || 'ALL';
  const selectedPlayers = document.getElementById('playerFilter')?.value || 'ALL';
  const selectedDiff = document.getElementById('difficultyFilter')?.value || 'ALL';

  const filtered = gamesState.filter(game => {
    // 搜尋比對
    if (searchKeyword) {
      const matchName = game.name.toLowerCase().includes(searchKeyword);
      const matchDesc = game.description.toLowerCase().includes(searchKeyword);
      const matchCat = game.category.toLowerCase().includes(searchKeyword);
      const matchTags = game.tags.some(t => t.toLowerCase().includes(searchKeyword));
      if (!matchName && !matchDesc && !matchCat && !matchTags) return false;
    }

    // 類別比對
    if (selectedCat !== 'ALL' && game.category !== selectedCat) return false;

    // 人數比對
    if (selectedPlayers !== 'ALL') {
      if (selectedPlayers === '2' && (game.minPlayers > 2 || game.maxPlayers < 2)) return false;
      if (selectedPlayers === '3-4' && (game.maxPlayers < 3 || game.minPlayers > 4)) return false;
      if (selectedPlayers === '5-6' && (game.maxPlayers < 5 || game.minPlayers > 6)) return false;
      if (selectedPlayers === '7+' && game.maxPlayers < 7) return false;
    }

    // 難度比對
    if (selectedDiff !== 'ALL' && game.difficulty !== selectedDiff) return false;

    return true;
  });

  const countBadge = document.getElementById('gameCountBadge');
  if (countBadge) {
    countBadge.textContent = `共 ${filtered.length} 款館藏遊戲`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="pixel-box" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
        <div style="font-size: 48px; margin-bottom: 12px;">🔍</div>
        <h3>查無符合條件的桌遊冒險！</h3>
        <p style="color: var(--text-muted); margin-top: 8px;">試著清除搜尋關鍵字或點擊下方重置篩選。</p>
        <button class="pixel-btn pixel-btn-primary" style="margin-top: 14px;" onclick="resetFilters()">↺ 重置所有條件</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(game => `
    <div class="game-card" onclick="openGameDetail('${game.id}')">
      <div class="card-top-icon">
        <span class="category-badge">${game.category}</span>
        ${game.icon}
      </div>
      <div class="card-content">
        <h3 class="game-title">${game.name}</h3>
        <div class="game-meta-row">
          <span>👥 ${game.players}</span>
          <span>⏱️ ${game.playTime}</span>
          <span>⭐ ${game.difficulty}</span>
        </div>
        <p class="game-desc">${game.description}</p>
        <div class="game-card-footer">
          <span class="rental-fee">外借: ${game.rentalFee}</span>
          <button class="pixel-btn pixel-btn-sm pixel-btn-primary" onclick="event.stopPropagation(); openGameDetail('${game.id}')">
            詳情 📜
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 快速標籤篩選
function quickFilterTag(tag) {
  playRetroSound('click');
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = tag;
    renderGamesGrid();
  }
}

// 重置篩選
function resetFilters() {
  playRetroSound('click');
  document.getElementById('searchInput').value = '';
  document.getElementById('categoryFilter').value = 'ALL';
  document.getElementById('playerFilter').value = 'ALL';
  document.getElementById('difficultyFilter').value = 'ALL';
  renderGamesGrid();
}

// 渲染後台桌遊表格 (CRUD Table)
function renderAdminGamesTable() {
  const tbody = document.getElementById('adminGamesTableBody');
  if (!tbody) return;

  const search = (document.getElementById('adminGameSearch')?.value || '').trim().toLowerCase();
  const list = gamesState.filter(g => {
    if (!search) return true;
    return g.name.toLowerCase().includes(search) || g.category.toLowerCase().includes(search) || g.id.toLowerCase().includes(search);
  });

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 20px;">無符合桌遊資料</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(g => `
    <tr>
      <td><code>${g.id}</code></td>
      <td style="font-size: 24px; text-align: center;">${g.icon}</td>
      <td><strong>${g.name}</strong></td>
      <td><span class="pixel-tag">${g.category}</span></td>
      <td>${g.players}</td>
      <td>${g.difficulty}</td>
      <td style="color: #34d399; font-weight: bold;">${g.rentalFee}</td>
      <td>
        <div class="table-actions">
          <button class="pixel-btn pixel-btn-sm pixel-btn-warning" onclick="openEditGameModal('${g.id}')">✏️ 編輯</button>
          <button class="pixel-btn pixel-btn-sm pixel-btn-danger" onclick="deleteGame('${g.id}')">🗑️ 刪除</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// 渲染後台預約表格 (CRUD Table)
function renderAdminBookingsTable() {
  const tbody = document.getElementById('adminBookingsTableBody');
  if (!tbody) return;

  if (bookingsState.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 24px;">目前暫無預約契約！可前往「預約桌位」體驗線上送出。</td></tr>`;
    return;
  }

  tbody.innerHTML = bookingsState.map(b => `
    <tr>
      <td><code>${b.id}</code></td>
      <td><strong>${b.name}</strong></td>
      <td>${b.phone}</td>
      <td>${b.tableName}</td>
      <td>${b.bookDate} <br><small style="color: var(--text-muted);">${b.bookTime}</small></td>
      <td>${b.people} 人</td>
      <td>
        <select class="pixel-select" style="font-size: 12px; padding: 4px;" onchange="updateBookingStatus('${b.id}', this.value)">
          <option value="待確認" ${b.status === '待確認' ? 'selected' : ''}>⏳ 待確認</option>
          <option value="已預約" ${b.status === '已預約' ? 'selected' : ''}>✅ 已預約</option>
          <option value="已入座" ${b.status === '已入座' ? 'selected' : ''}>🎮 已入座</option>
          <option value="已完成" ${b.status === '已完成' ? 'selected' : ''}>🏆 已完成</option>
          <option value="取消" ${b.status === '取消' ? 'selected' : ''}>❌ 取消</option>
        </select>
      </td>
      <td>
        <button class="pixel-btn pixel-btn-sm pixel-btn-danger" onclick="deleteBooking('${b.id}')">🗑️ 刪除</button>
      </td>
    </tr>
  `).join('');
}

// --- 遊戲彈窗與 CRUD 操作 ---

// 開啟桌遊詳情彈窗
function openGameDetail(gameId) {
  playRetroSound('click');
  const game = gamesState.find(g => g.id === gameId);
  if (!game) return;

  document.getElementById('modalGameTitle').textContent = `${game.icon} ${game.name}`;
  document.getElementById('modalGameBody').innerHTML = `
    <div style="display: flex; gap: 16px; margin-bottom: 16px; align-items: center; background: #18132d; padding: 12px; border: 2px solid #3c2f6d;">
      <div style="font-size: 48px; background: #2c2250; padding: 8px; border: 2px solid var(--border-color);">${game.icon}</div>
      <div>
        <p style="font-size: 16px; color: var(--text-gold); font-weight: bold;">分類：${game.category} ｜ 難度：${game.difficulty}</p>
        <p style="color: var(--text-muted); font-size: 14px;">👥 遊玩人數：${game.players} ｜ ⏱️ 預估時間：${game.playTime}</p>
        <p style="color: #34d399; font-size: 14px; font-weight: bold;">💰 外借租金：${game.rentalFee}（店內暢玩僅算場地費）</p>
      </div>
    </div>
    
    <div style="margin-bottom: 16px;">
      <h4 style="color: var(--text-gold); margin-bottom: 6px;">📜 遊戲特色與背景：</h4>
      <p style="line-height: 1.7; color: #e2e8f0;">${game.description}</p>
    </div>

    <div>
      <h4 style="color: var(--text-gold); margin-bottom: 6px;">🏷️ 相關標籤：</h4>
      <div style="display: flex; gap: 6px; flex-wrap: wrap;">
        ${game.tags.map(t => `<span class="pixel-tag">#${t}</span>`).join('')}
      </div>
    </div>
  `;

  document.getElementById('gameDetailModal').classList.add('active');
}

function closeGameDetailModal() {
  document.getElementById('gameDetailModal').classList.remove('active');
}

function bookThisGame() {
  closeGameDetailModal();
  switchTab('section-booking');
  showToast("已為您切換至選位預約！請選擇喜愛的包廂或桌位。");
}

// 開啟新增桌遊彈窗
function openAddGameModal() {
  playRetroSound('click');
  document.getElementById('adminModalTitle').textContent = "➕ 新增館藏桌遊 (Create Game)";
  document.getElementById('editGameId').value = "";
  document.getElementById('adminGameForm').reset();
  document.getElementById('gameFormIcon').value = "🎲";
  document.getElementById('adminGameModal').classList.add('active');
}

// 開啟編輯桌遊彈窗
function openEditGameModal(gameId) {
  playRetroSound('click');
  const game = gamesState.find(g => g.id === gameId);
  if (!game) return;

  document.getElementById('adminModalTitle').textContent = `✏️ 編輯桌遊資料 (${game.id})`;
  document.getElementById('editGameId').value = game.id;
  document.getElementById('gameFormName').value = game.name;
  document.getElementById('gameFormIcon').value = game.icon;
  document.getElementById('gameFormCategory').value = game.category;
  document.getElementById('gameFormPlayers').value = game.players;
  document.getElementById('gameFormTime').value = game.playTime;
  document.getElementById('gameFormDifficulty').value = game.difficulty;
  document.getElementById('gameFormFee').value = game.rentalFee;
  document.getElementById('gameFormDesc').value = game.description;
  document.getElementById('gameFormTags').value = game.tags.join(' ');

  document.getElementById('adminGameModal').classList.add('active');
}

function closeAdminGameModal() {
  document.getElementById('adminGameModal').classList.remove('active');
}

// 儲存桌遊 (Create / Update)
function handleSaveGameSubmit(e) {
  e.preventDefault();
  const editId = document.getElementById('editGameId').value;
  const name = document.getElementById('gameFormName').value.trim();
  const icon = document.getElementById('gameFormIcon').value.trim() || '🎲';
  const category = document.getElementById('gameFormCategory').value;
  const players = document.getElementById('gameFormPlayers').value.trim();
  const playTime = document.getElementById('gameFormTime').value.trim();
  const difficulty = document.getElementById('gameFormDifficulty').value;
  const rentalFee = document.getElementById('gameFormFee').value.trim();
  const description = document.getElementById('gameFormDesc').value.trim();
  const tagsStr = document.getElementById('gameFormTags').value.trim();
  const tags = tagsStr ? tagsStr.split(/\s+/).filter(Boolean) : [category];

  // 解析大概 min/max 人數供篩選器使用
  let minP = 2, maxP = 4;
  const match = players.match(/(\d+)(?:-(\d+))?/);
  if (match) {
    minP = parseInt(match[1]);
    maxP = match[2] ? parseInt(match[2]) : minP;
  }

  if (editId) {
    // 編輯 (Update)
    const index = gamesState.findIndex(g => g.id === editId);
    if (index !== -1) {
      gamesState[index] = {
        ...gamesState[index],
        name, icon, category, players, minPlayers: minP, maxPlayers: maxP,
        playTime, difficulty, rentalFee, description, tags
      };
      saveGames();
      showToast(`✨ 桌遊「${name}」已成功更新！`);
      playRetroSound('success');
    }
  } else {
    // 新增 (Create)
    const newId = `GM-${String(Date.now()).slice(-4)}`;
    const newGame = {
      id: newId,
      name, icon, category, players, minPlayers: minP, maxPlayers: maxP,
      playTime, difficulty, rentalFee, hourlyRate: 30, description, tags
    };
    gamesState.unshift(newGame);
    saveGames();
    showToast(`🎉 成功收錄新桌遊「${name}」至冒險者圖鑑！`);
    playRetroSound('coin');
  }

  closeAdminGameModal();
  renderGamesGrid();
  renderAdminGamesTable();
}

// 刪除桌遊 (Delete)
function deleteGame(gameId) {
  const game = gamesState.find(g => g.id === gameId);
  if (!game) return;

  if (confirm(`👾 確定要將【${game.name}】從館藏資料庫中除名嗎？`)) {
    gamesState = gamesState.filter(g => g.id !== gameId);
    saveGames();
    playRetroSound('delete');
    showToast(`🗑️ 已刪除桌遊【${game.name}】`);
    renderGamesGrid();
    renderAdminGamesTable();
  }
}

// --- 預約系統與平面選位 ---

// 綁定平面圖桌位點選事件
function initTableNodeSelection() {
  const tableNodes = document.querySelectorAll('.table-node');
  tableNodes.forEach(node => {
    node.addEventListener('click', () => {
      playRetroSound('click');
      tableNodes.forEach(n => n.classList.remove('selected'));
      node.classList.add('selected');

      const tableId = node.getAttribute('data-table-id');
      const tableName = node.getAttribute('data-table-name');
      const tableRate = node.getAttribute('data-table-rate');

      document.getElementById('bookTableId').value = tableId;
      document.getElementById('bookTableName').value = tableName;

      const display = document.getElementById('selectedTableDisplay');
      if (display) {
        display.innerHTML = `
          <span class="table-title">📍 [${tableId}] ${tableName}</span>
          <span class="table-price">${tableRate}</span>
        `;
      }
    });
  });
}

// 提交預約單
function handleBookingSubmit(e) {
  e.preventDefault();
  const tableId = document.getElementById('bookTableId').value;
  const tableName = document.getElementById('bookTableName').value;
  const bookDate = document.getElementById('bookDate').value;
  const bookTime = document.getElementById('bookTime').value;
  const name = document.getElementById('bookName').value.trim();
  const phone = document.getElementById('bookPhone').value.trim();
  const people = parseInt(document.getElementById('bookPeople').value) || 2;
  const drink = document.getElementById('bookDrink').value;
  const note = document.getElementById('bookNote').value.trim();

  const newBookingId = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date();
  const createdAt = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const newBooking = {
    id: newBookingId,
    tableId,
    tableName,
    bookDate,
    bookTime,
    name,
    phone,
    people,
    drink,
    note: note || "無特殊需求",
    status: "待確認",
    createdAt
  };

  bookingsState.unshift(newBooking);
  saveBookings();
  playRetroSound('success');
  renderAdminBookingsTable();

  // 顯示憑證 Modal
  openInvoiceModal(newBooking);
}

// 開啟預約憑證
function openInvoiceModal(booking) {
  document.getElementById('invoiceModalBody').innerHTML = `
    <div style="background: #140f2b; border: 3px solid #fbc02d; padding: 18px; font-family: monospace;">
      <div style="text-align: center; border-bottom: 2px dashed #4b3d75; padding-bottom: 12px; margin-bottom: 12px;">
        <h3 style="color: #ffd54f; font-size: 20px;">📜 像素桌遊屋・冒險契約憑證</h3>
        <p style="color: #a78bfa; font-size: 13px;">PIXEL BOARDGAME GUILD BOOKING RECEIPT</p>
        <p style="font-size: 16px; color: #fff; margin-top: 6px;">契約編號：<strong>${booking.id}</strong></p>
      </div>

      <div style="font-size: 14px; line-height: 1.8; color: #f1f5f9;">
        <p>🧙 預約人：<strong>${booking.name}</strong> 樣</p>
        <p>📱 手機：${booking.phone}</p>
        <p>📍 預約桌位：<strong>${booking.tableName}</strong></p>
        <p>📅 冒險日期：<strong>${booking.bookDate}</strong></p>
        <p>⏰ 時段：<strong>${booking.bookTime}</strong></p>
        <p>👥 人數：${booking.people} 位冒險者</p>
        <p>🥤 補給方案：${booking.drink}</p>
        <p>💬 備註需求：${booking.note}</p>
        <p>✨ 契約狀態：<span style="background: #047857; color: #d1fae5; padding: 2px 6px;">${booking.status}</span></p>
      </div>

      <div style="border-top: 2px dashed #4b3d75; margin-top: 14px; padding-top: 10px; text-align: center; font-size: 12px; color: #94a3b8;">
        感謝預約！憑此單號於預約時段至現場即可快速報到入座。
      </div>
    </div>
  `;
  document.getElementById('bookingInvoiceModal').classList.add('active');
}

function closeInvoiceModal() {
  document.getElementById('bookingInvoiceModal').classList.remove('active');
}

function printInvoice() {
  playRetroSound('click');
  window.print();
}

// 後台更新預約狀態 (CRUD Update)
function updateBookingStatus(bookingId, newStatus) {
  const index = bookingsState.findIndex(b => b.id === bookingId);
  if (index !== -1) {
    bookingsState[index].status = newStatus;
    saveBookings();
    playRetroSound('click');
    showToast(`📝 預約單【${bookingId}】狀態已更新為：${newStatus}`);
  }
}

// 後台刪除預約 (CRUD Delete)
function deleteBooking(bookingId) {
  if (confirm(`🗑️ 確定要刪除預約單【${bookingId}】嗎？`)) {
    bookingsState = bookingsState.filter(b => b.id !== bookingId);
    saveBookings();
    playRetroSound('delete');
    showToast(`已刪除預約單【${bookingId}】`);
    renderAdminBookingsTable();
  }
}

// 後台清空所有預約
function clearAllBookings() {
  if (confirm("⚠️ 確定要清空所有顧客預約紀錄嗎？此動作無法復原！")) {
    bookingsState = [];
    saveBookings();
    playRetroSound('delete');
    showToast("已清空所有預約紀錄！");
    renderAdminBookingsTable();
  }
}

// --- 資料匯出/匯入/重置 (評分示範工具) ---

// 匯出 JSON
function exportDataJson() {
  playRetroSound('coin');
  const exportPayload = {
    appName: "Pixel BoardGame Cafe",
    version: "1.0.0",
    exportedAt: new Date().toISOString(),
    games: gamesState,
    bookings: bookingsState
  };

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pixel-boardgame-data-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("📥 已成功匯出 JSON 備份檔！");
}

// 匯入 JSON
function importDataJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (Array.isArray(data.games)) {
        gamesState = data.games;
        saveGames();
      }
      if (Array.isArray(data.bookings)) {
        bookingsState = data.bookings;
        saveBookings();
      }
      playRetroSound('success');
      showToast("📤 JSON 資料已成功匯入並更新！");
      renderGamesGrid();
      renderAdminGamesTable();
      renderAdminBookingsTable();
    } catch (err) {
      alert("匯入失敗：檔案格式不正確！");
    }
  };
  reader.readAsText(file);
}

// 還原為預設資料
function resetToDefaultData() {
  if (confirm("🔄 確定要將所有館藏桌遊與預約紀錄還原為官方初始資料嗎？")) {
    gamesState = JSON.parse(JSON.stringify(INITIAL_GAMES));
    bookingsState = JSON.parse(JSON.stringify(INITIAL_BOOKINGS));
    saveGames();
    saveBookings();
    playRetroSound('coin');
    showToast("✨ 已還原至官方初始資料狀態！");
    renderGamesGrid();
    renderAdminGamesTable();
    renderAdminBookingsTable();
  }
}

// --- 冒險工具箱 (Dice & Randomizer) ---

// 擲骰子 (D6, D20)
function rollDice(sides) {
  playRetroSound('dice');
  const diceBox = document.getElementById('diceDisplay');
  const diceResult = document.getElementById('diceResult');
  const diceLog = document.getElementById('diceLog');

  diceBox.classList.add('rolling');
  diceResult.textContent = "?";
  diceLog.textContent = `擲出 ${sides} 面骰中...`;

  setTimeout(() => {
    diceBox.classList.remove('rolling');
    const roll = Math.floor(Math.random() * sides) + 1;
    diceResult.textContent = roll;
    diceLog.innerHTML = `🎲 D${sides} 結果：<strong>${roll}</strong> ${roll === sides ? '🔥 狂暴大成功！' : roll === 1 ? '💀 殘念大失敗！' : '✨'}`;
    playRetroSound(roll === sides ? 'coin' : 'click');
  }, 400);
}

// 擲雙骰 (2D6)
function rollTwoDices() {
  playRetroSound('dice');
  const diceBox = document.getElementById('diceDisplay');
  const diceResult = document.getElementById('diceResult');
  const diceLog = document.getElementById('diceLog');

  diceBox.classList.add('rolling');
  diceResult.textContent = "?";
  diceLog.textContent = "擲出雙骰 (2D6) 中...";

  setTimeout(() => {
    diceBox.classList.remove('rolling');
    const r1 = Math.floor(Math.random() * 6) + 1;
    const r2 = Math.floor(Math.random() * 6) + 1;
    const total = r1 + r2;
    diceResult.textContent = total;
    diceLog.innerHTML = `🎲 雙骰結果：[${r1}] + [${r2}] = <strong>${total}</strong>！`;
    playRetroSound('click');
  }, 400);
}

// 擲硬幣
function flipCoin() {
  playRetroSound('dice');
  const diceBox = document.getElementById('diceDisplay');
  const diceResult = document.getElementById('diceResult');
  const diceLog = document.getElementById('diceLog');

  diceBox.classList.add('rolling');
  diceResult.textContent = "🪙";

  setTimeout(() => {
    diceBox.classList.remove('rolling');
    const isHead = Math.random() >= 0.5;
    diceResult.textContent = isHead ? "正面" : "反面";
    diceResult.style.fontSize = "26px";
    diceLog.innerHTML = `🪙 命運硬幣落定：<strong>【${isHead ? '正面 - 太陽' : '反面 - 月亮'}】</strong>`;
    playRetroSound('coin');
    setTimeout(() => { diceResult.style.fontSize = "42px"; }, 1500);
  }, 400);
}

// 今天玩什麼？隨機推薦
function pickRandomGame() {
  playRetroSound('coin');
  const numPlayers = parseInt(document.getElementById('recommendPlayers').value) || 4;
  const suitableGames = gamesState.filter(g => numPlayers >= g.minPlayers && numPlayers <= g.maxPlayers);

  const container = document.getElementById('recommendResultBox');
  if (suitableGames.length === 0) {
    container.innerHTML = `
      <div style="padding: 16px;">
        <span style="font-size: 36px;">😢</span>
        <p style="margin-top: 8px;">目前館藏中暫無適合 ${numPlayers} 人的遊戲，建議調整人數或至後台新增！</p>
      </div>
    `;
    return;
  }

  // 隨機抽選
  const picked = suitableGames[Math.floor(Math.random() * suitableGames.length)];
  container.innerHTML = `
    <div class="recommend-picked-card">
      <div style="display: flex; gap: 12px; align-items: center; border-bottom: 2px dashed #4c3f75; padding-bottom: 8px; margin-bottom: 10px;">
        <span style="font-size: 38px;">${picked.icon}</span>
        <div>
          <span style="background: #eab308; color: #000; font-size: 11px; font-weight: bold; padding: 1px 6px;">🎲 店長推薦！</span>
          <h3 style="color: #ffd54f; font-size: 18px;">${picked.name}</h3>
        </div>
      </div>
      <p style="font-size: 13px; color: #cbd5e1; margin-bottom: 10px;">${picked.description}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px;">
        <span style="color: var(--text-gold);">👥 ${picked.players} ｜ ⏱️ ${picked.playTime}</span>
        <button class="pixel-btn pixel-btn-sm pixel-btn-primary" onclick="openGameDetail('${picked.id}')">查看詳細規則 📜</button>
      </div>
    </div>
  `;
}

// --- 介面導覽與分頁切換 ---

function switchTab(sectionId) {
  playRetroSound('click');
  document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));

  const targetSec = document.getElementById(sectionId);
  if (targetSec) {
    targetSec.classList.add('active');
  }

  const activeBtn = document.querySelector(`.nav-tab[data-target="${sectionId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchAdminTab(tabName) {
  playRetroSound('click');
  document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));

  const btn = event?.currentTarget;
  if (btn) btn.classList.add('active');

  const content = document.getElementById(`admin-${tabName}`);
  if (content) content.classList.add('active');
}

// 吐司通知
function showToast(message, icon = "✨") {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  const iconEl = document.getElementById('toastIcon');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  if (iconEl) iconEl.textContent = icon;

  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// --- 初始化生命週期 ---
document.addEventListener('DOMContentLoaded', () => {
  loadData();

  // 預設日期為明日
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toISOString().slice(0, 10);
  const dateInput = document.getElementById('bookDate');
  if (dateInput) dateInput.value = dateStr;

  // 渲染
  renderGamesGrid();
  renderAdminGamesTable();
  renderAdminBookingsTable();
  initTableNodeSelection();

  // 導覽按鈕監聽
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      switchTab(target);
    });
  });

  // 搜尋與篩選事件監聽
  document.getElementById('searchInput')?.addEventListener('input', renderGamesGrid);
  document.getElementById('categoryFilter')?.addEventListener('change', renderGamesGrid);
  document.getElementById('playerFilter')?.addEventListener('change', renderGamesGrid);
  document.getElementById('difficultyFilter')?.addEventListener('change', renderGamesGrid);

  // 音效切換按鈕
  document.getElementById('soundToggleBtn')?.addEventListener('click', toggleSound);

  // 點擊任一處激活音效 AudioContext
  document.addEventListener('click', () => {
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }, { once: true });
});
