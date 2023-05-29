import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { routes } from './models'

const router = createBrowserRouter([
  {
    path: routes.Home.path,
    element: <App />,
  },
])

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
