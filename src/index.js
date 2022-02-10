// See all ramen images in the div with the id of ramen-menu. 
// When the page loads, request the data from the server to get all the ramen objects.
// Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

// write your code here
const init = () => {
        document.getElementById('ramen-menu').appendChild(addImg)
        
    const connect = () => {
        fetch('http://localhost:3000/ramens')
        .then(responce => responce.json())
        .then(data => console.log(data))
    }
}    
const addImg = () => {
        const img = document.createElement('img')
        const eachImg = (array) =>{
        array.forEach(element => {
            element.image

         });
         console.log(eachImg)
        }
    }    
