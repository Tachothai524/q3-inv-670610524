import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";

import { useState } from "react";

export function StudentInfo() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    // Use Drawer component to display student information
    <div className="flex-1 p-4">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger
          render={
            <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              เตโชทัย ทั้งเจริญกุล
            </button>
          }
        ></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              ข้อมูลนักศึกษา
              <DrawerDescription>Student information</DrawerDescription>
            </DrawerTitle>
          </DrawerHeader>
          <DrawerClose render={<Button variant="outline">Cancel</Button>} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
