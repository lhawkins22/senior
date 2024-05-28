function AddData() {
    console.log("Add Data");
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const pp = document.getElementById("pp").value;
    const ppc = document.getElementById("ppc").value;
    document.getElementById("errror").textContent = "";
    if(pp == "password"){
        document.getElementById("errror").textContent = "Litterally the only password you cant have try again.";
        return;
    }
    if(pp != ppc){
        document.getElementById("errror").textContent = "Confirmed password doesnt match intial password try again";
        return;
    }

    // Make an AJAX request to fetch the data
    fetch("https://senior-a261.onrender.com/data")
    .then(response => response.json())
    .then(data => {
        // Loop through the data and add rows to the table
   
        const datta = [];
            data.forEach(item => {
            
            datta.push([item.fname,item.lname,item.type,item.a,item.b,item.c,item.d])
            });
        if(!isUser(datta,fname,lname)){
            document.getElementById("errror").textContent = "This name doesnt exist in user list or already has an activated account try again";
            return;
        }else{
            const dattta = [];
            const requestBody = {
                fname: fname,
                lname: lname,
                type:"cred",
                a: pp ,
                b: "TRUE",
                c:"TRUE",
                d:"",
                e: ""
            };
            dattta.push(requestBody);
            fetch("https://senior-a261.onrender.com/data",
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dattta)
                }
            )
            .then(response => {
                console.log(response);
            })
            .catch(response => {
                console.error(response);
            })
            window.location.href = '../home/home.html' 
        }
    })
    .catch(error => {
    console.error('Error fetching data:', error);
    });
    // window.location.href = '../home/home.html' 
    
    }
    function isUser(datta,fname,lname){
        for(i = 0; i < datta.length;i++){
            if(datta[i][0] == fname && datta[i][1]  == lname && datta[i][3] == "password"){
                return true;
            }
        }
        return false;
    }
    document.getElementById("sname").addEventListener("click", AddData);