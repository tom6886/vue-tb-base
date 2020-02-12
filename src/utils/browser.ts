export class BrowserUtil {
  static getBrowser(): Browser {
    let _type = this.getType();
    let _version = this.getVersion(_type);

    return {
      agent: navigator.userAgent,
      version: _version,
      type: _type
    };
  }

  private static getType(): BrowserType {
    let _agent = navigator.userAgent;

    // 验证是否Opera
    if (_agent.indexOf("Opera") > -1) {
      return BrowserType.Opera;
    }

    // 验证是否Chrome
    if (_agent.indexOf("Chrome") > -1) {
      return BrowserType.Chrome;
    }

    //排除Chrome信息，因为在Chrome的user-agent字符串中会出现Konqueror/Safari的关键字
    //判断是否基于KHTML，如果时的话在继续判断属于何种KHTML浏览器
    if (
      _agent.indexOf("KHTML") > -1 ||
      _agent.indexOf("Konqueror") > -1 ||
      _agent.indexOf("AppleWebKit") > -1
    ) {
      if (_agent.indexOf("AppleWebKit") > -1) {
        return BrowserType.Safari;
      }

      if (_agent.indexOf("Konqueror") > -1) {
        return BrowserType.Konqueror;
      }
    }

    if (_agent.indexOf("compatible") > -1 && _agent.indexOf("MSIE") > -1) {
      return BrowserType.IE;
    }

    if (_agent.indexOf("Gecko") > -1) {
      return BrowserType.Mozilla;
    }

    // 什么都匹配不上的一律按IE处理
    return BrowserType.IE;
  }

  private static getVersion(type: BrowserType): number {
    let _version = 6;
    let _agent = navigator.userAgent;
    switch (type) {
      case BrowserType.Opera:
        if (navigator.appName == "Opera") {
          //如果没有进行伪装，则直接后去版本号
          _version = parseFloat(navigator.appVersion);
        } else {
          var reOperaVersion = new RegExp("Opera (\\d+.\\d+)");
          //使用正则表达式的test方法测试并将版本号保存在RegExp.$1中
          reOperaVersion.test(_agent);
          _version = parseFloat(RegExp["$1"]);
        }
        break;
      case BrowserType.Chrome:
        let reChorme = new RegExp("Chrome/(\\d+\\.\\d+(?:\\.\\d+\\.\\d+))?");
        reChorme.test(_agent);
        _version = parseFloat(RegExp["$1"]);
        break;
      case BrowserType.Safari:
        let reAppleWebKit = new RegExp("Version/(\\d+(?:\\.\\d*)?)");
        reAppleWebKit.test(_agent);
        _version = parseFloat(RegExp["$1"]);
        break;
      case BrowserType.Konqueror:
        let reKong = new RegExp("Konqueror/(\\d+(?:\\.\\d+(?\\.\\d)?)?)");
        reKong.test(_agent);
        _version = parseFloat(RegExp["$1"]);
        break;
      case BrowserType.IE:
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(_agent);
        _version = parseFloat(RegExp["$1"]);
        break;
      case BrowserType.Mozilla:
        var reMoz = new RegExp("rv:(\\d+\\.\\d+(?:\\.\\d+)?)");
        reMoz.test(_agent);
        _version = parseFloat(RegExp["$1"]);
        break;
    }
    return _version;
  }
}

export interface Browser {
  agent: string;
  version: number;
  type: BrowserType;
}

export enum BrowserType {
  Chrome = "chrome",
  Opera = "opera",
  Safari = "safari",
  Konqueror = "konqueror",
  IE = "msie",
  Mozilla = "mozilla"
}
