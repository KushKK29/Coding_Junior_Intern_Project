'use client'

import { CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StepIndicatorProps {
  currentStep: number
  steps: { title: string; description: string }[]
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="space-y-6">
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.title} className="md:flex-1">
              <div
                className={cn(
                  "group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4",
                  index < currentStep
                    ? "border-primary"
                    : index === currentStep
                    ? "border-primary"
                    : "border-muted"
                )}
              >
                <span
                  className={cn(
                    "flex items-center text-sm font-medium",
                    index < currentStep
                      ? "text-primary"
                      : index === currentStep
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full mr-2 border">
                    {index < currentStep ? (
                      <CheckIcon className="h-4 w-4" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </span>
                  {step.title}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {step.description}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}