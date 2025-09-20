"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPresentation = createPresentation;
exports.changeName = changeName;
exports.addSlide = addSlide;
exports.removeSlide = removeSlide;
exports.changeSlidePosition = changeSlidePosition;
exports.addText = addText;
exports.deleteObj = deleteObj;
exports.addImage = addImage;
exports.changeObjPositon = changeObjPositon;
exports.editText = editText;
exports.changeTextSize = changeTextSize;
exports.changeFont = changeFont;
exports.changeBackground = changeBackground;
function createPresentation(name) {
    return { name, slides: [] };
}
function changeName(p, name) {
    return {
        ...p,
        name,
    };
}
function addSlide(p, background) {
    const slide = { id: crypto.randomUUID(), background, slideObjects: [] };
    return { ...p, slides: [...p.slides, slide] };
}
function removeSlide(p, id) {
    return { ...p, slides: p.slides.filter((s) => s.id !== id) };
}
function changeSlidePosition(p, sId1, sId2) {
    const slides = p.slides;
    const s1 = slides.find(s => s.id == sId1);
    const s2 = slides.find(s => s.id == sId2);
    if (s1 && s2) {
        const i1 = slides.indexOf(s1);
        const i2 = slides.indexOf(s2);
        slides[i1] = s2;
        slides[i2] = s1;
        return {
            ...p,
            slides
        };
    }
    return p;
}
function addText(p, sId, x, y, w, h, text, font, size) {
    const obj = { x, y, w, h, id: crypto.randomUUID() };
    const t = { ...obj, text, font, size, type: 'text' };
    const slides = p.slides;
    let slide = p.slides.find((s) => s.id == sId);
    if (slide) {
        const i = slides.indexOf(slide);
        slide = { ...slide, slideObjects: [...slide.slideObjects, t] };
        slides[i] = slide;
        return {
            ...p,
            slides
        };
    }
    return p;
}
function deleteObj(p, sId, objId) {
    const slides = p.slides;
    const slide = p.slides.find(s => s.id == sId);
    if (slide) {
        const i = slides.indexOf(slide);
        slide.slideObjects = slide.slideObjects.filter(o => o.id != objId);
        slides[i] = slide;
        return {
            ...p,
            slides
        };
    }
    return p;
}
function addImage(p, sId, x, y, w, h, src) {
    const obj = { x, y, w, h, id: crypto.randomUUID() };
    const image = { ...obj, type: 'image', src };
    const slides = p.slides;
    let slide = p.slides.find((s) => s.id == sId);
    if (slide) {
        const i = slides.indexOf(slide);
        slide = { ...slide, slideObjects: [...slide.slideObjects, image] };
        slides[i] = slide;
        return {
            ...p,
            slides
        };
    }
    return p;
}
function changeObjPositon(p, sId, oId, x, y, w, h) {
    const slides = p.slides;
    const slide = slides.find(s => s.id = sId);
    let o = slide?.slideObjects.find(o => o.id == oId);
    if (slide && o) {
        o = { ...o, x, y, w, h };
        return { ...p, slides };
    }
    return p;
}
function editText(p, sId, tId, text) {
    const slides = p.slides;
    const slide = slides.find(s => s.id = sId);
    let t = slide?.slideObjects.find(t => t.id == tId);
    if (slide && t && t.type == 'text') {
        t = { ...t, text };
        return { ...p, slides };
    }
    return p;
}
function changeTextSize(p, sId, tId, size) {
    const slides = p.slides;
    const slide = slides.find(s => s.id = sId);
    let t = slide?.slideObjects.find(t => t.id == tId);
    if (slide && t && t.type == 'text') {
        t = { ...t, size };
        return { ...p, slides };
    }
    return p;
}
function changeFont(p, sId, tId, font) {
    const slides = p.slides;
    const slide = slides.find(s => s.id = sId);
    let t = slide?.slideObjects.find(t => t.id == tId);
    if (slide && t && t.type == 'text') {
        t = { ...t, font };
        return { ...p, slides };
    }
    return p;
}
function changeBackground(p, sId, src, type) {
    const slides = p.slides;
    const slide = slides.find(s => s.id = sId);
    if (slide) {
        slide.background = { src, type };
        return {
            ...p,
            slides
        };
    }
    return p;
}
