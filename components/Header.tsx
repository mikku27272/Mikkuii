import { motion } from 'framer-motion'

interface HeaderProps {
  username: string
}

export default function Header({ username }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 text-white p-6 text-center"
    >
      <motion.h1
        className="text-4xl font-bold"
        whileHover={{ scale: 1.05 }}
      >
        PayPal
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl mt-2"
      >
        Welcome, {username}!
      </motion.p>
    </motion.header>
  )
}

