'use client'

import { login } from '@/actions/auth'
import { Button } from './ui/button'

const AuthBtn = () => {

  return (
    <Button onClick={() => login('spotify')}>
      Sign in
    </Button>
  )
}

export default AuthBtn