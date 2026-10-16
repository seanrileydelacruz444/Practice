export default function Experiences({date, title, where, desc})
{
    return(
        <li className="pl-6">
        <p class="text-sm text-stone-500">{date}</p>
          <h3 class="mt-1 font-semibold">{title}</h3>
          <p class="text-sm text-stone-600">{where}</p>
          <p class="mt-2 text-sm leading-relaxed text-stone-600">{desc}</p>
        </li>
    )
}