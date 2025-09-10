import React from 'react';

const Icon = ({ name, className = '', alt = '' }) => {
  // Use the public URL for SVG icons
  const iconPath = `/icons/${name}.png`;
  
  // Fallback for missing icons
  const fallbackIcons = {
    chakra: '☸️',
    dhanush: '🏹',
    shank: '🐚',
    trishul: '🔱',
    volume: '🔊',
    question: '❓',
    lightbulb: '💡',
    flute: '🎵'
  };
  
  // Check if this is a large icon (chakra or shank)
  
  // Try to load the SVG as an image, fallback to emoji if not found
  return (
    <span className={`icon-wrapper ${className}`}>
      <img 
        src={iconPath} 
        alt={alt || name} 
        className="icon"
        style={{ 
          background: 'transparent',
          filter: 'brightness(1.2) saturate(2) drop-shadow(0 0 15px rgb(0, 0, 0))', // Enhanced visibility
          opacity: 1, // Fully opaque
          zIndex: 1000, // Ensure icons float in UI section
          position: 'relative', // Ensure proper positioning
          display: 'block' // Ensure proper display
        }}
        onError={(e) => {
          // If SVG fails to load, show fallback emoji
          e.target.style.display = 'none';
          const fallbackElement = document.createElement('span');
          fallbackElement.textContent = fallbackIcons[name] || '💎';
          fallbackElement.className = 'icon-fallback';
          fallbackElement.style.filter = 'brightness(1.2) saturate(2) drop-shadow(0 0 15px rgba(0, 0, 0, 0.9))'; // Enhanced visibility
          fallbackElement.style.opacity = '1'; // Fully opaque
          fallbackElement.style.zIndex = '1000'; // Ensure icons float in UI section
          fallbackElement.style.position = 'relative'; // Ensure proper positioning
          fallbackElement.style.display = 'block'; // Ensure proper display
          e.target.parentNode.appendChild(fallbackElement);
        }}
      />
    </span>
  );
};

export default Icon;