import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import CustomHeader from "./CustomHeader";

interface IProps {
  title: string;
}
const PopularContent = [
  {
    image:
      "https://smartdev.com/wp-content/uploads/2023/12/Advancements-in-Reinforcement-Learning-Expanding-the-Frontiers-of-AI-Autonom-1024x585.png",
    count: 1500,
    title: "The Future of AI: Trends to Watch in 2024",
    badge: "Technology",
  },
  {
    image:
      "https://smartdev.com/wp-content/uploads/2023/12/Advancements-in-Reinforcement-Learning-Expanding-the-Frontiers-of-AI-Autonom-1024x585.png",
    count: 1500,
    title: "The Future of AI: Trends to Watch in 2024",
    badge: "Technology",
  },
  {
    image:
      "https://smartdev.com/wp-content/uploads/2023/12/Advancements-in-Reinforcement-Learning-Expanding-the-Frontiers-of-AI-Autonom-1024x585.png",
    count: 1500,
    title: "The Future of AI: Trends to Watch in 2024",
    badge: "Technology",
  },
];
const latestTransaction = [
  {
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-young-man_1268-21877.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1500,
    title: "Subscription for SmartDev",
    badge: "Mohamed Elnaggar",
  },
  {
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-young-man_1268-21877.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1500,
    title: "Subscription for SmartDev",
    badge: "Mohamed Elnaggar",
  },
  {
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-young-man_1268-21877.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1500,
    title: "Subscription for SmartDev",
    badge: "Mohamed Elnaggar",
  },
];
const CardList = ({ title }: IProps) => {
  const list = title === "PopularContent" ? PopularContent : latestTransaction;
  return (
    <div>
      <CustomHeader title={title} />
      <div className="flex flex-col gap-4">
        {list.map((item, index) => (
          <Card
            className="flex-row items-center justify-between p-4 gap-4"
            key={index}
          >
            <div className="w-12 h-12 relative rounded-sm overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 48px, 48px"
                className="object-cover"
              />
            </div>
            <CardContent className="p-0 flex-1">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
