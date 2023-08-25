import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Poppins } from 'next/font/google'


export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins'
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} className={`${poppins.variable}`} />;
};

export default MyApp;
