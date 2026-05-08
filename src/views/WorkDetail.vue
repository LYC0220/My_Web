<template>
  <div class="work-detail">
    <div class="container">
      <button class="back-btn" @click="goBack">← 返回作品列表</button>
      
      <div class="content">
        <h1 class="title">{{ project.title }}</h1>
        <p class="tech">{{ project.tech }}</p>
        
        <div class="description">
          <h3>專案介紹</h3>
          <p>{{ project.fullDesc }}</p>
        </div>
        
        <br>
        <div class="features">
          <h3>功能特色</h3>
          <ul>
            <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>

        <br>
        
        <div class="tech-stack">
          <h3>相關技術</h3>
          <div class="tags">
            <span class="tag" v-for="tech in project.stack" :key="tech">{{ tech }}</span>
          </div>
        </div>

        <br>
        
        <div class="links" v-if="project.link || project.github">
          <h3>相關連結</h3>
          <a v-if="project.link" :href="project.link" target="_blank" class="btn primary">
            🔗 訪問網站
          </a>
          <a v-if="project.github" :href="project.github" target="_blank" class="btn secondary">
            📂 GitHub
          </a>
        </div>

        <br>
        
        <div class="screenshots" v-if="project.screenshots && project.screenshots.length">
          <h3>截圖展示</h3>
          <div class="screenshot-grid">
            <img 
              v-for="(img, index) in project.screenshots" 
              :key="index" 
              :src="img" 
              :alt="`截圖 ${index + 1}`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const projectId = route.params.id

const projectsData = {
  'discord-bot': {
    title: 'Discord 機器人',
    tech: 'JavaScript + Discord API',
    fullDesc: '使用 JavaScript 撰寫的 Discord 機器人，實現了多種有趣的互動功能。玩家可以透過指令進行抽卡、對戰等遊戲，享受與機器人互動的樂趣。',
    features: [
      '抽卡系統 - 隨機抽取寶可夢角色',
      '對戰系統 - 玩家之間可以進行對戰',
      '等級制度 - 透過遊戲提升等級',
      '收藏功能 - 收集自己喜歡的角色',
      '每日任務 - 每日登入領取獎勵'
    ],
    stack: ['JavaScript', 'Discord.js', 'Node.js'],
    link: 'https://github.com/LYC0220/DiscordRobot_pokemon',
    github: 'https://github.com/LYC0220/DiscordRobot_pokemon',
    screenshots: [
      '/WorkRobot.png',
      '/WorkRobot_1.png',
      '/WorkRobot_2.png',
      '/WorkRobot_3.png',
      '/WorkRobot_4.png',
      '/WorkRobot_5.png',
      '/WorkRobot_6.png',
      '/WorkRobot_7.png',
      '/WorkRobot_8.png'
    ]
  },
  'pcard': {
    title: '抽卡網站',
    tech: 'JavaScript + ngork',
    fullDesc: '一個線上抽卡網站，玩家可以透過網頁介面進行抽卡，並且可以與朋友連線一起遊玩。網站採用現代化的 UI 設計，操作直覺簡單。',
    features: [
      '多種稀有度的卡片',
      '卡片收集系統',
      '連線對戰功能',
      '個人資料頁面',
      '卡片展示牆'
    ],
    stack: ['JavaScript','ngork'],
    screenshots: [
      '/WorkPCard.png',
      '/WorkPCard_0.png',
      '/WorkPCard_1.png',
      '/WorkPCard_2.png',
      '/WorkPCard_3.png',
      '/WorkPCard_4.png',
      '/WorkPCard_5.png',
      '/WorkPCard_6.png'
    ]
  },
  'backend': {
    title: '公司後台系統',
    tech: 'Vue + Vuetify + Node.js + MySQL',
    fullDesc: '一個完整的公司後台管理系統，幫助企業管理日常營運。系統包含多個模組，可以根據需求靈活配置。',
    features: [
      '收支記錄管理',
      '庫存管理系統',
      '員工資料管理',
      '銷售數據統計',
      '權限管理系統'
    ],
    stack: ['Vue 3', 'Vuetify', 'Node.js', 'Express', 'MySQL'],
    link: 'https://vue-vuetify-sandy.vercel.app/',
    screenshots: [
      '/Company.png',
    ]
  },
  'menu': {
    title: '菜單系統',
    tech: 'Vue 3 + HTML + CSS + JavaScript',
    fullDesc: '這是我第一次練習 Vue3 時做的菜單系統，拿來練習用的所以做得比較簡單，功能也不多。大致功能是可以在旁邊選擇菜色種類，點擊想要的選擇並輸入數量，都選擇完後點擊右下角確認訂單就可以統計所有餐點的總價跟數量。',
    features: [
      '菜色分類選擇 - 右側選單可選擇不同菜色種類',
      '餐點選擇 - 點擊菜色後可選擇數量',
      '價格顯示 - 彈出視窗顯示單價與數量',
      '訂單確認 - 計算所有餐點的總價與數量',
      'Vue 3 學習專案 - 熟悉 Composition API'
    ],
    stack: ['Vue 3', 'HTML', 'CSS', 'JavaScript'],
    screenshots: [
      '/WorkMenu_0.png',
      '/WorkMenu_1.png',
      '/WorkMenu_2.png',
      '/WorkMenu_3.png',
      '/WorkMenu_4.png',
    ]
  },
  'phone': {
    title: '手機模擬',
    tech: 'HTML + CSS + JavaScript',
    fullDesc: '這是我拿來練習 HTML、CSS、JavaScript 的網頁，主要是用來模擬手機的功能。模擬了多個 APP 的功能，例如：計算機、時鐘、YouTube、聯絡人、IG、LINE 等等。',
    features: [
      '開關機功能 - 按鈕控制手機螢幕開關',
      '計算機 APP - 完整的計算機功能',
      '時鐘 APP - 即時顯示時間，有時針、分針、秒針',
      'YouTube APP - 影片類型選擇',
      '設定 APP - 滾動功能與飛航模式開關',
      '聯絡人 APP - 通話紀錄與數字鍵盤',
      'Instagram APP - 滑動瀏覽照片',
      'LINE APP - 登入驗證與訊息傳送'
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://lyc0220.github.io/Study_Phone_web/',
    screenshots: [
      '/WorkPhone_1.png',
      '/WorkPhone_2.png',
      '/WorkPhone_3.png',
      '/WorkPhone_4.png',
      '/WorkPhone_5.png',
      '/WorkPhone_6.png',
      '/WorkPhone_7.png',
      '/WorkPhone_8.png'
    ]
  },
  'pokemon': {
    title: '寶可夢遊戲',
    tech: 'HTML + CSS + JavaScript + Electron',
    fullDesc: '使用網頁技術開發的寶可夢主題遊戲，透過 Electron 打包成桌面應用程式，讓玩家可以在電腦上暢玩。',
    features: [
      '回合制戰鬥系統',
      '寶可夢捕捉',
      '訓練師養成',
      '道館挑戰',
      '圖鑑收集'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Electron'],
    screenshots: [
      '/WorkPokemon.png',
    ]
  },
  'cardgame': {
    title: '撲克牌遊戲',
    tech: 'HTML + CSS + JavaScript',
    fullDesc: '經典的撲克牌小遊戲，支援多種遊戲模式，讓玩家可以在瀏覽器中體驗經典紙牌遊戲的樂趣。',
    features: [
      '二十一點遊戲',
      '多人對戰模式',
      '記分系統',
      '遊戲教學',
      '多種難度'
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    screenshots: [
      '/WorkCard_0.png',
      '/WorkCard_1.png',
      '/WorkCard_2.png',
      '/WorkCard_3.png',
      '/WorkCard_4.png',
      '/WorkCard_5.png',
      '/WorkCard_6.png',
      '/WorkCard_7.png',
      '/WorkCard_8.png',
      '/WorkCard_9.png',
    ]
  },
  'database': {
    title: '資料庫管理系統',
    tech: 'Python + SQL',
    fullDesc: '利用 Python 連接 SQL 資料庫，製作的資料管理工具。可以進行資料的增刪改查，適合小型團隊使用。',
    features: [
      '資料新增/修改/刪除',
      '資料搜尋過濾',
      '匯入匯出功能',
      '資料備份',
      '操作日誌'
    ],
    stack: ['Python', 'SQL', 'SQLite'],
    screenshots: [
      '/work_SQL.png',
      '/WorkSQL_0.png',
      '/WorkSQL_1.png',
      '/WorkSQL_2.png',
      '/WorkSQL_3.png',
      '/WorkSQL_4.png',
      '/WorkSQL_5.png',
      '/WorkSQL_6.png',
      '/WorkSQL_7.png',
      '/WorkSQL_8.png'
    ]
  }
}

const project = computed(() => {
  return projectsData[projectId] || {
    title: '作品詳情',
    tech: '',
    fullDesc: '作品詳情頁面',
    features: [],
    stack: [],
    link: null,
    github: null
  }
})

function goBack() {
  router.push('/works')
}
</script>

<style scoped>
.work-detail {
  min-height: calc(100vh - 64px);
  padding: 40px 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.back-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  color: #94a3b8;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 32px;
  transition: all 0.2s;
}

.app.light .back-btn {
  border: 1px solid rgba(0,0,0,0.2);
  color: #64748b;
}

.back-btn:hover {
  background: rgba(245, 158, 11, 0.1);
  border-color: #f59e0b;
  color: #f59e0b;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech {
  color: #f59e0b;
  font-size: 1.1rem;
  margin-bottom: 32px;
}

section {
  margin-bottom: 32px;
}

h3 {
  color: #94a3b8;
  margin-bottom: 16px;
  font-size: 1.1rem;
}

.app.light h3 {
  color: #64748b;
}

.description p,
.features li {
  color: #cbd5e1;
  line-height: 1.8;
}

.app.light .description p,
.app.light .features li {
  color: #475569;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
}

.features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #f59e0b;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag {
  padding: 8px 16px;
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
  border-radius: 20px;
  font-size: 14px;
}

.links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}

.btn.primary {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  color: white;
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
}

.btn.secondary {
  background: rgba(255,255,255,0.1);
  color: #e0e0e0;
  border: 1px solid rgba(255,255,255,0.2);
}

.app.light .btn.secondary {
  background: rgba(0,0,0,0.05);
  color: #1e293b;
  border: 1px solid rgba(0,0,0,0.1);
}

.screenshots h3 {
  color: #94a3b8;
  margin-bottom: 20px;
  font-size: 1.2rem;
}

.app.light .screenshots h3 {
  color: #64748b;
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (max-width: 600px) {
  .screenshot-grid {
    grid-template-columns: 1fr;
  }
}

.screenshot-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
}

.screenshot-grid img:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}

.app.light .screenshot-grid img {
  border: 1px solid rgba(0,0,0,0.1);
}
</style>