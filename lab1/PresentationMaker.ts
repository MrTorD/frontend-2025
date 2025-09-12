type Presentation = {
    name: string;
    slides: Slide[];
};

type Slide = {
    index: number;
    slideObjects: SlideObject[];
    background: Picture | Color;
}

type Selection = {
    selectedSlideId: string[];
    selectedObjId: string[];
}

type Color = {
    type: 'color';
    color: string;
}

type Picture = {
    type: 'picture';
    src: string;
}

type Image = Object & {
    type: 'image';
    src: string;
}

type TextField = Object & {
    text: string;
    font: string;
    size: number;
    type: 'text';
}

type Position = {
    x: number;
    y: number;
    w: number;
    h: number;
}

type SlideObject = TextField | Image;

type Object = {
    pos: Position;
    id: string;
}

function changeName(p: Presentation, name: string) {
    p.name = name;
}

function addSlide(p: Presentation, index: number, background: Color | Picture) {
    const slide = {index, background, slideObjects: []}
    p.slides.push(slide);
}

function removeSlide(p: Presentation, i: number) {
    p.slides.filter((s) => s.index !== i);
}

function changePosition(p: Presentation, i1: number, i2: number) {
    const s1 = p.slides.find(s => s.index = i1);
    const s2 = p.slides.find(s => s.index = i2);
    if (s1 && s2) {
        const temp = i1;
        s1.index = s2.index;
        s2.index = temp;
    }
}

function addText(s: Slide, x: number, y: number, w: number, h: number, text: string, font: string, size: number) {
    const pos = {x, y, w, h};
    const t: TextField = {text, pos, font, size, type: 'text', id: crypto.randomUUID()};
    s.slideObjects.push(t);
}

function deleteObj(s: Slide, id: string) {
    s.slideObjects.filter((o) => o.id !== id);
}

function addImage(s: Slide, x: number, y: number, w: number, h: number, src: string) {
    const pos: Position = {x, y, w, h};
    const image: Image = {pos, type: 'image', src, id: crypto.randomUUID()};
    s.slideObjects.push(image);
}

function changeTextPosition(t: TextField, pos: Position) {
    t.pos = pos;
}

function changeImagePositon(i: Image, pos: Position) {
    i.pos = pos;
}

function editText(t: TextField, text: string) {
    t.text = text;
}

function changeTextSize(t: TextField, size: number) {
    t.size = size;
}

function changeFont(t: TextField, font: string) {
    t.font = font;
}

function changeBackground(s: Slide, str: string, type: string) {
    if (type == 'color') s.background = {color: str, type: 'color'};
    if (type == 'picture') s.background = {src: str, type: 'picture'};
}