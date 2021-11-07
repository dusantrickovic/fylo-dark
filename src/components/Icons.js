import accessanywhere from '../imgs/icon-access-anywhere.svg'
import securityicon from '../imgs/icon-security.svg'
import collabicon from '../imgs/icon-collaboration.svg'
import anyfile from '../imgs/icon-any-file.svg'

function Icons() {
    return (
        <div className="bg-maincoldark h-1/2">
            <section className=" grid grid-cols-2 z-30 relative h-1/2 self-center my-auto w-2/3 mx-auto text-gray-300 mt-20 md:mt-0">
                <div className="flex flex-col justify-center items-center text-center w-10/12 p-5 self-center mx-auto">
                    <img src={accessanywhere} alt="access anywhere" className="h-16" />
                    <div>
                        <h2 className=" pt-3 font-bold text-white">Access your files, anywhere</h2>
                        <p className="pt-2">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center text-center  p-5 mx-auto w-10/12">
                    <img src={securityicon} alt="security" className="h-16" />
                    <div>
                        <h2 className=" pt-3 font-bold text-white">Security you can trust</h2>
                        <p className="pt-2">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center text-center p-5 mx-auto w-10/12 mt-4">
                    <img src={collabicon} alt="collaborate" className="h-16" />
                    <div>
                        <h2 className="pt-3 font-bold text-white">Real-time collaboration</h2>
                        <p className="pt-2">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center text-center w-10/12 p-5 mx-auto mt-4">
                    <img src={anyfile} alt="store files" className="h-16" />
                    <div>
                        <h2 className="pt-3 font-bold text-white">Store any type of file</h2>
                        <p className="pt-2">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Icons
