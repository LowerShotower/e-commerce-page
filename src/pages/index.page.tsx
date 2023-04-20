import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import FilterSection from '@/components/FilterSection/FilterSection'
import Teasers from '@/components/Teasers/Teasers'
import Teaser from '@/components/Teaser/Teaser'
import { Sneaker } from '@/types'
import { ReactNode } from 'react'
import OrderingSection from '@/components/OrderingSection/OrderingSection'
import SearchSection from '@/components/SearchSection/SearchSection'
import useSWR from 'swr'
import { NextPageWithLayout } from './_app.page'
const inter = Inter({ subsets: ['latin'] })

// async function fetchSneakers() {
//   const res = await fetch('/api/sneakers', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   const data = await res.json()
//   // sneakers.push(...data)
// }

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
// export async function getServerSideProps(context) {
// const apiUrl = process.env.API_URL

//   const res = await fetch('https://localhost:3000/api/sneakers')
//   const data = await res.json()
//   return {
//     data, // will be passed to the page component as props
//   }
// }

export default function Home({}) {
  // console.log('sneakers', sneakers)
  const handleOrderingChange = (data) => {
    console.log('sdf', data)
  }
  // console.log('58', data)
  // const sneakers = []
  const { data, error, isLoading, isValidating } = useSWR(
    () => `/api/sneakers`,
    fetcher
  )
  // fetchSneakers()
  // if (error) return <div>"{error.message}"</div>
  // if (isLoading) return <div>Loading...</div>
  // if (!data) return null

  const handleSearchChange = (data) => {
    console.log('sdf', data)
  }

  return (
    <>
      <SearchSection onChange={handleSearchChange} />
      <OrderingSection onOrderingChange={handleOrderingChange} />
      <div className="flex">
        <FilterSection className="w-60 shrink-0 grow-0" />
        <Teasers className="grow">
          {data?.map((sneaker: Sneaker) => {
            return (
              <div>
                <Teaser
                  id={sneaker.id}
                  key={sneaker.id}
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
      </div>
    </>
  )
}
