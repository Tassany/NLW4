import '../styles/global.css'
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [level,setLevel] = useState(1)
  function levelUp(){
    setLevel(level + 1);
  }
  
  return (
    <Component {...pageProps} />

)}

export default MyApp
