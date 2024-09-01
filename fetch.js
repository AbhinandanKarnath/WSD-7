
function update()
{
    // const div = document.getElementById("div");
    let text = "text";
    for(let i = 0 ; i< 5 ;i++)
        {
        fetch('https://potterapi-fedeperin.vercel.app/en/spells?index='+i)
        .then(res => res.json()) 
        .then(res => {
            console.log("\n"+i+")"+res.spell+" :"+res.use+"\n")
            text = text + res.spell;
            console.log("Text here : "+text)
        })
        }
        console.log(text);
        // div.innerHTML = text;
}

update()