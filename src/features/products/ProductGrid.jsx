import React from 'react';
import { NIKE_PRODUCTS, NIKE_CATEGORIES } from '../../data/nikeData';
import { ProductCard } from './ProductCard';
import { useSearchFilter } from '../../context/SearchFilterContext';

export const ProductGrid = () => {
  const { searchQuery, selectedCategory, setSelectedCategory } = useSearchFilter();

  const filteredProducts = NIKE_PRODUCTS.filter(product => {
    const matchesCategory =
      selectedCategory === 'all' ||
      product.category === selectedCategory ||
      (selectedCategory === 'New Releases' && product.isNew);

    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sport.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="product-catalog" style={{ backgroundColor: 'var(--surface-paper-white)', padding: '48px 0 80px 0' }}>
      <div className="max-width-container">
        {/* Header & Category Filter Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h2 className="heading-sm" style={{ textTransform: 'uppercase' }}>
              Nike Catalog ({filteredProducts.length})
            </h2>
            {searchQuery && (
              <span style={{ fontSize: '14px', color: 'var(--color-steel)', fontWeight: 500 }}>
                Search results for "{searchQuery}"
              </span>
            )}
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }} className="no-scrollbar">
            {NIKE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-buttons)',
                  border: '1px solid var(--color-concrete-gray)',
                  backgroundColor: selectedCategory === cat.id ? 'var(--color-obsidian)' : 'var(--surface-paper-white)',
                  color: selectedCategory === cat.id ? 'var(--color-paper-white)' : 'var(--color-obsidian)',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-helvetica-now-text)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Product Grid */}
        {filteredProducts.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              columnGap: '16px',
              rowGap: '40px'
            }}
          >
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: '60px 0',
              textAlign: 'center',
              color: 'var(--color-steel)'
            }}
          >
            <p style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 500 }}>
              No products found matching your search.
            </p>
            <button
              className="btn-pill btn-obsidian btn-sm"
              onClick={() => { setSelectedCategory('all'); }}
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
