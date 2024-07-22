import COS from 'cos-js-sdk-v5'

import axios from 'axios'

const cos = new COS({
  getAuthorization: async function (options, callback) {
    const data = (await axios.get('http://localhost:3000/upload/getKey')) as any // 需自行实现获取临时密钥逻辑

    console.log(data.data.data)
    callback({
      TmpSecretId: data.data.data.credentials.tmpSecretId,
      TmpSecretKey: data.data.data.credentials.tmpSecretKey,
      SecurityToken: data.data.data.credentials.sessionToken,
      // 建议返回服务器时间作为签名的开始时间，避免客户端本地时间偏差过大导致签名错误
      StartTime: data.data.data.startTime, // 时间戳，单位秒，如：1580000000
      ExpiredTime: data.data.data.expiredTime, // 时间戳，单位秒，如：1580000000
      ScopeLimit: true // 细粒度控制权限需要设为 true，会限制密钥只在相同请求时重复使用
    })
  }
})

export default cos
