/*Para la bateria*/

const buttons = document.querySelectorAll('button');



const playnote = event => 

{

    const button = event.target;

    const note = button.dataset.note;

    const audioId =`audio${note}`;

    console.log(audioId);

    const audio = document.getElementById(audioId);

    console.log(audio);



    audio.pause();

    audio.currentTime = 0;

    audio.play();

  

}



buttons.forEach

(

    button => button.addEventListener('click', playnote)

);



const keyNoteDown =event =>

{

    const key = event.key;

    console.log(key);

    const button = document.querySelector(`button[data-key="${key}"]`);

    if(button) button.click();

}



document.addEventListener('keydown',keyNoteDown);









/*Para los platillos*/ 





const image = document.querySelectorAll('img')

const playnotes = event => 

{

    const image = event.target;

    const note = image.dataset.note;

    const audioId =`audio${note}`;

    console.log(audioId);

    const audio = document.getElementById(audioId);

    console.log(audio);



    

    audio.pause();

    audio.currentTime = 0;

    audio.play();

}



image.forEach

(

    image => image.addEventListener('click', playnotes)

);





const keyNotesDown =event =>

{

    const key = event.key;

    console.log(key);

    const image = document.querySelector(`img[data-key="${key}"]`);

    if(image) image.click();

}



document.addEventListener('keydown',keyNotesDown);