import { FiArrowRight } from "react-icons/fi";
import { FaCheck, FaTimes } from "react-icons/fa";

interface CardProps {
    feature: {
        title: string;
        time: string;
        price: string;
        features: {
            name: string;
            available: boolean;
        }[];
        isPopular?: boolean;
    };
}

function Pricing3Card({ feature }: CardProps) {
    return (
        <div className="md:w-[21.8125vw] w-[80.465vw] bg-white rounded-lg shadow-md md:p-8 p-[4vw] md:my-0 my-[2vw]">
            <h2 className="md:text-[0.9375vw] text-[3.467vw] font-bold text-[var(--color-primary)] md:mb-2 mb-[2vw]">{feature.title}</h2>
            <div className="text-[#2B2F48]">
                <div className="flex items-baseline space-x-1">
                    {feature.price !== "Free" && <span className="md:text-[0.875vw] text-[4.667vw]">Rp</span>}
                    <span className="md:text-[2.8125vw] text-[8.667vw] font-bold">{feature.price}</span>
                </div>
                <p className="md:text-[0.875vw] text-[2.888vw] text-gray-500 md:my-0 my-[2vw]">build {feature.time}</p>
            </div>
            <ul className="mt-6 mb-6 md:space-y-2 space-y-[3vw] md:text-[0.875vw] text-[3.274vw] text-[#2B2F48]">
                {feature.features.map((item, index) => (
                    <li key={index} className="flex items-center md:gap-x-[0.3vw] gap-x-[2vw]">
                        {item.available ? (
                            <FaCheck className="text-green-600" />

                        ) : (
                            <FaTimes className="text-gray-400" />
                        )}
                        {item.name}
                    </li>
                ))}
            </ul>
            <button className="flex items-center justify-center w-full py-3 bg-[#F3F7FE] text-[var(--color-primary)] font-medium rounded-lg hover:bg-[#E0ECFD] transition duration-300 ease-in-out md:text-[0.885vw] text-[3.274vw]">
                Start Free Trial
                <FiArrowRight className="ml-2" />
            </button>
            <p className="mt-4 text-center md:text-[0.8125vw] text-[2.888vw] text-gray-500">No credit card required</p>
        </div>
    );
}

export default function Pricing3() {
    const data = [
        {
            title: "Free",
            time: "monthly",
            price: "Free",
            isPopular: false,
            features: [
                { name: "Commercial License", available: true },
                { name: "100+ HTML UI Elements", available: true },
                { name: "01 Domain Support", available: true },
                { name: "6 Month Premium", available: false },
                { name: "Lifetime Updates", available: false }
            ],
        },
        {
            title: "Starter",
            time: "monthly",
            price: "500.000",
            isPopular: false,
            features: [
                { name: "Commercial License", available: true },
                { name: "100+ HTML UI Elements", available: true },
                { name: "01 Domain Support", available: true },
                { name: "6 Month Premium", available: true },
                { name: "Lifetime Updates", available: false },
            ],
        },
        {
            title: "Business",
            time: "monthly",
            price: "5.000.000",
            isPopular: true,
            features: [
                { name: "Commercial License", available: true },
                { name: "100+ HTML UI Elements", available: true },
                { name: "01 Domain Support", available: true },
                { name: "6 Month Premium", available: true },
                { name: "Lifetime Updates", available: true }
            ],
        },
    ];

    return (
        <div className="w-full p-8 aspect-[430/1684] md:aspect-[1920/1080]">
            {/* Title */}
            <div className="text-center mb-8 flex flex-col justify-center items-center">
                <p className="md:text-[1.667vw] text-[6.147vw] font-bold">Pricing & Plans</p>
                <p className="md:text-[0.9895vw] text-[3.244vw] md:w-[36.8125vw] w-full">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
            {/* Plan Cards */}
            <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-x-[1.042vw]">
                {data.map((plan, index) => (
                    <Pricing3Card key={index} feature={plan} />
                ))}
            </div>
        </div>
    );
}
