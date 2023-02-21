/*Recomendado*/
  //quando não se tem certeza use isso
  //Isso é colocando uma condicional, testando o meu body1
  const body1 = document.querySelector('body');
  //refino de type
  if (body1) body1.style.background = 'red';

  //quando se tem certeza use isso:
  //type assertions
  const body3 = document.querySelector('body') as HTMLBodyElement;
  body3.style.background = 'red';

  //HTMLElement
  const input = document.querySelector('.input') as HTMLInputElement;
  input.value = 'Qualquer coisa';
  input.focus();

/*Não É Recomendado*/
  //Non-Null assertion (!) o eslint reclama pois pode dá erro futuro
  const body2 = document.querySelector('body')!;
  body2.style.background = 'red';

  //o type assertions só se utiliza de subtypes, caso vc queria assertion q foge muito disso vc tem q subir o type, exemplo
  const body4 = document.querySelector('body') as unknown as number;
