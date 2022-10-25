import ReactCountryFlag from 'react-country-flag';

const SpreadHours = (props) => {
    const { title, type } = props;

    return (
        <div className="py-12 px-6 bg-white rounded-2xl">
            <h1 className="pl-3 mt-4 mb-5 font-bold text-gray-800 dark:text-gray-100 text-2xl">Spread Management - <span className="font-normal">{title}</span></h1>
            <div className="flex text-sm items-center p-3 w-full">
                <p>Spread Type:</p>
                <p className="flex items-center"><span className="mr-2 ml-12">Fixed</span><input type="radio" name="spreadType"/></p>
                <p className="flex items-center mr-10"><span className="mr-2 ml-12">Percentage</span><input type="radio" name="spreadType"/></p>
            </div>
            <div class="flex-grow mx-3 my-6 border-t border-gray-200"></div>
            <table className="table-auto w-full mb-4">
                <thead className="text-xs font-bold text-gray-800 dark:text-gray-100">
                    <tr>
                        <th className="p-3 whitespace-nowrap">
                            <div className="font-semibold text-left">Currency</div>
                        </th>
                        <th className="p-3 whitespace-nowrap">
                            <div className="font-semibold text-center">Buy</div>
                        </th>
                        <th className="p-3 whitespace-nowrap">
                            <div className="font-semibold text-center">Sell</div>
                        </th>
                    </tr>
                </thead>
                <tbody className="text-sm dark:text-gray-100 transition-all duration-500 ease-in-out">
                    <tr>
                        <td className="py-2 whitespace-nowrap">
                            <span className="flex w-24 items-center justify-start pl-3">
                                <span
                                    className="text-sm text-gray-400 dark:text-gray-100 font-semibold"
                                >
                                    <ReactCountryFlag 
                                        countryCode="gb"
                                        style={{
                                            marginRight: '5px'
                                        }}
                                    />
                                </span>
                                <span
                                    className="text-sm text-gray-400 dark:text-gray-100 font-semibold"
                                >
                                    British Pounds (£GBP)
                                </span>
                            </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-center font-bold bg-gray-100 rounded py-1">4.00</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-center font-bold bg-gray-100 rounded py-1">4.00</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 whitespace-nowrap">
                            <span className="flex w-24 items-center justify-start pl-3">
                                <span
                                    className="text-sm text-gray-400 dark:text-gray-100 font-semibold"
                                >
                                    <ReactCountryFlag
                                        countryCode="eu"
                                        style={{
                                            marginRight: '5px'
                                        }}
                                    />
                                </span>
                                <span
                                    className="text-sm text-gray-400 dark:text-gray-100 font-semibold"
                                >
                                    Euros (€EUR)
                                </span>
                            </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-center font-bold bg-gray-100 rounded py-1">3.50</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-center font-bold bg-gray-100 rounded py-1">3.50</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default SpreadHours
