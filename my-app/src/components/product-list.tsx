"use client";
import Image from 'next/image'
import {PRODUCTS_CATEGORY_DATA} from "tp-kit/data";
import {BreadCrumbs, Button, SectionContainer} from "tp-kit/components";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
import{ProductFilters} from "./product-filters.tsx";
import{filterProducts} from "../utils/filter-products.tsx";
import {ProductsCategoryData,ProductData} from "tp-kit/types";
import {ProductFilterResult} from "../types";
type Props = {categories: ProductsCategoryData[], showFilters : boolean }
import { Heading } from '../../tp-kit/components/heading';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link.js';
export default function ProductList({categories, showFilters} : Props) {
    const [filters, setFilters] = useState<ProductFilterResult>
    ({
        search: "",
        categoriesSlug: []
    })

    const filteredCategories = useMemo(() => filterProducts(categories, filters), [categories,filters])

    return (<main className='flex'>
        {showFilters?
            <ProductFilters 
                onChange={(filters : ProductFilterResult) => {
                    setFilters(filters)
                }}
                categories={categories}
            /> : null}
        
        <div className="flex-1">
        <BreadCrumbs
                items={[
                    {
                        label: 'Home',
                        url: '/',   
                    },
                ]}
            
            />
            {
            filteredCategories.map((category : ProductsCategoryData) => {
              return<SectionContainer
              key={category.id}
              
              >
                <Link href={`/${category.slug}`} className='link'>
                   <Heading
                        as="h1"
                        size="md"
                        weight="bold"
                        >
                        {category.name}
                    </Heading>
                </Link>
           
            <ProductGridLayout
                products={category.products}
                children={(producte : ProductData) => (
                    <ProductCardLayout
                    button={(<Button
                            variant="light"
                        >
                        Ajouter au panier
                    </Button>)}
                product={{
                    desc: producte.desc,
                    id: producte.id,
                    img: producte.img,
                    name: producte.name,
                    path: producte.path,
                    price: producte.price,
                    slug: producte.slug
                }}
            />
            
                )}
            />
            </SectionContainer>
            
            })
        }
        </div>
    </main>
)}
