<script setup>
import WelcomeItem from './WelcomeItem.vue'
import CodeBlock from './CodeBlock.vue'

import { ref, computed } from 'vue'

defineProps({
  msg: String,
  theme: String
})

const p = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum nec dui eu dictum. Aliquam erat volutpat.'

const isUse = ref('true');
const setUse = (value) =>{isUse.value = value}
const themeMode = ref('light');
const setTheme = (value) =>{themeMode.value = value}
const trigger = ref('hover');
const setTrigger = (value) =>{trigger.value = value}
const contentsType = ref('string');
const setContents = (value) =>{contentsType.value = value}
const position = ref('top');
const setPos = (value) =>{position.value = value}
const align = ref('top.start');
const setAlign = (value) =>{align.value = value}

const showEx = ref(false);
const toggleEx = () => {
  console.log(showEx.value)
  showEx.value = !showEx.value
}
const codes = computed(() => {
  return {
    base: '<element v-nt-tooltip="Base"></element>',
    use: `<element v-nt-tooltip='{ ... , isUse: ${isUse.value} }'></element>`,
    theme: `<element v-nt-tooltip='{ ... , theme: '${themeMode.value}' }'></element>`,
    hover: `<element v-nt-tooltip='{ ... , trigger: 'hover' }'></element>`,
    click: `<element v-nt-tooltip='{ ... , trigger: 'click' }'></element>`,
    string: `<element v-nt-tooltip="\`contents\`"></element>`,
    object: `<element v-nt-tooltip="{ contents: 'contents' }"></element>`,
    html: `<element v-nt-tooltip="{ contents: '<!-- html code -->' }"></element>`,
    position: `<element v-nt-tooltip:${position.value}="\`${position.value.toUpperCase()}\`"></element>`,
    align: `<element v-nt-tooltip:${align.value}="\`${align.value.toUpperCase()}\`"></element>`,
  }
})


</script>

<template>
<WelcomeItem>
  <template #icon>
    <i class="xi-comment"></i>
  </template>
  <template #heading>
    Base
    <p class="sub-title">기본 설정입니다.</p>
  </template>
  <div class="ga-segment border">
    <div class="contents">
      <button class="ga-button" v-nt-tooltip="`기본`">기본</button>
    </div>
  </div>
  <CodeBlock :theme="theme" :code="codes.base" />
</WelcomeItem>
<WelcomeItem>
  <template #icon>
    <i class="xi-eye-off"></i>
  </template>
  <template #heading>
    isUse
    <p class="sub-title">isUse 옵션 값으로 설정합니다.</p>
  </template>
  <div class="ga-segment border">
    <div class="contents">
      <button class="ga-button" v-nt-tooltip="{ contents: '사용', isUse: true }" @mouseenter="setUse(true)">isUse: True</button>
      <button class="ga-button" v-nt-tooltip="{ contents: '사용', isUse: false }" @mouseenter="setUse(false)">isUse: False</button>
    </div>
  </div>
  <CodeBlock :theme="theme" :code="codes.use" />
</WelcomeItem>
<WelcomeItem>
  <template #icon>
    <i class="xi-contrast"></i>
  </template>
  <template #heading>
    Theme
    <p class="sub-title">Theme 옵션 값으로 설정합니다.</p>
  </template>
  <div class="ga-segment border">
    <div class="contents">
      <button class="ga-button" v-nt-tooltip="{ contents: 'Light Theme', theme: 'light' }" @mouseenter="setTheme('light')">Theme: Light</button>
      <button class="ga-button" v-nt-tooltip="{ contents: 'Dark Theme', theme: 'dark' }" @mouseenter="setTheme('dark')">Theme: Dark</button>
    </div>
  </div>
  <CodeBlock :theme="theme" :code="codes.theme" />
</WelcomeItem>
<!-- <WelcomeItem>
  <template #icon>
    <i class="xi-location-arrow"></i>
  </template>
  <template #heading>
    트리거
    <p class="sub-title">실행 트리거 설정</p>
  </template>
  <div class="ga-segment border">
    <div class="contents">
      <button class="ga-button" v-nt-tooltip="{ contents: 'Hover', trigger: 'hover'}" @mouseenter="setTrigger('hover')">Hover::Default</button>
      <button class="ga-button" v-nt-tooltip="{ contents: '사용', trigger: 'click' }" @mouseenter="setTrigger('click')">Click</button>
    </div>
  </div>
  <CodeBlock :theme="theme" :theme="theme" :code="trigger === 'hover' ? codes.hover : codes.click" />
</WelcomeItem> -->
<WelcomeItem>
  <template #icon>
    <i class="xi-text-format"></i>
  </template>
  <template #heading>
    Contents Type
    <p class="sub-title">컨텐츠는 <code>`...`</code> 또는 <code>{contents: '...'}</code> 로 사용합니다.</p>
  </template>
  <div class="ga-segment border">
    <div class="contents">
      <button class="ga-button" v-nt-tooltip="`String type`" @mouseenter="setContents('string')">"Contents"</button>
      <button class="ga-button" v-nt-tooltip="{contents: 'Object type', align: 'right'}" @mouseenter="setContents('object')">{ ...Contents }</button>
    </div>
  </div>
  <CodeBlock :theme="theme" :code="contentsType === 'string' ? codes.string : codes.object" />
</WelcomeItem>
<WelcomeItem>
  <template #icon>
    <i class="xi-code"></i>
  </template>
  <template #heading>
    HTML Contents
    <p class="sub-title">HTML을 사용한 컨텐츠 적용</p>
  </template>
  <div class="ga-segment border">
    <div class="contents">
      <button class="ga-button" v-nt-tooltip="`<h5 class='header ga-importance-text'>Html 컨텐츠</h5><p>해당 컨텐츠는 <strong>html</strong>로 작성됨.</p>`">HTML 테스트</button>
    </div>
  </div>
  <CodeBlock :theme="theme" :code="codes.html" />
</WelcomeItem>
<WelcomeItem>
  <template #icon>
    <i class="xi-arrows"></i>
  </template>
  <template #heading>
    Position
    <p class="sub-title">Top, Bottom, Left, Right 위치에 생성합니다.</p>
  </template>
  <div class="ga-segment border">
    <div class="contents">
      <button class="ga-button" v-nt-tooltip="`위쪽으로 생성`" @mouseenter="setPos('top')">
        <i class="icon left xi-arrow-up"></i>
        TOP
      </button>
      <button class="ga-button icon" v-nt-tooltip:bottom="`아래쪽으로 생성`" @mouseenter="setPos('bottom')">
        <i class="icon left xi-arrow-down"></i>
        DOWN
      </button>
      <button class="ga-button icon" v-nt-tooltip:left.start="{contents: '왼쪽으로 생성'}" @mouseenter="setPos('left')">
        <i class="icon left xi-arrow-left"></i>
        LEFT
      </button>
      <button class="ga-button icon" v-nt-tooltip:right.end="`오른쪽으로 생성`" @mouseenter="setPos('right')">
        RIGHT
        <i class="icon left xi-arrow-right"></i>
      </button>
    </div>
  </div>
  <CodeBlock :theme="theme" :code="codes.position" />
</WelcomeItem>
<WelcomeItem>
  <template #icon>
    <i class="xi-align-left"></i>
  </template>
  <template #heading>
    Position and Align
    <p class="sub-title"></p>
  </template>
  <div class="ga-segment border">
    <div class="contents">
      <div class="ga-grid2" >
          <div class="column col-3">
            <button class="ga-button text fluid">Top | Left</button>
          </div>
          <div class="column col-6 " :style="{ 'textAlign': 'center' }">
            <button class="ga-button" v-nt-tooltip:top.end="`TOP-END<br>${p}`" @mouseenter="setAlign('top.start')">T-END</button>
            <button class="ga-button" v-nt-tooltip:top="`TOP-CENTER<br>${p}`" @mouseenter="setAlign('top.center')">T-CENTER</button>
            <button class="ga-button" v-nt-tooltip:top.start="`TOP-START<br>${p}`" @mouseenter="setAlign('top.end')">T-START</button>
          </div>
          <div class="column col-3">
            <button class="ga-button text fluid">Top | Right</button>
          </div>

          <div class="column col-3">
            <button class="ga-button fluid" v-nt-tooltip:left.end="`LEFT-END<br>${p}`" @mouseenter="setAlign('left.end')">L-END</button>
          </div>
          <div class="column col-6"></div>
          <div class="column col-3">
            <button class="ga-button fluid" v-nt-tooltip:right.end="`RIGHT-END<br>${p}`" @mouseenter="setAlign('right.end')">R-END</button>
          </div>

          <div class="column col-3">
            <button class="ga-button fluid" v-nt-tooltip:left.center="`LEFT-CENTER<br>${p}`" @mouseenter="setAlign('left.center')">L-CENTER</button>
          </div>
          <div class="column col-6"></div>
          <div class="column col-3">
            <button class="ga-button fluid" v-nt-tooltip:right.center="`RIGHT-CENTER<br>${p}`" @mouseenter="setAlign('right.center')">R-CENTER</button>
          </div>

          <div class="column col-3">
            <button class="ga-button fluid" v-nt-tooltip:left.start="`LEFT-START<br>${p}`" @mouseenter="setAlign('left.start')">L-START</button>
          </div>
          <div class="column col-6"></div>
          <div class="column col-3">
            <button class="ga-button fluid" v-nt-tooltip:right.start="`RIGHT-START<br>${p}`" @mouseenter="setAlign('right.start')">R-START</button>
          </div>

          <div class="column col-3">
            <button class="ga-button text fluid">Bottom | Left</button>
          </div>
          <div class="column col-6"  :style="{ 'textAlign': 'center' }">
            <button class="ga-button" v-nt-tooltip:bottom.end="`BOTTOM-END<br>${p}`" @mouseenter="setAlign('bottom.end')">B-END</button>
            <button class="ga-button" v-nt-tooltip:bottom="`BOTTOM-CENTER<br>${p}`" @mouseenter="setAlign('bottom.center')">B-CENTER</button>
            <button class="ga-button" v-nt-tooltip:bottom.start="`BOTTOM-START<br>${p}`" @mouseenter="setAlign('bottom.start')">B-START</button>
          </div>
          <div class="column col-3">
            <button class="ga-button text fluid">Buttom | Right</button>
          </div>
      </div>
    </div>
  </div>
  <CodeBlock :theme="theme" :code="codes.align" />
</WelcomeItem>
<WelcomeItem>
  <template #icon>
    <i class="xi-tab"></i>
  </template>
  <template #heading>
    Fix Crushed Position
    <p class="sub-title">설정된 tooltip의 위치 값을 컨텐츠가 viewport 밖으로 나가지 않도록 위치 조정.</p>
  </template>
  <div class="ga-segment border">
    <div class="contents">
      <button class="ga-button" @click="toggleEx">
        예제 보기
      </button>
    </div>
  </div>
</WelcomeItem>
<div v-if="showEx" class="fixed-wrap">
  <div class="fixed ga-card border attached center">
    <div class="header">정렬 보정 설정</div>
    <div class="contents">
      설정된 tooltip의 위치 값을 컨텐츠가 viewport 밖으로 나가지 않도록 위치 조정 합니다.
    </div>
    <div class="extra"><div class="ga-button small" @click="toggleEx">예제 닫기</div></div>
  </div>
  <div class="fixed top">
    <div class="contents">
      <button class="ga-button icon" v-nt-tooltip:top="`상단 정렬 보정`">
        <i class="fa fa-arrow-left"></i>
        Top -> Bottom 보정
      </button>
    </div>
  </div>
  <div class="fixed bottom">
    <div class="contents">
      <button class="ga-button icon" v-nt-tooltip:bottom="`하단 정렬 보정`">
        <i class="fa fa-arrow-left"></i>
        Bottom -> Top 보정
      </button>
    </div>
  </div>
  <div class="fixed left">
    <div class="contents">
      <button class="ga-button icon" v-nt-tooltip="`왼쪽 정렬 보정`">
        Center -> Start 보정
        <i class="fa fa-arrow-right"></i>
      </button>
    </div>
  </div>
  <div class="fixed right">
    <div class="contents">
      <button class="ga-button icon" v-nt-tooltip="`오른쪽 정렬 보정`">
        Center -> End 보정
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
.fixed-wrap {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
.fixed {
  position: fixed;
  &.top {
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  &.bottom {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  &.left {
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  &.right {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  &.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.ga-message {
  padding: 15px 20px;
  border-radius: 4px;
  background-color: #333;
  border: 1px solid #464646;
  color: #999;
  margin-bottom: 5px;
}
</style>