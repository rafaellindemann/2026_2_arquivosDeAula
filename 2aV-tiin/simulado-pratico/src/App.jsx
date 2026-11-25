
import { useState } from 'react'

function App() {
  const [cidade, setCidade] = useState('')
  const [clima, setClima] = useState(null)

  async function buscar() {
    const resposta1 = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}`
    )

    const dados1 = await resposta1.json()

    const latitude = dados1.results[0].latitude
    const longitude = dados1.results[0].longitude

    const resposta2 = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
    )

    const dados2 = await resposta2.json()

    setClima(dados2.current)
  }

  return (
    <div>
      <h1>Sol Chuva</h1>

      <input
        placeholder="Digite uma cidade"
        value={cidade}
        onChange={e => setCidade(e.target.value)}
      />

      <button onClick={buscar}>Buscar</button>

      {clima && (
        <div>
          <p>Temperatura: {clima.temperature_2m} °C</p>
          <p>Umidade: {clima.relative_humidity_2m} %</p>
          <p>Vento: {clima.wind_speed_10m} km/h</p>
        </div>
      )}
    </div>
  )
}

export default App
