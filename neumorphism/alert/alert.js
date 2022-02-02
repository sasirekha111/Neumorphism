export default {
    data: {
        visible: true,
    },
    toggleShow: function() {
        this.visible = !this.visible;
    },
    onInit(){
        let str=this.border.slice(0, -2);
        if(str>40) this.border="40px";
    }
}