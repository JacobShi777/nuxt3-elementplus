// #region 简介
export interface IGetProfileData {
  id: number
  profile: string
}

export type GetProfileResponseData = IApiResponseData<IGetProfileData[]>
// #endregion

// #region 证书
export interface IGetQualificationData {
  id: number
  title: string
  time: number
  picture: string
}

export type GetQualificationResponseData = IApiResponseData<
  IGetQualificationData[]
>
// #endregion
