import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pager from './components/Pager'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pager current={3} total={100} limit={10} panelNumber={5} />
  </StrictMode>,
)
