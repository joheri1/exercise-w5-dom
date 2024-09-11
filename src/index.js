console.log("Start Here 😉");

const changeBox = document.getElementById("box")

const changeTheme = (theme) => {
  changeBox.classList.remove("dark", "light", "crazy")
  changeBox.classList.add(theme)
}

document.getElementById("dark").addEventListener("click", () => changeTheme("dark"))
document.getElementById("light").addEventListener("click", () => changeTheme("light"))
document.getElementById("crazy").addEventListener("click", () => changeTheme("crazy"))


