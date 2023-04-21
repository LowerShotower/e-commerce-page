import { FilterEnum, SortEnum } from '@/types'

export const sort = {
  [SortEnum.PopularFirst]: (a, b) => b.rating - a.rating,
  [SortEnum.UnpopularFirst]: (a, b) => a.rating - b.rating,
  [SortEnum.PriceLowToHigh]: (a, b) => a.price.usd - b.price.usd,
  [SortEnum.PriceHighToLow]: (a, b) => b.price.usd - a.price.usd,
}

export const filter = {
  [FilterEnum.AllBrands]: (sneakers) => sneakers,
  [FilterEnum.AllSizes]: (sneakers) => sneakers,
  [FilterEnum.AllColors]: (sneakers) => sneakers,
  [FilterEnum.AllPrices]: (sneakers) => sneakers,
  [FilterEnum.AllRatings]: (sneakers) => sneakers,
  [FilterEnum.ByBrand]: (sneakers, brand) =>
    sneakers.filter((s) => s.brand === brand),
  [FilterEnum.BySize]: (sneakers, size) =>
    sneakers.filter((s) => s.sizes.includes(size)),
  [FilterEnum.ByColor]: (sneakers, color) =>
    sneakers.filter((s) => s.colors?.includes(color)),
  [FilterEnum.ByPrice]: (sneakers, price) =>
    sneakers.filter((s) => s.price.usd === price),
  [FilterEnum.ByRating]: (sneakers, rating) =>
    sneakers.filter((s) => s.rating === rating),
  [FilterEnum.BySearch]: (sneakers, search) => {
    const searchRegex = new RegExp(search, 'i')
    return sneakers.filter((s) => searchRegex.test(s.name))
  },
  [FilterEnum.ByPriceRange]: (sneakers, priceRange) => {
    const [min, max] = priceRange
    return sneakers.filter((s) => s.price.usd >= min && s.price.usd <= max)
  },
}
