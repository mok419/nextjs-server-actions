export async function TestingItems() {
    let res = await fetch('https://api.vercel.app/products/1', { next: { tags: ['kp-st'] } });
    let data = await res.json();
    return <h1>{data.stock}</h1>
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