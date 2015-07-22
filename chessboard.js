var size=8;

space = ' '
evenline = ''
oddline = ''

for(i=0; i<size; i++) {
  evenline += ((i%2 == 0) ? space : '#')
  oddline += ((i%2 == 0) ? '#' : space)
}

for(i=0; i<size; i++) {
  console.log( (i%2 == 0) ? evenline : oddline)
}


