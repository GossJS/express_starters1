import axios from 'axios';
const URL = 'http://192.168.1.199:4321';
const vals = [
  {val: "/add/5/6", expected:"11"},
  {val: "/add/133/22", expected:"155"},
  {val: "/add/0/13", expected:"13"}
];
(async()=>{
   for (const o of vals) {
      const {data} = await axios.get(URL+o.val);
      console.log(`Got: ${String(data).padStart(6)} , ${o.expected.padEnd(6)} expected`);
   }
})();


/*
/kramer/2/3/18/4/-5/-8 должно давать {"x":3,"y":4}
/kramer/-2/4/-22/7/-5/50 должно давать {"x":5,"y":-3}

*/
