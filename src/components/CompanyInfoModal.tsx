import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "./ui/enhanced-button";
import { MapPin, Users, Calendar, Award } from "lucide-react";

interface CompanyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CompanyInfoModal({ isOpen, onClose }: CompanyInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">About Purus Games</DialogTitle>
          <DialogDescription>
            Leading the future of branded gaming experiences
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    San Francisco, CA<br />
                    Remote-first team across North America
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-success mt-1" />
                <div>
                  <h4 className="font-semibold">Team</h4>
                  <p className="text-sm text-muted-foreground">
                    25+ game developers, designers, and strategists<br />
                    Former employees from EA, Ubisoft, and King
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-warning mt-1" />
                <div>
                  <h4 className="font-semibold">Founded</h4>
                  <p className="text-sm text-muted-foreground">
                    2019<br />
                    5+ years of branded gaming expertise
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Recognition</h4>
                  <p className="text-sm text-muted-foreground">
                    Winner: Best Marketing Game 2023<br />
                    Featured in AdAge Top Creative Agencies
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-success/10 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">Our Mission</h4>
            <p className="text-sm text-muted-foreground mb-4">
              We believe the future of marketing is interactive. Through custom game experiences, 
              we help brands create deeper connections with their audiences, driving engagement 
              that traditional advertising simply can't match.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-primary">100+</div>
                <div className="text-xs text-muted-foreground">Games Shipped</div>
              </div>
              <div>
                <div className="text-xl font-bold text-success">50M+</div>
                <div className="text-xs text-muted-foreground">Players Reached</div>
              </div>
              <div>
                <div className="text-xl font-bold text-warning">15+</div>
                <div className="text-xs text-muted-foreground">Industries Served</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary">95%</div>
                <div className="text-xs text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 justify-center">
            <Button className="hero-button">
              Schedule Strategy Call
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}