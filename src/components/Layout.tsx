import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';
import Footer from './Footer';
import GoToTopButton from './GoToTopButton';
import Meta from './Meta';
import Navbar from './Navbar';

const Layout = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`mx-auto max-w-5xl px-8 selection:bg-rosewater-200 ${className}`}>
      <Meta />
      <Analytics />
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoToTopButton />
      </div>
    </div>
  );
};

export default Layout;
