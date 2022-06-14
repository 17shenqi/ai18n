export interface TransResultItem {
  token?: string;
  appid?: string;
}

export interface TransResult {
  lang: string,
  results: TransResultItem[]
}
