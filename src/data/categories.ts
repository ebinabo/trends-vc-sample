import {
    AcademicCapIcon,
    BeakerIcon,
    BriefcaseIcon,
    CashIcon,
    ChartSquareBarIcon,
    ChatAlt2Icon,
    CubeIcon,
    CurrencyYenIcon,
    FilmIcon,
    LightningBoltIcon,
    OfficeBuildingIcon,
    RefreshIcon,
    SpeakerphoneIcon,
    TrendingUpIcon,
    UserGroupIcon,
    ViewGridAddIcon,
} from "@heroicons/react/outline"
import { SVGProps } from "react"

const categories: {
    label: string
    icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
}[] = [
    { label: "AI", icon: BeakerIcon },
    { label: "Crypto", icon: CurrencyYenIcon },
    { label: "Community", icon: UserGroupIcon },
    { label: "Data", icon: ChartSquareBarIcon },
    { label: "Education", icon: AcademicCapIcon },
    { label: "Investing", icon: TrendingUpIcon },
    { label: "Launch", icon: LightningBoltIcon },
    { label: "Management", icon: BriefcaseIcon },
    { label: "Marketing", icon: SpeakerphoneIcon },
    { label: "Media", icon: FilmIcon },
    { label: "Network Effects", icon: ChatAlt2Icon },
    { label: "Operations", icon: OfficeBuildingIcon },
    { label: "Product", icon: CubeIcon },
    { label: "Sales", icon: CashIcon },
    { label: "Services", icon: ViewGridAddIcon },
    { label: "Subscription", icon: RefreshIcon },
]

export default categories
