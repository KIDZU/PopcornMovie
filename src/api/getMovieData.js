import axios from "axios"
import { X_API_KEY } from "../constants"
import { createStringQuery } from "../helpers/createStringQuery"


const selectedFields = ['name', 'poster', 'rating', 'id', 'description', "persons"]
const selectedFieldsString = createStringQuery(selectedFields, 'selectedFields')


  export const getMovieData = async (id) => {
    const { data } = await axios(
      `https://api.kinopoisk.dev/v1.4/movie/${id}?${selectedFieldsString}`,
      {
        headers: { 'X-API-KEY': X_API_KEY },
      },
    )
   return data
  }
