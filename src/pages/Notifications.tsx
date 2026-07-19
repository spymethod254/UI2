import { Heart, UserPlus, MessageCircle, AtSign, Film } from "lucide-react";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { useNotifications } from "@/data/notifications";

export default function Notifications() {
  const { data: notifications } = useNotifications();
    
      const getIcon = (type: string) => { /* same as yours */ }

        return (
            <div className="bg-[#0a0a0a] min-h-full">
                  <div className="p-4 border-b border-white/10 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10">
                          <h1 className="text-white text-xl font-bold">Notifications</h1>
                                </div>
                                      <div className="flex flex-col p-3 gap-2">
                                              {notifications?.map(notif => (
                                                        <div key={notif.id} className="flex items-center gap-3 p-3 bg-[#141414] rounded-xl border border-white/5">
                                                                    {getIcon(notif.type)}
                                                                                <div className="relative">
                                                                                              <img src={notif.user.avatar} alt={notif.user.name} className="w-10 h-10 rounded-full object-cover" />
                                                                                                            {notif.user.verified && <div className="absolute -bottom-1 -right-1"><VerifiedBadge /></div>}
                                                                                                                        </div>
                                                                                                                                    <div className="flex-1 min-w-0">
                                                                                                                                                  <div className="text-sm text-gray-300">
                                                                                                                                                                  <span className="text-white font-bold mr-1">{notif.user.name}</span>
                                                                                                                                                                                  {notif.action}
                                                                                                                                                                                                </div>
                                                                                                                                                                                                              <div className="text-xs text-gray-500 mt-0.5">{notif.timestamp}</div>
                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                        );