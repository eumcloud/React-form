import React from 'react'
import TemplateBlock from "../../compontents/Template";
import GridLayouts from "./GridLayout";
import Navi from "../../components/main/NavigationBar";
import Footer from "../../components/main/Footer";

const Home = ()=>{
    return(
        <div>
            <TemplateBlock>
                <Navi />
                <GridLayouts />
                <Footer />
            </TemplateBlock>
        </div>
    )
}
export default Home;