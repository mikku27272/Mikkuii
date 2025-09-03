'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import TransferForm from './TransferForm'
import ActivityFeed from './ActivityFeed'

export default function CashApp() {
  const [username, setUsername] = useState('JohnDoe')
  const [activities, setActivities] = useState<Array<{ type: string; amount: number; date: Date }>>([])

  const handleTransfer = (amount: number, recipient: string) => {
    if (amount > 0) {
      setActivities(prevActivities => [
        { type: 'transfer', amount, date: new Date() },
        ...prevActivities
      ])
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto p-6 bg-white rounded-3xl shadow-xl"
    >
      <Header username={username} />
      <TransferForm onTransfer={handleTransfer} />
      <ActivityFeed activities={activities} />
    </motion.div>
  )
}

