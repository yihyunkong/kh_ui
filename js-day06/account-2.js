export let count = 0;
export /* default */function increase(){ 
  count++;
  console.log('increase : ' + count);
}
export function getCount(){
  return count;
}

/* default는 1개만 보내주고 싶을 때 사용 !
   여러개 보낼 때는 사용할 수 없다. */