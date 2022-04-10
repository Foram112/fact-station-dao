
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Dashboard from './Dashboard';
import Request from './Request';
const Wallet = ()=>{

    return(
        <>
        {/* NAVBAR | KEY | BUTTON */}
            <div className='keybox'>
                {/* <div className='field'>
                <input type="text" id="address" className='textfield'/>
                    <button className='btndash'>Click Me</button>
                </div> */}
                 <div className='btnbox'>           
                 <Link to={"/dash"}><Button  className='daodash' variant="light">DAO Dashboard</Button>{' '}</Link>
                    <Link to={"/Req"}><Button  className='request'variant="light">Your Request</Button>{' '}</Link>
                </div>
            </div>



    {/* DASHBOARD */}



</>
    )
}

export default Wallet;