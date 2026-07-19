import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
    import.meta.env.VITE_SUPABASE_ANON_KEY!
    )

    export type User = {
      id: string;
        name: string;
          handle: string;
            avatar: string;
              verified: boolean;
              };

              export type Post = {
                id: string;
                  user: User;
                    timestamp: string;
                      content: string;
                        image?: string;
                          likes: number;
                            comments: number;
                              shares: number;
                                hashtags: string[];
                                };

                                export type Chat = {
                                  id: string;
                                    user: User;
                                      lastMessage: string;
                                        timestamp: string;
                                          unreadCount: number;
                                          };

                                          export type Notification = {
                                            id: string;
                                              user: User;
                                                action: string;
                                                  timestamp: string;
                                                    type: 'like' | 'follow' | 'comment' | 'mention' | 'reel_like';
                                                    };