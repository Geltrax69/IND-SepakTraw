import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useSearchFilter } from '../../context/SearchFilterContext';

export const ProductCard = ({ product }) => {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const { setActiveProductModal } = useSearchFilter();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div
      style={{
        backgroundColor: 'var(--surface-paper-white)',
        borderRadius: '0px',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer'
      }}
      onClick={() => setActiveProductModal(product)}
    >
      {/* Image Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '100%', /* 1:1 Aspect Ratio */
          backgroundColor: 'var(--surface-soft-mist)',
          overflow: 'hidden'
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />

        {/* Tag Pill Overlay */}
        {product.tag && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'var(--color-obsidian)',
              color: 'var(--color-paper-white)',
              fontSize: '12px',
              fontWeight: 600,
              padding: '4px 12px',
              borderRadius: 'var(--radius-tags)',
              fontFamily: 'var(--font-helvetica-now-text-medium)'
            }}
          >
            {product.tag}
          </div>
        )}

        {/* Wishlist Heart Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'var(--color-paper-white)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <Heart
            size={18}
            color="var(--color-obsidian)"
            fill={isWishlisted ? 'var(--color-obsidian)' : 'none'}
          />
        </button>
      </div>

      {/* Card Info */}
      <div style={{ padding: '12px 0 24px 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: 'var(--font-helvetica-now-text-medium)',
              color: 'var(--color-obsidian)'
            }}
          >
            {product.name}
          </h3>
          <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-obsidian)' }}>
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p style={{ fontSize: '14px', color: 'var(--color-steel)', fontWeight: 400 }}>
          {product.subtitle}
        </p>

        <p style={{ fontSize: '13px', color: 'var(--color-steel)', marginTop: '2px', fontWeight: 500 }}>
          {product.colors} Colours
        </p>

        {/* Quick Add to Bag Pill Button */}
        <div style={{ marginTop: '8px' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="btn-pill btn-obsidian btn-sm"
            style={{ width: '100%', display: 'flex', gap: '8px', alignItems: 'center' }}
          >
            <ShoppingBag size={15} />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
};
