<template>
  <div class="page">
    <div class="hero">
      <div class="badge">全新发布</div>
      <h1>DesksetOS</h1>
      <p class="subtitle">下一代桌面操作系统，为创造力而生</p>
      <p class="desc">融合简洁设计与强大性能，让每一次交互都流畅自然。<br>从工作到娱乐，重新定义你的桌面体验。</p>
      <RouterLink to="/features" class="cta">了解更多 →</RouterLink>
    </div>
    <div class="visual">
      <div class="screen">
        <div class="bar"></div>
        <div class="content">
          <div class="block w40"></div>
          <div class="block w55"></div>
          <div class="block w30"></div>
          <div class="block w60"></div>
          <div class="block w45"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  height: 100%;
  padding: 0 8%;
  color: #fff;
}

.hero {
  flex: 1;
  max-width: 480px;
}

.badge {
  display: inline-block;
  padding: 4px 16px;
  border-radius: 999px;
  background: rgba(255,255,255,.15);
  backdrop-filter: blur(8px);
  font-size: 13px;
  letter-spacing: 1px;
  margin-bottom: 24px;
}

h1 {
  font-size: 56px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 22px;
  font-weight: 600;
  opacity: .9;
  margin-bottom: 20px;
}

.desc {
  font-size: 15px;
  line-height: 1.8;
  opacity: .65;
  margin-bottom: 36px;
}

.cta {
  display: inline-block;
  padding: 12px 32px;
  border-radius: 10px;
  background: #fff;
  color: #3b82f6;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: .3s;
}

.cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,.2);
}

.visual {
  flex: 1;
  display: flex;
  justify-content: center;
}

.screen {
  width: 340px;
  height: 220px;
  border-radius: 14px;
  background: rgba(255,255,255,.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,.15);
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
}

.bar {
  height: 28px;
  background: rgba(255,255,255,.08);
  border-bottom: 1px solid rgba(255,255,255,.1);
}

.content {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.block {
  height: 14px;
  border-radius: 6px;
  background: rgba(255,255,255,.12);
}

.w30 { width: 30%; }
.w40 { width: 40%; }
.w45 { width: 45%; }
.w55 { width: 55%; }
.w60 { width: 60%; }
</style>
