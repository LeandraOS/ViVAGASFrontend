/* eslint-disable react/react-in-jsx-scope */
// @use-client

export const metadata = {
  title: 'ViVAGAS',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
