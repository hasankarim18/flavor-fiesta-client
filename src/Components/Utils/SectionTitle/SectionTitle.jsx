


const SectionTitle = ({heading, subHeading, className=""}) => {
    return (
        <div className={`my-8 text-center md:w-4/12 mx-auto  ${className}`} >
            <p className="text-yellow-500 mb-2 capitalize " >---{subHeading}---</p>
            <h3 className="text-4xl uppercase py-4 border-y-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;