import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Protea — Seu copiloto entre uma consulta e outra',
  description: 'Acompanhamento proativo para seu tratamento com canetas emagrecedoras.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html> }
