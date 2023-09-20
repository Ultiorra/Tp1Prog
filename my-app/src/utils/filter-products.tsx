import { ProductsCategoryData } from "tp-kit/types";
import { ProductFilterResult } from "@/types";

export function filterProducts(
    categories: ProductsCategoryData[], 
    filters?: ProductFilterResult
) : ProductsCategoryData[] {
  let filteredResult : ProductsCategoryData[] = []
  categories.forEach(category => {
    if (filters?.categoriesSlug?.includes(category.name)) {
        let newCategory = {...category}
        if (filters.search != null && filters.search != "") {
            let pattern = filters.search
            newCategory.products = category.products.filter((product) => {
                return product.name.toLowerCase().includes(pattern.toLowerCase())
            })
        }
        filteredResult.push(newCategory)
    }
    if(filters?.categoriesSlug?.length == 0) {
        let newCategory = {...category}
        if (filters.search != null && filters.search != "") {
            let pattern = filters.search
            newCategory.products = category.products.filter((product) => {
                return product.name.toLowerCase().includes(pattern.toLowerCase())
            })
        }
        filteredResult.push(newCategory)
    }
  })
  return filteredResult
};