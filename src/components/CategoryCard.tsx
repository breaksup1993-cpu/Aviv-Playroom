import type { CSSProperties } from 'react'
import type { Category } from '../types/category'
import './CategoryCard.css'

interface CategoryCardProps {
  category: Category
}

function CategoryCard({ category }: CategoryCardProps) {
  const style = {
    '--card-bg': category.colorBg,
    '--card-text': category.colorText,
  } as CSSProperties

  return (
    <button type="button" className="category-card" style={style}>
      <span className="category-card__visual">
        <img src={category.image} alt="" />
      </span>
      <span className="category-card__label">{category.nameHe}</span>
    </button>
  )
}

export default CategoryCard
