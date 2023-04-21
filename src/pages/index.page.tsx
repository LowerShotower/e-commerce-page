import FilterSection from '@/components/FilterSection/FilterSection'
import Teasers from '@/components/Teasers/Teasers'
import Teaser from '@/components/Teaser/Teaser'
import { Sneaker } from '@/types'
import OrderingSection from '@/components/OrderingSection/OrderingSection'
import SearchSection from '@/components/SearchSection/SearchSection'
import useSWR from 'swr'
import CircularProgress from '@mui/material/CircularProgress'
import { Paper } from '@mui/material'

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
  const handleOrderingChange = (data) => {
    console.log('sdf', data)
  }

  const { data, error, isLoading } = useSWR(() => `/api/sneakers`, fetcher)
  console.log('LOADING', isLoading)
  if (error) return <div>{error.message}</div>

  const handleSearchChange = (data) => {
    console.log(data)
  }

  return (
    <>
      <SearchSection onChange={handleSearchChange} />
      <OrderingSection onOrderingChange={handleOrderingChange} />
      <div className="flex">
        <FilterSection className="w-60 shrink-0 grow-0" />
        {isLoading ? (
          <div className="flex grow-1 basis-full items-center justify-center">
            <CircularProgress color="inherit" size={50} />
          </div>
        ) : (
          <Teasers className="grow overflow-auto">
            {data?.map((sneaker: Sneaker) => {
              return (
                <div key={sneaker.id}>
                  <Teaser
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
                </div>
              )
            })}
          </Teasers>
        )}
      </div>
    </>
  )
}
