import { Building, Users, GraduationCap, Heart, Presentation } from "lucide-react";

const WhoHiresMe = () => {
  const clients = [
    {
      icon: Building,
      title: "Tech Companies & Startups",
      description: "Sales kickoffs, leadership retreats, team development sessions"
    },
    {
      icon: Presentation,
      title: "Sales & Marketing Conferences",
      description: "Keynotes, breakout sessions, panel discussions"
    },
    {
      icon: Users,
      title: "Career & Leadership Events",
      description: "Workshops, career fairs, professional development"
    },
    {
      icon: GraduationCap,
      title: "Universities & Alumni Groups",
      description: "Future-of-work sessions, career guidance, networking events"
    },
    {
      icon: Heart,
      title: "Nonprofits & Community Organizations",
      description: "Workforce development, skills training, empowerment sessions"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Who Hires Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Fortune 500 companies to community organizations, I help diverse audiences 
            unlock their potential and achieve breakthrough results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <div key={index} className="card-elevated p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {client.title}
                </h3>
                <p className="text-muted-foreground">
                  {client.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Past Clients Logos */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wide">
            Past Clients & Events
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto justify-items-center">
            <img className="h-7" src="/Microsoft-logo.png" alt="Microsoft" />
            <img className="h-7" src="/IBM-logo.png" alt="IBM" />
            <img className="h-7" src="/Salesforce-logo.png" alt="Salesforce" />
            <img className="h-7" src="/Hubspot-logo.png" alt="HubSpot" />
            <img className="h-7" src="/LinkedIn-logo.png" alt="LinkedIn" />
            <img className="h-7" src="/Techstars-logo.png" alt="TechStars" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoHiresMe;