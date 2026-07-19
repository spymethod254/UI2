import { supabase } from './supabase'
import { useQuery } from '@tanstack/react-query'
import type { Notification } from './supabase'

export const useNotifications = () => {
      return useQuery({
            queryKey: ['notifications'],
                queryFn: async () => {
                          const { data, error } = await supabase
                                  .from('notifications')
                                          .select('*, profiles!user_id(*)')
                                                  .order('created_at', { ascending: false })
                                                        if(error) throw error
                                                              return data as Notification[]
                }
            })
        }