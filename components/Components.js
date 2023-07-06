

const Components = ({title, image, desc}) => {
    return (
        <div className="flex flex-col space-y-3 text-center mt-6 w-[90%] border
        rounded-lg">
            <h2 className="text-3xl font-bold mt-2">{title}</h2>
            <div className="text-sm">{desc}</div>
            <img src={image} className="rounded-md"/>
        </div>
    )
}

export default Components;