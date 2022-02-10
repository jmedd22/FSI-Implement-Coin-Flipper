let headCount = 0
let tailsCount = 0


document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#flip').addEventListener('click', function(e) {
        // is this greater then 0.5?
        if (Math.random() > 0.5) {
            console.log('heads')
            // update image
            let pennyFace = document.querySelector('#pennyFace')
            pennyFace.src = 'assets/images/penny-heads.jpg'
            pennyFace.alt = '2005 Penny, head side'

            // Log outcome
            document.querySelector('#message').textContent = 'You Flipped Heads!'

            // Update JS global vars
            headCount++

            // Update DOM Table
            document.querySelector('#heads').textContent = headCount
            // #/total
            document.querySelector('#heads-percent').textContent = Math.round(headCount/(headCount-tailsCount)*100) + '%'
            // Update head count in dom table
            document.querySelector('#tails-percent').textContent = Math.round(tailsCount/(headCount-tailsCount)*100) + '%'
            // Update heads percent in DOM table
            // Update tails percent in DOM table


        } else {
            console.log('tails')
        }
        //let randomNum = Math.random()
        
    
       
            // TODO: Update image and status message in the DOM
    
           

    })  

    document.querySelector('#clear').addEventListener('click', function(e) {
        headCount = 0
        tailsCount = 0
        document.querySelector('#message') = "Let's Get Rolling!"
        document.querySelector('#heads').textContent = 0
        document.querySelector('#tails').textContent = 0
        document.querySelector('#heads-percent').textContent = '0%'
        document.querySelector('#tails-percent').textContent = '0%'
        document.querySelector('#pennyFace').src = 'assets/images/penny-heads.jpg'
        // Clear Button Click Handler
            // TODO: Reset global variables to 0
            // TODO: Update the scoreboard (same logic as in flip button click handler)
    })



})