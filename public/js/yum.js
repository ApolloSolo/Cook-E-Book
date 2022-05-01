const axios = require("axios");
require("dotenv").config();

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		'X-RapidAPI-Key': 'e7d9710815msh122213a08c14487p1d2ed7jsnfcc325940b79'
	}
};

async function getRecipes(type = null){
    if(type === null) {
        let foodData = await axios.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20`, options)
        return foodData.data.results;
    } else {
        let foodData = await axios.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${type}`, options)
        return foodData.data.results;
    }
}

module.exports = getRecipes;

//optional
//tags=under_30_minutes ex: https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes
//q=chicken ex: https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=chicken
