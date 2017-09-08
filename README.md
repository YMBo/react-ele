# react-ele
react仿饿了么app    
技术：`react`+`react-router`+`redux`+`create-react-app`+`智能组件`+`木偶组件`    
******************************************************
### 一、准备阶段：    
因为用的是`create-react-app`创建的项目，在项目中用到了less、rem，所以添加在`webpack`中添加这两个功能    
    
#### 1.初始化并添加less、px2rem功能    
[点我查看详情](https://ymbo.github.io/2017/09/06/create-react-app%E9%85%8D%E7%BD%AEwebpack/)    
    
### 记录    
#### 1.    
header区域没有什么特别得。用到的布局是flex    
#### 2.    
banner区域：    
      1.轮播图用的是`react-swipe`插件
      2.因为数据是从饿了么取来的，所以需要对整个数组拆分为几个小数组，这就是循环的页数，然后小数组里有一些元素，为每一页的展示项目
      3.比如图片的hash值为'asdfghh'，需要的图片地址需要进行格式上的转变为'a/sd/fghh',不明白为啥饿了么要这么做，直接用不可以么，我实现的方法是字符串转换为数组，进行插入，转换为字符串，详情看`src/components/banner/banner.js`文件，数据格式请看  `src/data/data.js`
