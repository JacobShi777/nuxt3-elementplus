import type * as Table from './types'
import { request } from '@/utils/service'

// #region 简介
/** 查 */
export function getProfileDataApi() {
  return request<Table.GetProfileResponseData>({
    baseURL: useRuntimeConfig().public.VITE_BASE_API,
    url: '/introduction/getProfile',
    method: 'get',
  })
}
// #endregion

// #region 证书
/** 查 */
export function getQualificationDataApi() {
  return request<Table.GetQualificationResponseData>({
    baseURL: useRuntimeConfig().public.VITE_BASE_API,
    url: '/introduction/getQualification',
    method: 'get',
  })
}
// #endregion
