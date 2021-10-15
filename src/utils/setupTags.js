const setupTags = recipes => {
  const allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag]++
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })
  // const altNewTags = Object.keys(allTags)
  //   .sort()
  //   .reduce((obj, key) => {
  //     obj[key] = allTags[key]
  //     return obj
  //   }, {})
  return newTags
}

export default setupTags
