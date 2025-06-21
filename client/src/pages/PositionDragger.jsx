import React, { useState, useRef, useEffect } from "react"
import CodeBlock from "../components/CodeBlock"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function PositionDragger() {
  const [showOverlay, setShowOverlay] = useState(false)
  const [position, setPosition] = useState({ top: 100, left: 100 })
  const circleRef = useRef(null)

  useEffect(() => {
    const circle = circleRef.current
    if (!circle) return

    let startX = 0
    let startY = 0
    let startTop = 0
    let startLeft = 0

    const handleStart = (e) => {
      e.preventDefault()
      const isTouch = e.type === "touchstart"
      const clientX = isTouch ? e.touches[0].clientX : e.clientX
      const clientY = isTouch ? e.touches[0].clientY : e.clientY

      startX = clientX
      startY = clientY
      startTop = circle.offsetTop
      startLeft = circle.offsetLeft

      document.addEventListener("mousemove", handleMove)
      document.addEventListener("mouseup", handleEnd)
      document.addEventListener("touchmove", handleMove, { passive: false })
      document.addEventListener("touchend", handleEnd)
    }

    const handleMove = (e) => {
      const isTouch = e.type === "touchmove"
      const clientX = isTouch ? e.touches[0].clientX : e.clientX
      const clientY = isTouch ? e.touches[0].clientY : e.clientY

      const newTop = startTop + (clientY - startY)
      const newLeft = startLeft + (clientX - startX)

      circle.style.top = `${newTop}px`
      circle.style.left = `${newLeft}px`
    }

    const handleEnd = () => {
      document.removeEventListener("mousemove", handleMove)
      document.removeEventListener("mouseup", handleEnd)
      document.removeEventListener("touchmove", handleMove)
      document.removeEventListener("touchend", handleEnd)
    }

    circle.addEventListener("mousedown", handleStart)
    circle.addEventListener("touchstart", handleStart, { passive: false })

    return () => {
      circle.removeEventListener("mousedown", handleStart)
      circle.removeEventListener("touchstart", handleStart)
    }
  }, [showOverlay])

  const handleConfirm = () => {
    const circle = circleRef.current
    if (circle) {
      setPosition({
        top: Math.round(circle.offsetTop),
        left: Math.round(circle.offsetLeft),
      })
    }
    setShowOverlay(false)
  }

  const cssCode = `position: absolute;
top: ${position.top}px;
left: ${position.left}px;`

  const tailwindCode = `absolute top-[${position.top}px] left-[${position.left}px]`

  return (
    <>
      <Card>
        <CardContent className="space-y-4 p-6 text-center">
          <Button onClick={() => setShowOverlay(true)}>Enter Fullscreen Mode</Button>
        </CardContent>
      </Card>

      {showOverlay && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-black">
          <div
            ref={circleRef}
            className="w-14 h-14 bg-blue-500 rounded-full absolute cursor-move touch-none"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          ></div>

          <Button
            onClick={handleConfirm}
            className="absolute top-4 right-4 z-50"
            variant="secondary"
          >
            Confirm Position
          </Button>
        </div>
      )}

      <div className="mt-6">
        <CodeBlock cssCode={cssCode} tailwindCode={tailwindCode} />
      </div>
    </>
  )
}

export default PositionDragger
