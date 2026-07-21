import React from 'react';

export const PillButton = ({
  children,
  variant = 'obsidian',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) => {
  const baseClass = 'btn-pill';
  const variantClass = variant === 'paper' ? 'btn-paper' : 'btn-obsidian';
  const sizeClass = size === 'sm' ? 'btn-sm' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
};
