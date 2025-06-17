btn.addEventListener("click", () => {
    let input = document.getElementById('info').value; // taking input from user using info

    // lists
    let ele = document.createElement('li'); //creating lists <li> </li>
    ele.classList.add("list"); // styling list

    // done and delete buttons 
    let btn1 = document.createElement('button'); // creating DONE button
    btn1.classList.add("btn1"); // styling done button
    let btn2 = document.createElement("button"); // creating DELETE button 
    btn2.classList.add("btn2"); // styling delete button

    // displaying lists
    ele.innerHTML = input;
    ele.innerHTML = input + "   ";  // space after input
    btn1.innerHTML = "Done" // done button created    
    btn2.innerHTML = "Delete"  // delete button created 
    let main = document.querySelector('ul'); // used to get tags without class and ID's
    main.appendChild(ele);  // adds data into lists
    ele.appendChild(btn1);  // adding done button after lists
    ele.appendChild(btn2); // adding delete button after lists

    // striking logic when user click done
    btn1.addEventListener("click", (() => {
        ele.style.textDecoration = "line-through";
        ele.classList.add("done")
    }));

    // deleting logic when user clicks delete
    btn2.addEventListener("click", (() => {
        ele.remove();
    }))
    document.getElementById('info').value = " "; // this will removes data
});