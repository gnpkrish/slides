/**
 * read_file.ts
 */
// open file an returns Promise
const text = Deno.readTextFile("./sample.txt");

text.then((response) => console.log(response));