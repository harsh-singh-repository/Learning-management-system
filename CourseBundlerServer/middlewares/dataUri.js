import { log } from "console";
import DataUriParser from "datauri/parser.js";
import path from "path"

const getDataUri = (file)=>{
    const parser = new DataUriParser();
    const extName  = path.extname(file.originalname).toString();
    const parserFormat = parser.format(extName,file.content);
    return parserFormat;
}

export default getDataUri;



