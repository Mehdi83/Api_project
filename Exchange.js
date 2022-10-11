const search_btn = document.getElementById('search_btn');

const MyValue = document.getElementById('MyValue');

const fromId = document.getElementById('fromId');
const toId = document.getElementById('toId');

const api_result = document.getElementById('api_result');
const api_result2 = document.getElementById('api_result2');
const api_result3 = document.getElementById('api_result3'); 
const api_result4 = document.getElementById('api_result3'); 
const api_result5 = document.getElementById('api_result3'); 

search_btn.addEventListener('click', Bukhlo);

 

    function Bukhlo(){ 
       let endPoint =  "https://v6.exchangerate-api.com/v6/fc61b05bb48ca7fbaf57044c/pair/"+ fromId.value + "/" + toId.value + "/" + MyValue.value;

        fetch(endPoint, {
		method: 'GET'
	})

    .then(res => res.json())
    .then(data=> {
        api_result.innerHTML = "Conversion_rate is:&ensp;"+data.conversion_rate;
        api_result2.innerHTML ="Exchange " + MyValue.value+ "&ensp;"+   fromId.value + " &ensp;to &ensp;  " + toId.value;
      api_result3.innerHTML ="conversion_result: &ensp;"+data.conversion_result;
    });

}


