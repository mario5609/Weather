
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/Context';

export default function Search() {

  const { city, setCity } = useContext(Context);
  const { data, setData } = useContext(Context);


  const api_key = import.meta.env.VITE_APP_API_KEY
  let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

  console.log("app_key", api_key);

  const [searchInfo, setSearchInfo] = useState("SearchHolder")

  useEffect(() => {
    fetch(api_url)
      .then(res => res.json())
      .then(details => setData(details))      
  }, [city])

  function handleSearch() {
    let place = cities?.value

    if (place == "") {
      setSearchInfo("NoSearchHolder")
    } else {
      setCity(place)
      setSearchInfo("SearchHolder")
    }
  }

  return (
    <div className={searchInfo}>
      <Input placeholder={"Enter a City  . . ."} className={"searchInput"} id={"cities"} />
      <Button label={<FontAwesomeIcon icon={faSearch} className={"searchIcon"} />} className={"searchButton"} onClick={handleSearch} />
    </div>
  )
}
