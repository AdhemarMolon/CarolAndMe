import React from 'react' // Adicionado React para caso haja JSX no main.tsx
import { createRoot } from 'react-dom/client'
import Index from './pages/index' // <--- Corrigido o caminho do import para usar barras normais e caminho relativo
import './index.css' // Permanece importando seu CSS principal com Tailwind

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Index /> {/* <--- Mudei de <App /> para <Index /> */}
  </React.StrictMode>,
)