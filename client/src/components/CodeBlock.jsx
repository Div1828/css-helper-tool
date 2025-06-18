import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy } from "lucide-react"

function CodeBlock({ code, language = "html" }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <Card>
      <CardContent className="relative p-4">
        <pre className="bg-muted rounded-md p-4 text-sm overflow-auto whitespace-pre-wrap">
          <code className="language-{language}">{code}</code>
        </pre>
        <Button
          size="sm"
          variant="outline"
          className="absolute top-2 right-2"
          onClick={handleCopy}
        >
          <Copy className="w-4 h-4 mr-1" />
          Copy
        </Button>
      </CardContent>
    </Card>
  )
}

export default CodeBlock
