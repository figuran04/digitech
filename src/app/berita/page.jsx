"use client"
import React, { useState, useEffect } from "react"
import ListBerita from "@/components/ListBerita"
import Link from "next/link"
import { getBeritaResponse } from "../libs/api-libs"
import HeroBerita from "@/components/HeroBerita"
import { useRouter } from "next/navigation"
import Navigasi from "@/components/Navigasi"

const Berita = () => {
  const [cnnPosts, setCnnPosts] = useState([]) // Tambahkan state untuk data dari CNN
  const [antaraPosts, setAntaraPosts] = useState([]) // Tambahkan state untuk data dari Antara
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const dataCnn = await getBeritaResponse("cnn", "terbaru") // Ambil data dari CNN
      const dataAntara = await getBeritaResponse("antara", "terbaru") // Ambil data dari Antara
      setCnnPosts(dataCnn.data.posts) // Set data dari CNN ke state
      setAntaraPosts(dataAntara.data.posts) // Set data dari Antara ke state
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen p-4 mb-80">
      <button onClick={() => router.back()} className="my-2 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-9"
        >
          <path
            fillRule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        Kembali
      </button>
      <h1 className="text-4xl font-semibold pt-4 pb-2">Berita</h1>
      <Link href="/search">
        <input
          type="search"
          placeholder="Cari"
          className="text-lg w-full bg-gray-100 rounded-md py-2 px-4 my-2"
        />
      </Link>
      <div className="overflow-x-scroll overflow-y-hidden">
        <div className="flex flex-nowrap w-max gap-2">
          {cnnPosts.map((post, index) => (
            <Link href={post.link} key={index}>
              <HeroBerita
                title={post.title}
                url={post.thumbnail}
                date={post.pubDate}
              />
            </Link>
          ))}
        </div>
      </div>
      <h3 className="text-2xl font-semibold pt-6">Berita</h3>
      <div>
        {antaraPosts.map((post, index) => (
          <Link href={post.link} key={index}>
            <ListBerita
              title={post.title}
              url={post.thumbnail}
              date={post.pubDate}
            />
          </Link>
        ))}
      </div>
      <Navigasi />
    </div>
  )
}

export default Berita
