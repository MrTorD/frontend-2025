type Presentation = {
    name: string;
    slides: Slide[];
};

type Slide = {
    index: number;
    textFields: TextField[];
    images: Image[];
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

type Object = {
    pos: Position;
    id: string;
}


function changeName(p: Presentation, name: string) {
    p.name = name;
}

function addSlide(p: Presentation, slide: Slide) {
    p.slides.push(slide);
}

function removeSlide(p: Presentation, slide: Slide) {
    p.slides.filter((s) => s !== slide);
}

function changePosition(p: Presentation, firstSlide: Slide, secondIndex: number) {
    let secondSlide: Slide | undefined = p.slides.find((s) => s.index == secondIndex);
    if (secondSlide) {
        secondSlide.index = firstSlide.index;
        firstSlide.index = secondIndex;
    }
}

function addText(s: Slide, pos: Position, text: string, font: string) {
    let t: TextField;
    t!.text = text;
    t!.pos = pos;
    t!.font = font;
    s.textFields.push(t!);
}

function deleteText(s: Slide, t: TextField) {
    s.textFields.filter((text) => text !== t);
}

function addImage(s: Slide, image: Image) {
    s.images.push(image);
}

function deleteImage(s: Slide, image: Image) {
    s.images.filter((i) => i !== image);
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

function changeBackground(s: Slide, background: Picture) {
    s.background = background;
}