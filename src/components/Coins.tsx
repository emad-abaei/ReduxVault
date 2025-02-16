function Coins() {
  return (
    <>
      <img
        src='/coin-1.png'
        alt='coin image'
        className='max-w-[300px] md:max-w-[400px] absolute bottom-[20%] left-[3%] animate-moverOne'
      />
      <img
        src='/coin-2.png'
        alt='coin image'
        className='max-w-[300px] md:max-w-[400px] absolute top-[-10%] right-[5%] animate-moverTwo'
      />
    </>
  );
}

export default Coins;
