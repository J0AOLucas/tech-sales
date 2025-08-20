const AuthorityStrip = () => {
  const stats = [
    { number: "8+", label: "Years in Tech Sales" },
    { number: "Millions", label: "in Revenue Generated" },
    { number: "Hundreds", label: "of Professionals Coached" },
    { number: "10+", label: "Countries" }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        {/* Company Logos */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wide">
            Featured In & Worked With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img className="h-7" src="/Microsoft-logo.png" alt="Microsoft" />
            <img className="h-7" src="/IBM-logo.png" alt="IBM" />
            <img className="h-7" src="/ForbesBLK-logo.png" alt="ForbesBLK" />
            <img className="h-7" src="/SalesEvangelist-logo.png" alt="SalesEvangelist" />
            <img className="h-7" src="/TechCrunch-logo.png" alt="TechCrunch" />
            <img className="h-7" src="/LinkedIn-logo.png" alt="LinkedIn" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityStrip;