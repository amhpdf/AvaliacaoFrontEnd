import { Loader2 } from 'lucide-react'
import { ReactNode } from 'react'

interface LoadingProps {
  children?: ReactNode
}

export default function Loading({ children }: LoadingProps) {
  return (
    <div className="flex h-[360px] items-center justify-center gap-2 text-base">
      <div className="animate-spin transition-all">
        <Loader2 size={50} className="bg-transparent" />
      </div>
      <span>{children}</span>
    </div>
  )
}
