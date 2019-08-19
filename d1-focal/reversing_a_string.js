const  args = process.argv;
const newArr = args.slice(2,);

for (let i = 0; i < newArr.length; ++i) {
  let output = '';
  for (let num = 0; num < newArr[i].length; ++num) {
    output = newArr[i][num] + output;
  }
  console.log(output);
}

