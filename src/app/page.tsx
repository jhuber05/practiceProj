// app/page.tsx
"use client";  // Mark this as a client-side component

import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to My dApp</h1>
      <p style={{ marginBottom: '20px' }}>
        Connect your wallet to interact with the decentralized app.
      </p>
      <ConnectButton /> 
    </div>
  )
}

export default HomePage
