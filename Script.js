  function temperature()
          {
             //To convert celsius to farenheit
             //(CEL * 9/5) + 32
           var c = document.getElementById("celsius").value;
           var f = (c * 9/5) + 32
           document.getElementById("fahrenheit").value = f

          }
          function weight()
          
          {  //To convert KGs to Pounds
            // KG * 2.2
            var kg = document.getElementById("kilogram").value;
            var p = kg * 2.2
            document.getElementById("pounds").value = p
        }
        function distance()
        {
            //To convert KMs to Miles
            // KM * 0.62137
            var km = document.getElementById("kilometer").value;
            var ml = km * 0.62137
            document.getElementById("miles").value = ml
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