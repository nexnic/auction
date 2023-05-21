// Meta tags 

export function SetMetaTag(Info,name){
    document.querySelector('meta[name="description"]').setAttribute("content", `${Info} ${name}`);
}