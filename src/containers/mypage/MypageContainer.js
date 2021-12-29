import React from 'react'
import Footer from '../../components/main/Footer';
import NavigationBar from '../../components/main/NavigationBar'
import Headline from "../../components/mypage/Headline";
import MypageList from "../../components/mypage/MypageList";
import Template from "../../components/mypage/MypageTemplate";

export default function MypageContainer() {
    return (
        <div>
            
            <Template>
                <Headline />
                <MypageList />    
            </ Template>
            <Footer />
        </div>
    )
}
