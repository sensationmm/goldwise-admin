import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../../components/atoms/Dropdown";
import BaseLayout from "../../BaseLayout/BaseLayout";
const tabs = [
  {
    name: "Digital Metals",
  },
  {
    name: "Coins",
  },
  {
    name: "Bars",
  },
  {
    name: "Accessories",
  },
];

const headers = [
  { name: "Product" },
  { name: "SKU Code", isSort: true },
  { name: "Name" },
  { name: "Available" },
  { name: "Fee Type" },
  { name: "Category" },
  { name: "British Pounds (£GBP)", logo: "/assets/images/United-Kingdom.svg" },
  { name: "Euros (€EUR)", logo: "/assets/images/European-Union.svg" },
  { name: "" },
];

const feeTypes = [
  {
    "idFeeType": 1,
    "nameFeeType": "Percentage",
  },
  {
    "idFeeType": 2,
    "nameFeeType": "Fixed",
  },
];
const ProductManagement = () => {
  const [state, setState] = useReducer(
    (preState, newState) => ({ ...preState, ...newState }),
    {
      tabSelected: "Digital Metals",
      products: [],
    }
  );
  const { tabSelected, products } = state;

  useEffect(() => {
    fetch("/mock-data/list-products.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setState({ products: data });
      });
  }, []);

  return (
    <BaseLayout title="Products">
      <div className="p-3 flex flex-row justify-between w-full space-x-4 ">
        <div className="w-full bg-white text-center text-gray-500 transition-all duration-500 ease-in-out px-8">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab) => (
              <li className="mr-2 text-sm font-medium">
                <Link
                  to=""
                  className={
                    tab.name === tabSelected
                      ? "inline-block text-gray-700 p-4 border-b-2 border-[#5db1b5] active"
                      : "inline-block text-gray-700 p-4 border-transparent"
                  }
                >
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => {}}
          type="button"
          className="duration-500 basis-48 text-white bg-[#404353] hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-xl border border-gray-200 text-sm font-medium px-6 py-3 hover:text-white focus:z-10 "
        >
          <i
            className="fa fa-plus-circle text-xl mr-2"
            aria-hidden="true"
          ></i>
          <span>Add Product</span>
        </button>
      </div>

      <div className="p-3">
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full">
            <thead className="text-xs font-bold text-gray-800 dark:text-gray-100">
              <tr>
                {headers.map((ele) => (
                  <th className="p-3 whitespace-nowrap">
                    <div className="text-sm font-semibold text-center flex justify-center items-center">
                      {ele.logo && (
                        <img
                          className="h-3 mr-1"
                          src={ele.logo}
                          alt=""
                        />
                      )}
                      {ele.name}
                      {ele.isSort && (
                        <i
                          class="ml-2 fa fa-caret-down text-[#52B2B6] text-xl"
                          aria-hidden="true"
                        ></i>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-600 dark:text-gray-100 transition-all duration-500 ease-in-out">
              <tr className="border-none bg-[#ebedef]">
                <td
                  colSpan={6}
                  className="p-2 whitespace-nowrap pb-4"
                />
                <td className="p-2 whitespace-nowrap pb-4">
                  <div className="flex justify-between px-8">
                    <span className="text-center text-gray-500 font-semibold">
                      Buy
                    </span>
                    <span className="text-center text-gray-500 font-semibold">
                      Sell
                    </span>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap pb-4">
                  <div className="flex justify-between px-10">
                    <span className="text-center text-gray-500 font-semibold">
                      Buy
                    </span>
                    <span className="text-center text-gray-500 font-semibold">
                      Sell
                    </span>
                  </div>
                </td>

                <td className="p-2 whitespace-nowrap pb-4" />
              </tr>
              {products.map((product, index) => {
                const feeType = feeTypes.find(
                  (type) => type.idFeeType === product.feeType
                );
                const coinGBP = product.currencies.find(
                  (currency) => currency.currencyCode === "GBP"
                );

                const coinEUR = product.currencies.find(
                  (currency) => currency.currencyCode === "EUR"
                );
                return (
                  <tr key={index} className="border-none">
                    <td className="p-2 whitespace-nowrap pb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={product.productImageURL}
                            width="40"
                            height="40"
                            alt=""
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap pb-4">
                      <div className="text-center text-gray-500 font-semibold">
                        {product.idProductSku}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap pb-4">
                      <div className="text-left text-gray-500 font-semibold">
                        {product.productName}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap pb-4">
                      <div className="text-center text-gray-500 font-semibold">
                        <label
                          for="checked-toggle"
                          className="inline-flex relative items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            checked={product.available}
                          />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#52B2B6]"></div>
                        </label>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap pb-4 flex justify-center">
                      <div className="text-center text-gray-500 font-semibold w-44">
                        <Dropdown
                          value={feeType.nameFeeType}
                          options={[
                            feeTypes.map((type) => ({
                              id: type.idFeeType,
                              name: type.nameFeeType,
                            })),
                          ]}
                        />
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap pb-4">
                      <div className="text-center text-gray-500 font-semibold">
                        <span className="text-[#52B2B6] bg-[#d6eaec] font-semibold rounded-xl px-4 py-1">
                          {product.productCategoryName}
                        </span>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap pb-4">
                      <div className="flex justify-between px-4">
                        <span className="text-[#404353] bg-[#e4e6e9] font-semibold rounded-lg px-4 py-1">
                          {coinGBP.feeBuy.toFixed(1)}
                        </span>
                        <span className="text-[#404353] bg-[#e4e6e9] font-semibold rounded-lg px-4 py-1">
                          {coinGBP.feeSell.toFixed(1)}
                        </span>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap pb-4">
                      <div className="flex justify-between px-4">
                        <span className="text-[#404353] bg-[#e4e6e9] font-semibold rounded-lg px-4 py-1">
                          {coinEUR.feeBuy.toFixed(1)}
                        </span>
                        <span className="text-[#404353] bg-[#e4e6e9] font-semibold rounded-lg px-4 py-1">
                          {coinGBP.feeSell.toFixed(1)}
                        </span>
                      </div>
                    </td>

                    <td className="flex p-2 whitespace-nowrap pb-4">
                      <div className="flex justify-evenly gap-x-2">
                        <div className="text-center flex justify-center items-center px-4 py-2 bg-gray-200 rounded-2xl cursor-pointer">
                          View
                          <i
                            className="fa fa-external-link cursor-pointer text-sm text-[#BFC0C5] ml-2"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="text-center text-white flex justify-center items-center px-4 py-2 bg-[#52B2B6] rounded-2xl cursor-pointer">
                          Edit
                          <i
                            className="fa fa-pencil cursor-pointer text-sm ml-2"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ProductManagement;
