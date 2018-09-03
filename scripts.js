function sayHello() {
    console.log('Hello');
    document.body.style.backgroundColor = 'green';
    document.getElementById('h1').style.backgroundColor = 'red';
    document.getElementById('h1').style.fontSize = '60px';
    document.getElementById('display').value = 'Hello display!';
}
function read() {
    return document.getElementById('display').value;
}

function mouseEnter() {
  console.log ('hello')
}

function addToList(){
    //const a=document.getElementById('display').value;
    let para=document.createElement("li");
    let node=document.createTextNode(read());
    para.appendChild(node);
    let element=document.getElementById("list");
    element.appendChild(para);

}