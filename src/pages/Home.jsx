import { useContext, useEffect, useState } from "react"
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import { SearchContext } from "../App"
import { useSelector, useDispatch } from "react-redux"
import { setCategoryId, setSortOrder, setSortType } from "../redux/slices/filterSlice"

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { searchValue } = useContext(SearchContext)
  const categoryId = useSelector((state) => state.filters.categoryId)
  const sortOrder = useSelector((state) => state.filters.sortOrder)
  const sortType = useSelector((state) => state.filters.sortType)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    const category = categoryId ? `&category=${categoryId}` : ''
    const search = searchValue && `&search=${searchValue}`

    fetch(`https://644d52f7cfdddac970a26574.mockapi.io/pizzas?${category}&sortBy=${sortType.type}&order=${sortOrder}${search}`)
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType, sortOrder, searchValue])


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => dispatch(setCategoryId(id))}
        />
        <Sort
          value={sortType}
          onClickSort={(obj) => dispatch(setSortType(obj))}
          orderBy={sortOrder}
          setOrderBy={(str) => dispatch(setSortOrder(str))}
        />
      </div>
      <h2 className="content__title">{pizzas.length ? 'All pizzas' : 'Not Found'}</h2>
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