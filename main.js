function additemtlist(){
    document.getElementById("error").innerHTML=""
    let newitem= document.getElementById("InsertItem").value

    if (newitem==''){
        document.getElementById("error").innerHTML=("Are bhai kuch to likh ")

    }
    else{
        // document.getElementById("showItems").innerHTML=(newitem)
        let list = document.getElementById("box")
        let li = document.createElement('li')
        li.textContent=newitem
        list.appendChild (li)
        let a = document.createElement('a')
        a.href = "javascript:void(0)"
        a.textContent="x"
        li.appendChild(a)
        document.getElementById('InsertItem').value =" "
    }
    
    let btn = document.querySelector('ul')
        btn.addEventListener('click',function(e){
        let list = document.getElementById('box')
        let li = e.target.parentNode
            box.removeChild(li)
        }
        )
    }