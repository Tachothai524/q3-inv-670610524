import { AddItemDialog } from "./components/AddItemDialog";
import { ItemList } from "./components/ItemList";
import { Footer } from "./components/Footer";
import { OverviewCards } from "./components/OverviewCards";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { CategoryCards } from "./components/CategoryCards";

export default function App() {
  const [mode, setmode] = useState<"Overview" | "By Category">("Overview");
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Layout wrapper */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Inventory Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track your products, stock levels and inventory value.
              </p>
            </div>
            <AddItemDialog />
          </div>

          {/* Put OverviewCards and CategoryCards under DashboardTabs */}
          {/* And then use DashboardTabs here instead */}
          <Tabs
            value={mode}
            onValueChange={(v) => setmode(v as "Overview" | "By Category")}
          >
            <TabsList>
              <TabsTrigger value="Overview">Overview</TabsTrigger>
              <TabsTrigger value="By Category">By Category</TabsTrigger>
            </TabsList>
            <TabsContent value="Overview" className="pt-2">
              <OverviewCards />
            </TabsContent>
            <TabsContent value="By Category" className="pt-2">
              <CategoryCards />
            </TabsContent>
          </Tabs>
          <ItemList />
        </div>
      </main>

      {/* Footer stays at the very bottom of the viewport if content is short */}
      <Footer />
    </div>
  );
}
