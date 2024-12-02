'use client'

import { DropdownMenuItem } from "./ui/dropdown-menu"
import { logout } from "@/actions/auth"

const LogOutBtn = () => {

  return (
    <DropdownMenuItem onClick={logout}>
      Log Out
    </DropdownMenuItem>
  )
}

export default LogOutBtn