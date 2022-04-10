import { ethers } from "ethers";
import FactStation from "./artifacts/contracts/FactStation.sol/FactStation.json";

// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Mainpage from "./components/main";
// import "./components/main.css";
// import "./components/stars.css";
// import Dashboard from "./components/Dashboard";
// import "./components/Style.css";
// import Request from "./components/Request";
// import Member from "./components/Member";

// <BrowserRouter>
//   <Routes>
//     <Route exact path="/" element={<Mainpage />}></Route>

//     <Route exact path="/dash" element={<Dashboard />}></Route>

//     <Route exact path="/Req" element={<Request />}></Route>

//     <Route exact path="/Member" element={<Member />}></Route>
//   </Routes>
// </BrowserRouter>;

const factStationAddress = "0x6c4CC2ed07432cDaFA85D967A2aFd2254836532a";
// let cidNumber;
let postId;
let status;
// let yesVotes;
// let noVotes;
function App() {
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function createPost() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        factStationAddress,
        FactStation.abi,
        signer
      );
      //
      const txn = await contract.createPost("abcdef", 0, 0, 0);
      await txn.wait();
    }
  }

  async function getPost() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        factStationAddress,
        FactStation.abi,
        signer
      );
      //
      const txn = await contract.getPost(1);
      await txn.wait();
      // cidNumber = txn.CID;
      // postId = txn.postId;
      // status = txn.status;
      // console.log(cidNumber);
      return txn;
    }
  }

  async function buyTokens() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        factStationAddress,
        FactStation.abi,
        signer
      );
      //
      let numberOfTokens = document.getElementById("hi").value;
      const txn = await contract.buyTokens(numberOfTokens, {
        value: numberOfTokens * 5,
      });
      await txn.wait();
    }
  }

  async function voting() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        factStationAddress,
        FactStation.abi,
        signer
      );
      //from html
      const txn = await contract.vote(postId, status);
      await txn.wait();
    }
  }

  async function decision() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        factStationAddress,
        FactStation.abi,
        signer
      );
      //from html
      const txn = await contract.decision(postId);
      await txn.wait();
    }
  }

  async function getTotalPosts() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        factStationAddress,
        FactStation.abi,
        signer
      );
      //from html
      const txn = await contract.getTotslPosts(postId);
      await txn.wait();
      return txn;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getPost}>get Post</button>
        <button onClick={createPost}>create Post</button>
      </header>
    </div>
  );
}

export default App;
