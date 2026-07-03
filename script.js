const navToggle=document.querySelector(".nav-toggle");const mainNav=document.querySelector("#mainNav");if(navToggle&&mainNav){navToggle.addEventListener("click",()=>{const isOpen=mainNav.classList.toggle("open");navToggle.setAttribute("aria-expanded",String(isOpen));});mainNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mainNav.classList.remove("open")));}

const prices={
  newtownabbey:{bfs:38,bhd:28},
  belfast:{bfs:42,bhd:25},
  antrim:{bfs:25,bhd:48},
  lisburn:{bfs:55,bhd:42},
  bangor:{bfs:70,bhd:38},
  carrickfergus:{bfs:52,bhd:35},
  ballymena:{bfs:48,bhd:72}
};

const quoteForm=document.querySelector("#quoteForm");
const quoteResult=document.querySelector("#quoteResult");
if(quoteForm&&quoteResult){
  quoteForm.addEventListener("submit",event=>{
    event.preventDefault();
    const pickup=document.querySelector("#pickupArea").value;
    const airport=document.querySelector("#airport").value;
    const passengers=Number(document.querySelector("#passengers").value || 1);
    if(!pickup||!airport){quoteResult.textContent="Please choose a pickup area and airport.";return;}
    let price=prices[pickup][airport];
    if(passengers>=4) price+=5;
    quoteResult.innerHTML=`Estimated fare: <strong>£${price}</strong><br><small>This is a guide price. Final price should be confirmed when booking.</small>`;
  });
}
