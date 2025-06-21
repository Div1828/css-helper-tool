import React, { useState } from "react"
import CodeBlock from "../components/CodeBlock"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"

function ButtonStyler() {
  const [label, setLabel] = useState("Click Me")
  const [fontSize, setFontSize] = useState(16)
  const [paddingX, setPaddingX] = useState(16)
  const [paddingY, setPaddingY] = useState(10)
  const [borderRadius, setBorderRadius] = useState(6)
  const [bgColor, setBgColor] = useState("#1d4ed8")
  const [textColor, setTextColor] = useState("#ffffff")
  const [hoverBgColor, setHoverBgColor] = useState("#2563eb")
  const [shadowLevel, setShadowLevel] = useState(2)
  const [transitionType, setTransitionType] = useState("ease")

  const shadowMap = {
    0: "none",
    1: "0 4px 8px rgba(0, 0, 0, 0.2)",
    2: "0 6px 12px rgba(0, 0, 0, 0.3)",
    3: "0 8px 16px rgba(0, 0, 0, 0.4)",
    4: "0 10px 20px rgba(0, 0, 0, 0.5)",
  }

  const tailwindShadowMap = {
    0: "",
    1: "shadow-md",
    2: "shadow-lg",
    3: "shadow-xl",
    4: "shadow-2xl",
  }

  const transitionValue =
    transitionType === "none" ? "none" : `all 0.3s ${transitionType}`

  const previewStyle = {
    fontSize: `${fontSize}px`,
    padding: `${paddingY}px ${paddingX}px`,
    borderRadius: `${borderRadius}px`,
    backgroundColor: bgColor,
    color: textColor,
    boxShadow: shadowMap[shadowLevel],
    transition: transitionValue,
    border: "none",
    cursor: "pointer",
  }

  const hoverStyle = {
    backgroundColor: hoverBgColor,
  }

  const tailwindClasses = `
    text-[${fontSize}px]
    px-[${paddingX}px]
    py-[${paddingY}px]
    rounded-[${borderRadius}px]
    bg-[${bgColor}]
    text-[${textColor}]
    ${transitionType !== "none" ? "transition-all" : ""}
    ${tailwindShadowMap[shadowLevel]}
    hover:bg-[${hoverBgColor}]
  `.replace(/\s+/g, " ").trim()

  const plainCSS = `font-size: ${fontSize}px;
padding: ${paddingY}px ${paddingX}px;
border-radius: ${borderRadius}px;
background-color: ${bgColor};
color: ${textColor};
box-shadow: ${shadowMap[shadowLevel]};
transition: ${transitionValue};
border: none;
cursor: pointer;

:hover {
  background-color: ${hoverBgColor};
}`

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      
      <Card>
        <CardContent className="flex items-center justify-center p-6 min-h-[300px]">
          <button
            style={previewStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, hoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, previewStyle)
            }
          >
            {label}
          </button>
        </CardContent>
      </Card>

      
      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <Label>Button Label</Label>
            <Input value={label} onChange={(e) => setLabel(e.target.value)} />
          </div>
          <div>
            <Label>Font Size ({fontSize}px)</Label>
            <Slider
              defaultValue={[fontSize]}
              min={12}
              max={36}
              step={1}
              onValueChange={([val]) => setFontSize(val)}
            />
          </div>
          <div>
            <Label>Padding X ({paddingX}px)</Label>
            <Slider
              defaultValue={[paddingX]}
              min={4}
              max={40}
              step={2}
              onValueChange={([val]) => setPaddingX(val)}
            />
          </div>
          <div>
            <Label>Padding Y ({paddingY}px)</Label>
            <Slider
              defaultValue={[paddingY]}
              min={2}
              max={30}
              step={2}
              onValueChange={([val]) => setPaddingY(val)}
            />
          </div>
          <div>
            <Label>Border Radius ({borderRadius}px)</Label>
            <Slider
              defaultValue={[borderRadius]}
              min={0}
              max={40}
              step={2}
              onValueChange={([val]) => setBorderRadius(val)}
            />
          </div>
          <div>
            <Label>Shadow Level ({shadowLevel})</Label>
            <Slider
              defaultValue={[shadowLevel]}
              min={0}
              max={4}
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
          <div>
            <Label>Text Color</Label>
            <Input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
          <div>
            <Label>Hover Background</Label>
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
        </CardContent>
      </Card>

      
      <div className="sm:col-span-2">
        <CodeBlock tailwindCode={tailwindClasses} cssCode={plainCSS} />
      </div>
    </div>
  )
}

export default ButtonStyler
