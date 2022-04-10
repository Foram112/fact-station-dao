
import Button from 'react-bootstrap/Button';
import React,{Component} from 'react';
import { useState,useEffect} from 'react';
import { FileUpload } from 'react-ipfs-uploader';
import { ethers } from "ethers";
import FactStation from "../artifacts/contracts/FactStation.sol/FactStation.json";


const factStationAddress = "0x6c4CC2ed07432cDaFA85D967A2aFd2254836532a";




function FileUploader(){


const createpost = async(myUrl) =>{ 
    if (typeof window.ethereum !== "undefined") {
        // await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          factStationAddress,
          FactStation.abi,
          signer);
          const tx = await contract.createPost(myUrl, 0, 0, 0);
          tx.wait();
          console.log(myUrl);
          setFileUrl('')
      }
    }
    
const [fileUrl, setFileUrl] = useState('')


    return (
        <div className='container'>
                  <div className='box' >
            <FileUpload setUrl={setFileUrl} />
            FileUrl : <a
                href={fileUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {fileUrl}
            </a>
        </div>
     <Button className='btnSubmit' variant="dark" onClick={createpost(fileUrl)}>Submit</Button>
    </div>
    )

};

export default FileUploader;

