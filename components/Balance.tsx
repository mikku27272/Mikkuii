import { motion } from 'framer-motion'

interface BalanceProps {
  balance: number
}

export default function Balance({ balance }: BalanceProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your Balance</h2>
      <motion.p
        className="text-5xl font-bold text-green-600"
        key={balance}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 15 }}
      >
        ${balance.toFixed(2)}
      </motion.p>
    </motion.div>
  )
}

