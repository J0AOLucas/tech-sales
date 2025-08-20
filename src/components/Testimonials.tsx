import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Dayvisson's talk wasn't just inspiring — it gave our team the exact roadmap they needed to take action immediately.",
      author: "Sarah Chen",
      title: "Tech Sales Conference Organizer",
      company: "SalesForce Summit"
    },
    {
      quote: "He connects instantly with audiences. Our attendees walked away with both hope and a plan.",
      author: "Marcus Johnson",
      title: "Career Event Director",
      company: "TechCareers Live"
    },
    {
      quote: "We brought Dayvisson in for our leadership summit, and he delivered a masterclass in career growth and resilience. I'd hire him again in a heartbeat.",
      author: "Jennifer Martinez",
      title: "VP of Sales",
      company: "CloudTech Solutions"
    },
    {
      quote: "Every person in the room left with clarity and motivation. He's the real deal.",
      author: "David Park",
      title: "Event Planner",
      company: "Corporate Connect"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">What People Are Saying</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From conference organizers to corporate leaders, see why top organizations 
            trust Dayvisson to deliver transformational experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elevated p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary opacity-20" />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg leading-relaxed text-foreground mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-primary">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground">
                  {testimonial.title}
                </p>
                <p className="text-sm text-secondary font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;