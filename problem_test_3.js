function convertToMilitaryTime(time) {
    const timeSplited = time.split(":");
    let hours = parseInt(timeSplited[0]);
    let minutes = parseInt(timeSplited[1]);
    let seconds = parseInt(timeSplited[2].slice(0, 2));
    const isPM = timeSplited[2].slice(-2) === "PM";
    
    if (isPM && hours !== 12) {
      hours += 12;
    }
  
    if (!isPM && hours === 12) {
      hours = 0;
    }
  
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  
  const inputTime = "07:05:45PM";
  const militaryTime = convertToMilitaryTime(inputTime);
  console.log(militaryTime); // Output: "19:05:45"
  