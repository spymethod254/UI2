import { supabase } from './supabase'
import { useQuery } from '@tanstack/react-query'
import type { User } from './supabase'

export const useCurrentUser = (userId: string) => {
  return useQuery({
      queryKey: ['profile', userId],
          queryFn: async () => {
                const { data, error } = await supabase
                        .from('profiles')
                                .select('*')
                                        .eq('id', userId)
                                                .single()
                                                      if(error) throw error
                                                            return data as User
                                                                }
                                                                  })
                                                                  }