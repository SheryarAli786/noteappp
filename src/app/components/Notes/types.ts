export interface NoteItem {
    title: string;
    content: string;
    background: string;
    fontColor:string;
    date: string;
    id:number;
    isStarred: boolean;
  }
  export interface NoteItems {
    id: number;
    title: string;
    content: string;
    background: string;
    fontColor:string;
    date: string;
  }
 export interface Noteprops {
    item: NoteItem;
    handleDataUpdate:()=>void;
    openModel:()=>void;
  }
 export interface ModelProps{
    closeModel:()=>void;
    handleDataUpdate:()=>void;
    mode: string;
    selectedNote: NoteItem | null;
}