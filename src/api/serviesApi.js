import axios from 'axios';

const mainUrl = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});

const wikiApi = axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php",
  params: {
    format: "json",
    origin: "*",
  },
});


const getAllCountries = async () => {
  try {
    const {data} = await mainUrl.get('all');
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const getCountryByName = async (name) => {
  try {
    const {data} = await mainUrl.get(`name/${name}`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const fetchWikiData = async (countryName) => {
  try {
    const {data} = await wikiApi.get("", {
      params: {
        action: "query",
        prop: "extracts",
        exsentences: 4,
        redirects: true,
        titles: countryName,
      },
    });

    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    const extractText = pages[pageId].extract;
    return extractText;
  } catch (error) {
    console.log(error.message);
  }
};

const services = {
    getAllCountries,
    getCountryByName,
    fetchWikiData
  };
  export default services;