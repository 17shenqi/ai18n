import { PlatformOptions } from '../common/platform/platform-options.interface';
import {
  LangCountryCode,
  LangCountryRegionCode,
  LangScriptCode,
} from '../common/constants/lang-code';

export default class {
  constructor() {
  }

  getLangCountryCode() {
    return LangCountryCode;
  }

  getLangCountryRegion() {
    return LangCountryRegionCode;
  }

  getLangScriptCode() {
    return LangScriptCode;
  }
}
