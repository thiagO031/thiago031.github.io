// impoortações
import Header from "./components/header/Header";
import Carta from "./pages/carta/Carta";
import Guia from "./pages/guia/Guia";
import Anjo from "./pages/anjo/Anjo";
import MainPage from "./pages/main_page/MainPage";

import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

// import './App.css'


// JSX
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      {/* <MainPage/> */}
        <Routes>
          {/* rota inicial/ ao abrir o projeto */}
          <Route path="//thiago031.github.io" element={<MainPage/>}></Route>

          {/* rota da navbar */}
          <Route path="/MainPage/thiago031.github.io" element={<MainPage />} />
          <Route path="/Carta/thiago031.github.io" element={<Carta />} />
          <Route path="/Guia/thiago031.github.io" element={<Guia />} />
          <Route path="/Anjo/thiago031.github.io" element={<Anjo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
