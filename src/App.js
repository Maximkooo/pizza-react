import React from "react"
import './scss/app.scss'
import Header from './components/Header'
import Sort from './components/Sort'
import Categories from './components/Categories'
import PizzaBlock from './components/PizzaBlock'
import pizzas from './assets/pizzas.json'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {pizzas.map(item => (
              <PizzaBlock {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App