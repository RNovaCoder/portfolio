const htmlSuscritos: HTMLElement[] = [];

function deleteObject (htmlElement : HTMLElement | null) {
  if (htmlElement) {
    const indice = htmlSuscritos.indexOf(htmlElement);
    if (indice > -1) {
      htmlSuscritos.splice(indice, 1);
    }
  }
}

export const toggleContent = (
  htmlElement: HTMLElement | null,
  estado: boolean,
  hbase: string = "0px",
) => {
  if (htmlElement != null) {
    const ElementStyle = htmlElement.style;
    ElementStyle.height = htmlElement.scrollHeight + "px";
    htmlElement.scrollHeight;
    ElementStyle.height = estado ? hbase : htmlElement.scrollHeight + "px";

    if (!htmlSuscritos.some((ref) => ref === htmlElement)) {
      htmlSuscritos.push(htmlElement);

      const toggleContentFunction = (event: TransitionEvent) => {
        if (event.propertyName === "height" && ElementStyle.height != hbase) {
          ElementStyle.height = "auto";
        }
        htmlElement?.removeEventListener(
          "transitionend",
          toggleContentFunction,
        );
        deleteObject(htmlElement)
      }

      htmlElement.addEventListener("transitionend", toggleContentFunction);
    }
  }
};

export function verSuscritos() {
  console.log("Objetos Suscritos: ", htmlSuscritos.concat());
}
