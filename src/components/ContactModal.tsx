import { useState } from "react";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "./ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Send, Calendar } from "lucide-react";

export function ContactModal() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    budget: "",
    description: "",
    requestDemo: false
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <DialogContent className="max-w-md">
        <div className="text-center space-y-4 py-6">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-xl">Thanks for reaching out!</DialogTitle>
            <DialogDescription>
              We'll be in touch within 24 hours to discuss your project and schedule a strategy call.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>⚡ Response time: &lt;24 hours</p>
            <p>📞 Strategy call: 20 minutes</p>
            <p>📊 Custom proposal: 48-72 hours</p>
          </div>
        </div>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-xl">Let's Build Your Game Together</DialogTitle>
        <DialogDescription>
          Tell us about your project and we'll create a custom proposal tailored to your goals and budget.
        </DialogDescription>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company *</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Company name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="role">Role *</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
              placeholder="e.g., CMO, Marketing Director"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your@company.com"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget range (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15-25k">$15k - $25k (Starter)</SelectItem>
              <SelectItem value="30-60k">$30k - $60k (Growth)</SelectItem>
              <SelectItem value="100k+">$100k+ (Flagship)</SelectItem>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Project Description *</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Tell us about your goals, target audience, and what you'd like to achieve with a gamified campaign..."
            rows={4}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="requestDemo"
            checked={formData.requestDemo}
            onChange={(e) => setFormData(prev => ({ ...prev, requestDemo: e.target.checked }))}
            className="rounded border-border"
          />
          <Label htmlFor="requestDemo" className="text-sm">
            I'd like to see a demo of a similar project
          </Label>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button type="submit" variant="hero" className="flex-1">
            <Send className="w-4 h-4" />
            Send Project Details
          </Button>
          <Button type="button" variant="outline" className="flex-1">
            <Calendar className="w-4 h-4" />
            Book 20-min Strategy Call
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center">
          We'll respond within 24 hours with a custom proposal and next steps.
        </p>
      </form>
    </DialogContent>
  );
}