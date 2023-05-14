import { useRouter } from "next/router"

export default function ProductDetail(){
    const router = useRouter()
    const productid = router.query.productid
     return <h1>Details about product {productid}</h1>
}