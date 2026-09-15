<script setup>
import HelloWorld from './components/HelloWorld.vue'

import Cabinet from './components/NTCabinet/Cabinet.vue'

import {ref, computed} from 'vue'

const theme = ref('system')

const selectTheme = (mode) => {
  const html = document.documentElement;
  theme.value = mode
  
  html.className = ''
  html.classList.add(`${mode}-mode`);
  
  sessionStorage.setItem('theme-mode', mode)
}

</script>

<template>
  <header>
    <div class="base-tooltip ga-tooltip invert top-center huge" :style="{
          position: 'relative',
          top: '0',
          left: '50%',
          texstAlign: 'center',
          transform: 'translateX(-50%)'
        }">
          Welcome <span class="bold px-2"> NT Tooltip</span>!!
        </div>
    <div class="main-title">
      NT Tooltip
    </div>
    <div class="main-description">
      NT Tooltip is a user-defined directive for <span class="ga-tag lightgreen label mx-1">Vue</span>.
    </div>
    <div class="menu-wrapper">
      <nav>
        <!-- <li><div class="ga-button">A</div></li> -->
        <li>
          <div class="ga-buttons">
            <div class="ga-button icon" v-nt-tooltip:bottom="`Light Mode`" :class="{selected: theme === 'light'}" @click="selectTheme('light')"><i class="xi-sun" /></div>
            <div class="ga-button icon" v-nt-tooltip:bottom="`Dark Mode`" :class="{selected: theme === 'dark'}" @click="selectTheme('dark')"><i class="xi-moon" /></div>
            <div class="ga-button icon" v-nt-tooltip:bottom="`System Setting`" :class="{selected: theme === 'system'}" @click="selectTheme('system')"><i class="xi-desktop" /></div>
          </div>
        </li>
        <li>
          <div class="ga-button">
            <i class="icon left xi-github"></i>
            Github
            <a href="https://github.com/noistommy/vue-nt-tooltip.git" class="link" target="_blank"></a>
          </div>
        </li>
      </nav>
    </div>
  </header>
  <main>
    <HelloWorld :theme="theme" msg="Nt Tooltip" />
  </main>
  <Cabinet />
</template>

<style scoped>
  header {
    margin-top: 100px;
    text-align: center;
  }
  main {
    margin: 120px 0;
  }
  .main-title {
    text-align: center;
    font-size: 3em;
    font-weight: 700;
  }
  .menu-wrapper {
    padding: 20px 0;
    /* position: absolute;
    top: 0;
    right: 0;
    padding: 10px; */
    nav {
      display: flex;
      justify-content: center;
      gap: 10px;
      li {
        list-style: none;
      }
    }
  }
</style>
