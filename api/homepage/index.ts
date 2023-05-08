import type * as Table from './types'
import { request } from '@/utils/service'
// const baseURL = '/api'
// const baseURL = 'http://192.168.10.5:8887'

export const useHomepageApi = () => {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.public.VITE_BASE_API

  function getCooperationDataApi() {
    return request<Table.GetCooperationResponseData>({
      baseURL,
      url: '/homepageCooperation/list',
      method: 'get',
    })
  }

  return { getCooperationDataApi }
}

// #region 合作伙伴
/** 查 */
// export function getCooperationDataApi() {
//   return request<Table.GetCooperationResponseData>({
//     baseURL,
//     url: '/homepageCooperation/list',
//     method: 'get',
//   })
// }
// #endregion
