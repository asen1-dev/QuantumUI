import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    company: "TechCorp",
    content:
      "QuantumUI has revolutionized our development process. The components are not only beautiful but also incredibly easy to use and customize.",
    avatar: "/avatar1.png",
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    company: "DesignHub",
    content:
      "As a designer, I appreciate the attention to detail in QuantumUI. It's rare to find a component library that's both functional and aesthetically pleasing.",
    avatar: "/avatar2.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Full Stack Developer",
    company: "StartupX",
    content:
      "QuantumUI has saved us countless hours of development time. The documentation is comprehensive, and the support is top-notch.",
    avatar: "/avatar3.png",
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Loved by{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Developers</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

