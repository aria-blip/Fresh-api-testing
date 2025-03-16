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
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try  this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>

        
        <MyPage count={count} url={res.images[0]}  >
       
        </MyPage>
        
        
        {count.value}
      </div>
    </div></>
  );
}
