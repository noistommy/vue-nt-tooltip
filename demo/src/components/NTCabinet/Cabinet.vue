<script setup>
import Drawer from './Drawer.vue'
import NTIcon from './img/nt-profile.svg'
import { PROFILE, DS, BEUI, REACT_MODULES, VUE_MODULES } from './moduleData.js'


</script>

<template>
<footer class="mt-10"> 
  <hr class="ga hr my-10" />
  <div class="wrapper">
    <div class="header ga flex between">
      <div  class="logo">
        <div class="ga flex gap-1">
          <img :src="NTIcon" alt="logo" :style="{width: '25px'}" />
          <div class="bolder large">NT Cabinet</div>
        </div>
      </div>
      <div class="contact">
        <div class="ga-buttons">
          <div class="ga-button compact icon">
            <i class="xi-mail" />
            <a class="link" :href="PROFILE.email" target="_blank"></a>
          </div>
          <div class="ga-button compact icon">
            <i class="xi-linkedin" />
            <a class="link" :href="PROFILE.linkedin" target="_blank"></a>
          </div>
          <div class="ga-button compact icon">
            <i class="xi-home" />
            <a className="link" :href="PROFILE.homepage" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
    <p>Hello! I'm noistommy!! <br /> Thanks for checking out my work. Please take a look at my other work as well. Thank you!</p>
    <div class="ga-grid">
      <div class="column span-4 span-xs-12 pr-10">
        <h5 class="header gray-txt-40">Design system</h5>
        <div class="ga-list">
          <Drawer :logo="NTIcon" name="Frog UI" link="https://frog-ui-css.vercel.app" />      
        </div>
        <h5 class="header gray-txt-40">UI Components</h5>
        <div class="ga-list">
          <template v-for="item in BEUI">
            <Drawer :logo="item.logo" :name="item.name" :link="item.link" :current="item.current" />  
          </template>
        </div>
      </div>
      <div class="column span-4 span-xs-12 pr-10">
        <h5 class="header gray-txt-40">Modules by react</h5>
        <div class="ga-list">
          <template v-for="item in REACT_MODULES">
            <Drawer :logo="item.logo" :name="item.name" :link="item.link" :current="item.current" />  
          </template>
        </div>
      </div>
      <div class="column span-4 span-xs-12 pr-10">
        <h5 class="header gray-txt-40">Modules by vue</h5>
        <div class="ga-list">
          <template v-for="item in VUE_MODULES">
            <Drawer :logo="item.logo" :name="item.name" :link="item.link" :current="item.current" />  
          </template>
        </div>
      </div>
    </div>
  </div>
  <hr class="ga hr" />
  <div class="copylight mt-4 ga-tags attached">
    <span class="ga-tag label deepblue">Copyright</span>
    <span class="ga-tag label deepblue-light">© {{new Date().getFullYear()}} Kim Minyoung</span>
    <span class="ga-tag pointing left secondary">noistommy</span>
  </div>
</footer>
</template>

<style scoped lang="scss">
footer {
  .wrapper {
    max-width: 780px;
    margin: 0 auto;
  }
  .logo-img {
    width: 20px;
  }
}
</style>