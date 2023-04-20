export enum SortEnum {
  PopularFirst = 'popular-first',
  UnpopularFirst = 'unpopular-first',
  PriceLowToHigh = 'price-low-to-high',
  PriceHighToLow = 'price-high-to-low',
}

export interface Sneaker {
  id: number
  image: string
  price: {
    usd: number
  }
  brand: string
  name: string
  sizes: number[]
  colors: string[] | null
  description: string
  rating: number
}
