import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "./ui/enhanced-button";
import { Calculator, TrendingUp, DollarSign, Users, Info } from "lucide-react";

interface ROIInputs {
  budget: number;
  audienceSize: number;
  kpi: string;
  campaignLength: number;
}

interface ROIResults {
  estimatedReach: number;
  engagementBoost: number;
  estimatedROI: number;
  costPerEngagement: number;
}

export function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    budget: 25000,
    audienceSize: 100000,
    kpi: "engagement",
    campaignLength: 8
  });
  
  const [results, setResults] = useState<ROIResults>({
    estimatedReach: 0,
    engagementBoost: 0,
    estimatedROI: 0,
    costPerEngagement: 0
  });

  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const safeBudget = Math.max(0, Number.isFinite(inputs.budget) ? inputs.budget : 0);
    const safeAudience = Math.max(0, Number.isFinite(inputs.audienceSize) ? inputs.audienceSize : 0);
    const safeWeeks = Math.min(16, Math.max(4, Number.isFinite(inputs.campaignLength) ? inputs.campaignLength : 8));

    const baseCpi = 0.40;
    const lengthEfficiency = 1 + (safeWeeks - 8) * 0.02;
    const kpiMultiplierMap: Record<string, number> = {
      engagement: 1.35,
      leads: 1.20,
      retention: 1.15,
      awareness: 1.10
    };
    const baseEngagementRate = 0.08;
    const kpiMultiplier = kpiMultiplierMap[inputs.kpi] ?? 1.15;
    const effectiveCpi = baseCpi / lengthEfficiency;

    const estimatedReachRaw = safeBudget / effectiveCpi;
    const estimatedReach = Math.min(estimatedReachRaw, safeAudience);

    const engagementBoostRate = Math.min(
      baseEngagementRate * kpiMultiplier * (safeBudget / 20000) * (0.9 + (lengthEfficiency - 1)),
      0.65
    );

    const totalEngagements = Math.max(1, estimatedReach * engagementBoostRate);

    const avgCustomerValue = 50;
    const conversionAssumptionMap: Record<string, number> = {
      engagement: 0.15,
      leads: 0.22,
      retention: 0.18,
      awareness: 0.10
    };
    const conv = conversionAssumptionMap[inputs.kpi] ?? 0.15;
    const revenue = totalEngagements * avgCustomerValue * conv;
    const estimatedROI = safeBudget > 0 ? ((revenue - safeBudget) / safeBudget) * 100 : 0;
    const costPerEngagement = safeBudget > 0 ? safeBudget / totalEngagements : 0;

    setResults({
      estimatedReach: Math.round(estimatedReach),
      engagementBoost: Math.round(engagementBoostRate * 100),
      estimatedROI: Math.round(estimatedROI),
      costPerEngagement: Math.round(costPerEngagement * 100) / 100
    });
  }, [inputs]);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">ROI Calculator</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get a realistic estimate of potential returns from your gamified marketing campaign.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 bg-gradient-to-br from-card to-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Campaign Inputs
            </CardTitle>
            <CardDescription>
              Adjust the parameters below to model your specific campaign scenario.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="budget">Campaign Budget</Label>
              <Input
                id="budget"
                type="number"
                value={inputs.budget}
                onChange={(e) => setInputs({...inputs, budget: Number(e.target.value) || 0})}
                placeholder="Enter budget in USD"
              />
              <div className="text-xs text-muted-foreground">
                ${inputs.budget.toLocaleString()} USD
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="audience">Target Audience Size</Label>
              <Input
                id="audience"
                type="number"
                value={inputs.audienceSize}
                onChange={(e) => setInputs({...inputs, audienceSize: Number(e.target.value) || 0})}
                placeholder="Number of potential users"
              />
              <div className="text-xs text-muted-foreground">
                {inputs.audienceSize.toLocaleString()} potential users
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="kpi">Primary KPI</Label>
              <Select value={inputs.kpi} onValueChange={(value) => setInputs({...inputs, kpi: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your primary goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engagement">User Engagement</SelectItem>
                  <SelectItem value="leads">Lead Generation</SelectItem>
                  <SelectItem value="retention">User Retention</SelectItem>
                  <SelectItem value="awareness">Brand Awareness</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="length">Campaign Length (weeks)</Label>
              <Slider
                id="length"
                min={4}
                max={16}
                step={1}
                value={[inputs.campaignLength]}
                onValueChange={(value) => setInputs({...inputs, campaignLength: value[0]})}
              />
              <div className="text-xs text-muted-foreground">
                {inputs.campaignLength} weeks duration
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-success/5 to-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              Projected Results
            </CardTitle>
            <CardDescription>
              Based on industry benchmarks and Purus Games historical performance.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{results.estimatedReach.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Estimated Reach</div>
              </div>
              
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-success">+{results.engagementBoost}%</div>
                <div className="text-xs text-muted-foreground">Engagement Boost</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                <span className="text-sm font-medium">ROI Projection</span>
                <span className="text-lg font-bold text-success">+{results.estimatedROI}%</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                <span className="text-sm font-medium">Cost per Engagement</span>
                <span className="text-lg font-bold text-primary">${results.costPerEngagement}</span>
              </div>
            </div>

            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
              <h4 className="font-semibold text-warning mb-2">Sample Scenario: $25k Budget</h4>
              <p className="text-sm text-muted-foreground">
                Reach ~62,500 players → +35% engagement boost → Estimated 250% ROI over 8 weeks
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 bg-gradient-to-r from-primary/5 to-success/5 p-6">
        <div className="text-center space-y-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowDisclaimer(!showDisclaimer)}
            className="mx-auto"
          >
            <Info className="w-4 h-4" />
            How We Calculate This
          </Button>
          
          {showDisclaimer && (
            <div className="bg-white/80 rounded-lg p-4 text-sm text-left space-y-2">
              <h4 className="font-semibold">Calculation Methodology:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>Reach:</strong> Budget ÷ $0.40 CPI (industry benchmark)</li>
                <li>• <strong>Engagement Boost:</strong> Baseline × 1.35 multiplier (Purus average)</li>
                <li>• <strong>ROI:</strong> (Projected Revenue - Investment) ÷ Investment × 100</li>
                <li>• <strong>Disclaimer:</strong> Results are illustrative based on historical data</li>
              </ul>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Button variant="hero" size="lg">
              <DollarSign className="w-4 h-4" />
              Request Custom ROI Model
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}>
              Schedule Strategy Call (20‑min)
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}