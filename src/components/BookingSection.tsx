import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Mail, Phone, Download } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="booking" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Let's Inspire, Equip, and Activate Your Audience</h2>
            <p className="text-xl text-muted-foreground">
              Ready to book a speaker who delivers real transformation? Let's discuss your event.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="card-elevated p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Book Dayvisson</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Organization *</label>
                    <Input placeholder="Company/Organization" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Event Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                        <SelectItem value="20k-plus">$20,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Topic Interest</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select speaking topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech-sales-hacker">The Tech Sales Hacker</SelectItem>
                      <SelectItem value="bounce-back">Bounce Back Stronger</SelectItem>
                      <SelectItem value="future-talent">Future of Tech Talent</SelectItem>
                      <SelectItem value="freedom-framework">The Freedom Framework</SelectItem>
                      <SelectItem value="custom">Custom Topic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Event Details</label>
                  <Textarea 
                    placeholder="Tell us about your event, audience size, goals, and any specific requirements..."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full btn-primary cta-gradient">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Dayvisson Now
                </Button>
              </form>
            </div>

            {/* Contact Info & Download */}
            <div className="space-y-8">

              {/* Speaker One-Sheet */}
              <div className="card-elevated p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Need More Info?</h3>
                <p className="text-muted-foreground mb-6">
                  Download my complete speaker one-sheet with detailed topics, testimonials, and requirements.
                </p>
                <Button className="btn-secondary w-full">
                  <Download className="w-5 h-5 mr-2" />
                  Download Speaker One-Sheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;