import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/styles.css';
import { Header } from './componentes/Header'
import { Footer } from './componentes/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header ></Header>
    <App />
    <Footer></Footer>
  </React.StrictMode>,
)
