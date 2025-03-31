export const createStringQuery = (requestElement, queryKey) => {
  const createdQuery = requestElement.reduce((accum, curValue) => {
    return `${accum}&${queryKey}=${curValue}`
  }, '')
  return createdQuery
}
