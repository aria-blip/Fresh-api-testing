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
  var imageur=useSignal("k")
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://dattebayo-api.onrender.com/characters/${count.value}`);
      var res= await response.json(); // Update signal when data is received
      imageur.value=res.images[0]
    }
    fetchData();
  }, [count.value]); // Re-fetch when `count.value` changes


  return (<>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-3xl font-bold mb-4">Character Image</h1>
      <img src={imageur.value} alt="Character" ></img>
      {count.value }
      {imageur.value}
    </div>
    <>
          <button onClick={()=>count.value++}></button>
          <h6> {count.value}</h6>
          </>
    </>
    
  );
}