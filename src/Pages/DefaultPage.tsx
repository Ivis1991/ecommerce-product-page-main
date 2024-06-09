import { Navbar } from "@/components/Navbar/navbar"
import { Layout } from "@/components/Layout/Layout"
import { ProductDetail } from "@/components/ProductDetail/ProductDetail"

export const DefaultPage = () => {
  return (
    <>
    <Navbar/>
    <Layout>
        <ProductDetail />
    </Layout>
    </>
  )
}
