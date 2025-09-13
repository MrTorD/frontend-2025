"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minP = createPresentation('MinimalPresentation');
changeName(minP, 'minPresentation');
const p = createPresentation('MaxPresenation');
addSlide(p, 1, { color: '#ff0000', type: 'color' });
addSlide(p, 2, { src: 'https://static.tildacdn.com/tild6137-3037-4837-b437-616464646636/10-min.jpg', type: 'picture' });
console.log(`Minimal Presentation is:`, minP);
console.log(`Maximal Presentation is:`, p);
const s1 = findSlide(p, 1);
const s2 = findSlide(p, 2);
if (s1 && s2) {
    addText(s1, 500, 500, 300, 300, 'Testing Text', 'Times New Roman', 20);
    addText(s1, 100, 200, 300, 400, 'Test.', 'Arial', 12);
    addText(s2, 200, 100, 500, 400, 'Hello World!', 'Calibri', 15);
    addText(s2, 400, 600, 200, 100, 'Hello!', 'Times New Roman', 30);
    addImage(s1, 300, 200, 60, 40, 'C:/image.jpg');
    addImage(s1, 1500, 300, 200, 150, 'C:/photos/summer.jpg');
    addImage(s2, 1000, 1500, 200, 150, 'D:/images/picture.png');
    addImage(s2, 0, 0, 400, 600, 'D:/pictures/pict.png');
}
console.log(`Slide1 is:`, s1);
console.log(`Slide2 is:`, s2);
let select;
if (s2?.slideObjects[0].type === 'text' && s2?.slideObjects[2].type === 'image') {
    select = { selectedSlideIndex: [2], selectedObjId: [s2.slideObjects[0].id, s2.slideObjects[2].id] };
}
console.log(`Selection is: `, select);
if (select)
    select.selectedObjId.forEach(id => {
        const obj = s2?.slideObjects.find(o => o.id == id);
        console.log(`Object before processing: `, obj);
        switch (obj.type) {
            case 'text':
                editText(obj, 'New edited text');
                changeTextPosition(obj, 200, 300, 400, 500);
                changeFont(obj, 'Consolas');
                changeTextSize(obj, 8);
                console.log(`Text after processing: `, obj);
                break;
            case 'image':
                changeImagePositon(obj, 200, 300, 50, 0);
                deleteObj(s2, obj.id);
                console.log(`Image after processing: `, obj);
                break;
        }
    });
if (select)
    select.selectedSlideIndex.forEach(i => {
        const s = p.slides.find(s => s.index == i);
        if (s) {
            changeBackground(s, '#405060', 'color');
        }
    });
changeSlidePosition(p, 1, 2);
console.log('Slides After processing: ', 's1 = ', s1, 's2 = ', s2);
removeSlide(p, 2);
console.log(`Presentation after processing: `, p);
function createPresentation(name) {
    return { name, slides: [] };
}
function findSlide(p, i) {
    return p.slides.find(s => s.index == i);
}
function changeName(p, name) {
    p.name = name;
}
function addSlide(p, index, background) {
    const slide = { index, background, slideObjects: [] };
    p.slides.push(slide);
}
function removeSlide(p, i) {
    p.slides.filter((s) => s.index !== i);
}
function changeSlidePosition(p, i1, i2) {
    const s1 = p.slides.find(s => s.index == i1);
    const s2 = p.slides.find(s => s.index == i2);
    if (s1 && s2) {
        const temp = i1;
        s1.index = s2.index;
        s2.index = temp;
    }
}
function addText(s, x, y, w, h, text, font, size) {
    const obj = { x, y, w, h, id: crypto.randomUUID() };
    const t = { ...obj, text, font, size, type: 'text' };
    s.slideObjects.push(t);
}
function deleteObj(s, id) {
    s.slideObjects.filter((o) => o.id !== id);
}
function addImage(s, x, y, w, h, src) {
    const obj = { x, y, w, h, id: crypto.randomUUID() };
    const image = { ...obj, type: 'image', src };
    s.slideObjects.push(image);
}
function changeTextPosition(t, x, y, w, h) {
    t.x = x;
    t.y = y;
    t.w = w;
    t.h = h;
}
function changeImagePositon(i, x, y, w, h) {
    i.x = x;
    i.y = y;
    i.h = h;
    i.w = w;
}
function editText(t, text) {
    t.text = text;
}
function changeTextSize(t, size) {
    t.size = size;
}
function changeFont(t, font) {
    t.font = font;
}
function changeBackground(s, str, type) {
    if (type == 'color')
        s.background = { color: str, type: 'color' };
    if (type == 'picture')
        s.background = { src: str, type: 'picture' };
}
//# sourceMappingURL=PresentationMaker.js.map