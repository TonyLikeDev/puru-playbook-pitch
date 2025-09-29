import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PortfolioShowcase } from "./PortfolioShowcase";
import { CompetitiveEdge } from "./CompetitiveEdge";
import { TestimonialsSection } from "./TestimonialsSection";
import { ROICalculator } from "./ROICalculator";
import { ResourcesSection } from "./ResourcesSection";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="portfolio" className="w-full">
      <TabsList className="grid w-full grid-cols-5 lg:max-w-2xl mx-auto mb-8">
        <TabsTrigger value="portfolio" className="text-xs sm:text-sm">Portfolio</TabsTrigger>
        <TabsTrigger value="competitive" className="text-xs sm:text-sm">Edge</TabsTrigger>
        <TabsTrigger value="testimonials" className="text-xs sm:text-sm">Testimonials</TabsTrigger>
        <TabsTrigger value="roi" className="text-xs sm:text-sm">ROI Calc</TabsTrigger>
        <TabsTrigger value="resources" className="text-xs sm:text-sm">Resources</TabsTrigger>
      </TabsList>
      
      <TabsContent value="portfolio" className="space-y-6">
        <PortfolioShowcase />
      </TabsContent>
      
      <TabsContent value="competitive" className="space-y-6">
        <CompetitiveEdge />
      </TabsContent>
      
      <TabsContent value="testimonials" className="space-y-6">
        <TestimonialsSection />
      </TabsContent>
      
      <TabsContent value="roi" className="space-y-6">
        <ROICalculator />
      </TabsContent>
      
      <TabsContent value="resources" className="space-y-6">
        <ResourcesSection />
      </TabsContent>
    </Tabs>
  );
}