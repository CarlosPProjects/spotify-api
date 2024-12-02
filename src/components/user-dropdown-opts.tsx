import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react"
import { Button } from "./ui/button"

import AccessTokenBtn from "./access-token-btn"
import GetPlaylistBtn from "./get-playlists-btn"
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
        <GetPlaylistBtn />
        <AccessTokenBtn />
        <DropdownMenuSeparator />
        <LogOutBtn />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdownOps