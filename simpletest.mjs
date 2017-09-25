import axios from 'axios';
const URL = 'http://192.168.1.199:4321';
const vals = [
  {val: "/add/5/6", expected:"11"},
  {val: "/add/33/22", expected:"55"},
  {val: "/add/0/13", expected:"13"}
];
(async()=>{
   for (const o of vals) {
      const {data} = await axios.get(URL+o.val);
      console.log(data);
   }
})();
