import rockasuspage from '../img/rockasus-page.png'

function Portafolio() {
  return (
    <div className="w-full h-screen">
      <h2 className="text-center mt-20 font-bold text-6xl">Bienvenidos a mi portafolio</h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className='w-96'>
            <img src={rockasuspage} alt="" />
        </div>
      </div>
    </div>
  );
}




export default Portafolio;
