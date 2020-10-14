import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import ProductData from "./ProductsData"
import './index.css'



function App (){
  const productComponent = ProductData.map((item) => (
    <MainContent item={item} key={item.id} />
  ))
  return (
  <div>
    <Header />
    <div className="album py-5 bg-light">
    <div className="row">
    {productComponent}
    </div>
    
    </div>
    <Footer />
  </div>
  )
}

export default App