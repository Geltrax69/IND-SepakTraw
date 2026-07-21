import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { SearchFilterProvider } from './context/SearchFilterContext';
import { TopNav } from './features/navigation/TopNav';
import { EditorialHero } from './features/hero/EditorialHero';
import { CategoryGrid } from './features/categories/CategoryGrid';
import { ProductGrid } from './features/products/ProductGrid';
import { ProductDetailModal } from './features/products/ProductDetailModal';
import { CartDrawer } from './features/cart/CartDrawer';
import { FooterGrid } from './features/footer/FooterGrid';
import { StfiPortalModal } from './features/stfi/StfiPortalModal';

function App() {
  const [isStfiModalOpen, setIsStfiModalOpen] = useState(false);
  const [initialPortalTab, setInitialPortalTab] = useState('overview');

  const handleOpenStfiPortal = (tab = 'overview') => {
    setInitialPortalTab(tab);
    setIsStfiModalOpen(true);
  };

  const handleSelectNav = (navId) => {
    if (['myas', 'rti', 'elections', 'rules', 'history'].includes(navId)) {
      handleOpenStfiPortal(navId === 'myas' ? 'myas' : navId === 'rules' ? 'rules' : navId === 'rti' ? 'governance' : 'overview');
    } else {
      const catalog = document.getElementById('product-catalog');
      if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CartProvider>
      <SearchFilterProvider>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface-paper-white)' }}>
          {/* Site Navigation */}
          <TopNav onOpenStfiPortal={handleOpenStfiPortal} onSelectNav={handleSelectNav} />

          {/* Main Content Sections */}
          <main style={{ flex: 1 }}>
            <EditorialHero onOpenStfiPortal={handleOpenStfiPortal} onExploreEvents={() => handleOpenStfiPortal('events')} />
            <CategoryGrid />
            <ProductGrid />
          </main>

          {/* Site Footer */}
          <FooterGrid onOpenStfiPortal={handleOpenStfiPortal} />

          {/* Interactive Drawers & Modals */}
          <CartDrawer />
          <ProductDetailModal />
          <StfiPortalModal
            isOpen={isStfiModalOpen}
            onClose={() => setIsStfiModalOpen(false)}
            initialTab={initialPortalTab}
          />
        </div>
      </SearchFilterProvider>
    </CartProvider>
  );
}

export default App;
