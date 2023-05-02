import { useEffect, useState } from "react"
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [sortOrder, setSortOrder] = useState('desc')
  const [sortType, setSortType] = useState(
    { name: 'popularity', type: 'rating' }
  )


  useEffect(() => {
    setIsLoading(true)
    const category = categoryId && `&category=${categoryId}`

    fetch(`https://644d52f7cfdddac970a26574.mockapi.io/pizzas?${category}&sortBy=${sortType.type}&order=${sortOrder}`)
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType, sortOrder])



  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sort
          value={sortType}
          onClickSort={(obj) => setSortType(obj)}
          orderBy={sortOrder}
          setOrderBy={(str) => setSortOrder(str)}
        />
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