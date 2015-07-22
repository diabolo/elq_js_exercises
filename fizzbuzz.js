var fizz = 'Fizz', buzz = 'Buzz', fizzbuzz= 'FizzBuzz'


for(i=0; i<100; i++){
  isfizz = (i%3 == 0);
  isbuzz = (i%5 == 0);

  if (isbuzz && isfizz)
    console.log(fizzbuzz)
  else if (isbuzz)
    console.log(buzz);
  else if (isfizz)
    console.log(fizz);
  else
    console.log(i);
}

  
