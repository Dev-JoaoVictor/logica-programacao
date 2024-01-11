/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(number) {

  if (number == 0) {
    return 'Lasagna is done.'
  } else if (number > 0) {
    return 'Not done, please wait.'
  } else if (number === undefined) {
    return 'You forgot to set the timer.'
  }

}

export function preparationTime(layers, number) {
  return number ? layers.length * number : layers.length * 2
}

export function quantities(camadas) {
  let noodles = 0;
  let sauce = 0

  for (let i = 0; i < camadas.length; i++) {

    if (camadas[i] == 'noodles') {
      noodles += 50
    } else if (camadas[i] == 'sauce') {
      sauce += 0.2
    }

  }

  return {
    noodles,
    sauce
  }

}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}


export function scaleRecipe(recipe, number) {
  let newObjeto = {}
  let porcao = number / 2;

  for (let item in recipe) {
    newObjeto[item] = recipe[item] * porcao
  }

  return newObjeto

}