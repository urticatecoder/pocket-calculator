function insert(number){
  if(number==99){
    document.form.textview.value = 0;
  }else if(document.form.textview.value=="0" && number==0){
    document.form.textview.value=number;
  }else if(document.form.textview.value=="0"){
    document.form.textview.value = number;
  }else if(document.form.textview.value!="0" && number==0){
    document.form.textview.value += number;
  }else{
    document.form.textview.value += number;
  }
}
function equal(){
  let ans = document.form.textview.value;
  if(ans){
    document.form.textview.value = eval(ans);
  }
}
