<script lang="ts" setup>
import { desktopPathList, desktopPreviewMap } from './register'

function previewStyle(path: string) {
  const url = desktopPreviewMap.get(path)
  return url ? { backgroundImage: `url(${url})` } : {}
}
</script>

<template>
  <div class="home">
    <div class="center">
      <h1>DesksetOS</h1>
      <p class="subtitle">Web 桌面启动器</p>
      <div class="grid">
        <RouterLink
          v-for="path in desktopPathList"
          :key="path"
          :to="`/${path}`"
          class="card"
        >
          <div class="preview" :style="previewStyle(path)">
            <div v-if="!desktopPreviewMap.get(path)" class="fallback-icon">🖥️</div>
          </div>
          <span class="name">{{ path }}</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a, #1e293b, #0f172a);
  background-size: 200% 200%;
  animation: bg 20s ease-in-out infinite alternate;
  color: #fff;
}

@keyframes bg {
  0%   { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.center {
  text-align: center;
}

h1 {
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 16px;
  opacity: .45;
  margin-bottom: 56px;
  letter-spacing: 2px;
}

.grid {
  display: flex;
  gap: 28px;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 220px;
  border-radius: 16px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.08);
  backdrop-filter: blur(8px);
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: .3s;
}

.card:hover {
  background: rgba(255,255,255,.12);
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0,0,0,.3);
}

.preview {
  width: 100%;
  height: 130px;
  background-position: center;
  background-size: cover;
  background-color: rgba(255,255,255,.04);
  display: flex;
  align-items: center;
  justify-content: center;
}

.fallback-icon {
  font-size: 40px;
  opacity: .5;
}

.name {
  padding: 14px 0;
  font-size: 14px;
  font-weight: 600;
  opacity: .8;
}
</style>
