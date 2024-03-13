'use client'

import axios from 'axios'
import Carousel from './components/Carousel'
import Loading from './components/Loading'
import NewsCard from './components/NewsCard'
import NewsUnique from './components/NewsUnique'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Plus } from 'lucide-react'

export type NewsProps = {
  id?: number
  titulo: string
  resumo: string
  imagem: string
  dataCriacao: string
}

async function getNews() {
  const res = await axios.get<NewsProps[]>(
    'https://api-site.amhp.com.br/api/noticias/recentes-home/4',
  )

  return res.data
}

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['newspaper'],
    queryFn: getNews,
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <main className="flex h-full flex-col items-center gap-8 md:px-24">
      <Carousel />
      <div
        className="flex w-full max-w-6xl flex-col justify-between border-t border-amhp-zinc-300/20 px-8 py-8 text-sm md:px-0"
        ref={ref}
      >
        <h2 className="mb-4 w-min bg-gradient-to-r from-amhp-cian-500 to-amhp-cian-300 bg-clip-text font-alt text-5xl font-bold text-transparent md:w-max md:text-5xl">
          Últimas notícias
        </h2>
        <p>Confira as últimas notícias públicadas em nosso portal</p>

        <div className="pt-8">
          {isLoading ? (
            <Loading>Carregando notícias...</Loading>
          ) : (
            <div className="flex flex-col justify-between md:flex-row">
              <div className="mx-auto md:mx-px">
                <NewsUnique
                  key={data ? data[0].id : ''}
                  titulo={data ? data[0].titulo : ''}
                  imagem={data ? data[0].imagem : ''}
                  resumo={data ? data[0].resumo : ''}
                  dataCriacao={data ? data[0].dataCriacao : ''}
                />
              </div>

              <ul className="grid grid-cols-1 gap-4 pt-4 md:pt-0 xl:grid-cols-2">
                {data?.map(
                  (newspaper, index) =>
                    index > 0 && (
                      <motion.li
                        key={index}
                        className="mx-auto list-none"
                        initial="initial"
                        variants={variants}
                        animate={isInView ? 'animate' : 'initial'}
                        transition={{ duration: 0.5, delay: index * 0.4 }}
                      >
                        <NewsCard
                          key={newspaper.id}
                          id={newspaper.id}
                          titulo={newspaper.titulo}
                          resumo={newspaper.resumo}
                          imagem={newspaper.imagem}
                          dataCriacao={newspaper.dataCriacao}
                        />
                      </motion.li>
                    ),
                )}
                {
                  <motion.li
                    initial="initial"
                    variants={variants}
                    animate={isInView ? 'animate' : 'initial'}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="group h-full w-full items-center justify-center rounded-md bg-gradient-to-r from-amhp-cian-500 to-amhp-cian-400/60 p-4 shadow-md md:p-0"
                  >
                    <div className="m-auto flex h-full w-full items-center justify-center">
                      <Link
                        href={'/noticias'}
                        className="m-auto flex h-full w-full flex-col items-center justify-center font-alt text-lg leading-snug text-white/90"
                      >
                        <p className="group flex items-center gap-2 bg-clip-text font-alt text-2xl font-bold uppercase text-white">
                          <Plus size={24} />
                          notícias
                          <ArrowRight
                            size={24}
                            className="-translate-x-1 transform-gpu transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </p>
                      </Link>
                    </div>
                  </motion.li>
                }
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
