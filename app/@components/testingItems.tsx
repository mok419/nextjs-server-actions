import { randomInt } from "crypto";
import { unstable_cache } from "next/cache";
import postgres from "postgres";

let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
  ssl: "require",
});


const getCachedItems = unstable_cache(
  async () => {
    return await sql`SELECT * FROM items ORDER BY RANDOM() LIMIT 1;`;
  },
  ['items'],
  {
    tags: ['items']
  }
);

export async function TestingItems() {
    let res = await getCachedItems();
    // let data = await res.json();
    return (
      <div>
      {res.map((item) => (
        <h1 key={item.id}>{item.text}</h1>
      ))}
      </div>
    )
  }

// export async function TestingItems({data}: any) {
//   console.log(data)
//       return <h1>{data.stock}</h1>
//     }



// // This function gets called at build time
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://api.vercel.app/products/1');
//   const data = await res.json();

//   console.log('hiii', data)
 
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       data,
//     },
//   }
// }