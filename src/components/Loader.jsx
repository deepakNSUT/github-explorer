import { motion } from 'framer-motion'

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center mt-20"
    >
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 mt-4 text-sm">Searching GitHub...</p>
    </motion.div>
  )
}

export default Loader