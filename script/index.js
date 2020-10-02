let settings = "";

var form = document.getElementById("mainBlock");


function getOptions(data){
	let opt={};
	for (const entry of data) {
    opt[entry[0]] = entry[1];

  };
  return opt;
};

function checkSettingsFile(){

	};

function displayResult(options){
	var result = document.getElementById("result");
	var text="Generate start files with parameters: ";
	var param="gulp";


	for (var key in options){

		switch(key){
			case "port":
				{param+=" "+"--port "+options[key];
				break;};
			case "options": {
				param+=" "+"--"+options[key];
				break;
			};
			default:
			{param+=" "+key+"="+options[key];}
		};

	};
	result.innerText=text + param;
};

form.addEventListener("submit", function(event) {
  var data = new FormData(form);

  a=getOptions(data);
  displayResult(a);
  checkSettingsFile();

  event.preventDefault();
}, false);
