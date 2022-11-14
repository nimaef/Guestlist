import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventView from '../views/EventView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import forgotPasswordView from '../views/forgotPasswordView.vue'
import BaseModal from '../components/UI/BaseModal.vue'
import privAndSecSettings from '../views/PrivAndSecView.vue'
import AboutAppView from '../views/AboutAppView.vue'
import AccountSettingsView from '../views/AccountSettingsView.vue'
import accountSettingsEdit from '../views/AccountEditView.vue'
import FeedbackAndSuppView from '../views/FeedbackAndSuppView.vue'
import SendFeedbackView from '../views/SendFeedbackView.vue'
import BaseNewEventButton from '../components/UI/BaseNewEventButton.vue'
import NewEventView from '../views/NewEventView.vue'
import { data } from 'autoprefixer'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/event',
      name: 'event',
      component: EventView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: forgotPasswordView
    },
    {
      path: '/settingsModal',
      name: 'settingsModal',
      component: BaseModal
    },
    {
      path: '/privAndSecSettings',
      name: 'privAndSecSettings',
      component: privAndSecSettings
    },
    {
      path: '/accountSettings',
      name: 'accountSettings',
      component: AccountSettingsView
    },
    {
      path: '/accountSettingsEdit',
      name: 'accountSettingsEdit',
      component: accountSettingsEdit
    },
    {
      path: '/aboutApp',
      name: 'aboutApp',
      component: AboutAppView
    },
    {
      path: '/Support',
      name: 'Support',
      component: FeedbackAndSuppView
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: SendFeedbackView
    },
    {
      path: '/NewEvent',
      name: 'NewEvent',
      component: NewEventView
    },

  ]
})



export default router

