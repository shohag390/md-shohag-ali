import {
    FaMobileAlt, FaLaptopCode, FaBug, FaServer, FaRocket
} from "react-icons/fa";
import {
    SiReact
} from "react-icons/si";
import {
    MdDesignServices, MdSpeed, MdWeb
} from "react-icons/md";
import { Link } from "react-router";

const servicesItem = [
    {
        id: "01",
        title: "Responsive Web Design",
        subtitle: "Creating mobile-friendly, pixel-perfect layouts using HTML, CSS, and modern frameworks.",
        icon: <FaMobileAlt />,
        offerings: [
            "Mobile-first UI",
            "Cross-browser compatibility",
            "Fluid layouts",
            "Modern CSS frameworks",
            "Accessible designs"
        ]
    },
    {
        id: "02",
        title: "Single Page Applications (SPA)",
        subtitle: "Building fast and dynamic SPAs using React and other modern frameworks.",
        icon: <SiReact />,
        offerings: [
            "React-based architecture",
            "Routing and navigation",
            "State management",
            "Dynamic rendering",
            "Reusable components"
        ]
    },
    {
        id: "03",
        title: "UI/UX Implementation",
        subtitle: "Converting Figma/PSD/Sketch designs into functional and interactive web interfaces.",
        icon: <MdDesignServices />,
        offerings: [
            "Pixel-perfect conversion",
            "Responsive layouts",
            "Micro-interactions",
            "Modern animations",
            "User-focused UI"
        ]
    },
    {
        id: "04",
        title: "Performance Optimization",
        subtitle: "Improving website speed, reducing bundle size, and optimizing assets.",
        icon: <MdSpeed />,
        offerings: [
            "Lazy loading",
            "Code splitting",
            "Image compression",
            "Minified assets",
            "Improved Core Web Vitals"
        ]
    },
    {
        id: "05",
        title: "API Integration",
        subtitle: "Connecting frontend apps with REST or GraphQL APIs securely.",
        icon: <FaServer />,
        offerings: [
            "REST API setup",
            "GraphQL support",
            "Data handling",
            "Error management",
            "Secure authentication"
        ]
    },
    {
        id: "06",
        title: "Landing Page Development",
        subtitle: "Developing SEO-friendly and conversion-optimized landing pages.",
        icon: <MdWeb />,
        offerings: [
            "Single-page layout",
            "High conversion design",
            "Call-to-action focus",
            "SEO structure",
            "A/B testing ready"
        ]
    }
];

const Services = () => {
    return (
        <div className="container mx-auto lg:px-[100px] md:px-[50px] px-[20px] services pt-[50px]">
            <div>
                <div className="flex items-center gap-[10px] pb-[15px]">
                    <div className="w-[12px] h-[12px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full"></div>
                    <p className="text-[#ffffffd5] font-medium">
                        My Specialization
                    </p>
                </div>
                <h2 className="text-[35px] font-bold leading-[45px] text-[#ffffffd5] pb-[30px]">
                    Innovative best design and <br /><span className="bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] text-transparent bg-clip-text">development services</span>
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-[20px]">
                {
                    servicesItem?.map((item) => (
                        <div key={item?.id} className="bg-[#FFFFFF0F] p-[20px] rounded-xl border-[1px] border-[#ffffff1d]">
                            {/* Card Header */}
                            <div className="flex items-center justify-between">
                                <div className="h-[50px] w-[50px] bg-[#6bfdd822] text-[#F0FF6C] flex items-center justify-center text-[25px] rounded-xl">
                                    {item?.icon}
                                </div>
                                <h1 class="text-[35px] font-bold text-transparent stroke-color opacity-35">
                                    {item?.id}
                                </h1>
                            </div>

                            {/* cart body */}
                            <div className="pt-[20px]">
                                <h4 className="font-bold text-[#ffffffd5] text-[20px]">
                                    {
                                        item?.title
                                    }
                                </h4>
                                <p className="text-[#9aa3a1] text-justify pt-[10px] pb-[20px]">
                                    {
                                        item?.subtitle
                                    }
                                </p>
                                {/* Offerings List */}
                                <ul className="space-y-2">
                                    {item.offerings.map((offer, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2 text-[#ffffffd5]"
                                        >
                                            <span className="w-2 h-2 bg-[#ffffffd5] rounded-full flex-shrink-0"></span>
                                            <span>{offer}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))
                }
            </div>
            <div className="flex items-center justify-center pt-[40px] pb-[25px]">
                <Link to="services" className="py-[14px] px-[40px] bg-gradient-to-r from-[#6BFDD9] to-[#F0FF6C] rounded-full flex items-center justify-center font-medium duration-500 hover:from-[#F0FF6C] hover:to-[#6BFDD9]">
                    View All Services
                </Link>
            </div>
        </div >
    )
}

export default Services;