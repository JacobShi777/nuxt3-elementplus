/** 所有 api 接口的响应数据都应该准守该格式 */
interface IApiResponseData<T> {
  status: number
  data: T
  message: string
  timestamp: number
}
