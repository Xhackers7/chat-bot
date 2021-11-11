import keys  from "./greet/greetWords"
import greetResponse from "./greet/greetResponse";

function understand(msg){
    let msgArray = msg.split(' ')
    let greetWords = keys()
    let found = false
    greetWords.forEach(greetWord => {
        if (found) return
       msgArray.forEach(word => {
           if (greetWord === word){
            alert(greetResponse())
            found = true
           }
       })
    });
    if(!found)console.log('Idk')
}
export default understand