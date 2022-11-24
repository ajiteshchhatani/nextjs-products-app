import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Card from '../components/card';
import FilterMenu from '../components/filter_menu';
import Pagination from '../components/pagination';
import styles from '../styles/Home.module.css'
import { fetchProductBrands, fetchProductData } from '../utils/products'

export async function getServerSideProps(context) {
  const { limit, skip } = context.query
  const productEntries = await fetchProductData(limit, skip); // https://dummyjson.com/products?limit=10&skip=10&select=title,price
  const { products } = productEntries;
  const brands = products.map((p) => {
    return {
      id: p.id,
      brand: p.brand
    }
  });
  const filters = [...new Set(brands)]
  return {
    props: {
      products,
      filters
    }
  }
}

export default function Home({ products, filters }) {

  const [productsList, setProductsList] = useState(products)

  useEffect(() => {
    setProductsList(products);
  }, [products])

  const handleAppliedFilters = (brands) => {
    if(brands.length > 0) {
      let appliedFilters = brands.map(b => b.brand);
      let filteredProducts = products.filter(p =>  appliedFilters.includes(p.brand))
      setProductsList(filteredProducts);
    }
    else {
      setProductsList(products);
    }
  }

  const handleClearFiltersAndSort = () => {
    setProductsList(products);
  }

  return (
    <div className="py-0 sm:px-2 md:px-8">
      <Head>
        <title>Products Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
        <div className="my-4">
          <FilterMenu
            brandlist={filters}
            handleAppliedFilters={(brands) => handleAppliedFilters(brands)}
            handleClearFiltersAndSort={handleClearFiltersAndSort}
          />
        </div>
        <Card products={productsList} />
        <div>
          <Pagination />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
