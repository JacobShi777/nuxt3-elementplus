// #region 各栏目头图
export interface IGetColumnImagesData {
  id: number
  title: string
  picture: string
}

export type GetColumnImagesResponseData = IApiResponseData<
  IGetColumnImagesData[]
>
// #endregion
