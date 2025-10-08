import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import FeatureView from '@/views/FeatureView.vue'
import TeamView from '@/views/TeamView.vue'
import FAQView from '../views/FAQView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import PagesView from '@/views/PagesView.vue'
import LoginView from '@/views/LoginView.vue'
import ErrorNotFound from '../views/ErrorNotFound.vue'
import LoginLayout from '@/layouts/LoginLayout.vue'
import RegisterView from '@/views/RegisterView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import TestComponent from '@/components/admin/TestComponent.vue'
import UserAccountComponent from '@/components/users/UserAccountComponent.vue'
import UserSecurityComponent from '@/components/users/UserSecurityComponent.vue'
import UserBillingComponent from '@/components/users/UserBillingComponent.vue'
import UserNotificationsComponent from '@/components/users/UserNotificationsComponent.vue'
import UserConnectionsComponent from '@/components/users/UserConnectionsComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LoginLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: LoginView,
        },
        {
          path:'register',
          name:'register',
          component: RegisterView,
        },
        {
          path:'forgotpassword',
          name:'forgotpassword',
          component: ForgotPasswordView,
        }
      ],
    },
    {
      path: '/home',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/home/feature',
          name: 'feature',
          component: FeatureView,
        },
        {
          path: '/home/team',
          name: 'team',
          component: TeamView,
        },
        {
          path: '/home/faq',
          name: 'faq',
          component: FAQView,
        },
        {
          path: '/home/contactus',
          name: 'contactus',
          component: ContactUsView,
        },
        {
          path: '/home/pages',
          name: 'pages',
          component: PagesView,
        },
      ],
    },
    {
      path: '/admin',
      component: () => import('../layouts/AdminLayout.vue'),
      children: [
        {
          path:'/admin/test',
          name:'adminTest',
          component: TestComponent,
        },
        {
          path: '/admin/dashboard',
          name: 'adminDashboard',
          component: () => import('../views/admin/DashboardView.vue'),
        }
      ],
    },
    {
      path: '/user',
      component: () => import('../layouts/UserLayout.vue'),
      children: [
        {
          path:'/user/account',
          name:'userAccount',
          component: UserAccountComponent,
        },
        {
          path:'/user/security',
          name:'userSecurity',
          component: UserSecurityComponent,
        },
        {
          path:'/user/billing',
          name:'userBilling',
          component: UserBillingComponent,
        },
        {
          path:'/user/notifications',
          name:'userNotifications',
          component: UserNotificationsComponent,
        },
        {
          path:'/user/connections',
          name:'userConnections',
          component: UserConnectionsComponent,
        }
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: ErrorNotFound,
    },
  ],
})

export default router
