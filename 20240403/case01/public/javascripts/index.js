const btnPrevDate = document.querySelector(".btn-prevDate");
const btnNextDate = document.querySelector(".btn-nextDate");
const myDate = document.querySelector(".myDate");
const btnAddShow = document.querySelector(".btn-addShow");
const bsOffcanvas = new bootstrap.Offcanvas('#inputArea');
const newSet = document.querySelector(".newSet");
const updateSet = document.querySelector(".updateSet");
const btnSend = document.querySelector(".btn-send");
const form1 = document.querySelector("form");
const lists = document.querySelector(".lists");
const btnUpdate = document.querySelector(".btn-update");
const btnDel= document.querySelector(".btn-del");

myDate.addEventListener("change", e => {
    const date = e.currentTarget.value;
    window.location.href = "/expe/d/"+date;
})

btnPrevDate.addEventListener("click", () => {
    const date = new Date(myDate.value);
    date.setDate(date.getDate() - 1);
    const dateString = date.toISOString().split("T")[0];
    window.location.href = `/expe/d/${dateString}`;
})

btnNextDate.addEventListener("click", () => {
    const date = new Date(myDate.value);
    date.setDate(date.getDate() + 1);
    const dateString = date.toISOString().split("T")[0];
    window.location.href = `/expe/d/${dateString}`;
})

btnAddShow.addEventListener("click", e => {
    document.querySelector("input[name=title]").value = "";
    document.querySelector("input[name=money]").value = "";
    document.querySelector("input[name=id]").value = "";
    document.querySelector("select").selectedIndex = 0;
    newSet.classList.add("d-flex");
    newSet.classList.remove("d-none");
    updateSet.classList.add("d-none");
    updateSet.classList.remove("d-flex");
    bsOffcanvas.show();
});

btnSend.addEventListener("click", () => {
    form1.submit();
});

lists.addEventListener("click", e => {
    const clip = e.target.closest(".list");

    document.querySelector("input[name=title]").value = clip.getAttribute("title");
    document.querySelector("input[name=money]").value = clip.getAttribute("money");
    document.querySelector("input[name=id]").value = clip.getAttribute("id");
    document.querySelector("select").selectedIndex = clip.getAttribute("sort");

    updateSet.classList.add("d-flex");
    updateSet.classList.remove("d-none");

    newSet.classList.add("d-none");
    newSet.classList.remove("d-flex");

    bsOffcanvas.show();
});

btnUpdate.addEventListener("click", () => {
    const url = "/expe";
    const formDate = new FormData(form1);

    fetch(url, {
        method: "PUT",
        body: formDate
    }).then(response => response.json()).then(result => {
        if(result.result){
            window.location.href = "/expe/d/"+myDate.value;
        }else{
            alert("修改錯誤")
        }
    }).catch(error => {
        console.log(error);
    });
})

btnDel.addEventListener("click", () => {
    const url = "/expe";
    const formDate = new FormData(form1);

    fetch(url, {
        method: "DELETE",
        body: formDate
    }).then(response => response.json()).then(result => {
        console.log(result);
        if(result.result){
            window.location.href = "/expe/d/"+myDate.value;
        }else{
            alert("刪除錯誤")
        }
    }).catch(error => {
        console.log(error);
    });
})