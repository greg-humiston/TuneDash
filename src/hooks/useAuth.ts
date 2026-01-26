import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { authApi } from '../api/authApi'

// Get token from localStorage
const getStoredToken = () => localStorage.getItem('authToken')
const setStoredToken = (token: string) => localStorage.setItem('authToken', token)
const removeStoredToken = () => localStorage.removeItem('authToken')

export function useLogin() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      // Store token
      setStoredToken(data.token);
      
      // Set user in cache
      queryClient.setQueryData(['currentUser'], data.user);
    }
  })
}

export function useLogout() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: () => {
      const token = getStoredToken() || '';
      return authApi.logout(token)
    },
    onSuccess: () => {
      // Remove token
      removeStoredToken()
      
      // Clear all queries
      queryClient.clear()
    }
  })
}

export function useCurrentUser() {
  const token = getStoredToken() || '';
  
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => authApi.getCurrentUser(token),
    enabled: !!token,
    retry: false,
    staleTime: 1000 * 60 * 5 // 5 minutes
  })
}

export function useRegister() {
  return useMutation({
    mutationFn: authApi.register
  })
}