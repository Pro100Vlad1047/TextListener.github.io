let textArea=document.querySelector(".text-area");
let table=document.querySelector("tbody");
let amountChecker=0;
let libArr=[];
let textValue;
let insertionInput=document.querySelector(".insertion");
let searchButton=document.querySelector(".search_button");
let hidePDiv=document.querySelector(".hide-text");
let hideP=document.querySelector(".text_hide_change");
let popupBlock=document.querySelector(".popup_block");
let popupText=document.querySelector(".popup_text");

//////Create massives with text///////////////////////////////
function makeLibAndTextArrays(){
	libArr=[];
	textValue=textArea.value;
	textValue=textValue.replace(/\s+/g, ' ').trim();
	textValue=textValue.toLowerCase();
	textValue=textValue.replace(@№^&\/\\#,+()$~%.'":;*?<>{}1234567890_+=]/g, "");
	console.log(textValue);
	textArr=textValue.split(" ");
	table.innerHTML="";
	for(let i=0;i<textArr.length;++i){
		if(!libArr.includes(textArr[i])){
			libArr[i]=textArr[i];
		}
	}
}
/////////////////////////////////////////////////////

///////press and take value from popup menu/////////////////

function takeValue(e){
	insertionText=e.innerHTML;
	popupBlock.innerHTML="";
	console.log(insertionText);
	insertionInput.value=insertionText;
	backAreaP();
	popupBlock.innerHTML="";
}


///////////////////////////////////////////////////


//////////Change textArea and p TAG//////////////

function backTextArea(){
	textArea.style.display="block";
	hidePDiv.style.display="none";
	popupBlock.innerHTML="";
}

function backAreaP(){
	textArea.style.display="none";
	hidePDiv.style.display="block";
	popupBlock.innerHTML="";
	if(textValue!=undefined){
		hideP.innerHTML=textValue;
	}else{
		hideP.innerHTML="";
	}
	let insertionText=insertionInput.value;
	let hideText=hideP.innerHTML;
	insertionText=insertionText.toLowerCase().trim();
	//console.log(insertionText);
	//console.log(hideText);
	//console.log(hideText.replace(/[^a-zA-Z ]/g, ""));
	hideText=hideText.replace(@№^&\/\\#,+()$~%.'":;*?<>{}1234567890_+=]/g, "");
	if(hideText.includes(insertionText)){
			//console.log(`input text is: ${insertionText}`);
			hideText=hideText.replaceAll(insertionText,`<span class="yellow_span">${insertionText}</span>`);
			//console.log(`hideText is: ${hideText}`);
			
	}
	hideP.innerHTML=hideText;
	console.log(libArr);
	libArr=libArr.filter(elm=>elm);
	console.log(libArr);
	for(let i=0;i<libArr.length;++i){
			//console.log(insertionText);
			/*console.log(libArr[i]);
			console.log(libArr);*/
		if(insertionText.charAt(0).includes(libArr[i].charAt(0)) && libArr[i].includes(insertionText)){
			popupBlock.insertAdjacentHTML("afterbegin",`<button class="popup_text"><p onclick="takeValue(this)" class="popup_text_p">${libArr[i]}</p></button>`)
		}
	}
}
/////////////////////////////////////////////////////////



function getText(){
	textArea.style.display="block";
	makeLibAndTextArrays();
	for(let i=0;i<textArr.length;++i){
		if(textArr[i]!=""){

			//////////Amount of copies CHECK!!!!!/////////////////////////////////
			for(let j=0;j<textArr.length;++j){
				if(libArr[i]==textArr[j]){
				++amountChecker;
				}
			}
			//console.log(amountChecker+ " "+ libArr[i]);
			//////////Amount of copies CHECK!!!!!/////////////////////////////////

			if(libArr[i]!=undefined){
				table.insertAdjacentHTML("afterbegin",`<tr><td>${libArr[i]}</td><td>${amountChecker}</td></tr>`);
			}
			amountChecker=0;
		}else{
			//console.log("Empty token");
			break;
		}
	}




	/*console.log(textArr);
	console.log(libArr);*/
}
