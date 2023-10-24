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
  let memoryArray = []; 
  let commonWord = 0; 
  textArray.forEach(word => {
    if (memoryArray.includes(word.toLowerCase())) {
      commonWord++;
    } else {
      memoryArray.push(word.toLowerCase());
    }
    })
    mostCommonNumbered(memoryArray, textArray);
  }

  function mostCommonNumbered (memoryArray, textArray) {
    let displayArray = [];
    memoryArray.forEach(unique => {
      let count = 0;
      textArray.forEach((word) => (word.toLowerCase() === unique.toLowerCase() && count++));
      displayArray.push([count, unique]);
    })
    mostCommonDisplay(displayArray.sort().reverse());
  }

//UI Logic

function mostCommonDisplay(displayArray) {
  const ul = document.querySelector("ul#memory-array");
  displayArray.forEach(pair => {
    let li = document.createElement("li");
    li.append(pair);
    ul.append(li);
  });
}

function handleFormSubmission(event) {
  event.preventDefault();
  document.querySelector("ul#memory-array").replaceChildren();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurencesOfWord = numberOfOccurencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurencesOfWord;
  mostCommon(passage);
}

window.addEventListener("load", function () {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission)
});