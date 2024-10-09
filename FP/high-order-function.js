/* HOF adalah fungsi yang menerima fungsi lainnya sebagai argumen dan/atau mengembalikan sebuah fungsi lain. Umumnya, teknik HOF digunakan untuk berbagai hal berikut. */

// menerima argumen sebuah fungsi
function memoize(fn) {
    const cache = new Map();
  
    // mengembalikan nilai berupa fungsi
    return function(...args) {
      const key = JSON.stringify(args);
  
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      const result = fn(...args);
      cache.set(key, result);
  
      return result;
    };
  }
  
  function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
  }
  
  const memoizedSumArray = memoize(sumArray);
  const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);
  
  /* console.time('Memoized Sum First Call');
  console.log('Total:', memoizedSumArray(largeArray));
  console.timeEnd('Memoized Sum First Call');
  
  console.time('Memoized Sum Second Call (Cached)');
  console.log('Total:', memoizedSumArray(largeArray));
  console.timeEnd('Memoized Sum Second Call (Cached)'); */



// ! Teknik Currying
function adjectivfy(adjective) {
    return function (noun) {
      return `${noun} ${adjective}.`;
    }
  }
  
  function multipleBy(x) {
    return function(y) {
      return x * y;
    }
  }
  
  const coolifier = adjectivfy('keren');
  const funnifier = adjectivfy('seru');
  
  const multipleByFive = multipleBy(5);
  
  console.log(coolifier('Dicoding')); // Output: Dicoding keren.
  console.log(funnifier('JavaScript')); // Output: JavaScript seru.
  console.log(multipleByFive(7)); // Output: 35
  console.log(multipleByFive(10)); // Output: 50