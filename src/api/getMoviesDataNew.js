import axios from "axios"
import { X_API_KEY } from "../constants"
import { createStringQuery } from "../helpers/createStringQuery"


const selectedFields = ['name', 'poster', 'rating', 'id']
const selectedFieldsString = createStringQuery(selectedFields, 'selectedFields')

const notNullFields = ['name', 'poster.url', 'rating.imdb', 'id', 'description']
const notNullFieldsString = createStringQuery(notNullFields, 'notNullFields')


export const getMoviesDataNew = async () => {
    const { data } = await axios(
      `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=4&${selectedFieldsString}&${notNullFieldsString}`,
      {
        headers: { 'X-API-KEY': X_API_KEY },
      },
    )
    return data
  }
