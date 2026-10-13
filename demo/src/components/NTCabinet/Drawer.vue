<script setup>

defineProps({
  logo: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  current: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <a class="item p-1" :class="{current}" :href="link" target="_blank">
    <img class="logo-img" :src="logo" alt="logo" /> 
    <div class="item-title ml-4">{{ name }}</div>
    <div class="btn-set">
      <div class="ga-button icon compact">
        <template v-if="current">
          current
        </template>
        <i v-else class="xi-link"></i>
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
.logo-img {
  width: 20px;
}
.current {
  pointer-events: none;
}
</style>