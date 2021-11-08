import { useState, useEffect } from 'react';

function GetStarted() {
    const [email, setEmail] = useState('');

    const patt = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/



    const checkEmail = () => {
        setEmail(document.getElementById("email").value);
    }
    
    useEffect(() => {
        let result = patt.test(email)
        if(result === true || email === '') {
            document.getElementById("correct").style.visibility = "hidden";            
        }
        else {
            document.getElementById("correct").style.visibility = "visible";
        }
    },[email])


    return (
        <div className="relative top-24 md:top-32 bg-maincol w-10/12 md:w-1/2 self-center m-auto text-center p-6 pt-12 pb-8 md:pb-10 flex flex-col shadow-xl rounded-sm">
            <h2 className="font-semibold text-3xl pb-4">Get early access today</h2>
            <p className=" m-auto w-10/12 pb-10 text-sm">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div className="flex flex-col md:flex-row justify-center">
                <input 
                    type="text" 
                    id="email"
                    placeholder="email@example.com" 
                    name="email"
                    className="rounded-full w-full md:w-7/12 h-12 pl-6 focus:outline-none text-black" />
                <input type="button" value="Get Started For Free" onClick={checkEmail} className="cursor-pointer ml-0 mt-4 md:mt-0 md:ml-8 text-sm font-semibold bg-gradient-to-r from-green-400 to-blue-400 rounded-full py-4 md:py-2 px-8" />
            </div>
            <p id="correct" className="text-left text-xs ml-14 mt-1 font-semibold text-red-500">Please enter a valid e-mail address.</p>
        </div>
    )
}

//bg-gradient-to-r from-green-400 to-blue-400 rounded-full p-3 sm:w-1/2 self-center mt-5 font-semibold
export default GetStarted
