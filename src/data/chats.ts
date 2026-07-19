import { supabase } from './supabase'
import { useQuery } from '@tanstack/react-query'
import type { Chat } from './supabase'

export const useChats = () => {
  return useQuery({
      queryKey: ['chats'],
          queryFn: async () => {
                const { data, error } = await supabase
                        .from('chats')
                                .select('*, profiles!user_id(*)')
                                        .order('updated_at', { ascending: false })
                                              if(error) throw error
                                                    return data as Chat[]
                                                        }
                                                          })
                                                          }