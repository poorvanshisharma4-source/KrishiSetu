
// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import { Sprout, Globe, Menu, X, ChevronDown, Search, Bell, Plus, MessageSquare } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { AICopilotToggle } from '@/components/ai-copilot/AICopilotToggle'
// import { useAICopilot } from '@/components/ai-copilot/AICopilotContext'

// const navLinks = [
//   { label: 'Home', href: '/' },
//   { label: 'About', href: '/about' },
//   { label: 'Features', href: '/features' },
//   { label: 'Dashboard', href: '/dashboard' },
//   { label: 'FAQ', href: '/faq' },
//   { label: 'Contact', href: '/contact' },
// ]

// const languages = ['English', 'हिन्दी', 'मराठी', 'বাংলা', 'தமிழ்', 'తెలుగు']

// export function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [langOpen, setLangOpen] = useState(false)
//   const [loginOpen, setLoginOpen] = useState(false)
//   const [activeLang, setActiveLang] = useState('English')
//   const [searchQuery, setSearchQuery] = useState('')

//   const { openCopilot } = useAICopilot()
//   const pathname = usePathname()

//   // Auth pages check
//   const isBuyerAuth = pathname === '/buyer/login' || pathname === '/buyer/signup'
//   const isFarmerAuth = pathname === '/farmer/login' || pathname === '/farmer/signup'

//   // Dashboard areas dynamic checks
//   const isBuyerDashboard = pathname?.startsWith('/buyer/') && !isBuyerAuth
//   const isFarmerDashboard = pathname?.startsWith('/farmer/') && !isFarmerAuth

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        
//         {/* LOGO */}
//         <Link href="/" className="flex items-center gap-2 flex-shrink-0">
//           <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
//             <Sprout className="h-5 w-5" />
//           </span>
//           <span className="font-heading text-xl font-bold text-foreground">
//             Krishi<span className="text-primary">Setu</span>
//           </span>
//         </Link>

//         {/* ---------------- HARDCORE CASE 1: BUYER DASHBOARD NAVBAR ---------------- */}
//         {isBuyerDashboard && (
//           <>
//             <div className="hidden md:flex flex-1 max-w-md mx-8">
//               <div className="relative w-full">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search farmers, crops, contracts..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none text-sm text-black"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <Link href="/buyer/post-requirement">
//                 <Button variant="default" size="sm" className="bg-amber-600 hover:bg-amber-700 h-9 rounded-xl font-bold">
//                   <Plus className="w-4 h-4 mr-1.5" /> Post Requirement
//                 </Button>
//               </Link>
              
//               {/* Buyer Messages link */}
//               <Link href="/buyer/messages" title="Messages">
//                 <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                   <MessageSquare className="w-5 h-5" />
//                 </button>
//               </Link>

//               {/* AUTOMATIC BUYER NOTIFICATIONS */}
//               <Link href="/buyer/notifications" title="Notifications">
//                 <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                   <Bell className="w-5 h-5" />
//                   <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
//                 </button>
//               </Link>

//               <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
//                 <Image src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Buyer" width={36} height={36} className="rounded-full object-cover border-2 border-amber-200" />
//                 <div className="hidden md:block">
//                   <div className="text-sm font-semibold text-gray-900 leading-none">FreshMart Pvt Ltd</div>
//                   <div className="text-[11px] text-gray-500 font-medium mt-0.5">Verified Buyer</div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}

//         {/* ---------------- HARDCORE CASE 2: FARMER DASHBOARD NAVBAR ---------------- */}
//         {isFarmerDashboard && (
//           <>
//             <div className="hidden md:flex flex-1 max-w-md mx-8">
//               <div className="relative w-full">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search marketplace, buyers..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none text-sm text-black"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               {/* Farmer Messages Link */}
//               <Link href="/farmer/messages" title="Messages">
//                 <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                   <MessageSquare className="w-5 h-5" />
//                 </button>
//               </Link>

//               {/* AUTOMATIC FARMER NOTIFICATIONS */}
//               <Link href="/farmer/notifications" title="Notifications">
//                 <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                   <Bell className="w-5 h-5" />
//                   <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full" />
//                 </button>
//               </Link>

//               <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
//                 <Image src="https://images.pexels.com/photos/235721/pexels-photo-235721.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Farmer" width={36} height={36} className="rounded-full object-cover border-2 border-emerald-200" />
//                 <div className="hidden md:block">
//                   <div className="text-sm font-semibold text-gray-900 leading-none">Ramesh Kumar</div>
//                   <div className="text-[11px] text-gray-500 font-medium mt-0.5">Kisan Member</div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}

//         {/* ---------------- HARDCORE CASE 3: PUBLIC PAGES / LANDING PAGES ---------------- */}
//         {!isBuyerDashboard && !isFarmerDashboard && (
//           <>
//             <ul className="hidden items-center gap-1 lg:flex">
//               {navLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link href={link.href} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary">
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             <div className="flex items-center gap-4">
//               <div className="hidden sm:block">
//                 <AICopilotToggle onClick={openCopilot} />
//               </div>

//               {/* Lang Selector */}
//               <div className="relative hidden sm:block">
//                 <button onClick={() => { setLangOpen((v) => !v); setLoginOpen(false); }} className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary">
//                   <Globe className="h-4 w-4 text-primary" /> {activeLang} <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
//                 </button>
//                 {langOpen && (
//                   <ul className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-card py-1 shadow-lg z-50">
//                     {languages.map((lang) => (
//                       <li key={lang}>
//                         <button onClick={() => { setActiveLang(lang); setLangOpen(false); }} className="block w-full px-4 py-2 text-left text-sm text-foreground transition-colors hover:bg-secondary/40">
//                           {lang}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>

//               {/* Login Modal Triggers */}
//               <div className="relative hidden md:block">
//                 <Button onClick={() => { setLoginOpen((v) => !v); setLangOpen(false); }} className="bg-primary text-primary-foreground hover:bg-primary/90">
//                   Login <ChevronDown className="ml-1 h-3.5 w-3.5" />
//                 </Button>
//                 {loginOpen && (
//                   <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-lg border border-border bg-card py-1 shadow-lg z-50">
//                     <Link href="/farmer/login" onClick={() => setLoginOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40">Farmer Login</Link>
//                     <Link href="/buyer/login" onClick={() => setLoginOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40">Buyer Login</Link>
//                     <div className="my-1 border-t border-border" />
//                     <Link href="/farmer/login" onClick={() => setLoginOpen(false)} className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary">Register as Farmer</Link>
//                     <Link href="/buyer/login" onClick={() => setLoginOpen(false)} className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary">Register as Buyer</Link>
//                   </div>
//                 )}
//               </div>

//               <button className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden" onClick={() => setMobileOpen((v) => !v)}>
//                 {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </>
//         )}
//       </nav>
//     </header>
//   )
// }

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Sprout, Globe, Menu, X, ChevronDown, Search, Bell, Plus, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AICopilotToggle } from '@/components/ai-copilot/AICopilotToggle'
import { useAICopilot } from '@/components/ai-copilot/AICopilotContext'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const languages = ['English', 'हिन्दी', 'मराठी', 'বাংলা', 'தமிழ்', 'తెలుగు']

// 🛠️ FIX: Added NavbarProps Interface to resolve TS2322 Error
interface NavbarProps {
  onCopilotClick?: () => void
}

export function Navbar({ onCopilotClick }: NavbarProps = {}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [activeLang, setActiveLang] = useState('English')
  const [searchQuery, setSearchQuery] = useState('')

  const { openCopilot } = useAICopilot()
  const pathname = usePathname()

  // Auth pages check
  const isBuyerAuth = pathname === '/buyer/login' || pathname === '/buyer/signup'
  const isFarmerAuth = pathname === '/farmer/login' || pathname === '/farmer/signup'

  // Dashboard areas dynamic checks
  const isBuyerDashboard = pathname?.startsWith('/buyer/') && !isBuyerAuth
  const isFarmerDashboard = pathname?.startsWith('/farmer/') && !isFarmerAuth

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Sprout className="h-5 w-5" />
          </span>
          <span className="font-heading text-xl font-bold text-foreground">
            Krishi<span className="text-primary">Setu</span>
          </span>
        </Link>

        {/* ---------------- HARDCORE CASE 1: BUYER DASHBOARD NAVBAR ---------------- */}
        {isBuyerDashboard && (
          <>
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search farmers, crops, contracts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none text-sm text-black"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/buyer/post-requirement">
                <Button variant="default" size="sm" className="bg-amber-600 hover:bg-amber-700 h-9 rounded-xl font-bold">
                  <Plus className="w-4 h-4 mr-1.5" /> Post Requirement
                </Button>
              </Link>
              
              {/* Buyer Messages link */}
              <Link href="/buyer/messages" title="Messages">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </Link>

              {/* AUTOMATIC BUYER NOTIFICATIONS */}
              <Link href="/buyer/notifications" title="Notifications">
                <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>
              </Link>

              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <Image src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Buyer" width={36} height={36} className="rounded-full object-cover border-2 border-amber-200" />
                <div className="hidden md:block">
                  <div className="text-sm font-semibold text-gray-900 leading-none">FreshMart Pvt Ltd</div>
                  <div className="text-[11px] text-gray-500 font-medium mt-0.5">Verified Buyer</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ---------------- HARDCORE CASE 2: FARMER DASHBOARD NAVBAR ---------------- */}
        {isFarmerDashboard && (
          <>
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search marketplace, buyers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none text-sm text-black"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Farmer Messages Link */}
              <Link href="/farmer/messages" title="Messages">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </Link>

              {/* AUTOMATIC FARMER NOTIFICATIONS */}
              <Link href="/farmer/notifications" title="Notifications">
                <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full" />
                </button>
              </Link>

              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <Image src="https://images.pexels.com/photos/235721/pexels-photo-235721.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Farmer" width={36} height={36} className="rounded-full object-cover border-2 border-emerald-200" />
                <div className="hidden md:block">
                  <div className="text-sm font-semibold text-gray-900 leading-none">Ramesh Kumar</div>
                  <div className="text-[11px] text-gray-500 font-medium mt-0.5">Kisan Member</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ---------------- HARDCORE CASE 3: PUBLIC PAGES / LANDING PAGES ---------------- */}
        {!isBuyerDashboard && !isFarmerDashboard && (
          <>
            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                {/* Fallback support for passed onCopilotClick prop OR context openCopilot */}
                <AICopilotToggle onClick={onCopilotClick || openCopilot} />
              </div>

              {/* Lang Selector */}
              <div className="relative hidden sm:block">
                <button onClick={() => { setLangOpen((v) => !v); setLoginOpen(false); }} className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary">
                  <Globe className="h-4 w-4 text-primary" /> {activeLang} <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
                {langOpen && (
                  <ul className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-card py-1 shadow-lg z-50">
                    {languages.map((lang) => (
                      <li key={lang}>
                        <button onClick={() => { setActiveLang(lang); setLangOpen(false); }} className="block w-full px-4 py-2 text-left text-sm text-foreground transition-colors hover:bg-secondary/40">
                          {lang}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Login Modal Triggers */}
              <div className="relative hidden md:block">
                <Button onClick={() => { setLoginOpen((v) => !v); setLangOpen(false); }} className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Login <ChevronDown className="ml-1 h-3.5 w-3.5" />
                </Button>
                {loginOpen && (
                  <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-lg border border-border bg-card py-1 shadow-lg z-50">
                    <Link href="/farmer/login" onClick={() => setLoginOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40">Farmer Login</Link>
                    <Link href="/buyer/login" onClick={() => setLoginOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40">Buyer Login</Link>
                    <div className="my-1 border-t border-border" />
                    <Link href="/farmer/login" onClick={() => setLoginOpen(false)} className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary">Register as Farmer</Link>
                    <Link href="/buyer/login" onClick={() => setLoginOpen(false)} className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary">Register as Buyer</Link>
                  </div>
                )}
              </div>

              <button className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden" onClick={() => setMobileOpen((v) => !v)}>
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}