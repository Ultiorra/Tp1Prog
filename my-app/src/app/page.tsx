import Image from 'next/image'
import {PRODUCTS_CATEGORY_DATA} from "tp-kit/data";
import {BreadCrumbs, Button, SectionContainer} from "tp-kit/components";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
import { Heading } from '../../tp-kit/components/heading';
const categories = PRODUCTS_CATEGORY_DATA;
export default function Home() {
    return (<main>
         <BreadCrumbs
                items={[
                    {
                        label: 'Home',
                        url: '#'
                    },
                ]}
            />
            {
            categories.map((category : any) => {
              return<SectionContainer>
                   <Heading
                        as="h1"
                        size="md"
                        weight="bold"
                        >
                        {category.name}
                    </Heading>
           
            <ProductGridLayout
                products={category.products}
                children={(producte : any) => (
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
    </main>
)}
