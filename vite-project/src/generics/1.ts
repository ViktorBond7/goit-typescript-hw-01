import axios from "axios";

// async function fetchData(url: string) {
//   try {
//     const response: string = await axios.get(url);
//     return response.data:;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

async function fetchData(url: string): Promise<string> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// const promise: Promise<string> = new Promise((resolve) => {
//   setInterval(() => {
//     resolve("Done!");
//   }, 1000);
// });

// promise.then((data) => {
//   console.log(data);
// });
