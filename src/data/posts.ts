import { supabase } from './supabase'
import { useQuery } from '@tanstack/react-query'
import type { Post } from './supabase'

export const usePosts = () => {
  return useQuery({
      queryKey: ['posts'],
          queryFn: async () => {
                const { data, error } = await supabase
                        .from('posts')
                                .select('*, profiles!user_id(*)')
                                        .order('created_at', { ascending: false })
                                              if(error) throw error
                                                    return data as Post[]
                                                        }
                                                          })
                                                          }