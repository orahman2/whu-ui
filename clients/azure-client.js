const axios = require('axios');
axios.defaults.baseURL = 'https://uksouth.api.cognitive.microsoft.com/face/v1.0';
const fileReader = new FileReader()

export function uploadImageToAzure(imageBinary){
    let config = {
        headers: {"Ocp-Apim-Subscription-Key":"e846cb9d5f3c4428a1037f148560bd19","Content-Type":"application/octet-stream"}
      }
    axios.post(
        '/detect',
        imageBinary,
        config
    ).then(res => {
        console.log(res)
        
    });
}
export function detectImage(imageID){
    let config = {
        headers: {"Ocp-Apim-Subscription-Key":"e846cb9d5f3c4428a1037f148560bd19","Content-Type":"application/json"}
      }

    const body = {
        "personGroupId": "hack-group",
        "faceIds": [
            "973bf55a-c1f4-436e-85e5-6579fe495407",
            "5898c3c7-436e-414e-9fce-69430b0edcd6",
            "90363e20-1e93-46a7-9f79-2ee8da1474d0"
        ],
        "maxNumOfCandidatesReturned": 1,
        "confidenceThreshold": 0.1
    }
    axios.post(
        '/identify',
        body,
        config
    ).then(res => {
        res = res.data[0]
        resKeys = Object.keys(res)
        for (key in resKeys) {
            console.log(`${resKeys[key]}: ${res[resKeys[key]]}`)
        }
    });
}