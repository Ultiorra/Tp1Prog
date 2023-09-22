import Image from 'next/image'
import {PRODUCTS_CATEGORY_DATA} from "tp-kit/data";
import {BreadCrumbs, Button, SectionContainer} from "tp-kit/components";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
import {ProductsCategoryData,ProductData} from "tp-kit/types";
import { Heading } from '../../tp-kit/components/heading';
import ProductList from '@/components/product-list';
const categories = PRODUCTS_CATEGORY_DATA;
export default function Home() {
    return (<main>
        <BreadCrumbs
                items={[
                    {
                        label: 'Home',
                        url: '/',   
                    },
                ]}

            
        />
        <ProductList categories={categories} showFilters={true}/>
    </main>
)}
