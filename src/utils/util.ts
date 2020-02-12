import { IR, IResPage, IPage } from "@/model/common";

export function transData(data: any) {
  if (!isR(data) || typeof data.data !== "object") {
    return data;
  }

  let _data = data.data;

  if (isPage(_data)) {
    let _page: IPage<any> = {
      current: parseInt(_data.current, 10),
      pages: parseInt(_data.current, 10),
      total: parseInt(_data.total, 10),
      size: parseInt(_data.size, 10),
      records: _data.records
    };

    data.data = _page;
    return data;
  }

  return data;
}

function isR(object: any): object is IR<any> {
  return "code" in object && "msg" in object && "data" in object;
}

function isPage(object: any): object is IResPage {
  return (
    "current" in object &&
    "pages" in object &&
    "total" in object &&
    "size" in object &&
    "records" in object
  );
}
