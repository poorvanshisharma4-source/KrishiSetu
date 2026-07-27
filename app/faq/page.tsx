'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext'
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
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqCategories: FAQCategory[] = [
  {
    icon: Users,
    title: t("faq.category.farmers"),
    faqs: [
      { question: t("faq.farmer.q1"), answer: t("faq.farmer.a1") },
      { question: t("faq.farmer.q2"), answer: t("faq.farmer.a2") },
      { question: t("faq.farmer.q3"), answer: t("faq.farmer.a3") },
      { question: t("faq.farmer.q4"), answer: t("faq.farmer.a4") },
      { question: t("faq.farmer.q5"), answer: t("faq.farmer.a5") },
      { question: t("faq.farmer.q6"), answer: t("faq.farmer.a6") },
    ],
  },
  {
    icon: FileText,
    title: t("faq.category.buyers"),
    faqs: [
      { question: t("faq.buyer.q1"), answer: t("faq.buyer.a1") },
      { question: t("faq.buyer.q2"), answer: t("faq.buyer.a2") },
      { question: t("faq.buyer.q3"), answer: t("faq.buyer.a3") },
      { question: t("faq.buyer.q4"), answer: t("faq.buyer.a4") },
      { question: t("faq.buyer.q5"), answer: t("faq.buyer.a5") },
      { question: t("faq.buyer.q6"), answer: t("faq.buyer.a6") },
    ],
  },
  {
    icon: Shield,
    title: t("faq.category.trust"),
    faqs: [
      { question: t("faq.trust.q1"), answer: t("faq.trust.a1") },
      { question: t("faq.trust.q2"), answer: t("faq.trust.a2") },
      { question: t("faq.trust.q3"), answer: t("faq.trust.a3") },
      { question: t("faq.trust.q4"), answer: t("faq.trust.a4") },
      { question: t("faq.trust.q5"), answer: t("faq.trust.a5") },
    ],
  },
  {
    icon: Smartphone,
    title: t("faq.category.technical"),
    faqs: [
      { question: t("faq.tech.q1"), answer: t("faq.tech.a1") },
      { question: t("faq.tech.q2"), answer: t("faq.tech.a2") },
      { question: t("faq.tech.q3"), answer: t("faq.tech.a3") },
      { question: t("faq.tech.q4"), answer: t("faq.tech.a4") },
      { question: t("faq.tech.q5"), answer: t("faq.tech.a5") },
    ],
  },
  {
    icon: CreditCard,
    title: t("faq.category.financial"),
    faqs: [
      { question: t("faq.finance.q1"), answer: t("faq.finance.a1") },
      { question: t("faq.finance.q2"), answer: t("faq.finance.a2") },
      { question: t("faq.finance.q3"), answer: t("faq.finance.a3") },
      { question: t("faq.finance.q4"), answer: t("faq.finance.a4") },
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
                <span className="text-sm font-medium">{t("faq.badge")}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {t('faq.title')}
              </h1>
              <p className="text-xl text-green-100 mb-8">
                {t('faq.subtitle')}
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('faq.searchPlaceholder')}
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
                  {t("faq.searchResults")} {filteredFaqs.length} &ldquo;{searchQuery}&rdquo;
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
                {t("faq.stillQuestions")}
              </h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {t("faq.supportText")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact">
  <Button variant="default">
    <MessageSquare className="w-4 h-4 mr-2" />
    {t("faq.contactSupport")}
  </Button>
</Link>

<Link href="/farmer/register">
  <Button variant="outline">
    {t("faq.getStarted")}
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
}