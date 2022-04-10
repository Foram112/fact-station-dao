import React from 'react'
import Navigation from '../components/navigation';
import Image1 from '../images/1.png';
import Image2 from '../images/2.png';
import Image3 from '../images/3.png';
import Image4 from '../images/4.png';
import Bckimage1 from '../images/new-01.png';
import Bckimage2 from '../images/new-02.png';
import Bckimage3 from '../images/new-03.png';
import Bckimage4 from '../images/new-04.png';
import Bckimage5 from '../images/new-05.png';




function mainpage()
{
return(


        <div className='Main'>

             
                <Navigation/>
                <img style={{width:"150px"}} className="Object" id='obj1' src={Bckimage1} alt="Logo" />
                 <img style={{width:"110px"}} className="Object" id='obj2' src={Bckimage2} alt="Logo" /> 
                 <img style={{width:"200px"}} className="Object" id='obj3' src={Bckimage3} alt="Logo" />

                 <img style={{width:"200px"}} className="Object" id='obj4' src={Bckimage4} alt="Logo" />
                 <img style={{width:"200px"}} className="Object" id='obj5' src={Bckimage5} alt="Logo" />
            
              
              
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
               
                <div className='frontpage glow'>
                    
                    <div className='maincontent'>
                    <h3>Can you see the truth in what you read?</h3>
                    <h2> With<span>FactStationDAO</span> you can!</h2>
                    </div>
                    

                    <div className='maincontent'>
                    </div>

                </div>


                <div className='learnpage'>
                    
                    <div className='learncontent'>
                    <h3>If you’re a social media DAO, get your content verified by us. If you’re just any other DAO, we can still help you verify your proposals.
                    </h3>
                    <h2> FactStationDAO is designed to collect information from your DAO platform and get it verified by consulting a group of experts. 

                    We have experts for each topic who help with verification and authentication of information
                    </h2>
                    </div>


                </div> 


{/* featured */}
<div className='tag'>
            <h1>Our Features</h1>
            <div className='featured'>

            
    
                 <div dataaos="faderight" className='featuredcard'>
                
                      <div className='featuredicon'>
                      <img style={{width:"150px"}} src={Image1} alt="Logo" />
                      </div>

                      <div className='featuredcontent'>
                     <h3>Eliminates Uncertainty</h3>
                      </div>

                </div>
{/*  */}
                <div className='featuredcard'>
                
                <div className='featuredicon'>
                <img style={{width:"150px"}} src={Image2} alt="Logo" />
                </div>

                <div className='featuredcontent'>
                <h3>No Filtered or False Information</h3>
                </div>

              </div>
 {/*  */}

              <div className='featuredcard'>
                
                <div className='featuredicon'>
                <img style={{width:"150px"}} src={Image3} alt="Logo" />
                </div>

                <div className='featuredcontent'>
                <h3>No Central Point Of Failure </h3>
                </div>

              </div>
 {/*  */}
 

              <div className='featuredcard'>
                
                <div className='featuredicon'>
                <img style={{width:"150px"}} src={Image4} alt="Logo" />
                </div>

                <div className='featuredcontent'>
                <h3>Reliable Sources and Information </h3>
                </div>

              </div>
          </div>
          </div>
          
{/* featured */}


        <div className='boxes'>

                      <div className='Mainbox'>

        {/* row starts */}
                          <div className='row1'>
                              <div className='content'>
                              <h1>Factual Accuracy</h1>
                            <h3>Facts backed by industry experts </h3>  
                              <p>Before any information consumes your platform we verify if it is accurate or not.</p>

                              </div>
                              {/* <div className='boxill'>
                               <img style={{width:"150px"}} src={Image1} alt="Logo" /> 
                             
                             </div> */}

                          </div>

      {/* row starts */}

      <div className='row2'>

                            {/* <div className='boxill'>
                              <img style={{width:"150px"}} src={Image1} alt="Logo" />
                          </div> */}
                            <div className='content'>
                              <h1>Immune to breaches 
</h1>
                            <h3>Made using Smart Contracts </h3>  
                              <p>FactStationDAO involves pre-determined smart contracts to lay some ground rules and regulations. 
</p>

                              </div>
                              

                          </div>

{/* row starts */}

<div className='row3'>
                            <div className='content'>
                              <h1>Unfiltered Truth 
</h1>
                            <h3>Autonomous and Independent
 </h3>  
                              <p>There are no third party organisations or individuals controlling the functioning, therefore the experts cannot be influenced to make a decision. 

</p>

                              </div>
                              {/* <div className='boxill'>
                              <img style={{width:"150px"}} src={Image1} alt="Logo" />
                             </div> */}

                          </div>



                      </div>







                  </div>
         
  </div>

);

  }


export default mainpage;