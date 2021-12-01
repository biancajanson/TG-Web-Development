
const dateDifference = (firstDate, secondDate) => {
    let date1 = new Date(firstDate);
    let date2 = new Date(secondDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    console.log(diffDays + " days");
  };
  
  dateDifference("12/13/2021", "12/16/2021");
