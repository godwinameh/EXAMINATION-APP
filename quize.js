

const Questions = [
    {
        "question":"who is the first man, created by God?",
        "option":{
            "A":"Abel",
            "B":"Adam",
            "C":"Abraham",
            "D":"Noah",
        },
        "answer":"B"
    },

    {
        "question":"who is the current national director of TKM in CRM?",
        "option":{
            "A":"Pst.Joseph mansah",
            "B":"Dr Ikechukwu Gregory Ugwu",
            "C":"Dr Bon Achumba",
            "D":"Pst. Gerry Ukah",
        },
        "answer":"B"
    },

    {
        "question":"who is the current national director of youth in CRM?",
        "option":{
            "A":"Pst.Toyin Olu Jacob",
            "B":"Dr Passy Amaraegbu",
            "C":"Dr Francis Binyoui",
            "D":"Pst.Julius Ajayi",
        },
        "answer":"A"
    },

    {
        "question":"what is the theme for the year 2023 in CRM national wide?",
        "option":{
            "A":"Enriched in all side",
            "B":"Enriched in all work of life",
            "C":"Enriched in everything",
            "D":"Enriched in every spiritual side ",
        },
        "answer":"C"
    },

    {
        "question":"Who is the director of the change we need Nigeria initiative?",
        "option":{
            "A":"Pst. Edwin Ezeh",
            "B":"Pst. Gab Baba",
            "C":"Pst.Alex Baba ",
            "D":"Dr. Robert Agbahia ",
        },
        "answer":"B"
    },

    {
        "question":"Who is the president of CRM political Academy?",
        "option":{
            "A":"Pst. Edwin Ezeh",
            "B":"Pst. Gab Baba",
            "C":"Pst.Alex Baba ",
            "D":"Dr. Robert Agbahia ",
        },
        "answer":"A"
    },

    {
        "question":"Who is the national direction CRMEA{Charismatic Renewal Ministries Enterprise Agency} in CRM?",
        "option":{
            "A":"Pst. Edwin Ezeh",
            "B":"Pst. Gab Baba",
            "C":"Pst.Alex Baba ",
            "D":"Dr. Robert Agbahia ",
        },
        "answer":"C"
    },
    {
        "question":"Who is the regional overseer of North central in CRM?",
        "option":{
            "A":"Pst. Edwin Ezeh",
            "B":"Pst. Gab Baba",
            "C":"Pst.Alex Baba ",
            "D":"Dr. Robert Agbahia ",
        },
        "answer":"D"
    },
    {
        "question":"Who is the head of administrator in CRM?",
        "option":{
            "A":"Pst. Edwin Ezeh",
            "B":"Pst. Gab Baba",
            "C":"Pst.Alex Baba ",
            "D":"Dr. `Julius Iroha",
        },
        "answer":"D"
    },
    {
        "question":"Who is the state overseer OF FCT1 arm of CRM in abuja?",
        "option":{
            "A":"Barr. pst. A.S Agarry",
            "B":"Pst. John Drua",
            "C":"Pst.Alex Baba ",
            "D":"Pst. Mike Drua",
        },
        "answer":"A"
    },
    {
        "question":"what is the full meaning of FLOPA?",
        "option":{
            "A":"Faithful lover, obedient, prayerful, Authority",
            "B":"faithfullness, love,obedience, prayer, Authority ",
            "C":"fight, loyality, obedience, people, authority ",
            "D":"fight, liars, onto, prayer,action",
        },
        "answer":"B"
    },
    {
        "question":"what are the five piallars of CRM?",
        "option":{
            "A":"Faithful lover, obedient, prayerful, Authority",
            "B":"faithfullness, love,obedience, prayer, Authority ",
            "C":"fight, loyality, obedience, people, authority ",
            "D":"fight, liars, onto, prayer,action",
        },
        "answer":"B"
    },
    {
        "question":"when is our text for the theme this year is taken from?",
        "option":{
            "A":"2corinthians 9:10,11",
            "B":"2corinthians 9:8,9",
            "C":"2corinthians 9:5,7 ",
            "D":"Deut.1:3-8",
        },
        "answer":"A"
    },
    {
        "question":"who is the father of all nation?",
        "option":{
            "A":"Noah",
            "B":"Abraham",
            "C":"Jacob",
            "D":"Adam",
        },
        "answer":"B"
    },
    {
        "question":"Who is the state overseer OF FCT2 arm of CRM in abuja?",
        "option":{
            "A":"Barr. pst. A.S Agarry",
            "B":"pst. Abraham Biu",
            "C":"Pst.Alex Baba ",
            "D":"Pst. Mike Drua",
        },
        "answer":"B"
    }
];



let question_list = document.querySelector(".question_list");
// let us build the buttons to list the question numbers

let q_list_display = "";  // variable to hold the list of the buttons

Questions.forEach( (_,i)=>{
    q_list_display += `<button class="btn btn-primary mx-1 text-white q_button" id="q_${i}"> ${ ( i + 1 ) }</button>`; 
        
});

// display the buttons for each of the question indicating their numbers
question_list.innerHTML = q_list_display;

// build a function that will help display one question at a time
let previousBtn          = document.querySelector('.previous');
let nextBtn              = document.querySelector('.next');
let ques_container       = document.querySelector('.question_container');

let qBtns  = document.querySelectorAll('.q_button');

let currentIndex = 0;  // index to hold the current question
let TotalScore = 0;  //total scores of the quize

const selectQuestion = (questions, index)=>{

    if(index > -1 && index < questions.length){
            ques_container.innerHTML = `<div class="row question_${index}">
                                            <div class="col-md-9 mx-auto question">
                                                <p class="fs-3"> ${index + 1} . ${ questions[index].question }</p>
                                            </div>
                                            <div class="col-md-9 mx-auto options"> 
                                                <p class="fs-4">A <input type="radio" name="q" value="A" />  ${ questions[index].option.A }</p> 
                                                <p class="fs-4">B <input type="radio" name="q" value="B" />  ${ questions[index].option.B }</p>  
                                                <p class="fs-4">C <input type="radio" name="q" value="C" />  ${ questions[index].option.C }</p>  
                                                <p class="fs-4">D <input type="radio" name="q" value="D" />  ${ questions[index].option.D }</p>  
                                            </div>

                                            <div class="col-md-9 submit_container text-center">
                                                <a class="btn btn-danger mx-1 text-white submit_question_btn w-50">
                                            </div>
                                            
                                    
                                        </div>`;
    }

    //stating when the submit button should show
    if(index == questions.length -1){
        document.querySelector('.submit_container').classList.remove('d-none');

    // control the previous button // disable or enable previous
    if( index == 0) {
        previousBtn.setAttribute('disabled', 'disabled');

    } else{

        previousBtn.removeAttribute('disabled')
    }  
    
    // disable or enable Next Button
    if ( index == questions.length-1) {

        nextBtn.setAttribute('disabled', 'disabled');

    }else{
        nextBtn.removeAttribute('disabled');
    }


    // locate the current question button and highlight it
    
    
    qBtns.forEach( (item) => {
            if( item.id.split('_')[1] == index ){
                item.classList.replace('btn-primary','btn-success'); 
            }else{ 
                item.classList.replace('btn-success','btn-primary');
            }
    }) ;

    //call the answer question of the function
    answerQuestion(index);
    console.log(TotalScore);
}


// function to hndle the Next and previous buttons
nextBtn.onclick = function(){
currentIndex++; // increment the currentIndex by 1
// then select a question
selectQuestion(Questions, currentIndex);
}

previousBtn.onclick = function(){
currentIndex--; // increment the currentIndex by 1
// then select a question
selectQuestion(Questions, currentIndex);
}
//go to the a given question
qBtns.forEach((item) =>{
//attach a click event on each of the button
item.addEventListener('click', function(e){
    let question_index = parseInt(item.id.split('_')[1]); //get the index of the question from the button
    currentIndex       = question_index;           //set the currentIndex to the question_index
    selectQuestion(questions, currentIndex);      //call the select question function 
});
})

selectQuestion( Questions , currentIndex);

function answerQuestion(index){
let options = document.getElementsByName('q');
//check when option is select for each question
options.forEach((option)=>{
        option.addEventListener('click', function(e){
        let userAnswer = option.valve;
        if(userAnswer == questions[index].answer){
            TotalScore+=10;
            //that's each question carry 10 mark 
        }
    })

})


}
            //submit questions and answer
            let subBtn = document.querySelector('.submit_container');
            subBtn.onclick = function(e){
                //redirecting the user to the score page
                location.href ='score.html';

            }
            //using the storage API to store the score
            // two ways of doing that are:
            //    sessionStorage: this store temporary on the RAM
            //    localStorage: this store parmanently on the ROM
            sessionStorage.setItem('score', TotalScore);