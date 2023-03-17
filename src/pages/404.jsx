import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
const Page_404 = () => {

    const [timer, setTimer] = useState(3)
    const router = useRouter()
    setInterval(() => {
        setTimer(timer - 1)
    }, 1000)

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3200)
    });

  return (
    <div>     
          <h1>Page not found!</h1>
          <h1>Переход на главную страницу через {timer} ...</h1>
    </div>
  )
}

export default Page_404;