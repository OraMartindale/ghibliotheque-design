import './globals.css'

export const metadata = {
  title: 'Ghibliotheque - Nausicaä',
  description: 'Nausicaä of the Valley of the Wind (1984)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
