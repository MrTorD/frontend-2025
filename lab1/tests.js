"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_js_1 = require("./functions.js");
let minP = (0, functions_js_1.createPresentation)('MinimalPresentation');
minP = (0, functions_js_1.changeName)(minP, 'minPresentation');
let p = (0, functions_js_1.createPresentation)('MaxPresenation');
p = (0, functions_js_1.addSlide)(p, { src: '#ff0000', type: 'color' });
p = (0, functions_js_1.addSlide)(p, { src: 'https://static.tildacdn.com/tild6137-3037-4837-b437-616464646636/10-min.jpg', type: 'picture' });
console.log(`Minimal Presentation is:`, minP);
console.log(`Maximal Presentation is:`, p);
const sId1 = p.slides[0]?.id;
const sId2 = p.slides[1]?.id;
if (sId1 && sId2) {
    p = (0, functions_js_1.addText)(p, sId1, 500, 500, 300, 300, 'Testing Text', 'Times New Roman', 20);
    p = (0, functions_js_1.addText)(p, sId1, 100, 200, 300, 400, 'Test.', 'Arial', 12);
    p = (0, functions_js_1.addText)(p, sId2, 200, 100, 500, 400, 'Hello World!', 'Calibri', 15);
    p = (0, functions_js_1.addText)(p, sId2, 400, 600, 200, 100, 'Hello!', 'Times New Roman', 30);
    p = (0, functions_js_1.addImage)(p, sId1, 300, 200, 60, 40, 'C:/image.jpg');
    p = (0, functions_js_1.addImage)(p, sId1, 1500, 300, 200, 150, 'C:/photos/summer.jpg');
    p = (0, functions_js_1.addImage)(p, sId2, 1000, 1500, 200, 150, 'D:/images/picture.png');
    p = (0, functions_js_1.addImage)(p, sId2, 0, 0, 400, 600, 'D:/pictures/pict.png');
    console.log(p);
    let select = { slidesId: [], objsInfo: [] };
    const objId1 = p.slides[0]?.slideObjects[0]?.id;
    const objId2 = p.slides[1]?.slideObjects[1]?.id;
    select = { slidesId: [sId1], objsInfo: [
            { slideId: sId1, objId: objId1 },
            { slideId: sId2, objId: objId2 }
        ] };
    console.log(`Selection is: `, select);
    select.objsInfo.forEach(objInfo => {
        const slides = p.slides;
        const slide = slides.find(o => o.id == objInfo.slideId);
        const obj = slide?.slideObjects.find(o => o.id == objInfo.objId);
        if (obj) {
            switch (obj.type) {
                case 'text':
                    p = (0, functions_js_1.editText)(p, objInfo.slideId, objInfo.objId, 'New edited text');
                    p = (0, functions_js_1.changeObjPositon)(p, objInfo.slideId, objInfo.objId, 200, 300, 400, 500);
                    p = (0, functions_js_1.changeFont)(p, objInfo.slideId, objInfo.objId, 'Consolas');
                    p = (0, functions_js_1.changeTextSize)(p, objInfo.slideId, objInfo.objId, 8);
                    break;
                case 'image':
                    p = (0, functions_js_1.changeObjPositon)(p, objInfo.slideId, objInfo.objId, 200, 300, 50, 0);
                    p = (0, functions_js_1.deleteObj)(p, objInfo.slideId, objInfo.objId);
                    break;
            }
        }
    });
    console.log(p.slides);
    select.slidesId.forEach(sId => {
        p = (0, functions_js_1.changeBackground)(p, sId, '#405060', 'color');
    });
    console.log("Slides before changing position: ", p.slides);
    p = (0, functions_js_1.changeSlidePosition)(p, sId1, sId2);
    console.log("Slides before after position: ", p.slides);
    console.log("Slides before removing: ", p.slides);
    p = (0, functions_js_1.removeSlide)(p, p.slides[0].id);
    console.log("Slides: ", p.slides);
}
