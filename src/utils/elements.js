export const createElement = (tagName, props, children = []) => {
    const element = document.createElement(tagName);
    Object.assign(element, props);
    children.forEach((child) => {
      element.append(child);
    });
    return element;
  };

// el object.assign lo que hace es que todo lo que se meta en props se meta en el element, que es el objeto...