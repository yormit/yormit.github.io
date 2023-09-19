// priority: 0

// Visit the wiki for more info - https://kubejs.com/

REIEvents.removeCategories(event => {
  console.log('crafting categories')
  console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
  
  event.remove('twilightforest:uncrafting') //remove the uncrafting tab when looking up a recipe
  console.log('removed "twilightforest:uncrafting"')
})