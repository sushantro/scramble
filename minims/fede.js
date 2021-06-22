const msg = document.querySelector('.msg')
const guess = document.querySelector("input")
const btn = document.querySelector(".rtg")
let play = false;
let swrd = ["python", "javascript", "c++", "rahul","himanshu", "css", "gand", "react js", "sql", "java", "vue", "bootsrap", "php", "golang"]
const createwords = () => {
    let rand = Math.floor(Math.random() * swrd.length)
    console.log(rand);
    // console.log(swrd);
    let news = swrd[rand];
    // console.log(news.split(''));
    return news

}
const scrambled=(arr)=>{
    for (let i =arr.length-1;i>0 ;i--) {
        let temp=arr[i]
        let j=Math.floor(Math.random()*(i+1))
        arr[i]=arr[j];
        arr[j]=temp;
        return arr
        
        
    }

}
btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "guess";
        guess.classList.toggle('hidden');
        newword =createwords()
        randword=scrambled(newword.split('')).join('')
        // console.log(randword.join(""));
        msg.innerHTML=randword;
    
    
    } else{
        let tempword=guess.value;
        if(tempword===newword){
            // console.log("correct");
            play=false;
            msg.innerHTML=`Awesome it's correct .it is${newword}`
            btn.innerHTML=startagain;
            guess.value=""
        
        }else{
            console.log("incorrect");
            msg.innerHTML=`sorry boss its wrong plz dekh firse krke`
        }
    }
   

})