export default {
	async fetch(request, env) {
	  // Extract query parameters from the URL
	  const url = new URL(request.url);
	  const prompt = url.searchParams.get('prompt') || "Diga ao usuário para adicionar um prompt na URL escrevendo sua pergunta após a consulta do prompt.";
  
	  const response = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
		  prompt: prompt
		}
	  );
  
	  return new Response(JSON.stringify(response));
	}
  };
  