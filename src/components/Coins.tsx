function Coins() {
  return (
    <>
      <picture className='max-w-[300px] md:max-w-[400px] absolute bottom-[15%] left-[3%] animate-moverOne'>
        <source srcSet='/coin-1.webp' type='image/webp' />
        <img src='/coin-1.png' alt='Rotating gold coin' />
      </picture>

      <picture className='max-w-[300px] md:max-w-[400px] absolute top-[10%] right-[5%] animate-moverTwo'>
        <source srcSet='/coin-2.webp' type='image/webp' />
        <img src='/coin-2.png' alt='Rotating gold coin' />
      </picture>
    </>
  );
}

export default Coins;
