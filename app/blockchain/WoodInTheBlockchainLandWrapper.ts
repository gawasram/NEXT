import Web3 from 'web3';
import WoodToken from './contracts/WoodInTheBlockchainLand';
import { addressArray } from './constants';

export default class WoodTokenWrapper {
    web3: Web3;
    chainId: number;
    account: string;
    wrapperOptions: any;
    Contract: WoodToken;

    constructor(web3, chainId, account, options = {}) {

        this.web3 = web3;
        this.chainId = chainId;
        this.account = account;

        this.wrapperOptions = {
            web3, chainId, account, ...options
        }

        this.Contract = new WoodToken(this.wrapperOptions, addressArray[0].Contract[this.chainId]);
    }

    async balanceOf(): Promise<unknown> {
        try {
            const balance = await this.Contract.call("balanceOf", this.account);
            return balance;
        } catch (error) {
            throw error;
        }
    }

    async approve(_key) {    
        const value = '115792089237316195423570985008687907853269984665640564039457584007913129639935'; //(2^256 - 1)
        try {
            const tx = await this.Contract.send("approve", {from: this.account}, addressArray[_key].Contract[this.chainId], value);
            console.log(tx);
        } catch (error) {
            throw error;
        }
    }

    async allowance(_key): Promise<unknown> {
        try {
            const allowance = await this.Contract.call("allowance", this.account, addressArray[_key].Contract[this.chainId]);
            return allowance;
        } catch (error) {
            throw error;
        }
    }
}