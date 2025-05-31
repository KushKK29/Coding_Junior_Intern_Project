import { User } from '@/lib/types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{user.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-start gap-2">
          <Mail className="h-4 w-4 text-muted-foreground mt-0.5" />
          <span className="text-sm">{user.email}</span>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
          <span className="text-sm">{user.phone}</span>
        </div>
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
          <span className="text-sm">{user.address.city}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2 text-xs text-muted-foreground">
        User ID: {user.id}
      </CardFooter>
    </Card>
  )
}