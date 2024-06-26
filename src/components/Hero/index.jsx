import Link from "next/link"

const primaryColor = "primaryColorClassName"

const Hero = () => {
  const time = new Date().getHours()
  let greeting

  if (time < 12) {
    greeting = "Selamat Pagi"
  } else if (time < 13) {
    greeting = "Selamat Siang"
  } else if (time < 18) {
    greeting = "Selamat Sore"
  } else {
    greeting = "Selamat Malam"
  }

  return (
    <div className={`flex flex-wrap items-center px-4 pt-8 ${primaryColor}`}>
      <Link
        href="/search"
        className="bg-lime-700 rounded-full py-1 pl-2 pr-3 font-normal text-lime-100 hover:scale-110 transition-all flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        Search
      </Link>
      <h1 className="text-4xl font-bold w-full py-4">{greeting}</h1>
    </div>
  )
}

export default Hero
