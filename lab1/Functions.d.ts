import { Presentation, Color, Picture } from "./Types.js";
export declare function createPresentation(name: string): Presentation;
export declare function changeName(p: Presentation, name: string): Presentation;
export declare function addSlide(p: Presentation, background: Color | Picture): Presentation;
export declare function removeSlide(p: Presentation, id: string): Presentation;
export declare function changeSlidePosition(p: Presentation, sId1: string, sId2: string): Presentation;
export declare function addText(p: Presentation, sId: string, x: number, y: number, w: number, h: number, text: string, font: string, size: number): Presentation;
export declare function deleteObj(p: Presentation, sId: string, objId: string): Presentation;
export declare function addImage(p: Presentation, sId: string, x: number, y: number, w: number, h: number, src: string): Presentation;
export declare function changeObjPositon(p: Presentation, sId: string, oId: string, x: number, y: number, w: number, h: number): Presentation;
export declare function editText(p: Presentation, sId: string, tId: string, text: string): Presentation;
export declare function changeTextSize(p: Presentation, sId: string, tId: string, size: number): Presentation;
export declare function changeFont(p: Presentation, sId: string, tId: string, font: string): Presentation;
export declare function changeBackground(p: Presentation, sId: string, src: string, type: "color" | "picture"): Presentation;
//# sourceMappingURL=Functions.d.ts.map