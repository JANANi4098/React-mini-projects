import { useState } from "react"
const Qrcode = () => {
  const [img,setImg]=useState("");
  const [loading,setLoading]=useState(false);
  const [qrdata,setqrdata]=useState("https://tutorjoes.in/");
  const[qrsize,setqrsize]=useState("150");
  async function generateQR(){
    setLoading(true);
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
      setImg(url);
    }
    catch(error){
      console.error("Error generating url", error);
    }
    finally{
      setLoading(false);
    }
  }
  function downloadQR(){
   fetch(img).then((response)=>response.blob())
  .then((blob)=>{
   const link=document.createElement('a');
   link.href=URL.createObjectURL(blob);
   link.download="qrcode.png";
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
  }).catch((error)=>{
    console.log("Error occured while downloading",error);
  })
  }
    return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {loading&&<p>Please wait...</p>}
       {img&& <img  src={img} className="qr-code-image"/>}
        <div>
            <label htmlFor="datainput" className="input-label" placeholder="Enter the data for QR">Enter the data</label>
        <input type="text" value={qrdata} id="datainput" onChange={(e)=>setqrdata(e.target.value)}></input>
        <label htmlFor="sizeinput" className="input-label" placeholder="Enter the size for QR">Enter the size(Eg:150)</label>
        <input type="text" value={qrsize} id="datainput" onChange={(e)=>setqrsize(e.target.value)}></input>
        <button className="generate-button" onClick={generateQR} disabled={loading}>GENERATE</button>
        <button className="download-button" onClick={downloadQR}>DOWNLOAD</button>
        </div>
   
    </div>
  )
}

export default Qrcode
