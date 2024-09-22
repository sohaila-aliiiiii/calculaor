const calc=document.querySelector('.calc')
const input=document.querySelector('.input')

function clearCalc() {
  input.textContent=null
  
}
function del()
{
 let currentvalue=input.textContent
 input.textContent=currentvalue.substring(0,currentvalue.length-1)
 if(input.textContent==null)
 {


 }
}

 function display(v)
 {
  input.textContent=input.textContent+v
 }
 function equl()
 {
  try{
    let equlvalue=math.evaluate(input.textContent)
    input.textContent=equlvalue
  }
  catch(err)
  {
    input.textContent="invaild value"
  }

 }
  calc.addEventListener('click',function(e){
      if(e.target.nodeName=='BUTTON')
      {
        if(e.target.textContent=='C'){
            clearCalc()
        }
        else if(e.target.textContent=='DEL')
        {
          del()
        }
        else if(e.target.textContent=='=')
        {
          equl()
        }
        else{
          display(e.target.textContent)
        }
      }
  })