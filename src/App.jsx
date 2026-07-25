import React, { useState, useEffect } from 'react';
import { TopNav } from './features/navigation/TopNav';
import { EditorialHero } from './features/hero/EditorialHero';
import { EventCountdown } from './features/moments/EventCountdown';
import { StatsStrip } from './features/moments/StatsStrip';
import { MomentsShowcase } from './features/moments/MomentsShowcase';
import { CategoryGrid } from './features/categories/CategoryGrid';
import { ProductGrid } from './features/products/ProductGrid';
import { FooterGrid } from './features/footer/FooterGrid';
import { StfiPortalModal } from './features/stfi/StfiPortalModal';
import { SponsorsStrip } from './features/moments/SponsorsStrip';

// Dedicated Page Views
import { MyasCompliancePage } from './features/pages/MyasCompliancePage';
import { ChampionshipEventsPage } from './features/pages/ChampionshipEventsPage';
import { ContactUsPage } from './features/pages/ContactUsPage';
import { RulesRegulationsPage } from './features/pages/RulesRegulationsPage';
import { NoticeNewsPage } from './features/pages/NoticeNewsPage';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isStfiModalOpen, setIsStfiModalOpen] = useState(false);
  const [initialPortalTab, setInitialPortalTab] = useState('overview');

  // Handle URL hash / initial location mapping
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['myas', 'events', 'contact', 'rules', 'notice'].includes(hash)) {
      setCurrentView(hash);
    }
  }, []);

  const handleOpenStfiPortal = (tab = 'overview') => {
    setInitialPortalTab(tab);
    setIsStfiModalOpen(true);
  };

  const handleSelectNav = (navId) => {
    let targetView = 'home';
    if (['myas', 'rti', 'elections', 'history', 'antidoping', 'governance'].includes(navId)) {
      targetView = 'myas';
    } else if (['events', 'nationals', 'selection', 'camps', 'calendar'].includes(navId)) {
      targetView = 'events';
    } else if (['contact'].includes(navId)) {
      targetView = 'contact';
    } else if (['rules', 'rule-regu', 'rule-double', 'rule-quad', 'rule-beach'].includes(navId)) {
      targetView = 'rules';
    } else if (['notice', 'news', 'results', 'trials'].includes(navId)) {
      targetView = 'notice';
    }

    setCurrentView(targetView);
    window.location.hash = targetView;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0b0c10' }}>
      {/* Uncluttered Federation Header */}
      <TopNav
        currentView={currentView}
        onOpenStfiPortal={handleOpenStfiPortal}
        onSelectNav={handleSelectNav}
      />

      {/* Dynamic View Router */}
      <main style={{ flex: 1 }}>
        {currentView === 'myas' && (
          <MyasCompliancePage onOpenPortal={handleOpenStfiPortal} />
        )}

        {currentView === 'events' && (
          <ChampionshipEventsPage onOpenPortal={handleOpenStfiPortal} />
        )}

        {currentView === 'contact' && (
          <ContactUsPage />
        )}

        {currentView === 'rules' && (
          <RulesRegulationsPage />
        )}

        {currentView === 'notice' && (
          <NoticeNewsPage />
        )}

        {currentView === 'home' && (
          <>
            <EditorialHero
              onOpenStfiPortal={handleOpenStfiPortal}
              onExploreRules={() => handleSelectNav('rules')}
            />
            <EventCountdown
              onOpenPortal={() => handleSelectNav('events')}
            />
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
            <SponsorsStrip />
          </>
        )}
      </main>

      {/* Site Footer */}
      <FooterGrid
        onOpenStfiPortal={handleOpenStfiPortal}
        onSelectNav={handleSelectNav}
      />

      {/* Interactive Federation Portal Quick Modal */}
      <StfiPortalModal
        isOpen={isStfiModalOpen}
        onClose={() => setIsStfiModalOpen(false)}
        initialTab={initialPortalTab}
      />
    </div>
  );
}

export default App;
