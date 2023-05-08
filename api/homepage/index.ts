import type * as Table from './types'
import { request } from '@/utils/service'
const baseURL = import.meta.env.VITE_BASE_API
console.log('baseURL', baseURL)

// #region 合作伙伴
/** 查 */
export function getCooperationDataApi() {
  return request<Table.GetCooperationResponseData>({
    baseURL,
    url: '/homepageCooperation/list',
    method: 'get',
  })
}
// #endregion
