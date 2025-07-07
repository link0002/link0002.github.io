//“document” 代表当前的 HTML 文档对象，“querySelector” 是文档对象的一个方法，作用是返回文档中匹配指定 CSS 选择器的第一个元素，这里的 “h1” 就是 CSS 选择器，即选择 HTML 文档中的一级标题元素。整行代码的意思是声明一个名为 “myHeading” 的常量，并将其赋值为文档中找到的第一个 “h1” 元素。

//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world !";


document.querySelector("html").addEventListener("click", () => {
  alert("别戳我，我怕疼！");
});


const myImage = document.querySelector("img");
//“myImage.onclick” 指的是在编程环境中，针对名为 “myImage” 的图像元素设置的点击事件处理程序。
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/Firefox-Logo-PNG-Clipart.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};


//为按钮、标题添加函数
//声明变量、函数
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};

