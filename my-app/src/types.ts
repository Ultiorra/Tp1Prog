export type ProductFilterResult = {
    categoriesSlug: string[],
    search: string | null,
  }
  
export type NextPageProps<T = Record<string, string>> = {
  params: T,
  searchParams: { [key: string]: string | string[] | undefined }
}

export type ProductAttribute  = {
  label: string,
  rating: number,
}