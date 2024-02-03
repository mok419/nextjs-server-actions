import { randomInt } from "crypto";


export async function FetchItems() {
  const rand = randomInt(20);
  console.log(rand)
    let res = await fetch(`https://api.vercel.app/products/${rand}`, { next: { tags: ['fetched-items'] } });
    let data = await res.json();
    return <h1>{data.stock}</h1>
  }