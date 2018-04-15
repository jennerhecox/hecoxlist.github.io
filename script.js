
// Code goes here
// Jenner Hecox
// Spring 2018
// Web233 Javascript
// Date: {4-4-18}
// Week 12 Assignment
//In .JS file
//v 4.0 save cookie
//v 4.0 read cookie on load and display
window.onload = function() {
  alert("Jenner Hecox's listbox on Github");
  populateshoppinglistonload();
   displayShoppinglists();
};
//v 3.1 addtocart empty array
var addtocart = [];

var MyItems = {
  name:"",
  price:""
};
//create an shoppinglist array to store values for item 1, item 2, item 3
var shoppinglist = [];

//add function displayShoppinglists() to display shoppinglists
//My Shopping List:


 function displayShoppinglists() {
var TheList = "";
var arrayLength = shoppinglist.length;
for (var i = 0; i < arrayLength; i++) {
var btndelete =  ' <input class="button" name="delete" type="button" value="Remove Item" onclick="deleteShoppinglists(' + i + ')" />';
var btnupdate =  ' <input class="button" name="edit" type="button" value="Edit Item" onclick="changeShoppinglist(' + i + ')" />';
var arrays = shoppinglist[i];
arrays = "'"+arrays+"'";
var btnaddcart =  '<label><input name="add" type="checkbox" id="adds" value="Add to Shopping Cart" onclick="addtoshopcart('+arrays+','+ i +')" />Add</label>';
TheRow = '<li>' + shoppinglist[i] + btndelete + ' '  + btnaddcart + '</li>';
TheList += TheRow;
}
document.getElementById("MyList").innerHTML = 'Shopping List ' + '<br>' + TheList;
}

  function addShoppinglist(item,cost) {
  //v 3.0 declare variable for groc string
  var groc="";
  //v 3.0 v 3.0 declare variable for loop count
  var count=0;
  //v 3.0 edit value for MyItems.name
  MyItems.name=item;
  //v 3.0 edit value for MyItems.cost
  MyItems.price=cost;
  //v 3.0 for loop through object propterties and 
  for (var x in MyItems){
    if (count===1){
      groc += "$";
    }
    //add to groc string from object array item
    groc += MyItems[x];
    if (count===0){
      groc += " | ";
    }
    //increment count by 1
   count++;
  }
  //push to shoppinglist
  shoppinglist.push(groc);
  //display shoppinglist
  displayShoppinglists();
//v 2.1: call function 'clearFocus'
   clearFocus();
}



//add function changeShoppinglist(position, newValue)
//function for changing a Shoppinglists given position

function changeShoppinglist(position) {
  //document.getElementById("MyList").innerHTML = shoppinglist[position];
  var arrays = shoppinglist[position];
  arrays = arrays.split(",");
    var e1 = arrays[0];
   var e2 = arrays[1];
 var ReplacedAmount = e2.replace(/\$/g,'');
  var eitem = prompt("Please enter new item", e1);
  var ecost = prompt("Please enter your name", ReplacedAmount);
  shoppinglist[position] = eitem + "," + '$' + ecost;
  displayShoppinglists();
  displayShoppingCart() 
}



//add function deleteShoppinglists(position) 
// function for deleting a Shoppinglists item
function deleteShoppinglists(position) {
  shoppinglist.splice(position, 1);
  displayShoppinglists();
}

function clearFocus() {
 //v 2.1: clear inputbox value out by id
//v 2.1: http://stackoverflow.com/questions/4135818/how-to-clear-a-textbox-using-javascript
  document.getElementById("item").value = "";
//v 3.0 clear cost field
   document.getElementById("cost").value = "";
//v 2.1: set focus on inputbox after text is cleared
//v 2.1: http://stackoverflow.com/questions/17500704/javascript-set-focus-to-html-form-element
  document.getElementById("item").focus();

}

//v3.1
function changeShoppingCart(position) {
  document.getElementById("MyCart").innerHTML = shoppinglist[position];
  var arrays = addtocart[position];
  arrays = arrays.split(",");
    var e1 = arrays[0];
   var e2 = arrays[1];
 var ReplacedAmount = e2.replace(/\$/g,'');
  var eitem = prompt("Please enter new item", e1);
  var ecost = prompt("Please enter your name", ReplacedAmount);
  addtocart[position] = eitem + "," + '$' + ecost;
  displayShoppinglists();
  displayShoppingCart() 
}

//v3.1 
function addbacktoshoppinglist(item,num) {
  //push to deleteShoppingCar
   deleteShoppingCart(num);
  shoppinglist.push(item);
  //display shoppinglist
  displayShoppinglists();
//v3.1 display displayShoppingCart() 
  displayShoppingCart() 
  clearFocus();
}


//v 3.1 Update function addShoppinglist by adding objects
function addtoshopcart(item, num) {
    deleteShoppinglists(num);
    addtocart.push(item);
  //display shoppinglist
  displayShoppinglists();
//v3.1 display displayShoppingCart() 
  displayShoppingCart() 
  //Clear
  clearFocus();
}

function displayShoppingCart() {
var TheList = "";
var arrayLength = addtocart.length;
for (var i = 0; i < arrayLength; i++) {
var btndelete =  ' <input class="button" name="delete" type="button" value="Remove Item" onclick="deleteShoppingCart(' + i + ')" />';
var btnupdate =  ' <input class="button" name="edit" type="button" value="Edit Item" onclick="changeShoppingCart(' + i + ')" />';
var arrays = addtocart[i];
arrays = "'"+arrays+"'";
var btnaddlist =  '<label><input name="add" type="checkbox" id="adds" value="Add to Shopping List" onclick="addbacktoshoppinglist('+arrays+',' + i + ')" checked="checked"/>Add</label>';
TheRow =  "<li>" + addtocart[i] + btndelete + ' ' +  ' ' + btnaddlist + '<br></li>';
TheList += TheRow;
}
document.getElementById("MyCart").innerHTML = 'Shopping Cart ' + '<br>' + TheList;
}

//multiple places in .JS. 
// Put call to savecookie(); AFTER displayShoppingCart();
displayShoppingCart();
  //v 4.0 save cookie
  savecookie();

//v3.1
function deleteShoppinglists(position) {
  shoppinglist.splice(position, 1);
  displayShoppinglists();
  displayShoppingCart() 
}

//v3.1
function deleteShoppingCart(position) {
  addtocart.splice(position, 1);
  displayShoppinglists();
  displayShoppingCart() 
}

//v 4.0 save cookie
function savecookie()
{
  delete_cookie('konkollist');
   var date = new Date();
   //keeps for a year
    date.setTime(date.getTime() + Number(365) * 3600 * 1000);
   document.cookie = 'konkollist' + "=" + escape(shoppinglist.join(',')) + "; path=/;expires = " + date.toGMTString();
}

//In .JS file
//v 4.0 read cookie and return
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

//In .JS file
//v 4.0 delete cookie
function delete_cookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//In .JS file
//v 4.0 save cookie
function savecookie()
{
  delete_cookie('konkollist'); //replace konkol with YOUR last name
   var date = new Date();
   //keeps for a year
    date.setTime(date.getTime() + Number(365) * 3600 * 1000);
  //replace konkol with YOUR last name
   document.cookie = 'Hecoxlist' + "=" + escape(shoppinglist.join(',')) + "; path=/;expires = " + date.toGMTString();
}

  
  


//In .JS file
//v 4.0 populateshoppinglistonload()
function populateshoppinglistonload()
{
  shoppinglist = [];
  addtocart = [];
  //load cookie into array
  var y = readCookie('Hecoxlist'); //replace konkol with YOUR last name
  //remove unwanted chars and format
  y = remove_unwanted(y); 
  //spit array by comma %2C
  y = y.split('%2C');
  if (y) {
    shoppinglist = y;
   }
}

//In .JS file
//v. 4.0remove and format cookie
function remove_unwanted(str) {  
    
  if ((str===null) || (str===''))  
       return false;  
 else  
   str = str.toString();  
   str = str.replace(/%20/g, "");
   str = str.replace(/%24/g, "$"); 
   str = str.replace(/%7C/g, " | ");
  return str.replace(/[^\x20-\x7E]/g, '');  
}  



//call shoppinglists();
//displayShoppinglists();

// add function addShoppinglistitem() 
// adding a shopping list item without argument
//function addShoppinglistitem() {
 // shoppinglist.push('add new item 4');
//}

// call addShoppinglistitem();

//addShoppinglistitem();

//call displayShoppinglists();

//displayShoppinglists();

//call addShoppinglist('add new item 5');
//addShoppinglist('add new item 5');

//Call changeShoppinglist(0, 'changed item 1');
//changeShoppinglist(0, 'changed item 1');

//Call: addShoppinglist('add new item 6');

//addShoppinglist('add new item 6');

//Call: changeShoppinglist(5, 'changed item 6');

//changeShoppinglist(5, 'changed item 6');

//Call: deleteShoppinglists(5);
//deleteShoppinglists(5);


//document.write('<br>My Shopping List: ', shoppinglist);
