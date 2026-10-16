export default function Footer({desc}){
    return(
        <footer className="border-t border-stone-200">
            <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-stone-500">
                {desc}
            </div>
        </footer>
    )
}