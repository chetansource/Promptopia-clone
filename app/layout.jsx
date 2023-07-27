import '@styles/globals.css'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover and share AI prompts',
}

import Nav from '@components/Nav'
import Provider from '@components/Provider'
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
     <body>
       <div className="main">
         <div className="gradient"></div>
       </div>
       <main className="app">
         <Nav></Nav>
         { children }
       </main>
     </body>
    </html>
  )
}
