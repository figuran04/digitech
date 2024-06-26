import Image from "next/image"
import { format } from "date-fns"
import { id } from "date-fns/locale"

const HeroBerita = ({ title, url, date }) => {
  const dates = format(new Date(date), "dd MMMM yyyy", { locale: id })

  return (
    <div className="border-gray-100 relative text-white">
      <div className="skeleton h-40 rounded-lg">
        <Image width={285} height={200} src={url} alt={url} />
      </div>
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 rounded-es-lg rounded-ee-lg">
        <h2 className="text-lg px-4 line-clamp-2">{title}</h2>
        <p className="px-2">{dates}</p>
      </div>
    </div>
  )
}
export default HeroBerita
