"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Calendar, Award, Users, Clock, Filter } from "lucide-react"
import { motion } from "framer-motion"

export default function TrainersPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const specialties = ["All", "Strength Training", "Cardio", "Yoga", "Nutrition", "Rehabilitation"]

  const trainers = [
    {
      id: 1,
      name: "Alex Thompson",
      specialty: "Strength Training",
      experience: "8 years",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=400&width=300",
      bio: "Former Olympic weightlifter specializing in powerlifting and strength development.",
      certifications: ["NASM-CPT", "CSCS", "Olympic Lifting Coach"],
      availability: "Mon-Fri: 6AM-8PM",
      price: "$80/session",
    },
    {
      id: 2,
      name: "Sarah Martinez",
      specialty: "Cardio",
      experience: "6 years",
      rating: 4.8,
      reviews: 203,
      image: "/placeholder.svg?height=400&width=300",
      bio: "High-intensity interval training expert with a passion for cardiovascular fitness.",
      certifications: ["ACE-CPT", "HIIT Specialist", "Spin Instructor"],
      availability: "Tue-Sat: 5AM-7PM",
      price: "$75/session",
    },
    {
      id: 3,
      name: "David Kim",
      specialty: "Yoga",
      experience: "10 years",
      rating: 5.0,
      reviews: 89,
      image: "/placeholder.svg?height=400&width=300",
      bio: "Certified yoga instructor focusing on flexibility, mindfulness, and injury prevention.",
      certifications: ["RYT-500", "Yin Yoga Certified", "Meditation Teacher"],
      availability: "Mon-Sun: 7AM-9PM",
      price: "$70/session",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      specialty: "Nutrition",
      experience: "7 years",
      rating: 4.9,
      reviews: 134,
      image: "/placeholder.svg?height=400&width=300",
      bio: "Registered dietitian helping clients achieve their goals through proper nutrition.",
      certifications: ["RD", "Sports Nutrition", "Meal Planning Specialist"],
      availability: "Mon-Fri: 9AM-6PM",
      price: "$90/session",
    },
    {
      id: 5,
      name: "Michael Chen",
      specialty: "Rehabilitation",
      experience: "12 years",
      rating: 4.8,
      reviews: 167,
      image: "/placeholder.svg?height=400&width=300",
      bio: "Physical therapist specializing in injury recovery and movement correction.",
      certifications: ["DPT", "CSCS", "FMS Certified"],
      availability: "Mon-Fri: 8AM-5PM",
      price: "$95/session",
    },
    {
      id: 6,
      name: "Jessica Park",
      specialty: "Strength Training",
      experience: "5 years",
      rating: 4.7,
      reviews: 98,
      image: "/placeholder.svg?height=400&width=300",
      bio: "Bodybuilding competitor focused on muscle building and body composition.",
      certifications: ["NASM-CPT", "Bodybuilding Coach", "Nutrition Coach"],
      availability: "Tue-Sat: 6AM-8PM",
      price: "$75/session",
    },
  ]

  const filteredTrainers = trainers.filter((trainer) => {
    const matchesSpecialty = selectedSpecialty === "All" || trainer.specialty === selectedSpecialty
    const matchesSearch =
      trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSpecialty && matchesSearch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen pt-16 bg-zinc-900">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Your <span className="text-red-600">Coaches</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert trainers dedicated to helping you achieve your fitness goals with personalized guidance and
              support.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Search and Filter */}
      <motion.section
        className="py-8 bg-zinc-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input
                  placeholder="Search trainers by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2"
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trainers Grid */}
      <section className="py-12 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredTrainers.map((trainer) => (
              <motion.div key={trainer.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-zinc-800 border-zinc-700 hover:border-red-600">
                  <div className="relative">
                    <img
                      src={trainer.image || "/placeholder.svg"}
                      alt={trainer.name}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white">{trainer.specialty}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gray-300">{trainer.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4">{trainer.bio}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <Award className="h-4 w-4 mr-2" />
                        {trainer.experience} experience
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="h-4 w-4 mr-2" />
                        {trainer.reviews} reviews
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        {trainer.availability}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {trainer.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs text-gray-400 border-gray-600">
                          {cert}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-red-600">{trainer.price}</span>
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Session
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trainer Matching Quiz CTA */}
      <motion.section
        className="py-20 bg-red-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Find Your Perfect Match</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Not sure which trainer is right for you? Take our quick quiz to get matched with the perfect coach.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Take Trainer Quiz
          </Button>
        </div>
      </motion.section>
    </div>
  )
}
