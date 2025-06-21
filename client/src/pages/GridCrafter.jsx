import React, { useState } from "react"
import CodeBlock from "../components/CodeBlock"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

function GridCrafter() {
  const [columns, setColumns] = useState(3)
  const [rows, setRows] = useState(2)
  const [gap, setGap] = useState(16)
  const [justify, setJustify] = useState("start")
  const [align, setAlign] = useState("start")

  const cssCode = `
display: grid;
grid-template-columns: repeat(${columns}, 1fr);
grid-template-rows: repeat(${rows}, 1fr);
gap: ${gap}px;
justify-items: ${justify};
align-items: ${align};
`.trim()

  const tailwindCode = `
grid
grid-cols-${columns}
grid-rows-${rows}
gap-[${gap}px]
justify-items-${justify}
items-${align}
`.replace(/\s+/g, " ").trim()

  const totalItems = columns * rows
  const items = Array.from({ length: totalItems }, (_, i) => i + 1)

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <Card>
        <CardContent className="p-4">
            <div className="w-full aspect-[3/2] bg-muted rounded overflow-hidden p-2">
                <div
                    className="w-full h-full grid"
                    style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
                    gap: `${gap}px`,
                    justifyItems: justify,
                    alignItems: align,
                    }}
                >
                    {items.map((i) => (
                    <div
                        key={i}
                        className="bg-blue-500 text-black dark:text-white text-sm flex items-center justify-center rounded"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <div className="w-full h-full flex items-center justify-center text-xs rounded bg-blue-500">
                        {i}
                        </div>
                    </div>
                    ))}
                </div>
            </div>


        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <Label>Columns ({columns})</Label>
            <Slider
              min={1}
              max={5}
              step={1}
              defaultValue={[columns]}
              onValueChange={([v]) => setColumns(v)}
            />
          </div>
          <div>
            <Label>Rows ({rows})</Label>
            <Slider
              min={1}
              max={5}
              step={1}
              defaultValue={[rows]}
              onValueChange={([v]) => setRows(v)}
            />
          </div>
          <div>
            <Label>Gap ({gap}px)</Label>
            <Slider
              min={0}
              max={40}
              step={4}
              defaultValue={[gap]}
              onValueChange={([v]) => setGap(v)}
            />
          </div>

          <div>
            <Label>Justify Items</Label>
            <Select value={justify} onValueChange={setJustify}>
              <SelectTrigger>
                <span>{justify}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="end">End</SelectItem>
                <SelectItem value="stretch">Stretch</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Align Items</Label>
            <Select value={align} onValueChange={setAlign}>
              <SelectTrigger>
                <span>{align}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="end">End</SelectItem>
                <SelectItem value="stretch">Stretch</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="sm:col-span-2">
        <CodeBlock cssCode={cssCode} tailwindCode={tailwindCode} />
      </div>
    </div>
  )
}

export default GridCrafter
