import React from 'react';

interface HeaderProps {
  currentRoute: string;
}

const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
  const navLinkClasses = (path: string) => {
    const isActive = currentRoute === path;
    return `text-sm font-semibold transition-colors ${
      isActive ? 'text-amber-600' : 'text-slate-600 hover:text-amber-500'
    }`;
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#/" className="flex items-center">
            <img src="https://i.ibb.co/hZxtcFC/trendy-bazaar-logo.png" alt="Trendy Bazaar Algeria Logo" className="h-16 w-auto" />
          </a>
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#/" className={navLinkClasses('/')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#/products" className={navLinkClasses('/products')}>
                  Products
                </a>
              </li>
              <li>
                <a href="#/wholesale" className={navLinkClasses('/wholesale')}>
                  Wholesale
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;