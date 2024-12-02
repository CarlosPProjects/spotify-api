import { auth } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import AuthBtn from './auth-btn'
import { getInitials } from '@/lib/utils'

const UserMenu = async () => {

  const session = await auth()

  if (!session) return <AuthBtn />

  return (
    <div className='flex gap-2'>
      <Avatar>
        {session.user?.image ? <AvatarImage src={session.user?.image} /> : 
        <AvatarFallback>{getInitials(session.user?.email ?? 'NN')}</AvatarFallback>}
      </Avatar>
      <div className='flex flex-col'>
        <span className='text-sm font-semibold'>{session.user?.name}</span>
        <span className='text-sm font-medium text-muted-foreground'>{session.user?.email}</span>
      </div>
    </div>
  )
}

export default UserMenu