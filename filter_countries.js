let request = new XMLHttpRequest();


request.open("GET", "http://restcountries.eu/rest/v2/all", true);
request.send();

request.onload = function(){
    let countries = JSON.parse(this.response);

    //Get all the countries from Asia continent /region using Filter function 
    let asiaCountries = countries.filter((obj) => 
         obj.region === 'Asia'
    );
    console.log(asiaCountries);

    //Get all the countries with population of less than 2 lacs using Filter function
    let populationFilter = countries.filter((obj) =>
         obj.population < 200000
    );
    console.log(populationFilter);

    //Print the following details name, capital, flag using forEach function 

    countries.forEach((obj) => {
        console.log(obj.capital+' is the capital of the country '+obj.name+' and their flag can be found here: '+obj.flag);
    });

    //Print the total population of countries using reduce function 

    let population = countries.reduce((acc, curr) =>
      acc + parseInt(curr.population)
    ,0);

    console.log('total population of the world: '+population);

    //Print the country which use US Dollars as currency.

    let currencyFilter = countries.filter(filterUSD);

    function filterUSD(country){
        for(let i=0; i<country.currencies.length; i++){
            if(country.currencies[i].code === 'USD'){
                return country;
            }
        }
        return ;
    }
    console.log(currencyFilter);
}