import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Ganz Natürlich — A little German, every day',description:'Less studying. More speaking German. Your calm, personal German learning companion.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
