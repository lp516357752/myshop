import axiox from 'axios'

//最终方案
//1、
export function request(config) {
  const instance = axiox.create({//参数配置
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
    
  })
  //拦截器的使用
  // instance.interceptors.request.use(data => {//请求拦截器
  //   console.log(data);//data参数是传入的config信息
  //   return data;//需要返回出去，否则服务器拿不到数据，undefined
  //   //应用场景1、config中有一些信息不符合服务器要求
  //   //应用场景2、显示请求中的动画显示
  //   //应用场景3、某些网络请求（登录token），必须携带一些特殊信息
  // }, err => {
  //   console.log(err);
  // })
  instance.interceptors.response.use(res => {//响应拦截配置
    return res.data;//一定记得返回
  }, err => {
    console.log(err)
  });

  //2、真正的请求代码，并且返回
  return instance(config)//处理完后返回的是一个promise,所以调用者可以直接调用Promise的方法
}

export function myRequest(config){
  const instance = axiox.create({
    baseURL: "http://localhost:8081/myVueServer",
    timeout: 5000
  })
  instance.interceptors.response.use(res => {//响应拦截
    for(let i=0;i<res.data.length;i++){
      res.data[i].image = "http://localhost:8081/myVueServer/" + res.data[i].image;
    }
    return res.data;//一定记得返回
  }, err => {
    console.log(err)
  });

  return instance(config);//返回请求实例
}