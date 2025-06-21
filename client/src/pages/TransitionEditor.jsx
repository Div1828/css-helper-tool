import React, { useState, useRef } from "react"
import CodeBlock from "../components/CodeBlock"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem
} from "@/components/ui/select"

function TransitionEditor() {
  const [property, setProperty] = useState("all")
  const [duration, setDuration] = useState(300)
  const [delay, setDelay] = useState(0)
  const [timing, setTiming] = useState("ease")
  const [effect, setEffect] = useState("scale")

  const [startBg, setStartBg] = useState("#3b82f6")
  const [endBg, setEndBg] = useState("#10b981")
  const [startColor, setStartColor] = useState("#ffffff")
  const [endColor, setEndColor] = useState("#facc15")
  const [startOpacity, setStartOpacity] = useState(1)
  const [endOpacity, setEndOpacity] = useState(0.5)

  const boxRef = useRef(null)

  const transitionString = `${property} ${duration}ms ${timing} ${delay}ms`

  const playTransition = () => {
    const el = boxRef.current
    if (!el) return

    el.style.transition = transitionString

    el.style.backgroundColor = startBg
    el.style.color = startColor
    el.style.opacity = startOpacity
    el.style.transform = "none"

    setTimeout(() => {
      if (property === "background-color" || property === "all") {
        el.style.backgroundColor = endBg
      }

      if (property === "color" || property === "all") {
        el.style.color = endColor
      }

      if (property === "opacity" || property === "all") {
        el.style.opacity = endOpacity
      }

      if (property === "transform" || property === "all") {
        const map = {
          scale: "scale(1.1)",
          rotate: "rotate(15deg)",
          slideRight: "translateX(30px)",
          slideUp: "translateY(-30px)",
          flip: "rotateY(180deg)",
          bounce: "translateY(-10px)",
        }
        el.style.transform = map[effect]
      }
    }, 50)

    setTimeout(() => {
        el.style.backgroundColor = startBg
        el.style.color = startColor
        el.style.opacity = startOpacity
        el.style.transform = "none"
    }, duration + delay + 300)
  }

  let startCSS = ""
  let endCSS = ""
  let twStart = ""
  let twTransition = ""
  let twEnd = ""

  if (property === "background-color" || property === "all") {
    startCSS += `background-color: ${startBg};\n`
    endCSS += `background-color: ${endBg};\n`
    twStart += `bg-[${startBg}] `
    twEnd += `hover:bg-[${endBg}] `
  }

  if (property === "color" || property === "all") {
    startCSS += `color: ${startColor};\n`
    endCSS += `color: ${endColor};\n`
    twStart += `text-[${startColor}] `
    twEnd += `hover:text-[${endColor}] `
  }

  if (property === "opacity" || property === "all") {
    startCSS += `opacity: ${startOpacity};\n`
    endCSS += `opacity: ${endOpacity};\n`
    twStart += `opacity-[${startOpacity}] `
    twEnd += `hover:opacity-[${endOpacity}] `
  }

  if (property === "transform" || property === "all") {
    const transformMap = {
      scale: "scale(1.1)",
      rotate: "rotate(15deg)",
      slideRight: "translateX(30px)",
      slideUp: "translateY(-30px)",
      flip: "rotateY(180deg)",
      bounce: "translateY(-10px)",
    }
    startCSS += `transform: none;\n`
    endCSS += `transform: ${transformMap[effect]};\n`
    twStart += `transform `
    twEnd += `hover:transform `
  }

  const cssCode = `
/* Initial */
${startCSS.trim()}

/* Transition */
transition-property: ${property};
transition-duration: ${duration}ms;
transition-delay: ${delay}ms;
transition-timing-function: ${timing};

/* Final */
${endCSS.trim()}
`.trim()

  const tailwindCode = `
${twStart}
transition-${property === "all" ? "all" : `[${property}]`}
duration-[${duration}ms]
delay-[${delay}ms]
${timing !== "ease" ? `ease-${timing}` : ""}
${twEnd}
`.replace(/\s+/g, " ").trim()

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <Card>
        <CardContent className="flex items-center justify-center p-6 min-h-[300px]">
          <div
            ref={boxRef}
            className="w-36 h-36 rounded-lg flex items-center justify-center text-white"
            style={{
              backgroundColor: startBg,
              color: startColor,
              opacity: startOpacity,
            }}
          >
            Box
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <Label>Transition Property</Label>
            <Select value={property} onValueChange={setProperty}>
              <SelectTrigger><span>{property}</span></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="transform">Transform</SelectItem>
                <SelectItem value="opacity">Opacity</SelectItem>
                <SelectItem value="background-color">Background Color</SelectItem>
                <SelectItem value="color">Color</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {(property === "background-color" || property === "all") && (
            <div className="flex gap-4">
              <div><Label>From BG</Label><Input type="color" value={startBg} onChange={(e) => setStartBg(e.target.value)} /></div>
              <div><Label>To BG</Label><Input type="color" value={endBg} onChange={(e) => setEndBg(e.target.value)} /></div>
            </div>
          )}

          {(property === "color" || property === "all") && (
            <div className="flex gap-4">
              <div><Label>From Color</Label><Input type="color" value={startColor} onChange={(e) => setStartColor(e.target.value)} /></div>
              <div><Label>To Color</Label><Input type="color" value={endColor} onChange={(e) => setEndColor(e.target.value)} /></div>
            </div>
          )}

          {(property === "opacity" || property === "all") && (
            <div className="flex gap-4 items-end">
              <div className="flex-1"><Label>From Opacity ({startOpacity})</Label><Slider min={0} max={1} step={0.1} defaultValue={[startOpacity]} onValueChange={([v]) => setStartOpacity(v)} /></div>
              <div className="flex-1"><Label>To Opacity ({endOpacity})</Label><Slider min={0} max={1} step={0.1} defaultValue={[endOpacity]} onValueChange={([v]) => setEndOpacity(v)} /></div>
            </div>
          )}

          {(property === "transform" || property === "all") && (
            <div>
              <Label>Transform Effect</Label>
              <Select value={effect} onValueChange={setEffect}>
                <SelectTrigger><span>{effect}</span></SelectTrigger>
                <SelectContent>
                  <SelectItem value="scale">Scale</SelectItem>
                  <SelectItem value="rotate">Rotate</SelectItem>
                  <SelectItem value="slideRight">Slide Right</SelectItem>
                  <SelectItem value="slideUp">Slide Up</SelectItem>
                  <SelectItem value="flip">Flip</SelectItem>
                  <SelectItem value="bounce">Bounce</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div><Label>Duration ({duration}ms)</Label><Slider defaultValue={[duration]} min={100} max={2000} step={100} onValueChange={([v]) => setDuration(v)} /></div>
          <div><Label>Delay ({delay}ms)</Label><Slider defaultValue={[delay]} min={0} max={1000} step={100} onValueChange={([v]) => setDelay(v)} /></div>

          <div>
            <Label>Timing Function</Label>
            <Select value={timing} onValueChange={setTiming}>
              <SelectTrigger><span>{timing}</span></SelectTrigger>
              <SelectContent>
                <SelectItem value="ease">Ease</SelectItem>
                <SelectItem value="linear">Linear</SelectItem>
                <SelectItem value="ease-in">Ease-In</SelectItem>
                <SelectItem value="ease-out">Ease-Out</SelectItem>
                <SelectItem value="ease-in-out">Ease-In-Out</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full mt-4" onClick={playTransition}>
            Play Transition
          </Button>
        </CardContent>
      </Card>

      <div className="sm:col-span-2">
        <CodeBlock tailwindCode={tailwindCode} cssCode={cssCode} />
      </div>
    </div>
  )
}

export default TransitionEditor
