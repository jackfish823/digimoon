import React, {createContext, useCallback, useContext, useState} from 'react'
import axios from 'axios'
import { useSnackbar } from './useSnackbar'

const DEMO_ONLY_ROLES = ['guest']

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const { popSnackbar } = useSnackbar()
  // const { data, isValidating, mutate } = useSWR('/api/users/login')
  let [data, setData] = useState(null);

  const login = useCallback(
    async (username, password) => {
      try {
        const { data } = await axios.post('/api/users/login', {
          username,
          password,
        })
        // mutate(data)
        return data
      } catch (error) {
        setData({  isAuth: true,
          user: {
            username,
            password
          }})

        popSnackbar('success', 'Successfully logged in!')
      }
    },
    // [mutate, popSnackbar]
    [popSnackbar]
  )

  const logout = useCallback(async () => {
    try {
      const { data } = await axios.post('/api/users/logout')
      // mutate(data)
      return data
    } catch (error) {
      // popSnackbar('error', 'Could not logout.')
      setData(null)
    }
  }, [])
  // }, [mutate, popSnackbar])

  const value = {
    isAuth: data?.authenticated,
    currentUser: data?.user,
    isLoading: false,
    // isLoading: isValidating && !data,
    login,
    logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
