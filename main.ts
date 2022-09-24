import {serve} from './deps.ts';
import {headers} from './header.ts';
import {home} from './router.ts';

const handler = async (req: Request) => {
  const pathname = new URL(req.url).pathname;
  const pattern: URLPattern = new URLPattern({pathname: '/service/*' });
  const type = pathname.split('.').pop();

  if (pathname === '/') return home();
  if (pattern.test(req.url)) return home();

  const file = await Deno.readFile(`${Deno.cwd()}/dist${pathname}`);

  if (type === 'css') return new Response(file, headers('css'));
  if (type === 'js') return new Response(file, headers('js'));


  return new Response(file, headers());
};

const env = Deno.env.get('PORT');
const port = env ? Number(env) : 9000;

serve(handler, {port});
