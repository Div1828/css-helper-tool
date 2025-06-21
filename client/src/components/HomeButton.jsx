import { Home } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

function HomeButton() {
  const navigate = useNavigate()

  return (
    <Button
      size="icon"
      variant="secondary"
      onClick={() => navigate("/")}
      className="fixed top-4 left-4 z-50 rounded-full shadow-md hover:scale-105 transition-transform w-10 h-10">
      <Home className="w-5 h-5" />
    </Button>
  )
}

export default HomeButton
