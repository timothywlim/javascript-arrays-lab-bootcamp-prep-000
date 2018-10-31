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

function destructivelyRemovesFirstKitten() {
  kitten.unshift();
  return kittens;
}

// Add your functions and code here
