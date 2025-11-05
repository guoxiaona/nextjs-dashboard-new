import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
  weight: ['400', '700'], // 同时加载普通和粗体
  subsets: ['latin'],
  display: 'swap'
});