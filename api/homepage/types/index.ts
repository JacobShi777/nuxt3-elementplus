// #region 合作伙伴
export interface IGetCooperationData {
  id: number
  name: string
  picture: string
}

export type GetCooperationResponseData = IApiResponseData<IGetCooperationData[]>
// #endregion
