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

  return (
    <CartProvider>
      <SearchFilterProvider>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface-paper-white)' }}>
          {/* Site Navigation */}
          <TopNav onOpenStfiPortal={() => setIsStfiModalOpen(true)} />

          {/* Main Content Sections */}
          <main style={{ flex: 1 }}>
            <EditorialHero />
            <CategoryGrid />
            <ProductGrid />
          </main>

          {/* Site Footer */}
          <FooterGrid />

          {/* Interactive Drawers & Modals */}
          <CartDrawer />
          <ProductDetailModal />
          <StfiPortalModal isOpen={isStfiModalOpen} onClose={() => setIsStfiModalOpen(false)} />
        </div>
      </SearchFilterProvider>
    </CartProvider>
  );
}

export default App;
