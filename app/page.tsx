import type { Metadata } from 'next';
import Home from './Home';

export const metadata: Metadata = {
  title: '基督教芥菜種子堂',
  description: '基督教芥菜種子堂 – 聽神的道、領受神的道、傳講神的道',
};

export default function Page() {
  return <Home />;
}
