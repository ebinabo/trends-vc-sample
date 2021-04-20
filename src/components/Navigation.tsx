export default function Navigation() {
    return (
        <div className="border-t-8 border-amber-500">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <p className="text-2xl font-semibold text-white">
                        📈 Trends.vc
                    </p>
                    <div className="hidden xs:inline-block">
                        <a
                            href="https://www.producthunt.com/posts/trends-vc?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-trends-vc"
                            target="_blank"
                        >
                            <img
                                src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=230284&amp;theme=dark&amp;period=monthly"
                                alt="Trends.vc - Discover new markets and ideas | Product Hunt Embed"
                                className="w-52 h-14"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
