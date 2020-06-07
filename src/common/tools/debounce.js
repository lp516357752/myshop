/*
  防抖函数封装 
*/
export default function debounce(fn, delay=300) {
  let timer = null;//定时器

  return function(...args) {//返回主体函数
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args);//业务函数
    }, delay)
  }
}
