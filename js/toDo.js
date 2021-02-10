var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var imgDelete = document.getElementsByClassName("todo-trash");
var crtToDoBut = document.getElementById("addToDo");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var closeTips = document.querySelector(".closeTips");
var openTips = document.querySelector(".tipBtn");

function onPageLoaded() {
  deleteTodo();
  loadTodo();

}
function closeSaveBox(){
  saveMassage.style.height="0%";
}
//Функция удаления по иконке
function deleteTodo(){
    for(let img of imgDelete){
      img.addEventListener ("click",function (){
        img.parentElement.remove();
        event.stopPropagation();
      });
    }
  }
  //Загружаем список если он был прежде сохранен
function loadTodo(){
    if(localStorage.getItem("todoL")){
      ul.innerHTML = localStorage.getItem("todoL");
      deleteTodo();
    }
  }

// Проверяем не щелкнули ли мы по кнопке мышкой для создание нового елемента списка
crtToDoBut.addEventListener("click",function(){
        // Создаем переменные с создаными обьектами
      var li = document.createElement("li");
      var spanElement = document.createElement("span");
      var img = document.createElement("img");
        img.src = "images/trashIcon.png";
        img.classList.add("todo-trash");
      var newTodo = input.value;
      input.value = " ";
        // Создаем новый елемент
      ul.appendChild(li).append(newTodo,spanElement,img);
      deleteTodo();
      
      
  });
// Сохраняем список дел в локальное хранилище
  saveBtn.addEventListener("click",function(){
    saveMassage.style.height="22px";
    localStorage.setItem("todoL",ul.innerHTML );
    setTimeout(closeSaveBox,1500); // Активируем функцию задвигающейся шторки через 1.5 секунды
  });

  // Очистить содержимое списка
  clearBtn.addEventListener("click", function(){
    ul.innerHTML = " ";
  });


  closeTips.addEventListener("click", function(){
    overlay.style.height="0%";
  });

  openTips.addEventListener("click",function(){
    overlay.style.height= "100%";
  });



document.addEventListener("DOMContentLoaded", onPageLoaded);
 