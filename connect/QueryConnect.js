"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const QueryConnect = ({children}) => {
    const quertyClient = new QueryClient();
  return (
   <QueryClientProvider client = {quertyClient}>{children}</QueryClientProvider>
  )
}

export default QueryConnect