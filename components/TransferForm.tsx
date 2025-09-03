'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, DollarSign, Send } from 'lucide-react'

interface TransferFormProps {
  onTransfer: (amount: number, recipient: string, recipientName: string) => void
}

export default function TransferForm({ onTransfer }: TransferFormProps) {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [recipientName, setRecipientName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    const transferAmount = parseFloat(amount)
    if (isNaN(transferAmount) || transferAmount <= 0) {
      setMessage('Please enter a valid amount')
      setIsLoading(false)
      return
    }

    if (recipient.trim() === '') {
      setMessage("Please enter the recipient's email or phone")
      setIsLoading(false)
      return
    }

    if (recipientName.trim() === '') {
      setMessage("Please enter the recipient's name")
      setIsLoading(false)
      return
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    onTransfer(transferAmount, recipient, recipientName)
    setAmount('')
    setRecipient('')
    setRecipientName('')
    setMessage('Money sent successfully!')
    setIsLoading(false)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="mb-4">
        <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-2">
          Recipient's Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            id="recipientName"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipient's name"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-2">
          Recipient's Email or Phone
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipient's email or phone"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
          Amount
        </label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0.00"
            min="0.01"
            step="0.01"
            required
          />
        </div>
      </div>
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-6 h-6 border-t-2 border-white rounded-full"
          />
        ) : (
          <>
            <Send className="mr-2" size={18} />
            Send Money
          </>
        )}
      </motion.button>
      <AnimatePresence>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-4 text-center ${
              message.includes('successfully') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  )
}

