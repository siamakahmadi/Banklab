import React from 'react'
import './Navigation.scss'
import { motion } from "framer-motion"
export default function Navigation() {
  return (
    <div className="navigation">
      <motion.div className="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>BankLab</motion.div>
      <div className="navList">
        <a href="" className="navitem">How it Work</a>
        <a href="" className="navitem">Feature</a>
        <a href="" className="navitem">Pricing</a>
        <a href="" className="navitem">Company</a>
      </div>
      <div className="appleStore">
        <div className='logo'>
          <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3721 31.135C32.3308 29.6725 32.6883 28.925 33.4196 27.2838C28.0246 25.2363 27.1633 17.55 32.4933 14.6087C30.8683 12.5612 28.5771 11.375 26.4158 11.375C24.8558 11.375 23.7833 11.7813 22.8246 12.155C22.0121 12.4638 21.2808 12.74 20.3708 12.74C19.3958 12.74 18.5346 12.4313 17.6246 12.1063C16.6333 11.7488 15.5933 11.375 14.2933 11.375C11.8721 11.375 9.28833 12.8538 7.64708 15.3888C5.33958 18.9638 5.74583 25.6587 9.46708 31.3787C10.7996 33.4262 12.5871 35.7175 14.9108 35.75C15.8858 35.7662 16.5196 35.4738 17.2183 35.165C18.0146 34.8075 18.8758 34.4175 20.3871 34.4175C21.8983 34.4012 22.7433 34.8075 23.5396 35.165C24.2221 35.4738 24.8396 35.7662 25.7983 35.75C28.1546 35.7175 30.0396 33.1825 31.3721 31.135Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0742 3.25C26.3342 5.0375 25.6029 6.80877 24.6442 8.04377C23.6204 9.37627 21.8329 10.4162 20.1104 10.3512C19.8017 8.62874 20.5979 6.85748 21.573 5.67123C22.6617 4.37123 24.4979 3.36375 26.0742 3.25Z" fill="white" />
          </svg>
        </div>
        <div className='title'>
          <p className='cta'>Download on the</p>
          <p className='market'>AppleStore</p>
        </div>
      </div>
      <div className='menueIcon'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="16.5" height="1.65" rx="0.825" fill="#C4C4C4" />
          <rect x="4" y="11.6" width="16.5" height="1.65" rx="0.825" fill="#C4C4C4" />
          <rect x="4" y="18.2" width="16.5" height="1.65" rx="0.825" fill="#C4C4C4" />
        </svg>
      </div>
    </div>
  )
}
