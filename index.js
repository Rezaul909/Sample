const btn= document.querySelector(".btn");
const msg= document.querySelector(".msg");

// btn.addEventListener("click", function()
// {
//     msg.textContent= "Information save successfully";

//     setTimeout(()=> {
//         msg.textContent=""
//     },5000)
// });

btn.addEventListener("click", function()
{
    setInterval(()=>{
        let date= new Date();
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();

        hours= formateTime(hours);
        minutes= formateTime(minutes);
        seconds= formateTime(seconds);
        
        let time =hours+ ":"+ minutes+":"+seconds;

        msg.textContent = time;
        
    },1000)
});

function formateTime(value)
        {
            if(value<10)
            {
                value = "0"+value;
            }
            return value
        }

