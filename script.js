function right(){
    lis = document.getElementById("input").getElementsByTagName("input");
    lab = document.getElementById("input").getElementsByTagName("label");
    //console.log(lis);
    l = lis.length;
    for(let i=0;i<l;i++){
      var output = lis[i];
      console.log(output);
      if(output.checked){
        let input = output.value;
        let place = document.getElementById("output").innerHTML;
       
   document.getElementById("output").innerHTML = place+output.outerHTML+lab[i].outerHTML;
        (output).remove();
   lab[i].remove();
        console.log(lis);
        i = -1;
        l = l-1;
      }
    }
  }
  
  function left(){
    lis = document.getElementById("output").getElementsByTagName("input");
    lab = document.getElementById("output").getElementsByTagName("label");
    console.log(lis);
    l = lis.length;
    for(let i=0;i<l;i++){
      var output = lis[i]
      console.log(output);
      if(output.checked){
        let place = document.getElementById("input").innerHTML;
       
   document.getElementById("input").innerHTML = place+output.outerHTML+lab[i].outerHTML;
        (output).remove();
   lab[i].remove();
        i = -1;
        
      }
    }
  }
  
  function addthis(){
    let t = document.getElementById("task").value;
    let l = document.getElementById("input").getElementsByTagName("input").length;
    if(t){
      let place = document.getElementById("input").innerHTML;
      document.getElementById("input").innerHTML = place+`<input id=${l+1} type='checkbox' value=${t}>
        <label for=${l+1}>${t}</label>`;
      document.getElementById("task").value = "";
      document.getElementById("error").innerHTML = "";
      
    }else{
      document.getElementById("error").innerHTML = "Error: Empty Task !! Can't add.";
    }
  }
  
  function deletethis(){
      let lis = document.getElementById("input").getElementsByTagName("input");
    let lab = document.getElementById("input").getElementsByTagName("label");
    //console.log(lis);
    l = lis.length;
    for(let i=0;i<l;i++){
      var output = lis[i];
      console.log(output);
      if(output.checked){
        let input = output.value;
        (output).remove();
   lab[i].remove();
        console.log(lis);
        i = -1;
        l = l-1;
      }
    }
    
    let liso = document.getElementById("output").getElementsByTagName("input");
    let labo = document.getElementById("output").getElementsByTagName("label");
    //console.log(lis);
    l = liso.length;
    for(let i=0;i<l;i++){
      var output = liso[i];
      console.log(output);
      if(output.checked){
        let input = output.value;
        (output).remove();
   labo[i].remove();
        console.log(lis);
        i = -1;
        l = l-1;
      }
    }
  }