import { FilterEnum, Filters, SortEnum } from '@/types'
import { intersection } from 'lodash'

export const sortFuncs = {
  [SortEnum.PopularFirst]: (a, b) => b.rating - a.rating,
  [SortEnum.UnpopularFirst]: (a, b) => a.rating - b.rating,
  [SortEnum.PriceLowToHigh]: (a, b) => a.price?.usd - b.price?.usd,
  [SortEnum.PriceHighToLow]: (a, b) => {
    return b?.price.usd - a?.price.usd
  },
}

export const filterFunc = {
  [FilterEnum.ByColor]: (sneaker, colors) =>
    !!intersection(sneaker.colors, colors).length,
  [FilterEnum.ByPriceRange]: (sneaker, priceRange) => {
    const [min, max] = priceRange
    return sneaker.price.usd >= min && sneaker.price.usd <= max
  },
  [FilterEnum.BySearch]: (sneaker, search) => {
    if (!search) return true
    const searchRegex = new RegExp(search, 'i')
    return searchRegex.test(sneaker.name)
  },
}

export const filterCheck = (filters: Partial<Filters>) => (sneaker) => {
  return Object.keys(filters).every((key) => {
    switch (key) {
      case FilterEnum.ByPriceRange:
        return filterFunc[key](sneaker, filters[key])
      case FilterEnum.ByColor:
        return filterFunc[key](sneaker, filters[key])
      case FilterEnum.BySearch:
        return filterFunc[key](sneaker, filters[key])
      default:
    }
  })
}
