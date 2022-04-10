
import Wallet from "./Wallet";
import Photo1 from './photo/dog.jpg';
import Photo2 from './photo/husky.jpeg';
import Photo3 from './photo/monkey.jpeg';
import Photo4 from './photo/ocean.jpg';
import Navigation from './navigation';

const Dashboard = () =>{

    const imageClick = (selectedImg) =>{
        this.setState({ selectedImg }) // Save the selected image in this.state
      }
    return(
        <>

        <Navigation/>
        <Wallet/>

        <div className="main-dash">
            <div className="first">
               {/* <div className="selectedPhoto"><img className="photo1" alt="history"></img></div>
               <div className="selectedPhoto"><img className="photo2" alt="history"></img></div>
               <div className="selectedPhoto"><img className="photo3" alt="history"></img></div>
               <div className="selectedPhoto"><img className="photo4" alt="history"></img></div> */}
             <img src={Photo1} onClick={()=>imageClick(1)} alt="Logo" />
            <img src={Photo2} onClick={()=>imageClick(2)}alt="Logo"  />
            <img src={Photo3} onClick={()=>imageClick(3)} alt="Logo" />
            <img src={Photo4} onClick={()=>imageClick(4)} alt="Logo" />
            </div>


            <div className="second">
            <div className="newDiv">
                {/* <img src={`images/${this.state.selectedImg}.jpg`} alt="Logo" /> */}
                 </div>
            </div>
            <div className="third">
                <div className="card1">
                  <p>Your Rewards</p>
                </div>
                <div className="card2">
                <p>Your History</p>    
                </div>
            </div>
        </div>
    </>
    )
}

export default Dashboard;