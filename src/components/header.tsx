import Container from './container'
import UserMenu from "./user-menu"
import LogOutBtn from './logout-btn'

const Header = () => {

  return (
    <Container className="py-4">
      <header className="flex justify-between items-center sm:px-4">
        <UserMenu />
        <LogOutBtn />
      </header>
    </Container>
  )
}

export default Header