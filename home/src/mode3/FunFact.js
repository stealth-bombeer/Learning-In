import {React,useEffect,useState} from 'react'
import axios, * as others from 'axios';
import { Link } from 'react-router-dom';


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
   
   
   const handleNext = (e) => {
    e.preventDefault();
    setCount(count+1)
    setFact(facts[count].fact)
    //console.log(count)
  };
  //console.log(fact)
  //console.log(count)
   //console.log(facts[0])


return ( 
    <div>
      <div>
   <p>Hii</p>
   <p>Hii</p>
   <p>Hii</p>
   <h2>{fact}</h2>
   <button onClick={handleNext}>
    Next
   </button>
   </div>
   <div>
    <h2>Top Headlines</h2>
    <div>
  {news.map(article =>(
    <a href={article.url} target="_blank" rel="noopener noreferrer">
    <h2>{article.title}</h2>
  </a>
  ))}
  <button onClick={() => setCounter(counter + 1)}>Next</button>
  </div>
   </div>
   </div>
 );

}
export default FunFact;