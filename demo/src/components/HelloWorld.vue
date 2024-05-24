<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="header">{{ msg }}</h1>
  <div class="ga-message">
    <div class="ga-grid">
      <div class="column span-8">
        <h4>기본 툴팁</h4>
        <p class="sub-title">기본 설정입니다.</p>
      </div>
      <div class="column span-4 align-center">
        <button class="ga-button" v-nt-tooltip="`기본`">기본</button>
      </div>
    </div>
  </div>
  <div class="ga-message">
    <div class="ga-grid">
      <div class="column span-8">
        <h4>컨텐츠 타입</h4>
        <p class="sub-title">컨텐츠는 <code>`...`</code> 또는 <code>{contents: '...'}</code> 로 사용합니다.</p>
      </div>
      <div class="column span-4 align-center">
        <button class="ga-button" v-nt-tooltip="`String type`">테스트</button>
        <button class="ga-button" v-nt-tooltip="{contents: 'Object type'}">테스트</button>
      </div>
    </div>
  </div>
  <div class="ga-message">
    <div class="ga-grid">
      <div class="column span-8">
        <h4>HTML 컨텐츠</h4>
        <p class="sub-title">HTML을 사용한 컨텐츠 적용</p>
      </div>
      <div class="column span-4 align-center">
        <button class="ga-button" v-nt-tooltip="`<h4 class='importance-text'>Html 컨텐츠</h4><p>해당 컨텐츠는 <strong>html</strong>로 작성됨.</p>`">HTML 테스트</button>
      </div>
    </div>
  </div>
  <div class="ga-message">
    <div class="ga-grid">
      <div class="column span-8">
        <h4>생성 위치 설정</h4>
        <p class="sub-title">위쪽 또는 아래쪽으로 생성함.</p>
      </div>
      <div class="column span-4 align-center">
        <button class="ga-button icon" v-nt-tooltip="`위쪽으로 생성`">
          <i class="fa fa-arrow-up"></i>
          TOP
        </button>
        <button class="ga-button icon" v-nt-tooltip:bottom="`아래쪽으로 생성`">
          <i class="fa fa-arrow-down"></i>
          DOWN
        </button>
      </div>
    </div>
  </div>
  <div class="ga-message fixed">
    <div class="ga-grid">
      <div class="column span-2">
        <button class="ga-button icon" v-nt-tooltip="`완쪽 정렬 보정`">
          <i class="fa fa-arrow-left"></i>
          START
        </button>
      </div>
      <div class="column span-8" :style="{'textAlign': 'center'}">
        <h4>정렬 및 정렬 보정 설정</h4>
        <p class="sub-title">기본: 중앙 정렬 | 대상 요소 위치에 따라 정렬 자동 보정</p>
      </div>
      <div class="column span-2" :style="{'textAlign': 'right'}">  
        <button class="ga-button icon" v-nt-tooltip="`오른쪽 정렬 보정`">
          END
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.fixed {
  padding: 5px;
  position: fixed;
  width: 100%;
  left: 0;
}
</style>
