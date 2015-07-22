var fizz = 'Fizz', buzz = 'Buzz'


for(i=0; i<19; i++){
  isfizz = (i%3 == 0);
  isbuzz = (i%5 == 0);

  if (isbuzz && !isfizz)
    console.log(buzz);
  else if (isfizz)
    console.log(fizz);
  else
    console.log(i);
}

  
