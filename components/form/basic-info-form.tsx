'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BasicInfoInputs, basicInfoSchema } from '@/lib/validation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserFormState } from '@/lib/types'
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form'

interface BasicInfoFormProps {
  formState: UserFormState
  updateForm: (data: Partial<UserFormState>) => void
  nextStep: () => void
}

export function BasicInfoForm({ formState, updateForm, nextStep }: BasicInfoFormProps) {
  const form = useForm<BasicInfoInputs>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      name: formState.name || '',
      email: formState.email || '',
    },
  })

  function onSubmit(data: BasicInfoInputs) {
    updateForm(data)
    nextStep()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Continue</Button>
      </form>
    </Form>
  )
}