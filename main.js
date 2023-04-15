const starsE1 = document.querySelectorAll(".fa-star")
const emojisE1 = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0);

starsE1.forEach((starsE1, index) =>{
    starsE1.addEventListener("click", ()=>{
        updateRating(index)
    });
});

function updateRating(index){
    starsE1.forEach((starsE1, idx)=>{
        if(idx < index + 1){
            starsE1.classList.add("active");
        }else{
            starsE1.classList.remove("active");
        }
    });

    emojisE1.forEach(emojisE1=>{
        emojisE1.style.transform= `translateX(-${index * 50}px)`; 
        emojisE1.style.color = colorsArray[index]
    });
}