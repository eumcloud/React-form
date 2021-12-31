import React from 'react'
import Footer from '../../components/main/Footer';
import NavigationBar from '../../components/main/NavigationBar'
import Headline from "../../components/mypage/list/Headline";
import MypageList from "../../components/mypage/list/MypageList";
import Template from "../../components/mypage/list/Template";

export default function MypageContainer() {
    return (
        <div>
            <NavigationBar />
            <Template>
                <Headline />
                <MypageList />    
            </ Template>
            <Footer />
        </div>
    )
}
