const submitBtn = document.querySelector("button#submitBtn")

submitBtn.addEventListener("click", () => {
  let request = document.querySelector("textarea#request").value
  console.log(request)
})