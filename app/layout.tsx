// import { Analytics } from '@vercel/analytics/next'
// import type { Metadata, Viewport } from 'next'
// import { Poppins, Inter } from 'next/font/google'
// import './globals.css'

// const poppins = Poppins({
//   variable: '--font-heading',
//   weight: ['500', '600', '700', '800'],
//   subsets: ['latin'],
// })
// const inter = Inter({
//   variable: '--font-sans',
//   subsets: ['latin'],
// })

// export const metadata: Metadata = {
//   title: 'KrishiSetu — Grow What Sells, Sell With Certainty',
//   description:
//     'An AI-powered demand-driven farming platform connecting farmers directly with buyers through transparent agreements, trust-based transactions, and demand-driven cultivation.',
//   generator: 'v0.app',
// }

// export const viewport: Viewport = {
//   colorScheme: 'light',
//   themeColor: '#2E7D32',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`light ${inter.variable} ${poppins.variable} bg-background`}
//     >
//       <body className="font-sans antialiased">
//         {children}
//         {process.env.NODE_ENV === 'production' && <Analytics />}
//       </body>
//     </html>
//   )
// }

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

// 1. Global Context Provider aur Wrapper ko Import kiya
import { AICopilotProvider } from '@/components/ai-copilot/AICopilotContext'
import GlobalCopilotWrapper from '@/components/ai-copilot/GlobalCopilotWrapper'

const poppins = Poppins({
  variable: '--font-heading',
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
})
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'KrishiSetu — Grow What Sells, Sell With Certainty',
  description:
    'An AI-powered demand-driven farming platform connecting farmers directly with buyers through transparent agreements, trust-based transactions, and demand-driven cultivation.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2E7D32',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {/* 2. Pure Application ko Provider se wrap kiya */}
        <AICopilotProvider>
          {children}
          
          {/* 3. Global Drawer Injection */}
          <GlobalCopilotWrapper />
        </AICopilotProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}