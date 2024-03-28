import { Comic_Neue } from 'next/font/google'
import './globals.css'
const ComicNeue = Comic_Neue({
  subsets: ['latin'],
  weight: '300'
})

export default function RootLayout({children, params: {locale}} : {children : React.ReactNode; params : {locale : any}}) {
  return (
    <html lang={locale}>
      <body className={`${ComicNeue.className} lg:max-w-5xl flex justify-center items-center mx-auto bg-black text-white`}>
        
        {children}


      
      </body>
    </html>
  )
}
