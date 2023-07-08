import {useRouter} from "next/router";

const Components = ({title, image, desc, link}) => {

    const router = useRouter();

    const handleRedirect = () => {
        router.push(`${link}`)
    }

    return (
        <div className="flex flex-col space-y-3 text-center mt-6 border
        rounded-lg hover:cursor-pointer md:w-[500px]" onClick={handleRedirect}>
            <h2 className="text-3xl font-bold mt-2">{title}</h2>
            <div className="text-sm">{desc}</div>
            <img src={image} className="rounded-md md:max-h-[250px]"/>
        </div>
    )
}

export default Components;