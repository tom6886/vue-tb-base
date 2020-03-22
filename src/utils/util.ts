import { R, ResPage, Page } from "@/model/common";

export function transData(data: object) {
  if (!isR(data) || typeof data.data !== "object") {
    return data;
  }

  let _data = data.data;

  if (_data && isPage(_data)) {
    let _page: Page<any> = {
      current: parseInt(_data.current),
      pages: parseInt(_data.current),
      total: parseInt(_data.total),
      size: parseInt(_data.size),
      records: _data.records
    };

    data.data = _page;
    return data;
  }

  return data;
}

function isR(object: any): object is R<any> {
  return "code" in object && "msg" in object && "data" in object;
}

function isPage(object: any): object is ResPage {
  return (
    "current" in object &&
    "pages" in object &&
    "total" in object &&
    "size" in object &&
    "records" in object
  );
}
