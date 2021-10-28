import MyLauout from "../layouts/MyLayout"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const {auth} = useSelector(({auth}) => auth)

  useEffect(() => {
    if(!auth){
      router.push('/auth-user')
    }
  }, [auth])

  return (
    <MyLauout>
          <div>
              Home
          </div>
    </MyLauout>
  )
}
