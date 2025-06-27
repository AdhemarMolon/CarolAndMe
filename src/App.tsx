import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // Ou './index.css' se você moveu o css para lá

function App() {
  const [count, setCount] = useState(0)

  return (
    // Adicionei algumas classes Tailwind aqui
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">
        Olá, React com Tailwind!
      </h1>
      <div className="flex gap-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs text-lg text-gray-700 mt-8">
        Clique nos logos do Vite e React para saber mais
      </p>
      <div className="card mt-6 p-6 bg-white rounded-lg shadow-lg">
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-sm text-gray-500 mt-2">
          Edite <code>src/App.tsx</code> e salve para testar HMR
        </p>
      </div>
    </div>
  )
}

export default App