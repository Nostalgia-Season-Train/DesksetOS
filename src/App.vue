<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isDesktop = computed(() => route.meta.desktop === true)
</script>

<template>
  <RouterView v-if="isDesktop" />
  <main v-else>
    <nav>
      <RouterLink to="/" class="logo">DesksetOS</RouterLink>
      <div class="links">
        <RouterLink to="/">概览</RouterLink>
        <RouterLink to="/features">特性</RouterLink>
        <RouterLink to="/contact">开始</RouterLink>
        <RouterLink to="/desktops">桌面</RouterLink>
      </div>
    </nav>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1e3a5f, #2563eb, #4f46e5);
  background-size: 200% 200%;
  animation: bg-shift 16s ease-in-out infinite alternate;
  overflow: hidden;
}

@keyframes bg-shift {
  0%   { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 56px;
  background: rgba(0,0,0,.15);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,.08);
}

.logo {
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
  letter-spacing: .5px;
}

.links {
  display: flex;
  gap: 32px;
}

.links a {
  color: rgba(255,255,255,.6);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: .3s;
}

.links a:hover,
.links a.router-link-active {
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease, transform .3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
