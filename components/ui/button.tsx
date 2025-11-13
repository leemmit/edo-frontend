import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive font-black",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--dark-blue)] text-primary-foreground shadow-xs hover:bg-[var(--blue)]",
        arrow:
          "text-[var(--blue)] hover:text-[var(--dark-blue)]",
        outline:
          "outline-2 outline-inset outline-solid outline-[var(--dark-blue)] bg-transparent hover:outline-[var(--blue)] text-[var(--dark-blue)] hover:text-[var(--blue)]",
        icon:
          "bg-transparent text-[var(--dark-blue)] hover:text-[var(--blue)] py-0",
      },
      size: {
        default: "h-9 px-4 py-6 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-14 text-md 2xl:text-xl rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
