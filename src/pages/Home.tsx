import { ImageIcon, Smile } from "lucide-react";
import { StoryRing } from "@/components/StoryRing";
import { PostCard } from "@/components/PostCard";
import { usePosts } from "@/data/posts";
import { useCurrentUser } from "@/data/profile";

export default function Home() {
  const { data: posts, isLoading } = usePosts();
    const { data: currentUser } = useCurrentUser('your-user-id'); // replace with real auth id

      if(isLoading) return <div className="p-4 text-gray-500">Loading...</div>

        return (
            <div className="flex flex-col">
                  {/* Stories - for now keep mock users, later fetch from profiles */}
                        <div className="py-4 border-b border-white/5">
                                <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-2">
                                          <StoryRing src={currentUser?.avatar} name="Your story" active={false} showAdd={true} />
                                                    {/* map real users here later */}
                                                            </div>
                                                                  </div>

                                                                        {/* Composer - same */}
                                                                              <div className="p-4 border-b border-white/5">
                                                                                      {/* ... keep your composer ... */}
                                                                                            </div>

                                                                                                  {/* Feed */}
                                                                                                        <div className="p-4 bg-[#0a0a0a]">
                                                                                                                {posts?.map((post) => (
                                                                                                                          <PostCard key={post.id} post={post} />
                                                                                                                                  ))}
                                                                                                                                          <div className="py-8 text-center text-gray-500 text-sm">
                                                                                                                                                    You've caught up for now!
                                                                                                                                                            </div>
                                                                                                                                                                  </div>
                                                                                                                                                                      </div>
                                                                                                                                                                        );
                                                                                                                                                                        }