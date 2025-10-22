import AppLineChart from "@/components/AppLineChart";
import CardList from "@/components/CardList";
import CustomBreadCrumb from "@/components/CustomBreadCrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserBadges from "@/components/UserBadges";
import UserInfo from "@/components/UserInfo";

interface IProps {
  params: Promise<{ username: string }>;
}

const page = async ({ params }: IProps) => {
  const username = (await params).username;
  return (
    <section>
      <CustomBreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Users", href: "/users" },
          { label: username },
        ]}
      />
      {/* Container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* Left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* User Badges Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <UserBadges />
          </div>
          {/* Information Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <UserInfo />
          </div>
          {/* Card List Container */}
          <div className="p-4 rounded-lg  bg-primary-foreground">
            <CardList title="latestTransaction" />
          </div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* User Card Container */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Mohamed Elnaggar</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              omnis provident, sit architecto deleniti ratione illo, fuga ut
              cupiditate, quis sunt
            </p>
          </div>
          {/* Chart Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <AppLineChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
