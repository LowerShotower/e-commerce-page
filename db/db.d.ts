export interface Db {
  sneakers: Sneaker[]
  filters: {
    [FilterEnum.ByBrand]: string[]
    [FilterEnum.BySize]: number[]
    [FilterEnum.ByColor]: Colors[]
    [FilterEnum.ByPrice]: number[]
    [FilterEnum.ByRating]: number[]
  }
}
