export default function Projects({date, title, desc, lang, link, linkDesc})
{
    return(
        <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
            <p className ="text-xs font-medium uppercase tracking-wide text-stone-500">{date}</p>
            <h3 className ="mt-2 text-lg font-semibold">{title}</h3>
            <p className ="mt-2 text-sm leading-relaxed text-stone-600">{desc}</p>
            <p className ="mt-4 text-sm text-stone-500">{lang}</p>
            <a href ={link}>{linkDesc}</a>
        </article>
    )
}