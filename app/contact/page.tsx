'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  Building2,
  Globe,
  User,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import {Navbar} from '@/components/navbar';
import {Footer} from '@/components/footer';

import {Button} from '@/components/ui/button';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    userType: 'farmer',
  });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['+91 1800-123-4567', '+91 9876-543-210'],
      subtitle: 'Mon-Sat, 9AM-6PM IST',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['support@krishisetu.com', 'help@krishisetu.com'],
      subtitle: 'Response within 24 hours',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['KrishiSetu Technologies Pvt Ltd', 'Tech Park, Bengaluru 560001'],
      subtitle: 'Karnataka, India',
      color: 'bg-amber-100 text-amber-700',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      details: ['Available in app', 'Web chat support'],
      subtitle: 'Instant response',
      color: 'bg-purple-100 text-purple-700',
    },
  ];

  const offices = [
    { city: 'Bengaluru', state: 'Karnataka', address: 'Tech Park, Electronic City', phone: '+91 80-4567-8901' },
    { city: 'New Delhi', state: 'Delhi NCR', address: 'Connaught Place', phone: '+91 11-2345-6789' },
    { city: 'Mumbai', state: 'Maharashtra', address: 'BKC Business District', phone: '+91 22-3456-7890' },
    { city: 'Hyderabad', state: 'Telangana', address: 'HITEC City', phone: '+91 40-5678-9012' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-beige-200">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-[#2E7D32] from-primary-800 to-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                We&apos;re Here to Help
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Have questions about KrishiSetu? Our team is ready to assist you with any inquiries,
                technical support, or partnership opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full">
                    <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <info.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600">{detail}</p>
                    ))}
                    <p className="text-xs text-gray-400 mt-2">{info.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-3xl shadow-lg p-8 h-full">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Send us a Message</h2>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                      <Button variant="outline" onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                           Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                           }
                           required
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                           />
                        </div>
                       </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                           <input
                             type="email"
                             placeholder="your@email.com"
                             value={formData.email}
                             onChange={(e) =>
                               setFormData({ ...formData, email: e.target.value })
                             }
                             required
                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                         <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) =>
                             setFormData({ ...formData, phone: e.target.value })
                            }
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">I am a</label>
                          <select
                            value={formData.userType}
                            onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          >
                            <option value="farmer">Farmer</option>
                            <option value="buyer">Buyer</option>
                            <option value="fpo">FPO Representative</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        >
                          <option value="">Select a topic</option>
                          <option value="technical">Technical Support</option>
                          <option value="contracts">Contract Questions</option>
                          <option value="account">Account Issues</option>
                          <option value="payments">Payment Help</option>
                          <option value="partnership">Partnership Inquiry</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                          rows={5}
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-full"
                        >
                        Send message
                       <Send className="w-5 h-5 ml-2" />
                     </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Support Hours */}
                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-gray-900">Support Hours</h3>
                      <p className="text-sm text-gray-500">We&apos;re available when you need us</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Monday - Saturday</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-900">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Emergency Support</span>
                      <span className="font-semibold text-green-600">24/7 Available</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Quick Help</h3>
                  <div className="space-y-3">
                    {[
                      { icon: FileText, label: 'FAQ - Frequently Asked Questions', href: '/faq' },
                      { icon: User, label: 'Farmer Registration Guide', href: '/farmer/register' },
                      { icon: Building2, label: 'Buyer Onboarding', href: '/buyer-onboarding' },
                      { icon: Globe, label: 'Platform Features', href: '/features' },
                    ].map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <link.icon className="w-5 h-5 text-primary-700" />
                        <span className="text-gray-700">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Language Support */}
                <div className="bg-gradient-to-br from-primary-50 to-green-300 border border-primary-100 rounded-3xl shadow-lg p-8">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Multilingual Support</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our support team speaks multiple languages to assist you better:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'हिन्दी', 'मराठी', 'বাংলা', 'ગુજરાતી', 'தமிழ்', 'తెలుగు', 'ਪੰਜਾਬੀ'].map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Regional Offices */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Regional Offices</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit us at any of our offices across India for in-person support
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-primary-700" />
                      <h3 className="font-display font-bold text-gray-900">{office.city}</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{office.state}</p>
                    <p className="text-sm text-gray-600 mb-2">{office.address}</p>
                    <p className="text-sm font-medium text-primary-700">{office.phone}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#2E7D32] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-lg text-primary-100 mb-8">
                Call our toll-free number for instant support. Available 24/7 for urgent matters.
              </p>
              <a href="tel:18001234567">
                <Button variant="secondary" size="lg">
                   <Phone className="w-5 h-5 mr-2" />
                   1800-123-4567 (Toll Free)
               </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}