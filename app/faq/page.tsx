<<<<<<< HEAD
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Leaf,
  ChevronDown,
  Search,
  HelpCircle,
  Users,
  FileText,
  Shield,
  CreditCard,
  Smartphone,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import {Navbar} from '@/components/navbar';
import {Footer} from '@/components/footer';

import {Button} from '@/components/ui/button';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  icon: typeof Leaf;
  title: string;
  faqs: FAQItem[];
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqCategories: FAQCategory[] = [
    {
      icon: Users,
      title: 'For Farmers',
      faqs: [
        {
          question: 'How do I register as a farmer on KrishiSetu?',
          answer: 'Registration is simple and free. Click on "Farmer Register" on the homepage, fill in your basic details (name, location, phone number), verify your phone via OTP, and you\'re ready to start. The whole process takes less than 5 minutes.',
        },
        {
          question: 'What documents do I need to register?',
          answer: 'For basic registration, you only need a valid phone number. To unlock advanced features and participate in larger contracts, we recommend adding: Aadhaar card, land records or farm ownership proof, and bank account details for payments.',
        },
        {
          question: 'How does the contract farming process work?',
          answer: '1) Browse available buyer requirements or get AI-matched based on your crops. 2) Review contract terms (crop, quantity, price, delivery date). 3) Accept the contract. 4) Grow your crops with our AI guidance. 5) Deliver the produce and get paid automatically upon quality verification.',
        },
        {
          question: 'How do I receive payments?',
          answer: 'Payments are automatically credited to your linked bank account within 24-48 hours after successful delivery and quality verification. We support all major Indian banks. You can track payment status in real-time through the app.',
        },
        {
          question: 'What if the buyer cancels the contract?',
          answer: 'All contracts on KrishiSetu come with built-in safeguards. If a buyer cancels without valid reason, they must pay a cancellation fee that is transferred to you as compensation. This is enforced through our smart contract system.',
        },
        {
          question: 'How does the AI crop recommendation work?',
          answer: 'Our AI analyzes multiple factors: your soil type, local climate patterns, historical market prices, current demand trends, and seasonal forecasts. It then suggests crops that will give you the best returns with minimal risk.',
        },
      ],
    },
    {
      icon: FileText,
      title: 'For Buyers',
      faqs: [
        {
          question: 'How do I post a requirement?',
          answer: 'After logging in as a buyer, go to "Post Requirement" and fill in: crop name, quality specifications, quantity needed, price range, delivery date, and location. Your requirement will be visible to verified farmers who can apply.',
        },
        {
          question: 'What are the platform fees for buyers?',
          answer: 'KrishiSetu charges a small transaction fee of 2% on successful contracts. There are no upfront fees, no subscription charges, and no hidden costs. You only pay when you successfully source produce.',
        },
        {
          question: 'How do I ensure quality of the produce?',
          answer: 'You can specify quality parameters in your contract (grade, size, organic certification, etc.). Our QC partners verify produce before delivery. You also have the option for third-party lab testing at nominal charges.',
        },
        {
          question: 'Can I inspect the farm before finalizing?',
          answer: 'Yes! You can request a virtual or physical farm visit through the platform. Many buyers use this to verify farming practices, organic certifications, and build relationships with farmers.',
        },
        {
          question: 'What payment methods are supported?',
          answer: 'We support all major payment methods: UPI, bank transfer (NEFT/RTGS), credit/debit cards, and trade credit for verified businesses. Payments are held in escrow until delivery is confirmed.',
        },
        {
          question: 'Can I source from multiple farmers?',
          answer: 'Absolutely. You can create bulk requirements that multiple farmers can fulfill, or award contracts to several farmers simultaneously. Our AI helps you split orders optimally based on farmer locations and capacities.',
        },
      ],
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      faqs: [
        {
          question: 'How are farmers and buyers verified?',
          answer: 'We follow a multi-tier verification: Phone verification (OTP), Aadhaar verification, Bank account verification, Document verification (land records for farmers, GST for businesses). Verified users get trust badges visible to all.',
        },
        {
          question: 'How does the trust badge system work?',
          answer: 'Users earn badges based on successful transactions: Bronze (5+), Silver (20+), Gold (50+), Platinum (100+). Each badge signals reliability, helping you choose trustworthy partners.',
        },
        {
          question: 'What if there\'s a dispute with the other party?',
          answer: 'KrishiSetu has a built-in dispute resolution mechanism: 1) Direct chat to resolve amicably. 2) Mediation by our support team. 3) Third-party arbitration. Most disputes are resolved within 7 days.',
        },
        {
          question: 'Is my data secure on KrishiSetu?',
          answer: 'Yes. We use bank-grade encryption (AES-256) for all data. Your personal information is never shared without consent. We comply with Indian data protection laws and international security standards.',
        },
        {
          question: 'How does the smart contract system work?',
          answer: 'Our blockchain-backed smart contracts automatically enforce terms: payment schedules, quality parameters, delivery deadlines. Once both parties agree, terms are locked and executed automatically.',
        },
      ],
    },
    {
      icon: Smartphone,
      title: 'Technical & App',
      faqs: [
        {
          question: 'Which languages does KrishiSetu support?',
          answer: 'We support 8 Indian languages: English, Hindi, Marathi, Bengali, Gujarati, Tamil, Telugu, and Punjabi. You can switch languages anytime from the app settings.',
        },
        {
          question: 'Is there a mobile app?',
          answer: 'Yes! KrishiSetu is available on both Android and iOS. Download from Play Store or App Store. farmers can also use the web version on any device.',
        },
        {
          question: 'Do I need internet to use KrishiSetu?',
          answer: 'You need internet for real-time features like messaging, contract updates, and AI recommendations. However, you can view your contracts and basic dashboard offline.',
        },
        {
          question: 'What devices are supported?',
          answer: 'KrishiSetu works on all devices: smartphones (Android/iOS), tablets, laptops, and desktop computers. The interface automatically adapts to your screen size.',
        },
        {
          question: 'How do I reset my password?',
          answer: 'Click "Forgot Password" on the login page. Enter your registered phone number, receive an OTP, and set a new password. You can also reset from within the app in Settings.',
        },
      ],
    },
    {
      icon: CreditCard,
      title: 'Financial Support',
      faqs: [
        {
          question: 'Does KrishiSetu offer crop insurance?',
          answer: 'We partner with leading insurance providers to offer crop insurance at competitive rates. You can purchase insurance directly through the app when signing contracts. Premiums start at just 2% of contract value.',
        },
        {
          question: 'Can I get a loan through KrishiSetu?',
          answer: 'Yes. We\'ve partnered with agricultural banks and NBFCs to offer farm loans at preferential rates. Having active contracts improves your loan eligibility. Apply through the Financial Support section.',
        },
        {
          question: 'How do government schemes work with KrishiSetu?',
          answer: 'We help you auto-enroll in applicable schemes like PM-KISAN, crop subsidies, and farmer welfare programs. Just link your Aadhaar and we\'ll identify schemes you qualify for.',
        },
        {
          question: 'Are there any hidden charges?',
          answer: 'No hidden charges. For farmers: platform is 100% free. For buyers: only 2% transaction fee on successful contracts. All fees are clearly shown before you confirm any action.',
        },
      ],
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allFaqs = faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({ ...faq, category: cat.title }))
  );

  const filteredFaqs = searchQuery
    ? allFaqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <div className="min-h-screen bg-beige-200">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-[#2F8F3A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green700/40 rounded-full mb-6">
                <HelpCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Help Center</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Find answers to common questions about KrishiSetu
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredFaqs ? (
              // Search Results
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8"
              >
                <p className="text-gray-600 mb-4">
                  Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
                </p>
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index}>
                      <div className="text-sm text-primary-600 font-medium mb-2">{faq.category}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              // Category-wise FAQs
              faqCategories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#B8E6B8] rounded-full flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {category.faqs.map((faq, faqIndex) => {
                      const itemId = `${catIndex}-${faqIndex}`;
                      const isOpen = openItems.includes(itemId);

                      return (
                        <div
                          key={faqIndex}
                          className="bg-white rounded-xl shadow-sm overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="px-4 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-primary-700 mx-auto mb-4" />
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact">
  <Button variant="default">
    <MessageSquare className="w-4 h-4 mr-2" />
    Contact Support
  </Button>
</Link>

<Link href="/farmer/register">
  <Button variant="outline">
    Get Started
    <ArrowRight className="w-4 h-4 ml-2" />
  </Button>
</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
=======
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Leaf,
  ChevronDown,
  Search,
  HelpCircle,
  Users,
  FileText,
  Shield,
  CreditCard,
  Smartphone,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import {Navbar} from '@/components/navbar';
import {Footer} from '@/components/footer';

import {Button} from '@/components/ui/button';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  icon: typeof Leaf;
  title: string;
  faqs: FAQItem[];
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqCategories: FAQCategory[] = [
    {
      icon: Users,
      title: 'For Farmers',
      faqs: [
        {
          question: 'How do I register as a farmer on KrishiSetu?',
          answer: 'Registration is simple and free. Click on "Farmer Register" on the homepage, fill in your basic details (name, location, phone number), verify your phone via OTP, and you\'re ready to start. The whole process takes less than 5 minutes.',
        },
        {
          question: 'What documents do I need to register?',
          answer: 'For basic registration, you only need a valid phone number. To unlock advanced features and participate in larger contracts, we recommend adding: Aadhaar card, land records or farm ownership proof, and bank account details for payments.',
        },
        {
          question: 'How does the contract farming process work?',
          answer: '1) Browse available buyer requirements or get AI-matched based on your crops. 2) Review contract terms (crop, quantity, price, delivery date). 3) Accept the contract. 4) Grow your crops with our AI guidance. 5) Deliver the produce and get paid automatically upon quality verification.',
        },
        {
          question: 'How do I receive payments?',
          answer: 'Payments are automatically credited to your linked bank account within 24-48 hours after successful delivery and quality verification. We support all major Indian banks. You can track payment status in real-time through the app.',
        },
        {
          question: 'What if the buyer cancels the contract?',
          answer: 'All contracts on KrishiSetu come with built-in safeguards. If a buyer cancels without valid reason, they must pay a cancellation fee that is transferred to you as compensation. This is enforced through our smart contract system.',
        },
        {
          question: 'How does the AI crop recommendation work?',
          answer: 'Our AI analyzes multiple factors: your soil type, local climate patterns, historical market prices, current demand trends, and seasonal forecasts. It then suggests crops that will give you the best returns with minimal risk.',
        },
      ],
    },
    {
      icon: FileText,
      title: 'For Buyers',
      faqs: [
        {
          question: 'How do I post a requirement?',
          answer: 'After logging in as a buyer, go to "Post Requirement" and fill in: crop name, quality specifications, quantity needed, price range, delivery date, and location. Your requirement will be visible to verified farmers who can apply.',
        },
        {
          question: 'What are the platform fees for buyers?',
          answer: 'KrishiSetu charges a small transaction fee of 2% on successful contracts. There are no upfront fees, no subscription charges, and no hidden costs. You only pay when you successfully source produce.',
        },
        {
          question: 'How do I ensure quality of the produce?',
          answer: 'You can specify quality parameters in your contract (grade, size, organic certification, etc.). Our QC partners verify produce before delivery. You also have the option for third-party lab testing at nominal charges.',
        },
        {
          question: 'Can I inspect the farm before finalizing?',
          answer: 'Yes! You can request a virtual or physical farm visit through the platform. Many buyers use this to verify farming practices, organic certifications, and build relationships with farmers.',
        },
        {
          question: 'What payment methods are supported?',
          answer: 'We support all major payment methods: UPI, bank transfer (NEFT/RTGS), credit/debit cards, and trade credit for verified businesses. Payments are held in escrow until delivery is confirmed.',
        },
        {
          question: 'Can I source from multiple farmers?',
          answer: 'Absolutely. You can create bulk requirements that multiple farmers can fulfill, or award contracts to several farmers simultaneously. Our AI helps you split orders optimally based on farmer locations and capacities.',
        },
      ],
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      faqs: [
        {
          question: 'How are farmers and buyers verified?',
          answer: 'We follow a multi-tier verification: Phone verification (OTP), Aadhaar verification, Bank account verification, Document verification (land records for farmers, GST for businesses). Verified users get trust badges visible to all.',
        },
        {
          question: 'How does the trust badge system work?',
          answer: 'Users earn badges based on successful transactions: Bronze (5+), Silver (20+), Gold (50+), Platinum (100+). Each badge signals reliability, helping you choose trustworthy partners.',
        },
        {
          question: 'What if there\'s a dispute with the other party?',
          answer: 'KrishiSetu has a built-in dispute resolution mechanism: 1) Direct chat to resolve amicably. 2) Mediation by our support team. 3) Third-party arbitration. Most disputes are resolved within 7 days.',
        },
        {
          question: 'Is my data secure on KrishiSetu?',
          answer: 'Yes. We use bank-grade encryption (AES-256) for all data. Your personal information is never shared without consent. We comply with Indian data protection laws and international security standards.',
        },
        {
          question: 'How does the smart contract system work?',
          answer: 'Our blockchain-backed smart contracts automatically enforce terms: payment schedules, quality parameters, delivery deadlines. Once both parties agree, terms are locked and executed automatically.',
        },
      ],
    },
    {
      icon: Smartphone,
      title: 'Technical & App',
      faqs: [
        {
          question: 'Which languages does KrishiSetu support?',
          answer: 'We support 8 Indian languages: English, Hindi, Marathi, Bengali, Gujarati, Tamil, Telugu, and Punjabi. You can switch languages anytime from the app settings.',
        },
        {
          question: 'Is there a mobile app?',
          answer: 'Yes! KrishiSetu is available on both Android and iOS. Download from Play Store or App Store. farmers can also use the web version on any device.',
        },
        {
          question: 'Do I need internet to use KrishiSetu?',
          answer: 'You need internet for real-time features like messaging, contract updates, and AI recommendations. However, you can view your contracts and basic dashboard offline.',
        },
        {
          question: 'What devices are supported?',
          answer: 'KrishiSetu works on all devices: smartphones (Android/iOS), tablets, laptops, and desktop computers. The interface automatically adapts to your screen size.',
        },
        {
          question: 'How do I reset my password?',
          answer: 'Click "Forgot Password" on the login page. Enter your registered phone number, receive an OTP, and set a new password. You can also reset from within the app in Settings.',
        },
      ],
    },
    {
      icon: CreditCard,
      title: 'Financial Support',
      faqs: [
        {
          question: 'Does KrishiSetu offer crop insurance?',
          answer: 'We partner with leading insurance providers to offer crop insurance at competitive rates. You can purchase insurance directly through the app when signing contracts. Premiums start at just 2% of contract value.',
        },
        {
          question: 'Can I get a loan through KrishiSetu?',
          answer: 'Yes. We\'ve partnered with agricultural banks and NBFCs to offer farm loans at preferential rates. Having active contracts improves your loan eligibility. Apply through the Financial Support section.',
        },
        {
          question: 'How do government schemes work with KrishiSetu?',
          answer: 'We help you auto-enroll in applicable schemes like PM-KISAN, crop subsidies, and farmer welfare programs. Just link your Aadhaar and we\'ll identify schemes you qualify for.',
        },
        {
          question: 'Are there any hidden charges?',
          answer: 'No hidden charges. For farmers: platform is 100% free. For buyers: only 2% transaction fee on successful contracts. All fees are clearly shown before you confirm any action.',
        },
      ],
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allFaqs = faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({ ...faq, category: cat.title }))
  );

  const filteredFaqs = searchQuery
    ? allFaqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <div className="min-h-screen bg-beige-200">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-[#2F8F3A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green700/40 rounded-full mb-6">
                <HelpCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Help Center</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Find answers to common questions about KrishiSetu
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredFaqs ? (
              // Search Results
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8"
              >
                <p className="text-gray-600 mb-4">
                  Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
                </p>
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index}>
                      <div className="text-sm text-primary-600 font-medium mb-2">{faq.category}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              // Category-wise FAQs
              faqCategories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#B8E6B8] rounded-full flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {category.faqs.map((faq, faqIndex) => {
                      const itemId = `${catIndex}-${faqIndex}`;
                      const isOpen = openItems.includes(itemId);

                      return (
                        <div
                          key={faqIndex}
                          className="bg-white rounded-xl shadow-sm overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="px-4 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-primary-700 mx-auto mb-4" />
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact">
  <Button variant="default">
    <MessageSquare className="w-4 h-4 mr-2" />
    Contact Support
  </Button>
</Link>

<Link href="/farmer/register">
  <Button variant="outline">
    Get Started
    <ArrowRight className="w-4 h-4 ml-2" />
  </Button>
</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
>>>>>>> 8d282be6528be5fa383e82fa7a58c9ffcd476c18
}