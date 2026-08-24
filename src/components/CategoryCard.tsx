import type { CSSProperties } from 'react'
import type { Category } from '../types/category'
import './CategoryCard.css'

interface CategoryCardProps {
  category: Category
}

function CategoryCard({ category }: CategoryCardProps) {
  const style = {
    '--label-text': category.colorText,
  } as CSSProperties

  return (
    <button
      type="button"
      className="category-tile"
      data-category={category.id}
      style={style}
    >
      <img className="category-tile__image" src={category.image} alt="" />
      <span className="category-tile__label">{category.nameHe}</span>
    </button>
  )
}

export default CategoryCard
