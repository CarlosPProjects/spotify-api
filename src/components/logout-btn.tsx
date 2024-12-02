'use client'

import { signOut } from "@/auth"
import { DropdownMenuItem } from "./ui/dropdown-menu"

const LogOutBtn = () => {
  return (
    <DropdownMenuItem onClick={() => signOut}>
      Log Out
    </DropdownMenuItem>
  )
}

export default LogOutBtn