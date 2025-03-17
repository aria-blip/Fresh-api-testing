import { denoPlugins } from "$fresh/src/build/deps.ts";
import { FreshContext ,RouteContext,Handlers, PageProps} from "$fresh/server.ts";
import { Button } from "../components/Button.tsx";
import { ComponentChildren } from "preact";
import { useSignal ,Signal} from "@preact/signals";
import { ComponentChild } from "preact/src/index.d.ts";
import { useEffect } from "preact/hooks";

interface Props {
  url: string,
  count: Signal<number>; // 🔹 Accept signal as prop
}


export  default  function MyPage({url,count}:Props) {
  var listofdataq : Signal<string []> = useSignal( [count.value.toString()]  )
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://dattebayo-api.onrender.com/characters/${count.value}`);
      var res= await response.json(); // Update signal when data is received
      
      listofdataq.value[0]=res.images[0]
      listofdataq.value[1]=res.name
      listofdataq.value[2]=res.personal.affiliation
    }
    fetchData();
  }, [count.value]); // Re-fetch when `count.value` changes


  return (<>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-3xl font-bold mb-4">Character Image</h1>
      <h2> This ninja is named {listofdataq.value[1] } and is from {listofdataq.value[2]}</h2>
      <img src={listofdataq.value[0]} alt="Character" ></img>
      {count.value }
    </div>
    <>


    <button  onClick={()=>count.value++}
    style="
      padding: 16px 32px;
      font-size: 24px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: white;
      background: linear-gradient(135deg, #4e54c8,rgb(12, 14, 65));
      border: none;
      border-radius: 50px;
      cursor: pointer;
      box-shadow: 0 10px 20px rgba(78, 84, 200, 0.3), 0 6px 6px rgba(78, 84, 200, 0.2), 0 0 0 1px rgba(78, 84, 200, 0.1);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;"
    onMouseUp={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 10px 20px rgba(78, 84, 200, 0.3), 0 6px 6px rgba(78, 84, 200, 0.2), 0 0 0 1px rgba(78, 84, 200, 0.1)'; }}
    onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(1px)'; e.currentTarget.style.boxShadow = '0 8px 15px rgba(78, 84, 200, 0.3), 0 3px 5px rgba(78, 84, 200, 0.2), 0 0 0 1px rgba(78, 84, 200, 0.1)'; }}
  >Next</button>

          <h6> {count.value}</h6>
          </>
    </>
    
  );
}