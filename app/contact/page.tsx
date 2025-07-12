"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-16 bg-zinc-900">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-red-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Have questions? We're here to help you start your fitness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-zinc-700 border-zinc-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-zinc-700 border-zinc-600 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-zinc-700 border-zinc-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-zinc-700 border-zinc-600 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="bg-zinc-700 border-zinc-600 text-white"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-400">123 Fitness Street, Health City, HC 12345</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-400">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-400">info@bossfitness.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-400">Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Schedule a Tour</Button>
                    <Button
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                    >
                      Book Free Consultation
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent text-gray-300 border-gray-700 hover:bg-zinc-700 hover:text-white"
                    >
                      Download App
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  question: "What are your membership options?",
                  answer:
                    "We offer three membership tiers: Essential ($49/month), Premium ($89/month), and Elite ($149/month). Each plan includes different levels of access and services.",
                },
                {
                  question: "Do you offer personal training?",
                  answer:
                    "Yes! We have certified personal trainers available for one-on-one sessions. Premium and Elite members get included personal training sessions.",
                },
                {
                  question: "Can I try before I commit?",
                  answer:
                    "We offer a 7-day free trial for all new members. You can experience our facilities and services before making a commitment.",
                },
                {
                  question: "What safety measures do you have in place?",
                  answer:
                    "We maintain the highest safety standards with regular equipment maintenance, trained staff, and comprehensive safety protocols throughout our facilities.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
