//在vue组件中执行
login() {
    var _this = this;
    this.disablebtn = true;
    this.loginText = "登录中...";
    //this.$reqs就访问到了main.js中绑定的axios
    this.$reqs.post("/users/login", {
        username: this.username,
        password: this.password
    }).then(function(result) {
        //成功
        console.log(result)
        _this.disablebtn = false;
        _this.loginText = "登录";

    }).catch(function(error) {
        //失败
        _this.disablebtn = false;
        _this.loginText = "登录"
    });
}