import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Fetching details...');

  const showLoading = (msg = 'Fetching details...') => {
    setMessage(msg);
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading, loading }}>
      {children}

      {/* Fullscreen Running Dog Overlay */}
      {loading && (
        <div style={overlayStyles} role="alert" aria-live="assertive">
          <div style={cardStyles}>
            <dotlottie-player
              src="https://lottie.host/81f8f3c7-bc89-42b7-a364-7c64e5251642/YV3VlE3nN7.lottie"
              background="transparent"
              speed="1"
              style={{ width: '180px', height: '180px' }}
              loop
              autoplay
            />
            <p style={textStyles}>{message}</p>
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

// Inline styles for zero-dependency setup
const overlayStyles = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999999,
};

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px 32px',
  background: '#ffffff',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
};

const textStyles = {
  margin: '12px 0 0 0',
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: '1rem',
  fontWeight: 600,
  color: '#374151',
};