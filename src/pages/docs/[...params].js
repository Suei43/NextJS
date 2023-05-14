import { useRouter } from "next/router"

export default function Docs(){
    const router = useRouter()
    const { params = [] } = router.query
    let i = 0
    let sentence = ""
    for(let i=0;i<params.length;i++){
        sentence = sentence+" "+params[i]
    }
    return <h1>Docs page{sentence}</h1>
}