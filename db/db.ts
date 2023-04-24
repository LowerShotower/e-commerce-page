import { Db } from './db.d'
import { FilterEnum } from '@/types'

const db: Db = {
  filters: {
    [FilterEnum.ByColor]: ['black', 'red', 'white', 'blue', 'gray', 'brown'],
    [FilterEnum.ByPriceRange]: [0, 50],
  },
  sneakers: [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/14525666/pexels-photo-14525666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 90,
      },
      brand: 'Vans',
      name: 'ClassicVN1',
      sizes: [33, 34],
      colors: ['red', 'white'],
      description: 'description',
      rating: 2,
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 110,
      },
      brand: 'Nike',
      name: 'ClassicNK1',
      sizes: [33, 34],
      colors: ['white', 'blue'],
      description: 'description',
      rating: 4,
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 120,
      },
      brand: 'Vans',
      name: 'ClassicVN2',
      sizes: [33, 34],
      colors: ['brown', 'gray'],
      description: 'description',
      rating: 3,
    },
    {
      id: 4,
      image:
        'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 800,
      },
      brand: 'Puma',
      name: 'ClassicPM1',
      sizes: [33, 34],
      colors: ['gray', 'white'],
      description: 'Lorem ipsum dolor sit amet.',
      rating: 3,
    },
    {
      id: 5,
      image:
        'https://images.pexels.com/photos/14525666/pexels-photo-14525666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 10,
      },
      brand: 'Puma',
      name: 'ClassicPM2',
      sizes: [33, 34],
      colors: ['black', 'red'],
      description: 'description',
      rating: 4,
    },
    {
      id: 6,
      image:
        'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 130,
      },
      brand: 'Vans',
      name: 'ClassicVN3',
      sizes: [33, 34],
      colors: ['gray', 'black'],
      description: 'description',
      rating: 3,
    },
    {
      id: 7,
      image:
        'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 70,
      },
      brand: 'Vans',
      name: 'ClassicVN1',
      sizes: [33, 34],
      colors: ['brown', 'black'],
      description: 'description',
      rating: 5,
    },
    {
      id: 8,
      image:
        'https://images.pexels.com/photos/14525666/pexels-photo-14525666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 60,
      },
      brand: 'Adidas',
      name: 'ClassicAD1',
      sizes: [33, 34],
      colors: ['red', 'white'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et .',
      rating: 2,
    },
    {
      id: 9,
      image:
        'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 110,
      },
      brand: 'Vans',
      name: 'ClassicVN1',
      sizes: [33, 34],
      colors: ['white', 'black'],
      description: 'description',
      rating: 4,
    },
    {
      id: 10,
      image:
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 65,
      },
      brand: 'Reebok',
      name: 'ClassicRB1',
      sizes: [33, 34],
      colors: ['blue', 'red'],
      description: 'Lorem ipsum dolor sit amet, consectetu.',
      rating: 3,
    },
    {
      id: 11,
      image:
        'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 75,
      },
      brand: 'Vans',
      name: 'ClassicVN1',
      sizes: [33, 34],
      colors: ['gray', 'white'],
      description: 'description',
      rating: 3,
    },
    {
      id: 12,
      image:
        'https://images.pexels.com/photos/14525666/pexels-photo-14525666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 15,
      },
      brand: 'Vans',
      name: 'ClassicVN1',
      sizes: [33, 34],
      colors: ['blue', 'black'],
      description: 'description',
      rating: 4,
    },
    {
      id: 13,
      image:
        'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 13,
      },
      brand: 'Vans',
      name: 'ClassicVN1',
      sizes: [33, 34],
      colors: ['gray', 'black'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et imperdiet est, non vulputate mauris.',
      rating: 3,
    },
    {
      id: 14,
      image:
        'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 10,
      },
      brand: 'Vans',
      name: 'ClassicVN1',
      sizes: [33, 34],
      colors: ['red', 'blue'],
      description: 'Lorem ipsum dolor sit amet, consectetur .',
      rating: 5,
    },

    {
      id: 100,
      image:
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 65,
      },
      brand: 'Reebok',
      name: 'ClassicRB1',
      sizes: [33, 34],
      colors: ['blue', 'red'],
      description: 'Lorem ipsum dolor sit amet, consectetu.',
      rating: 3,
    },
    {
      id: 110,
      image:
        'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 75,
      },
      brand: 'Vans',
      name: 'ClassicVN1',
      sizes: [33, 34],
      colors: ['gray', 'white'],
      description: 'description',
      rating: 3,
    },
    {
      id: 120,
      image:
        'https://images.pexels.com/photos/14525666/pexels-photo-14525666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 15,
      },
      brand: 'Vans',
      name: 'ClassicVN1',
      sizes: [33, 34],
      colors: ['blue', 'black'],
      description: 'description',
      rating: 4,
    },
    {
      id: 130,
      image:
        'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 13,
      },
      brand: 'Vans',
      name: 'ClassicVN1',
      sizes: [33, 34],
      colors: ['gray', 'black'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et imperdiet est, non vulputate mauris.',
      rating: 3,
    },
    {
      id: 140,
      image:
        'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: {
        usd: 10,
      },
      brand: 'Vans',
      name: 'ClassicVN1',
      sizes: [33, 34],
      colors: ['red', 'blue'],
      description: 'Lorem ipsum dolor sit amet, consectetur .',
      rating: 5,
    },
  ],
}

export default db
