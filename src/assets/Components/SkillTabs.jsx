export default function SkillTabs({name, children})
{
    return(
        <div>
            <h3 className="text-sm font-medium text-stone-500">{name}</h3>

            <div className="mt-3 flex flex-wrap gap-2">
                {children}
            </div>
        </div>
    )
}