import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    { id: 1, icon: '📝', title: 'Order Sample' },
    { id: 2, icon: '📄', title: 'Get Sample Order in 5 days' },
    { id: 3, icon: '📱', title: 'Approve Digital Draft' },
    { id: 4, icon: '📦', title: 'Place Your Bulk Order' },
    { id: 5, icon: '🚚', title: 'Print & Delivery' },
  ];

  return (
    <section className="how-section">
      <h2 className="how-title">How It Works</h2>

      <div className="how-grid">
        {steps.map((step) => (
          <div key={step.id} className="how-step">
            <div className="how-icon">{step.icon}</div>
            <p className="how-step-title">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;