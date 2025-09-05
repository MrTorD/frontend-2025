type Presentation = {
    name: string;
    slides: Slide[];
};

type Slide = {
    index: number;
    textFields: TextField[];
    pictures: Picture[];
    background: Picture;
}

type Selection = {
    pos: Position;
}

type TextField = {
    pos: Position;
    text: string;
    font: string;
    size: number;
}

type Position = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

type Picture = {
    pos: Position;
    url: string;
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

function addPicture(s: Slide, picture: Picture) {
    s.pictures.push(picture);
}

function deletePicture(s: Slide, picture: Picture) {
    s.pictures.filter((p) => p !== picture);
}

function changeTextPosition(t: TextField, pos: Position) {
    t.pos = pos;
}

function changePicturePositon(p: Picture, pos: Position) {
    p.pos = pos;
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