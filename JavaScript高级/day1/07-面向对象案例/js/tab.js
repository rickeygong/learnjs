var that;
class Tab {
    constructor(id) {
        that = this;
        // 获取元素
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section')
        this.add = this.main.querySelector('.tabadd');
        this.init();
    }
    init() {
        // init 初始化操作 让相关的元素绑定事件
        this.add.onclick = this.addTab;

        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;

        }
    }
    // 1.切换功能
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';

    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 2.添加功能
    addTab() {
        // alert(1);
        // (1)创建li元素何section元素
        // (2)
    }
    // 3.删除功能
    removeTab() {

    }
    // 4.修改功能
    editTab() {

    }

}
new Tab('#tab');