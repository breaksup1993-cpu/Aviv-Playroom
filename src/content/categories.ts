import type { Category } from '../types/category'

// Home screen categories. Purely data — no React/UI concerns here, so this
// can later be swapped, expanded, or fed from a different game engine
// without touching any component.
export const categories: Category[] = [
  {
    id: 'numbers',
    nameHe: 'מספרים',
    image: '/assets/images/home/category-numbers.png',
    colorBg: 'rgba(214, 237, 255, 0.75)',
    colorText: '#1F4E79',
  },
  {
    id: 'transportation',
    nameHe: 'תחבורה',
    image: '/assets/images/home/category-transportation.png',
    colorBg: 'rgba(214, 244, 230, 0.75)',
    colorText: '#1F6B52',
  },
  {
    id: 'fruits-vegetables',
    nameHe: 'פירות וירקות',
    image: '/assets/images/home/category-fruits-vegetables.png',
    colorBg: 'rgba(255, 241, 214, 0.78)',
    colorText: '#8A6A1B',
  },
  {
    id: 'sports',
    nameHe: 'ספורט',
    image: '/assets/images/home/category-sports.png',
    colorBg: 'rgba(255, 226, 209, 0.78)',
    colorText: '#B14A24',
  },
]
