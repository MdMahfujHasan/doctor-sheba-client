import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                setSlidesPerView(1);
            }
            else {
                setSlidesPerView(2);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="mt-12">
            <SectionTitle title="What Our Patients Says" description="Experience our exceptional care through the words of our satisfied patients. Join our community and trust us with your dental health. Discover the difference in our compassionate and professional dental services." />
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                {testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="border border-slate-200 h-80 mt-6">
                            <div className="flex items-center p-6 gap-4">
                                <div className="avatar">
                                    <div className="w-14 rounded-full ring ring-pink-300 ring-offset-base-100 ring-offset-2">
                                        <img src={testimonial.img} alt={testimonial.patientName} />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-cyan-400">{testimonial.patientName}</h5>
                                    <p className="text-sm italic text-slate-400">{testimonial.designation}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm lg:text-base text-slate-400 text-justify px-4">{testimonial.message}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
