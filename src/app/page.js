import Head from 'next/head'

export const metadata = {
  title: "Cupid's Bow",
  description: "Valentines gift delivery",
}

export default function Home() {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 'Price 1', image: 'Image URL 1' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 'Price 2', image: 'Image URL 2' },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 'Price 3', image: 'Image URL 3' },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 'Price 4', image: 'Image URL 4' },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 'Price 5', image: 'Image URL 5' },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-red-600" href="https://nextjs.org">
            Cupid's Bow!
          </a>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-2" />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-red-500 mt-2">{product.price}</p>
              <button className="mt-4 bg-red-500 text-white rounded p-2 hover:bg-red-400">Buy Now</button>
            </div>
          ))}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Snowyru
        </a>
      </footer>
    </div>
  )
}
