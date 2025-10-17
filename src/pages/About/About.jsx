import image from '../../assets/about.png';

const About = () => {
    return (
        <div className='container mx-auto lg:px-[100px] md:px-[50px] px-[20px] py-[50px] flex items-center justify-between'>
            <div>
                <img className='h-[500px]' src={image} alt="" />
            </div>
            <div className='w-[50%]'>

            </div>
        </div>
    )
}

export default About;