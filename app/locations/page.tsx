"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Car, Wifi, Dumbbell, Users, Zap, Waves } from "lucide-react"
import { motion } from "framer-motion"

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState(0)

  const locations = [
    {
      id: 1,
      name: "Downtown Fitness Center",
      address: "123 Main Street, Downtown, City 12345",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM",
      image: "/placeholder.svg?height=400&width=600",
      size: "25,000 sq ft",
      members: "2,500+ active members",
      parking: "Free parking available",
      amenities: [
        { icon: Dumbbell, name: "Olympic Lifting Platform", available: true },
        { icon: Users, name: "Group Fitness Studio", available: true },
        { icon: Waves, name: "Swimming Pool", available: true },
        { icon: Zap, name: "Sauna & Steam Room", available: true },
        { icon: Car, name: "Free Parking", available: true },
        { icon: Wifi, name: "Free WiFi", available: true },
      ],
      features: [
        "State-of-the-art cardio equipment",
        "Full range of free weights",
        "Functional training area",
        "Recovery and stretching zone",
        "Nutrition bar and smoothie station",
        "Personal training studios",
      ],
      classes: ["HIIT", "Yoga", "Spin", "Pilates", "Boxing", "Zumba"],
    },
    {
      id: 2,
      name: "Westside Training Hub",
      address: "456 West Avenue, Westside, City 12346",
      phone: "(555) 234-5678",
      hours: "Mon-Fri: 5AM-10PM, Sat-Sun: 7AM-9PM",
      image: "/placeholder.svg?height=400&width=600",
      size: "18,000 sq ft",
      members: "1,800+ active members",
      parking: "Street parking",
      amenities: [
        { icon: Dumbbell, name: "CrossFit Box", available: true },
        { icon: Users, name: "Group Fitness Studio", available: true },
        { icon: Waves, name: "Swimming Pool", available: false },
        { icon: Zap, name: "Sauna", available: true },
        { icon: Car, name: "Parking", available: false },
        { icon: Wifi, name: "Free WiFi", available: true },
      ],
      features: [
        "CrossFit certified equipment",
        "Functional movement area",
        "TRX suspension training",
        "Battle ropes and kettlebells",
        "Recovery room with massage chairs",
        "Outdoor training space",
      ],
      classes: ["CrossFit", "Functional Training", "TRX", "Bootcamp", "Yoga"],
    },
    {
      id: 3,
      name: "Northside Wellness",
      address: "789 North Boulevard, Northside, City 12347",
      phone: "(555) 345-6789",
      hours: "24/7 Access for Members",
      image: "/placeholder.svg?height=400&width=600",
      size: "30,000 sq ft",
      members: "3,200+ active members",
      parking: "Covered parking garage",
      amenities: [
        { icon: Dumbbell, name: "Premium Equipment", available: true },
        { icon: Users, name: "Multiple Studios", available: true },
        { icon: Waves, name: "Lap Pool & Hot Tub", available: true },
        { icon: Zap, name: "Full Spa Services", available: true },
        { icon: Car, name: "Covered Parking", available: true },
        { icon: Wifi, name: "High-Speed WiFi", available: true },
      ],
      features: [
        "Premium Technogym equipment",
        "Three group fitness studios",
        "Rock climbing wall",
        "Full-service spa and massage",
        "Healthy café and juice bar",
        "Childcare services",
        "Executive locker rooms",
      ],
      classes: ["All class types", "Specialized workshops", "Personal training", "Nutrition seminars"],
    },
  ]

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
              Find Your <span className="text-red-600">Gym</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium fitness facilities across the city, each designed to provide the ultimate workout experience.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Location Selector */}
      <motion.section
        className="py-8 bg-zinc-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {locations.map((location, index) => (
              <Button
                key={location.id}
                onClick={() => setSelectedLocation(index)}
                variant={selectedLocation === index ? "default" : "outline"}
                className={`${
                  selectedLocation === index
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-transparent border-zinc-700 text-gray-300 hover:bg-zinc-800"
                }`}
              >
                {location.name}
              </Button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Selected Location Details */}
      <section className="py-12 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            key={selectedLocation}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Location Image and Basic Info */}
              <div>
                <img
                  src={locations[selectedLocation].image || "/placeholder.svg"}
                  alt={locations[selectedLocation].name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <Card className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">{locations[selectedLocation].name}</h2>

                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <MapPin className="h-5 w-5 text-red-600 mr-3" />
                        {locations[selectedLocation].address}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Phone className="h-5 w-5 text-red-600 mr-3" />
                        {locations[selectedLocation].phone}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-5 w-5 text-red-600 mr-3" />
                        {locations[selectedLocation].hours}
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Size:</span>
                        <p className="text-white font-medium">{locations[selectedLocation].size}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Members:</span>
                        <p className="text-white font-medium">{locations[selectedLocation].members}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">Schedule Tour</Button>
                      <Button
                        variant="outline"
                        className="flex-1 bg-transparent border-zinc-700 text-gray-300 hover:bg-zinc-700"
                      >
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Amenities and Features */}
              <div className="space-y-6">
                {/* Amenities */}
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Amenities</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {locations[selectedLocation].amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <amenity.icon
                            className={`h-5 w-5 mr-3 ${amenity.available ? "text-green-500" : "text-gray-500"}`}
                          />
                          <span className={`text-sm ${amenity.available ? "text-gray-300" : "text-gray-500"}`}>
                            {amenity.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                    <div className="space-y-2">
                      {locations[selectedLocation].features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Classes */}
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Available Classes</h3>
                    <div className="flex flex-wrap gap-2">
                      {locations[selectedLocation].classes.map((classType, index) => (
                        <Badge key={index} variant="outline" className="text-gray-300 border-gray-600">
                          {classType}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Locations Overview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Locations</h2>
            <p className="text-xl text-gray-300">Compare our facilities and find the perfect fit for you.</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {locations.map((location, index) => (
              <motion.div key={location.id} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 bg-zinc-800 border-zinc-700 hover:border-red-600">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{location.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{location.address}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Size:</span>
                        <span className="text-white">{location.size}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Members:</span>
                        <span className="text-white">{location.members}</span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => setSelectedLocation(index)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-red-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Visit Us Today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Schedule a tour of any of our locations and experience the BOSS FITNESS difference firsthand.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Schedule Your Tour
          </Button>
        </div>
      </motion.section>
    </div>
  )
}
