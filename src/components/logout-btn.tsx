'use client'

import { LogOut } from "lucide-react"
import { Button } from "./ui/button"
import { logout } from "@/actions/auth"

const LogOutBtn = () => {

  return (
    <Button size='icon' variant='ghost' onClick={logout}>
      <LogOut />
    </Button>
  )
}

export default LogOutBtn