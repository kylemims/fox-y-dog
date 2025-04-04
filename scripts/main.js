const jokeButton = document.querySelector("#joke-button");
const jokeOutput = document.querySelector("#joke-output");

jokeButton.addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => {
    return response.json();
  })
  .then((jokeData) => {
    console.log("Using .then():", jokeData);
    jokeOutput.innerHTML = `🦃 ${jokeData.setup}<br>🤦‍♀️ ${jokeData.punchline}`;
    });
  });
  
  
  jokeButton.addEventListener("click", async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jokeData = await response.json();
    console.log("Using async/await:", jokeData);
    jokeOutput.innerHTML = `🃏 ${jokeData.setup}<br>😂 ${jokeData.punchline}`;
  });


const studentsAPI = "https://jsonplaceholder.typicode.com/users"


const studentList = document.querySelector("#student-list")
const loadBtn = document.querySelector("#load-btn")
const endpoint = "https://jsonplaceholder.typicode.com/users"

// ❗ Using .then() approach
const fetchStudentsWithThen = () => {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            console.log("Using .then():", data)
            data.forEach(student => {
                const li = document.createElement("li")
                li.textContent = student.name
                studentList.appendChild(li)
            })
        })
}

//  Using async/await approach
const fetchStudentsWithAsync = async () => {
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log("Using async/await:", data)
    data.forEach(student => {
        const li = document.createElement("li")
        li.textContent = student.name
        studentList.appendChild(li)
    })
}

//  Both run when button is clicked (for side-by-side comparison)
loadBtn.addEventListener("click", () => {
    studentList.innerHTML = "" // Clear previous list
    fetchStudentsWithThen()
    fetchStudentsWithAsync()
})

























































// // fetch('https://randomfox.ca/floof/')
// // .then((response) => {
// //   return response.json();
// // })
// // .then((foxData) => {
// // document.querySelector("#fox").src = foxData.image
// // });

// // const displayFoxImage = async () => {
// //     const response = await fetch("https://randomfox.ca/floof/")
// //     const foxData = await response.json()
  
// //     const foxImage = document.querySelector("#fox")
// //     foxImage.src = foxData.image
// //   }
  
// //   // When the button is clicked, call the async function
// //   foxButton.addEventListener("click", displayFoxImage)


// // fetch("https://randomfox.ca/floof/")
// //   .then(response => response.json())
// //   .then(data => {
// //     document.querySelector("#fox").src = data.image;
// //   })
// //   .catch(error => {
// //     console.error("Something went wrong:", error);
// //     alert("Oops! Couldn’t load a fox right now.");
// //   });

// //   const displayDogImage = async () => {
// //     try {
// //       const response = await fetch("https://random.dog/woof.json");
// //       const data = await response.json();
// //       document.querySelector("#dog").src = data.url;
// //     } catch (error) {
// //       console.error("Failed to fetch dog:", error);
// //       alert("Couldn't fetch a dog picture. Try again later!");
// //     }
// //   };

// //   if (data.url && data.url.endsWith(".jpg")) {
// //     dogImage.src = data.url;
// //   } else {
// //     dogImage.src = "./images/fallback-dog.jpg"; // use a backup image
// //   }


// const displayDogImage = async () => {
//     try {
//       const response = await fetch("https://random.dog/woof.json");
//       const data = await response.json();
  
//       if (data.url && data.url.endsWith(".jpg")) {
//         document.querySelector("#dog").src = data.url;
//       } else {
//         document.querySelector("#dog").src = "./images/fallback-dog.jpg";
//       }
  
//     } catch (error) {
//       console.error("Error fetching dog image:", error);
//       alert("Sorry, we couldn't fetch a dog right now!");
//     }
//   };
//   document.querySelector("#message").textContent = "Loading...";