import React from 'react'
import Footer from '../../components/main/Footer';
import NavigationBar from '../../components/main/NavigationBar'
<<<<<<< HEAD:client/src/containers/mypage/MypageContainer.js
import Header from "../../components/mypage/Header";
import MypageList from "../../components/mypage/MypageList";
import Template from "../../components/mypage/Template";
=======
import Headline from "../../components/mypage/list/Headline";
import MypageList from "../../components/mypage/list/MypageList";
import Template from "../../components/mypage/list/Template";
>>>>>>> 37e08a1d1a48966ec5fdc46a7d1f9eeffabba748:src/containers/mypage/MypageContainer.js

export default function MypageContainer() {
    return (
        <div>
            <NavigationBar />
            <Template>
                <Header />
                <MypageList />    
            </ Template>
            <Footer />
        </div>
    )
}
