import { Sneaker } from '@/types'
import db from '../../../db/db'
import Image from 'next/image'

interface SneakerProps {
  sneaker: Sneaker
}

export default function Sneakers({ sneaker }: SneakerProps) {
  return (
    <div>
      <h1 className="text-2xl font-[700] mb-5">Sneakers {sneaker.name}</h1>
      <div className="flex">
        <div className="image-wrapper grow-1 h-64 relative  aspect-video">
          <Image
            src={sneaker.image}
            alt={sneaker.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="px-5 w-64 grow-1 shrink-0">
          <div>
            <span className="text-base font-[700]">Size:</span>{' '}
            {sneaker.sizes.join(', ')}
          </div>
          <div>
            <span className="text-base font-[700]">Brand:</span> {sneaker.brand}
          </div>
          <div>
            <span className="text-base font-[700]">Size:</span>{' '}
            {sneaker.description}
          </div>
          <div>
            <span className="text-base font-[700]">Size:</span>{' '}
            {sneaker.sizes.join(', ')}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = db.sneakers.map((sneaker) => {
    return {
      params: { id: sneaker.id.toString() },
    }
  })

  return { paths, fallback: true }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const sneaker =
    db.sneakers.find((sneaker) => sneaker.id === Number(id)) || null
  return {
    props: { sneaker },
  }
}
