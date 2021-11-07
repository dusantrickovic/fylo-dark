import profile1 from './profile-1.jpg';
import profile2 from './profile-2.jpg';
import profile3 from './profile-3.jpg';
import quotesign from '../imgs/bg-quotes.png'


function Testimonials({data}) {
    let images = [profile1, profile2, profile3];

    return (
        <div className=" relative flex md:flex-row xs:flex-col h-full bg-maincoldark px-10 pt-40 self-center justify-center pb-24">
            <img src={quotesign} alt="quotes" className="relative left-12 bottom-8 z-10 h-10 w-10" />
            {data?.map(({review, name, image}, i) => 
                <div className="bg-maincol p-4 mx-4 z-20 py-8 sm:mb-6 rounded-sm shadow-xl">
                    <p className="pt-8 px-3 text-lg">{review}</p>
                    <div className="flex mt-6 px-2 text-sm -mb-4">
                        <img src={images[i]} alt="profile" className="w-1/12 h-1/12 rounded-full self-center" />
                        <div className="self-center -mt-5 text-sm ml-2">
                            <p className=" pt-8 font-bold">{name}</p>
                            <p className="pb-3 text-gray-300">Founder &amp; CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            )}  
        </div>
    )
}

export default Testimonials
