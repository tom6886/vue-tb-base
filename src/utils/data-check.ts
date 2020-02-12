export default class DataCheck {
  // 获取字符串的长度（中文2，英文1）
  static getCharLength(str: string) {
    return str.replace(/[^\x00-\xff]/g, "01").length;
  }

  // 是否含有特殊字符
  static includeSpecialChar(str: string) {
    let reg = new RegExp(
      "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"
    );
    return reg.test(str);
  }

  // 是否数字和字母组合
  static isNumberAndLetter(str: string) {
    let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
    return reg.test(str);
  }

  // 是否汉字和字母组合
  static isChineseAndLetter(str: string) {
    let reg = /^[\u4E00-\u9FA5a-zA-Z]*$/;
    return reg.test(str);
  }

  // 是否标准mac地址格式
  static isMacAddress(str: string) {
    let reg = /[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}/;
    return reg.test(str);
  }
}
