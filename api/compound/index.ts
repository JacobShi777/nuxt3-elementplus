import type * as Table from './types'
import { request } from '@/utils/service'

// #region 各栏目头图
/** 查 */
export function getColumnImagesDataApi() {
  return request<Table.GetColumnImagesResponseData>({
    baseURL: useRuntimeConfig().public.VITE_BASE_API,
    url: '/compound/getColumnImages',
    method: 'get',
  })
}
// #endregion
