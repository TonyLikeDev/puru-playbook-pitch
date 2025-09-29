import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/enhanced-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, Play } from "lucide-react";

const testimonials = [
  {
    id: "sarah-marketing",
    quote: "Purus Games delivered our branded experience 3 weeks ahead of schedule. The engagement metrics exceeded our most optimistic projections by 45%.",
    author: "Sarah Chen",
    role: "VP Marketing",
    company: "Brand X (NDA)",
    rating: 5,
    avatar: "/placeholder-avatar1.jpg",
    metrics: "+45% engagement, 3 weeks early delivery"
  },
  {
    id: "michael-cmo",
    quote: "Working with Purus was seamless. They understood our brand voice immediately and created something our users actually wanted to play.",
    author: "Michael Rodriguez", 
    role: "CMO",
    company: "Growth Corp (NDA)",
    rating: 5,
    avatar: "/placeholder-avatar2.jpg",
    metrics: "+60% user retention, 95% positive feedback"
  },
  {
    id: "jessica-digital",
    quote: "The ROI was immediate. Within 48 hours of launch, we saw significant upticks in both brand awareness and product discovery.",
    author: "Jessica Thompson",
    role: "Digital Marketing Director", 
    company: "Brand Y (NDA)",
    rating: 5,
    avatar: "/placeholder-avatar3.jpg",
    metrics: "250% ROI in first month"
  },
  {
    id: "david-product",
    quote: "Finally, a team that treats gaming as a serious marketing channel. The post-launch support has been exceptional.",
    author: "David Park",
    role: "Head of Product Marketing",
    company: "TechCorp (NDA)", 
    rating: 5,
    avatar: "/placeholder-avatar4.jpg",
    metrics: "6-month support included"
  },
  {
    id: "amanda-growth",
    quote: "Purus Games doesn't just build games—they build experiences that drive real business outcomes. Highly recommended.",
    author: "Amanda Foster",
    role: "Growth Marketing Lead",
    company: "InnovateCo (NDA)",
    rating: 5,
    avatar: "/placeholder-avatar5.jpg", 
    metrics: "+30% lead generation improvement"
  }
];

export function TestimonialsSection() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">What Our Clients Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real feedback from marketing leaders who've seen measurable results from our gaming campaigns.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border-0 bg-gradient-to-br from-card to-muted/30 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-primary/60 mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
                
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
              </div>
              
              <Badge variant="secondary" className="text-xs">
                {testimonial.metrics}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="border-0 bg-gradient-to-r from-primary/5 to-success/5 p-6">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground">Want to Hear From Our Clients Directly?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule a reference call with one of our past clients to get an unfiltered perspective on working with Purus Games.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="success" size="lg">
              <Play className="w-4 h-4" />
              Watch Video Testimonials
            </Button>
            <Button variant="outline" size="lg">
              Request Reference Call
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-4 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">100%</div>
              <div className="text-sm text-muted-foreground">Client retention rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average satisfaction score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">24hrs</div>
              <div className="text-sm text-muted-foreground">Average response time</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}