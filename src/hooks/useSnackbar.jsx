import React, { useContext, createContext, useState, useCallback } from 'react'
import {Alert, Snackbar} from "@mui/material";


const SnackbarContext = createContext()

function SnackbarProvider({ children }) {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState()

  const popSnackbar = useCallback(async (status, message) => {
    setStatus(status)
    setMessage(message)
  }, [])

  const closeSnackbar = useCallback(async () => {
    setStatus()
    setMessage('')
  }, [])

  return (
    <SnackbarContext.Provider value={{ popSnackbar, closeSnackbar }}>
      {children}
      {status && (
        <Snackbar open autoHideDuration={3000} onClose={closeSnackbar}>
          <Alert onClose={closeSnackbar} severity={status}>
            {message}
          </Alert>
        </Snackbar>
      )}
    </SnackbarContext.Provider>
  )
}

function useSnackbar() {
  const context = useContext(SnackbarContext)
  if (context === undefined) {
    throw new Error('useSnackbar must be used within a SnackbarProvider')
  }
  return context
}

export { SnackbarProvider, useSnackbar }
