import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Users, Apple, Building } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16 bg-zinc-900">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-red-600">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive fitness solutions tailored to your goals, schedule, and lifestyle preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: User,
                title: "Personal Training",
                description: "One-on-one coaching tailored to your specific goals and fitness level.",
                features: [
                  "Customized workout plans",
                  "Nutrition guidance",
                  "Progress tracking",
                  "Flexible scheduling",
                ],
                price: "From $80/session",
              },
              {
                icon: Users,
                title: "Group Classes",
                description: "High-energy group workouts that build community and motivation.",
                features: ["Variety of class types", "All fitness levels", "Expert instruction", "Social atmosphere"],
                price: "Included in membership",
              },
              {
                icon: Apple,
                title: "Nutrition Coaching",
                description: "Personalized nutrition plans to fuel your fitness journey.",
                features: ["Meal planning", "Supplement guidance", "Habit coaching", "Regular check-ins"],
                price: "From $150/month",
              },
              {
                icon: Building,
                title: "Corporate Wellness",
                description: "Comprehensive wellness programs for businesses and organizations.",
                features: ["On-site programs", "Health screenings", "Team challenges", "Wellness workshops"],
                price: "Custom pricing",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-zinc-800 border-zinc-700">
                <CardContent className="p-8">
                  <service.icon className="h-16 w-16 text-red-600 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <Badge variant="outline" className="text-red-600 border-red-600">
                      {service.price}
                    </Badge>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Service Details</h2>

            <div className="space-y-12">
              {[
                {
                  title: "Personal Training Programs",
                  description:
                    "Our certified personal trainers work with you to create a customized fitness plan that aligns with your goals, whether you're looking to lose weight, build muscle, improve athletic performance, or enhance overall health.",
                  includes: [
                    "Initial fitness assessment and goal setting",
                    "Customized workout programming",
                    "Proper form and technique instruction",
                    "Nutritional guidance and meal planning",
                    "Progress tracking and plan adjustments",
                    "Motivation and accountability support",
                  ],
                },
                {
                  title: "Group Fitness Classes",
                  description:
                    "Join our diverse range of group fitness classes designed to challenge, motivate, and inspire. From high-intensity interval training to relaxing yoga sessions, we offer something for every fitness level and interest.",
                  includes: [
                    "HIIT and circuit training classes",
                    "Strength and conditioning sessions",
                    "Yoga and flexibility classes",
                    "Dance fitness and cardio classes",
                    "Specialized workshops and challenges",
                    "Beginner-friendly options available",
                  ],
                },
              ].map((detail, index) => (
                <Card key={index} className="p-8 bg-zinc-800 border-zinc-700">
                  <h3 className="text-2xl font-bold text-white mb-4">{detail.title}</h3>
                  <p className="text-gray-300 mb-6">{detail.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {detail.includes.map((item, i) => (
                      <div key={i} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                        {item}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Book a consultation with our team to discuss which services are right for you.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
