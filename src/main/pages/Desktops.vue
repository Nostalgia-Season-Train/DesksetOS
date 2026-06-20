<script lang="ts" setup>
import { desktopPathList, desktopPreviewMap } from '../../os/register'

function previewStyle(path: string) {
  const url = desktopPreviewMap.get(path)
  return url ? { backgroundImage: `url(${url})` } : {}
}
</script>

<template>
  <div class="page">
    <h1>选择你的桌面</h1>
    <p class="desc">点击下方任意桌面，即刻进入体验</p>
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
  padding: 40px 8%;
  color: #fff;
}

h1 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 12px;
}

.desc {
  font-size: 15px;
  opacity: .55;
  margin-bottom: 48px;
}

.grid {
  display: flex;
  gap: 28px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.card {
  width: 220px;
  border-radius: 16px;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.12);
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
  background: rgba(255,255,255,.16);
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
  opacity: .85;
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
