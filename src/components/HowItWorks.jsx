import { Search, CalendarCheck, Smile } from "lucide-react";

const steps = [
  { title: "Choose", desc: "Find an experience you love", icon: Search },
  { title: "Book", desc: "Secure your spot instantly", icon: CalendarCheck },
  { title: "Enjoy", desc: "Create memories that last", icon: Smile },
];

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold text-center mb-12">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.title}
            className="bg-white rounded-2xl p-6 shadow-sm text-center"
          >
            <step.icon size={32} className="mx-auto mb-4 text-purple-600" />
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
