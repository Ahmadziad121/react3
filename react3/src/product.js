import Car from "./car";
import React from "react";
import toyota from './TOY.webp';
import ford from './2022_ford_edge_angularfront.jpg';
import bm from './BMW.jpg';
import mer from './mers.jpg';


function Products() {
    return(
        <div className='s'>
        <div>
        <Car src={toyota} discription='Toyota is world-famous as the manufacturer of high-quality, high-value cars' color='blue' brand='toyota'/>
        <Car src={ford} discription=' design, and engineering, its no surprise that Ford always comes out ahead among other names in the auto industry' color='black' brand='ford'/>
        </div>
        <div>
        <Car src={bm} discription=' high-performance engines and precise handling, which combine to create a thrilling driving experience' color='blue' brand='BMW'/>
        <Car src={mer} discription='Mercedes Benzs reputation for reliability, quality, luxury, performance, safety, and advanced technology sets it apart from many other car brands. ' color='black' brand='mercedes benz'/>
        </div>
        </div>
    );
}

export default Products;
