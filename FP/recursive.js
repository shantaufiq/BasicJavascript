/* Rekursi (recursive) banyak digunakan dalam pemrograman fungsional karena merupakan cara yang alami dan satu-satunya untuk melakukan perulangan atau mengiterasi data. */
// immutability (atau tidak boleh berubahnya data) yang harus diutamakan dalam FP


function generateArray(n) {
    if (n < 0) {
      return [];
    }
  
    return [...generateArray(n - 1), n];
  }
  
  console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]