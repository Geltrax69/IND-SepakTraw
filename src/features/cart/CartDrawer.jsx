import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PillButton } from '../../components/ui/PillButton';

export const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItemsCount
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 150;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div
      className="animate-fade-in"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 60,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="animate-slide-right"
        style={{
          backgroundColor: 'var(--surface-paper-white)',
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'none',
          borderLeft: '1px solid var(--color-concrete-gray)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div
          className="hairline-border-bottom"
          style={{
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} color="var(--color-obsidian)" />
            <h2 style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'var(--font-helvetica-now-display-medium)' }}>
              Bag ({totalItemsCount})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            <X size={22} color="var(--color-obsidian)" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{ padding: '16px 24px', backgroundColor: 'var(--surface-soft-mist)' }}>
          <p style={{ fontSize: '13px', color: 'var(--color-obsidian)', marginBottom: '8px', fontWeight: 600 }}>
            {remainingForFreeShipping > 0
              ? `Add $${remainingForFreeShipping.toFixed(2)} more for Free Standard Shipping`
              : "Congrats! You've unlocked Free Standard Shipping"}
          </p>
          <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--color-concrete-gray)', borderRadius: '2px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                backgroundColor: 'var(--color-obsidian)',
                transition: 'width 0.3s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-steel)' }}>
              <p style={{ fontSize: '16px', marginBottom: '16px', fontWeight: 500 }}>Your Bag is empty.</p>
              <PillButton variant="obsidian" size="sm" onClick={() => setIsCartOpen(false)}>
                Explore Catalog
              </PillButton>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cartItems.map((item, idx) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${idx}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '16px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid var(--color-concrete-gray)'
                  }}
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      backgroundColor: 'var(--surface-soft-mist)'
                    }}
                  />

                  {/* Info */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 600 }}>{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
                        >
                          <Trash2 size={16} color="var(--color-steel)" />
                        </button>
                      </div>
                      <span style={{ fontSize: '13px', color: 'var(--color-steel)' }}>
                        Size: {item.selectedSize}
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                      {/* Quantity Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-concrete-gray)', borderRadius: '24px' }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                          style={{ background: 'none', border: 'none', padding: '4px 8px', cursor: 'pointer' }}
                        >
                          <Minus size={12} color="var(--color-obsidian)" />
                        </button>
                        <span style={{ fontSize: '13px', fontWeight: 600, padding: '0 4px' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                          style={{ background: 'none', border: 'none', padding: '4px 8px', cursor: 'pointer' }}
                        >
                          <Plus size={12} color="var(--color-obsidian)" />
                        </button>
                      </div>

                      <span style={{ fontSize: '15px', fontWeight: 600 }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout CTA */}
        {cartItems.length > 0 && (
          <div
            className="hairline-border-top"
            style={{ padding: '24px', backgroundColor: 'var(--surface-paper-white)', display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 600 }}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <p style={{ fontSize: '12px', color: 'var(--color-steel)' }}>
              Estimated Shipping & Taxes calculated at Checkout.
            </p>

            <PillButton
              variant="obsidian"
              style={{ width: '100%', padding: '14px 0', display: 'flex', gap: '8px' }}
              onClick={() => alert('Order completed! Thank you for testing the Nike e-commerce experience.')}
            >
              <span>Checkout</span>
              <ArrowRight size={18} />
            </PillButton>
          </div>
        )}
      </div>
    </div>
  );
};
