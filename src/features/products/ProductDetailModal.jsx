import React, { useState } from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useSearchFilter } from '../../context/SearchFilterContext';
import { PillButton } from '../../components/ui/PillButton';

export const ProductDetailModal = () => {
  const { activeProductModal, setActiveProductModal } = useSearchFilter();
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState('US 9');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!activeProductModal) return null;

  const isWishlisted = wishlist.includes(activeProductModal.id);
  const images = activeProductModal.additionalImages || [activeProductModal.image];

  return (
    <div
      className="animate-fade-in"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={() => setActiveProductModal(null)}
    >
      <div
        className="animate-modal"
        style={{
          backgroundColor: 'var(--surface-paper-white)',
          width: '100%',
          maxWidth: '960px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '36px',
          padding: '36px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Modal Button */}
        <button
          onClick={() => setActiveProductModal(null)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={24} color="var(--color-obsidian)" />
        </button>

        {/* Left Column: Product Image Gallery */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              width: '100%',
              paddingTop: '100%',
              position: 'relative',
              backgroundColor: 'var(--surface-soft-mist)',
              overflow: 'hidden'
            }}
          >
            <img
              src={images[activeImageIndex]}
              alt={activeProductModal.name}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Image Thumbnails */}
          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '8px' }}>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    width: '64px',
                    height: '64px',
                    padding: 0,
                    border: activeImageIndex === idx ? '2px solid var(--color-obsidian)' : '1px solid var(--color-concrete-gray)',
                    backgroundColor: 'var(--surface-soft-mist)',
                    cursor: 'pointer'
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Details & Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <span style={{ fontSize: '14px', color: 'var(--color-steel)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.04em' }}>
              {activeProductModal.subtitle}
            </span>
            <h2 className="heading-sm" style={{ fontSize: '28px', margin: '4px 0 8px 0' }}>
              {activeProductModal.name}
            </h2>
            <div style={{ fontSize: '22px', fontWeight: 700 }}>
              ${activeProductModal.price.toFixed(2)}
            </div>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--color-steel)', lineHeight: 1.6, fontWeight: 400 }}>
            {activeProductModal.description}
          </p>

          {/* Size Selector */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Select Size</span>
              <span style={{ fontSize: '14px', color: 'var(--color-steel)', cursor: 'pointer', textDecoration: 'underline', fontWeight: 500 }}>
                Size Guide
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {activeProductModal.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: '12px 0',
                    border: selectedSize === size ? '1px solid var(--color-obsidian)' : '1px solid var(--color-concrete-gray)',
                    backgroundColor: selectedSize === size ? 'var(--color-obsidian)' : 'var(--surface-paper-white)',
                    color: selectedSize === size ? 'var(--color-paper-white)' : 'var(--color-obsidian)',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '4px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            <PillButton
              variant="obsidian"
              onClick={() => {
                addToCart(activeProductModal, selectedSize);
                setActiveProductModal(null);
              }}
              style={{ width: '100%', padding: '14px 0' }}
            >
              Add to Bag
            </PillButton>

            <button
              onClick={() => toggleWishlist(activeProductModal.id)}
              style={{
                width: '100%',
                padding: '14px 0',
                borderRadius: 'var(--radius-buttons)',
                border: '1px solid var(--color-concrete-gray)',
                backgroundColor: 'var(--surface-paper-white)',
                color: 'var(--color-obsidian)',
                fontSize: '15px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <Heart size={18} fill={isWishlisted ? 'var(--color-obsidian)' : 'none'} />
              <span>{isWishlisted ? 'Added to Favorites' : 'Favorite'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
