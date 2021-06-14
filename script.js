class Calculator
{

    constructor()
    {       
        document.getElementById('temp').innerHTML='';
        document.getElementById('result').innerHTML='';
        this.currentOperand=document.getElementById('temp').innerHTML;
        this.previousOperand=document.getElementById('result').innerHTML;
    }

    insert(value)
    {
        if(value==='.' && document.getElementById('temp').innerHTML[0]==='.')
        {
            return '';
            
        }
        else if(value==="minus" && document.getElementById('temp').innerHTML.includes("-"))
        {
            return '';
        }

        else if((value=='+' || value=='-' || value=='*' || value=='/' || value=='%')&& (this.currentOperand.length==0))
        {
            return '';
        }
        else if(value=='minus')
        {
            
            document.getElementById('temp').innerHTML="-"+document.getElementById('temp').innerHTML;
        }
        else 
        {
            document.getElementById('temp').innerHTML+=value;  
            this.currentOperand+=document.getElementById('temp').innerHTML;
        }
       
    }

    compute()
    {
        if(document.getElementById('temp').innerHTML.length==0)
        {
            document.getElementById('result').innerHTML='';
        }
        else{
            let temp = document.getElementById('temp').innerHTML;
        let result = eval(temp);
        document.getElementById('result').innerHTML=result;
        this.previousOperand=result;
        
        }
        
    }

   

    clearAll()
    {
        document.getElementById('temp').textContent='';
        document.getElementById('result').textContent='';
        this.currentOperand='';
        this.previousOperand='';
    }

    clear()
     {
        let temp = document.getElementById('temp').innerHTML;
        let str = temp.toString();
        str=str.slice(0,-1);
        document.getElementById('temp').innerHTML=str;
        this.currentOperand=str;
    }

}



let calc = new Calculator();

let buttons = document.querySelectorAll('.but');

buttons.forEach((button) =>
{
    button.addEventListener('click',function(event)
    {
        if(event.currentTarget.value==='nil')
        {
            calc.clearAll();
         
        }
        else if(event.currentTarget.value==='slice')
        {
            calc.clear();
        
        }
        else if(event.currentTarget.value==='=')
        {
            calc.compute();
           
        }

        else{
            calc.insert(event.currentTarget.value);
        }
       
    })
})















