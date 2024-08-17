function encodeAndDecodeMessages(text) {
    let messages = Array.from(document.querySelectorAll('textarea'));
    let inputMessage = messages[0];
    let buttons = Array.from(document.querySelectorAll('button'));
    let outputMessage = messages[1];
    let decodedMessage = '';

    let encodeBtn = buttons[0];
    encodeBtn.addEventListener('click', () => {

        let message = inputMessage.value;
        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(message[i].charCodeAt(0) + 1);
        }
        decodedMessage = message;
        outputMessage.value = encodedMessage;
        inputMessage.value = '';
    });

    let decodeBtn = buttons[1];
    decodeBtn.addEventListener('click', () => {
        outputMessage.value = decodedMessage;
    });
}