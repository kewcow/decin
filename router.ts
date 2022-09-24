import {headers} from './header.ts';
export const home = async () => {
  const file = await Deno.readFile('./dist/index.html');
  return new Response(file, headers('html'));
};
