function drawTriangle(num) {
  for (let i=1; i<=num; i++){
      let str = ''
      for (let j = 1; j <= i; j++) {
          str += '*';
      }
      console.log(str)
  }
}

drawTriangle(4)