function attachEvents() {

    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    const inputName = document.querySelector('input[name="author"]');
    const inputMessage = document.querySelector('input[name="content"]');
    const messagesArea = document.getElementById('messages');
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', async () => {
        const messagesFormat = {
            author: inputName.value,
            content: inputMessage.value,
        }
        if (inputName.value !== '' && inputMessage.value !== '') {
            await fetch(BASE_URL, {
                method: 'POST',
                body: JSON.stringify(messagesFormat),
            });
        }
        inputName.value = '';
        inputMessage.value = '';
    });

    refreshBtn.addEventListener('click', async () => {
       const response = await fetch(BASE_URL);
       const messages = await response.json();
       const msgArr = [];
       for (const key in messages) {
            const messageInfo = [messages[key].author, messages[key].content];
            msgArr.push(`${messageInfo[0]}: ${messageInfo[1]}`);
       }
       messagesArea.textContent = msgArr.join('\n');
    });

}

attachEvents();