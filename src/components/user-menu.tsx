import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const UserMenu = () => {

  return (
    <div className='flex gap-2'>
      <Avatar className='shadow'>
        <AvatarImage src='/assets/images/profile-pic.png' />
        <AvatarFallback>CG</AvatarFallback>
      </Avatar>
      <div className='flex flex-col'>
        <span className='text-sm font-semibold'>Carlos Garavito</span>
        <Link href='https://www.youtube.com/@Stoodiow' className='text-xs font-medium text-muted-foreground'>@<span className='underline'>stoodiow</span></Link>
      </div>
    </div>
  )
}

export default UserMenu