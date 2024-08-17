function createElement(type, parentNode, content, classes, id, atributes, innerHtml) {
    
    const htmlElement = document.createElement(type);

    if (content && innerHtml) {
        htmlElement.innerHTML = content;
    } else {
        if (content && type !== 'input' || type !== 'textarea') {
            htmlElement.textContent = content;
        }

        if(content && type === 'input' || type === 'textarea') {
            htmlElement.value = content;
        }
    }

    if(classes && classes.length > 0) {
        htmlElement.classList.add(...classes);
    }
    
    if(id) {
        htmlElement.id = id;
    }

    if(atributes) {
        
        for (const key in atributes) {
            // htmlElement[key] = atributes[key];
            htmlElement.setAttribute(key, atributes[key]);
        }
    }

    if(parentNode) { 
        parentNode.appendChild(htmlElement);
    }

    return htmlElement;
}
