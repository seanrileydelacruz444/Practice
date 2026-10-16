export default function Contacts({name, link, desc}){
    return(
        <li>
            <span className="inline-block w-24 text-sm text-stone-500">{name}</span>
            <a href={link} className="font-medium hover:underline">{desc}</a>
        </li>
    )
}