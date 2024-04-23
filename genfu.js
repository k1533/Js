console.time("Time :");
function* add_on(){
    yield 5,
    yield 6
}
function* All(){
    yield 5,
    yield 6,
    yield 7,
    yield 8,
    yield *add_on()
    yield 8,
    yield 9
}
const output =All();
var done = false;
while(done!=true){
    console.log(output.next().value);
    done=output.next().done;
}
console.timeEnd("Time :");

for(let i=0; i<5;i++){
console.log(output.next().value);
}   

/*
"Imagine you have a large dataset stored in an array in JavaScript. You want to process this data in smaller, more manageable chunks without loading the entire dataset into memory at once. How would you achieve this using a generator function in JavaScript? Provide a code example demonstrating how you would implement a generator function to iterate over the dataset in chunks and process each chunk."
*/

// Suppose this is your large dataset
const bigData = ["a", "b", "c", "d","Kushal", "f", "Patel","h", "i", "j", "k"];

// Generator function to process data in chunks
function* processDataInChunks(data, chunkSize) {
  for (let i = 0; i < data.length; i += chunkSize) {
    yield data.slice(i, i + chunkSize);
  }
}

// Using the generator function to process data
const chunkSize = 5; // Process 100 items at a time
const dataProcessor = processDataInChunks(bigData, chunkSize);

// Iterate over the chunks and process them
let processedChunks = 0;
let totalChunks = 0;
for (const chunk of dataProcessor) {
  // Process each chunk here, for example:
  console.log(`Processing chunk ${processedChunks + 1}/${Math.ceil(bigData.length / chunkSize)}`);
  // Example processing:
  // SomeFunctionToProcess(chunk);

  processedChunks++;
}