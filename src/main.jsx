import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from './assets/Apps'

// function react1(){
//   return "hello wirld"
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{textAlign:"center"}}>
      <h1>enternal </h1>
      <h4>POWERING INDIA’S1
    CHANGING LIFESTYLESs</h4>
    </div>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    {Apps("https://b.zmtcdn.com/data/o2_assets/d1eee2be61cf47e2332cb7c49475c0981739777714.png")}
    {Apps("https://b.zmtcdn.com/data/o2_assets/071cb96db84f20eea3a39804e113bdee1739777655.png")}
    {Apps("https://b.zmtcdn.com/data/o2_assets/b750e7c0113f10cc6b3cec658c7229d71770799109.png")}
    {Apps("https://b.zmtcdn.com/data/o2_assets/9207cd0fc68c4ac55cfd3bfa00c02a351739777699.png")}
    

    </div>

  </StrictMode>,)
