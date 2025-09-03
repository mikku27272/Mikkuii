'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import TransferForm from './TransferForm'
import ActivityFeed from './ActivityFeed'

export default function PayPalApp() {
  const [username, setUsername] = useState('JohnDoe')
  const [activities, setActivities] = useState<Array<{ type: string; amount: number; recipient: string; recipientName: string; date: Date }>>([])

  const handleTransfer = (amount: number, recipient: string, recipientName: string) => {
    if (amount > 0 && recipient.trim() !== '' && recipientName.trim() !== '') {
      setActivities(prevActivities => [
        { type: 'transfer', amount, recipient, recipientName, date: new Date() },
        ...prevActivities
      ])
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
    >
      <Header username={username} />
      <div className="p-6">
        <TransferForm onTransfer={handleTransfer} />
        <ActivityFeed activities={activities} />
      </div>
    </motion.div>
  )
}

