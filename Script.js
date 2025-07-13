function temperature()
          {
             //To convert celsius to farenheit
             //(CEL * 9/5) + 32
            var c = document.getElementById("celsius").value;
            var f = (c * 9/5) + 32
              if (c == ""){
                alert("Enter value for Celsius");
                return false;
            }
            document.getElementById("fahrenheit").value = f

            return false;      
           
          }

function weight()
          
          {  //To convert KGs to Pounds
            // KG * 2.2
            var kg = document.getElementById("kilogram").value;
            var p = kg * 2.2
             if (kg == ""){
                alert("Please enter value for Kilogram");
                return false;
            }
            document.getElementById("pounds").value = p

            return false;
        }

function distance()
        {
        
            //To convert Km to Miles
            // KM * 0.62137
            var km = document.getElementById("kilometer").value;
            var ml = km * 0.62137
             if (km == ""){
                alert("Please nter value for Kilometer");
                return false;
            }
            document.getElementById("miles").value = ml

            return false;
        }
        
        // function to clear celsius and fahrenheit fields
function clearTemp()
        {
            var cel = document.getElementById("celsius").value = ''
            var fah = document.getElementById("fahrenheit").value = ''
        }
          
        // function to clear kilogram and pounds field
 function clearWeight()
        {
            var kg = document.getElementById("kilogram").value = ''
            var pd = document.getElementById("pounds").value = ''
        }
            
        // Function to clear kilometer and miles 
function clearDist()
        {
            var km = document.getElementById("kilometer").value = ''
            var mil = document.getElementById("miles").value = ''
        }