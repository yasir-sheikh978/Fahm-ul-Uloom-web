import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.jsx'
import './index.css'

// Initialize once, globally, so data-aos elements animate correctly
// regardless of which route the user lands on first (not just Home).
AOS.init({ duration: 1000, once: true })

// After a new deployment, old chunk files no longer exist; if a lazy route
// fails to load because of that, reload once to pick up the fresh build.
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault()
  window.location.reload()
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
