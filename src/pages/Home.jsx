import { useEffect, useState } from "react"
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState(
    { name: 'popularity', type: 'rating' }
  )


  useEffect(() => {
    setIsLoading(true)
    fetch(`https://644d52f7cfdddac970a26574.mockapi.io/pizzas?sortBy=${sortType.type}&order=desc
      &${categoryId && `&category=${categoryId}`}
    `)
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType])



  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onClickSort={(obj) => setSortType(obj)} />
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