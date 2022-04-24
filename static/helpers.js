export const createElement = (tag, classes, ...content) => {
    const element = document.createElement(tag);
    for(const cssClass of classes) {
        element.classList.add(cssClass);
    }
    element.append(...content);
    return element;
};