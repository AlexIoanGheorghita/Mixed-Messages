const arrayContainer = {
    arrayStart: [
        "Education ", 
        "The most difficult thing ", 
        "You'll find that education ",
        "The elevator to success ",
        "Individual commitment to a group effort ",
        "True freedom ",
        "Life ",
        "Sometimes courage ",
        "Failure ",
        "Our greatest glory "
    ],
    arrayMiddle: [
        "is the most powerful weapon ", 
        "is just about the only thing lying around loose in this world ",
        "is the decision to act ",
        "is out of order ",
        "is what makes a team work ",
        "is impossible without a mind ",
        "is like riding a bycicle ",
        "is a quiet voice at the end of the day ",
        "is simply the opportunity to begin again ",
        "is not in never falling, but in rising "
    ],
    arrayEnd: [
        "which you can use to change the world.",
        "and it's about the only thing a fellow can have as much of as he's willing to haul away.",
        "and the rest is merely tenacity.",
        "so you will have to use the stairs, one at a time.",
        "and it is what makes a civilisation work.",
        "and only a mind made free by discipline.",
        "which means that to keep balance you must keep moving.",
        "which says \"I will try again tomorrow\".",
        "and this time more intelligently.",
        "and every time that is."
    ]
}

const randomMessage = (obj) => {
    return {
        obj,
        arrMessage: [],

        extractRandomPart() {
            for (const item in this.obj) {
                const randomQuoteIndex = Math.floor(Math.random() * this.obj[item].length);
                this.arrMessage.push(this.obj[item][randomQuoteIndex]);
            }
        },

        createMessage() {
            this.extractRandomPart();
            let message = '';
            for (const item of this.arrMessage) {
                message += item;
            }
            console.log(message);
        }
    }
}

randomMessage(arrayContainer).createMessage();