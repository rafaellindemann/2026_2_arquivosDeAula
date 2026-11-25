
import { useState } from 'react'
import { dadosClima } from './dadosClima'
import { codigosWmo } from './codigosWmo'
import './App.css'

function App() {
  const [busca, setBusca] = useState('')
  const [cidade, setCidade] = useState(null)

  function buscar() {
    const resultado = dadosClima.find(
      item => item.name.toLowerCase() === busca.toLowerCase()
    )

    setCidade(resultado)
  }

  return (
    <div className='app'>
      <div className="primeira">
        <p>⛅</p>
        <div className="coluna">
          <h1>Sol Chuva</h1>
          <p>Tempo certo, onde você estiver.</p>
        </div>

      </div>

      <input
        value={busca}
        onChange={e => setBusca(e.target.value)}
        placeholder="Digite o nome de uma cidade..."
      />

      <button onClick={buscar}>Buscar</button>

      {cidade && (
        <div>
          <h2>{cidade.name}</h2>
          <p>{cidade.current.temperature_2m} °C</p>
        </div>
      )}
    </div>
  )
}

export default App
