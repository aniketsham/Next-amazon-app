'use client'
import React, { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'
import { SWRConfig } from 'swr'
import toast from 'react-hot-toast'
import { cartStore } from '@/lib/hooks/useCartStore'
export default function ClientProvider({
    children
}:{
    children:React.ReactNode
}){

    const updateStore=()=>{
        cartStore.persist.rehydrate()
    }

useEffect(()=>{
    document.addEventListener('visibilitychange',updateStore)
    window.addEventListener('focus',updateStore)
    return ()=>{
        document.removeEventListener('visibilitychange',updateStore)
        window.removeEventListener('focus',updateStore)
    }
},[])
    return(
        <SWRConfig
      value={{
        onError: (error, key) => {
          toast.error(error.message)
        },
        fetcher: async (resource, init) => {
          const res = await fetch(resource, init)
          if (!res.ok) {
            throw new Error('An error occurred while fetching the data.')
          }
          return res.json()
        },
      }}
    >
        <Toaster/>
        {children}
        </SWRConfig>
    )
}