import { useState, useEffect } from 'react'
import Stock from './pages/Stock/Stock'
import Main from './pages/Main/Main'





export default function App(){
    return (
        <div className='App'>
            <Main/>
            <Routes>
                <Route path ="/" element={<Main/>}></Route>
                <Route path ="/stock"
                element={<Stock/>}/>
                <Route path="/price/:symbol" element={<Price/>}/>
            </Routes>
        </div>
    )
}