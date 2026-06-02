import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'whatsapp'
  className?: string
  target?: string
  rel?: string
}

const Button = ({ children, onClick, href, variant = 'primary', className = '', target, rel }: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105'
  
  const variants = {
    primary: 'bg-cheese-500 hover:bg-cheese-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white hover:bg-gray-100 text-gray-900 border-2 border-cheese-500',
    whatsapp: 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl',
  }

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </MotionComponent>
  )
}

export default Button
