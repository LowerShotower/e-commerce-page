import FilterSection from '@/components/FilterSection/FilterSection'
import Teasers from '@/components/Teasers/Teasers'
import Teaser from '@/components/Teaser/Teaser'
import { FilterEnum, Sneaker, SortEnum } from '@/types'
import OrderingSection from '@/components/OrderingSection/OrderingSection'
import SearchSection from '@/components/SearchSection/SearchSection'
import useSWR from 'swr'
import CircularProgress from '@mui/material/CircularProgress'
import { filterCheck, sortFuncs } from '@/utils'
import { useCallback, useState } from 'react'
import { debounce } from 'lodash'
import Link from 'next/link'

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Home() {
  const [search, setSearch] = useState<string>('')
  const [filters, setFilters] = useState<Partial<Record<FilterEnum, any>>>({
    [FilterEnum.ByPriceRange]: [0, 90],
    [FilterEnum.ByColor]: ['black', 'red', 'white', 'blue', 'gray', 'brown'],
  })
  const { data, error, isLoading } = useSWR(() => `/api/sneakers`, fetcher)
  const [sortMethod, setSortMethod] = useState()

  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearch(value)
    }, 200),
    [setSearch]
  )

  const handleOrderingChange = (sortFuncName) => {
    setSortMethod(sortFuncName)
  }

  const handleSearchChange = (value) => {
    debouncedSearch(value)
  }

  const handleFilterChange = (filters) => {
    setFilters(filters)
  }

  const filteredProducts = data
    ?.filter(filterCheck({ [FilterEnum.BySearch]: search, ...filters }))
    .sort(sortMethod && sortFuncs[sortMethod])
  if (error) return <div>{error.message}</div>
  return (
    <>
      <SearchSection onChange={handleSearchChange} />
      <OrderingSection onChange={handleOrderingChange} />
      <div className="flex flex-col md:flex-row">
        <div className="w-60 shrink-0 grow-0">
          <FilterSection onChange={handleFilterChange} defaultValue={filters} />
          {filteredProducts?.length !== undefined && (
            <p className="px-0">Total products: {filteredProducts?.length}</p>
          )}
        </div>
        {isLoading ? (
          <div className="flex grow-1 basis-full items-center justify-center">
            <CircularProgress color="inherit" size={50} />
          </div>
        ) : (
          <Teasers className="grow overflow-auto">
            {filteredProducts.map((sneaker: Sneaker) => {
              return (
                <Link
                  href={`/sneakers/${sneaker.id.toString()}`}
                  key={sneaker.id}
                >
                  <Teaser
                    className="h-full"
                    id={sneaker.id}
                    image={sneaker.image}
                    name={sneaker.name}
                    price={sneaker.price}
                    brand={sneaker.brand}
                    sizes={sneaker.sizes}
                    colors={sneaker.colors}
                    description={sneaker.description}
                    rating={sneaker.rating}
                  />
                </Link>
              )
            })}
          </Teasers>
        )}
      </div>
    </>
  )
}
