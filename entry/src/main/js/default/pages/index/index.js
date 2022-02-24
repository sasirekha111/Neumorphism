export default {
    buttonClick(){
        console.log('Button clicked !');
    },
    checkboxClick(){
        console.log('Checkbox clicked !')
    },
    radioClick(){
        console.log('Radio clicked !')
    },
    toggleClick(){
        console.log('Toggle clicked !')
    },
    dropdownSelect(e){
        console.log(e.newValue)
    },
    previousEvent(){
        console.log("goto PreviousPage")
    },
    nextEvent(){
        console.log("goto NextPage")
    },
}