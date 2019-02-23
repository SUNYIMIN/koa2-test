// 迭代器函数
function generator (arr) {
   let index = 0;
    return {
      next: () => {
        if(index < arr.length) {
          return { value: arr[index++], done: false}
        } else {
          return { done: true}
        }
      }
    }
}

let init = generator(['1', '2', '3']);

console.log('333', init.next().value)
console.log('333', init.next().value)
console.log('333', init.next().value)
console.log('333', init.next().done)

//生成器函数

function *generator1(arr) {
  for(var i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

let init2 = generator1(['1', '2', '3']);

console.log('333', init2.next().value)


function * test () {
  yield 1;
  yield 2;
  return 3;
}

let a = test();
console.log('qqq', a.next());
console.log('qqq', a.next());
console.log('qqq', a.next());

console.log(1111)