import React, {Component} from 'react';
import { homeObjThree } from './Data';
import HeroSection from './HeroSection';

class PersonalBanking extends Component {
    render(){
        
    
    return (
        <div>
            <HeroSection {...homeObjThree} />
        </div>
    )
    }
}

export default PersonalBanking;
