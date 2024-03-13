'use client'

import NewspaperCard from '../components/NewspaperCard'
import axios from 'axios'
import Loading from '../components/Loading'
import { NewsProps } from '../page'
import { useQuery } from '@tanstack/react-query'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Providers } from '../providers'

async function getNews() {
  const res = await axios.get<NewsProps[]>(
    'https://api-site.amhp.com.br/api/noticias/recentes-home/8',
  )

  return res.data
}

export default function News() {
  const { data, isLoading } = useQuery({
    queryKey: ['notices'],
    queryFn: getNews,
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  }

  return (
    <Providers>
      <article className="flex h-full flex-col items-center gap-8 px-8 md:px-24">
        <div className="flex w-full max-w-[1380px] flex-col justify-between border-t border-amhp-zinc-300/20 py-8 text-sm">
          <div className="mx-auto flex flex-col py-8" ref={ref}>
            <h2 className="mb-4 bg-gradient-to-r from-amhp-cian-500 to-amhp-cian-300 bg-clip-text font-alt text-4xl font-bold text-transparent md:text-5xl">
              Notícias da AMHP
            </h2>
            <p className="mx-auto">
              Confira as notícias públicadas em nosso portal
            </p>
          </div>
          {isLoading ? (
            <Loading>Carregando notícias...</Loading>
          ) : (
            <ul className="mx-auto grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {data?.map((newspaper, index) => (
                <motion.li
                  className="mx-auto h-full w-full list-none"
                  key={index}
                  initial="initial"
                  variants={variants}
                  animate={isInView ? 'animate' : 'initial'}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NewspaperCard
                    key={newspaper.id}
                    id={newspaper.id}
                    titulo={newspaper.titulo}
                    imagem={newspaper.imagem}
                    resumo={newspaper.resumo}
                    dataCriacao={newspaper.dataCriacao}
                  />
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </Providers>
  )
}
