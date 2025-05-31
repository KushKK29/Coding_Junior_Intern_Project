'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BasicInfoForm } from '@/components/form/basic-info-form'
import { AddressForm } from '@/components/form/address-form'
import { ReviewForm } from '@/components/form/review-form'
import { StepIndicator } from '@/components/form/step-indicator'
import { ArrowLeft } from 'lucide-react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { UserFormState } from '@/lib/types'

const STEPS = [
  { 
    title: 'Basic Information',
    description: 'Name and email details'
  },
  { 
    title: 'Address',
    description: 'Street, city and zip code'
  },
  { 
    title: 'Review',
    description: 'Verify and submit'
  },
]

const INITIAL_STATE: UserFormState = {
  step: 0,
  name: '',
  email: '',
  street: '',
  city: '',
  zipcode: '',
}

export default function AddUser() {
  const [formState, setFormState] = useLocalStorage<UserFormState>('user-form', INITIAL_STATE)

  const updateForm = (data: Partial<UserFormState>) => {
    setFormState(prev => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setFormState(prev => ({ ...prev, step: Math.min(prev.step + 1, STEPS.length - 1) }))
  }

  const prevStep = () => {
    setFormState(prev => ({ ...prev, step: Math.max(prev.step - 1, 0) }))
  }

  const resetForm = () => {
    setFormState(INITIAL_STATE)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to dashboard</span>
              </Link>
            </Button>
            <h1 className="text-xl font-semibold tracking-tight">Add New User</h1>
          </div>
        </div>
      </header>
      
      <main className="container max-w-3xl mx-auto py-8 px-4">
        <StepIndicator currentStep={formState.step} steps={STEPS} />
        
        <div className="mt-8">
          {formState.step === 0 && (
            <BasicInfoForm 
              formState={formState}
              updateForm={updateForm}
              nextStep={nextStep}
            />
          )}
          
          {formState.step === 1 && (
            <AddressForm 
              formState={formState}
              updateForm={updateForm}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          
          {formState.step === 2 && (
            <ReviewForm 
              formState={formState}
              prevStep={prevStep}
              resetForm={resetForm}
            />
          )}
        </div>
      </main>
    </div>
  )
}