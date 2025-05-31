'use client'

import { UserFormState } from '@/lib/types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'

interface ReviewFormProps {
  formState: UserFormState
  prevStep: () => void
  resetForm: () => void
}

export function ReviewForm({ formState, prevStep, resetForm }: ReviewFormProps) {
  const { toast } = useToast()
  
  const handleSubmit = () => {
    // Log the form data to console as required
    console.log('Submitted user data:', formState)
    
    // Show success toast
    toast({
      title: 'User Added Successfully',
      description: `${formState.name} has been added to the system.`,
      variant: 'default',
    })
    
    // Reset the form
    resetForm()
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Review Information</CardTitle>
          <CardDescription>
            Please review the information below before submitting.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <h3 className="font-medium text-sm text-muted-foreground">Basic Information</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm font-medium">Name</p>
                <p className="text-sm">{formState.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm">{formState.email}</p>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium text-sm text-muted-foreground">Address Information</h3>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <p className="text-sm font-medium">Street</p>
                <p className="text-sm">{formState.street}</p>
              </div>
              <div>
                <p className="text-sm font-medium">City</p>
                <p className="text-sm">{formState.city}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Zip Code</p>
                <p className="text-sm">{formState.zipcode}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevStep}>
            Back
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/dashboard">Cancel</Link>
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}