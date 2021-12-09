export default {
    data: {
        left: true,
        right: false
    },
    toggleSwitch: function() {
        this.left = !this.left;
        this.right = !this.right;
    }
}