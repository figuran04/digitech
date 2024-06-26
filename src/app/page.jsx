"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const primaryColor = "primaryColorClassName"

const Splash = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/beranda")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className={`w-screen h-screen ${primaryColor} text-white`}>
      <div className="flex w-full justify-center items-center h-5/6 text-white">
        <div className="flex justify-center flex-wrap">
          {/* <img src="/hero.png" alt="logo" className="w-52 rounded-2xl" /> */}
          <h1 className="w-full text-center text-4xl p-3 font-bold">
            Digitech
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center items-center h-1/6">
        <p className="text-lg text-white">Hak cipta 2024</p>
      </div>
    </div>
  )
}

export default Splash
