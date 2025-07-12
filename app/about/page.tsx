import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 bg-zinc-900">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Founded on <span className="text-red-600">Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Since 2015, BOSS FITNESS has been dedicated to transforming lives through innovative fitness solutions,
              expert guidance, and unwavering commitment to our members' success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
              To empower individuals to achieve their highest potential through personalized fitness experiences,
              cutting-edge technology, and a supportive community that celebrates every victory, no matter how small.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service, from equipment to coaching.",
              },
              {
                icon: Users,
                title: "Community",
                description: "Building a supportive community where everyone feels welcome and motivated.",
              },
              {
                icon: Award,
                title: "Innovation",
                description: "Continuously evolving with the latest fitness technology and methodologies.",
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "Operating with honesty, transparency, and genuine care for our members.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-zinc-800 border-zinc-700">
                <CardContent className="p-8">
                  <value.icon className="h-16 w-16 text-red-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300">Meet the visionaries behind BOSS FITNESS.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Alex Thompson",
                role: "Founder & CEO",
                bio: "Former Olympic athlete with 15+ years in fitness industry leadership.",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Sarah Martinez",
                role: "Head of Training",
                bio: "Certified master trainer with expertise in sports science and nutrition.",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "David Kim",
                role: "Operations Director",
                bio: "Business strategist focused on member experience and operational excellence.",
                image: "/placeholder.svg?height=400&width=300",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-zinc-800 border-zinc-700"
              >
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "50,000+", label: "Active Members" },
              { number: "15", label: "Locations" },
              { number: "200+", label: "Expert Trainers" },
              { number: "9", label: "Years of Excellence" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
