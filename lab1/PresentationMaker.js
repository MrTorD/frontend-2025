"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function changeName(p, name) {
    p.name = name;
}
function addSlide(p, index, background) {
    let slide = { index, background, slideObjects: [] };
    p.slides.push(slide);
}
function removeSlide(p, i) {
    p.slides.filter((s) => s.index !== i);
}
function changePosition(p, i1, i2) {
    let s1 = p.slides.find(s => s.index = i1);
    let s2 = p.slides.find(s => s.index = i2);
    if (s1 && s2) {
        let temp = i1;
        s1.index = s2.index;
        s2.index = temp;
    }
}
function addText(s, x, y, w, h, text, font, size) {
    let pos = { x, y, w, h };
    let t = { text, pos, font, size, type: 'text', id: crypto.randomUUID() };
    s.slideObjects.push(t);
}
function deleteObj(s, id) {
    s.slideObjects.filter((o) => o.id !== id);
}
function addImage(s, x, y, w, h, src) {
    let pos = { x, y, w, h };
    let image = { pos, type: 'image', src, id: crypto.randomUUID() };
    s.slideObjects.push(image);
}
function changeTextPosition(t, pos) {
    t.pos = pos;
}
function changeImagePositon(i, pos) {
    i.pos = pos;
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