var colors=generateColors(6);
var squares=document.querySelectorAll(".square");
var picked=pickRandom();
var cd=document.querySelector("#colorDisplay");
var msg=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetBtn=document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");
var numsq=6;

resetBtn.addEventListener("click",function(){
	colors=generateColors(numsq);
	picked=pickRandom();
	cd.textContent=picked;
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];}
	h1.style.backgroundColor="steelblue";
	msg.textContent="";
	this.textContent="New Colors";

});
//style.display="none","block"
easyBtn.addEventListener("click",function(){
	numsq=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors=generateColors(3);
	picked=pickRandom();
	cd.textContent=picked;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	msg.textContent="";
});
hardBtn.addEventListener("click",function(){
	numsq=6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors=generateColors(6);
	picked=pickRandom();
	cd.textContent=picked;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="";
	}
	msg.textContent="";
});

cd.textContent=picked;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		console.log("clicked");
		var selected=this.style.backgroundColor;
		if(selected==picked){
			message.textContent="Correct";
			changeColor(selected);
			h1.style.backgroundColor=selected;
			resetBtn.textContent="Play Again?";
		}
		else{
			//alert("wrong");
			this.style.backgroundColor="#232323";
			message.textContent="Try Again"
		}
	});
}
function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickRandom(){
	var idx=Math.floor(Math.random()*colors.length);
	return colors[idx];
}
function generateColors(num){
	//make array
	var arr=[];
	//add num colors
	for(var i=0;i<num;i++){
		arr.push(generateRandomColor());
	}
	//return array
	return arr;
}
function generateRandomColor(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}