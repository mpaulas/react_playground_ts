import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
        {/* <Home
          titulo='Minha primeira postagem'
          texto='Texto da minha primeira postagem'
        />

        <Home
          titulo='Minha segunda postagem'
          texto='Texto da minha segunda postagem' 
        /> */}

        <Contador/>
        <Tarefa/>
    </>
  )
}

export default App
