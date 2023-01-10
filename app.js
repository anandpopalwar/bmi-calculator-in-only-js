function submitHandler(){
    let height=document.getElementById('height').value
    let weight=document.getElementById('weight').value
    let resultHeight=document.getElementById('resultHeight')
    let resultWeight=document.getElementById('resultWeight')
    let BmiResult=document.getElementById('BmiResult')
    // let body=document.getElementsByTagName('body')
    console.log(height,weight)
    resultHeight.innerHTML=height
    resultWeight.innerHTML=weight
    let RESULT=(weight/(height /100 )**2).toFixed(2)
    console.log(RESULT)
    BmiResult.innerHTML=RESULT
    if(18.5>RESULT){
        document.body.style.backgroundColor = 'rgb(0,177,241)';
    }if  (18.5>RESULT<24.9) {
        document.body.style.backgroundColor = 'rgb(1,1,0)';
    }if (25>RESULT<29.9) {
        document.body.style.backgroundColor = 'rgba(249, 249, 137)';
    }if (30>RESULT<35) {
        document.body.style.backgroundColor = "rgb(254,192,1)";
    }if (35<RESULT) {
        document.body.style.backgroundColor = "rgb(254,1,1)";
    }if(height=null  ){
        document.body.style.backgroundColor = "white";

    }

}