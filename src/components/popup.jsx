import React from "react";

const OverageCharges = ({ close }) => {
    const plansData = [
        { plan: "$199", spendsUpto: "$4,500", overage: "6.00%" },
        { plan: "$299", spendsUpto: "$10,000", overage: "4.00%" },
        { plan: "$499", spendsUpto: "$20,000", overage: "3.50%" },
        { plan: "$999", spendsUpto: "$50,000", overage: "2.00%" },
    ];

    return (
        <div className="relative max-w-5xl mx-auto bg-blue-50 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                    Overage Charges
                </h3>
                <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={close}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 6.293l2.646-2.647a.5.5 0 1 1 .708.708L8.707 7l2.647 2.646a.5.5 0 1 1-.708.708L8 7.707 5.354 10.354a.5.5 0 0 1-.708-.708L7.293 7 4.646 4.646z" />
                    </svg>
                </button>
            </div>

            <table className="min-w-full bg-white table-auto rounded-lg shadow-md">
                <thead>
                    <tr className="bg-blue-100 text-blue-600">
                        <th className="py-2 px-4 text-left font-medium">
                            Plans
                        </th>
                        <th className="py-2 px-4 text-left font-medium">
                            Spends Upto
                        </th>
                        <th className="py-2 px-4 text-left font-medium">
                            Overage
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {plansData.map((item, index) => (
                        <tr
                            key={index}
                            className={`${
                                index % 2 === 0 ? "bg-blue-50" : "bg-white"
                            } hover:bg-blue-100`}
                        >
                            <td className="py-3 px-4">{item.plan}</td>
                            <td className="py-3 px-4">{item.spendsUpto}</td>
                            <td className="py-3 px-4">{item.overage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OverageCharges;
