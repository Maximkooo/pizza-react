import { useEffect, useState } from "react"
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://644d52f7cfdddac970a26574.mockapi.io/pizzas')
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      })
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {
          isLoading ?
            [...new Array(6)].map((_, index) => <Skeleton key={index} />) :
            pizzas.map(item => <PizzaBlock {...item} key={item.id} />)}
      </div>
    </div>
  )
}

export default Home