import { readFile } from "fs";
export const readTheFile = async (urlToFileMd: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    readFile(urlToFileMd, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
