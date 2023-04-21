import db from 'db/db'

export enum SortEnum {
  PopularFirst = 'popular-first',
  UnpopularFirst = 'unpopular-first',
  PriceLowToHigh = 'price-low-to-high',
  PriceHighToLow = 'price-high-to-low',
}

export enum FilterEnum {
  AllBrands = 'all-brands',
  AllSizes = 'all-sizes',
  AllColors = 'all-colors',
  AllPrices = 'all-prices',
  AllRatings = 'all-ratings',
  ByBrand = 'by-brand',
  BySize = 'by-size',
  ByColor = 'by-color',
  ByPrice = 'by-price',
  ByRating = 'by-rating',
  BySearch = 'by-search',
  ByPriceRange = 'by-price-range',
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

export interface Filters {
  [FilterEnum.ByColor]: (typeof db.filters)[FilterEnum.ByColor][]
  [FilterEnum.ByPriceRange]: number[]
  [FilterEnum.BySearch]: string
  [FilterEnum.ByBrand]: string[]
  [FilterEnum.BySize]: number[]
}

export type ButtonVariant = 'text' | 'outlined' | 'contained'
