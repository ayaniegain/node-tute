import { v4 as uuidv4 } from 'uuid';
import {encryptionfunc,decrypedfunction} from "../middlewares/url.middleware.js";


  let allData=[]

//GET
const handleGeturlController = async (req, res) => {
  let id = (req.params.id);
  // console.log(id);
  // console.log(allData);


  let data=allData.find((data)=>data.id==id)

  let originalValue= decrypedfunction(data.url)

  // console.log(originalValue);


  res.send(originalValue)
};

//POST
const handlePosturlController = async (req, res) => {

  try {
    if (req.body) {
      let url = req.body.url;

      let sortenURL =await url.slice(8, url.length);

     let encryptURL=await encryptionfunc(sortenURL)

    //  await res.send(encryptURL);
     let value={id:uuidv4(),url:encryptURL}
     allData.push(...allData,value)

     res.send(allData)
     res.end()

    }
  } catch (error) {
    await res.send(error);
  }
};



export { handleGeturlController, handlePosturlController };
