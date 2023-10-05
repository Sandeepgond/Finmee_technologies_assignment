import React from 'react'
import "./UpperSection.css"

const UpperSection = () => {
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
            <img className='system_img' src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
         </div>
      </div>
      {/* <select className='language_selection'>
          <option>Arabic </option>
          <option>Chinees</option>
          <option>Dutch</option>
          <option>French</option>
          <option></option>
      </select> */}
    </div>
    </>
  )
}

export default UpperSection