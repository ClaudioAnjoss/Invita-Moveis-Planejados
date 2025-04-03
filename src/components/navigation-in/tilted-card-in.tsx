import { ReactNode } from 'react'
import TiltedCard from '../ui/_react-bits/tilted-card'
import { Dialog, DialogContent, DialogTrigger } from '../ui/_shadcn/dialog'

interface iTiltedCardIn {
  children: ReactNode
  image: string
}

export default function TiltedCardIn({ children, image }: iTiltedCardIn) {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center">{children}</DialogTrigger>
      <DialogContent className="bg-transparent border-none p-0 w-fit">
        <TiltedCard
          imageSrc={image}
          containerHeight="400px"
          containerWidth="400px"
          imageHeight="400px"
          imageWidth="400px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={false}
        />
      </DialogContent>
    </Dialog>
  )
}
