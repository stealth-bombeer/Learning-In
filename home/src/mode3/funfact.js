import {React,useEffect,useState} from 'react'
import axios, * as others from 'axios';
import { Link } from 'react-router-dom';
import'./funfact.css'

// const options = {
//     method: 'GET',
//     url: 'https://fun-fact.p.rapidapi.com/json',
//     headers: {
//       'X-RapidAPI-Key': '830abd8e42msh8137e948f0b199fp1b45ecjsn13fdaf90a884',
//       'X-RapidAPI-Host': 'fun-fact.p.rapidapi.com'
//     }
//   };

const options = {
    method: 'GET',
    url: 'https://facts-by-api-ninjas.p.rapidapi.com/v1/facts',
    params: {limit: '30'},
    headers: {
      'X-RapidAPI-Key': '830abd8e42msh8137e948f0b199fp1b45ecjsn13fdaf90a884',
      'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'
    }
  };

  const option = {
    method: 'GET',
    url: 'https://news-api14.p.rapidapi.com/search',
    params: {
      q: 'computer',
      country: 'us',
      language: 'en',
      pageSize: '20',
      publisher: 'cnn.com,bbc.com'
    },
    headers: {
      'x-rapidapi-subscription': 'ultra',
      'x-rapidapi-proxy-secret': 'c02cea90-4588-11eb-add9-c577b8ecdc8e',
      'x-rapidapi-user': 'suprikurniyanto',
      'X-RapidAPI-Key': '830abd8e42msh8137e948f0b199fp1b45ecjsn13fdaf90a884',
      'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
    }
  };
  
 

const FunFact = () => {
   const [facts,setFacts]= useState([])
   const [fact,setFact]= useState('')
   const [count,setCount]=useState(1)
   const [news,setNews]=useState([]);
   const [counter, setCounter] = useState(0);
  
   useEffect(()=>{
    axios.request(options).then(function (response) {
        console.log(response.data);
        setFacts(response.data)
        setFact(response.data[0].fact)
    }).catch(function (error) {
        console.error(error);
    });

   },[])

   useEffect(()=>{
    axios.request(option).then(function (response) {
      console.log(response.data.articles);
      setNews(response.data.articles);
    }).catch(function (error) {
      console.error(error);
    });
   },[counter])
   
   
   
  //console.log(fact)
  //console.log(count)
   //console.log(facts[0])
   const handleNext = (e) => {
    e.preventDefault();
    if(count===29)
    {
      setCount(-1)
    }
    setCount(count+1)
   
    setFact(facts[count].fact)
    console.log(count)
  };
  const handlePrev = (e) => {
    e.preventDefault();
    if(count<2)
    {
      setCount(29)
    }
    setCount(count-1)
    
    setFact(facts[count].fact)
    console.log(count)
  };


return ( 
    
    <div className='bg-white'>
    <div class="mt-10 ">
    <div class=" rounded-lg bg-white px-4  shadow-lg">
  <div className="stage ">
  <div className="scene ">
    <div className="halo ">
      <i />
      <span className="halo-star" />
      <span className="halo-star" />
      <span className="halo-star" />
      <i />
      <i />
      <i />
    </div>
    <div className="lantern">
      <div className="lantern-handle" />
      <div className="lantern-inner">
        <div className="lantern-chain" />
        <div className="lantern-head" />
        <div className="lantern-body">
          <div className="lantern-spark" />
          <div className="lantern-spark" />
          <div className="lantern-spark" />
          <div className="lantern-flame" />
        </div>
        <div className="lantern-base" />
      </div>
    </div>
    <div className="planets">
      <div className="planet" />
      <div className="planet" />
      <div className="planet" />
      <div className="planet" />
      <div className="planet" />
      <div className="planet" />
    </div>
  </div>
  <div className='ml-14'>
  <div className='fonts'>
    <div className='font-aboreto text-6xl font-black text-yellow-400'>
    FUN FACTS!!
    </div>
  </div>
  <div id="animation-carousel" className="relative" data-carousel="static">
       
       {/* Slider controls */}
       <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrev}>
         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
           <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
           <span className="sr-only">Previous</span>
         </span>
       </button>
       <div className="relative h-56 overflow-hidden rounded-lg md:h-96 font-serif italic  font-medium  text-orange-500 flex mt-10 ml-24 text-4xl justify-items-center">
         {/* Item 1 */}
         
           <h6 className='mt-32'>{fact}</h6>
        
         
       </div>
       <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNext} >
         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
           <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
           <span className="sr-only">Next</span>
         </span>
       </button>
     </div>

  {/* <div class="font-serif italic  font-medium  text-orange-500 flex mt-10 ml-32 text-4xl justify-items-center ">
      <h6>{fact}</h6>
  </div> */}
      {/* <div>
      <button  className="mt-10 mb-10 px-4 ml-4 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"onClick={handleNext}>
      Next
       </button>
    
   </div> */}
   </div>
</div>

   
    
   </div>
   </div>
   <div>
   <div class=" w-full mt-10">
    <div class=" rounded-lg bg-white  px-10 shadow-lg">
    
    <div class="flex  justify-center mt-10  ">
              <img src="https://yt3.ggpht.com/a/AATXAJxu3xHexNk-ICMClSdMVan3IBEwvqjuJOB9aQ=s900-c-k-c0xffffffff-no-rj-mo" className='w-96'  />
    </div>
    <div>
      <h6>Click on the topic you want to read</h6>
    </div>
    <div class="flex flex-col text-xl divide-y gap-4 divide-dashed mt-10 ">  
  {news.map(article =>(
    <a href={article.url} target="_blank" rel="noopener noreferrer" class="text-black font-serif">
      <h7 className=" hover:text-3xl mt-10 ">{article.title}</h7>
    </a>
  ))}
</div>
   <div>
  <button   className="inline-block mt-10 mb-10 px-4 ml-4 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
      onClick={() => setCounter(counter + 1)}>Next</button>
  </div>
  </div>
   </div>
   </div>
   </div>
   
   
 );

}
export default FunFact;