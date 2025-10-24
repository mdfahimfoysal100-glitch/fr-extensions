fetch("https://ipinfo.io/json")
.then(r=>r.json())
.then(d=>alert("Your exit IP: "+d.ip+"\nCountry: "+d.country));
