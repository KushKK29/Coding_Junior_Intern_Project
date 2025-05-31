import { z } from 'zod'

export const basicInfoSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
})

export const addressSchema = z.object({
  street: z.string().min(3, {
    message: 'Street must be at least 3 characters.',
  }),
  city: z.string().min(2, {
    message: 'City must be at least 2 characters.',
  }),
  zipcode: z.string().min(5, {
    message: 'Zip code must be at least 5 characters.',
  }),
})

export const userFormSchema = z.object({
  ...basicInfoSchema.shape,
  ...addressSchema.shape,
})

export type BasicInfoInputs = z.infer<typeof basicInfoSchema>
export type AddressInputs = z.infer<typeof addressSchema>
export type UserFormInputs = z.infer<typeof userFormSchema>