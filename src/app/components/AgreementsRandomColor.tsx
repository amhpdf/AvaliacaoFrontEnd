import { ReactNode } from 'react'

interface AgreementsRandomColorProps {
  variant: number
  children: ReactNode
}

export default function AgreementsRandomColor({
  variant,
  children,
}: AgreementsRandomColorProps) {
  if (variant === 1) {
    return <span className="font-semibold text-amhp-cian-500">{children}</span>
  } else if (variant === 2) {
    return <span className="font-semibold text-amhp-cian-400">{children}</span>
  } else if (variant === 3) {
    return <span className="font-semibold text-amhp-gray-300">{children}</span>
  } else if (variant === 4) {
    return <span className="font-semibold text-amhp-gray-500">{children}</span>
  } else if (variant === 5) {
    return <span className="font-semibold text-amhp-gray-400">{children}</span>
  }
}
