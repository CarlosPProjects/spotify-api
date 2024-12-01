import Container from './container'
import UserMenu from "./user-menu"
import UserDropdownOps from './user-dropdown-opts'

const Header = () => {

  return (
    <Container className="py-4">
      <header className="flex justify-between items-center px-4">
        <UserMenu />
        <UserDropdownOps />
      </header>
    </Container>
  )
}

export default Header