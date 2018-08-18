//在node环境下运行
const fs = require("fs");
//简单封装 fs 封装成promise
const readFile = function (fileName) { 
    return new Promise((resolve, reject) => { 
        fs.readFile(fileName, (err, data) => { 
            if (err) reject(err);
            resolve(data);
        })
    })

}
//promise方法读取
// readFile('./data/a.text').then(res => { 
//     console.log(res.toString());
//     return readFile('./data/b.text');
// }).then(res => { 
//     console.log(res.toString());
//     return readFile('./data/c.text');
// }).then(res => { 
//     console.log(res.toString());

// })
//generator函数读取
// function * gen() { 
//     yield readFile('./data/a.text');
//     yield readFile('./data/b.text');
//     yield readFile('./data/c.text');
// }
// let g1 = gen(); 
// g1.next().value.then(res => { 
//     console.log(res.toString());
//     return g1.next().value;
// }).then(res => {
//     console.log(res.toString());
//     return g1.next().value;
//     }).then(res => {
//         console.log(res.toString());
        
// })
//主角async
// async特点：
// 1：await只能放在async函数中
// 2：相比genrator语义化更强
// 3：await后面可以是promise对学生。也可以是数字,字符串,布尔值……
// 4:async函数返回的是promise对象
// 5：只要await语句后面Promise状态变成reject，那么整个函数会中断执行，解决方法使用try {await}catch(e){}
async function fn() {//表示异步 这个函数里面有异步任务
try {
var f1 = await readFile('./data/a.text');//await表示后面结果需要等待
var f2 = await readFile('./data/b.text');
var f3= await readFile('./data/c.text');

} catch (e) { }
console.log(f1.toString());
console.log(f2.toString());
console.log(f3.toString());   
}
fn();