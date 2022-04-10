import { ethers } from "ethers";
import FactStation from "./artifacts/contracts/FactStation.sol/FactStation.json";


const factStationAddress = "0x6c4CC2ed07432cDaFA85D967A2aFd2254836532a";

// async function requestAccount() {
//     await window.ethereum.request({ method: "eth_requestAccounts" });
//   }
   
export const createpost = async (myUrl)=> {
    
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        factStationAddress,
        FactStation.abi,
        signer);
        const tx = await contract.createPost(myUrl, 0, 0, 0);
        tx.wait();
        console.log(myUrl);
    
        // const tx1 = await contract.getPost(1);
        // console.log(tx1);
      }
     
    }