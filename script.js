let devicecount=0;
let days=0;
let formhtml=document.getElementById("input");


function elementsvisible()
{
    clear();
    days=Number(document.getElementById("days").value);
    devicecount=Number(document.getElementById("devicecount").value);
    if(devicecount<1)
        {
            window.alert("Please enter a valid device number: ");
            restart();
        

        }
        if(days<1)
        {
            window.alert("Please enter valid number of days: ");
            restart();
        }
    
    
    for(let i=0;i<devicecount;i++)
    {
        formhtml.innerHTML+=
        `
         <label for="appliance${i+1}" class="name">Appliance${i+1}:</label>
        <input type="text" class="appliance" placeholder="#Appliance${i+1}">
        <input placeholder="On-hrs"  id="days${i+1}"  class="days" type="number" >
        
        <input id="power${i+1}" type="number" placeholder="Power:"  class="power"><br>

        `;
        
    }
    if(formhtml.innerHTML!="")
    {
        document.getElementById("ok").innerHTML=
        `
        <button type="submit" id="submit" onclick="calculateunits()">Calculate units</button>

        `;
       
    }



}
let unit=0,bill=0;
function calculateunits()
{
   
    
    for(let i=0;i!=devicecount;i++)
    {
        let d=Number(document.getElementById(`days${i+1}`).value);
        let p=Number(document.getElementById(`power${i+1}`).value);
        if(d<1||p<1)
            {window.alert("Invalid entries found");
                clear();
                return;
            }
            unit+=(p*d*days*1.0)/1000;


    }
    unit=unit.toFixed(2);
    document.getElementById("final").textContent=`Units consumed are: ${unit}`;
    document.getElementById("ok").innerHTML="";
    document.getElementById("proceed").innerHTML=
    `<label for="tax">Billing Tax%:</label> 
    <input id="tax" type="number" min="0" value="0">
    <button type="submit" id="bill" onclick="calculatebill()">Calculate bill</button>
    <br>`;
    






}
function calculatebill()
{

    let tax=0;

    tax=Number(document.getElementById("tax").value);
    while(tax<0)
    {
        window.alert("Tax can not be negative: ");
        restart();
        break;
    }
    unit=Number(unit);
    const slab_0_50 = 3.95;

    const slab_51_100 = 7.74;

    const slab_101_200 = 10.06;

    const slab_201_300 = 12.15;

    const slab_301_700 = 19.55;

    const slab_above_700 = 23.00;
    if (unit <= 50) 
    {
        bill = unit * slab_0_50;
    } 
    else if (unit <= 100) 
    {
        bill = (50 * slab_0_50) + (unit - 50) * slab_51_100;
    } 
    else if (unit <= 200)
    {
        bill = (50 * slab_0_50) + (50 * slab_51_100) + (unit - 100) * slab_101_200;
    }
    else if (unit <= 300) 
    {
        bill = (50 * slab_0_50) + (50 * slab_51_100) + (100 * slab_101_200) + (unit - 200) * slab_201_300;
    }
    else if (unit <= 700) 
    {
        bill = (50 * slab_0_50) + (50 * slab_51_100) + (100 * slab_101_200) +
               (100 * slab_201_300) + (unit - 300) * slab_301_700;
    } 
    else 
    {
        bill = (50 * slab_0_50) + (50 * slab_51_100) + (100 * slab_101_200) +
               (100 * slab_201_300) + (400 * slab_301_700) + (unit - 700) * slab_above_700;
    }
    bill=(1.0*bill*((tax+100)/100)).toFixed(2);
    document.getElementById("monthbill").textContent=`Total Cost: Rs.${bill} `;
    document.getElementById("proceed").innerHTML="";







}
function clear()
{
    devicecount=0;
    document.getElementById("input").innerHTML="";
    document.getElementById("ok").innerHTML="";
    document.getElementById("final").textContent="";
    document.getElementById("proceed").innerHTML="";
    document.getElementById("monthbill").textContent="";
    unit=0;
    bill=0;


}
function restart()
{
    document.getElementById("devicecount").value="";
    document.getElementById("days").value="";
    clear();
}




