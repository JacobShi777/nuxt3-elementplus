/** 创建请求方法 */
function createRequestFunction() {
  // 这里使用了any
  return async function<T>(config: any) {
    const url = config.url
    delete config.url
    const configDefault = {
      baseURL: import.meta.env.VITE_BASE_API,
    }
    const _config = Object.assign(configDefault, config)
    const response = await useFetch<T>(url, _config)

    const { error, data } = response
    if (error.value) {
      const { statusCode: status } = error.value
      // Status 是 HTTP 状态码
      let message
      switch (status) {
        case 400:
          message = '请求错误'
          break
        case 401:
          // Token 过期时，直接退出登录并强制刷新页面（会重定向到登录页）
          message = '登录已过期'
          // useUserStoreHook().logout()
          // location.reload()
          break
        case 403:
          message = '拒绝访问'
          break
        case 404:
          message = '请求地址出错'
          break
        case 408:
          message = '请求超时'
          break
        case 500:
          message = '服务器内部错误'
          break
        case 501:
          message = '服务未实现'
          break
        case 502:
          message = '网关错误'
          break
        case 503:
          message = '服务不可用'
          break
        case 504:
          message = '网关超时'
          break
        case 505:
          message = 'HTTP 版本不受支持'
          break
        default:
          message = `其他错误, status: ${status}`
          break
      }
      if (process.client) {
        ElMessage.error(message)
      }
    }
    else {
      // 这里使用了any
      const apiData = data.value as any
      const { status } = apiData
      // 如果没有 status, 代表这不是项目后端开发的API
      if (status === undefined) {
        if (process.client) { ElMessage.error('非本系统的接口') }
        return Promise.reject(new Error('非本系统的接口'))
      }
      else {
        switch (status) {
          case 200:
            return response
          default:
            // 不是正确的 status
            if (process.client) { ElMessage.error(`接口返回错误: status: ${status}; message: ${apiData.message}`) }
        }
      }
    }

    return response
  }
}

/** 用于网络请求的方法 */
export const request = createRequestFunction()
