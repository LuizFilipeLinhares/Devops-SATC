const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "R$29",
      features: ["1 Projeto", "Suporte básico", "Atualizações mensais"]
    },
    {
      name: "Pro",
      price: "R$79",
      features: ["Projetos ilimitados", "Suporte prioritário", "Atualizações semanais"]
    },
    {
      name: "Enterprise",
      price: "R$199",
      features: ["Tudo do Pro", "Suporte dedicado", "Consultoria exclusiva"]
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <h2>Planos Simples e Transparentes</h2>
        <div className="grid">
          {plans.map((plan, index) => (
            <div key={index} className="card pricing-card">
              <h3>{plan.name}</h3>
              <h4>{plan.price}/mês</h4>
              <ul>
                {plan.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="primary">Escolher Plano</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;