export async function checkServerHealth() {
  let res = await fetch(`http://${process.env.HOST}:${process.env.SERVERPORT}/health`, {
    headers: new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      'Access-Control-Allow-Origin': '*'
    }),
  });
  let resp = res.json();
  return resp;
}
