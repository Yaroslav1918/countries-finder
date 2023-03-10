import { useCallback, useEffect, useState } from "react";
import services from "../api/serviesApi";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";
import s from "../components/CountryCard/countryCard.module.css";
import Pagination from "../components/Pagination";


const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const [regionFilter, setRegionFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 5;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await services.getAllCountries();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.log(error.message);
      } 
    };

    fetchCountries();
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (regionFilter !== '') {
      setFilteredCountries(
        filtered.filter(({region}) => {
          return region === regionFilter;
        })
      );
    } else {
      setFilteredCountries(filtered);
    }

    setCurrentPage(1);
  }, [countries, searchTerm, regionFilter]);

  const onSearchChange = useCallback(({ target: { value } }) => {
    setSearchTerm(value);
  }, []);

  const onRegionFilterChange = useCallback(({ label }) => {
    setRegionFilter(label);
  }, []);
  
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  return (
    <>
      <Header
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        regionFilter={regionFilter}
        onRegionFilterChange={onRegionFilterChange}
      />

      <div className={s.cardContainer}>
        {currentCountries.map((country, index) => (
          <CountryCard
            key={index}
            country={country}
            currentPage={currentPage}
            totalPages={Math.ceil(filteredCountries.length / countriesPerPage)}
          />
        ))}
      </div>
      {filteredCountries.length !== 0 &&  <Pagination
          pageCount={Math.ceil(filteredCountries.length / countriesPerPage)}
          onPageChange={handlePageChange}
        />}
        
    </>
  );
};

export default Home;
