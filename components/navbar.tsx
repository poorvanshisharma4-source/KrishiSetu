// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Sprout, Globe, Menu, X, ChevronDown } from 'lucide-react'
// import { Button } from '@/components/ui/button'

// const navLinks = [
//   { label: 'Home', href: '/' },
//   { label: 'About', href: '/about' },
//   { label: 'Features', href: '/features' },
//  { label: 'Dashboard', href: '/dashboard' },
//   { label: 'FAQ', href: '/faq' },
//   { label: 'Contact', href: '/contact' },
// ]

// const languages = ['English', 'हिन्दी', 'मराठी', 'বাংলা', 'தமிழ்', 'తెలుగు']

// export function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [langOpen, setLangOpen] = useState(false)
//   const [loginOpen, setLoginOpen] = useState(false)
//   const [activeLang, setActiveLang] = useState('English')

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
//       <nav
//         className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
//         aria-label="Main navigation"
//       >
//         <Link href="/" className="flex items-center gap-2">
//           <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
//             <Sprout className="h-5 w-5" />
//           </span>
//           <span className="font-heading text-xl font-bold text-foreground">
//             Krishi<span className="text-primary">Setu</span>
//           </span>
//         </Link>

//         <ul className="hidden items-center gap-1 lg:flex">
//           {navLinks.map((link) => (
//             <li key={link.label}>
//               <Link
//                 href={link.href}
//                 className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary"
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center gap-2">
//           <div className="relative hidden sm:block">
//             <button
//               onClick={() => {
//                 setLangOpen((v) => !v)
//                 setLoginOpen(false)
//               }}
//               className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary"
//               aria-haspopup="listbox"
//               aria-expanded={langOpen}
//             >
//               <Globe className="h-4 w-4 text-primary" />
//               {activeLang}
//               <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
//             </button>
//             {langOpen && (
//               <ul
//                 className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-card py-1 shadow-lg"
//                 role="listbox"
//               >
//                 {languages.map((lang) => (
//                   <li key={lang}>
//                     <button
//                       onClick={() => {
//                         setActiveLang(lang)
//                         setLangOpen(false)
//                       }}
//                       className="block w-full px-4 py-2 text-left text-sm text-foreground transition-colors hover:bg-secondary/40"
//                       role="option"
//                       aria-selected={activeLang === lang}
//                     >
//                       {lang}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <div className="relative hidden md:block">
//             <Button
//               onClick={() => {
//                 setLoginOpen((v) => !v)
//                 setLangOpen(false)
//               }}
//               className="bg-primary text-primary-foreground hover:bg-primary/90"
//             >
//               Login
//               <ChevronDown className="ml-1 h-3.5 w-3.5" />
//             </Button>
//             {loginOpen && (
//               <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-lg border border-border bg-card py-1 shadow-lg">
//                 <Link
//                   href="/farmer/login"
//                   onClick={() => setLoginOpen(false)}
//                   className="block px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40"
//                 >
//                   Farmer Login
//                 </Link>
//                 <Link
//                   href="/buyer/login"
//                   onClick={() => setLoginOpen(false)}
//                   className="block px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40"
//                 >
//                   Buyer Login
//                 </Link>
//                 <div className="my-1 border-t border-border" />
                
//                 {/* 🚜 Redirects directly to the consolidated authentication view */}
//                 <Link
//                   href="/farmer/login"
//                   onClick={() => setLoginOpen(false)}
//                   className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary"
//                 >
//                   Register as Farmer
//                 </Link>
                
//                 {/* 💼 Redirects corporate buyers safely to their target credentials panel */}
//                 <Link
//                   href="/buyer/login"
//                   onClick={() => setLoginOpen(false)}
//                   className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary"
//                 >
//                   Register as Buyer
//                 </Link>
//               </div>
//             )}
//           </div>

//           <button
//             className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
//             onClick={() => setMobileOpen((v) => !v)}
//             aria-label="Toggle menu"
//             aria-expanded={mobileOpen}
//           >
//             {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </nav>

//       {mobileOpen && (
//         <div className="border-t border-border bg-background lg:hidden">
//           <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4">
//             {navLinks.map((link) => (
//               <li key={link.label}>
//                 <Link
//                   href={link.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="block rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-secondary/40 hover:text-primary"
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//             <li className="grid grid-cols-2 gap-2 pt-2">
//               <Button  variant="outline" className="w-full border-primary text-primary">
//                 <Link href="/farmer/login" onClick={() => setMobileOpen(false)}>
//                   Farmer Login
//                 </Link>
//               </Button>
//               <Button  className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
//                 <Link href="/buyer/login" onClick={() => setMobileOpen(false)}>
//                   Buyer Login
//                 </Link>
//               </Button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   )
// }
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sprout, Globe, Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AICopilotToggle } from '@/components/ai-copilot/AICopilotToggle'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const languages = ['English', 'हिन्दी', 'मराठी', 'বাংলা', 'தமிழ்', 'తెలుగు']

// Page.tsx se action receive karne ke liye prop types define kiya
interface NavbarProps {
  onCopilotClick: () => void;
}

export function Navbar({ onCopilotClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [activeLang, setActiveLang] = useState('English')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Sprout className="h-5 w-5" />
          </span>
          <span className="font-heading text-xl font-bold text-foreground">
            Krishi<span className="text-primary">Setu</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4"> {/* Gap ko badha kar 4 kiya taaki toggle clean dikhe */}
          
          {/* ✨ AI Copilot Button - English Option ke exact left side me placement */}
          <div className="hidden sm:block">
            <AICopilotToggle onClick={onCopilotClick} />
          </div>

          <div className="relative hidden sm:block">
            <button
              onClick={() => {
                setLangOpen((v) => !v)
                setLoginOpen(false)
              }}
              className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <Globe className="h-4 w-4 text-primary" />
              {activeLang}
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
            {langOpen && (
              <ul
                className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-card py-1 shadow-lg"
                role="listbox"
              >
                {languages.map((lang) => (
                  <li key={lang}>
                    <button
                      onClick={() => {
                        setActiveLang(lang)
                        setLangOpen(false)
                      }}
                      className="block w-full px-4 py-2 text-left text-sm text-foreground transition-colors hover:bg-secondary/40"
                      role="option"
                      aria-selected={activeLang === lang}
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative hidden md:block">
            <Button
              onClick={() => {
                setLoginOpen((v) => !v)
                setLangOpen(false)
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Login
              <ChevronDown className="ml-1 h-3.5 w-3.5" />
            </Button>
            {loginOpen && (
              <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-lg border border-border bg-card py-1 shadow-lg">
                <Link
                  href="/farmer/login"
                  onClick={() => setLoginOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40"
                >
                  Farmer Login
                </Link>
                <Link
                  href="/buyer/login"
                  onClick={() => setLoginOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40"
                >
                  Buyer Login
                </Link>
                <div className="my-1 border-t border-border" />
                
                <Link
                  href="/farmer/login"
                  onClick={() => setLoginOpen(false)}
                  className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary"
                >
                  Register as Farmer
                </Link>
                
                <Link
                  href="/buyer/login"
                  onClick={() => setLoginOpen(false)}
                  className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-primary"
                >
                  Register as Buyer
                </Link>
              </div>
            )}
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-secondary/40 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="grid grid-cols-2 gap-2 pt-2">
              <Button  variant="outline" className="w-full border-primary text-primary">
                <Link href="/farmer/login" onClick={() => setMobileOpen(false)}>
                  Farmer Login
                </Link>
              </Button>
              <Button  className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/buyer/login" onClick={() => setMobileOpen(false)}>
                  Buyer Login
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}