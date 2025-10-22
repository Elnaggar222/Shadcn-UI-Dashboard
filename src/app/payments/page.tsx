import { columns, payments } from "./columns";
import { DataTable } from "./data-table";

const page = () => {
  return (
    <div>
      <div className="mb-8 rounded-md px-4 py-2 bg-secondary">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={payments} />
    </div>
  );
};

export default page;
