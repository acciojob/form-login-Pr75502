function getFormvalue() {
    //Write your code here
	let first=document.querySelector("input[name='fname']")
	let last=document.querySelector("input[name='lname']")
	let btn=document.querySelector("#form1")

	btn.addEventListener("submit",(e)=>{
		e.preventDefault()
			alert(`${first.value} ${last.value}`)
	})
	
}
