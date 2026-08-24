import type { Category } from '../types/category'

// Home screen categories. Purely data — no React/UI concerns here, so this
// can later be swapped, expanded, or fed from a different game engine
// without touching any component.
export const categories: Category[] = [
  {
    id: 'numbers',
    nameHe: 'מספרים',
    image: '/assets/images/categories/numbers.svg',
    colorBg: '#DCEEFC',
    colorText: '#1F4E79',
  },
  {
    id: 'transportation',
    nameHe: 'תחבורה',
    image: '/assets/images/categories/transportation.svg',
    colorBg: '#DFF4EC',
    colorText: '#1F6B52',
  },
  {
    id: 'fruits-vegetables',
    nameHe: 'פירות וירקות',
    image: '/assets/images/categories/fruits-vegetables.svg',
    colorBg: '#FDF3D9',
    colorText: '#8A6A1B',
  },
  {
    id: 'sports',
    nameHe: 'ספורט',
    image: '/assets/images/categories/sports.svg',
    colorBg: '#FBE4D4',
    colorText: '#B14A24',
  },
]
