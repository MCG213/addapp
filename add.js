function generateRandomNumber(min, max) {
            //let max = 10;
            //let min = 1;
            let number = Math.floor(Math.random() * (max - min + 1) + min);
            return number;
        }

        //Asociar tag con una variable en js
        let labelNumber1 = document.getElementById("Number1")
        let labelNumber2 = document.getElementById("Number2")
        let labelResult = document.getElementById("Result")
        let answer = document.getElementById("answer")
        console.log(answer)
        //console.log(labelNumber1)
        //console.log(labelNumber2)
        //console.log(labelResult)
        //console.log(labelnumber1.innerHTML)
        labelNumber1.innerHTML = generateRandomNumber(0, 9);
        labelNumber2.innerHTML = generateRandomNumber(0, 9);
        //labelResult.innerHTML = ;


        //Definicion de variables
        let name = "Yo";
        let lastName = "Gurt";
        //let numberA = 5;
        //let numberB = 10;
        //let sum = numberA + numberB;
        //alert("Nombre :" + name + " Apellidos : " + lastName); //Concatenacion
        //console.log("Nombres : " + name);
        //console.log("Apellidos : " + name);
        //console.log(numberA + " + " + numberB + " = " + sum);