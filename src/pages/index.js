import Link from "next/link"

export default function Home(){
    return <>
    <Link href="/blog">Blog</Link>
    <Link href="/product">Products</Link>
    <h1>This is the home page.</h1>
    </>
}