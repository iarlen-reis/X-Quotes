import { QuotesProps } from "../types/QuotesTypes";

export function loadFromStorage(callback: (data: QuotesProps[]) => void) {
  chrome.storage.local.get({ myData: [] }, (result) => {
    const dataArray: QuotesProps[] = result.myData;
    callback(dataArray);
  });
}