import { useItemStore } from "@/store/dataStore";
import { categoryOptions } from "@/types/datatypes";
import {
  Laptop,
  Pencil,
  Apple,
  Shirt,
  Wrench,
  MoreHorizontal,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const iconMap: Record<string, React.ReactNode> = {
  Electronics: <Laptop className="h-4 w-4" />,
  Stationery: <Pencil className="h-4 w-4" />,
  Grocery: <Apple className="h-4 w-4" />,
  Clothing: <Shirt className="h-4 w-4" />,
  Tools: <Wrench className="h-4 w-4" />,
  Other: <MoreHorizontal className="h-4 w-4" />,
};

export function CategoryCards() {
  const inventory = useItemStore((state) => state.inventory);

  return (
    <div className="grid gap-2 md:grid-cols-6">
      {categoryOptions.map((category) => {
        const categoryItems = inventory.filter(
          (item) => item.category === category.value,
        );
        const categoryUnits = categoryItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );
        const categoryValue = categoryItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0,
        );

        return (
          // Use Card component to display values by category
          <Card>
            <CardHeader>
              {/* {iconMap.(category.label)} */}
              {category.label}
            </CardHeader>
            <CardContent>
              <CardTitle>
                ฿{categoryValue.toFixed(2)}
                <CardDescription>{categoryUnits} unit</CardDescription>
              </CardTitle>
            </CardContent>
          </Card>
          // <div>
          //   {category.label} - ฿{categoryValue.toFixed(2)} - {categoryUnits}{" "}
          //   units
          // </div>
        );
      })}
    </div>
  );
}
