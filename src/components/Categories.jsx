
function Categories({ value, onClickCategory }) {
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed']

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={value === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Categories