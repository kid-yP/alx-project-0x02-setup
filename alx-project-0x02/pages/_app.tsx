import "@/styles/globals.css";
// pages/_app.tsx
import type { AppProps } from 'next/app';
import Header from '../components/layout/Header'; // adjust path if needed

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
