import React from "react";
import {useEffect , useState}from 'react';
function App() {
  const[loading, setloading]=useState(true);
  const [coinlist , setcoinlist]=useState([]);
  useEffect(()=>{
  fetch('https://api.coinpaprika.com/v1/tickers'
  ).then((response)=>response.json())
  .then((json) => setcoinlist(json), setloading(false))},[]
  )
  console.log(coinlist)
  return (
    <div>
      {loading ? <h1>loading....</h1> : null}
      <center style={{
        width:'100%',
        height:'100px',
    
      }}>
      <h1>Coin Viewer</h1>
      <h5>코인의 시세를 확인하세요! 구르트</h5>
      <hr/>
      <br/>
      </center>
      {coinlist.map((AP)=>{
        return (
          <center>
          <div style={{fontSize:'20px',}}>{AP.name}({AP.symbol})</div>
          <span style={{fontSize:'10px',}}>{AP.quotes.USD.price}$</span>
          <span style={{
        width:'100',
        height:'100',
        fontSize:'5px',
        color:'white',
        backgroundColor: 'tomato',
        borderRadius:'5px',
      }}>{AP.quotes.USD.percent_change_24h}%</span>
          </center>
        )
      })}
    </div>
  );
}

export default App;
