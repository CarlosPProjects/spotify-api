import Container from './container'
import UserMenu from "./user-menu"
import LogOutBtn from './logout-btn'
import { auth } from '@/auth'
import LoginBtn from './login-btn'

const Header = async () => {

  const session = await auth()

  return (
    <Container className="py-4">
      <header className="flex justify-between items-center sm:px-4">
        <UserMenu />
        {session ? <LogOutBtn /> : <LoginBtn />}
      </header>
    </Container>
  )
}

export default Header