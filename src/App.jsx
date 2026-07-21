import React, { useState } from 'react';
import { TopNav } from './features/navigation/TopNav';
import { EditorialHero } from './features/hero/EditorialHero';
import { EventCountdown } from './features/moments/EventCountdown';
import { StatsStrip } from './features/moments/StatsStrip';
import { MomentsShowcase } from './features/moments/MomentsShowcase';
import { CategoryGrid } from './features/categories/CategoryGrid';
import { ProductGrid } from './features/products/ProductGrid';
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
    if (['myas', 'rti', 'elections', 'history', 'antidoping', 'governance'].includes(navId)) {
      handleOpenStfiPortal(navId === 'myas' ? 'myas' : navId === 'rules' ? 'rules' : navId === 'events' ? 'events' : 'governance');
    } else {
      const section = document.getElementById('stfi-content-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface-paper-white)' }}>
          {/* Uncluttered Federation Header */}
          <TopNav onOpenStfiPortal={handleOpenStfiPortal} onSelectNav={handleSelectNav} />

          {/* Main STFI Federation Portal Content */}
          <main style={{ flex: 1 }}>
            <EditorialHero
              onOpenStfiPortal={handleOpenStfiPortal}
              onExploreRules={() => handleOpenStfiPortal('rules')}
            />
            <EventCountdown onOpenPortal={handleOpenStfiPortal} />
            <StatsStrip />
            <MomentsShowcase
              onOpenPortal={handleOpenStfiPortal}
              onSelectNav={handleSelectNav}
            />
            <CategoryGrid
              onOpenPortal={handleOpenStfiPortal}
              onSelectNav={handleSelectNav}
            />
            <ProductGrid
              onOpenPortal={handleOpenStfiPortal}
            />
          </main>

          {/* Site Footer */}
          <FooterGrid
            onOpenStfiPortal={handleOpenStfiPortal}
            onSelectNav={handleSelectNav}
          />

          {/* Interactive Federation Portal Modal */}
          <StfiPortalModal
            isOpen={isStfiModalOpen}
            onClose={() => setIsStfiModalOpen(false)}
            initialTab={initialPortalTab}
          />
        </div>
  );
}

export default App;
