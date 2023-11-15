function* stringToSymbolIterator(strings) {
  for (let str of strings) {
    yield Symbol(str);
  }
}


let strings = ['hello', 'world', 'test'];
let symbolIterator = stringToSymbolIterator(strings);

for (let symbol of symbolIterator) {
  console.log(symbol);
}