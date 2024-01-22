import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilDescription,
  cilNotes,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'الوثيقة رئيسية',
    to: '/dashboard',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: ' الوثائق فئة  1',
  },
  {
    component: CNavItem,
    name: 'إجراء استبدال مكفول',
    to: '/istibdalMakful',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'وثيقة',
    to: '/users',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'وثيقة',
    to: '/theme/typography',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Pharmacies',
  },
  {
    component: CNavGroup,
    name: 'وثيقة',
    to: '/pharmacies',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/pharmacies',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/pharmacies/addPharmacy',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'وثيقة',
  },
  {
    component: CNavItem,
    name: 'وثيقة',
    to: '/deliveries',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'وثيقة',
  },
  {
    component: CNavGroup,
    name: 'وثيقة',
    to: '/base',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'وثيقة',
    to: '/buttons',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'وثيقة',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'وثيقة',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'وثيقة',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
