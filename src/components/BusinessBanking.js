import React, {Component} from 'react';
import { homeObjTwo } from './Data';
import HeroSection from './HeroSection';


class BusinessBanking extends Component {
    render(){
        
    
    return (
        <div>
            <HeroSection {...homeObjTwo} />
        </div>
    )
    }
}

export default BusinessBanking;