import { useEffect, useState, useRef, JSX } from 'react'
import { motion, PanInfo, useMotionValue } from 'framer-motion'

export interface CarouselProps {
  images: string[]
  items?: string[]
  baseWidth?: number
  autoplay?: boolean
  autoplayDelay?: number
  pauseOnHover?: boolean
  loop?: boolean
  round?: boolean
}

const DRAG_BUFFER = 0
const VELOCITY_THRESHOLD = 500
const GAP = 16
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 }

export default function Carousel({
  images,
  items = images,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): JSX.Element {
  const itemWidth = baseWidth - 32 // Considerando padding
  const trackItemOffset = itemWidth + GAP
  const carouselItems = loop ? [...items, items[0]] : items
  const [currentIndex, setCurrentIndex] = useState(0)
  const x = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current
      const handleMouseEnter = () => setIsHovered(true)
      const handleMouseLeave = () => setIsHovered(false)
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [pauseOnHover])

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === items.length - 1 && loop
            ? prev + 1
            : (prev + 1) % items.length,
        )
      }, autoplayDelay)
      return () => clearInterval(timer)
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, pauseOnHover])

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true)
      x.set(0)
      setCurrentIndex(0)
      setTimeout(() => setIsResetting(false), 50)
    }
  }

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    const { offset, velocity } = info
    if (offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1))
    } else if (offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 `}
      style={{
        width: `${baseWidth}px`,
        height: round ? `${baseWidth}px` : 'auto',
      }}
    >
      <motion.div
        className="flex w-full"
        drag="x"
        dragConstraints={
          !loop
            ? { left: -trackItemOffset * (carouselItems.length - 1), right: 0 }
            : {}
        }
        style={{ gap: `${GAP}px`, x }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={isResetting ? { duration: 0 } : SPRING_OPTIONS}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 flex items-center justify-center bg-white overflow-hidden"
            style={{
              width: itemWidth,
              height: round ? itemWidth : '100%',
              borderRadius: round ? '50%' : '12px',
            }}
            transition={SPRING_OPTIONS}
          >
            <img
              src={item}
              alt=""
              className="pointer-events-none w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${currentIndex % items.length === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
            animate={{ scale: currentIndex % items.length === index ? 1.2 : 1 }}
            transition={{ duration: 0.15 }}
          />
        ))}
      </div>
    </div>
  )
}
