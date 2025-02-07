// -------- Example 1 <h1> ----------

// Step 1: Create the element

const newH1 = document.createElement("h1");

// Step 2: Add attributes/properties

newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// Step 3: Append element to DOM

// document.body.append(newH1);
document.body.prepend(newH1);

// Remove HTML Element

document.body.removeChild(newH1);