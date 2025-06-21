import React, { useState } from "react"
import CodeBlock from "../components/CodeBlock"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem
} from "@/components/ui/select"

function BorderLab() {
  const [top, setTop] = useState(2)
  const [right, setRight] = useState(2)
  const [bottom, setBottom] = useState(2)
  const [left, setLeft] = useState(2)

  const [borderColor, setBorderColor] = useState("#000000")
  const [borderStyle, setBorderStyle] = useState("solid")
  const [radius, setRadius] = useState(8)

  const previewStyle = {
    borderTop: `${top}px ${borderStyle} ${borderColor}`,
    borderRight: `${right}px ${borderStyle} ${borderColor}`,
    borderBottom: `${bottom}px ${borderStyle} ${borderColor}`,
    borderLeft: `${left}px ${borderStyle} ${borderColor}`,
    borderRadius: `${radius}px`,
  }

  const plainCSS = `
border-top: ${top}px ${borderStyle} ${borderColor};
border-right: ${right}px ${borderStyle} ${borderColor};
border-bottom: ${bottom}px ${borderStyle} ${borderColor};
border-left: ${left}px ${borderStyle} ${borderColor};
border-radius: ${radius}px;
`.trim()

  const tailwindCode = `
border-t-[${top}px]
border-r-[${right}px]
border-b-[${bottom}px]
border-l-[${left}px]
border-${borderStyle}
border-[${borderColor}]
rounded-[${radius}px]
`.replace(/\s+/g, " ").trim()

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <Card>
        <CardContent className="flex items-center justify-center p-6 min-h-[300px]">
          <div className="w-36 h-36 bg-white" style={previewStyle}></div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div><Label>Top Border ({top}px)</Label><Slider defaultValue={[top]} min={0} max={20} step={1} onValueChange={([v]) => setTop(v)} /></div>
          <div><Label>Right Border ({right}px)</Label><Slider defaultValue={[right]} min={0} max={20} step={1} onValueChange={([v]) => setRight(v)} /></div>
          <div><Label>Bottom Border ({bottom}px)</Label><Slider defaultValue={[bottom]} min={0} max={20} step={1} onValueChange={([v]) => setBottom(v)} /></div>
          <div><Label>Left Border ({left}px)</Label><Slider defaultValue={[left]} min={0} max={20} step={1} onValueChange={([v]) => setLeft(v)} /></div>

          <div><Label>Border Color</Label><Input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} /></div>

          <div>
            <Label>Border Style</Label>
            <Select value={borderStyle} onValueChange={setBorderStyle}>
              <SelectTrigger><span>{borderStyle}</span></SelectTrigger>
              <SelectContent>
                <SelectItem value="solid">Solid</SelectItem>
                <SelectItem value="dashed">Dashed</SelectItem>
                <SelectItem value="dotted">Dotted</SelectItem>
                <SelectItem value="double">Double</SelectItem>
                <SelectItem value="groove">Groove</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div><Label>Border Radius ({radius}px)</Label><Slider defaultValue={[radius]} min={0} max={100} step={4} onValueChange={([v]) => setRadius(v)} /></div>
        </CardContent>
      </Card>

      <div className="sm:col-span-2">
        <CodeBlock tailwindCode={tailwindCode} cssCode={plainCSS} />
      </div>
    </div>
  )
}

export default BorderLab
