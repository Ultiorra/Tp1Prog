import { ProductFilters } from '@/components/product-filters';
import ProductList from '@/components/product-list';
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { BreadCrumbs, Button, Heading, ProductCardLayout, ProductGridLayout, SectionContainer } from 'tp-kit/components';
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
const categories = PRODUCTS_CATEGORY_DATA;

type NextPageProps<T = Record<string, string>> = {
  params: T,
  searchParams: { [key: string]: string | string[] | undefined }
}

type Props = {
  categorySlug : string
}

export default function Home({params} : NextPageProps<Props>) {
  let currentcategories = categories.filter(category => {
    return category.slug == params.categorySlug
  })[0]

  if (!currentcategories) notFound();

  return ( 
    <main>
      <BreadCrumbs
                items={[
                    {
                        label: 'Home',
                        url: '/',   
                    },
                    {
                        label: currentcategories.name,
                        url: `/${currentcategories.slug}`,
                    },
                ]}

            
        />
  
      <ProductList categories={[currentcategories]} showFilters={false}/>
    </main>
  )
}