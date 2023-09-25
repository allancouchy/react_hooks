import { useEffect, useState } from 'react'

export const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY)
    })
  }, [])

  return scrollPosition
}
