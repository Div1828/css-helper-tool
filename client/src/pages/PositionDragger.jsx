import React, { useState, useRef } from "react"
import CodeBlock from "../components/CodeBlock"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function PositionDragger() {
  const [showOverlay, setShowOverlay] = useState(false)
  const [position, setPosition] = useState({ top: 100, left: 100 })
  const circleRef = useRef(null)

  const handleMouseDown = (e) => {
    const circle = circleRef.current
    if (!circle) return

    const startX = e.clientX
    const startY = e.clientY
    const startTop = circle.offsetTop
    const startLeft = circle.offsetLeft

    const handleMouseMove = (moveEvent) => {
      const newTop = startTop + (moveEvent.clientY - startY)
      const newLeft = startLeft + (moveEvent.clientX - startX)
      circle.style.top = `${newTop}px`
      circle.style.left = `${newLeft}px`
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

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
            onMouseDown={handleMouseDown}
            className="w-14 h-14 bg-blue-500 rounded-full absolute cursor-move"
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
