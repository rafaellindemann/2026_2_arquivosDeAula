
import { useState } from 'react'
import { dadosClima } from './dadosClima'
import { codigosWmo } from './codigosWmo'

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
    <div>
      <h1>Sol Chuva</h1>

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
