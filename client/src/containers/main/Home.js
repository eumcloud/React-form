import React from 'react'
import TemplateBlock from "../../components/main/Template";
import GridLayouts from "./GridLayout";
import Navi from "../../components/main/NavigationBar";
import Footer from "../../components/main/Footer";
import Product from "../product/Product";

const Home = ()=>{
    return(
        <div>
            <TemplateBlock>
                <Navi />
                  <GridLayouts />
                  <Product />
            </TemplateBlock>
        </div>
    )
}
export default Home;