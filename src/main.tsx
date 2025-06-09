import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import { RouteDefinition, routes } from './routes/routes'

const root = createRoot(document.getElementById('root') as HTMLElement)
function render(r: RouteDefinition) {
  return (
    <Suspense>
      <r.element />
    </Suspense>
  )
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map((r) => (
          <Route key={r.name} path={r.path} element={render(r)}>
            {r.children?.map((c) => (
              <Route key={c.name} path={c.path} element={render(c)} />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
