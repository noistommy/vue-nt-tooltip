let ref = null
const showTooltip = (el, binding) => {
  if (binding.value === '') return
  if (ref) hideTooltip()
  const ttEl = document.createElement('div')

  setAttributeRef(ttEl, binding)
  document.body.append(ttEl)
  setPositionRef(el, binding, ttEl)
}

const setAttributeRef = (reel, binding) => {
  reel.innerHTML = typeof binding.value === 'string' ? binding.value : binding.value.contents
  reel.classList.add('ga-tooltip', 'theme-dark')
  ref = reel
}

const setPositionRef = (el, binding, ref) => {
  const w = window.innerWidth
  const h = window.innerHeight
  let dir = binding.arg || 'top'
  let align = 'center'
  const ePos = el.getBoundingClientRect()
  const refPos = ref.getBoundingClientRect()
  let tPos = ePos.top - refPos.height - 10
  let bPos = ePos.top + ePos.height + 10
  if (dir === 'top' && tPos < 0) {
    dir = 'bottom'
  }
  if (dir === 'bottom' && h - ePos.bottom - (10 + refPos.height) < 0) {
    dir = 'top'
  }
  ref.style.top = dir === 'top' ? tPos + 'px' : bPos + 'px'
  const cPos = ePos.left + ePos.width / 2 - refPos.width / 2
  const endPos = ePos.right - refPos.width
  if (align === 'center' && cPos < 0) {
    align = 'start'
  }
  if (w - ePos.right - refPos.width / 2 < 0) {
    align = 'end'
  }
  ref.style.left = align === 'center' ? cPos + 'px' : align === 'end' ? endPos + 'px' : ePos.left + 'px'
  ref.classList.add(`${dir}-${align}`)
}

const hideTooltip = () => {
  if (ref) {
    ref.remove()
  }
}
const tooltipDirective = () => {
  let show
  let hide
  const createEvent = (el, binding) => {
    show = () => {
      showTooltip(el, binding)
    }
    hide = () => {
      hideTooltip()
    }
    el.addEventListener('mouseenter', show)
    el.addEventListener('mouseleave', hide)
  }
  const removeEvent = el => {
    if (show && hide) {
      hide()
      el.removeEventListener('mouseenter', show)
      el.removeEventListener('mouseleave', hide)
    }
  }
  return {
    // v-ga-tooltip:arg.modifiers
    // created(el, binding, vnode, prevVnode) {},
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
