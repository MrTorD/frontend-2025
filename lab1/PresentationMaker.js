"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function changeName(p, name) {
    p.name = name;
}
function addSlide(p, slide) {
    p.slides.push(slide);
}
function removeSlide(p, slide) {
    p.slides.filter((s) => s !== slide);
}
function changePosition(p, firstSlide, secondIndex) {
    let secondSlide = p.slides.find((s) => s.index == secondIndex);
    if (secondSlide) {
        secondSlide.index = firstSlide.index;
        firstSlide.index = secondIndex;
    }
}
function addText(s, pos, text, font) {
    let t;
    t.text = text;
    t.pos = pos;
    t.font = font;
    s.textFields.push(t);
}
function deleteText(s, t) {
    s.textFields.filter((text) => text !== t);
}
function addImage(s, image) {
    s.images.push(image);
}
function deleteImage(s, image) {
    s.images.filter((i) => i !== image);
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
function changeBackground(s, background) {
    s.background = background;
}
//# sourceMappingURL=PresentationMaker.js.map