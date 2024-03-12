import Link from 'next/link'
import Image from 'next/image'
import { NewsProps } from '../page'
import { dateFormatter, limitName } from '@/lib/utils'

export default function NewsCard(newspaper: NewsProps) {
  return (
    <div
      key={newspaper.id}
      className="group mb-4 flex h-full w-full max-w-md flex-col gap-4 rounded-md border border-amhp-zinc-300/20 bg-amhp-gray-300/5 p-4 shadow-md md:w-[260px] md:max-w-xs"
    >
      <div className="relative h-[180px] w-full">
        <Image
          className="h-full w-full rounded-md border border-amhp-zinc-300/20 object-cover brightness-50 transition-all duration-300 group-hover:brightness-75"
          width={500}
          height={180}
          src={`data:image/png;base64,${newspaper.imagem}`}
          alt={newspaper.titulo}
        />
        <div className="absolute inset-0 flex justify-start px-4 py-2">
          <p className="text-lg font-extrabold text-white">
            {dateFormatter(new Date(newspaper.dataCriacao))}
          </p>
        </div>
      </div>

      <Link href="/" className="flex flex-col gap-2">
        <span className="h-2 w-12 bg-amhp-cian-400" />
        <h2 className="font-alt text-lg font-semibold leading-none tracking-tight text-amhp-gray-400 hover:underline">
          {limitName(newspaper.titulo, 96)}
        </h2>
      </Link>
    </div>
  )
}
