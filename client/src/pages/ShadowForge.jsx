import React, { useState } from "react"
import CodeBlock from "../components/CodeBlock"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"

function ShadowForge() {
  const [xOffset, setXOffset] = useState(0)
  const [yOffset, setYOffset] = useState(10)
  const [blur, setBlur] = useState(20)
  const [spread, setSpread] = useState(0)
  const [shadowColor, setShadowColor] = useState("#00000088")
  const [inset, setInset] = useState(false)
  const [bgColor, setBgColor] = useState("#ffffff")

  const shadowString = `${inset ? "inset " : ""}${xOffset}px ${yOffset}px ${blur}px ${spread}px ${shadowColor}`

  const previewStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "12px",
    backgroundColor: bgColor,
    boxShadow: shadowString,
    transition: "all 0.3s ease",
  }

  const plainCSS = `box-shadow: ${shadowString};
background-color: ${bgColor};`

  const tailwindCSS = `shadow-[${inset ? "inset_" : ""}${xOffset}px_${yOffset}px_${blur}px_${spread}px_${shadowColor}]
bg-[${bgColor}]`

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <Card>
        <CardContent className="flex items-center justify-center p-6 min-h-[300px]">
          <div style={previewStyle}></div>
        </CardContent>
      </Card>

      
      <Card>
        <CardContent className="space-y-4 p-6">
          <div><Label>X Offset ({xOffset}px)</Label><Slider min={-50} max={50} step={1} defaultValue={[xOffset]} onValueChange={([v]) => setXOffset(v)} /></div>
          <div><Label>Y Offset ({yOffset}px)</Label><Slider min={-50} max={50} step={1} defaultValue={[yOffset]} onValueChange={([v]) => setYOffset(v)} /></div>
          <div><Label>Blur Radius ({blur}px)</Label><Slider min={0} max={100} step={1} defaultValue={[blur]} onValueChange={([v]) => setBlur(v)} /></div>
          <div><Label>Spread Radius ({spread}px)</Label><Slider min={-50} max={50} step={1} defaultValue={[spread]} onValueChange={([v]) => setSpread(v)} /></div>
          <div><Label>Shadow Color</Label><Input type="color" value={shadowColor} onChange={(e) => setShadowColor(e.target.value)} /></div>
          <div><Label>Background Color</Label><Input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} /></div>

          <div className="flex items-center gap-2 pt-2">
            <Label className="mr-auto">Inset</Label>
            <Switch checked={inset} onCheckedChange={setInset} />
          </div>
        </CardContent>
      </Card>

      
      <div className="sm:col-span-2">
        <CodeBlock tailwindCode={tailwindCSS} cssCode={plainCSS} />
      </div>
    </div>
  )
}

export default ShadowForge
