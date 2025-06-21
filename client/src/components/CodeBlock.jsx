import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

function CodeBlock({ tailwindCode, cssCode }) {
  const [useTailwind, setUseTailwind] = useState(false)
  const code = useTailwind ? tailwindCode : cssCode
  const language = useTailwind ? "html" : "css"

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <Card >
      <CardContent className="relative p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label className="text-sm font-medium">Tailwind Output</Label>
            <Switch checked={useTailwind} onCheckedChange={setUseTailwind} />
          </div>
          <Button size="sm" variant="outline" onClick={handleCopy}>
            <Copy className="w-4 h-4 mr-1" />
            Copy
          </Button>
        </div>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-auto whitespace-pre-wrap">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </CardContent>
    </Card>
  )
}

export default CodeBlock
