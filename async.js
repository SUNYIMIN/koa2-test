

async function time () {
  return 'hello word';
}
time().then((data) => {
  console.log(data);
})

console.log('虽然我在后面，但是我先执行了');

async function timeout (flag) {
    if(flag)  {
      return 'hello word'
    } else {
      throw '错误了'
    }
}

timeout(false).catch((err) => {
   console.log(err)
})

function doubleNum (num) {
  return new Promise((resolve, reject) => {
     setTimeout(function(){
       resolve(num * 2)
     }, 2000)
  })
}
// 异步写法
async function test() {
  let result1 = await doubleNum(30);
  let result2 = await doubleNum(50);
  let result3 = await doubleNum(60);
  console.log(result1 + result2 + result3);
}

test();

console.log('我被先执行')

//同步写法

function a(num) {
   return num * 2
}

let w = a(30);
let b = a(50);
let c = a(60);

console.log(w + b + c);
console.log('我不会先被执行');



function a(num, callBack) {
    callBack(num * 2)
}

a(30, function(num1){
     a(50, function(num2) {
        a(60, function(num3){
          console.log(num1 + num2 + num3)
        })
     })
  })

  console.log('我先被执行');

