import { Check, X } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$0",
    features: ["Access to basic components", "Community support", "1 project", "Basic documentation"],
    notIncluded: ["Premium components", "Priority support", "Multiple projects", "Advanced features"],
  },
  {
    name: "Pro",
    price: "$49/month",
    features: [
      "Access to all components",
      "Priority support",
      "Unlimited projects",
      "Advanced documentation",
      "Custom theming",
      "API access",
      "Regular updates",
    ],
    notIncluded: [],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "Dedicated support",
      "Custom development",
      "On-premise deployment",
      "SLA",
      "Training and workshops",
    ],
    notIncluded: [],
  },
]

const Pricing = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Simple,{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Transparent</span>{" "}
        Pricing
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6">{plan.price}</div>
            <ul className="mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center mb-2">
                  <Check className="w-5 h-5 mr-2 text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
              {plan.notIncluded.map((feature, i) => (
                <li key={i} className="flex items-center mb-2 text-gray-500">
                  <X className="w-5 h-5 mr-2 text-red-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-colors">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing

