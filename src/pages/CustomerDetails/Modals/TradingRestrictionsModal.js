import React, {useLayoutEffect, useState} from "react";

const TradingRestrictionsModal = ({hidePopup, currentTradingRestrictions, saveTradingRestrictions}) => {
    const [restrictDeposit, setRestrictDeposit] = useState(false)
    const [restrictBuy, setRestrictBuy] = useState(false)
    const [restrictSell, setRestrictSell] = useState(false)
    const [restrictConvert, setRestrictConvert] = useState(false)
    const [restrictWithdraw, setRestrictWithdraw] = useState(false)
    const [reason, setReason] = useState('')

    useLayoutEffect(() => {
        setRestrictDeposit(currentTradingRestrictions.restrictDeposit)
        setRestrictBuy(currentTradingRestrictions.restrictBuy)
        setRestrictSell(currentTradingRestrictions.restrictSell)
        setRestrictConvert(currentTradingRestrictions.restrictConvert)
        setRestrictWithdraw(currentTradingRestrictions.restrictWithdraw)
    }, [currentTradingRestrictions])

    return (<>
            <div className='modal-content'>
                <div className="switcher-container pb-3 pt-3 switcher">
                    <p className="text-sm text-gray-600 dark:text-gray-100 font-medium">Restrict Deposit</p>
                    <label htmlFor="default-toggle"
                           className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                               value={restrictDeposit}
                               checked={restrictDeposit}
                               onChange={() => setRestrictDeposit(!restrictDeposit)}
                               id="default-toggle"
                               className="sr-only peer"/>
                        <div
                            className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 dark:border-gray-600 peer-checked:bg-[#52b2b6]"/>
                    </label>
                </div>
                <hr/>
                <div className="switcher-container pb-3 pt-3  switcher">
                    <p className="text-sm text-gray-600 dark:text-gray-100 font-medium">Restrict Buy</p>
                    <label htmlFor="can-buy-toggle"
                           className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                               value={restrictBuy}
                               checked={restrictBuy}
                               onChange={() => setRestrictBuy(!restrictBuy)}
                               id="can-buy-toggle"
                               className="sr-only peer"/>
                        <div
                            className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 dark:border-gray-600 peer-checked:bg-[#52b2b6]"/>
                    </label>
                </div>
                <hr/>
                <div className="switcher-container pb-3 pt-3  switcher">
                    <p className="text-sm text-gray-600 dark:text-gray-100 font-medium">Restrict Sell</p>
                    <label htmlFor="can-sell-toggle"
                           className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                               value={restrictSell}
                               checked={restrictSell}
                               onChange={() => setRestrictSell(!restrictSell)}
                               id="can-sell-toggle"
                               className="sr-only peer"/>
                        <div
                            className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 dark:border-gray-600 peer-checked:bg-[#52b2b6]"/>
                    </label>
                </div>
                <hr/>
                <div className="switcher-container pb-3 pt-3  switcher">
                    <p className="text-sm text-gray-600 dark:text-gray-100 font-medium">Restrict Convert</p>
                    <label htmlFor="can-convert-toggle"
                           className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                               value={restrictConvert}
                               checked={restrictConvert}
                               onChange={() => setRestrictConvert(!restrictConvert)}
                               id="can-convert-toggle"
                               className="sr-only peer"/>
                        <div
                            className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 dark:border-gray-600 peer-checked:bg-[#52b2b6]"/>
                    </label>
                </div>
                <hr/>
                <div className="switcher-container pb-3 pt-3  switcher">
                    <p className="text-sm text-gray-600 dark:text-gray-100 font-medium">Restrict Withdraw</p>
                    <label htmlFor="can-withdraw-toggle"
                           className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                               value={restrictWithdraw}
                               checked={restrictWithdraw}
                               onChange={() => setRestrictWithdraw(!restrictWithdraw)}
                               id="can-withdraw-toggle"
                               className="sr-only peer"/>
                        <div
                            className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 dark:border-gray-600 peer-checked:bg-[#52b2b6]"/>
                    </label>
                </div>
                <hr/>

                <div className="pt-3">
                    <div className="content-text">
                        <p className="text-sm text-gray-600 dark:text-gray-100 font-medium">Reason</p>
                        <p className="text-gray-300 text-xs dark:text-gray-100 font-medium">Required</p>
                    </div>
                    <textarea value={reason}
                              onChange={(value) => setReason(value.target.value)}
                              className="mt-2 mb-7" style={{height: '100px'}}/>
                </div>
            </div>
            <div className='modal-buttons'>
                <div className='modal-button'>
                    <button onClick={() => hidePopup()}
                            className='bg-[#DFDFE2FF] hover:opacity-80 text-grey text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Cancel
                    </button>
                </div>
                <div className='modal-button'>
                    <button onClick={() => saveTradingRestrictions(
                        restrictDeposit,
                        restrictBuy,
                        restrictSell,
                        restrictConvert,
                        restrictWithdraw,
                        reason
                    )} disabled={reason === ''}
                            className={'bg-[#52b2b6] hover:opacity-80 text-xs text-center font-bold py-3 px-4 rounded w-full mb-2 disabled:opacity-100 disabled:bg-[#DFDFE2FF] text-white'}>Confirm
                    </button>
                </div>
            </div>
        </>
    )
}

TradingRestrictionsModal.propTypes = {}

TradingRestrictionsModal.defaultProps = {}

export default TradingRestrictionsModal
