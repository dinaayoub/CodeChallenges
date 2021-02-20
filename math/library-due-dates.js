function calculateFine(input) {
  let array = input.split('\n');
  let returnDate = array[0].split(' ');
  let dueDate = array[1].split(' ')

  returnDate.forEach((item, index) => {
    returnDate[index] = parseInt(item);
  });

  dueDate.forEach((item, index) => {
    dueDate[index] = parseInt(item);
  })

  let fine = 0;
  if (returnDate[2] > dueDate[2]) {
    fine = 10000;
  } else if (returnDate[2] === dueDate[2]) {
    if (returnDate[1] > dueDate[1]) {
      //months late
      fine += 500 * (returnDate[1] - dueDate[1]);
    } else if (returnDate[1] === dueDate[1]) {
      if (returnDate[0] > dueDate[0]) {
        //days late
        fine += 15 * (returnDate[0] - dueDate[0])
      } //else fine = 0; which is already the case
    } //else fine = 0, which is already the case 
  } //else fine = 0 which is already the case. 

  console.log(fine);
}

calculateFine('1 5 2015\n1 2 2015');