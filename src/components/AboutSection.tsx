import { Quote } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">About Dayvisson</h2>
          
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className=" bg-gradient-to-br from-primary to-secondary rounded-2xl card-elevated overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <img src="/dayvisson-photo.png" alt="Dayvisson Da Silva" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="md:col-span-2 space-y-6">
              <div className="prose prose-lg">
                <p className="text-lg leading-relaxed">
                  From first-generation immigrant to tech sales leader, I've lived the transformation I now teach.
                </p>
                <p className="text-lg leading-relaxed">
                  After leaving Brazil to chase education and opportunity, I started in tech sales at IBM, 
                  knowing only 10% of the IT basics. Five years later, I landed at Microsoft — doubling my 
                  income in a single move, and nearly tripling it within two years.
                </p>
                <p className="text-lg leading-relaxed">
                  Now, I'm on a mission to help others do the same. Whether you're a high-performer ready for 
                  your next big role, a company looking to attract and retain elite sales talent, or a conference 
                  seeking to inspire action — I bring a mix of proven strategy, real-world experience, and 
                  contagious energy to every stage.
                </p>
              </div>
              
              {/* Pull Quote */}
              <div className="relative bg-accent p-8 rounded-2xl border-l-4 border-secondary">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-secondary opacity-50" />
                <blockquote className="text-2xl font-semibold text-primary italic pl-8">
                  "I don't just talk about breaking into tech — I show people how to hack it."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;