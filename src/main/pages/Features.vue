<template>
  <div class="page">
    <h1>核心特性</h1>
    <div class="grid">
      <div class="card" v-for="f in features" :key="f.title">
        <div class="icon">{{ f.icon }}</div>
        <h3>{{ f.title }}</h3>
        <p>{{ f.desc }}</p>
      </div>
    </div>
    <RouterLink to="/demo/contact" class="next">下一步 →</RouterLink>
  </div>
</template>

<script lang="ts" setup>
const features = [
  { icon: '⚡', title: '极速响应', desc: '毫秒级启动，流畅的动画与过渡，每一次操作都即时反馈。' },
  { icon: '🛡️', title: '安全可靠', desc: '多层安全架构，数据加密存储，守护你的每一份隐私。' },
  { icon: '🎨', title: '自由定制', desc: '丰富的主题与插件生态，打造专属于你的个性化桌面。' },
  { icon: '☁️', title: '云端同步', desc: '设置与数据无缝同步，在任何设备上延续你的工作流。' },
  { icon: '📱', title: '多端协同', desc: '手机、平板、桌面一体化体验，跨设备无缝切换。' },
  { icon: '🔧', title: '开发者友好', desc: '开放的 API 与 SDK，轻松构建原生应用与扩展。' },
]
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 60px 8%;
  color: #fff;
}

h1 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 48px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 820px;
  width: 100%;
  margin-bottom: 48px;
}

.card {
  padding: 28px 24px;
  border-radius: 16px;
  background: rgba(255,255,255,.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,.1);
  transition: .3s;
}

.card:hover {
  background: rgba(255,255,255,.14);
  transform: translateY(-4px);
}

.icon {
  font-size: 32px;
  margin-bottom: 14px;
}

h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}

p {
  font-size: 13px;
  line-height: 1.7;
  opacity: .65;
}

.next {
  padding: 10px 28px;
  border-radius: 10px;
  background: #fff;
  color: #3b82f6;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: .3s;
}

.next:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,.2);
}
</style>
