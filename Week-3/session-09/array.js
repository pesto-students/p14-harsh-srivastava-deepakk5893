function divideArray(nums) {
  let even_nums = []
  let odd_nums = []
  for (let num of nums) {
    if (num%2 === 0){
    even_nums.push(num)
    }else{
    odd_nums.push(num)
    }
  }
  even_nums = even_nums.length == 0 ? 'None' : even_nums.sort()
  odd_nums = odd_nums.length == 0 ? 'None' : odd_nums.sort()
  console.log(even_nums)
  console.log(odd_nums)
}

divideArray([1,3,5])
