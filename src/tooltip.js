let ref = null
let opt = {}
const showTooltip = (el, binding) => {
  if (binding.value === '') return
  
  if (ref) hideTooltip()
  const ttEl = document.createElement('div')

  setAttributeRef(ttEl, binding)
  if (binding.value.self) {
    el.append(ttEl)
  } else {
    document.body.append(ttEl)
  }
  setPositionRef(el, binding, ttEl)
}

const setOptionsRel = (binding, options) => {
  opt = options
  binding.opt = {}
  binding.opt.trigger = binding.value.trigger || 'hover'
  binding.opt.isUse = binding.value.isUse === undefined ? opt.isUse : binding.value.isUse
}

const setAttributeRef = (reel, binding) => {
  reel.innerHTML = typeof binding.value === 'object' ? binding.value.contents : binding.value
  reel.classList.add('base-tooltip', opt.customClass , `theme-${binding.value?.theme || opt.theme}`, opt.size)
  reel.style.maxWidth = binding.value.size ? binding.value.size + 'px' : opt.maxWidth + 'px'
  if (binding.value.padding) {
    reEl.style.padding = binding.value.padding
  }
  reel.style.textAlign = binding.value.textAlign ? binding.value.textAlign : opt.textAlign
  ref = reel
}

const setPositionRef = (el, binding, ref) => {
  const w = window.innerWidth
  const h = window.innerHeight
  let dir = binding.arg || 'top'
  let align = 'center'
  if (Object.keys(binding.modifiers).length > 0) {
    align = Object.keys(binding.modifiers)[0]
  }
  const ePos = el.getBoundingClientRect()
  const refPos = ref.getBoundingClientRect()

  const offset = opt.offset || 10
  const alignOffset = binding.value.offset || 0

  let tPos = ePos.top - refPos.height - offset
  let bPos = ePos.bottom + offset

  let lPos = ePos.left - (refPos.width + offset)
  let rPos = ePos.right + offset

  if (dir === 'top' && tPos < 0) dir = 'bottom'
  if (dir === 'bottom' && h - (bPos + refPos.height) < 0) dir = 'top'

  if (dir === 'left' && lPos < 0) dir = 'right'
  if (dir === 'right' && w - (rPos + refPos.width) < 0) dir = 'left'
  
  if (dir === 'top' || dir === 'bottom') {
    ref.style.top = dir === 'top' ? tPos + 'px' : bPos + 'px'
    const cPos = ePos.left + ePos.width / 2 - refPos.width / 2
    const endPos = ePos.right - refPos.width
    if (ePos.width >= refPos.width ) {
      align = 'center'
    } else {
      if (align === 'center' && cPos < 0) {
        align = 'start'
      }
      if (w - ePos.right - (refPos.width / 2 - ePos.width / 2) < 0) {
        align = 'end'
      }
    }
    ref.style.left = align === 'center' ? cPos + 'px' : align === 'end' ? alignOffset + endPos + 'px' : alignOffset + ePos.left + 'px'
  } else {
    ref.style.left = dir === 'left' ? `${lPos}px` : `${rPos}px`
    const cPos = ePos.top + ePos.height / 2 - refPos.height / 2
    const endPos = ePos.bottom - refPos.height

    if (ePos.height >= refPos.height) {
      align='center'
    } else {
      if (align === 'center' && cPos < 0) {
        align = 'start'
      }
      if (w - ePos.right - (refPos.width / 2 - ePos.width / 2) < 0) {
        align = 'end'
      }
    }
    ref.style.top = align === 'center' ? cPos + 'px' : align === 'end' ? endPos + 'px' : ePos.top + 'px'

  }

  ref.classList.add(`${dir}-${align}`)
}

const hideTooltip = () => {
  if (ref) {
    ref.remove()
  }
}

const isBindingValueChanged = (newVal, oldVal) => {
  // 둘 다 null/undefined면 변경 없음
  if (!newVal && !oldVal) return false
  // 하나만 null/undefined면 변경 있음
  if (!newVal || !oldVal) return true
  
  // 둘 다 문자열이면 직접 비교
  if (typeof newVal === 'string' && typeof oldVal === 'string') {
    return newVal !== oldVal
  }
  
  // 하나는 문자열, 하나는 객체면 변경 있음
  if (typeof newVal !== typeof oldVal) return true
  
  // 둘 다 객체면 주요 속성 비교
  if (typeof newVal === 'object' && typeof oldVal === 'object') {
    const keys = ['contents', 'trigger', 'theme', 'isUse', 'self', 'size', 'padding', 'textAlign', 'offset']
    for (const key of keys) {
      if (newVal[key] !== oldVal[key]) {
        return true
      }
    }
    return false
  }
  
  return newVal !== oldVal
}

const tooltipDirective = (options) => {
  let show
  let hide
  let toggle
  let isShow = false
  const createEvent = (el, binding) => {
    show = () => {
      showTooltip(el, binding)
      isShow = true
    }
    hide = () => {
      hideTooltip()
      isShow = false
    }
    toggle = () => { 
      if (isShow) {
        hideTooltip()
        isShow = false
      } else {
        showTooltip(el, binding)
        isShow = true
      }
      console.log(isShow)
    }
    const trigger = binding.value?.trigger || options.trigger
    if (trigger === 'click') {
      el.addEventListener('click', toggle)
    }
    if (trigger === 'hover') {
      el.addEventListener('mouseenter', show)
      el.addEventListener('mouseleave', hide)

      el.addEventListener('touchstart', show)
      el.addEventListener('touchend', hide)
    }
  }
  const removeEvent = el => {
    if (show && hide) {
      hide()
      el.removeEventListener('click', toggle)
      
      el.removeEventListener('mouseenter', show)
      el.removeEventListener('mouseleave', hide)
      el.removeEventListener('touchstart', show)
      el.removeEventListener('touchend', hide)
    }
  }
  return {
    // v-ga-tooltip:arg.modifiers
    created(el, binding) {
      removeEvent(el)
      setOptionsRel(binding, options)
    },
    // 엘리먼트가 mount 되기 전 호출 -> bind
    // beforeMount(el, binding) {
    //   console.log(binding, options)
    // },
    // 엘리먼트가 mount 된 후 호출 -> inserted
    mounted(el, binding) {
      if (!binding.opt.isUse) return
      createEvent(el, binding)
    },
    // parent component 가 업데이트 되기 전 호출
    // beforeUpdate(el) {
    // },
    // parent, child component 가 업데이트 된 후 노출
    updated(el, binding) {
      removeEvent(el)
      if (isBindingValueChanged(binding.value, binding.oldValue)) { 
        createEvent(el, binding)
      }
    },
    // parent component 가 unmount 되기 전 호출
    // beforeUnmount(el, binding, vnode, prevVnode) {},
    // parent component 가 unmount 된 후 호출 -> unbind
    unmounted(el) {
      // hide()
      removeEvent(el)
    }
  }
}

export default tooltipDirective
