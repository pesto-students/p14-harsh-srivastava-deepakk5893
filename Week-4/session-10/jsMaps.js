function calcWordFrequencies(){
  let input_data = prompt('please enter data').split(' ')
  let obj = {}
  for(let key of input_data){
      if(key in obj){
          obj[key] += 1
      }else{
          obj[key] = 1
      }
  }
  console.log(obj)
}