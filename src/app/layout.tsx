import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import { Navbar } from "@/components/Navbar";
import { Footer } from '@/components/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <Navbar />
          
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
