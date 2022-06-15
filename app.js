var arry =["pizza","biryani","kabab","raita" , "tikka","sandwich" , "ice cream " ,"orange juice" ,"fish"]
var search = prompt("What do You Like to Eat")
D= search.toLocaleLowerCase()
var falg =false;
for(i=0 ; i<arry.length; i++){
    if(D=== arry[i]){
        document.write("<h1>" + arry[i]+ " is available right now!")
        falg = true
        break;
    }
}
if(falg=== false){
    document.write(search +" it's not availabel right now!")
}
    document.write( " <br >    Try it for make your life delicious:   <br> special tikka <br>  Ice cream <br> special fish  <br> koffta" )