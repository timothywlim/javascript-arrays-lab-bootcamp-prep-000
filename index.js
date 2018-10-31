var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

function destructivelyAppendKitten(Ralph) {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kitten, name]
}

function prependKitten(name) {
  reeturn [name, ...kitten]
}



// Add your functions and code here
