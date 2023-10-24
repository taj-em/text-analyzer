// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}


// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurencesInText(word, text) {
  let occurenceCount = 0;
  occurenceArray = text.split(" ");
  occurenceArray.forEach(occurence => {
    if (isEmpty(word)) {
      occurenceCount = 0;
    } else if (occurence.toLowerCase().includes(word.toLowerCase())) {
      occurenceCount++;
    }
  })
  return occurenceCount;
}

function mostCommon(text) {
  if (isEmpty(text)) {
    return null;
  }
  const textArray = text.split(" ")
  let memoryArray = []; //array with the first object from textArray inside
  let commonWord = 0; //variable of 0
  textArray.forEach(word => { //runs each word in text array through a function
    if (memoryArray.includes(word)) {
      commonWord++;
    } else {
      memoryArray.push(word);
    }
    })
    mostCommonDisplay(memoryArray);
  }


  // memoryArray.forEach(word => {
  //   let li = document.createElement("li");
  //   li.append(word);
  //   ul.append(li);
  // })


function bannedWords(text) {
  let safeWordArray = [];
  const textArray = text.split(" ");
  textArray.forEach(word => {
    if (word.toLowerCase().includes("zoinks")) {
      word = "";
    } else if (word.toLowerCase().includes("muppeteer")) {
      word = "";
    } else if (word.toLowerCase().includes("biffaroni")) {
      word = "";
    } else if (word.toLowerCase().includes("loopdaloop")) {
      word = "";
    } else {
      safeWordArray.push(word);
    }
  })
  return safeWordArray;
}

//UI Logic

function mostCommonDisplay(memoryArray) {
  const ul = document.querySelector("ul#memory-array");
  memoryArray.forEach(word => {
    let li = document.createElement("li");
    li.append(word);
    ul.append(li);
  });
}


function boldPassage(word, text) {
  if (isEmpty(text) || isEmpty(word)) {
    return null;
  }
  const textArray = text.split(" ");
  let p = document.createElement("p");
  textArray.forEach(element, index => {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      bold = document.createElement("strong")
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element)
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  })
  return p;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurencesOfWord = numberOfOccurencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurencesOfWord;
  mostCommon(passage);
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function () {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission)
});