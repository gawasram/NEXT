import React from 'react';

interface NavbarProps {
  reorderedBalances: string[];
}

const Navbar: React.FC<NavbarProps> = ({ reorderedBalances }) => {
  // Example spacings in pixels
  const spacings = [15, 30, 45, 60]; // adjust these values according to your design needs
  
  return (
    <div className="h-5 py-4 flex items-center" 
         style={{ backgroundImage: "url('/topbar.jpg')", backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="flex items-center"> 
        {reorderedBalances.map((balance, index) => (
          <div 
            key={index} 
            className="p-5 mt-2  rounded-md text-white font-bold" 
            style={{ marginRight: `${spacings[index] || 0}px` }}  // applying spacing
          >
            {balance}
          </div>    
        ))}
      </div>
    </div>
  );
};

export default Navbar;
