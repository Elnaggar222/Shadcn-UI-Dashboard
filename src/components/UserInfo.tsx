import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CustomHeader from "./CustomHeader";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import EditUser from "./EditUser";

const UserInfo = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <CustomHeader title="User Information" clasName="!mb-0" />
        <Sheet>
          <SheetTrigger asChild>
            <Button>Edit User</Button>
          </SheetTrigger>
          <EditUser />
        </Sheet>
      </div>
      <div className="space-y-4 mt-4">
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-sm text-muted-foreground">Profile Completion</p>
          <Progress value={66} />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Username:</span>
          <span className="text-sm">Mohamed Elnaggar</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Email:</span>
          <span className="text-sm">mohamedelnaggar486@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Phone:</span>
          <span className="text-sm">01010927998</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Location:</span>
          <span className="text-sm">Egypt, Kafr El-Zayaat</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Role:</span>
          <Badge>Admin</Badge>
        </div>
        <p className="text-muted-foreground text-sm">Joined on 2025.05.09</p>
      </div>
    </>
  );
};

export default UserInfo;
