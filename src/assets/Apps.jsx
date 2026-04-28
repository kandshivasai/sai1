import Counter from "../component/Counter";

 export default function Apps(plate){
    return(
        <>
        
    <div style={{ height:"380px",width:"260px" ,borderRadius:"10px", backgroundColor:"lightpink",textAlign:"center",paddingTop:"40px",}}>  
      <img src={plate} alt="" style={{
            width: "150px",
            height: "150px",
            borderRadius: "50px", }}
            
            
          />
      <h6>Zomato</h6>
      <p  style={{padding:"px"}}>Lorem ipsum dolor sit amet 
        <br>
        </br>Totam, velit est consequuntur  <br></br>
        maxime tenetur tempore</p><br>
        </br>
      <button type="button" style={{backgroundColor:"pink",borderRadius:"10px"}}>submit</button>
      
    </div>
        </>
    )
}

