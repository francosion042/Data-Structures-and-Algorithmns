// number countdown from n - 1

const countDown = n => {
  //base case- this will stop the program if condition becomes true
  if (n === 0) {
    return;
  } else {
    //display the countdown
    console.log(n);
    //make the recursive call until the condition in the base case is true
    countDown(n - 1);
  }
};

countDown(10);
