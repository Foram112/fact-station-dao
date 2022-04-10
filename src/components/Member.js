import React, { Component } from 'react'
import Navigation from '../components/navigation';
function member(){

    return (

          
                
      <div className='memberform'>

            <Navigation/>
            <form className='form'>
            <label>
                Enter No. of Tokens
                <br/>
                <input className=" inputform" type="text" name="name" />
            </label>
            <br/>
            <input className=" submitform" type="submit" value="Submit" />
            </form>
      </div>
    )
  }

export default member;