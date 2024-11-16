import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Card(props) {
  return (
    <div className='my-style'>
      <h2>{props.name}</h2>
      <img 
      src={props.img}
      alt="apple_image" 
      style={{ width: '150px', height: '150px' }}
      />
      <p>Harga: {props.harga}</p>
      <p>Stok: {props.stok}</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1>Toko Buah</h1>
      <Card 
      name="Apel"
      img="https://i.pinimg.com/736x/26/d2/92/26d2923436398be635f0a398c5e28e46.jpg"
      harga="15000"
      stok="15"
      />

      <Card 
      name="Jeruk"
      img="https://i.pinimg.com/736x/79/63/68/7963688e10248a88cd574b9ec4cab3cb.jpg"
      harga="10000"
      stok="12"
      />

      <Card 
      name="Mangga"
      img="https://i.pinimg.com/736x/08/8e/ae/088eaea64cf379c3c7d062dbcc0b1749.jpg"
      harga="12000"
      stok="10"
      />
    </div>
  </React.StrictMode>
)
