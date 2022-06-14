import * as CryptoJS from 'crypto-js';
import Axios from 'axios';
import { BaiduOptions } from '../dto/baidu-options';
import { TransResult } from '../dto/trans-result';
import Base from '../base';

export default class extends Base {
  constructor(options: BaiduOptions) {
    super();
    this.token = options.token;
    this.appid = options.appid;
  }

  token: string;
  appid: string;

  genSign(q, salt) {
    return CryptoJS.MD5(`${this.appid}${q}${salt}${this.token}`).toString();
  }

  async getTranslation(list: string[], lang: string) {
    const q = list.join('\n')
    return this.getBaiduTrans(q, lang)
  }

  async getBaiduTrans(q: string, lang: string): Promise<TransResult> {
    const salt = Date.now();
    const sign = this.genSign(q, salt);
    const params = {
      q,
      from: 'zh',
      to: lang,
      appid: this.appid,
      salt,
      sign,
    };

    let result;
    try {
      result = await Axios.get(
        'http://api.fanyi.baidu.com/api/trans/vip/translate',
        {
          params,
        },
      );
    } catch (e) {
      throw new Error('API ERROR');
    }

    const { trans_result = [] } = result.data;
    return {
      lang,
      results: trans_result,
    };
  }
}
