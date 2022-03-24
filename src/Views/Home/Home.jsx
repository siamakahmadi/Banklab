import React from 'react'
import './Home.scss';
import Navigation from '../../Components/Navigation/Navigation.jsx'
export default function Home() {
  return (
    <>
      <div className="container">

        <Navigation />
        
        <div className="hero">
          <div className="leftSection">
            <div className="tagline">
              <div className="starLogo">
                <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 0L17.7555 10.0193L28.2903 10.0193L19.7674 16.2115L23.0229 26.2307L14.5 20.0385L5.97711 26.2307L9.23257 16.2115L0.709681 10.0193L11.2445 10.0193L14.5 0Z" fill="#C4C4C4" />
                </svg>
              </div>
              <p className="text">Transfer Money with new area </p>
            </div>
            <div className="title">Transfer Money with <span>new area banking</span></div>
            <div className="describe">
              <p>Transfer Money with new area bankingTransfer Money with new area bankingTransfer Money with new area bankingTransfer Money with new area banking</p>
            </div>
          </div>
          <div className="rightSection">
            
          </div>
        </div>
      </div>
    </>
  )
}
