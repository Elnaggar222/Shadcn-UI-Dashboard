"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-md font-medium mb-6">Todo List</h1>
      {/* Calender */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full mb-3">
            <CalendarIcon />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
      {/* Todo List Items */}
      <ScrollArea className="h-96">
        <div className="space-y-3">
          {Array.from({ length: 20 }).map((_, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center space-x-2">
                <Checkbox id={`items${index}`} />
                <Label
                  htmlFor={`items${index}`}
                  className="text-muted-foreground text-sm"
                >
                  Accept terms and conditions
                </Label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
