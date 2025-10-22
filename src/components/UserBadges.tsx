import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import CustomHeader from "./CustomHeader";

const UserBadges = () => {
  return (
    <div>
      <CustomHeader title="User Badges" clasName="!mb-0" />
      <div className="flex space-x-3 mt-2">
        <HoverCard>
          <HoverCardTrigger>
            <BadgeCheck
              size={36}
              className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h1 className="font-bold mb-1">Verified User</h1>
            <p className="text-sm text-muted-foreground max-w-xs">
              This User has been verified by the admin
            </p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Shield
              size={36}
              className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h1 className="font-bold mb-1">Admin</h1>
            <p className="text-sm text-muted-foreground max-w-xs">
              Admin Users have access to more features
            </p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Candy
              size={36}
              className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h1 className="font-bold mb-1">Admin</h1>
            <p className="text-sm text-muted-foreground max-w-xs">
              This user has been awarded for being helpful in the community
            </p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Citrus
              size={36}
              className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h1 className="font-bold mb-1">Admin</h1>
            <p className="text-sm text-muted-foreground max-w-xs">
              This User has been popular in the community
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default UserBadges;
