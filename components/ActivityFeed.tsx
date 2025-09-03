import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Activity {
  type: string
  amount: number
  recipient: string
  recipientName: string
  date: Date
}

interface ActivityFeedProps {
  activities: Activity[]
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
      <AnimatePresence>
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 rounded-md p-4 mb-2 flex justify-between items-center"
          >
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full p-2 mr-3">
                <ArrowUpRight className="text-white" size={16} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  {activity.type === 'transfer' ? 'Payment Sent' : 'Unknown'}
                </p>
                <p className="text-sm text-gray-600">
                  To: {activity.recipientName}
                </p>
                <p className="text-xs text-gray-500">
                  {activity.date.toLocaleString()}
                </p>
              </div>
            </div>
            <p className="text-lg font-bold text-red-500">
              -${activity.amount.toFixed(2)}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

