var name_of_guest_array=[];
function submit(){
    var guest_name=document.getElementById("enter_name").ariaValueMax;
    name_of_guest_array,push(guest_name);
    document.getAnimations("display_names").innerHtml=name_of_guest_array;
    console.log(name_of_guest_array);
    var length_of_the_array=name_of_guest_array.length;
    console.log(length_of_the_array);
}
function show_list (){
    var i=name_of_guest_array.join("<br>");
    console.log(name_of_guest_array);
    document.getElementById("shownames").innerHTML=i.toString();

}
function sorting (){

    name_of_guest_array.sort();
    var i=name_of_guest_array.join("<br>");
    console.log(name_of_guest_array);
    document.getElementById("sortednames").innerHTML=i.toString();

}
function search (){
    var s = document.getElementById("searchnames").value;
    var found =0;
    var j;
    for ( j=0;j<name_of_guest_array.length; j++) {  if ( s==name_of_guest_array [j])
    found=found+1;
    }
}
document.getElementById("search_names").innerHTML="name_found" + found+"Time/s";
console.log("foundname"+found+"Time/s");