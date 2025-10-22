import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2  bg-primary-foreground">
        <AppBarChart />
      </div>
      <div className="p-4 rounded-lg  bg-primary-foreground">
        <CardList title="PopularContent" />
      </div>
      <div className="p-4 rounded-lg  bg-primary-foreground">
        <AppPieChart />
      </div>
      <div className="p-4 rounded-lg  bg-primary-foreground">
        <TodoList />
      </div>
      <div className="p-4 rounded-lg  lg:col-span-2 xl:col-span-1 2xl:col-span-2 bg-primary-foreground">
        <AppAreaChart />
      </div>
      <div className="p-4 rounded-lg  bg-primary-foreground">
        <CardList title="latestTransaction" />
      </div>
    </section>
  );
}
