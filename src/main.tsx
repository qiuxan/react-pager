import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pager from './components/Pager'
import PageContainer from './components/PageContainer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageContainer />
  </StrictMode>,
)
