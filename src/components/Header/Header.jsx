import React from 'react'
import styles from './Header.module.scss'
import { motion } from "framer-motion"


const Header = () => {
  return (
    <div className={styles.header} >
      <div className={styles.titleText} >
        <p>
          Hello, I'm 
        </p>
        <motion.h2 
        initial={{ x: -1000 }} 
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }} >
          Bennett Humphrey
        </motion.h2>
        <h1>
          Freelance Web Developer from Victoria, BC
        </h1>
        <button>
            Get in contact!
        </button>
      </div>
      <motion.div 
      className={styles.images} 
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.3, duration: 0.2, type: 'spring', stiffness: 80 }} >
      {/* Profile */}
        <img className={styles.profile} src='./profile-1000.webp' />
      {/* Backdrop */}
        <img className={styles.splash} src='./splash.png' />
      </motion.div>
    </div>
  )
}

export default Header