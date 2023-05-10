import type * as Table from './types'
import { request } from '@/utils/service'

// #region 新闻中心
/** 查 */
export function getNewsDataApi(pageNum: number, pageSize: number, category: string) {
  return request<Table.GetNewsResponseData>({
    baseURL: useRuntimeConfig().public.VITE_BASE_API,
    url: `/news/getNews?pageNum=${pageNum}&pageSize=${pageSize}&category=${category}`,
    method: 'get',
  })
}

/** 单条查询 */
export function getSingleNewsDataApi(id: any) {
  return request<Table.GetSingleNewsResponseData>({
    baseURL: useRuntimeConfig().public.VITE_BASE_API,
    url: `/news/getSingleNew/${id}`,
    method: 'get',
  })
}

/** 置顶新闻 */
export function getTopNewsDataApi() {
  return request<Table.GetTopNewsResponseData>({
    baseURL: useRuntimeConfig().public.VITE_BASE_API,
    url: '/news/getTopNews?show_top=1',
    method: 'get',
  })
}
// #endregion
