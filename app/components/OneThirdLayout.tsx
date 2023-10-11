import React, { ReactNode } from 'react';

interface OneThirdLayoutProps {
  children?: ReactNode;
}

const OneThirdLayout: React.FC<OneThirdLayoutProps> = ({ children }) => {
  return (
    <div style={{ 
        width: '33.33%', 
        backgroundImage: "url('/rightsidebar.jpg')", 
        backgroundSize: '100% 100%', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }}>
      {children}
    </div>
  );
};

export default OneThirdLayout;
