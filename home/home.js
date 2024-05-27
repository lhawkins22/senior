fetch("http://localhost:3000/data")
    .then(response => response.json())
    .then(data => {
        // Loop through the data and add rows to the table
            data.forEach(item => {
            if(item.type == "profile")
            {
                const theDiv = document.getElementById("profiles");
                const name = document.createElement('h1');
                const wi = document.createElement('h2');
                const fact = document.createElement('p');
                const pf = document.createElement('div');
                const brr = document.createElement("br");
                const brrr = document.createElement("br");
                const soc = document.createElement("h3")
                name.textContent = item.fname + " " + item.lname + ":";
                fact.textContent = item.a;
                wi.textContent = item.b;
                soc.textContent = "Contact: " + item.e;
                wi.append(brr);
                wi.append(brrr);
                wi.append("Some words of inspriation: " + item.c);
                pf.className = "profile";
                pf.style.backgroundColor = item.d;
                pf.appendChild(name);
                pf.appendChild(fact);
                pf.appendChild(wi);
                pf.appendChild(soc);
                theDiv.append(pf);
            }
            
            });
    })
    .catch(error => {
        console.error(error);
    });