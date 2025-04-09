import axios from "axios"
import { X_API_KEY } from "../constants"
import { createStringQuery } from "../helpers/createStringQuery"

const selectedFields = ['movie.poster']
const selectedFieldsString = createStringQuery(selectedFields, 'selectedFields')

  export const getPersonData = async (id) => {
    const { data } = await axios(
      `https://api.kinopoisk.dev/v1.4/person/${id}?${selectedFieldsString}`,
      {
        headers: { 'X-API-KEY': X_API_KEY },
      },
    )
   return data
  }