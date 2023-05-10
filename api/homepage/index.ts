import type * as Table from './types'
import { request } from '@/utils/service'

// #region 合作伙伴
/** 查 */
export function getCooperationDataApi() {
  return request<Table.GetCooperationResponseData>({
    baseURL: useRuntimeConfig().public.VITE_BASE_API,
    url: '/homepage/getCooperation',
    method: 'get',
  })
}
// #endregion
