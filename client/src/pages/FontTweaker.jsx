import React, { useState } from "react"
import CodeBlock from "../components/CodeBlock"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Select } from "@/components/ui/select"
import { SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"

function FontTweaker() {
  const [sampleText, setSampleText] = useState("The quick brown fox jumps over the lazy dog.")
  const [fontSize, setFontSize] = useState(20)
  const [fontWeight, setFontWeight] = useState(400)
  const [letterSpacing, setLetterSpacing] = useState(0)
  const [lineHeight, setLineHeight] = useState(1.5)
  const [textAlign, setTextAlign] = useState("left")
  const [textTransform, setTextTransform] = useState("none")
  const [fontFamily, setFontFamily] = useState("sans-serif")
  const [textColor, setTextColor] = useState("#000000")
  const [bgColor, setBgColor] = useState("#ffffff")

  const previewStyle = {
    fontSize: `${fontSize}px`,
    fontWeight,
    letterSpacing: `${letterSpacing}px`,
    lineHeight,
    textAlign,
    textTransform,
    fontFamily,
    color: textColor,
    backgroundColor: bgColor,
    padding: "1rem",
    width: "100%",
    minHeight: "200px",
    borderRadius: "8px",
    resize: "none",
    border: "none",
    outline: "none",
  }

  const tailwindCode = `
    text-[${fontSize}px]
    font-[${fontWeight}]
    tracking-[${letterSpacing}px]
    leading-[${lineHeight}]
    text-${textAlign}
    ${textTransform !== "none" ? `uppercase` : ""}
    bg-[${bgColor}]
    text-[${textColor}]
    font-[${fontFamily}]
  `.replace(/\s+/g, " ").trim()

  const plainCSS = `font-size: ${fontSize}px;
font-weight: ${fontWeight};
letter-spacing: ${letterSpacing}px;
line-height: ${lineHeight};
text-align: ${textAlign};
text-transform: ${textTransform};
font-family: ${fontFamily};
color: ${textColor};
background-color: ${bgColor};`

  return (
    <div className="grid gap-6 sm:grid-cols-2">
    
      <Card>
        <CardContent className="p-4">
          <textarea
            style={previewStyle}
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
          />
        </CardContent>
      </Card>

      
      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <Label>Font Size ({fontSize}px)</Label>
            <Slider min={12} max={72} step={1} defaultValue={[fontSize]} onValueChange={([v]) => setFontSize(v)} />
          </div>
          <div>
            <Label>Font Weight ({fontWeight})</Label>
            <Slider min={100} max={900} step={100} defaultValue={[fontWeight]} onValueChange={([v]) => setFontWeight(v)} />
          </div>
          <div>
            <Label>Letter Spacing ({letterSpacing}px)</Label>
            <Slider min={-2} max={10} step={1} defaultValue={[letterSpacing]} onValueChange={([v]) => setLetterSpacing(v)} />
          </div>
          <div>
            <Label>Line Height ({lineHeight})</Label>
            <Slider min={1} max={2.5} step={0.1} defaultValue={[lineHeight]} onValueChange={([v]) => setLineHeight(parseFloat(v.toFixed(1)))} />
          </div>
          <div>
            <Label>Text Align</Label>
            <Select value={textAlign} onValueChange={setTextAlign}>
              <SelectTrigger><span className="capitalize">{textAlign}</span></SelectTrigger>
              <SelectContent>
                <SelectItem value="left">Left</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="right">Right</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Text Transform</Label>
            <Select value={textTransform} onValueChange={setTextTransform}>
              <SelectTrigger><span className="capitalize">{textTransform}</span></SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="uppercase">Uppercase</SelectItem>
                <SelectItem value="lowercase">Lowercase</SelectItem>
                <SelectItem value="capitalize">Capitalize</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Font Family</Label>
            <Select value={fontFamily} onValueChange={setFontFamily}>
              <SelectTrigger><span>{fontFamily}</span></SelectTrigger>
              <SelectContent>
                <SelectItem value="sans-serif">Sans (System)</SelectItem>
                <SelectItem value="serif">Serif (System)</SelectItem>
                <SelectItem value="monospace">Monospace (System)</SelectItem>
                <SelectItem value="cursive">Cursive (System)</SelectItem>
                <SelectItem value='"Roboto", sans-serif'>Roboto</SelectItem>
                <SelectItem value='"Open Sans", sans-serif'>Open Sans</SelectItem>
                <SelectItem value='"Georgia", serif'>Georgia</SelectItem>
                <SelectItem value='"Courier New", monospace'>Courier New</SelectItem>
                <SelectItem value='"Comic Sans MS", cursive, sans-serif'>Comic Sans</SelectItem>    
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Text Color</Label>
            <Input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
          </div>
          <div>
            <Label>Background Color</Label>
            <Input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
          </div>
        </CardContent>
      </Card>

      
      <div className="sm:col-span-2">
        <CodeBlock tailwindCode={tailwindCode} cssCode={plainCSS} />
      </div>
    </div>
  )
}

export default FontTweaker
