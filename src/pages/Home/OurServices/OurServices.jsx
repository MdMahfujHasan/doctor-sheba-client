import { useState } from 'react';
import services from '../../../assets/services.jpg';

const OurServices = () => {
    const [activeTab, setActiveTab] = useState('Cavity Protection');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-screen-lg mt-12 mx-auto">
                <div className=' lg:w-1/3'>
                    <figure>
                        <img src={services} className="w-full" alt="Services" />
                    </figure>
                </div>
                <div className=' lg:w-2/3'>
                    <div className="card-body">
                        <div>
                            <div className="flex space-x-4">
                                <button
                                    className={`${activeTab === 'Cavity Protection'
                                        ? 'bg-pink-500 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                        } py-2 px-4 rounded`}
                                    onClick={() => handleTabClick('Cavity Protection')}
                                >
                                    Cavity Protection
                                </button>
                                <button
                                    className={`${activeTab === 'Cosmetic Dentistry'
                                        ? 'bg-pink-500 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                        } py-2 px-4 rounded`}
                                    onClick={() => handleTabClick('Cosmetic Dentistry')}
                                >
                                    Cosmetic Dentistry
                                </button>
                                <button
                                    className={`${activeTab === 'Oral Surgery'
                                        ? 'bg-pink-500 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                        } py-2 px-4 rounded`}
                                    onClick={() => handleTabClick('Oral Surgery')}
                                >
                                    Oral Surgery
                                </button>
                            </div>

                            <div className="mt-4">
                                {activeTab === 'Cavity Protection' && (
                                    <div>
                                        <h2 className='text-2xl text-cyan-400 font-bold mb-2'>Cavity Protection</h2>
                                        <p className='text-lg text-slate-400'>The Cavity Protection focuses on the prevention and treatment of dental cavities. It provides information and resources related to maintaining optimal oral health and preventing tooth decay. This tab may include details about proper brushing and flossing techniques, the importance of regular dental check-ups, and the role of fluoride in cavity prevention. It may also discuss preventive measures such as dental sealants, which are thin protective coatings applied to the chewing surfaces of teeth to prevent decay. Additionally, this tab may provide guidance on maintaining a healthy diet and avoiding excessive consumption of sugary foods and beverages that can contribute to cavities.</p>
                                    </div>
                                )}

                                {activeTab === 'Cosmetic Dentistry' && (
                                    <div>
                                        <h2 className='text-2xl text-cyan-400 font-bold mb-2'>Cosmetic Dentistry</h2>
                                        <p className='text-lg text-slate-400'>The Cosmetic Dentistry explores various dental procedures and treatments designed to improve the appearance of teeth and enhance smiles. It covers a range of cosmetic dental options aimed at addressing aesthetic concerns. This may include teeth whitening treatments to brighten discolored teeth, dental veneers that can correct gaps, chips, or misshapen teeth, and orthodontic treatments like braces or clear aligners to straighten teeth. Cosmetic dentistry can also involve gum reshaping or contouring to improve the overall appearance of the smile. The tab may provide information on the benefits, considerations, and potential risks associated with different cosmetic procedures, empowering individuals to make informed decisions about enhancing their smile.</p>
                                    </div>
                                )}

                                {activeTab === 'Oral Surgery' && (
                                    <div>
                                        <h2 className='text-2xl text-cyan-400 font-bold mb-2'>Oral Surgery</h2>
                                        <p className='text-lg text-slate-400'>The Oral Surgery delves into surgical procedures performed in the oral and maxillofacial region to address various dental and facial concerns. It covers a broad spectrum of oral surgical treatments, including tooth extractions, dental implants, jaw surgeries, and treatment for oral diseases. Tooth extractions can range from routine removal of decayed or damaged teeth to complex surgical procedures involving impacted wisdom teeth. Dental implant procedures involve surgically placing artificial tooth roots into the jawbone to support prosthetic teeth or bridges. Jaw surgeries, known as orthognathic surgeries, are performed to correct functional and aesthetic issues related to the jaw, such as malocclusion or facial asymmetry.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurServices;