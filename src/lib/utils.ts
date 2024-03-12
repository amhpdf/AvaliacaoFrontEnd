import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function limitName(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  } else {
    return text.slice(0, maxLength) + '...'
  }
}

export function dateFormatter(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
  }).format(date)
}

export function getRandomVariant(variant: number[]) {
  const random = Math.floor(Math.random() * variant.length)
  return variant[random]
}
