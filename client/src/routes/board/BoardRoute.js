import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "../../components/board/Layout";
import BasicTable from "../../components/board/ReactList";

export default function BoardRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/board" element={<Layout />}>
                    <Route path="list" element={<BasicTable />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}