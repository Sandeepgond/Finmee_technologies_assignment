import React from 'react'
import "./UpperSection.css"
import systeminage from "../assests/systemimage.png"

const UpperSection = () => {
  const countries = [
    'German',
    'Arabic',
    'Chinese',
    'Dutch',
    'French',
    'Italian',
    'Russian',
    'Spanish'
  ];
  return (
    <>
    <div className='factory_div'>
      <img className='factory_img' src="https://media.istockphoto.com/id/582256640/photo/oil-refinery-chemical-petrochemical-plant.jpg?s=612x612&w=0&k=20&c=BEdsHVe2vUfzRTb9KcsCS_tCH6_R_nKLKkOQCht8AKo=" alt="factory logo"/>
      <div className='overlapping_box'>
         <div>
            <h1>Data-powered solutions for industrial Excellence.</h1>
            <a href="https://ntwist.com/mine-to-mill-to-mine-optimization/" ><button>Read More</button></a>
         </div>
         <div>
            <img className='system_img' src={systeminage} alt="" />
         </div>
      </div>
      <div className='country_box'>
            <select id='countries' name='countries'>
              {countries.map((country, index) => (
                <option key={index} value={country.toLowerCase()}>
                  {country}
                </option>
              ))}
            </select>
          </div>
    </div>
    </>
  )
}

export default UpperSection