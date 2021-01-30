document.getElementById("start").addEventListener('click' , startGame)
addListeners()
let on = true;
let streak = true;
let sequence = [];
let lastPress = ""
let currentStreak = 0;
let highestStreak = 0;
let glowInterval = 1;
let sequenceLoc = 0;
let seqCount = 0;
function startGame()
{
    if(on == true)
    {
    document.getElementById('start').value = 'Restart'
    on = false;
    lastPress = "";
    seqCount = sequence.length
    for(let i = 0; i <= seqCount; i++)
    {
        sequence.pop();
    }
    if(currentStreak > highestStreak)
    {           
        document.getElementById('highStreak').innerText = currentStreak;
    }
    currentStreak = 0;
    document.getElementById('streak').innerText = currentStreak;
    document.getElementById('center').classList.remove('wrong')
    addToSequence()
    playSequence()
    }
}    

function addListeners()
{
    let button = document.getElementsByClassName("button")
    for(i = 0; i < button.length; i++)
    button[i].addEventListener('click' , e => {
        if(on == true && sequence.length > 0)
        {
        lastPress = e.target.id
        console.log(lastPress)
            if(lastPress === sequence[sequenceLoc])
            {
                document.getElementById('center').classList.add('correct');
                let end = window.setTimeout(() =>{
                document.getElementById('center').classList.remove('correct');
                }, 100)
                    
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
            else if(lastPress)
            {
                document.getElementById('center').classList.add('wrong');
                if(currentStreak > highestStreak)
                {
                    document.getElementById('highStreak').innerText = currentStreak;
                }
                currentStreak = 0;
                on = true;
                streak = false;
                sequenceLoc = 0;
            }
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
        console.log(on)
        for(let i = 0; i < sequence.length; i++)
        {
            let bs = document.getElementById(sequence[i]).style.boxShadow
            let start = window.setTimeout(()=> {
                document.getElementById(sequence[i]).style.boxShadow = 'white 0px 0px 20px 20px', bs;
                }, i * 1500 + 1500);
                let end = window.setTimeout(()=> {
                document.getElementById(sequence[i]).style.boxShadow = bs;
                }, i * 1500 + 2000);
        }
        let onTimer = window.setTimeout(() =>{
            on = true;
            console.log(on)
        }, 1500 * sequence.length + 500)
    }