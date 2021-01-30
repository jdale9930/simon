document.getElementById("start").addEventListener('click' , startGame)
let on = false;
let streak = true;
let sequence = [];
let lastPress = ""
let currentStreak = 0;
let highestStreak = 0;
function startGame()
{
    addListeners()
    console.log("yes")

    while(streak == true)
    {
        on = false;
        lastPress = "";
        addToSequence()
        for(let i = 0; i < sequence.length; i++)
        {
            document.getElementById(sequence[i]).classList.add('glow');
            let end = window.setTimeout(()=> {
                document.getElementById(sequence[i]).classList.remove('glow');
            }, 2000)
        }

        on = true;
        if(lastPress != "")
        {
            for(let i = 0; i < sequence.length; i++)
            {
                if(lastPress === sequence[i])
                {

                }
                else
                {
                    streak = false;
                    if(currentStreak > highestStreak)
                    {
                        
                    }
                    currentStreak = 0;
                    
                    break
                }
            }
        }
        
    }

}

function addListeners()
{
    let button = document.getElementsByClassName("button")
    for(i = 0; i < button.length; i++)
    button[i].addEventListener('click' , e => {
        if(on == true)
        {
        lastPress = e.target.id
        console.log(lastPress)
        }
    })
}

function addToSequence()
    {
        let random = Math.floor(Math.random()*4 + 1);

        if(random == 1)
        {
            sequence.push("red")
        }

        if(random == 2)
        {
            sequence.push("yellow")
        }

        if(random == 3)
        {
            sequence.push("yellow")
        }

        if(random == 4)
        {
            sequence.push("blue")
        }

    }
