<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-modal-provider>
        <div class="app">
          <!-- Header -->
          <header class="header">
            <img src="/MY.png" class="logo-img">
            <nav class="nav">
              <router-link to="/">首頁</router-link>
              <router-link to="/about">關於</router-link>
              <router-link to="/works">練習</router-link>
            </nav>
          </header>

          <!-- Main Content -->
          <main class="main">
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </main>

        </div>
      </n-modal-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { computed } from 'vue'
import { NConfigProvider, NMessageProvider, NModalProvider } from 'naive-ui'
import { darkTheme } from 'naive-ui'

const themeOverrides = computed(() => ({
  common: {
    primaryColor: '#f59e0b',
    primaryColorHover: '#fbbf24',
  }
}))
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.app {
  min-height: 100vh;
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #111111 100%);
  background-attachment: fixed;
  color: #e0e0e0;
  transition: all 0.3s ease;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  z-index: 100;
}

.logo-img {
  height: 80px;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav a {
  font-size: 20px;
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav a:hover, .nav a.router-link-active {
  color: #f59e0b;
}

/* Main */
.main {
  padding-top: 64px;
  min-height: calc(100vh - 64px);
}

/* Footer */
.footer {
  padding: 40px 20px;
  text-align: center;
  color: #64748b;
  font-size: 14px;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from { opacity: 0; transform: translateY(10px); }
.fade-leave-to { opacity: 0; transform: translateY(-10px); }

/* Mobile */
@media (max-width: 768px) {
  .header { padding: 0 20px; }
  .nav { gap: 20px; }
  .nav a { font-size: 14px; }
}
</style>