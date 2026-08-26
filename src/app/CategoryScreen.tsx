import type { Category } from '../types/category'
import NumbersGame from '../features/numbers/NumbersGame'
import './CategoryScreen.css'

interface CategoryScreenProps {
  category: Category
  onBack: () => void
}

function CategoryScreen({ category, onBack }: CategoryScreenProps) {
  return (
    <div className="category-screen">
      <button
        type="button"
        className="category-screen__back"
        aria-label="חזרה"
        onClick={onBack}
      >
        <img src="/assets/images/home/back.webp" alt="" aria-hidden="true" />
      </button>

      {category.id === 'numbers' ? (
        <NumbersGame />
      ) : (
        <main className="category-screen__content">
          <img className="category-screen__image" src={category.image} alt="" />
          <h1 className="category-screen__title">{category.nameHe}</h1>
          <p className="category-screen__message">המשחקים בדרך</p>
        </main>
      )}
    </div>
  )
}

export default CategoryScreen
