import { lazy } from 'react'

type RouteName = 'login' | 'home' | 'adm' | 'users'

export type RouteDefinition = {
  name: RouteName
  path: string
  element: React.LazyExoticComponent<React.FC>
  protected?: boolean
  children?: RouteDefinition[]
}

export const routes: RouteDefinition[] = [
  {
    name: 'login',
    path: '/login',
    element: lazy(() => import('../pages/login-page')),
  },
  {
    name: 'home',
    path: '/',
    element: lazy(() => import('../pages/login-page')),
  },
]

export function route(name: RouteName, value?: string) {
  for (const parent of routes) {
    if (parent.name === name) {
      return parent.path.replace(/:\w+/, value || '')
    }
    for (const child of parent.children || []) {
      if (child.name === name) {
        return parent.path + child.path.replace(/:\w+/, value || '')
      }
    }
  }
  throw new Error('Route not found')
}
