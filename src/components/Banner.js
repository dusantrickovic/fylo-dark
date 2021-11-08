import intro from '../imgs/illustration-intro.png'

function Banner() {
    return (
        <section className="flex flex-col bg-maincol h-screen md:h-full xl:h-screen text-white text-center pt-6">
            <img src={intro} alt="intro-image" className="w-1/3 mt-0 mb-7 m-auto" />
            
            <h1 className="z-20 self-center text-3xl w-1/3 text-center justify-center font-semibold">All your files in one secure location, accessible anywhere.</h1>
            
            <div className="z-20 flex flex-col text-gray-200 mt-6 self-center w-1/3 text-lg">
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button className="bg-gradient-to-r from-green-400 to-blue-400 rounded-full p-3 sm:w-1/2 self-center mt-5 font-semibold shadow-sm">Get Started</button>
            </div>            
            
        </section>
    )
}

export default Banner
