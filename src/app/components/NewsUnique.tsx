import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { dateFormatter } from '@/lib/utils'
import { NewsProps } from '../page'

export default function NewsUnique({
  titulo,
  imagem,
  dataCriacao,
  resumo,
}: NewsProps) {
  return (
    <div className="group w-full max-w-md rounded-md border border-amhp-zinc-300/20 bg-amhp-gray-300/5 p-4 shadow-md md:max-w-[600px] ">
      <div className="h-[330px] w-full max-w-[600px] ">
        <Image
          title={titulo}
          className="h-full w-full rounded-md border border-amhp-zinc-300/20 object-cover brightness-50 transition-all duration-300 group-hover:brightness-75"
          width={500}
          height={500}
          src={`data:image/png;base64,${imagem}`}
          alt={titulo}
        />
      </div>
      <div>
        <p className="pt-2 text-right text-lg font-extrabold text-amhp-gray-300">
          {dateFormatter(new Date(dataCriacao))}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 pt-4">
          <Link href="/" className="flex flex-col gap-2">
            <span className="h-2 w-12 bg-amhp-cian-400" />
            <h2 className="font-alt text-3xl font-semibold leading-none tracking-tight text-amhp-gray-400 hover:underline">
              {titulo}
            </h2>
          </Link>
        </div>
        <p className="pt-2 font-normal leading-tight">{resumo}</p>
        <Link href="" className="max-w-min">
          <Button className="flex items-center gap-2 bg-amhp-cian-500 transition-all duration-300 hover:bg-amhp-cian-400">
            Matéria completa
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  )
}
