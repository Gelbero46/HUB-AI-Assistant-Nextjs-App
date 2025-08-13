import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'sm', 
  className, 
  ...props 
}: ButtonProps) => {
  const baseStyles = 'font-semibold rounded-full cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
const variants = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
  secondary: 'bg-gray-800 hover:bg-gray-700 text-primary-50 focus:ring-primary-500 ',
  outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 '
}

  
  const sizes = {
    sm: 'px-2 py-2 w-[160px] text-sm',
    md: 'px-4 py-3 w-[180px] text-base',
    lg: 'px-6 py-4 w-[250px] text-lg'
  }

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button