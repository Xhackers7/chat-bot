function greetResponse(){
    let responses = ['Hey! How may I help you today?', 'Hello there!', 'Hi, how can i help you?', 'Greetings human']
    let response = Math.floor(Math.random() * responses.length)
    return responses[response]
}

export default greetResponse