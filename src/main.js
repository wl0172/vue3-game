import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'vant/lib/index.css'; // 全局引入vant样式
import { 
  ActionBar, 
  ActionBarIcon, 
  ActionBarButton, 
  Divider, 
  Popup, 
  Overlay, 
  Loading, 
  Dialog, 
  ContactCard, 
  Form, 
  AddressEdit, 
  AddressList, 
  Field, 
  CellGroup, 
  Cell, 
  SwipeCell, 
  Icon, 
  Stepper, 
  Card, 
  Checkbox, 
  CheckboxGroup, 
  Button, 
  Swipe, 
  SwipeItem, 
  PullRefresh,
  List, 
  Tab, 
  Tabs, 
  SubmitBar, 
  Toast, 
  Skeleton,
  NoticeBar
} from 'vant'


import VConsole from 'vconsole'
if (process.env.NODE_ENV !== 'prod') {
  new VConsole()
}

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.use(ActionBarButton)
  .use(ActionBarIcon)
  .use(ActionBar)
  .use(Divider)
  .use(Popup)
  .use(Overlay)
  .use(Loading)
  .use(Dialog)
  .use(Toast)
  .use(ContactCard)
  .use(Form)
  .use(AddressEdit)
  .use(AddressList)
  .use(Field)
  .use(CellGroup)
  .use(Cell)
  .use(SwipeCell)
  .use(Icon)
  .use(Stepper)
  .use(Card)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(PullRefresh)
  .use(List)
  .use(Tab)
  .use(Tabs)
  .use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Skeleton)
  .use(NoticeBar)

app.mount('#app')
