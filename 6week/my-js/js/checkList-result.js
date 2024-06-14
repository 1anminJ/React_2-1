var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);      // addBtn.onclick; 라고 해도 됨

// 여행 물품을 추가하는 함수
function addList(){
    var item = document.querySelector("#item").value;
    if(item != null){
        itemList.push(item);
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();
    
}

// 여행 물품을 나열하는 함수
function showList(){
    var list = "<ul>";          // 목록을 시작하는 태그
    for(var i = 0; i < itemList.length; i++){
        list += "<li>"+ itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>";            // 목록을 끝내는 태그

    document.querySelector("#itemList").innerHTML = list;

    var remove = document.querySelectorAll(".close");
    for(var i = 0; i < remove.length; i++){
        remove[i].addEventListener("click", removeList);
    }
}

// 여행 물품을 삭제하는 함수
function removeList(){
    var id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}