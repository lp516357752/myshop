import {request,myRequest} from "./request"

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoods(page) {
  return myRequest({
    url: '/home/getGoods',
    method: "post",
    params: {
      page
    },
  })
}


export function getHomePicSwiper() {
  return myRequest({
    url: '/home/getSwiperPics'
  })
}
