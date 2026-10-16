export default function AboutPortions({name, desc}){
    return(
        <div>
            <dt className ="text-sm text-stone-500">{name}</dt>
            <dd className ="mt-1 font-medium">{desc}</dd>
        </div>
    )
}