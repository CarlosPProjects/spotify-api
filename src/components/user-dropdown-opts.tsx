import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react"
import { Button } from "./ui/button"
import AccessTokenBtn from "./access-token-btn"
import LogOutBtn from "./logout-btn"


const UserDropdownOps = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Profile
        </DropdownMenuItem>
        <AccessTokenBtn />
        <DropdownMenuSeparator />
        <LogOutBtn />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdownOps