import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

interface CardContent {
    type: string;
    desc: string;
    fee: number;
    pages: {
        numPages: number;
        desc: string;
    };
    usersPerPage: {
        numUserPages: number;
        userDesc: string;
    };
    features: {
        essential: boolean;
        advanced: boolean;
        development: boolean;
        customizable: boolean;
        secureStorage: boolean;
        emailSupport: boolean;
        customerSupport: boolean;
        analytics: boolean;
        accountManagement: boolean;
        domain : boolean;
    };
}

interface CardTitleProps {
    feature: {
        page: string;
        userPage: string;
        essential: string;
        advanced: string;
        development: string;
        customizable: string;
        secureStorage: string;
        emailSupport: string;
        customerSupport: string;
        analytics: string;
        accountManagement: string;
        domain: string;
    };
}

function CardTitle({ feature }: CardTitleProps) {
    const featureEntries = Object.entries(feature);

    return (
        <div className="md:w-[18.75vw] w-[30.698vw]">
            {/* content head */}
            <div className="md:h-[14.21875vw] h-[57.674vw] p-[1vw] flex flex-col items-start md:justify-center justify-evenly md:text-start text-center">
                <p className="font-bold md:text-[1.25vw] text-[4.651vw]">Compare plans</p>
                <p className="text-[rgba(133,139,160,1)] md:text-[0.78125vw] text-[2.791vw]">
                    Choose your workspace plan according to your organisational plan
                </p>
            </div>
            {/* content head */}

            {/* properties content */}
            <div className="flex flex-col justify-center items-center">
                {featureEntries.map(([key, value]) => (
                    <div
                        className="md:h-[4.166vw] h-[28.837vw] border border-b-black w-full flex flex-col justify-center items-center"
                        key={key}
                    >
                        <p className="font-bold md:text-[0.9375vw] text-[4.186vw] md:text-start text-center">{value}</p>
                    </div>
                ))}
            </div>
            {/* properties content */}
        </div>
    );
}

function CardPricing({ type, desc, fee, pages, usersPerPage, features }: CardContent) {
    return (
        <div className="text-center md:w-[18.75vw] w-[30.698vw] group hover:shadow-xl transition-shadow duration-300">
            {/* content head */}
            <div className="md:h-[14.21875vw] h-[57.674vw] p-[1vw] flex flex-col justify-center items-center">
                <p className="font-bold md:text-[1.25vw] text-[3.488vw]">{type}</p>
                {fee === 0 ? (
                    <p className="font-bold text-[rgba(66,115,206,1)] md:text-[2.083vw] text-[3.488vw]">Free</p>
                ) : (
                    <p className="font-bold text-[rgba(66,115,206,1)] md:text-[0.89vw] text-[2.3vw]">
                        Rp{" "}
                        <span className="font-bold text-[rgba(66,115,206,1)] md:text-[2.083vw] text-[3.488vw]">
                            {fee.toLocaleString()}
                        </span>
                    </p>
                )}
                <p className="md:text-[0.729vw] text-[2.57vw]">{desc}</p>
                <button className="bg-[rgba(66,115,206,1)] text-white py-[0.5vw] px-[1vw] md:w-[15.83vw] md:h-fit w-[22.326vw] h-[13.333vw] rounded-md md:mt-[1vw] mt-[3vw] md:text-[0.833vw] text-[2.5vw] hover:scale-105 hover:shadow-lg transition-all duration-300">
                    Choose This Plan
                </button>
            </div>
            {/* content head */}

            {/* pricing content */}
            <div className="flex flex-col justify-center items-center">
                <div className="md:h-[4.166vw] h-[28.837vw] border border-b-black w-full flex flex-col justify-center items-center">
                    <p className="font-bold md:text-[0.8375vw] text-[3.256vw]">
                        {pages.numPages === -1 ? "Unlimited" : pages.numPages.toLocaleString()} Pages
                    </p>
                    <p className="text-gray-600 md:text-[0.9375vw] text-[1.8vw]">{pages.desc}</p>
                </div>
                <div className="md:h-[4.166vw] h-[28.837vw] border border-b-black w-full flex flex-col justify-center items-center">
                    <p className="font-bold md:text-[0.9375vw] text-[3.256vw]">
                        {usersPerPage.numUserPages === -1
                            ? "Unlimited"
                            : usersPerPage.numUserPages.toLocaleString()}{" "}
                        Pages
                    </p>
                    <p className="text-gray-600 md:text-[0.9375vw] text-[1.8vw]">{usersPerPage.userDesc}</p>
                </div>
                {Object.keys(features).map((featureKey) => (
                    <div
                        className="md:h-[4.166vw] h-[28.837vw] border border-b-black w-full flex justify-center items-center"
                        key={featureKey}
                    >
                        {(features[featureKey as keyof typeof features]) ? (
                            <CiCircleCheck className="text-green-600 md:text-[2vw] text-[6vw] hover:scale-110 transition-transform duration-300" />
                        ) : (
                            <CiCircleRemove className="text-red-600 md:text-[2vw] text-[6vw] hover:scale-110 transition-transform duration-300" />
                        )}
                    </div>
                ))}
            </div>
            {/* pricing content */}
        </div>
    );
}

export default function Pricing1() {
    const plans: CardContent[] = [
        {
            type: "Basic",
            desc: "Lifetime",
            fee: 0,
            pages: {
                numPages: 20,
                desc: "",
            },
            usersPerPage: {
                numUserPages: 5,
                userDesc: "",
            },
            features: {
                essential: true,
                advanced: true,
                development: true,
                customizable: false,
                secureStorage: false,
                emailSupport: false,
                customerSupport: false,
                analytics: false,
                accountManagement: true,
                domain: true
            },
        },
        {
            type: "Standard",
            desc: "per-Bulan",
            fee: 500000,
            pages: {
                numPages: 600,
                desc: "Pages Add-ons on Demand",
            },
            usersPerPage: {
                numUserPages: 50,
                userDesc: "",
            },
            features: {
                essential: true,
                advanced: true,
                development: true,
                customizable: true,
                secureStorage: true,
                emailSupport: true,
                customerSupport: false,
                analytics: false,
                accountManagement: true,
                domain: false,
            },
        },
        {
            type: "Advanced",
            desc: "per-Bulan",
            fee: 1000000,
            pages: {
                numPages: -1,
                desc: "Pages Add-ons on Demand",
            },
            usersPerPage: {
                numUserPages: -1,
                userDesc: "Pages Add-ons on Demand",
            },
            features: {
                essential: true,
                advanced: true,
                development: true,
                customizable: true,
                secureStorage: true,
                emailSupport: true,
                customerSupport: true,
                analytics: true,
                accountManagement: true,
                domain: false
            },
        },
    ];

    const featureData: CardTitleProps["feature"] = {
        page: "Basic",
        userPage: "User Page Feature",
        essential: "Essential Feature",
        advanced: "Advanced Feature",
        development: "Development Tools",
        customizable: "Customizable Options",
        secureStorage: "Secure Storage",
        emailSupport: "Email Support",
        customerSupport: "24/7 Customer Support",
        analytics: "Analytics Dashboard",
        accountManagement: "Account Management Tools",
        domain: "Provided Domain "
        

    };

    return (
        <div className="w-full py-[2vw] aspect-[430/1284] md:aspect-[1920/1518]">
            {/* title */}
            <div className="text-center">
                <p className="md:text-[1.25vw] text-[5.581vw] font-bold text-[rgba(66,115,206,1)]">PRICING</p>
                <p className="font-bold text-black md:text-[1.875vw] text-[8.372vw] md:px-0 px-[5vw]">
                    We provide great and affordable pricing plans
                </p>
            </div>
            {/* title */}

            {/* content */}
            <div className="overflow-auto scroll-hide">
                <div className="flex justify-center mt-[2vw] ml-[20vw] md:ml-0">
                    <CardTitle feature={featureData} />
                    {plans.map((plan, index) => (
                        <CardPricing
                            key={index}
                            type={plan.type}
                            desc={plan.desc}
                            fee={plan.fee}
                            pages={plan.pages}
                            usersPerPage={plan.usersPerPage}
                            features={plan.features}
                        />
                    ))}
                </div>
            </div>
            {/* content */}
        </div>
    );
}
