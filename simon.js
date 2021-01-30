document.getElementById("start").addEventListener('click' , startGame)
let on = false;
let streak = true;
let sequence = [];
let lastPress = ""
let currentStreak = 0;
let highestStreak = 0;
let glowInterval = 1;
let idleStop = 0;
let whileStop = 0;
let sequenceLoc = 0;
function startGame()
{
    addListeners()
    console.log("yes")

    //while(streak == true && whileStop == 0)
    //{   
        whileStop = 1;
        console.log('enter while')
        on = false;
        lastPress = "";
        addToSequence()
        playSequence()

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

        //for(let i = 0; i < sequence.length; i++)
            //{
                if(lastPress === sequence[sequenceLoc])
                {
                    //on = false;
                    document.getElementById('center').classList.add('correct');
                    let end = window.setTimeout(() =>{
                        document.getElementById('center').classList.remove('correct');
                    }, 100)
                    //on = true;
                    whileStop = 0;
                    if(sequenceLoc + 1 < sequence.length)
                    {
                        console.log('entered if')
                        sequenceLoc = sequenceLoc + 1;
                    }
                    else
                    {
                        console.log('entered else')
                        sequenceLoc = 0;
                        currentStreak = currentStreak + 1
                        document.getElementById('streak').innerText = currentStreak;
                        addToSequence();
                        playSequence();
                    }
                }
                else
                {
                    document.getElementById('center').classList.add('correct');
                    if(currentStreak > highestStreak)
                    {
                        document.getElementById('highStreak').innerText = currentStreak;
                    }
                    currentStreak = 0;
                    on = false;
                    streak = false;
                    sequenceLoc = 0;
                    //break
                }
            //}
        //addToSequence()
        //playSequence()
        //return press;
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
            sequence.push("green")
        }

        if(random == 4)
        {
            sequence.push("blue")
        }
        console.log(sequence)
    }

    function playSequence()
    {
        on = false;
        for(let i = 0; i < sequence.length; i++)
        {
            let start = window.setTimeout(()=> {
                document.getElementById(sequence[i]).classList.add('glow');
                }, i * 1500 + 1500);
            //document.getElementById(sequence[i -1]).classList.add('glow');
                let end = window.setTimeout(()=> {
                document.getElementById(sequence[i]).classList.remove('glow');
                }, i * 1500 + 2000);
        }
        let onTimer = window.setTimeout(() =>{
            on = true;
            console.log(on)
        }, 1500 * sequence.length + 500)
    }