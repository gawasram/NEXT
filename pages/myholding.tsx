import React, { useState, useCallback, useEffect,useContext } from "react";
import { useRouter } from 'next/router'; 
import { Web3ModalContext } from "../app/contexts/Web3ModalProvider";
import { BlockchainContext } from "../app/contexts/BlockchainProvider";
import '../app/globals.css';
import TwoThirdsLayout from '../app/components/TwoThirdsLayout';
import OneThirdLayout from '../app/components/OneThirdLayout';
import Navbar from '../app/components/Navbar';


const nftImages = [ 
"https://ipfs.blocksscan.io/unsafe/https://gateway.pinata.cloud/ipfs/QmdKgHEsYGWLFA5tu47TPtChEbnTDFqqKE7PoncFz2imqe/Maxwell.jpg",
"https://ipfs.blocksscan.io/unsafe/https://gateway.pinata.cloud/ipfs/QmdKgHEsYGWLFA5tu47TPtChEbnTDFqqKE7PoncFz2imqe/axe.jpg",
"https://ipfs.blocksscan.io/unsafe/https://gateway.pinata.cloud/ipfs/QmVNkURhjGhN4pZY7Y5zdSddTKE3jTfnpPCdHq3qEaZ19T",
"https://ipfs.blocksscan.io/unsafe/https://gateway.pinata.cloud/ipfs/QmaNnS2tTaP889iQewvmx3wsQ1fyZKwdLhBwxtaSzgVmPd",
"https://ipfs.blocksscan.io/unsafe/https://gateway.pinata.cloud/ipfs/QmdKgHEsYGWLFA5tu47TPtChEbnTDFqqKE7PoncFz2imqe/pickaxe.jpg",
"https://ipfs.blocksscan.io/unsafe/https://gateway.pinata.cloud/ipfs/QmdKgHEsYGWLFA5tu47TPtChEbnTDFqqKE7PoncFz2imqe/anvil.jpg",
"https://ipfs.blocksscan.io/unsafe/https://gateway.pinata.cloud/ipfs/QmdKgHEsYGWLFA5tu47TPtChEbnTDFqqKE7PoncFz2imqe/Row%20Boat1.jpg",
"https://ipfs.blocksscan.io/unsafe/https://gateway.pinata.cloud/ipfs/QmXiaa2oEcPnjxRGzrGPcD72Cw5PbBTPL54npYU7UZAR8e",
"https://ipfs.blocksscan.io/unsafe/https://gateway.pinata.cloud/ipfs/Qmc9opVaTEE2Y522YNvvHkQ9Z54sGJua2p6JrfTD73Vszt",
"https://ipfs.blocksscan.io/unsafe/https://gateway.pinata.cloud/ipfs/QmX7CgG5nyH1XPzkXn72okhJEQvyxXR2xc7tx2GSYBVwYL"

]

const MyHoldingPage: React.FC = () => {
  const router = useRouter();
  const [address, setAddress] = useState('');
  const [balances, setBalances] = useState<number[]>([]);

  const handleBack = () => {
    router.push('/');  // Navigate back to the home page
  };

  const { web3, account, connect, disconnect, chainId } = React.useContext(Web3ModalContext);

  const handleConnectWallet = () => {
    connect();
    if (account) {
      setAddress(account);
    }
  };

  const handleDisconnectWallet = () => {
    disconnect();
  };

  function ellipseAddress(address: string = "", width: number = 4): string {
    return `xdc${address.slice(2, width + 2)}...${address.slice(-width)}`;
  }

  // Function to check if an image is accessible on the server
  const checkImage = (url: string) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          console.error(`Image not accessible: ${url}`);
        } else {
          console.log(`Image accessible: ${url}`);
        }
      })
      .catch(error => {
        console.error(`Error fetching image: ${url}`, error);
      });
  }

 

  const { walletBalanceChecker } = useContext(BlockchainContext);

  const handleCheckBalance = useCallback(async () => {
    if (!address || !walletBalanceChecker) return;

    try {
      const result = await walletBalanceChecker.checkBalances(address);
      const numericBalances: number[] = result.map(Number);
      setBalances(numericBalances);
    } catch (error) {
      console.error("Error fetching balances:", error);
    }
  }, [address, walletBalanceChecker]);

// Detect when the wallet is connected and update the address, then check balance
useEffect(() => {
  if (account) {
    setAddress(account);
    handleCheckBalance();
  }
}, [account, handleCheckBalance]);


  const convertWeiToEther = (wei: number) => wei / 10**18;

  // Convert and format the balances
  const formattedBalances: string[] = balances.map(balance => {
      const ether = convertWeiToEther(balance);
      return Math.round(ether).toString();  // This rounds off the value and ensures no decimal places.
  });
  
  const rearrangeBalances = (balances) => {
    const newOrder = [0, 1, 3, 2, 4];  // indices representing the new order
    return newOrder.map(index => balances[index]);
  };
  
  const reorderedBalances = rearrangeBalances(formattedBalances);


  const [nftBalances, setNftBalances] = useState<number[]>([]);

  const { nftWalletBalanceChecker } = useContext(BlockchainContext);


  const handleCheckNFTBalance = useCallback(async () => {
    if (!address || !nftWalletBalanceChecker) return;

    try {
      const result = await nftWalletBalanceChecker.checkNFTBalances(address);
        const numericBalances: number[] = result.map(Number);
        setNftBalances(numericBalances);
    } catch (error) {
        console.error("Error fetching NFT balances:", error);
    }
}, [address, nftWalletBalanceChecker]);

useEffect(() => {
    if (account) {
        setAddress(account);
        handleCheckNFTBalance();
    }
}, [account, handleCheckNFTBalance]);

    

 
return (
  <div className="flex flex-col h-screen">
    

    <Navbar reorderedBalances={reorderedBalances}/>

    {/* Buttons Container */}
<div className="absolute top-2.5 right-4 flex justify-end space-x-4">
  
  {/* Back Button */}
  <button 
    className="bg-blue-500 text-white px-5 py-2 rounded" 
    onClick={handleBack}
  >
    HOME
  </button>

  {/* Connect Wallet Button */}
  {!account ? (
    <button 
      className="bg-blue-500 text-white px-5 py-2 rounded" 
      onClick={handleConnectWallet}
    >
      CONNECT WALLET
    </button>
  ) : (
    <button 
      className="bg-blue-500 text-white px-5 py-2 rounded" 
      onClick={handleDisconnectWallet}
    >
      {ellipseAddress(account)}
    </button>
  )}
</div>

    
      {/* Main Content */}
      <div 
    className="bg-cover bg-center relative" 
    style={{ 
        width: '66.66%', 
        backgroundImage: "url('/myHoldings.jpg')", 
        backgroundSize: '100% 100%',
        backgroundPosition: 'center' 
    }}
>
    <div className="overflow-y-auto w-1/2 h-72 mx-auto mt-16">
        <div className="grid grid-cols-4 gap-5 p-5">
            {nftBalances.map((balance, index) => (
                balance > 0 ? (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <img src={nftImages[index]} alt={`NFT ${index}`} className="w-16 h-16 object-cover" />
                        <div className="bg-yellow-300 p-1 mt-2 rounded-md">{balance}</div>
                    </div>
                ) : null
            ))}
        </div>
    </div>
    <p className="text-yellow-300 font-bold text-center mt-2">
        Scroll to see more item tiles below
    </p>
</div>


      {/* Sidebar */}
      <OneThirdLayout>
      </OneThirdLayout>
    
  </div>
);
};
export default MyHoldingPage;