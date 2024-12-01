import Container from './container'
import { Button } from "./ui/button"
import { EllipsisVertical } from "lucide-react"
import UserMenu from "./user-menu"

const Header = () => {
  return (
    <Container className="py-4">
      <header className="flex justify-between items-center">
        <UserMenu />
        <Button size='icon' variant='outline'>
          <EllipsisVertical />
        </Button>
      </header>
    </Container>
  )
}

export default Header