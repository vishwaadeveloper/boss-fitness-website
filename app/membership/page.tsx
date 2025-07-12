import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export default function MembershipPage() {
  return (
    <div className="min-h-screen pt-16 bg-zinc-900">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Choose Your <span className="text-red-600">Plan</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Flexible membership options designed to fit your lifestyle and fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Essential",
                price: "$49",
                period: "/month",
                description: "Perfect for getting started with your fitness journey",
                features: [
                  "Access to all gym equipment",
                  "Locker room facilities",
                  "Basic group classes",
                  "Mobile app access",
                  "Guest passes (2/month)",
                ],
                popular: false,
                cta: "Start Essential",
              },
              {
                name: "Premium",
                price: "$89",
                period: "/month",
                description: "Our most popular plan with enhanced benefits",
                features: [
                  "Everything in Essential",
                  "Unlimited group classes",
                  "Personal training sessions (2/month)",
                  "Nutrition consultation",
                  "Recovery room access",
                  "Guest passes (5/month)",
                  "Priority booking",
                ],
                popular: true,
                cta: "Start Premium",
              },
              {
                name: "Elite",
                price: "$149",
                period: "/month",
                description: "Ultimate fitness experience with VIP treatment",
                features: [
                  "Everything in Premium",
                  "Unlimited personal training",
                  "VIP lounge access",
                  "Massage therapy included",
                  "Custom meal plans",
                  "24/7 gym access",
                  "Unlimited guest passes",
                  "Concierge services",
                ],
                popular: false,
                cta: "Start Elite",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-lg transition-shadow bg-zinc-800 border-zinc-700 ${plan.popular ? "ring-2 ring-red-600" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Membership Benefits</h2>
            <p className="text-xl text-gray-300">
              Every membership includes access to our world-class facilities and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "State-of-the-art equipment",
              "Expert-led group classes",
              "Personalized workout plans",
              "Nutrition guidance",
              "Progress tracking tools",
              "Community events",
              "Flexible scheduling",
              "Mobile app access",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <Star className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Your Free Trial Today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Try any membership plan free for 7 days. No commitment, no hidden fees.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Claim Free Trial
          </Button>
        </div>
      </section>
    </div>
  )
}
