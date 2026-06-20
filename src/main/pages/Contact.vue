<template>
  <div class="page">
    <div class="center">
      <h1>准备好了吗？</h1>
      <p class="desc">加入 DesksetOS，开启全新桌面体验。<br>免费下载，即刻开始。</p>
      <div class="actions">
        <RouterLink to="/desktops" class="primary">立即体验</RouterLink>
        <button class="secondary">查看文档</button>
      </div>
      <div class="stats">
        <div class="stat">
          <span class="num">10K+</span>
          <span class="label">活跃用户</span>
        </div>
        <div class="stat">
          <span class="num">99.9%</span>
          <span class="label">运行时间</span>
        </div>
        <div class="stat">
          <span class="num">500+</span>
          <span class="label">插件生态</span>
        </div>
      </div>
    </div>
    <RouterLink to="/" class="back">← 返回首页</RouterLink>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
}

.center {
  text-align: center;
}

h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
}

.desc {
  font-size: 16px;
  line-height: 1.8;
  opacity: .65;
  margin-bottom: 36px;
}

.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 56px;
}

button, .primary {
  padding: 12px 32px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: .3s;
  border: none;
  text-decoration: none;
  display: inline-block;
}

.primary {
  background: #fff;
  color: #3b82f6;
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,.2);
}

.secondary {
  background: rgba(255,255,255,.12);
  color: #fff;
  border: 1px solid rgba(255,255,255,.2);
}

.secondary:hover {
  background: rgba(255,255,255,.2);
}

.stats {
  display: flex;
  gap: 56px;
  justify-content: center;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.num {
  font-size: 28px;
  font-weight: 800;
}

.label {
  font-size: 13px;
  opacity: .5;
  margin-top: 4px;
}

.back {
  position: absolute;
  bottom: 40px;
  color: rgba(255,255,255,.4);
  text-decoration: none;
  font-size: 14px;
  transition: .3s;
}

.back:hover {
  color: rgba(255,255,255,.8);
}
</style>
