// import "./style.css";

const OnClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value;

    // li生成
    const li = document.createElement("li");

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    // button（完了）タグを生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの親にあるliタグを未完了リストから削除
        const moveTarget = completeButton.closest("li");

        // 完了ボタンと削除ボタンを消す
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        
        // 戻すボタンを生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        moveTarget.firstElementChild.appendChild(backButton);

        // 完了リストに移動
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    // button（削除）タグを生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親にあるliタグを未完了リストから削除
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    // liタグの子要素に各要素を設定
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", OnClickAdd);