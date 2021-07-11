var count= 0;
 

// function to display the initial 0 on loading of the counter
function initialValue() 
{
    document.getElementById("theCounter").innerHTML = count;
}


  
/* creation of add count function
checks that the count is not greater than 50
if the user clicks more than 50 times it stops adding */
function addOne() {

    if(count <= 49)
    {
        count ++;
        document.getElementById("theCounter").innerText = count;

    }
    else if(count > 49)
    {
        alert("you've clicked more than 50 times!");

    }

}


/*creation of  count subtraction function
checks that the count is not less than < 0
if the count is les than 0 instead of displaying negative count it stops subtracting*/
function subOne() {

    if(count > 0)
    {
        count --;
        document.getElementById("theCounter").innerText = count;
    }

    else if(count <= 0)
    {
 
        alert("you've clicked less than 0 times!");
       
    }

} 

// reset buton function

function reset(){
    count = 0;
    document.getElementById("theCounter").innerText = count;
}