<script setup>
import HelloWorld from './components/HelloWorld.vue'

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
    <div class="main-title" v-nt-tooltip="{contents: `Welcome to NT!!`, theme: 'light'}">
      NT Tooltip
    </div>
    <div class="main-description">
      NT Tooltip is a user-defined directive for vue.
    </div>
    <div class="menu-wrapper">
      <nav>
        <!-- <li><div class="ga-button">A</div></li> -->
        <li>
          <div class="ga-buttons round">
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
