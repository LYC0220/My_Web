<template>
  <div class="home">
    <!-- Background Animations -->
    <div class="bg-animation">
      <div class="circle c1"></div>
      <div class="circle c2"></div>
      <div class="circle c3"></div>
      <div class="circle c4"></div>
      <div class="float-code">&lt;/&gt;</div>
      <div class="float-code f2">{}</div>
      <div class="float-code f3">&lt;div&gt;</div>
      <div class="float-code f4">JS</div>
      <div class="float-code f5">Vue</div>
    </div>

    <div class="hero">
      <div class="hero-content">
        <h1 class="title">
          你好，我是 <span class="highlight">廖育展</span>
        </h1>
        <p class="subtitle">
          中原大學應用數學系資訊組畢業<br>
          熱愛 Web 開發與程式設計
        </p>
        <div class="tags">
          <span class="tag">Angular</span>
          <span class="tag">NET Core</span>
          <span class="tag">Python</span>
        </div>
        <div class="buttons">
          <router-link to="/about" class="btn primary">了解更多</router-link>
          <router-link to="/works" class="btn secondary">查看作品</router-link>
        </div>
      </div>
      <div class="hero-visual">
        <div class="photo-container">
          <img src="/MM.png" alt="廖育展" class="profile-photo">
          <div class="photo-glow"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
}

/* Background Animation */
.bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.c1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.c2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  bottom: -50px;
  left: -50px;
  animation: float 10s ease-in-out infinite reverse;
}

.c3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  top: 40%;
  left: 20%;
  animation: float 12s ease-in-out infinite;
}

.c4 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  bottom: 20%;
  right: 15%;
  animation: float 7s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(10deg); }
}

.float-code {
  position: absolute;
  font-family: 'Fira Code', monospace;
  font-size: 2rem;
  color: rgba(245, 158, 11, 0.15);
  font-weight: bold;
  animation: floatText 15s linear infinite;
}

.float-code:nth-child(6) { top: 10%; left: 10%; }
.float-code:nth-child(7) { top: 20%; right: 20%; animation-duration: 18s; }
.float-code:nth-child(8) { bottom: 30%; left: 15%; animation-duration: 12s; }
.float-code:nth-child(9) { bottom: 10%; right: 10%; animation-duration: 20s; }
.float-code:nth-child(10) { top: 50%; left: 5%; animation-duration: 14s; }

@keyframes floatText {
  0% { transform: translateY(100px) rotate(0deg); opacity: 0; }
  10% { opacity: 0.3; }
  90% { opacity: 0.3; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  gap: 80px;
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.hero-content {
  flex: 1;
}

.title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.highlight {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 24px;
}

.tags {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.tag {
  padding: 8px 16px;
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.buttons {
  display: flex;
  gap: 16px;
}

.btn {
  padding: 14px 32px;
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

.btn.secondary:hover {
  background: rgba(255,255,255,0.2);
}

/* Photo */
.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
}

.photo-container {
  position: relative;
  width: 350px;
  height: 420px;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.photo-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(251, 191, 36, 0.1));
  border-radius: 30px;
  z-index: -1;
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.02); }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 14px;
}

.scroll-arrow {
  font-size: 24px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
  
  .title { font-size: 2.5rem; }
  
  .tags { justify-content: center; }
  .buttons { justify-content: center; }
  
  .photo-container {
    width: 280px;
    height: 340px;
  }
  
  .bg-animation { display: none; }
}
</style>