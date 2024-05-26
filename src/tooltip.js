let ref = null
let opt = {}
const showTooltip = (el, binding) => {
  if (binding.value === '') return
  if (ref) hideTooltip()
  const ttEl = document.createElement('div')

  setAttributeRef(ttEl, binding)
  document.body.append(ttEl)
  setPositionRef(el, binding, ttEl)
}

const setOptionsRel = (options) => {
  opt = options
}

const setAttributeRef = (reel, binding) => {
  reel.innerHTML = typeof binding.value === 'string' ? binding.value : binding.value.contents
  reel.classList.add('base-tooltip', opt.customClass , `theme-${opt.theme}`, opt.size)
  reel.style.maxWidth = opt.maxWidth + 'px'
  reel.style.textAlign = binding.value.align || opt.textAlign
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
    ref.style.left = align === 'center' ? cPos + 'px' : align === 'end' ? endPos + 'px' : ePos.left + 'px'
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
      } else {
        showTooltip(el, binding)
      }
      isShow = !isShow
    }
    if (options.trigger === 'click') {
      el.addEventListener('click', toggle)
    }
    if (options.trigger === 'hover') {
      el.addEventListener('mouseenter', show)
      el.addEventListener('mouseleave', hide)
    }
  }
  const removeEvent = el => {
    if (show && hide) {
      hide()
      if (options.trigger === 'click') {
        el.removeEventListener('click', toggle)
      }
      if (options.trigger === 'hover') {
        el.removeEventListener('mouseenter', show)
        el.removeEventListener('mouseleave', hide)
      }
    }
  }
  return {
    // v-ga-tooltip:arg.modifiers
    created(el, binding) {
      removeEvent(el)
      setOptionsRel(options)
    },
    // 엘리먼트가 mount 되기 전 호출 -> bind
    // beforeMount(el, binding) {
    //   console.log(binding, options)
    // },
    // 엘리먼트가 mount 된 후 호출 -> inserted
    mounted(el, binding) {
      createEvent(el, binding)
    },
    // parent component 가 업데이트 되기 전 호출
    // beforeUpdate(el) {
    // },
    // parent, child component 가 업데이트 된 후 노출
    updated(el, binding) {
      // hide()
      // removeEvent(el)
      if (binding.value !== binding.oldValue) {
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
