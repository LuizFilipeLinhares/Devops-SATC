const Features = () => {
  const features = [
    {
      title: "Alta Performance",
      description: "Infraestrutura otimizada para máxima velocidade."
    },
    {
      title: "Segurança Total",
      description: "Proteção avançada para seus dados."
    },
    {
      title: "Escalabilidade",
      description: "Cresça sem limites com nossa arquitetura flexível."
    }
  ];

  return (
    <section className="features container">
      <h2>Por que escolher nossa plataforma?</h2>
      <div className="grid">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;