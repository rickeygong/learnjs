// 往tbody 里面创建行： 有几个人（通过数组的长度）我们就创建几行
var tbody = document.querySelector('tbody');
for (var i = 0; i < datas.length; i++) {
    // 1. create tr
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    // 2. create td
    for (var k in datas[i]) { // 里面的for循环管列 td
        // 创建单元格 
        var td = document.createElement('td');
        // 把对象里面的属性值 datas[i][k] 给 td  
        // console.log(datas[i][k]);
        td.innerHTML = datas[i][k];
        tr.appendChild(td);
    }

    // 3. create delete
    var td = document.createElement('td');
    td.innerHTML = '<a href="javascript:;">删除 </a>';
    tr.appendChild(td);
}
// 4. 删除操作 开始 
var as = document.querySelectorAll('a');
for (var i = 0; i < as.length; i++) {
    as[i].onclick = function () {
        // 点击a 删除 当前a 所在的行(链接的爸爸的爸爸)  node.removeChild(child)  
        tbody.removeChild(this.parentNode.parentNode)
    }
}
