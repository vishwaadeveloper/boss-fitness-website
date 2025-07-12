"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Crown,
  Dumbbell,
  Target,
  Trophy,
  MapPin,
  Clock,
  Users,
  Star,
  ChevronRight,
  Play,
  Menu,
  X,
  Shield,
  Zap,
  Flame,
} from "lucide-react"

export default function BossFitness() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const navItems = [
    { id: "hero", label: "HOME" },
    { id: "domain", label: "DOMAIN" },
    { id: "bosses", label: "BOSSES" },
    { id: "locations", label: "LOCATIONS" },
    { id: "membership", label: "MEMBERSHIP" },
    { id: "contact", label: "CONTACT" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Mouse Trail Effect */}
      <div
        className="fixed w-4 h-4 bg-red-600 rounded-full pointer-events-none z-50 opacity-60 blur-sm"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: "all 0.1s ease-out",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/95 backdrop-blur-md border-b border-red-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-white">
                BOSS <span className="text-red-600">FITNESS</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-bold tracking-wider transition-all duration-300 hover:text-red-500 hover:glow-red ${
                    activeSection === item.id ? "text-red-500" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-600">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-sm font-bold tracking-wider text-white hover:text-red-500 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-white glow-red animate-pulse">
              BECOME
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-red-600 animate-pulse">THE BOSS</h1>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enter the domain of fitness royalty. Every rep, every set, every drop of sweat brings you closer to claiming
            your throne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("membership")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50 border-2 border-red-600"
            >
              <Crown className="mr-2 h-5 w-5" />
              CLAIM YOUR THRONE
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("domain")}
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 bg-black"
            >
              <Play className="mr-2 h-5 w-5" />
              TOUR THE DOMAIN
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 text-red-500 rotate-90" />
        </div>
      </section>

      {/* Boss Manifesto */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white glow-red">THE BOSS MANIFESTO</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "WEAKNESS IS A CHOICE",
                description:
                  "Every day you choose strength or surrender. Every rep you choose power or defeat. The choice is yours.",
                icon: Shield,
              },
              {
                title: "STRENGTH IS A DECISION",
                description:
                  "True power comes from the decision to never give up, never give in, never accept less than your best.",
                icon: Zap,
              },
              {
                title: "DOMINANCE IS EARNED",
                description:
                  "Respect isn't given, it's earned through sweat, dedication, and the relentless pursuit of excellence.",
                icon: Flame,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-black border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <item.icon className="h-16 w-16 text-red-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Domain */}
      <section id="domain" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white glow-red">THE DOMAIN</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your kingdom of strength. Every zone designed for maximum domination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "THE THRONE ROOM",
                subtitle: "Free Weights & Powerlifting",
                image: "/placeholder.svg?height=300&width=400",
                description: "Where legends are forged in iron and steel.",
              },
              {
                title: "THE BATTLEGROUND",
                subtitle: "Functional Training",
                image: "/placeholder.svg?height=300&width=400",
                description: "Combat-ready training for real-world dominance.",
              },
              {
                title: "THE CARDIO CHAMBER",
                subtitle: "High-Tech Cardio",
                image: "/placeholder.svg?height=300&width=400",
                description: "Cardiovascular supremacy through cutting-edge technology.",
              },
              {
                title: "RECOVERY SANCTUARY",
                subtitle: "Massage & Recovery",
                image: "/placeholder.svg?height=300&width=400",
                description: "Restore your power for tomorrow's conquest.",
              },
            ].map((zone, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={zone.image || "/placeholder.svg"}
                    alt={zone.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white border-0">BOSS ZONE</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{zone.title}</h3>
                  <p className="text-sm text-red-400 mb-3">{zone.subtitle}</p>
                  <p className="text-gray-300 text-sm">{zone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Bosses */}
      <section id="bosses" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white glow-red">THE BOSSES</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your commanding officers. Elite trainers who forge champions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "COMMANDER STEEL",
                rank: "STRENGTH COMMANDER",
                specialty: "Powerlifting & Mass Building",
                image: "/placeholder.svg?height=400&width=300",
                achievements: ["10x Powerlifting Champion", "500+ Transformations", "Boss Level: LEGENDARY"],
                quote: "Weakness is not in your muscles, it's in your mind.",
              },
              {
                name: "CAPTAIN THUNDER",
                rank: "CARDIO CAPTAIN",
                specialty: "HIIT & Conditioning",
                image: "/placeholder.svg?height=400&width=300",
                achievements: ["Former Navy SEAL", "Marathon World Record", "Boss Level: ELITE"],
                quote: "Pain is temporary, but quitting lasts forever.",
              },
              {
                name: "GENERAL IRON",
                rank: "BOSS BUILDER",
                specialty: "Complete Transformation",
                image: "/placeholder.svg?height=400&width=300",
                achievements: ["1000+ Success Stories", "Nutrition Expert", "Boss Level: SUPREME"],
                quote: "I don't create athletes, I create BOSSES.",
              },
            ].map((boss, index) => (
              <Card
                key={index}
                className="bg-black border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={boss.image || "/placeholder.svg"}
                    alt={boss.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-red-600 text-white font-bold border-0">{boss.rank}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{boss.name}</h3>
                  <p className="text-red-400 mb-4">{boss.specialty}</p>
                  <div className="space-y-2 mb-4">
                    {boss.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <Star className="h-4 w-4 text-red-500 mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                  <blockquote className="text-sm italic text-gray-400 mb-4">"{boss.quote}"</blockquote>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold border-2 border-red-600">
                    RECRUIT ME
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Boss Territories */}
      <section id="locations" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white glow-red">BOSS TERRITORIES</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple kingdoms under BOSS command. Choose your stronghold.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "DOWNTOWN FORTRESS",
                address: "123 Power Street, Metro City",
                level: "SUPREME",
                members: "2,500+ BOSSES",
                features: ["Olympic Lifting Platform", "Recovery Spa", "Nutrition Bar", "24/7 Access"],
              },
              {
                name: "WESTSIDE STRONGHOLD",
                address: "456 Strength Ave, West District",
                level: "ELITE",
                members: "1,800+ BOSSES",
                features: ["Boxing Ring", "Functional Training", "Sauna", "Personal Training"],
              },
              {
                name: "NORTHSIDE COMMAND",
                address: "789 Domination Blvd, North Zone",
                level: "LEGENDARY",
                members: "3,200+ BOSSES",
                features: ["Powerlifting Haven", "Cardio Theater", "Massage Therapy", "Boss Lounge"],
              },
            ].map((location, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{location.name}</h3>
                    <Badge className="bg-red-600 text-white font-bold border-0">{location.level}</Badge>
                  </div>

                  <div className="flex items-center text-gray-300 mb-2">
                    <MapPin className="h-4 w-4 text-red-500 mr-2" />
                    {location.address}
                  </div>

                  <div className="flex items-center text-gray-300 mb-4">
                    <Users className="h-4 w-4 text-red-500 mr-2" />
                    {location.members}
                  </div>

                  <div className="space-y-2 mb-6">
                    {location.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <Target className="h-3 w-3 text-red-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold border-2 border-red-600">
                    CONQUER THIS TERRITORY
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Thrones */}
      <section id="membership" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white glow-red">CHOOSE YOUR THRONE</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ascend through the ranks of fitness royalty. Each level unlocks greater power.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "APPRENTICE",
                price: "$49",
                period: "/month",
                level: "ENTRY LEVEL",
                bgColor: "bg-gray-800",
                borderColor: "border-gray-600",
                features: [
                  "Access to all equipment",
                  "Basic group classes",
                  "Locker room access",
                  "Mobile app access",
                  "Guest passes (2/month)",
                ],
              },
              {
                title: "LIEUTENANT",
                price: "$89",
                period: "/month",
                level: "ENHANCED POWER",
                bgColor: "bg-gray-700",
                borderColor: "border-red-600",
                popular: true,
                features: [
                  "Everything in Apprentice",
                  "Unlimited group classes",
                  "Personal training (2/month)",
                  "Nutrition consultation",
                  "Recovery room access",
                  "Guest passes (5/month)",
                ],
              },
              {
                title: "BOSS",
                price: "$149",
                period: "/month",
                level: "ULTIMATE DOMINANCE",
                bgColor: "bg-black",
                borderColor: "border-red-600",
                features: [
                  "Everything in Lieutenant",
                  "Unlimited personal training",
                  "VIP Boss Lounge access",
                  "Massage therapy included",
                  "Nutrition meal plans",
                  "24/7 gym access",
                  "Unlimited guest passes",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.bgColor} border-2 ${plan.borderColor} transition-all duration-300 transform hover:scale-105 ${
                  plan.popular ? "ring-2 ring-red-500" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-bold px-4 py-1 border-0">
                    MOST POPULAR
                  </Badge>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-3xl font-black mb-2 text-white">{plan.title}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.level}</p>

                  <div className="mb-8">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <Crown className="h-4 w-4 mr-3 text-red-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 border-2 border-red-600 transition-all duration-300">
                    SEIZE YOUR POWER
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Recruitment Center */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white glow-red">RECRUITMENT CENTER</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to join the army of BOSSES? Your transformation starts here.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-zinc-900 border-2 border-red-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">ENLIST NOW</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2">FIRST NAME</label>
                      <Input
                        className="bg-black border-red-600 text-white focus:border-red-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2">LAST NAME</label>
                      <Input
                        className="bg-black border-red-600 text-white focus:border-red-500"
                        placeholder="Enter your surname"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">EMAIL</label>
                    <Input
                      type="email"
                      className="bg-black border-red-600 text-white focus:border-red-500"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">PHONE</label>
                    <Input
                      className="bg-black border-red-600 text-white focus:border-red-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">FITNESS GOALS</label>
                    <Textarea
                      className="bg-black border-red-600 text-white focus:border-red-500"
                      placeholder="Tell us about your fitness goals and what you want to achieve..."
                    />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 border-2 border-red-600">
                    <Crown className="mr-2 h-5 w-5" />
                    BEGIN MY TRANSFORMATION
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-8">
              <Card className="bg-zinc-900 border-2 border-red-600">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">QUICK DEPLOYMENT</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-black border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3">
                      <Target className="mr-2 h-5 w-5" />
                      VIRTUAL RECONNAISSANCE
                    </Button>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 border-2 border-red-600">
                      <Clock className="mr-2 h-5 w-5" />
                      SCHEDULE VISIT
                    </Button>
                    <Button className="w-full bg-black border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3">
                      <Dumbbell className="mr-2 h-5 w-5" />
                      EMERGENCY CONSULTATION
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-2 border-red-600">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-red-500">COMMAND CENTER</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-red-500 mr-3" />
                      <span>123 Boss Street, Fitness City, FC 12345</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-500 mr-3" />
                      <span>24/7 BOSS ACCESS</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="h-5 w-5 text-red-500 mr-3" />
                      <span>boss@bossfitness.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-600 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Crown className="h-8 w-8 text-red-600" />
              <span className="text-3xl font-bold text-white">
                BOSS <span className="text-red-600">FITNESS</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">WHERE LEGENDS ARE FORGED AND BOSSES ARE BORN</p>
            <p className="text-sm text-gray-500">© 2024 Boss Fitness. All rights reserved. Weakness not tolerated.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
