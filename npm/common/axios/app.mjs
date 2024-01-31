/**********************************************************************************************
 * https://axios-http.com/docs/intro
 **********************************************************************************************/

import axios from "axios";

try {
  const url = "https://swapi.py4e.com/api/people/21/";

  const response = await axios.get(url);

  console.log(response.data);
} catch (error) {
  console.log(error);
};
