import { createApp } from 'vue'
import './style.css'
import './frogui.css'
import App from './App.vue'
const app = createApp(App)

import NtTooltip from '../../src'

app.use(NtTooltip, {
    trigger: 'hover',
    maxWidth: 200,
    size: 'normal',
    theme: 'light',
    direction: 'top',
    alignment: 'center',
    transition: 'line'
})
app.mount('#app')
