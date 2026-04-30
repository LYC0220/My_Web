<template>
  <div class="works">
    <div class="container">
      <h1 class="page-title">我的練習</h1>
      <p class="subtitle">以下是一些練習過程中做的專案</p>

      <div class="projects-grid">
        <div 
          class="project-card" 
          v-for="project in projects" 
          :key="project.id"
          @click="goToDetail(project.id)"
        >
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p class="tech">{{ project.tech }}</p>
            <p class="desc">{{ project.desc }}</p>
            <span class="view-more">查看詳情 →</span>
          </div>
        </div>
      </div>

      <!-- More projects coming soon -->
      <div class="coming-soon">
        <h3>更多作品持續更新中...</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const projects = [
  {
    id: 'discord-bot',
    title: 'Discord 機器人',
    tech: 'JavaScript + Discord API',
    desc: '使用 JavaScript 撰寫的 Discord 機器人，包含抽卡遊戲、對戰系統等功能。',
  },
  {
    id: 'pcard',
    title: '抽卡網站',
    tech: 'JavaScript + ngork',
    desc: '利用 JavaScript + ngork 製作的抽卡網站，可連線與朋友一起遊玩。',
  },
  {
    id: 'backend',
    title: '公司後台系統',
    tech: 'Vue + Vuetify + Node.js + MySQL',
    desc: '使用 VUE 搭配 Vuetify 製作前端，Node 寫後端連接資料庫，基本的後台系統。',
  },
  {
    id: 'menu',
    title: '菜單系統',
    tech: 'Vue 3 + HTML + CSS + JavaScript',
    desc: '第一次練習 Vue3 時做的菜單系統，可選擇菜色種類並計算總價。',
  },
  {
    id: 'phone',
    title: '手機模擬',
    tech: 'HTML + CSS + JavaScript',
    desc: '模擬手機功能的網頁，包含計算機、時鐘、YouTube、IG、Line 等 App。',
  },
  {
    id: 'pokemon',
    title: '寶可夢遊戲',
    tech: 'HTML + CSS + JavaScript + Electron',
    desc: '使用網頁技術結合 Electron 打包成桌面應用程式的遊戲。',
  },
  {
    id: 'cardgame',
    title: '撲克牌遊戲',
    tech: 'HTML + CSS + JavaScript',
    desc: '純 HTML、CSS、JavaScript 製作的撲克牌小遊戲。',
  },
  {
    id: 'database',
    title: '資料庫管理系統',
    tech: 'Python + SQL',
    desc: '利用 Python 連接 SQL 資料庫，製作簡單的資料管理工具。',
  },
]

function goToDetail(id) {
  router.push(`/works/${id}`)
}
</script>

<style scoped>
.works {
  min-height: calc(100vh - 64px);
  padding: 60px 20px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  text-align: center;
  color: #94a3b8;
  margin-bottom: 48px;
}

.app.light .subtitle {
  color: #64748b;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.project-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.app.light .project-card {
  background: rgba(255,255,255,0.8);
  border: 1px solid rgba(0,0,0,0.1);
}

.project-info h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.project-info .tech {
  color: #f59e0b;
  font-size: 14px;
  margin-bottom: 12px;
}

.project-info .desc {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 16px;
}

.app.light .project-info .desc {
  color: #64748b;
}

.view-more {
  color: #f59e0b;
  font-weight: 500;
}

.coming-soon {
  text-align: center;
  padding: 40px;
  color: #64748b;
}
</style>