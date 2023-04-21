// pages/404.js
import Image from 'next/image'
export default function Custom404() {
  return (
    <div className="pt-52 flex grow-1 flex items-center flex-col justify-center">
      <Image
        width={100}
        height={100}
        src="/assets/images/placeholder.png"
        alt="placeholder"
      />
      <h1 className="mt-8 text-2xl">404 - Page Not Found</h1>
    </div>
  )
}
