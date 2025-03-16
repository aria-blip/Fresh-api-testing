import { Handlers, PageProps,FreshContext } from "$fresh/server.ts";

export const handler :Handlers ={
  GET(req:Request,cont:FreshContext){
      return new Response(cont.basePath +"jdsjdj")
  }
}

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
