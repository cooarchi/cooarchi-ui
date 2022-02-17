
	//cofig variables
	//var backend_url = 

	



	

   //UI STATES
	var ui_parameter_e1 = {}
	var ui_parameter_e2 = {}
  
  
   //initialize menu states
   
    var add_active = false;
	
	var upload_active1 = false
	var upload_active2 = false
	
	var text_active1 = false
	var text_active2 = false
	
	var ui_add_node = false;

	
	//initialize ui parameters for each elements
	ui_parameter_e1.isCoreElement = false
	ui_parameter_e1.isFile = false
	ui_parameter_e1.isLocation = false 
	ui_parameter_e1.isLongText = false 
	ui_parameter_e1.longText = ""
	ui_parameter_e1.mediaType = "none"
	ui_parameter_e1.triggerWarning = false
	ui_parameter_e1.url = ' '
	
	
	ui_parameter_e2.isCoreElement = false
	ui_parameter_e2.isFile = false
	ui_parameter_e2.isLocation = false 
	ui_parameter_e2.isLongText = false 
	ui_parameter_e2.longText = ""
	ui_parameter_e2.mediaType = "none" 
	ui_parameter_e2.triggerWarning = false
	ui_parameter_e2.url = ' '	  
		  
	var response_url;
	var response_url2;

	$("#longtext1").val("")
	$("#longtext2").val("")


	
  
  	var test_savedata = { "nodes": [ { "label": "cooArchi", "index": 0, "isLocation": true, "isLongText": false, "mediaType": "none", "triggerWarning": false }, { "label": "foo321456", "index": 0, "isLocation": false, "isLongText": false, "mediaType": "none", "triggerWarning": false } ], "links": [ { "index": 23, "label": "dwa", "source": { "label": "cooArchi" }, "target": { "label": "foo321456" } } ] } 


	//global variables
	var init = false;
  
  
///////	FILE UPLOAD
	
	var fileobj1;
function upload_file1(e) {
    e.preventDefault();
    fileobj1 = e.dataTransfer.files[0];
    ajax_file_upload(fileobj1);
	//upload_data(fileobj)
}
  
function file_explorer1() {
    document.getElementById('selectfile').click();
    document.getElementById('selectfile').onchange = function() {
        fileobj1 = document.getElementById('selectfile').files[0];
        ajax_file_upload1(fileobj1);
		//upload_data(fileobj1)
    };
}
  
  

	
	
function ajax_file_upload1(file_obj) {
    if(file_obj != undefined) {
        var form_data = new FormData();                  
        form_data.append('file', file_obj);
        var xhttp = new XMLHttpRequest();
		xhttp.open("POST", backend_url+ "/upload", true);  
        //xhttp.open("POST", "ajax.php", true);
        xhttp.onload = function(event) {
            oOutput = document.querySelector('#img-content1');
            if (xhttp.status == 200) {
				var response =  JSON.parse(this.responseText)
				response_url = response.filename;
				console.log(response_url)

                oOutput.innerHTML = "<img class='inserted_img' src='" + backend_url + response_url +"' alt='The Image' />";
				
				var fileending = response_url.substring(response_url.lastIndexOf('.')+1, response_url.length) || response_url;
				
				console.log(fileending)
				
				var media_type = "none";
				
				if(fileending == "jpg" || fileending =="png" ||fileending == "JPG" ||   fileending =="PNG"){
					media_type = "image"
				}
				if(fileending == "mp3" || fileending =="wav" || fileending =="ogg"){
					media_type = "audio"
				}
				if(fileending == "mp4"){
					media_type = "video"
				}
				
				if(upload_active1){
					ui_parameter_e1.url =  response_url
					ui_parameter_e1.mediaType = media_type
					ui_parameter_e1.isFile = true
					console.log("upload1 active")
				}
				if(upload_active2){
					ui_parameter_e2.url =  response_url
					ui_parameter_e2.mediaType = media_type
					ui_parameter_e2.isFile = true
					console.log("upload2 active")
				}
				
				
				
				
            } else {
                oOutput.innerHTML = "Error " + xhttp.status + " occurred when trying to upload your file.";
            }
        }
 
        xhttp.send(form_data);
    }
}



var fileobj2;
function upload_file2(e) {
    e.preventDefault();
    fileobj2 = e.dataTransfer.files[0];
    ajax_file_upload(fileobj2);
	//upload_data(fileobj)
}
  

function file_explorer2() {
    document.getElementById('selectfile').click();
    document.getElementById('selectfile').onchange = function() {
        fileobj2 = document.getElementById('selectfile').files[0];
        ajax_file_upload2(fileobj2);
		//upload_data(fileobj1)
    };
}
  
  

	
	
function ajax_file_upload2(file_obj) {
    if(file_obj != undefined) {
        var form_data = new FormData();                  
        form_data.append('file', file_obj);
        var xhttp = new XMLHttpRequest();
		xhttp.open("POST", backend_url + "/upload", true); 
        //xhttp.open("POST", "ajax.php", true);
        xhttp.onload = function(event) {
            oOutput = document.querySelector('#img-content2');
            if (xhttp.status == 200) {
				var response =  JSON.parse(this.responseText)
				response_url2 = response.filename;
				console.log(response_url2)

                oOutput.innerHTML = "<img class='inserted_img' src='" + backend_url + response_url2 +"' alt='The Image' />";
				
				var fileending = response_url2.substring(response_url2.lastIndexOf('.')+1, response_url2.length) || response_url2;
				
				console.log(fileending)
				
				var media_type = "none";
				
				if(fileending == "jpg" || fileending =="png" ||fileending == "JPG" ||   fileending =="PNG"){
					media_type = "image"
				}
				if(fileending == "mp3" || fileending =="wav" || fileending =="ogg"){
					media_type = "audio"
				}
				if(fileending == "mp4"){
					media_type = "video"
				}
				
				if(upload_active1){
					ui_parameter_e1.url =  response_url
					ui_parameter_e1.mediaType = media_type
					ui_parameter_e1.isFile = true
					console.log("upload1 active")

				

				}
				if(upload_active2){
					ui_parameter_e2.url =  response_url2
					ui_parameter_e2.mediaType = media_type
					ui_parameter_e2.isFile = true
					console.log("upload2 active")

				
				}
				
				
				
				
            } else {
                oOutput.innerHTML = "Error " + xhttp.status + " occurred when trying to upload your file.";
            }
        }
 
        xhttp.send(form_data);
    }
}


function save_file1() {
	$(".file_and_blur").css("display", "none");
	console.log("save")
	if(ui_parameter_e2.url != ' '){
		$(".img1_selected").css("display", "block");
	}
}

function save_file2() {
	$(".file_and_blur").css("display", "none");
	console.log("save")
	if(ui_parameter_e2.url != ' '){
		$(".img2_selected").css("display", "block");
	}
}

function save_text1() {
	ui_parameter_e1.isLongText = true 
	ui_parameter_e1.label = $('#longtext1').val()
	ui_parameter_e1.longText = $('#longtext1').val()
	console.log(ui_parameter_e1.longText)
	$(".text_and_blur").css("display", "none");
	if($('#longtext2').val() != ""){
		$(".text1_selected").css("display", "block");
	}
	
	console.log("saved text: " + $('#longtext2').val())
}

function save_text2() {
	ui_parameter_e2.isLongText =  true
	ui_parameter_e2.label = $('#longtext2').val()
	ui_parameter_e2.longText = $('#longtext2').val()
	console.log(ui_parameter_e2.longText)
	
	$(".text_and_blur").css("display", "none");
	
	if($('#longtext2').val() != ""){
		$(".text2_selected").css("display", "block");
	}
	console.log("save")
}
  



/////// Start of the simulation with loading of config.json
	var backend_url
	d3.json("config/config.json", function(response) {
    
	backend_url = response.settings.backend_url
	console.log(backend_url);
	
	
	//check user status
	get_auth()

      Array.prototype.delete = function (arr) {
        var t = [];
        for (let j = 0; j < this.length; ++j) {
          let f = false;
          for (let i = 0; i < arr.length; ++i) {
            if (j == arr[i]) {
              f = true
            }
          }
          if (!f) {
            t.push(this[j])
          }
        }
        return t;
      }
	  
	  
	
	  
      var svg = d3.select("svg"),
        w = $(window).width();
        h = $(window).height();
        n = 1;
		
		svg.attr('width', w)
        .attr('height', h);
		
		
		var background_rect = svg.append("rect")
		.attr("class", "background-rect")
		.attr("width", "100%")
		.attr("height", "100%");
		
		nodesArray = []
		linksArray = []
		
		
		
		
		if(init==true){
			nodesArray = d3.range(n).map(function (i) { return { index: i, label: "cooArchi",isCoreElement: false, isFile: false, isLocation: false, isLongText: false, longText: null, mediaType: null, triggerWarning: false , url: " "}; }),
			//nodesArray = testdata.nodes
			
			
			
			linksArray = d3.range(n).map(function (i) {
			  return {
				source: i,
				target: Math.floor(Math.random() * n)
				}
			})
			
		}
		//linksArray = testdata.links;
		
		var dataIn = test_savedata;

		
		
		
		//FORCE SETTINGS
		var charge_strength = 10;
		var link_distance = 10;
		var link_strenght = 10;
		var collision_radius = 100;
		
		//image SETTINGS
		image_height = 75;
		image_width = 75;
		
      var simulation = d3.forceSimulation(nodesArray)
        .force("charge", d3.forceManyBody().strength(charge_strength))
        .force("link", d3.forceLink(linksArray).distance(link_distance).strength(link_strenght))
		.force('collision', d3.forceCollide().radius(collision_radius))
		//.force("radial", d3.forceRadial(1000, w / 2, h / 2))
        .force("center", d3.forceCenter(w/2, h/2))
        //.force("x", d3.forceX(w / 2).strength(0.05).x(w))
        .force("y", d3.forceY(h / 2).strength(0.05).y(h*2))
		 //.force("forceY")
        //.strength(100)
        //.y(height * 1)
        .on("tick", ticked);


	
		
		
	  var g_pan = svg.append("g")
        .attr("class", "pan");
		

		svg.call(d3.zoom().on("zoom", function () {
			g_pan.attr("transform", d3.event.transform)
		}))

		
      var g_links = g_pan.append("g")
        .attr("class", "links");
      var g_nodes = g_pan.append("g")
        .attr("class", "nodes");
	var g_images = g_pan.append("g")
        .attr("class", "node_images");	
	var g_hitboxes = g_pan.append("g")
        .attr("class", "hitboxes");
	  var g_lables = g_pan.append("g")
        .attr("class", "lables");
	  var g_linknames = g_pan.append("g")
        .attr("class", "linknames");
	var g_buttons = g_pan.append("g")
        .attr("class", "buttons");

	//THIS PART IS ONLY FOR TESTDATA

		

		
		
		///DRAG FUCTION
		function dragstarted(d) {
		  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
		  d.fx = d.x;
		  d.fy = d.y;
		}

		function dragged(d) {
		  d.fx = d3.event.x;
		  d.fy = d3.event.y;
		}

		function dragended(d) {
		  if (!d3.event.active) simulation.alphaTarget(0);
		  d.fx = null;
		  d.fy = null;
		}

		//add nodes
		 //svg.on("click", add, true);


      function reDraw() {
	  	 
		 
		 
		var update_images = g_images.selectAll("image")
			.data(nodesArray);
		update_images.exit().remove();
        nodeImages = update_images.enter()
			.append("image")
			.attr("xlink:href", function(d){
				if(d.isLongText == true){
					return "icons/file2.png"
				
				}
				
			   if(d.isFile == true){
			
			   
				
				if(d.mediaType == "audio"){
					return "icons/audiowelle-100.png"
					
				}
				return backend_url + d.url
				
			   }else{
				   if (d.isLocation == true){
					return "primitives/location.png"
				   }else{} //return "primitives/cube_bevel_azure512.png"
				}
				}
			
			)
			.attr("width", image_width)
			.attr("height", image_height)
			.merge(update_images);
			
			
        var update_nodes = g_nodes.selectAll("circle")
          .data(nodesArray);
        update_nodes.exit().remove();
        nodes = update_nodes.enter()
          .append("circle")
		  .attr("r", function(d){
			  if(d.isCoreElement==true){
			  return 50;
			  }else{
				return 15;
			  }
			})
          .merge(update_nodes);
		  
		var update_hitboxes = g_hitboxes.selectAll("circle")
            .data(nodesArray);
		update_hitboxes.exit().remove();
		hitboxes = update_hitboxes.enter()
			.append("g").attr("class", "ghitbox")
            .append("circle")
            .merge(update_hitboxes)
			
		var update_buttons = g_buttons.selectAll("image")
			.data(nodesArray);
			update_buttons.exit().remove();
			buttons = update_buttons.enter()
				.append("image")
				.attr("class", "node_btn_add")
				.attr("xlink:href", "icons/round-add-button.png")
				.attr("width", 20)
				.attr("height", 20)
				.merge(update_buttons);
		  
		   
		  
        var update_links = g_links.selectAll(".glink")
			.data(linksArray);
        update_links.exit().remove()
        links = update_links.enter()
			.append("g").attr("class", "glink").append("line")
			.merge(update_links)
		  

		  
		var update_lables = g_lables.selectAll("text")
			.data(nodesArray);
        update_lables.exit().remove()
        lables = update_lables.enter()
			.append("text")
			.text((d) => { return d.label; })
			.attr("font-size", function(d){
			  if(d.isCoreElement==true){
			  return 30;
			  }else{
				return 15;
			  }
			})
			.merge(update_lables)
		  
		  
		  
		var update_linktexts = g_linknames.selectAll("text")
          .data(linksArray);
        update_linktexts.exit().remove()
        linkText = update_linktexts.enter()
		  .append("text")
		  .text((d) => { return d.label; })
          .merge(update_linktexts)

	


		
      }
	  
	  var selected_node
	  var playback
	  
	  
	  popuptext = g_pan.enter()
		  .append("text")
		  .text((d) => { return "" })
	  
function wrap(text, width) {
    text.each(function () {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            x = text.attr("x"),
            y = text.attr("y"),
            dy = 0, //parseFloat(text.attr("dy")),
            tspan = text.text(null)
                        .append("tspan")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("dy", dy + "em");


						
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("dy", ++lineNumber * lineHeight + dy + "em")
                            .text(word)
						//.append("rect")
						//.attr("x", x)
                        //.attr("y", y)
						//.attr("width", width)
						//.attr("height", 30)
						//.attr("fill", "black")
						;
            }
        }
    });
}	  
	  
	  
	  function dist(x1,y1,x2,y2){ 
		  if(!x2) x2=0; 
		  if(!y2) y2=0;
		  return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)); 
	  }
  
      function ticked() {
	  
	  	nodeImages	
			.attr("x", (d) => { return d.x -image_width/2; })
			.attr("y", (d) => { return d.y -image_height/2; })
			
			
        nodes.attr("cx", (d) => { return d.x; })
          .attr("cy", (d) => { return d.y; })
		
			
		  
		  d3.select(window).on("mouseover", function(d){
			  
			//console.log(d3.event.pageX/w)
			nodes.attr("stroke-width", (d) => { 
			
			//////////////////////mouse reactivity of nodes
			var dist_stroke =  Math.log(dist(d.x/w,d.y/h,d3.event.pageX/w,d3.event.pageY/h)*2,4)*50;
			return dist_stroke

			 })
		  })
		 
		popuptext 	
		.attr("x", (d) => { return d.x -image_width/2; })
		.attr("y", (d) => { return d.y -image_height/2; })		
		  
		  
		 //////INTERACTIVE NODES/////////////////////
		  //hitboxes for the selection
		 hitboxes.attr("cx", (d) => { return d.x; })
			.attr("cy", (d) => { return d.y; })
		  	.on("click", function(d) {

            if (d3.event.defaultPrevented) return;
			
                hitboxes.classed("selected", function(p) { return p.selected =  p.previouslySelected = false; })
            

            // always select this node
            d3.select(this).classed("selected", d.selected = !d.previouslySelected);
			
				selected_node = d.index;
			console.log(selected_node)
			
			
			if(d.mediaType=="audio"){
				console.log("audio selected")
				
				
				
				
				//d3.select(this).append("text")
				//.text(function(d) { return "TEST" })
				//.attr("x", (d) => { return d.x; })
				//.attr("y", (d) => { return d.y; });
				
				if(playback!== undefined){
					playback.pause();
					playback.currentTime = 0;
				}
					
					
					
			playback = new Audio(backend_url +d.url);
		
				playback.play();
				
				
				
			}
			
			if(d.isLongText==true){
				console.log("LongText selected")
				console.log(d.label)
				console.log(d.longText)
				popuptext.remove();
				 
				
				 popuptext = g_hitboxes.selectAll(".ghitbox")
				 .filter(function (d) { 
				 $("showlongtext_div.inserted_longtext").remove
				$(".showtext_and_blur").css("display", "block");
				 
				 return d.index === selected_node;})
				 //. append("g")
				.append("text")
				.text((d) => { 
				$(".showlongtext_div").append('<div class="inserted_longtext">' + d.longText + '</div>');
				//return d.longText
				console.log(d.longText)
				})
				//.attr("class", ".pop_up_text")
				//.attr("x", (d) => { return d.x+150; })
				//.attr("y", (d) => { return d.y; })
				//.call(wrap, 400);

				
			}
			
		
			
			
        })
        .on("mouseup", function(d) {
            //if (d.selected && shiftKey) d3.select(this).classed("selected", d.selected = false);
        })
			.call(d3.drag()
				.on("start", dragstarted)
				.on("drag", dragged)
				.on("end", dragended)); 
		  
		 
		 	buttons
			.attr("x", (d) => { return d.x -image_width/2+50; })
			.attr("y", (d) => { return d.y -image_height/2; })
			.attr("visibility", (d) => {
				if(d.index == selected_node){
					return "visible"}
				else{return "hidden" }
			})
			.on("click", function(d) {
            if (d3.event.defaultPrevented) return;
				$(".input_fields").css("display", "flex");
				add_active = true
				ui_add_node = true;
				$("#first_input_column_add").css("display", "block");
				$("#first_input_column").css("display", "none");
			
              console.log("add node")
			})
			
		//reset selection on click on background	
		background_rect
		.on("click", function(d) {
            if (d3.event.defaultPrevented) return;
				hitboxes.classed("selected", function(p) { return p.selected =  p.previouslySelected = false; })
				selected_node = -1;
				ui_add_node = false;
				$("#first_input_column_add").css("display", "none");
				$("#first_input_column").css("display", "block");
				if(playback!== undefined){
					
				}
				 popuptext.remove()
				 popuptext = g_pan.enter()
				  .append("text")
				  .text((d) => { return "" })
	  
	  
					playback.pause();
					playback.currentTime = 0;
              console.log("click on background")
			})
			
		  
        links = g_links.selectAll("line")
          .attr("x2", (d) => { return d.source.x; })
          .attr("y2", (d) => { return d.source.y; })
          .attr("x1", (d) => { return d.target.x; })
          .attr("y1", (d) => { return d.target.y; })
		  
		 lables.attr("x", (d) => { return d.x; })
          .attr("y", (d) => { return d.y; })
		  
		 linkText.attr("x", function(d) {
			if (d.target.x > d.source.x) {
				return (d.source.x + (d.target.x - d.source.x)/2); }
			else {
				return (d.target.x + (d.source.x - d.target.x)/2); }
			})
			.attr("y", function(d) {
				if (d.target.y > d.source.y) {
					return (d.source.y + (d.target.y - d.source.y)/2); }
				else {
					return (d.target.y + (d.source.y - d.target.y)/2); }
			})
			
			


			
      }
	  
	  

	  
	  
	  
      function remove(n, i) {
        d3.event.bubbles = false;
        if (d3.event.target.tagName == "circle") {
          d3.event.stopPropagation();
        }
        var linkIndex = linksArray.filter((d) => {
          return (d.target.index == i || d.source.index == i);
        })

        linksArray = linksArray.delete(linkIndex.map((d) => {
          return d.index;
        }))
        nodesArray = nodesArray.delete([i]);
        simulation.force("link", d3.forceLink(linksArray).distance(20).strength(1))
        simulation.nodes(nodesArray);
        simulation.alpha(1);
        simulation.restart();
        reDraw();
      }
	  
	  
	  
	//ADD ELEMENTS FROM UI
      function add_elements(id1,id2, linkname, save) {
		var index1
		var index2
		var i1_exist = false;
		var i2_exist = false;
	  
		var existing_index1 = nodesArray.map(function(x) {return x.id; }).indexOf(id1);
		if(existing_index1 !== -1){
		index1 = existing_index1;
		i1_exist = true;
		}else{
		index1 = nodesArray.length
		}
		
		var existing_index2 = nodesArray.map(function(x) {return x.id; }).indexOf(id2);
		if(existing_index2 !== -1){
		index2 = existing_index2;
		i2_exist = true;
		}else{
		index2 = nodesArray.length
		}
		
		
		ui_parameter_e1.isLocation = document.getElementById("location1").checked; 
		ui_parameter_e1.triggerWarning = document.getElementById("trigger1").checked; 
		ui_parameter_e2.isLocation = document.getElementById("location2").checked; 
		ui_parameter_e2.triggerWarning = document.getElementById("trigger2").checked; 
			
		var node_id1 = null
		var node_id2 = null

		if(i1_exist){
		node_id1 = nodesArray[existing_index1].id;
		}
		if(i2_exist){
		node_id2 = nodesArray[existing_index2].id;
		}
		
		if(ui_add_node==true){
		node_id1 = nodesArray[selected_node].id;
		id1 = nodesArray[selected_node].label;
		console.log("added id from selected node, selected node=" + selected_node + " label=" +id1);

		}

        var n1 = {
          index: index1,
		  id: node_id1,
		  label: id1,
		  isCoreElement: ui_parameter_e1.isCoreElement, 
		  isFile: ui_parameter_e1.isFile, 
		  isLocation: ui_parameter_e1.isLocation , 
		  isLongText: ui_parameter_e1.isLongText, 
		  longText: ui_parameter_e1.longText, 
		  mediaType: ui_parameter_e1.mediaType, 
		  triggerWarning: ui_parameter_e1.triggerWarning,
		  url: ui_parameter_e1.url,
          x: w/2, //d3.event.x
          y: h/2 //d3.event.y
        }
		
		if(ui_add_node==true){
			n1 = nodesArray[selected_node]
		}
		console.log("n1 = " +JSON.stringify(n1))
		
		var n2 = {
          index: index2,
		  id: node_id2,
		  label: id2,
		  isCoreElement: ui_parameter_e2.isCoreElement, 
		  isFile: ui_parameter_e2.isFile, 
		  isLocation: ui_parameter_e2.isLocation , 
		  isLongText: ui_parameter_e2.isLongText, 
		  longText: ui_parameter_e2.longText, 
		  mediaType: ui_parameter_e2.mediaType, 
		  triggerWarning: ui_parameter_e2.triggerWarning,
		  url: ui_parameter_e2.url,
          x: w/2, //d3.event.x
          y: h/2 //d3.event.y

        }
		
				console.log("n2 = " +JSON.stringify(n2))
		var l_source = i1_exist ? nodesArray[index1] : n1;
		//if(ui_add_node==true){
		//	l_source = n1;
		//}
		var l_target = i2_exist ? nodesArray[index2] : n2;
		
        var l = {
          index: linksArray.length,
		  label: linkname,
          source: l_source,
          target: l_target
        }
		
        

		
		var sendObject = {}
		sendObject.nodes=[n1,n2] //avoid sending both nodes if not added
		sendObject.links=[l]
		
		var sendString = JSON.stringify(sendObject)

		//save the data and add the unuqe ids to the nodes, then add nodes and links to visualization
		save_url = backend_url + "/save"
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": save_url,
		  "method": "POST",
		  "headers": {
			"Content-Type": "application/json"
		  },
		  "processData": false,
		  "data": sendString
		}
		$.ajax(settings).done(function (response) {

			if(i1_exist==false){
				if(ui_add_node!==true){
					n1.id = response.nodes[0].id
					nodesArray.push(n1) 
				}
			}

			if(i2_exist==false){
				
				n2.id = response.nodes[1].id
				nodesArray.push(n2) 
				}
			  
			  
			var l_source = i1_exist ? nodesArray[index1] : n1;

			var l_target = i2_exist ? nodesArray[index2] : n2;
			
			var l = {
			  index: linksArray.length,
			  label: linkname,
			  source: l_source,
			  target: l_target
			}

			  linksArray.push(l) 
			  

			simulation.force("link", d3.forceLink(linksArray).distance(100).strength(1))
			simulation.nodes(nodesArray);
			simulation.alpha(1);
			simulation.restart();
			reDraw();
		
		});
	
		
		//reset all ui parameter
		ui_parameter_e1.isCoreElement = false
		ui_parameter_e1.isFile = false
		ui_parameter_e1.isLocation = false 
		ui_parameter_e1.isLongText = false 
		ui_parameter_e1.longText = null
		ui_parameter_e1.mediaType = null 
		ui_parameter_e1.triggerWarning = false
		ui_parameter_e1.url = ' '
		
		
		ui_parameter_e2.isCoreElement = false
		ui_parameter_e2.isFile = false
		ui_parameter_e2.isLocation = false 
		ui_parameter_e2.isLongText = false 
		ui_parameter_e2.longText = null
		ui_parameter_e2.mediaType = null 
		ui_parameter_e2.triggerWarning = false
		ui_parameter_e2.url = ' '	  
	
	
		

      }
	  
	 

////LOAD ELEMENTS FROM DATABASE
      function load_nodes(id1, response) {
	    var exist = false;
	    var existing_index1 = nodesArray.map(function(x) {return x.id; }).indexOf(id1);
		if(existing_index1 !== -1){console.log("node exist and wont be added")
			return;
		}
	
		
		var response_index1 = response.nodes.map(function(x) {return x.id; }).indexOf(id1);

	
        var n1 = {
          index: nodesArray.length,
		  id: response.nodes[response_index1].id,
		  label: response.nodes[response_index1].label,
		  isCoreElement: response.nodes[response_index1].isCoreElement, 
		  isFile: response.nodes[response_index1].isFile, 
		  isLocation: response.nodes[response_index1].isLocation , 
		  isLongText: response.nodes[response_index1].isLongText, 
		  longText: response.nodes[response_index1].longText, 
		  mediaType: response.nodes[response_index1].mediaType, 
		  triggerWarning: response.nodes[response_index1].isTrigger,
		  url: response.nodes[response_index1].url,
          x: w/2, //d3.event.x
          y: h/2 //d3.event.y
        }

		nodesArray.push(n1) 

        simulation.force("link", d3.forceLink(linksArray).distance(100).strength(1))
        simulation.nodes(nodesArray);
        simulation.alpha(1);
        simulation.restart();
        reDraw();
		
		
      }




////LOAD ELEMENTS FROM DATABASE
      function load_links(link, response) {
		
		
		id1=link.source.id;
		id2=link.target.id;
		
		//var exist = false;
	    //var existing_index1 = nodesArray.map(function(x) {return x.id; }).indexOf(id1);
		//var existing_indexq = nodesArray.map(function(x) {return x.id; }).indexOf(id2);
		//if(existing_index1 !== -1 && existing_index1 !== -1){console.log("exist")
			//return;
		//}
		
		var response_index1 = response.nodes.map(function(x) {return x.id; }).indexOf(id1);
		var response_index2 = response.nodes.map(function(x) {return x.id; }).indexOf(id2);

		var l_source = nodesArray[response_index1] 
		var l_target = nodesArray[response_index2] 
		
        var l = {
          index: linksArray.length,
		  label: link.label,
          source: l_source,
          target: l_target
        }
		
        linksArray.push(l) 


        simulation.force("link", d3.forceLink(linksArray).distance(100).strength(1))
        simulation.nodes(nodesArray);
        simulation.alpha(1);
        simulation.restart();
        reDraw();
		
		
      }

////LOAD ELEMENTS FROM DATABASE
      function load_links_refresh(link, response) {
		
		
		id1=link.source.id;
		id2=link.target.id;

	    var existing1 = nodesArray.map(function(x) {return x.id; }).indexOf(id1);
		var existing2 = nodesArray.map(function(x) {return x.id; }).indexOf(id2);
		if(existing1 !== -1 && existing2 !== -1){console.log("links exist and wont be added")
			return;
		}
		
		var response_index1 = response.nodes.map(function(x) {return x.id; }).indexOf(id1);
		var response_index2 = response.nodes.map(function(x) {return x.id; }).indexOf(id2);

		var l_source = nodesArray[response_index1] 
		var l_target = nodesArray[response_index2] 
		
        var l = {
          index: linksArray.length,
		  label: link.label,
          source: l_source,
          target: l_target
        }
		
        linksArray.push(l) 


        simulation.force("link", d3.forceLink(linksArray).distance(100).strength(1))
        simulation.nodes(nodesArray);
        simulation.alpha(1);
        simulation.restart();
        reDraw();
		
		
      }






  
	  //LOAD


		
	function load(){	
		
		var load_url= backend_url + "/data"
		var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": load_url ,
	  "method": "GET",
	  "headers": {
		"Content-Type": "application/json"
	  },
	  "processData": false
	}

	$.ajax(settings).done(function (response) {	
	
	
	
	
	
	
		for(var i=0; i < response.nodes.length; i++){
				load_nodes(response.nodes[i].id, response)
				//load_elements(response.links[i].source.id,response.links[i].target.id, response.links[i].label,false, 
			}
			
		for(var i=0; i < response.links.length; i++){	
		load_links(response.links[i], response) 	
			
		}	
			
			
			
	  console.log(response);
	});

	}
	
	
	function load_refresh(){	
	console.log("loading new data ")
		var load_refresh_url= backend_url + "/data?delta=1"
		var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": load_refresh_url,
	  "method": "GET",
	  "headers": {
		"Content-Type": "application/json"
	  },
	  "processData": false
	}

	$.ajax(settings).done(function (response) {	
	
	
	
	console.log(response);
	
	
		for(var i=0; i < response.nodes.length; i++){
				load_nodes(response.nodes[i].id, response)
				//load_elements(response.links[i].source.id,response.links[i].target.id, response.links[i].label,false, 
			}
			
		for(var i=0; i < response.links.length; i++){	
		load_links_refresh(response.links[i], response) 	
			
		}	
			
			
			
	  
	});

	}	


	function get_auth(){	
	console.log("loading new data ")
		var auth_url= backend_url + "/auth"
		var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": auth_url,
	  "method": "GET",
	  "headers": {
		"Content-Type": "application/json"
	  },
	  "processData": false,
	  
	}

	$.ajax(settings).done(function (response) {	
	
	
	$("#account").append('<div class="logo_text"><a href=" ' + backend_url + '/logout">Log out</a></div>') })
	




	$.ajax(settings).fail(function () { $("#account").append('<div class="logo_text"><a href=" ' + backend_url + '/login">Log in</a></div>') });
	
	
	
	}	
	
	
	function save_data(data){
		save_url = backend_url + "/save"
		var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": save_url,
	  "method": "POST",
	  "headers": {
		"Content-Type": "application/json"
	  },
	  "processData": false,
	  "data": data
	}
	$.ajax(settings).done(function (response) {
	  console.log(response);
	  return response;
	});

	}
	  


	  
	  
		$( "#button_cooarch" ).click(function() {
		  //console.log( "Handler for .click() called." );
		  var e1= $("#e1").val();
		  var rel= $("#rel").val();
		  var e2= $("#e2").val();
		  
		  
		  add_elements(e1,e2,rel, true);
  
  
		});
		
		$( "#reset_add" ).click(function() {
		
						var ui_parameter_e1 = {}
				var ui_parameter_e2 = {}
			  
			  
			   //initialize menu states
			   
				var add_active = false;
				
				var upload_active1 = false
				var upload_active2 = false
				
				var text_active1 = false
				var text_active2 = false
				
				var ui_add_node = false;
	
	
		  		ui_parameter_e1.isCoreElement = false
				ui_parameter_e1.isFile = false
				ui_parameter_e1.isLocation = false 
				ui_parameter_e1.isLongText = false 
				ui_parameter_e1.longText = null
				ui_parameter_e1.mediaType = null 
				ui_parameter_e1.triggerWarning = false
				ui_parameter_e1.url = ' '
				
				
				ui_parameter_e2.isCoreElement = false
				ui_parameter_e2.isFile = false
				ui_parameter_e2.isLocation = false 
				ui_parameter_e2.isLongText = false 
				ui_parameter_e2.longText = null
				ui_parameter_e2.mediaType = null 
				ui_parameter_e2.triggerWarning = false
				ui_parameter_e2.url = ' '	

				response_url = "";
				response_url2 = "";
				
				$("#e1").val("")	
				$("#rel").val("")					
				$("#e2").val("")	
				
				$("#longtext1").val("")
				$("#longtext2").val("")
				
				$(".text1_selected").css("display", "none");
				$(".text2_selected").css("display", "none");
				$(".img1_selected").css("display", "none");
				$(".img2_selected").css("display", "none");
				
				
				$('.inserted_img').remove()
				
				
				
				
				console.log("reset")
	
  
  
		});
		
		
	if(init==false){	
		load()
		//for(var i=0; i < dataIn.nodes.length; i++){
		//	add_elements(dataIn.links[i].source.label,dataIn.links[i].target.label, dataIn.links[i].label,false)
		//}
		}
	
	
	
var intervalId = window.setInterval(function(){

load_refresh()


}, 30000);


			
	
	/////UI////////
	
	
	$('#add').click(function() {
		$(".input_fields").css("display", "flex");
		add_active = true
		

				selected_node = -1;
				ui_add_node = false;
				$("#first_input_column_add").css("display", "none");
				$("#first_input_column").css("display", "block");
				
				
	});
	

		$('#close_add').click(function() {
			$(".input_fields").css("display", "none");
			add_active = false
		});

	
	//FILE UPLOAD UI
	$('#btn_upload1').click(function() {
		$("#file1").css("display", "block");
		upload_active1 = true
	  });
	  
	$('#btn_upload2').click(function() {
		$("#file2").css("display", "block");
		upload_active2 = true
	});
	

		$('.close_symbol').click(function() {
			$(".file_and_blur").css("display", "none");
			upload_active1 = false
			upload_active2 = false
		});
		
		
	//TEXT INPUT UI
	var text_active = false
	$('#btn_text1').click(function() {
		$("#text1").css("display", "block");
		text_active = true
	  });
	  
	$('#btn_text2').click(function() {
		$("#text2").css("display", "block");
		text_active = true
	});
	

	$('.close_symbol').click(function() {
			$(".text_and_blur").css("display", "none");
			$(".showtext_and_blur").css("display", "none");
			$(".inserted_longtext").remove()
			console.log("removing")
		});




});


		