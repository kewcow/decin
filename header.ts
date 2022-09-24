export const headers = (file: string) => {
  const type = {
    headers: {
      'Content-Type': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    }
  }

  if (file === 'css') type.headers['Content-Type'] = 'text/css';
  if (file === 'html') type.headers['Content-Type'] = 'text/html';
  if (file === 'js') type.headers['Content-Type'] = 'application/javascript';
  return type;
}
