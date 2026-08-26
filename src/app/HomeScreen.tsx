import { useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import SettingsButton from '../components/SettingsButton'
import { categories } from '../content/categories'
import type { Category } from '../types/category'
import CategoryScreen from './CategoryScreen'
import './HomeScreen.css'

function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  if (selectedCategory) {
    return (
      <CategoryScreen
        category={selectedCategory}
        onBack={() => setSelectedCategory(null)}
      />
    )
  }

  return (
    <div className="home-screen">
      <header className="home-screen__header">
        <h1 className="home-screen__title">
          <img
            className="home-screen__logo"
            src="/assets/images/home/logo-title.webp"
            alt="המשחקייה של אביב"
          />
        </h1>
        <SettingsButton />
      </header>

      <main className="home-screen__content">
        <div className="home-screen__grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelect={setSelectedCategory}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default HomeScreen
