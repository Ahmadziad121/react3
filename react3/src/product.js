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
        <Car src={toyota} discription='good old toyota' color='blue' brand='toyota'/>
        <Car src={ford} discription='idk i ran out of ideas' color='black' brand='ford'/>
        </div>
        <div>
        <Car src={bm} discription='a classic' color='blue' brand='BMW'/>
        <Car src={mer} discription='a better classic' color='black' brand='mercedes benz'/>
        </div>
        </div>
    );
}

export default Products;