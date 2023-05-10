// #region 新闻中心
export interface IGetNewsRequestData {
  /** 当前页码 */
  pageNum: number
  /** 查询条数 */
  pageSize: number
  /** 新闻分类 */
  category: string
}

export interface IGetNewsData {
  id: number
  title: string // 新闻名称
  category: string // 新闻分类
  time: number // 新闻时间
  showTop: boolean // 是否在首页显示
  picture: string // 新闻首图
  content: string // 新闻内容
  prev: [number, string] | null // 上一条新闻
  next: [number, string] | null // 下一条新闻
}

export type GetNewsResponseData = IApiResponseData<{
  records: IGetNewsData[]
  total: number // 总新闻条数
  size: number // 查询条数
  current: number // 当前页码
}>

export type GetTopNewsResponseData = IApiResponseData<IGetNewsData[]>

export type GetSingleNewsResponseData = IApiResponseData<IGetNewsData>
// #endregion
