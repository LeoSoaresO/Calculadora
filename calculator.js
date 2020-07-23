var n1 = null;
var n2 = null;
var operation = null;

$(document).ready(function(){
    $(".operation").on('click' , function(){
        operation = this.value;
        console.log(operation)
    })
    $(".numbers").on('click' , function(){
        $("#visor-input").val(this.value);
        if (n1 == null) {
              n1 = this.value;       
        } else {
            n2 = this.value;
        }
        console.log(n1, n2);
    })
    $(".result").on('click' , function(){
        result(parseInt(n1), parseInt(n2), operation);
    })
})

function result(n1, n2, operation){
    var result = 0;
    switch (operation) {
        case '+':
            result = n1 + n2;
            break;

        case '-':
            result = n1 - n2;
            break;

        case '*':
            result = n1 * n2;
            break;
        
        case '/':
            result = n1 / n2;
            break;        
        default:
            break;
    }   
    console.log(result)
}