import React, { useState } from "react"
import CodeBlock from "../components/CodeBlock"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"

function BoxStyler() {
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(200)
  const [radius, setRadius] = useState(8)
  const [opacity, setOpacity] = useState(100)
  const [bgColor, setBgColor] = useState("#ffffff")
  const [hoverBgColor, setHoverBgColor] = useState("#3b82f6")
  const [shadowLevel, setShadowLevel] = useState(3)
  const [hoverMode, setHoverMode] = useState(false)
  const [transitionType, setTransitionType] = useState("ease")

  const shadowMap = {
    0: "none",
    1: "0 4px 12px rgba(0, 0, 0, 0.3)",
    2: "0 6px 20px rgba(0, 0, 0, 0.4)",
    3: "0 8px 30px rgba(0, 0, 0, 0.5)",
    4: "0 12px 40px rgba(0, 0, 0, 0.6)",
    5: "0 16px 50px rgba(0, 0, 0, 0.7)",
    6: "0 20px 60px rgba(0, 0, 0, 0.75)",
  }

  const tailwindShadowMap = {
    0: "",
    1: "shadow-md",
    2: "shadow-lg",
    3: "shadow-xl",
    4: "shadow-2xl",
    5: "shadow-[0_16px_50px_rgba(0,0,0,0.7)]",
    6: "shadow-[0_20px_60px_rgba(0,0,0,0.75)]",
  }

  const transitionValue =
    transitionType === "none" ? "none" : `all 0.3s ${transitionType}`

  const previewStyle = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${radius}px`,
    backgroundColor: bgColor,
    opacity: opacity / 100,
    boxShadow: shadowMap[shadowLevel],
    transition: transitionValue,
  }

  const previewHoverStyle = hoverMode
    ? {
        backgroundColor: hoverBgColor,
        boxShadow: shadowMap[shadowLevel],
        borderRadius: `${radius}px`,
        opacity: opacity / 100,
      }
    : {}

  const tailwindClasses = `
    w-[${width}px]
    h-[${height}px]
    rounded-[${radius}px]
    bg-[${bgColor}]
    opacity-[${opacity}%]
    ${transitionType !== "none" ? "transition-all" : ""}
    ${tailwindShadowMap[shadowLevel]}
    ${hoverMode ? `hover:bg-[${hoverBgColor}]` : ""}
  `.replace(/\s+/g, " ").trim()

  const plainCSS = `width: ${width}px;
height: ${height}px;
border-radius: ${radius}px;
background-color: ${bgColor};
opacity: ${opacity / 100};
box-shadow: ${shadowMap[shadowLevel]};
transition: ${transitionValue};${
    hoverMode
      ? `

:hover {
  background-color: ${hoverBgColor};
}`
      : ""
  }`

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      
      <Card>
        <CardContent className="flex items-center justify-center p-6 min-h-[300px]">
          <div
            style={previewStyle}
            onMouseEnter={(e) => {
              if (hoverMode)
                Object.assign(e.currentTarget.style, previewHoverStyle)
            }}
            onMouseLeave={(e) => {
              if (hoverMode)
                Object.assign(e.currentTarget.style, previewStyle)
            }}
          />
        </CardContent>
      </Card>

      
      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <Label>Width ({width}px)</Label>
            <Slider
              defaultValue={[width]}
              min={50}
              max={400}
              step={10}
              onValueChange={([val]) => setWidth(val)}
            />
          </div>
          <div>
            <Label>Height ({height}px)</Label>
            <Slider
              defaultValue={[height]}
              min={50}
              max={400}
              step={10}
              onValueChange={([val]) => setHeight(val)}
            />
          </div>
          <div>
            <Label>Border Radius ({radius}px)</Label>
            <Slider
              defaultValue={[radius]}
              min={0}
              max={100}
              step={4}
              onValueChange={([val]) => setRadius(val)}
            />
          </div>
          <div>
            <Label>Opacity ({opacity}%)</Label>
            <Slider
              defaultValue={[opacity]}
              min={0}
              max={100}
              step={5}
              onValueChange={([val]) => setOpacity(val)}
            />
          </div>
          <div>
            <Label>Shadow Level ({shadowLevel})</Label>
            <Slider
              defaultValue={[shadowLevel]}
              min={0}
              max={6}
              step={1}
              onValueChange={([val]) => setShadowLevel(val)}
            />
          </div>
          <div>
            <Label>Background Color</Label>
            <Input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Label className="mr-auto">Hover Mode</Label>
            <Switch checked={hoverMode} onCheckedChange={setHoverMode} />
          </div>

          {hoverMode && (
            <>
              <div>
                <Label>Hover BG Color</Label>
                <Input
                  type="color"
                  value={hoverBgColor}
                  onChange={(e) => setHoverBgColor(e.target.value)}
                />
              </div>
              <div>
                <Label>Transition Type</Label>
                <select
                  value={transitionType}
                  onChange={(e) => setTransitionType(e.target.value)}
                  className="w-full mt-1 rounded border border-border bg-popover text-popover-foreground px-2 py-1 text-sm"
                >
                  <option value="none">None</option>
                  <option value="ease">Ease</option>
                  <option value="linear">Linear</option>
                  <option value="ease-in-out">Ease-In-Out</option>
                </select>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      
      <div className="sm:col-span-2">
        <CodeBlock tailwindCode={tailwindClasses} cssCode={plainCSS} />
      </div>
    </div>
  )
}

export default BoxStyler
