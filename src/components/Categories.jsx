import { useState } from "react"


function Categories() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [categories, setCategories] = useState(['All', 'Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'])

  const changeActiveIndex = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => changeActiveIndex(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Categories