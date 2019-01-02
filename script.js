let x = 0;
function insert(number){
  if(number==99){
    document.form.textview.value = 0;
    x = 0;
  }else if(document.form.textview.value=="0" && number==0 && x==0){
    document.form.textview.value=number;
    x = 0
  }else if(document.form.textview.value=="0" && x==0){
    document.form.textview.value = number;
    x = 0;
  }else if(document.form.textview.value!="0" && number==0 && x==0){
    document.form.textview.value += number;
    x = 0;
  }else if(x==0){
    document.form.textview.value += number;
    x = 0
  }else if(x!=0 && number!="+" && number!="-" && number!="/" && number!="*"){
    document.form.textview.value = number;
    x=0;
  }else if(x!=0 && number=="+" || x!=0 && number=="-" || x!=0 && number=="/" || x!=0 && number=="*"){
    document.form.textview.value += number;
    x=0;
  }
}
function equal(){
  let answer = document.form.textview.value;
  if(answer){
    document.form.textview.value = eval(answer);
  }
  x = 1;
}
let y=0;
function posneg(){
  let contents = document.form.textview.value;
    if(contents.includes("+") && contents[0]!="+" || contents.includes("-") && contents[0]!="-" || contents.includes("*") && contents[0]!="*" || contents.includes("/") && contents[0]!="/"){
      if(y==0){
        let listOfOps = [];
        for(let i=0; i<contents.length; i++){
          if(contents[i]=="+" || contents[i]=="-" || contents[i]=="/" || contents[i]=="*"){
            listOfOps.push(i);
          }
        }
        let highestOpIndex = listOfOps[listOfOps.length-1];
        let substring = document.form.textview.value.substr(highestOpIndex+1);
        contents=document.form.textview.value.replace(substring, "");
        document.form.textview.value=contents + "(-" + substring + ")";
        y=1;
      }else if(y!=0){
        let substring2 = document.form.textview.value.substr(document.form.textview.value.lastIndexOf("("));
        let substring3 = substring2.replace("(-", "");
        substring3 = substring3.replace(")", "");
        document.form.textview.value = document.form.textview.value.replace(substring2, substring3);
        y=0;
      }
    }else if(contents[0]!="-"){
      document.form.textview.value= "-" + document.form.textview.value;
    }else if(contents[0]=="-"){
      document.form.textview.value = document.form.textview.value.replace("-","");
    }
}
