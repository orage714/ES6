const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
  mode:"development",  //配置打包模式
  entry:{
      index:'./src/index.js',
      index2:'./src/index2.js'
    }, //入口配置
  output:{               //出口配置
    path:path.resolve(__dirname,'dist'), //path必须是绝对路径
    filename:'main-[name].js',
  },
  devServer:{
    contentBase:path.join(__dirname,'dist')
    //devServer.contentBase配置DevServer HTTP服务器的文件根目录。默认情况下为当前执行目录，所以一般不必设置它，除非有额外的文件需要被DevServer服务。例如你想把项目根目录下的public目录设置成DevServer服务器的文件根目录：
  },
  module:{
    rules:[
      {test:/\.css$/,
       loader:'style-loader!css-loader'},
       {test: /\.(gif|jpg|png)$/, loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]"}]
  },
  plugins:[
    new HtmlWebpackPlugin({
    chunks:['index'],
    filename:'index.html', //每次调用指定生成的html名称
    template: './tmpl1.html' //模板地址
    }),
    new HtmlWebpackPlugin({
      chunks:['index2'],
    filename:'index2.html', //每次调用指定生成的html名称
    template: './tmpl1.html' //模板地址
    })
    ]  
}
