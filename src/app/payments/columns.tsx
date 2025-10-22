"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
type Payment = {
  id: string;
  username: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
export const payments: Payment[] = [
  {
    id: "728ed52f",
    username: "john_doe",
    email: "m@example.com",
    amount: 100,
    status: "pending",
  },
  {
    id: "489e1d42",
    username: "Elnaggar",
    email: "example@gmail.com",
    amount: 125,
    status: "processing",
  },
  {
    id: "489e1d42",
    username: "Koko",
    email: "example@gmail.com",
    amount: 203,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Ahmed",
    email: "example@gmail.com",
    amount: 125,
    status: "failed",
  },
  {
    id: "489e1d42",
    username: "Ahmed",
    email: "example@gmail.com",
    amount: 125,
    status: "failed",
  },
  {
    id: "489e1d42",
    username: "Ahmed",
    email: "example@gmail.com",
    amount: 125,
    status: "failed",
  },
  {
    id: "489e1d42",
    username: "Ahmed",
    email: "Ahmed@gmail.com",
    amount: 125,
    status: "failed",
  },
  {
    id: "489e1d42",
    username: "Ahmed",
    email: "example@gmail.com",
    amount: 125,
    status: "failed",
  },
  {
    id: "489e1d42",
    username: "Mohamaed",
    email: "Mohamaed@gmail.com",
    amount: 125,
    status: "processing",
  },
  {
    id: "489e1d42",
    username: "Hello Hello",
    email: "example@gmail.com",
    amount: 125,
    status: "processing",
  },
  {
    id: "489e1d42",
    username: "GOGo",
    email: "GOGo@gmail.com",
    amount: 125,
    status: "pending",
  },
  {
    id: "489e1d42",
    username: "sadfasdf",
    email: "example@gmail.com",
    amount: 125,
    status: "failed",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
  {
    id: "489e1d42",
    username: "Hossam",
    email: "example@gmail.com",
    amount: 125,
    status: "success",
  },
];
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <div
          className={cn(
            "p-1 rounded-md text-xs w-20 text-center font-medium capitalize",
            status === "pending" ? "bg-yellow-500/40" : "",
            status === "processing" && "bg-blue-500/40",
            status === "success" && "bg-green-500/40",
            status === "failed" && "bg-red-500/40"
          )}
        >
          {status as string}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    header: () => <div className="text-right">Actions</div>,
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
