import type * as Table from './types'
import { request } from '@/utils/service'
// const baseURL = '/api'
// const baseURL = 'http://192.168.10.5:8887'

// #region 合作伙伴
/** 查 */
export function getCooperationDataApi() {
  const config = useRuntimeConfig()
  return request<Table.GetCooperationResponseData>({
    baseURL: config.public.baseApi,
    url: '/homepageCooperation/list',
    method: 'get',
  })
}
// #endregion
