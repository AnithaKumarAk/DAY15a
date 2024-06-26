var h1 = document.createElement('h1')
 h1.setAttribute('id', 'title')
 h1.innerHTML = 'Calculator'
 h1.classList.add('text-center', 'mt-3', 'h1')
 document.body.appendChild(h1)

 var div = document.createElement("div");
 div.setAttribute("class", "container");
 div.setAttribute('id', 'div')
 document.body.appendChild(div);

 var input = document.createElement('input')
 input.setAttribute('id', 'result')
 input.setAttribute('type', 'text')
 input.setAttribute('placeholder', 'number')
 input.setAttribute('onkeypress', 'typing()')
 input.classList.add('disp')
 document.getElementById('div').appendChild(input)

 var div1 = document.createElement("div");
 div1.setAttribute("class", "row");
 div1.setAttribute('id', 'div1')
 document.getElementById('div').appendChild(div1);

 var div2 = document.createElement("div");
 div2.setAttribute('id', 'div2')
 div2.classList.add('btn-group')
 document.getElementById('div1').appendChild(div2);

 var button = document.createElement('button')
 button.setAttribute('id', 'clear')
 button.setAttribute('onclick', 'cancel()')
 button.classList.add('btn', 'btn-lg')
 button.innerHTML = '<b style="color:green">C</b>'
 document.getElementById('div2').appendChild(button)

 var button1 = document.createElement('button')
 button1.setAttribute('onclick', 'dlt()')
 button1.classList.add('btn', 'btn-lg')
 button1.innerHTML = `<img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/15/000000/external-left-arrows-kmg-design-glyph-kmg-design-1.png"/>
<a href="https://icons8.com/icon/OVjJHcIsyodA/left"></a>`
 document.getElementById('div2').appendChild(button1)

 var button2 = document.createElement('button')
 button2.setAttribute('onclick', 'decimal()')
 button2.classList.add('btn', 'btn-lg')
 button2.innerHTML = '.'
 document.getElementById('div2').appendChild(button2)

 var button3 = document.createElement('button')
 button3.setAttribute('onclick', 'multi()')
 button3.classList.add('btn', 'btn-lg', 'cut')
 button3.innerHTML = '<b style="color:red">x</b>'
 document.getElementById('div2').appendChild(button3)

 var div3 = document.createElement('div')
 div3.setAttribute('id', 'div3')
 div3.setAttribute('class', 'row')
 document.getElementById('div').appendChild(div3)

 var div4 = document.createElement('div')
 div4.setAttribute('id', 'div4')
 div4.classList.add('btn-group')
 document.getElementById('div3').appendChild(div4)

 var button4 = document.createElement('button')
 button4.setAttribute('onclick', 'seven()')
 button4.classList.add('btn', 'btn-lg')
 button4.innerHTML = '7'
 document.getElementById('div4').appendChild(button4)

 var button5 = document.createElement('button')
 button5.setAttribute('onclick', 'eight()')
 button5.classList.add('btn', 'btn-lg')
 button5.innerHTML = '8'
 document.getElementById('div4').appendChild(button5)

 var button6 = document.createElement('button')
 button6.setAttribute('onclick', 'nine()')
 button6.classList.add('btn', 'btn-lg')
 button6.innerHTML = '9'
 document.getElementById('div4').appendChild(button6)

 var button7 = document.createElement('button')
 button7.setAttribute('onclick', 'divide()')
 button7.classList.add('btn', 'btn-lg', 'cut')
 button7.innerHTML = '<b style="color:red">/</b>'
 document.getElementById('div4').appendChild(button7)

 var div5 = document.createElement('div')
 div5.setAttribute('id', 'div5')
 div5.setAttribute('class', 'row')
 document.getElementById('div').appendChild(div5)

 var div6 = document.createElement('div')
 div6.setAttribute('id', 'div6')
 div6.classList.add('btn-group')
 document.getElementById('div5').appendChild(div6)

 var button8 = document.createElement('button')
 button8.setAttribute('onclick', 'four()')
 button8.classList.add('btn', 'btn-lg')
 button8.innerHTML = '4'
 document.getElementById('div6').appendChild(button8)

 var button9 = document.createElement('button')
 button9.setAttribute('onclick', 'five()')
 button9.classList.add('btn', 'btn-lg')
 button9.innerHTML = '5'
 document.getElementById('div6').appendChild(button9)

 var button10 = document.createElement('button')
 button10.setAttribute('onclick', 'six()')
 button10.classList.add('btn', 'btn-lg')
 button10.innerHTML = '6'
 document.getElementById('div6').appendChild(button10)

 var button11 = document.createElement('button')
 button11.setAttribute('id', 'subtract')
 button11.setAttribute('onclick', 'minus()')
 button11.classList.add('btn', 'btn-lg', 'cut')
 button11.innerHTML = '<b style="color:red">-</b>'
 document.getElementById('div6').appendChild(button11)

 var div7 = document.createElement('div')
 div7.setAttribute('id', 'div7')
 div7.setAttribute('class', 'row')
 document.getElementById('div').appendChild(div7)

 var div8 = document.createElement('div')
 div8.setAttribute('id', 'div8')
 div8.classList.add('btn-group')
 document.getElementById('div7').appendChild(div8)

 var button12 = document.createElement('button')
 button12.setAttribute('id', '1')
 button12.setAttribute('onclick', 'one()')
 button12.classList.add('btn', 'btn-lg')
 button12.innerHTML = '1'
 document.getElementById('div8').appendChild(button12)

 var button13 = document.createElement('button')
 button13.setAttribute('id', '2')
 button13.setAttribute('onclick', 'two()')
 button13.classList.add('btn', 'btn-lg')
 button13.innerHTML = '2'
 document.getElementById('div8').appendChild(button13)

 var button14 = document.createElement('button')
 button14.setAttribute('id', '3')
 button14.setAttribute('onclick', 'three()')
 button14.classList.add('btn', 'btn-lg')
 button14.innerHTML = '3'
 document.getElementById('div8').appendChild(button14)

 var button15 = document.createElement('button')
 button15.setAttribute('id', 'add')
 button15.setAttribute('onclick', 'plus()')
 button15.classList.add('btn', 'btn-lg', 'cut')
 button15.innerHTML = '<b style="color:red">+</b>'
 document.getElementById('div8').appendChild(button15)

 var div9 = document.createElement('div')
 div9.setAttribute('id', 'div9')
 div9.setAttribute('class', 'row')
 document.getElementById('div').appendChild(div9)

 var div10 = document.createElement('div')
 div10.setAttribute('id', 'div10')
 div10.classList.add('btn-group')
 document.getElementById('div9').appendChild(div10)

 var button16 = document.createElement('button')
 button16.setAttribute('onclick', 'zero()')
 button16.classList.add('btn', 'btn-lg')
 button16.innerHTML = '0'
 document.getElementById('div10').appendChild(button16)

 var button17 = document.createElement('button')
 button17.setAttribute('onclick', 'doubleZero()')
 button17.classList.add('btn', 'btn-lg', 'cut')
 button17.innerHTML = '00'
 document.getElementById('div10').appendChild(button17)

 var button18 = document.createElement('button')
 button18.setAttribute('id', 'equal')
 button18.setAttribute('onclick', 'equal()')
 button18.classList.add('btn', 'btn-lg', 'btn-primary', 'col-5', 'cut')
 button18.innerHTML = '<b style="color:red">=</b>'
 document.getElementById('div10').appendChild(button18)

 //function for last entry deletion

 function dlt() {
     let show = document.getElementById("result");
     show.value = show.value.slice(0, show.value.length - 1);
 }

 //function for keyboard type

 function typing() {
     let show = document.getElementById("result");
     if (event.charCode >= 48 && event.charCode <= 57 || event.key === "+" || event.key === "-" || event.key === "/" || event.key === "*") {
         show.value += key;
     } else if (event.key === "Enter") {
         equal();
     } else {
         alert("type only numbers");
         event.preventDefault();
     }
 }

 //function for clear the display

 function cancel() {
     let cancel = document.getElementById("result");
     cancel.value = null;
 }

 //function for number 0

 function zero() {
     let zero = document.getElementById("result");
     zero.value += 0;
 }

 ////function for number 00

 function doubleZero() {
     let zero = document.getElementById("result");
     zero.value += 0;
     zero.value += 0;
 }

 //function for number 1

 function one() {
     let one = document.getElementById("result");
     one.value += 1;
 }

 //function for number 2

 function two() {
     let two = document.getElementById("result");
     two.value += 2;
 }

 //function for number 3

 function three() {
     let three = document.getElementById("result");
     three.value += 3;
 }

 //function for number 4

 function four() {
     let four = document.getElementById("result");
     four.value += 4;
 }

 //function for number 5

 function five() {
     let five = document.getElementById("result");
     five.value += 5;
 }

 //function for number 6

 function six() {
     let six = document.getElementById("result");
     six.value += 6;
 }

 //function for number 7

 function seven() {
     let seven = document.getElementById("result");
     seven.value += 7;
 }

 //function for number 8

 function eight() {
     let eight = document.getElementById("result");
     eight.value += 8;
 }

 //function for number 9

 function nine() {
     let nine = document.getElementById("result");
     nine.value += 9;
 }

 //function for +

 function plus() {
     let plus = document.getElementById("result");
     plus.value += "+";
 }

 //function for -

 function minus() {
     let minus = document.getElementById("result");
     minus.value += "-";
 }

 //function for /

 function divide() {
     let divide = document.getElementById("result");
     divide.value += "/";
 }

 //function for *

 function multi() {
     let mul = document.getElementById("result");
     mul.value += "*";
 }

 //function for  .(decimal)

 function decimal() {
     let deci = document.getElementById("result");
     deci.value += ".";
 }

 //function for equal

 function equal() {
     let value = document.getElementById("result");
     value.value = eval(value.value);
 }