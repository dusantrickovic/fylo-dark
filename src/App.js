import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Icons from './components/Icons';
import productiveillustration from './imgs/illustration-stay-productive.png';
import arrow from './imgs/icon-arrow.svg';
import { useState, useEffect } from 'react';
import Testimonials from './components/Testimonials';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  
  // useEffect hook retrieves the data from the JSON file and assigns it to the data state
  useEffect(() => {
  let res = require('./components/testimonials.json');
  //console.log(res);
  setData(res);
  //console.log(data);
  },[]);


  return (
    <div className="App bg-maincoldark">
        <Header />      
        <main>
          <Banner />
          <Icons />
          <section className="flex bg-maincoldark relative -top-64 xl:-mt-12 md:mt-20 md:-mb-16 md:-top-40 justify-center w-full">
              <img src={productiveillustration} className="w-1/3 h-1/3" />
              <div className="flex flex-col ml-10 mt-14 w-1/3">
                  <h1 className="font-bold text-3xl w-2/3">Stay productive, wherever you are</h1>
                  <p className="mt-4">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p> <br /> 
                  <p className="-mt-3"> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <br />
                  <div className="flex cursor-pointer  text-sm pb-0 border-b-2 text-green-400 hover:text-green-300 border-green-400 hover:border-green-300 w-36">
                      <button className="text-left  pb-0.5  text-sm cursor-pointer w-36">See how Fylo works</button>
                      <img src={arrow} className="w-4 h-4 font-thin top-1 relative" />                
                  </div>
              </div>
        </section>
        <Testimonials data={data} />
        <GetStarted />
        <Footer />
      </main>
    </div>
  );
}

export default App;
