let quoteN=document.querySelector(".quote")
let authorName=document.querySelector(".author");


let api_url="https://qapi.vercel.app/api/random"


async function getquote(url) {

    try {
        let response=await fetch(url,{
            mode:"cors"
        });
        if (!response.ok) {
           console.log(`HTTP error! status: ${response.status}`);
        }
        let data= await response.json();
         quoteN.innerHTML=data.quote;
         authorName.innerHTML="--"+data.author;
   
          
    } catch (error) {
       console.log(error);
       
    }
  
    
};

document.querySelector("button").addEventListener("click",()=>{
    authorName.innerHTML="";
    quoteN.innerHTML="";
    animation();
    getquote(api_url);
})


getquote(api_url);

const button=document.querySelector("button");

let animation=()=>{

    gsap.from(".quote",{x:50});
    gsap.from(".author",{x:-40}).delay(0.2);

};
animation();

