"use client";
import { ProductAttribute} from "../types";
import { BreadCrumbs, Button, Heading, ProductCardLayout, ProductGridLayout, ProductRating, SectionContainer } from 'tp-kit/components';
import  Style  from "../app/productAttributesTables.module.css";
type Props = {attributes : ProductAttribute[]}
export default function ProductTable({attributes} : Props) {
    return (
        <main>
            <table className="table-auto">
                <tbody>
                    {attributes.map((attribute : ProductAttribute, key) => {
                        return <tr key={key}>
                            <td className="border px-4 py-2">{attribute.label}</td>
                            <td className="border px-4 py-2">
                                <ProductRating value={attribute.rating } size={24} icon="circle" />
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </main>
    ) 
}
