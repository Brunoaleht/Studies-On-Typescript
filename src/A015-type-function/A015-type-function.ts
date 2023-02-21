type CallbackMapString = (item: string) => string; //é desta forma q typa uma function
export function mapString(
  array: string[],
  callbackfn: CallbackMapString,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}
const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());
console.log(abcMapped);
console.log(abc); //observa q o array original não foi alterado
