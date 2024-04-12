const Section = ({title, children}) => {

    return(
        <section className="flex items-center w-full container justify-between">
            <div className="uppercase">{title && <h4 className=" -rotate-90 tracking-wider w-max text-xs text-pretty">{title} - </h4>}</div>
            <div className="flex items-center">{children}</div>
        </section>
    )
}

export default Section