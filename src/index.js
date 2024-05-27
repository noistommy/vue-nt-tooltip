import Tooltip from './tooltip'
import Tooltip2 from './tooltip_v2'
import './tooltip.css'
const defaultOptions = {
  trigger: 'hover',
  maxWidth: 200,
  size: 'normal',
  theme: 'dark',
  direction: 'top',
  alignment: 'center',
  transition: 'linear',
  textAlign: 'left',
  offset: 10,
  customClass: 'ga-tooltip'
}
export const NtTooltip = {
  install(app, options = {}) {
    const extendOptions = { ...defaultOptions, ...options }
    app.directive('nt-tooltip', Tooltip(extendOptions))
  }
}

export const NtTooltip2 = {
  install(app, options = {}) {
    const extendOptions = { ...defaultOptions, ...options }
    app.directive('nt-tooltip', Tooltip2(extendOptions))
  }
}
