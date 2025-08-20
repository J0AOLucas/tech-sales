import { Target, TrendingUp, Zap, Key } from "lucide-react";

const SpeakingTopics = () => {
  const topics = [
    {
      icon: Target,
      title: "The Tech Sales Hacker: Landing Your Next Big Role in 90 Days or Less",
      description: "Proven strategies to position, package, and promote yourself for high-paying tech sales roles — even without a tech background."
    },
    {
      icon: TrendingUp,
      title: "Bounce Back Stronger: Winning After Layoffs",
      description: "How to regain clarity, confidence, and a high-paying job in record time — no matter the market conditions."
    },
    {
      icon: Zap,
      title: "The Future of Tech Talent in the AI Age",
      description: "What companies must do to attract, retain, and upskill top-performing sales talent in today's competitive, AI-driven landscape."
    },
    {
      icon: Key,
      title: "The Freedom Framework: Breaking Out of Career Traps",
      description: "From stuck to unstoppable — a powerful framework for taking control of your next chapter."
    }
  ];

  return (
    <section id="topics" className="section-padding bg-muted">
      <div className="section-container">
        <h2 className="section-heading text-center">Speaking Topics</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <div key={index} className="card-elevated p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpeakingTopics;