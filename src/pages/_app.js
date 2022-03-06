import '../styles/tailwind.css'
import { SessionProvider } from 'next-auth/react'
import GoogleAnalytics from '@bradgarropy/next-google-analytics'

function Backpackers ({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <GoogleAnalytics
        measurementId={process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}
      />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default Backpackers
