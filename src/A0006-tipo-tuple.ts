// Tuple
const dadosClient1: readonly [number, string] = [1, 'Rakel'];
const dadosClient2: [number, string, string] = [1, 'Rakel', 'Moraiera'];
const dadosClient3: [number, string, string?] = [1, 'Rakel'];
const dadosClient4: [number, string, ...string[]] = [1, 'Rakel', 'Moraiera'];

//dadosClient1[0] = 100;
//dadosClient1[1] = 'Carlos';

console.log(dadosClient1);
console.log(dadosClient2);
console.log(dadosClient3);
console.log(dadosClient4);

// readonly array
const array1: readonly string[] = ['Rakel', 'Moreira'];
const array2: ReadonlyArray<string> = ['Rakel', 'Moreira'];

console.log(array1);
console.log(array2);
