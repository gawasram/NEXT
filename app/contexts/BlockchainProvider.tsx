import { createContext, useEffect, useState, useContext } from "react";
import { Web3ModalContext } from "./Web3ModalProvider";
import TokenBalanceTrackerWrapper from "../blockchain/TokenBalanceTrackerWrapper";
import FishInTheBlockchainLandWrapper from "../blockchain/FishInTheBlockchainLandWrapper";
import CLAYInTheBlockchainLandWrapper from "../blockchain/CLAYInTheBlockchainLandWrapper";
import RockInTheBlockchainLandWrapper from "../blockchain/RockInTheBlockchainLandWrapper";
import WoodInTheBlockchainLandWrapper from "../blockchain/WoodInTheBlockchainLandWrapper";
import WoolInTheBlockchainLandWrapper from "../blockchain/WoolInTheBlockchainLandWrapper";
import ropeTokenWrapper from "../blockchain/ropeTokenWrapper";
import clothTokenWrapper from "../blockchain/clothTokenWrapper";
import brickTokenWrapper from "../blockchain/brickTokenWrapper";
import ironTokenWrapper from "../blockchain/ironTokenWrapper";
import lumberTokenWrapper from "../blockchain/lumberTokenWrapper";
//NFTs
import forgeNFTWrapper from "../blockchain/NFTwrappers/forgeNFTWrapper";
import hammerNFTWrapper from "../blockchain/NFTwrappers/hammerNFTWrapper";
import anvilNFTWrapper from "../blockchain/NFTwrappers/anvilNFTWrapper";
import fishNetNFTWrapper from "../blockchain/NFTwrappers/fishNetNFTWrapper";
import axeNFTWrapper from "../blockchain/NFTwrappers/AxeNFTWrapper";
import sawNFTWrapper from "../blockchain/NFTwrappers/sawNFTWrapper";
import pickaxeNFTWrapper from "../blockchain/NFTwrappers/pickaxeNFTWrapper";
import rowboatNFTWrapper from "../blockchain/NFTwrappers/rowboatNFTWrapper";
import nailsTokenWrapper from "../blockchain/nailsTokenWrapper";
import shearsNFTWrapper from "../blockchain/NFTwrappers/shearsNFTWrapper";
import shovelNFTWrapper from "../blockchain/NFTwrappers/shovelNFTWrapper";
import WalletBalanceCheckerWrapper from "../blockchain/WalletBalanceCheckerWrapper";
import NFTWalletBalanceCheckerWrapper from "../blockchain/NFTWalletBalanceCheckerWrapper";

interface IBlockchainContext {
  nftWalletBalanceChecker: NFTWalletBalanceCheckerWrapper | null;
  walletBalanceChecker: WalletBalanceCheckerWrapper | null;
  tokenBalanceTracker: TokenBalanceTrackerWrapper | null;
  fishInTheBlockchainLand: FishInTheBlockchainLandWrapper | null;
  rockInTheBlockchainLand: RockInTheBlockchainLandWrapper | null;
  CLAYInTheBlockchainLand: CLAYInTheBlockchainLandWrapper | null,
  woodInTheBlockchainLand: WoodInTheBlockchainLandWrapper | null;
  woolInTheBlockchainLand: WoolInTheBlockchainLandWrapper | null;
  ropeToken: ropeTokenWrapper | null;
  clothToken: clothTokenWrapper | null;
  brickToken: brickTokenWrapper | null;
  ironToken: ironTokenWrapper | null;
  lumberToken: lumberTokenWrapper | null;
  forgeNFT: forgeNFTWrapper | null;
  hammerNFT: hammerNFTWrapper | null;
  anvilNFT: anvilNFTWrapper | null;
  fishNetNFT: fishNetNFTWrapper | null;
  axeNFT: axeNFTWrapper | null;
  sawNFT: sawNFTWrapper | null;
  pickaxeNFT: pickaxeNFTWrapper | null;
  rowboatNFT: rowboatNFTWrapper | null;
  nailsToken: nailsTokenWrapper | null;
  shearsNFT: shearsNFTWrapper | null;
  shovelNFT: shovelNFTWrapper | null;
}

export const BlockchainContext = createContext<IBlockchainContext>({
  nftWalletBalanceChecker: null,
  walletBalanceChecker: null,
  tokenBalanceTracker: null,
  fishInTheBlockchainLand: null,
  rockInTheBlockchainLand: null,
  CLAYInTheBlockchainLand: null,
  woodInTheBlockchainLand: null,
  woolInTheBlockchainLand: null,
  ropeToken: null,
  clothToken: null,
  brickToken: null,
  ironToken: null,
  lumberToken: null,
  forgeNFT: null,
  hammerNFT: null,
  anvilNFT: null,
  fishNetNFT: null,
  axeNFT: null,
  sawNFT: null,
  pickaxeNFT: null,
  rowboatNFT: null,
  nailsToken: null,
  shearsNFT: null,
  shovelNFT: null
});

export const BlockchainProvider = ({ children }) => {
  const { web3, chainId, account } = useContext(Web3ModalContext);
  const [nftWalletBalanceChecker,setNFTWalletBalanceChecker] =
  useState<NFTWalletBalanceCheckerWrapper | null>(null);

  const [walletBalanceChecker, setWalletBalanceChecker] = 
  useState<WalletBalanceCheckerWrapper | null>(null);
  const [tokenBalanceTracker, setTokenBalanceTracker] =
  useState<TokenBalanceTrackerWrapper | null>(null);
  const [fishInTheBlockchainLand, setFishInTheBlockchainLand] =
    useState<FishInTheBlockchainLandWrapper | null>(null);
  const [rockInTheBlockchainLand, setRockInTheBlockchainLand] =
    useState<RockInTheBlockchainLandWrapper | null>(null);
  const [CLAYInTheBlockchainLand, setCLAYInTheBlockchainLand] =
    useState<CLAYInTheBlockchainLandWrapper | null>(null);
  const [woodInTheBlockchainLand, setWoodInTheBlockchainLand] =
    useState<WoodInTheBlockchainLandWrapper | null>(null);
  const [woolInTheBlockchainLand, setWoolInTheBlockchainLand] =
    useState<WoolInTheBlockchainLandWrapper | null>(null);
  const [ropeToken, setRopeToken] =
    useState<ropeTokenWrapper | null>(null);
  const [clothToken, setClothToken] =
    useState<clothTokenWrapper | null>(null);
  const [brickToken, setBrickToken] =
    useState<brickTokenWrapper | null>(null);
  const [ironToken, setIronToken] =
    useState<ironTokenWrapper | null>(null);
  const [lumberToken, setLumberToken] =
    useState<lumberTokenWrapper | null>(null);
  const [forgeNFT, setForgeNFT] =
    useState<forgeNFTWrapper | null>(null);
  const [hammerNFT, setHammerNFT] =
    useState<hammerNFTWrapper | null>(null);
  const [anvilNFT, setAnvilNFT] =
    useState<anvilNFTWrapper | null>(null);
  const [fishNetNFT, setFishNetNFT] =
    useState<fishNetNFTWrapper | null>(null);
  const [axeNFT, setAxeNFT] =
    useState<axeNFTWrapper | null>(null);
  const [sawNFT, setSawNFT] =
    useState<sawNFTWrapper | null>(null);
  const [pickaxeNFT, setPickaxeNFT] =
    useState<pickaxeNFTWrapper | null>(null);
  const [rowboatNFT, setRowboatNFT] =
    useState<rowboatNFTWrapper | null>(null);
  const [nailsToken, setNailToken] =
    useState<nailsTokenWrapper | null>(null);
  const [shearsNFT, setShearsNFT] =
    useState<shearsNFTWrapper | null>(null);
  const [shovelNFT, setShovelNFT] =
    useState<shovelNFTWrapper | null>(null);

  useEffect(() => {
    if (web3 && chainId && account) {
      try {
        const _NFTWalletBalanceChecker = new NFTWalletBalanceCheckerWrapper(
          web3,
          chainId,
          account
        );
        const _walletBalanceChecker = new WalletBalanceCheckerWrapper(
          web3,
          chainId,
          account
        );
        const _TokenBalanceTracker = new TokenBalanceTrackerWrapper(
          web3,
          chainId,
          account
        );
        const _fishInTheBlockchainLand = new FishInTheBlockchainLandWrapper(
          web3,
          chainId,
          account
        );
        const _rockInTheBlockchainLand = new RockInTheBlockchainLandWrapper(
          web3,
          chainId,
          account
        );
        const _CLAYInTheBlockchainLand = new CLAYInTheBlockchainLandWrapper(
          web3,
          chainId,
          account
        );
        const _woodInTheBlockchainLand = new WoodInTheBlockchainLandWrapper(
          web3,
          chainId,
          account
        );
        const _woolInTheBlockchainLand = new WoolInTheBlockchainLandWrapper(
          web3,
          chainId,
          account
        );
        const _ropeToken = new ropeTokenWrapper(
          web3,
          chainId,
          account
        );
        const _clothToken = new clothTokenWrapper(
          web3,
          chainId,
          account
        );
        const _brickToken = new brickTokenWrapper(
          web3,
          chainId,
          account
        );
        const _ironToken = new ironTokenWrapper(
          web3,
          chainId,
          account
        );
        const _lumberToken = new lumberTokenWrapper(
          web3,
          chainId,
          account
        );
        const _forgeNFT = new forgeNFTWrapper(
          web3,
          chainId,
          account
        )
        const _hammerNFT = new hammerNFTWrapper(
          web3,
          chainId,
          account
        )
        const _anvilNFT = new anvilNFTWrapper(
          web3,
          chainId,
          account
        )
        const _fishNetNFT = new fishNetNFTWrapper(
          web3,
          chainId,
          account
        )
        const _axeNFT = new axeNFTWrapper(
          web3,
          chainId,
          account
        )
        const _sawNFT = new sawNFTWrapper(
          web3,
          chainId,
          account
        )
        const _pickaxeNFT = new pickaxeNFTWrapper(
          web3,
          chainId,
          account
        )
        const _rowboatNFT = new rowboatNFTWrapper(
          web3,
          chainId,
          account
        )
        const _nailsToken = new nailsTokenWrapper(
          web3,
          chainId,
          account
        )
        const _shearsNFT = new shearsNFTWrapper(
          web3,
          chainId,
          account
        )
        const _shovelNFT = new shovelNFTWrapper(
          web3,
          chainId,
          account
        )

        setNFTWalletBalanceChecker(_NFTWalletBalanceChecker);
        setWalletBalanceChecker(_walletBalanceChecker);
        setTokenBalanceTracker(_TokenBalanceTracker);
        setFishInTheBlockchainLand(_fishInTheBlockchainLand);
        setRockInTheBlockchainLand(_rockInTheBlockchainLand);
        setCLAYInTheBlockchainLand(_CLAYInTheBlockchainLand);
        setWoodInTheBlockchainLand(_woodInTheBlockchainLand);
        setWoolInTheBlockchainLand(_woolInTheBlockchainLand);
        setRopeToken(_ropeToken);
        setClothToken(_clothToken);
        setBrickToken(_brickToken);
        setIronToken(_ironToken);
        setLumberToken(_lumberToken);
        setForgeNFT(_forgeNFT);
        setHammerNFT(_hammerNFT);
        setAnvilNFT(_anvilNFT);
        setFishNetNFT(_fishNetNFT);
        setAxeNFT(_axeNFT);
        setSawNFT(_sawNFT);
        setPickaxeNFT(_pickaxeNFT);
        setRowboatNFT(_rowboatNFT);
        setNailToken(_nailsToken);
        setShearsNFT(_shearsNFT);
        setShovelNFT(_shovelNFT);    

      } catch (error) {
        console.error("Failed to initialize contracts:", error);
      }
    }
  }, [web3, chainId, account]);

  return (
    <BlockchainContext.Provider
      value={{
        nftWalletBalanceChecker,
        walletBalanceChecker,
        tokenBalanceTracker,
        fishInTheBlockchainLand,
        rockInTheBlockchainLand,
        CLAYInTheBlockchainLand,
        woodInTheBlockchainLand,
        woolInTheBlockchainLand,
        ropeToken,
        clothToken,
        brickToken,
        ironToken,
        lumberToken,
        forgeNFT,
        hammerNFT,
        anvilNFT,
        fishNetNFT,
        axeNFT,
        sawNFT,
        pickaxeNFT,
        rowboatNFT,
        nailsToken,
        shearsNFT,
        shovelNFT
      }}
    >
      {children}
    </BlockchainContext.Provider>
  );
};