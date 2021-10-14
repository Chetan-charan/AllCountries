// const countries = [
//     {
//       image: "https://flagpedia.net/data/flags/w580/de.png",
//       country: "Germany",
//       population: "81,770,900",
//       region: "Europe",
//       capital: "Berlin"
//     },
//     {
//       image: "https://flagpedia.net/data/flags/w580/au.png",
//       country: "Australia",
//       population: "91,657,312",
//       region: "Aus",
//       capital: "Canberra"
//     },
//     {
//       image: "https://flagpedia.net/data/flags/w580/in.png",
//       country: "India",
//       population: "1,3179,984,812",
//       region: "Asia",
//       capital: "New Delhi"
//     },
//     {
//       image: "https://flagpedia.net/data/flags/w580/kr.png",
//       country: "South Korea",
//       population: "40,400,000",
//       region: "Asia",
//       capital: "Seoul"
//     },
//     {
//       image: "https://flagpedia.net/data/flags/w580/us.png",
//       country: "United States of America",
//       population: "323,947,000",
//       region: "North America",
//       capital: "Washington,D.C"
//     }
//   ];
  

// fetch("https://restcountries.com/v3.1/all")
// .then((data) => data.json())
// .then((countries) => console.log(countries.filter((country) => country.population>100000000)));

document.body.innerHTML = `<div class="container"></div>`

fetch("https://restcountries.com/v3.1/all")
.then((data) => data.json())
.then((countries) => {
  countries.forEach(country => {

   
    
    const flags = document.querySelector('.container');

    flags.innerHTML += `
    <div class="col"><img src="${country.flags.svg}">
     <h5>${country.name.common}</h5>
     <p><b>Population: </b>${country.population}</p>
     <p><b>region: </b>${country.region}</p>
     <p><b>Capital: </b>${country.capital}</p>
     </div>
     `
    });
});



  
    

 



