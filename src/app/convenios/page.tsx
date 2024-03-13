'use client'

import axios from 'axios'
import AgreementsRandomColor from '../components/AgreementsRandomColor'
import { useQuery } from '@tanstack/react-query'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { getRandomVariant } from '@/lib/utils'

interface AgreementsProps {
  id: number
  nomeDivulgacao: string
}

async function getNews() {
  const res = await axios.get<AgreementsProps[]>(
    'https://api-site.amhp.com.br/api/convenios/ativos',
  )

  return res.data
}

export default function Agreements() {
  const { data } = useQuery({
    queryKey: ['agreements'],
    queryFn: getNews,
  })

  const variant = [1, 2, 3, 4, 5]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  }

  return (
    <article className="flex h-full w-full flex-col items-center gap-8 px-2 md:px-24">
      <div
        className="flex w-full flex-col flex-wrap justify-between border-t border-amhp-zinc-300/20 py-8 text-sm md:max-w-[1380px]"
        ref={ref}
      >
        <div className="mx-auto flex flex-col items-center py-8">
          <h2 className="mb-4 bg-gradient-to-r from-amhp-cian-500 to-amhp-cian-300 bg-clip-text font-alt text-4xl font-bold text-transparent md:text-5xl">
            Convênios
          </h2>
          <p className="mx-auto px-4 md:px-0">
            Confira os convênios com os quais a AMHP mantém contratos ativos
          </p>
          <div className="h-full py-8 md:pb-36 md:pt-16">
            <ul className="flex max-w-6xl flex-wrap justify-center gap-1">
              {data?.map((agreement, index) => {
                return (
                  <motion.li
                    className="w-max list-none items-center rounded-2xl bg-gradient-to-r from-amhp-cian-400/20 to-amhp-cian-300/20 px-2 py-1 text-base font-normal transition-all hover:bg-amhp-cian-500/50 md:px-4 md:text-xl"
                    key={index}
                    initial="initial"
                    variants={variants}
                    animate={isInView ? 'animate' : 'initial'}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <AgreementsRandomColor
                      key={agreement.id}
                      variant={getRandomVariant(variant)}
                    >
                      {agreement.nomeDivulgacao}
                    </AgreementsRandomColor>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}
