// ask_details.ts
interface PersonDetails {
    name: string;
    age: number;
    phone: string;
  }
  
  function getDetails(details: any[]): PersonDetails {
    return {name: details[0], age: details[1], phone: details[2]};
  }
  console.log(getDetails(Deno.args));
  // deno run ask_details.ts "Narayanaperumal Gurusamy" 10 87780-97665
  // { name: "Narayanaperumal Gurusamy", age: "10", phone: "87780-97665" }