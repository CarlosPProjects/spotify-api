
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const UserMenu = () => {
  return (
    <div className='flex gap-2'>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='flex flex-col'>
        <span className='text-sm font-semibold'>@stoodiow</span>
        <span className='text-sm font-medium text-muted-foreground'>stoodiow</span>
      </div>
    </div>
  )
}

export default UserMenu