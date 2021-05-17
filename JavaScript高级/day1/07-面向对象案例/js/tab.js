var that;
class Tab {
    constructor(id) {
        that = this;
        // 获取元素
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        // li的父元素
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        // section父元素
        this.fsection = this.main.querySelector('.tabscon')

        this.init();
    }
    // 获取所有的li和section
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.span = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }
    init() {
        this.updateNode();
        // init 初始化操作 让相关的元素绑定事件
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.span[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
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
        that.clearClass();
        // alert(1);
        // (1)创建li元素何section元素
        var li = '<li class="liactive"><span>新建选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        var section = '<section class="conactive">new table</section>'
        // (2)把这两个元素追加到对应的父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);// 'beforeend'：插入元素内部的最后一个子节点之后
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3.删除功能
    removeTab(e) {
        e.stopPropagation();// 阻止冒泡 防止触发li的切换
        // 当前的索引号
        var index = this.parentNode.index;
        // console.log(index)
        // 根据索引号删除对应的li和section
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当我们删除的不是选中状态的li时，原来的选中状态li保持不变
        if (document.querySelector('.liactive')) return;
        // 当我们删除了选定状态的li时，让他的前一个li处于选定状态
        index--;
        that.lis[index] && that.lis[index].click();// 手动调用我们的点击事件 不需要鼠标触发
    }
    // 4.修改功能
    editTab() {
        var str = this.innerHTML;
        // 核心思路: 双击文字的时候, 在 里面生成一个文本框, 当失去焦点或者按下回车然后把文本框输入的值给原先元素即可
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text">'
        var input = this.children[0]
        input.value = str;
        input.select(); // 文本框中的文字处于选中状态
        // 当我们离开文本框 把文本框的值赋值给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        // 按下回车也可以把文本框里面的值赋值给span
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                // this.parentNode.innerHTML = this.value;
                this.blur();
            }
        }

    }

}
new Tab('#tab');