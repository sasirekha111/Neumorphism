import prompt from '@system.prompt';
export default {
    onMenuSelected(e) {
        prompt.showToast({
            message: e.value
        })
    },
    onTextClick() {
        const posx = (this.$element("apiMenu").getBoundingClientRect().left) - 80;
        const posy = (this.$element("apiMenu").getBoundingClientRect().top);
        this.$element("apiMenu").show({x:posx,y:posy});
    }
}