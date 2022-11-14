let btn=document.querySelector('.btn')
let name = document.querySelector('.name_auth')
let message = document.querySelector('.message_auth')
let history_show=document.querySelector('.showHistory');
let history = document.querySelector('.history')

class Message{
    constructor(name, message) {
        this.name = name;
        this.date=new Date();
        this.message = message;
      }
      gettime() {
        let time = new Date();
        return `${time.getHours()}: ${time.getMinutes()}`
    }
      toString(){
        return(`${this.date.getHours()}:${this.date.getMinutes()} ${this.name}: ${this.message} \n`);
      }
}
class Messenger{
    arr=[];
    send(name,message){
        let newmessage=new Message(name,message)
        this.arr.push(newmessage)
    };
    showHistory(){
        this.arr.forEach(message=>{
            console.log(message.toString())
        })
    }
}

let messenger = new Messenger()
btn.addEventListener('click',(e)=>{
    if(name.value=='' || message.value==''){
        alert("Please enter values");
    }else{
        messenger.send(name.value, message.value)
        name.value='';
        message.value='';
    }
})
history_show.addEventListener('click',(e)=>{
    let data='';
    messenger.arr.forEach(message_data=>{
        data+=message_data.toString()
    })
    history.innerText=` ${data}`
})

