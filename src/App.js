import './App.css';
import Header  from './Header';
import Yarns from './Yarns';
import Footer from './Footer';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GroupedYarns from './GroupedYarns';
import Nav from './Nav';
import NotFound from './NotFound';



function App() {

  const [selectedSize, setSize] = useState (JSON.parse(localStorage.getItem('selectedYarn')) || "small")
    const [yarns, setYarns] = useState (JSON.parse(localStorage.getItem('yarnList')) || [
        {id:1,fullName:"Robin fine",colour:"black",weight:"50 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"small"},
        {id:2,fullName:"Robin fine",colour:"white",weight:"50 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"small"},
        {id:3,fullName:"Robin fine",colour:"red",weight:"50 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"small"},        
        {id:4,fullName:"WinterKing",colour:"black",weight:"50 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"medium"},
        {id:5,fullName:"WinterKing",colour:"white",weight:"50 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"medium"},
        {id:6,fullName:"WinterKing",colour:"red",weight:"50 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"medium"},        
        {id:7,fullName:"Robin Thick",colour:"black",weight:"100 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"superChunky"},
        {id:8,fullName:"Robin Thick",colour:"white",weight:"100 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"superChunky"},
        {id:9,fullName:"Robin Thick",colour:"red",weight:"100 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"superChunky"},        
        {id:10,fullName:"Butterfly",colour:"black",weight:"100 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"superChunky"},
        {id:11,fullName:"Butterfly",colour:"white",weight:"100 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"superChunky"},
        {id:12,fullName:"Butterfly",colour:"red",weight:"100 g",madeIn:"Kenya",material:"100% Acrylic",origin:"local",size:"superChunky"},        
        {id:13,fullName:"Milk Cotton",colour:"black",weight:"50 g",madeIn:"China",material:"80% Cotton",origin:"imported",size:"chunky"},
        {id:14,fullName:"Milk Cotton",colour:"white",weight:"50 g",madeIn:"China",material:"80% Cotton",origin:"imported",size:"chunky"},
        {id:15,fullName:"Milk Cotton",colour:"red",weight:"50 g",madeIn:"China",material:"80% Cotton",origin:"imported",size:"chunky"},
        



    ]);

    useEffect(() => {
      localStorage.setItem('yarnList',JSON.stringify(yarns))
    },[yarns]);

    useEffect(() => {
      localStorage.setItem('selectedSize',JSON.stringify(selectedSize))
    },[selectedSize]);

    function handleSizeSelectionChange (event)
    {
        console.log(event.target.value);
        setSize(event.target.value);
    }

    function handleYarnCardClick (event) {
        const transformedYarns = yarns.map((yarn) => yarn.id === parseInt(event.curentTarget.id)
                                          ?(yarn.size ===selectedSize)?{...yarn, size:''}:{...yarn,size: selectedSize}
                                          :yarn);
        setYarns(transformedYarns);
    }
  return (
    <div className="App">
      <Router>
        <Nav />
        <Header selectedSize={selectedSize}
                yarnSizeCount={yarns.filter((yarn) => yarn.size === selectedSize).length}
        
        />
        <Routes>
          <Route path='/'
            element = {
              <Yarns yarns={yarns}
              selectedSize={selectedSize}
              handleYarnCardClick={handleYarnCardClick}
              handleSizeSelectionChange={handleSizeSelectionChange}
            />} >
          </Route>

        <Route path='GroupedYarns' element= {<GroupedYarns yarns = {yarns} selectedSize = {selectedSize} setSize = {setSize} />}>
          </Route>

          <Route path='*' element= {<NotFound />}>
          </Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;