'use client'

import {
  Carousel as CarouselComp,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel'

import { useMediaQuery } from 'react-responsive'
import { useQuery } from '@tanstack/react-query'
import Autoplay from 'embla-carousel-autoplay'
import axios from 'axios'
import Image from 'next/image'
import Loading from './Loading'

interface BannerProps {
  id: string
  titulo: string
  urlImagemDesktop: string
  urlImagemMobile: string
}

async function getBanners() {
  const res = await axios.get<BannerProps[]>(
    'https://api-site.amhp.com.br/api/banners/publicados',
  )

  return res.data
}

export default function Carousel() {
  const { data, isLoading } = useQuery({
    queryKey: ['banners'],
    queryFn: getBanners,
  })

  const isSmallScreen = useMediaQuery({ maxWidth: 640 })

  return (
    <div className=" w-full max-w-7xl">
      {isLoading ? (
        <Loading>Carregando imagens...</Loading>
      ) : (
        <CarouselComp
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {data?.map((banner) => (
              <CarouselItem key={banner.id}>
                <Image
                  className="h-full w-full object-cover"
                  width={1280}
                  height={360}
                  src={
                    isSmallScreen
                      ? banner.urlImagemMobile
                      : banner.urlImagemDesktop
                  }
                  alt={banner.titulo}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </CarouselComp>
      )}
    </div>
  )
}
