const m=  document.getElementById("container")
    console.log(m)
    
    for(let i=0;i<36;i++)
    {   
       var div = document.createElement("div");
       div.classList.add("box");
       div.innerHTML=i+1;
       m.appendChild(div); 
    }

         var boxes = document.querySelectorAll("div.box");
         var selected=document.querySelector("p.select").innerHTML;
         var remaining=document.querySelector("p.remain").innerHTML;

         parseInt(selected);
         parseInt(remaining);

    
           boxes.forEach(box=>{
               box.addEventListener('click',()=>{
                 if(box.classList.contains("add"))
                {
                   box.classList.remove("add");
                   selected--;
                   remaining++;
                   document.querySelector("p.select").innerHTML=selected;
                   document.querySelector("p.remain").innerHTML=remaining;
                }

                 else
                {
                  box.classList.add("add")              
                  selected++;
                  remaining--;
                  document.querySelector("p.select").innerHTML=selected;
                  document.querySelector("p.remain").innerHTML=remaining;
                }
            })
        })

    