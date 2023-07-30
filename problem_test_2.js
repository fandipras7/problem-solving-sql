function calculateRatios(arr) {
    let positiveTotal = 0;
    let negativeTotal = 0;
    let zeroTotal = 0;
  
    const totalElements = arr.length;
  
    for (let i = 0; i < totalElements; i++) {
      if (arr[i] > 0) {
        positiveTotal++;
      } else if (arr[i] < 0) {
        negativeTotal++;
      } else {
        zeroTotal++;
      }
    }
  
    const positiveRatio = positiveTotal / totalElements;
    const negativeRatio = negativeTotal / totalElements;
    const zeroRatio = zeroTotal / totalElements;
  
    return [positiveRatio.toFixed(6), negativeRatio.toFixed(6), zeroRatio.toFixed(6)];
  }
  
  const arr = [-4, 3, -9, 0, 4, 1];
  const ratios = calculateRatios(arr);
  console.log(ratios.join('\n'));
  