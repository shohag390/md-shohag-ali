import { LuDatabaseBackup, LuMonitorSmartphone } from 'react-icons/lu';
import { MdWeb } from 'react-icons/md';

const Services = () => {

    const services = [
        {
            id: 1,
            title: "Responsive Website",
            description: "Modern, mobile-friendly and SEO-optimized website designs tailored to your brand.",
            icon: <LuMonitorSmartphone />
        },
        {
            id: 2,
            title: "Frontend Development",
            description: "Interactive and performant UI development using HTML, CSS, JavaScript, React.",
            icon: <MdWeb />
        },
        {
            id: 3,
            title: "Backend Development",
            description: "Scalable server-side development with Node.js, Express, MongoDB, and secure APIs.",
            icon: <LuDatabaseBackup />
        },
    ];

    return (
        <section className="scroll-mt-[11vh] bg-[#0f0715] lg:px-[120px] md:px-[50px] px-[20px] lg:py-[80px]" id="services">
            <div className="text-center pb-[40px]">
                <h2 className="font-medium text-[40px] bg-gradient-to-r from-[#8750f7] to-[#ffffff] text-transparent bg-clip-text capitalize leading-[55px]">My Services</h2>
                <p className="leading-relaxed text-gray-400 text-center">
                    I offer a wide range of web development services <br /> to bring your ideas to life.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-[30px] pb-[45px]">
                {services.map(service => (
                    <div key={service.id} className="border-2 border-[#341d5b] rounded-xl bg-[#160b23] duration-500 hover:border-[#8750f7] p-[35px] shadow-[50px_60px_200px_-80px_#8750f7]">
                        <div className="text-[45px] mb-4 text-[#ffff]">
                            {service.icon}
                        </div>
                        <h3 className="text-[23px] font-medium pb-[8px] bg-gradient-to-r from-[#8750f7] to-[#ffffff] text-transparent bg-clip-text">{service.title}</h3>
                        <p className="leading-relaxed text-gray-400 text-justify">{service.description}</p>
                    </div>
                ))}
            </div>

            <a className='flex items-center justify-center' href="#contact">
                <button className='py-[10px] px-[35px] bg-[#341d5b] text-[#fff] hover:bg-[#8750f7] rounded-md btn duration-500 uppercase'>
                    Contact Me
                </button>
            </a>

        </section>
    );
};

export default Services;