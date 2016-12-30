var words = ['get', 'receive', 'receive', 'he', 'retrieve', 'retrieve']
console.log(mostFrequentWord(words))


function mostFrequentWord(words) {
  var freqDist = {};
  for (i = 0; i<words.length; i++) {
    current = words[i];
    n = 0;
    if (Object.keys(freqDist).includes(current) == false) {
    for (j = 0; j<words.length; j++) {
      if (current === words[j]) {
        n=n+1;
      }
      freqDist[current] = n;
    }
    }
  }
  var allValues = Object.values(freqDist);
  var mostFreq = Math.max.apply(null, allValues)

  mostFreqWords = []
  for (item in freqDist) {
   if (freqDist[item] === mostFreq) {
     console.log(item, freqDist[item])
     mostFreqWords.push(item)
   }
  }
  mostFreqWords.sort()
  mostFreq = mostFreqWords[0]
  return mostFreq
}
