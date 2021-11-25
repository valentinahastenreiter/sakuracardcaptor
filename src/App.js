import Cards from './components/Cards'
import './components/cards.css'
import './App.css'
import Titulo from './components/Titulo'

function App() {
  return (
    <div>
      <Titulo
        titulo="Cartas Clow"
        subtitulo="Meu Primeiro Projeto React do Zero"
        imagem="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfkviFy0Z6_sQZ4mpIctWQeoa_tZCIWxLpmapnnu39bkes33nmE2GKt0m6y67kAtGLttmXIdwyi4-WD3REY2GMdDAz4uGFYzmHAO.png?r=598"
      />
      <Cards />
    </div>
  )
}

export default App
