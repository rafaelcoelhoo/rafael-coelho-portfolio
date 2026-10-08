import { cloneElement, isValidElement, type ButtonHTMLAttributes, type ReactElement, type ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'secondary' | 'outline'
}

const variants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
}

const sizes = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 rounded-md px-3 text-xs',
  lg: 'h-10 rounded-md px-6',
  icon: 'size-9',
}

export function Button({
  asChild = false,
  size = 'default',
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps & { children?: ReactNode }) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ${variants[variant]} ${sizes[size]} ${className ?? ''}`

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>
    return cloneElement(child, {
      className: [classes, child.props.className].filter(Boolean).join(' '),
    })
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}
