
import s from './header.module.css'
import Select from "react-select";

const options = [
  { value: "", label: "Filter by Region" },
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];
 const Header = ({
  onRegionFilterChange,
  regionFilter,
  searchTerm,
  onSearchChange,
 }) =>
  {
  const selectedOption = options.find(
    ({value}) => value === regionFilter
  );

  const handleChange = (selectedOption) => {
    onRegionFilterChange(selectedOption);
  };
    return (
      <header className={s.header}>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />

        <input
          placeholder="Search country by name"
          className={s.input}
          type="text"
          id="search-field"
          value={searchTerm}
          onChange={onSearchChange}
        />
      </header>
    );
};
  
export default Header;
 
