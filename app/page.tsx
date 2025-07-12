"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Play, Star, ArrowRight, Users, Trophy, Clock } from "lucide-react"

export default function HomePage() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Modern gym interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transform Your <span className="text-red-600">Potential</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience premium fitness with expert guidance, cutting-edge equipment, and personalized programs designed
            for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose BOSS FITNESS?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology, expert coaching, and premium facilities to deliver unmatched results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Trainers",
                description:
                  "Certified professionals with years of experience helping clients achieve their fitness goals.",
              },
              {
                icon: Trophy,
                title: "Proven Results",
                description:
                  "Track record of successful transformations with personalized programs and ongoing support.",
              },
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description: "24/7 access and flexible class schedules that fit your busy lifestyle and commitments.",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-zinc-800 border-zinc-700">
                <CardContent className="p-8">
                  <item.icon className="h-16 w-16 text-red-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Classes</h2>
            <p className="text-xl text-gray-300">Discover our most popular fitness programs designed for all levels.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "HIIT Training",
                description: "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
                image: "/placeholder.svg?height=300&width=400",
                duration: "45 min",
                level: "All Levels",
              },
              {
                title: "Strength & Conditioning",
                description: "Build muscle, increase strength, and improve overall athletic performance.",
                image: "/placeholder.svg?height=300&width=400",
                duration: "60 min",
                level: "Intermediate",
              },
              {
                title: "Yoga Flow",
                description: "Improve flexibility, balance, and mindfulness through dynamic yoga sequences.",
                image: "/placeholder.svg?height=300&width=400",
                duration: "75 min",
                level: "Beginner",
              },
            ].map((classItem, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={classItem.image || "/placeholder.svg"}
                  alt={classItem.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{classItem.title}</h3>
                  <p className="text-gray-300 mb-4">{classItem.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{classItem.duration}</span>
                    <span>{classItem.level}</span>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Book Class</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Members Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Executive",
                content:
                  "BOSS FITNESS transformed not just my body, but my entire mindset. The trainers are incredible and the facilities are world-class.",
                rating: 5,
              },
              {
                name: "Mike Chen",
                role: "Software Engineer",
                content:
                  "The flexibility and quality of programs here are unmatched. I've achieved goals I never thought possible.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Teacher",
                content:
                  "The community at BOSS FITNESS is amazing. Everyone is supportive and the atmosphere is motivating every single day.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-zinc-800 border-zinc-700">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Start Your Transformation?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of members who have already transformed their lives with BOSS FITNESS.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white whitespace-nowrap">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
