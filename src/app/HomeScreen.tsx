import CategoryCard from '../components/CategoryCard'
import SettingsButton from '../components/SettingsButton'
import { categories } from '../content/categories'
import './HomeScreen.css'

function HomeScreen() {
  return (
    <div className="home-screen">
      <header className="home-screen__header">
        <h1 className="home-screen__title">
          <span className="home-screen__title-part home-screen__title-part--blue">
            המשחקייה
          </span>{' '}
          <span className="home-screen__title-part home-screen__title-part--coral">
            של אביב
          </span>
        </h1>
        <SettingsButton />
      </header>

      <main className="home-screen__content">
        <div className="home-screen__grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default HomeScreen
