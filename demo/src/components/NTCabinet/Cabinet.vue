<script setup>

</script>

<template>
<footer class="mt-10"> 
  <hr class="ga hr my-10" />
  <div class="wrapper">
    <div class="header ga flex between">
      <div  class="logo">
        <div class="ga flex gap-1">
          <img src="./img/nt-profile.svg" alt="logo" width="25px" />
          <div class="bolder large">NT Cabinet</div>
        </div>
      </div>
      <div class="contact">
        <div class="ga-buttons">
          <div class="ga-button compact icon">
            <i class="xi-mail" />
            <a class="link" href="mailto:noistommy@gmail.com" target="_blank"></a>
          </div>
          <div class="ga-button compact icon">
            <i class="xi-linkedin" />
            <a class="link" href="https://www.linkedin.com/in/minyoung-kim-noistommy" target="_blank"></a>
          </div>
          <div class="ga-button compact icon">
            <i class="xi-home" />
            <a class="link" href="/" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
    <p>Hello! I'm noistommy!! <br /> Thanks for checking out my work. Please take a look at my other work as well. Thank you!</p>
    <div class="ga-grid">
      <div class="column span-4 span-xs-12 pr-10">
        <h5 class="header gray-txt-40">Design system</h5>
        <div class="ga-list">
          <div class="item p-1">
            <img class="logo-img" src="./img/frog-profile.svg" alt="logo" /> 
            <div class="item-title ml-4">Frog UI</div>
            <div class="btn-set">
              <div class="ga-button icon compact">
                <i class="xi-link"></i>
                <a class="link" href="https://frog-ui-css.vercel.app" target="_blank"></a>
              </div>
            </div>
          </div>
        </div>
        <h5 class="header gray-txt-40">UI Components</h5>
        <div class="ga-list">
          <div class="item p-1">
            <img src="./img/be-ui-vue.svg" alt="logo" class="logo-img" /> 
            <div class="item-title ml-4">BEUI - Vue</div>
            <div class="btn-set">
              <div class="ga-button icon compact">
                <i class="xi-link"></i>
                <a class="link" href="https://beui.vercel.app" target="_blank"></a>
              </div>
            </div>
          </div>
          <div class="item p-1">
            <img src="./img/be-ui-react.svg" alt="logo" class="logo-img" /> 
            <div class="item-title ml-4">BEUI - React</div>
            <div class="btn-set">
              <div class="ga-button icon compact">
                <i class="xi-link"></i>
                <a class="link"  href="https://react-ga-ui.vercel.app" target="_blank"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column span-4 span-xs-12 pr-10">
        <h5 class="header gray-txt-40">Modules by react</h5>
        <div class="ga-list">
          <div class="item p-1">
            <img src="./img/nt-profile.svg" alt="logo" class="logo-img" />
            <div class="item-title ml-4">NT Modal</div>
            <div class="btn-set">
              <div class="ga-button compact icon">
                <i class="xi-link"></i>
                <a class="link" href="https://noistommy.github.io/react-nt-modal" target="_blank"></a>
              </div>
            </div>
          </div>
          <div class="item p-1">
            <img src="./img/nt-profile.svg" alt="logo" class="logo-img" />
            <div class="item-title ml-4">NT Toast</div>
            <div class="btn-set">
              <div class="ga-button icon compact">
                <i class="xi-link"></i>
                <a class="link" href="https://noistommy.github.io/react-nt-toast" target="_blank"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column span-4 span-xs-12 pr-10">
        <h5 class="header gray-txt-40">Modules by vue</h5>
        <div class="ga-list">
          <div class="item p-1">
            <img src="./img/nt-profile.svg" alt="logo" class="logo-img" />
            <div class="item-title ml-4">NT Modal</div>
            <div class="btn-set">
              <div class="ga-button icon compact">
                <i class="xi-link"></i>
                <a class="link" href="https://noistommy.github.io/vue-nt-modal" target="_blank"></a>
              </div>
            </div>
          </div>
          <div class="item p-1">
            <img src="./img/nt-profile.svg" alt="logo" class="logo-img" />
            <div class="item-title ml-4">NT Toast</div>
            <div class="btn-set">
              <div class="ga-button icon compact">
                <i class="xi-link"></i>
                <a class="link" href="https://noistommy.github.io/vue-nt-toast" target="_blank"></a>
              </div>
            </div>
          </div>
          <div class="item p-1">
            <img src="./img/nt-profile.svg" alt="logo" class="logo-img" />
            <div class="item-title ml-4">NT Tooltip</div>
            <div class="btn-set">
              <div class="ga-button round compact">
                Current
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="ga hr" />
  <div class="copylight mt-4 ga-tags attached">
    <span class="ga-tag label deepblue">Copyright</span>
    <span class="ga-tag label deepblue-light">© 2016-present Kim Minyoung</span>
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