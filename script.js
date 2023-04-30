let Type = 10;
let typedNum = null;
let input = document.getElementById("res");
let inputType = document.getElementById("sys");
let action = null;

inputType.value = "DEC";

function makeOperation(num1, num2, operation, b) 
{
    const dec1 = parseInt(num1, b);
    const dec2 = parseInt(num2, b);
   
    let result = 0;

    switch (operation) 
    {
      case "+":
        result = dec1 + dec2;
        break;
      case "-":
        result = dec1 - dec2;
        break;
      case "*":
        result = dec1 * dec2;
        break;
      case "/":
        result = dec1 / dec2;
        break;
    }

    return result;
}

function convert(number, b, to)
{
    const decimal = parseInt(number, b);
    let result = decimal.toString(to);
    return result;
}

document.getElementById("bin").addEventListener("click", ()=>
{
    if(Type != 2)
    {
        input.value = convert(input.value, Type, 2);
        Type = 2;
        inputType.value = "BIN";
    }
});

document.getElementById("oct").addEventListener("click", ()=>
{
    if(Type != 8)
    {
        input.value = convert(input.value, Type, 8);
        Type = 8;
        inputType.value = "OCT";
    }
});

document.getElementById("dec").addEventListener("click", ()=>
{
    if(Type != 10)
    {
        input.value = convert(input.value, Type, 10);
        Type = 10;
        inputType.value = "DEC";
    }
});

document.getElementById("hex").addEventListener("click", ()=>
{
    if(Type != 16)
    {
        input.value = convert(input.value, Type, 16);
        Type = 16;
        inputType.value = "HEX";
    }
});

document.getElementById("btn_add").addEventListener("click", ()=>
{
    if(input.value != "")
    {
        action = "+";
        typedNum = input.value;
        input.value = "";
    }
});

document.getElementById("btn_sub").addEventListener("click", ()=>
{
    if(input.value != "")
    {
        action = "-";
        typedNum = input.value;
        input.value = "";
    }
});

document.getElementById("btn_mul").addEventListener("click", ()=>
{
    if(input.value != "")
    {
        action = "*";
        typedNum = input.value;
        input.value = "";
    }
});

document.getElementById("btn_div").addEventListener("click", ()=>
{
    if(input.value != "")
    {
        action = "/";
        typedNum = input.value;
        input.value = "";
    }
});

document.getElementById("btn_result").addEventListener("click", ()=>
{
    if(input.value != "" && typedNum != null)
    {
        let num = makeOperation(typedNum, input.value, action, Type);
        input.value = convert(num, 10, Type);
    }
});