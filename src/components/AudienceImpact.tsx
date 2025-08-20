import { CheckCircle, ArrowRight } from "lucide-react";

const AudienceImpact = () => {
  const outcomes = [
    "Gain insider job search strategies they can apply immediately",
    "Understand how to stand out in competitive tech sales hiring",
    "Learn how to build a personal brand that attracts offers",
    "Leave inspired and ready to take bold, decisive action"
  ];

  const transformation = [
    { from: "Confused", to: "Confident" },
    { from: "Overlooked", to: "In-Demand" },
    { from: "Stuck", to: "Hired" }
  ];

  return (
    <section className="section-padding bg-primary text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Audience Impact
          </h2>
          <p className="text-xl text-gray-200 mb-12">
            When you book me, your audience will walk away transformed
          </p>

          {/* Outcomes */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-4 text-left">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-lg">{outcome}</p>
              </div>
            ))}
          </div>

          {/* Transformation Visual */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8">The Transformation</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
              {/* From Section */}
              <div className="text-center">
                <p className="text-sm text-gray-300 mb-2 font-medium">FROM</p>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                  <div className="bg-red-500/20 text-red-300 px-4 py-2 rounded-lg font-medium">
                    Confused
                  </div>
                  <div className="bg-red-500/20 text-red-300 px-4 py-2 rounded-lg font-medium">
                    Overlooked
                  </div>
                  <div className="bg-red-500/20 text-red-300 px-4 py-2 rounded-lg font-medium">
                    Stuck
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <ArrowRight className="w-8 h-8 text-gray-300 hidden md:block" />
                <ArrowRight className="w-8 h-8 text-gray-300 rotate-90 md:hidden" />
              </div>

              {/* To Section */}
              <div className="text-center">
                <p className="text-sm text-gray-300 mb-2 font-medium">TO</p>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                  <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-medium">
                    Confident
                  </div>
                  <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-medium">
                    In-Demand
                  </div>
                  <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-medium">
                    Hired
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceImpact;