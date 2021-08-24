//array of object
var olympics=[
    {country:"unitedstates",gold:30,silver:35,bronze:27,total:92},
    {country:"japan",gold:22,silver:10,bronze:15,total:47},
    {country:"aus",gold:17,silver:6,bronze:20,total:43},
    {country:"china",gold:34,silver:24,bronze:16,total:74},
    {country:"india",gold:0,silver:2,bronze:3,total:5},
    {country:"germany",gold:9,silver:10,bronze:16,total:25},

]
//print country names
//console.log(olympics.map(olym=>olym["country"]));
//or
//for(let olym of olympics){
//    console.log(olym.country);
//}
//or
//olympics.map(nation=>nation.country).forEach(c_name=>console.log(c_name))


//which country got most gold
//  console.log(olympics.reduce((olym1,olym2)=>olym1["gold"]>olym2["gold"]?olym1:olym2));

//which country got most medals
// console.log(olympics.reduce((olym1,olym2)=>olym1["total"]>olym2["total"]?olym1:olym2));


//sort countrys based gold medals
// console.log(olympics.sort((olym1,olym2)=>olym1["gold"]-olym2["gold"]));


//'''  '''''''''''''' total medals
// console.log(olympics.sort((olym1,olym2)=>olym1["total"]-olym2["total"]));

//countries got silver>10
// console.log(olympics.filter((olym)=>olym["silver"]>10));

//list of countries who got gold medal 0
// console.log(olympics.filter((olym)=>olym["gold"]==0));

//list of country names whose gold medal>20
// console.log(olympics.filter((olym)=>olym["gold"]>20));

//is pakisthan participating?
console.log(olympics.some((olym)=>olym["country"]=="pakisthan"));
