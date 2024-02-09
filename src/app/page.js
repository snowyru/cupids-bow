import Head from 'next/head'

export const metadata = {
  title: "Cupid's Bow",
  description: "Valentines gift delievery",
}

export default function Home() {
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

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>
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
