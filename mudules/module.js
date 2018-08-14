// export 定义模块
//import 使用模块 

 let name = "菊菊";
let age = 20;
 let info = "信息";
export default '不用花括号接收';
export { 
    name as n,
    age as a,
    info as i
}