import React from 'react'
import "./ProductPage.css"
import prod1 from "../assests/prod1.jpg"
import prod2 from "../assests/prod2.jpg"
import prod3 from "../assests/prod3.jpg"
import prod4 from "../assests/prod4.png"

const ProductPage = () => {
  return (
    <>
    <div className='product_items'>
        <div>
            <h1>Mine-To-Mill-To-Mine Optimization</h1>
            <p>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</p>
            <a href="https://ntwist.com/mine-to-mill-to-mine-optimization/" ><button className='btn'>Read More</button></a>
        </div>
        <div>
            <img src={prod1} alt="" />
        </div>
    </div><br/>
    <div className='product_items'>
        <div>
            <img src= {prod2} alt="" />
        </div>
        <div>
            <h1>Sustainability</h1>
            <p>Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.</p>
            <p>With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.</p>
             <a href="https://ntwist.com/project/sustainability-assistant/" ><button className='btn'>Read More</button></a>
        </div>
    </div> <br/> <br/>
    <div className='product_items'>
        <div>
            <h1>Mineral Processing</h1>
            <p>NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</p>
             <a href="https://ntwist.com/mine-to-mill-to-mine-optimization/" ><button className='btn'>Read More</button></a>
        </div>
        <div>
            <img src= {prod3} alt="" />
        </div>
    </div> <br/><br/>
    <div className='product_items'>
        <div>
            <img src={prod4} alt="" />
        </div>
        <div>
            <h1>Oil & Gas</h1>
            <p>Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. </p>
            <p>NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.</p>
             <a href="https://ntwist.com/mine-to-mill-to-mine-optimization/" ><button className='btn'>Read More</button></a>
        </div>
    </div> <br/><br/>
    
    
    
    </>
  )
}

export default ProductPage