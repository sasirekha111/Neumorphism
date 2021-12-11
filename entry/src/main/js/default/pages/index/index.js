export default {
    theme: {
        r: 241,
        g: 206,
        b: 242,
    },
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
