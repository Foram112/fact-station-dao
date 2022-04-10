
import Wallet from './Wallet';
import '../App.css';
import Navigation from './navigation';

const Request = ()=>{
 return(
     <>
      <Navigation/>
     <Wallet />
    <div className='cards'>
     <div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
        <div> <img className='img'></img></div>
        <div className='status'>Status</div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Card 2</h3>
      <div> <img className='img'></img></div>
      <div className='status'>Status</div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 3</h3>
      <div> <img className='img'></img></div>
      <div className='status'>Status</div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 4</h3>
      <div> <img className='img'></img></div>
      <div className='status'>Status</div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <h3>Card 5</h3>
      <div> <img className='img'></img></div>
      <div className='status'>Status</div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Card 6</h3>
      <div> <img className='img'></img></div>
        <div className='status'>Status</div>
    </div>
  </div>
</div>

</div>
     </>
 )
}

export default Request;