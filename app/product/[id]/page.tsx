import { products } from "@/lib/products"
import ProductClient from "./product-client"
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}
export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  return <ProductClient params={params} />
}
