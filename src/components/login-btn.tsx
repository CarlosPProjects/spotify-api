'use client'

import { Button } from './ui/button'
import { login } from '@/actions/auth'

const LoginBtn = () => {

  const handleClick = async () => {
    await login('spotify')
  }

  return (
    <Button onClick={handleClick} variant='ghost'>
      Login
    </Button>
  )
}

export default LoginBtn