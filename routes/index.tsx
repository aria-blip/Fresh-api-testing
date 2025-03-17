import { useSignal ,Signal} from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import MyPage from "../islands/Counter.tsx";
import { FreshContext ,RouteContext,Handlers, PageProps} from "$fresh/server.ts";
import { useEffect } from "preact/hooks";


var number=0


export default  function Home() 
{ 
  var count = useSignal(1)
  var res: { images: string[] } = { images: ["0"] };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://dattebayo-api.onrender.com/characters/${count.value}`);
      res= await response.json(); // Update signal when data is received
      
    }
    fetchData();
  }, [count.value]); // Re-fetch when `count.value` changes


  return (<>

  
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">

        <h1 class="text-4xl font-bold">Welcome to ninja indexer</h1>
        <p class="my-4">
        </p>

        
        <MyPage count={count} url={res.images[0]}  >
       
        </MyPage>
        
        
        {count.value}
      </div>
    </div></>
  );
}
