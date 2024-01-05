document.getElementById("drawBtn").addEventListener("click", function () {
  var result = Math.floor(Math.random() * 10) + 1;
  document.getElementById("result").innerHTML = "你抽到的数字是：" + result;
});
