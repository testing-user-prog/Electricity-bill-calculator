let coursecount=0;
let formhtml=document.getElementById("input");


function elementsvisible()
{
    clear();
    coursecount=Number(document.getElementById("coursecount").value);
    if(coursecount<1)
        {
            window.alert("Please enter a valid course number: ");
            restart();
        
        }
    
    
    for(let i=0;i<coursecount;i++)
    {
        formhtml.innerHTML+=
        `
         <label for="course${i+1}" class="name">Course${i+1} Name:</label>
        <input type="text" class="course" placeholder="#Course${i+1}">
        <select name="Grade" id="grade${i+1}" class="grade">
              <option value="4.00">A+</option>
  
              <option value="4.00">A</option>
  
              <option value="3.67">A-</option>
  
              <option value="3.33">B+</option>
  
              <option value="3.00">B</option>
  
              <option value="2.67">B-</option>
  
              <option value="2.33">C+</option>
  
              <option value="2.00">C</option>
  
              <option value="1.67">C-</option>
  
              <option value="1.33">D+</option>
  
              <option value="1.00">D</option>
  
              <option value="0.00">F</option>
        </select>
        <input id="credits${i+1}" type="number" placeholder="Credit hrs" min="1" class="credits"><br>

        `;
        
    }
    if(formhtml.innerHTML!="")
    {
        document.getElementById("ok").innerHTML=
        `
        <button type="submit" id="submit" onclick="calculategrade()">Calculate GPA</button>

        `;
       
    }



}
function calculategrade()
{
    let denum=0;
    let num=0;
    for(let i=1;i!=coursecount+1;i++)
    {
        let a=Number(document.getElementById(`grade${i}`).value);
        let b=Number(document.getElementById(`credits${i}`).value);
        if(isNaN(a)||document.getElementById(`credits${i}`).value=="")
        {
            window.alert("Invalid entries detected!");
            clear();
            break;
        }
        denum+=b;
        num+=(a*b);
        



    }
    let gpa=(num/denum).toFixed(2);
    if(!isNaN(gpa))
    document.getElementById("final").textContent=`The CGPA is ${gpa}`;




}
function clear()
{
    coursecount=0;
    document.getElementById("input").innerHTML="";
    document.getElementById("ok").innerHTML="";
    document.getElementById("final").textContent="";


}
function restart()
{
    document.getElementById("coursecount").value="";
    clear();
}
