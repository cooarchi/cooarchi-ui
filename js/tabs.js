 ////// TABS
function init_tabs1(){
	 var i, tabcontent1, tablinks1;

  // Get all elements with class="tabcontent" and hide them
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 1; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }
   
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks1 = document.getElementsByClassName("tablinks1");
  for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].className = tablinks1[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  init_element= document.getElementById("Edit1").style.display = "block";
  init_element.className += " active";
}

function init_tabs2(){
	 var i, tabcontent2, tablinks2;

  // Get all elements with class="tabcontent" and hide them
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 1; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }
   
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  init_element= document.getElementById("Edit2").style.display = "block";
  init_element.className += " active";
  
  
  tablinks2[0].className += "active";
}

  
  function tab1(evt, tabName1) {
  // Declare all variables
  var i, tabcontent1, tablinks1;

  // Get all elements with class="tabcontent" and hide them
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks1 = document.getElementsByClassName("tablinks1");
  for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].className = tablinks1[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName1).style.display = "block";
  evt.currentTarget.className += " active";
}

  function tab2(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
