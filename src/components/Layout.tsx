import { ReactNode } from 'react';
import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';

const Layout = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`mx-auto max-w-5xl px-8 selection:bg-flamingo-200 ${className}`}>
      <Meta />
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
