function greetResponse(){
    let responses = ['Hey! How may I help you today?', 'Hello there!', 'Hi, how can i help you?', 'Greetings human! What shall i do for you today', 'Hello human', 'Hey there', 'Hello! Your wish is my command', 'Hello', 'Will you be my friend?']
    let response = Math.floor(Math.random() * responses.length)
    return responses[response]
}

export default greetResponse