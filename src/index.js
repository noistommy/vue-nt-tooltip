import NtTooltip from './tooltip'
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
export default {
  install(app, options = {}) {
    const extendOptions = { ...defaultOptions, ...options }
    app.directive('nt-tooltip', NtTooltip(extendOptions))
  }
}
