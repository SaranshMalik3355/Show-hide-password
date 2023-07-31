
# Show-Hide Password

1. Live preview:- https://showhide-password.netlify.app/

2. Learning goals:- a. How to code checkbox in javaScript.
                    b. How to code and work with setAttribute() function
3. We have made a form with labels but labels are inline elements so we cannot apply margins to be able to apply margins we make them block elements.

4. We know that when input type is password we get masked characters or letter.

5. So, in order to un-masked it we have to map the checkbox to toggle or change the input type from type = "password" to type = "text" to show the password and then again type = "text" to type = "password" to hide the password

6. To know the state of checkbox whether it is checked or unchecked. We do it by using checked property i.e 
if(checked.checked == true){
    console.log("checked")
}else{
    console.log("un-checked")
}
7. To change the value of type of input we use setAttribute() function.

8. This function is used to change the Attribute or replace with the another attribute .

9. Syntax - passwd.setAttribute('type','text')
