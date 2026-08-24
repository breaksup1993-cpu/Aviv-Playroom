import type { Category } from '../types/category'

// Home screen categories. Purely data — no React/UI concerns here, so this
// can later be swapped, expanded, or fed from a different game engine
// without touching any component.
export const categories: Category[] = [
  {
    id: 'numbers',
    nameHe: 'מספרים',
    image: '/assets/images/home/category-numbers.webp',
    colorText: '#1F4E79',
  },
  {
    id: 'transportation',
    nameHe: 'תחבורה',
    image: '/assets/images/home/category-transportation.webp',
    colorText: '#1F6B52',
  },
  {
    id: 'fruits-vegetables',
    nameHe: 'פירות וירקות',
    image: '/assets/images/home/category-fruits-vegetables.webp',
    colorText: '#8A6A1B',
  },
  {
    id: 'sports',
    nameHe: 'ספורט',
    image: '/assets/images/home/category-sports.webp',
    colorText: '#B14A24',
  },
]
