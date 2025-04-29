Reconciliation V1.3.3


1 – Setup

1.1 Trading Entities
1.1.1) There are two GoldWise trading entities 
GHL – Trading entity for UK based customers
GEUAB – Trading entity for European customers . Not in scope for launch. Will require in 9 months.
Include the capability to add GEUAB in reconciliations in the future.

Trading Fees
The trading entity will decide which trading fees and tax we need to move money to as part of the reconciliation process described later in this document.
1.1.2) The correct trading entity to use is determined by the customer's current country of permanent residence (‘residence’) at the time the order was executed. Note: that EEA residents will be customers of GEUAB and UK residents will be customers of GHL.

1.2 GW Operational E-Wallets
GW will have a number of operational e-wallets.
Wallets are manually created in RailsR and the RailsR reference is then stored in a database table for reference when generating transactions.

An e-wallet will consist of a wallet in the database and a corresponding Railsr ledger (E-Wallet) in which money can be paid into and out of using Railsr.
Each E-Wallet will need its own transaction history captured in the database similar to how we do for customers for all money movements including transfers, receipts and withdrawals.
1.2.1.1. Internal Operational EWallets – bank details to be obtained from railsr for these internal operational Railsr eWallets
1.	GHL | Recon | GBP -- this Railsr eWallet is used to collect and make payments for GBP GHL Recon payments – Account Number details? To be obtained from railsr.
2.	GHL | Recon | EUR -- this Railsr eWallet is used to collect and make payments for GBP GHL Recon payments – Account Number details? To be obtained from railsr.
3.	GHL | Revenue | GBP – this Railsr eWallet is used to collect and make payments for GBP GHL Revenue payments -- Account number details? To be obtained from railsr. 
4.	GHL | Revenue | EUR -- this Railsr eWallet is used to collect and make payments for EUR GHL Revenue payments -- Account number details? To be obtained from railsr. 
5.	GHL | HMRC | GBP  -- this Railsr eWallet is used to collect and make payments for GHL UK Tax payments – Account Number details? To be obtained from railsr.
6.	GHL | HMRC | EUR -- this Railsr eWallet is used to collect and make payments for EUR UK Tax payments -- Account number details? To be obtained from railsr.
7.	GEUAB | Revenue | EUR -- this Railsr eWallet is used to collect and make payments for EUR GEUAB Revenue payments -- Account number details? To be obtained from railsr. 
8.	GEUAB | PVM | EUR  -- this Railsr eWallet is used to collect and make payments for EUR Lithuania PVM payments – Account number details? To be obtained from railsr.

TO CONFIRM WHY HMRC AND PVM NOT TAX? LOOKING AT THE RECON REPORTS IT MENTIONED TAX TO KEEP THINGS SIMPLER

1.2.1 Recon E-Wallets
There will be two default Recon e-wallets shared by both trading entities for reconciliation:
•	GHL | Recon | GBP - Recon GBP (formerly clearing) - used for all GBP reconciliations
•	GHL | Recon | EUR Recon EUR (formerly clearing) - used for all EUR reconciliations
These Recon E-Wallets belong to GHL.

1.2.2 Revenue E-Wallets
We need to have a wallet for each unique company/currency combination. I.e. GHL/GBP, GHL/EUR, GEUAB/EUR etc.


Initially, for collecting revenue from fees, spreads and storage charges we will have:
•	GHL | Revenue | GBP  - Revenue GHL GBP – fees + spreads from GBP trades made by GHL (Fees + spreads) and GEUAB (spreads) customers
•	GHL | Revenue | EUR  - Revenue GHL EUR – fees + spreads from EUR trades made by GHL (Fees + spreads) and GEUAB (spreads) customers
•	GEUAB | Revenue | EUR - Revenue GEUAB EUR – fees from EUR trades made by GEUAB customers only
1.2.3 Tax E-Wallets
For collecting tax from any transactions, we will have:
•	GHL | HMRC | GBP  - Tax GHL GBP – taxes from GBP trades made by GHL customers only
•	GHL | HMRC | EUR  - Tax GHL EUR – taxes from EUR trades made by GHL customers only
•	GEUAB | PVM | EUR  - Tax GEUAB EUR – taxes from EUR trades made by GEUAB customers only


1.2.4 StoneX E-Wallets
There will not be Stonex wallets.
Instead, we will create a solution to make the payment once the funds are available directly from the Recon account out to the Stonex beneficiary.
•	1.2.4.1) GHL would like to pay StoneX directly from the Recon Wallet, in this case we do not need an additional E-Wallet for StoneX.
I.	However, to make this payment instead the technical team are investigating RailsR scheduled payments. So, the payment will be made as soon as the money is available directly from Recon using a payment_credit_date:
	https://docs.railsr.com/docs/api/0b8d5e7edb138-create-send-money-transaction
	 
II.	If this is not possible a scheduled task will run to make the payment at the settlement time (2pm for Stonex) on the required settlement date as long as the money is available.
1.2.4.2) In the initial build we are only catering for one partner StoneX and it is hard coded
1.2.4.3) When the payment is made to Stonex via RailsR we will capture the transaction and its 	status. See later in spec.

 
1.2.5 Metals (weight) Count-Ledger for Recon (additionally see 3.2.1.2  Metals AuAs (Assets under Administration) & Movements between StoneX & Brinks )

Background Information
We need to account for the Metal weights – INs/OUTs and Total (running) Balance that we have with StoneX versus the count we have on the GHL platform. 
There are 3 stages for metals weight - Recon, metals movements into/out of StoneX, Brinks London & Zurich and metals assets under administration (AuA)
1.	Daily Recon of metals weights and count from Buys & sell trades that are STP confirmed, traded at StoneX - split/classified by customer chosen vault (London, Zurich), by product and by GW entity customers (GHL & GEUAB)
	
2.	Metals Ledger – for – for Daily and periodic metals movements and running balance, at StoneX, Brinks London, Brinks Zurich, by product and by GW entity customers (GHL & GEUAB)
	 
3.	Metal Administration AuA – a running total of metal weigh balances by StoneX (vault London, vault Zurich) + Brinks London + Brinks Zurich, product and by GW entity customers
 

Clarification - background:
•	GHL is the only entity that has an account/relationship with StoneX for trading and Brinks for vaulting.
•	When a GEUAB or GHL customer buy or sell metal, their metal is held in/withdrawn from, a ‘fractional’ metal format to reported DP, ‘Account’ with StoneX.
•	Periodically, GHL requests StoneX to Allocate the ‘fractional’ metal from that ‘Account’ in to 1kg bars of gold, silver, platinum or palladium.
•	These allocated metals bars are then transferred to the account of GHL at Brinks. This is an inter-vault (within the same vault) movement because StoneX also uses Brinks as their vaulting partner for their ‘fractional’ metal amounts that they sell/hold.

Requirement:
1.2.5.1) Daily (Metals) Recon – for metals weight accounting for respective customer trades (for daily settlement), source of the data is from ’Report Design’ tab from the spreadsheet, below is the totals and splits from the day, that needs to be settled with StoneX.
 

What does this mean:
a)	GHL will have an ‘Account’ with fractional weights of metal from all the customer trades at StoneX - i.e. a StoneX metals ‘Account’ = ‘Metals Ledger' that is backed up by StoneX’s actual bars within the Brinks vault. 
Hence the weight metal balance/s (gold, silver, platinum and palladium) traded (bought/sold) daily will need to be captured daily to ensure that the balance in the StoneX Account is the same as that according to GW’s recordkeeping/platform. 

b)	1.2.5.2) Metals weights from ‘Saved/Submitted’ Daily Recon batches (Daily Recon ‘Report Design’ screen) need to be written to metal vault ledgers. 
		 
1.2.5.2 Metal Payments Example
As an example, if 5 Buy trades for Digital Gold were selected from the executed trades grid with:
 
These payments effectively write ledger entries into the correct Stonex Vault when the reconciliation is saved.

-	The customer vault of London 
-	entity of GHL and no sells, 
-	with weights totaling 7.0 t/oz. 
-	When saving, write a ledger entry for Digitial Gold Product in the Stonex Vault London GHL metals ledger with the Recon reference and settlement date and time of 5pm UK
-	If a further 2 trades totaling 1.9 t/oz were selected with a vault of Zurich GHL entity, then this ledger would also get its own entry for Digitial Gold on the settlement date and time.
-	So, in effect each number and column become an entry in that rows ledger for the amount bought or sold in that reconciliation batch.

These entries in turn feeds Section 1 of Tom’s MSExcel ‘Metals Administration’ tab) (Section 5 of this document)
The Metals Adminstran tab shows the NET - sum of INs (Buys trades) and OUTs (Sell trades), balance to be paid to/received from StoneX, by entity, by product, by designated vault in London (customer selected) and vaulted at Zurich (customer selected) held at StoneX – GHL's StoneX’s account. It will do this by querying and summing these metal vault ledgers, so they need to be stored in a way to power this later section efficiently.
The initial entries are generated when saving a reconciliation report. 


-	
Each metal vault ledger will be split by:
Trading Entity, 
Product (ie Digital Gold / Silver etc), 
Vault Location
Partner (If the ledger is for Stonex from a reconciliation entry or Brinks after a metals movement)

Metal Vault Ledgers Examples:
GHL | Digitial Gold | London | Stonex
GHL | Digitial Gold | Zurich | Stonex
GHL | Digitial Gold | London | Brinks
GHL | Digitial Gold | Zurich | Brinks

Fields include: Date, Settlement Date, Product, Vault, Weight (debit or credit), Description

See section 5 - further requirements covering:
1.	Daily recon summary 
2. 	Metals Ledger
3.	AuAs

1.3 Other E-Wallet requirements
1.3.1) Each of the e-wallets will have an internal ledger similar to GW transaction table to track internal money movements, receipts and withdrawals in the database.
When moving from Recon to another wallet (or back) there will be a double-sided entry. Both the source and destination ledger will have an entry for the move (ie credit one and debit the other or vice versa) so we can track the movement and calculate a running balance.
1.3.2) For each transaction we will also move the money in RailsR using a transfer. We will need to capture the linked transaction Id from RailsR against each transaction we capture in the database
The 3 main types of transaction in the e-wallets are:
1.3.2.1) Payment out (e.g when paying Stonex or GHL wise account)
1.3.2.2) Internal ledger transfers (e.g when moving money from Recon to Tax E-wallets)
1.3.2.3) Deposit in (e.g when Stonex pay the amount owed for more sells than buy 		scenarios)
1.3.3) This will generate a ledger entry automatically in the RailsR also.
1.3.4) After saving the reconciliation report, it is highly likely we will need a payment status on transfers which shows if we have initiated the payment yet. These are an internal way of tracking what is happening including:
-	1) Awaiting Funds – This is where there are not enough funds yet to cover the total payment
-	2) Pending Settlement Date – This is where we have funds, but a payment/transfer will not be issued until the settlement date
-	3) Requested – This is where we have issued the request to RailsR
-	4) Completed – The payment or internal transfer has been accepted by RailsR
-	5) Failed – This is where we requested it via RailsR and it was either declined / rejected
Note once a payment is sent using the send money function in RailsR it will go through several status’ that need to be tracked via webhooks including: 
-	RailsR “Pending” – we sent it to RailsR and they have it 
-	RailsR “Accepted” – they have successfully issued to send the money to the recipient's account 
-	RailsR “Declined / Rejected” – The payment was rejected either by the recipient or by firewall rules
1.3.5) Inter-ledger transfers with RailsR are immediate, and either are accepted or not. This will be used when moving money between E-Wallets in the same GW RailsR account. These will also have a RailsR transactionID as described above.

1.4 Treatment of Spreads
There is no spread income for GEUAB and all other subsidiaries of GHL.  GHL keeps all spread income for itself.
GEUAB customers pass trades to GEUAB, who in turn pass the whole trade and amount (i.e. trade request and respective total/all eMoney for that trade) to GHL including Product Amount, Spread, Tax and Fees.
GHL, carries out the trade with StoneX and the eMoney is transferred to GHL’s Recon wallet
EOD – GHL pays from the Recon wallet, into GEUAB’s Tax wallet and GEUAB’s Revenue wallet, GHL pays directly to StoneX the cost of the trades made by GEUAB customers from the Recon wallet


1.5 Operational payment bank accounts details

As part of the reconciliation process, we will need to make payments out of the system to move the money in real life. This is known as withdrawal transactions in RailsR.
1.5.1.1) Before we can pay money out, we need to create Beneficiaries (Who we are paying) and Beneficiary Accounts (RailsR terminology for the destination bank account). These will be attached to the GW End-User in Railsr. 
1.5.1.2) These will be manually added as they should not change very often.
1.5.1.3) They will also be linked in the DB for the purpose of knowing which accounts to send money to when withdrawing money from these operational wallets. 
This will also help us validate anyone trying to send money outside of the approved accounts.


1.5.1.4 The beneficiaries include:

List of internal Railsr Operational eWallets  & external Beneficiary bank accounts:
1.5.4.2. Beneficiaries for Payments Out - External Bank Accounts:
1.	StoneX | GBP -- used to make payments for GBP metals trades.  Bank: Bank of America N.A., Account name: StoneX Financial Ltd, SWIFT/BIC: BOFAGB22, IBAN: GB55 BOFA 1650 5020 4167 08
2.	StoneX | EUR -- used to make payments for EUR metals trades.  Bank: Bank of America N.A., Account name: StoneX Financial Ltd, SWIFT/BIC: BOFAGB22, IBAN: GB95 BOFA 1650 5020 4166 67
3.	GHL | Wise | GBP – used to receive from/sent to internal Operational Railsr eWallets funds in GBP.  Bank: Wise, Account name: Goldwise Holdings Limited, sort code: 23-14-70, account number: 89475202
4.	GHL | Wise EUR -- used to receive from/sent to internal Operational Railsr eWallets funds in EUR. Bank: Wise, Account name: Goldwise Holdings Limited, SWIFT/BIC: TRWIBEB1XXX, IBAN: BE24 9672 3283 6338


o	



2. Payment Flow into Recon accounts 

2.1) Money will automatically flow into GW recon GBP or EUR (formerly clearing) after customer buy trades execute (fill) as long as the customer has available funds to transfer. 
The transfer will include the entire gross amount of the transaction that was written to the customer’s ledger. Which includes Product Amount, Fee and Tax.
Note: the trade normally cannot happen without a sufficient (incl. Buffer for buy trades)  ‘Available to Trade’ balance. See below ‘Customer lacking E-Money in their E-Wallet'
This is so the money is available for the reconciliation to use.
2.1.2) When we submit the batch we will flag the customer transaction with a moved to recon date, so we know its status and when it moved. We will also create a transaction in the Recon account to show the transfer in which will link to a RailsR transactionID as described previously.
Consideration will need to be given to:
-	2.1.3) Do we need to modify the RailsR schema for clearing in the database to support two-way movements in and out. For example transfers back to customer wallets. Also payments vs transfers and transaction types. Ie interledger transfers vs payment out to a beneficiary vs deposits in.
-	2.1.4) The moved to recon date should not change on a historic report. The report will know buys which move to recon after the trade has already been reconciled (See settling payments section)


2.2) Customers Lacking E-Money in their E-Wallet
2.2.1) If the customer does not have E-Money in their E-Wallet after a trade is executed (due to waiting for it from sell trades to clear and settle for example) once they are available, they should be transferred to the Recon E-Wallet automatically.
2.2.2) A process will need to run to check this situation on receive money and receive money from sell actions to allocate the e-money once it is available on a FIFO basis for Buys not in recon now in recon.


 
3. Reconciliation process

At a high level GoldWise need a process to move the money collected from all the transactions during the day into accounts and pay metal providers like Stonex daily by the agreed settlement date on the trade (T+2). 
At the same time, the system will move any other money into Operational E-Wallets ready to pay out to partners such as vaulting, tax authorities and themselves. 
This needs to be a two-step process in the early days to ensure everything matches the reports sent to us from those partners like Stonex. However, the intention is to make it as automated and seamless as possible.

At a high level the steps will be as follows:
•	Capture every trade (Fill) and other transactions that happened during the day 
•	Capture Every STP report and perform STP/Order/Fill checks to confirm everything is correct
•	Move into Recon RailsR E-Wallets any E-Money collected for trades where funds are available in customer’s e-wallet linked to that trade automatically as soon as the trade is executed
•	GW admin will cross check metal transactions against the Stonex daily report and check the STP Trade Capture Report status column and select which trades to include.
•	Totals for the scheduled payments out and metal weights will update dynamically as the trades are selected
•	It is not possible to select multiple settlement times at once
•	Upon clicking save the totals will transfer out to dedicated RailsR E-Wallets (Tax, Revenue) or directly to the partner (Stonex) and Customers Owed at the agreed settlement time in the same currency the money was received in (TBC what is technically possible regarding scheduling and if this will be a manual button initially) Is this related to the scheduling 1.2.4 Not required section? What are the specific settlement processes and times for these scheduled tasks to run?
•	If StoneX owe us money a pending deposit request will be raised and GW will log into StoneX PM Execute and make the payment in for the requested settlement time/date. - This is just for a date selection and not against a batch? Is this ok? Is there a need to reconcile with customer trades in the selected period?
•	Shortfalls at point of Recon: If GW find there is a shortfall of money owed caused by customers owing funds for executed trades or negative spreads or where customer sells are greater than buys, this shortfall will need to be transferred from the GHL Revenue RailsR E-Wallet to the Recon RailsR E-Wallet before the payments (settlement) can be made.
•	Payments IN from external bank accounts to GHL Revenue Wallet: A separate process will exist to allow GW to transfer from GHL bank account to GHL Revenue RailsR E-Wallet to ensure there are enough funds. This will be topped up periodically. The balance will be reduced when shortfall payments are created.
•	Payment of Critical Payments at Settlement: Once all funds are received in the Recon Account and the settlement time is reached, we will send payments to the chosen partner bank details for Stonex metal amount. At the same time any amounts available to customers who have sold holdings will be transferred into the customer’s E-Wallet in their chosen sell currency and their ‘Available to Withdraw’ balance will update. And Tax amounts collected will be moved from Recon into the correct entities Tax RailsR E-Wallet.
•	Payment of non-Critical Payment at/post Settlement: Once remaining amounts are received in full (From customer outstanding funds which are now received), the final payments can be made to move the E-Money for Entity Revenue, GHL Spreads and repay any shortfall amounts owed back to GHL Revenue E-Wallet.
•	Payments OUT from Operational Wallets to external bank accounts: We will have a separate process to make payments out from the dedicated RailsR E-Wallets to the real-world bank accounts for tax and revenue (Tax Quarterly, Revenue Occasionally, Brinks etc)

 
3.1 Reconciliation report checks

Every day the trades made on that day must be reconciled to confirm them and schedule a payment for what is owed StoneX. This starts with two checks:
•	3.1.1 - Check #1. Have we received an STP report for each trade executed and does it match the order type, order sub-type, metal, currency, weight, price, settlement amount (Customer product amount) 100% to what we have captured on that order and do we have the integral spread, StoneX metal cost = Sell metal = weight*(price + spread) and Buy metal = weight * (price - spread) Customer product amount = If market open status = 1 use value from order fill table (Customer price * weight filled) else use percentage weight filled vs the simulated fill for EHT trades. This will be indicated as a column on the report. See row 26 of the excel Report Design Tab for details of checks involved and section 3.1.3 below.

a.	Once the reconciliation saves the STP trade capture report used to verify the transaction, the transaction should be marked as verified and should not change
i.	Check status / STP column is as follows:
1.	N means missing STP report
2.	E means STP report found but one of the checked values has an error ie Buy type or weight not matching etc
3.	Y means STP exists and all column and data checks passed
ii.	To make report processing easier it is suggested these checks are done at the time of STP report matching rather than every time we generate the reconciliation report
iii.	The STP report used to verify will linked to the executed trade and should never change after reconciliation



iv.	Required checks to run during the STP process to determine if E or Y in table for errors below:

Check	Cross check		
Correct transaction type (Buy|Sell)	Pending Order Transaction Type	Order Fill Transaction Type / EHT Fill Transaction Type (If EHT)	STP Side
Correct product / metal	Pending Order Product	Order Fill Product / EHT Product (If EHT)
	STP Symbol
Correct Currency	Pending Order	Order Fill Transaction Currency / EHT Currency	STP Symbol
Weight		Order Fill / EHT Fill Weight	STP LastQty
Price		Order Fill Price / EHT Fill Price	STP LastPx
Product Amount		Order Fill Product Amount / EHT Product Amount	STP SettlCurrAmt
Settlement Date			Is STP SettlementDate set
ExecID and OrderID match		Order / EHT Order ExternalPartnerRef	Implied in match the trade  to STP vs STP N

b.	Other STP Processing scenarios
i.	STP report matches a single Order Fill / EHT Fill and no errors
1.	Status = Y
2.	IDs are linked together (order / eht order / trade capture report)
ii.	STP report is identical 100% to an already received STP report
1.	Status = D (Duplicate)
2.	Should be ignored from the reconciliation process
iii.	STP report matches previous STP but is now different
1.	Flag Status C (Duplicate Changed) TBC how we will handle it
iv.	STP report has no matching trades at all either Order Fill or EHT
1.	Flag as N
2.	Return in executed trades with mostly blanks and just the STP
v.	Trade Order Fill / EHT Fill has no matching STP report
1.	Not flagged as part of returning the executed trades process
2.	return trade as N in executed trades block with STP values as null
 


c.	Detail Views - Add the ability to click to view additional order summaries related to a trade in the report
i.	GW need to be able to click to see the trade capture report from the original report message

ii.	GW need to be able to click to see the original pending order and it’s Fix order request

iii.	GW need to be able to click to see all fills received for the original order regardless of the period selected
Example of hyper link on Executed trades grid. Hyperlinks on each trade open a new popup window:
 
Example of Original Pending Order Details View. Fields listed in GW-898 
There is a tab to switch between views on the Pending Order.
 
Order Fills Tab

It will list a summary of all fills for this pending order, including:
-	Every fill from the Orders Table including simulated ones for EHT Orders
-	Every EHT Actual Fill from the EHT Orders Table
-	These will be two separate lists and likely two procedures

 
There is an expand control to show full Order Fill Details and Matched STP report if any: 
Expanded view:
 
Note not for MVP but in the future, it will need to show any fields where there was an error during the STP checks.

•	3.1.2 - Check #2. Are all trades on the StoneX report for this date on the reconciliation screen and do the totals match. This will be a manual check during beta against the Stonex Report.
 
Report Example:
 
See wireframes and Excel ‘Report Design tab for full details.
Sections
1.	Report Filter (3.2 in spec)
2.	Selected Payments Totals (3.2 in spec)
3.	Trades selected counter (3.2 in spec)
4.	Executed Trades Grid (Below)
5.	Executed Trades STP Counts
6.	Orders Placed Grid
7.	Metals Payments Totals
Report Columns for [Recon Section 4 – Executed Trades]:
•	Select
•	GW Entity
•	Internal Trade No
•	Order Type
•	Order Sub Type
•	Trade Time
•	Settlement Date
•	Supplier
•	CCY Pair
•	Weight
•	Actual Metal Cost
•	Integral Spread Amount
•	GW EHT Spread Amount
•	Total Final Spread Amount
•	Customer Product Amount
•	Customer Product Price
•	Fee
•	Tax
•	Customer Total
•	E-Money In Recon Wallet
•	STP Confirmed
•	Fix OrderID
•	Fix ExecID (Order Request / Pending)
•	ClOrderID
•	Trade Capture Report
•	Integral Spread
•	Market Open Status	
•	STP Price (Return DB hidden field on screen)
•	STP ID (Return DB hidden field on screen)

3.1.3 Report Column Extra Information – row 26 of excel extracted:
GW Entity: Company tax ID to company from order fill or for eht
Internal Trade No: O + Order Fill ID / E + EHT Actual ID ie O27 or E590
Order Type: Order / EHT Actual Order Fill - Check match STP Value = Order / EHT Actual Order Fill = Original Pending Order
Order Sub Type: STP value - Check match STP Value = Original Pending Order Value
Trade Time: STP Value (Also do we capture this on Order / EHT Order Actual Fill to check match?)
Settlement Date: STP SettlDate 20230330 we add the @2PM GMT part on"
Supplier: STP? SenderCompID Check with Callum if we set this or they do?
CCY Pair: Create string - Check match STP Value ie XAUGBP = Order / EHT Actual Order Fill Cur and Product Symbol = Original Pending Order Cur and Product Symbol 
Weight Order / EHT Actual Order Fill - Check match STP Value LastQty = Order / EHT Actual Order Fill Weight
Actual Metal Cost: Calc in STP and saved in DB note sell negative (-) - From STP save change in the calculation to = Sell metal = weight*(price+spread) and Buy metal = weight * (price - spread)
Integral Spread Amount: Calc in STP save as spread * weight
GW EHT Spread Amount: Calc From Original Order Simulated Fill Customer Product Amount vs Actual Metal Cost + Spread as a percentage of weight in this fill =Customer product amount from (either simulated fill for market open status != 1 else customer product amount from the order fill for market open status = 1 -(Actual metal cost from stp + actual spread total amount from stp)
Total Final Spread Amount: Calc as Integral Spread Amount + GW Eht spread Amount
Customer Product Amount: "If market open status = 1 use value from order fill table else use percentage weight filled of simulated fill  For market open orders check order value matches stp settlement amnt"
Customer Product Price: If market open use order table price  AND check STP Price match Order Fill Price 
ELSE show simulated fill price for eht 
Fee: Order Fill Or Percentage weight of original simulated fill fee
Tax: Order Fill Or Percentage weight of original simulated fill tax
Customer Total: Order Fill Or Percentage weight of original simulated fill customer total
E-Money In Recon Wallet: GW Transaction history for the move money to Recon
STP Confirmed (B-K) All checks passed stated in this row Y else N - We will have to think about how we share what N failed
Fix OrderID: STP match Order Fill / EHT Actual Fill / Match Pending Order
Fix ExecID: STP match Order Fill / EHT Actual Fill
Internal Order Request  / ClOrderID: Pending Order Guid + wallet Guid + account Guid joined in correct order (Figure out) match STP
Trade Capture Report: STP Report Used	
Integral Spread: STP
Market Open Status: Original Pending Order 
Internal Trade Capture Report ID: The exact STP row ID used for the cross check so we can mark it as confirmed on save
Vault: Source is pending order original vault selected

3.2 Reconciliation | New Report Screen Details
We will build a reconciliation screen - Reconciliation results screen 1 - to include:
3.2.0.1 Primary Filters [Recon Section 1]

 

•	Date From – Filters the report to all trades from this date and time
o	Note will NOT filter ‘Executed Trades’ only Orders Placed grid
•	Date To – Filters the report to all trades up to this date and time
•	Currency – Filters which currency and recon account we are using. Choose GBP / EUR not both
•	Company Trading Entity – Default is All, Option to show only GHL or GEUAB trades
 
o	Call to action button to confirm search then updates the executed trades grid below it
o	Note this will reset any previously selected trades by this user
3.2.0.2) Selected Payment Totals [Recon Section 2]
 
•	The below are components displayed and adjust dynamically based on the selected trades (full rules later in spec):
o	Payments for period – Collection of totals showing for the selected trades what money will be moved where
o	Metal weight totals for period – Net weight totals bought broken down by metal, destination storage vault location and company entity
o	E-Money Movements – Shows how the available E-Money will be allocated and any shortfall amounts
o	Selected Totals – Below the executed grid
3.2.0.3) Executed Trades Section [Recon Section 4]
o	Detailed above.
o	Must only return previously unreconciled trades
o	Display Executed Trades for period – All executed trades with StoneX regardless of EHT or market open
o	3.2.0.3.2) Each column should have a filter where possible – Ideally powered by the chosen data grid react component 
	“What I was thinking was a filter function similar/same to MSExcel, where if there is more than one category within a column, that I can select the a few sub-categories and then have the respective totals.”
	 
o	3.2.0.3.3) Sorts
	sort by trade time, Buys/Sells, CCY Pair
	Ideally sorting locally in the front end avoiding a trip to the server



3.2.0.4) Executed Trade STP Counts [Recon Section 5]
o	 
o	The total trades returned in the result will be shown in the following control (5). This will not change if values are selected.

 
3.2.0.5.1 Orders Placed Summary Section [Recon Section 6]

 

o	A breakdown of all orders placed in that period including both EHT and Market Open order requests with current totals and status
o	This is to cross check what the customer requested with what we have ordered and also to track orders volumes such as at the weekend.
o	It can be (manually) compared to the FX cloud monitor provided by Integral
o	3.2.0.5.1.2) There is a refresh icon to update this grid
o	Note this is a separate section on the same screen after the executed trades section
o	It shows all orders placed between the dates set in the primary filter regardless of status or if included in a reconciliation batch or not. 
	Date from – Filters orders placed after 00:00:00 on the Date From
	Date to – Include orders placed up to 23:59:59 on the Date To
	Currency and Entity work as per main executed trades filter above
o	Order Placed Columns & Calculations
	 
	See Excel Report Design Tab for exact columns and working example
	GW Entity:, Company tax attached when trade was placed
	Order Type – Buy / Sell
	Order Sub Type – Market / Limit / Stop / Stop Limit
	Order Time – Time customer placed the order
	CCY Pair – Currency ad product symbol they ordered
	Market Open Status – 1. Open 2 Week EHT 3 Weekend EHT when order placed
	Weight – Base weight ordered in t/oz
	Weight Filled - Calculated for either Oder Fills / EHT fills
	Customer Product Amount, - If order status:
•	Pending = Indicative values from pending order
•	Partially filled  
o	actual filled values from Order table (always regardless of EHT)
o	Plus % of weight remaining * remaining values
•	Filled 
o	Just actual filled values
	Customer Product Price
•	Average price across both
	Fee
•	Calc in similar way to product amount
	Tax, 
•	Calc in similar way to product amount
	Customer Total, 
•	Calc in similar way to product amount
	Order Status, 
	Internal Order Request / ClOrderID, 
	Fix OrderID
•	3.2.0.5.2) Orders Placed - Expanded View 
o	 
o	It is possible to expand the order placed row which depending on the status of the pending order using an expand icon on the left. If order Status:
	Pending – No Expand control
	Partially Filled
•	Show filled row
•	Show remaining row
	Cancelled 
•	Show filled row if any partial fills
•	Show cancelled row with just weight for cancelled amounts
	Filled
•	Show filled row only
o	For expanded row calculations, see the excel Report Design tab:

		 


Note this process will also require other items to be included such as storage charges once we have metals working properly.
 
 
3.2.1 Reconciliation New Report screen select which trades to include

3.2.1.1) A summary at the top of the screen will show a count of how many trades have been selected [Recon Section 3]:
 
•	Results From: The date/time the user ran the report to show it updated
•	Selected Trades: Total count of currently selected trades


3.2.1.2) Selection of trade is made in the executed trades section [Recon Section 4] 
 
GW admin will select the trades they want to confirm / settle by ticking “select all” check box or by selecting individual trades via a checkbox they would like added to a batch for execution. (4) above.
•	3.2.1.2.2) Validation will ensure it is not possible to mix settlement dates. It is not possible to select trades for two different settlement dates at the same time and will show an alert prompt with an explanation.
3.2.1.3) Select All – A Select All Button will show - Logic is select all trades where E-Money is in the Recon E-Wallet and STP was confirmed (Y) for the earliest settlement date and unselect the rest. Note it should not mix settlement dates and not include STP N.
 

•	3.2.1.4) STP Confirmed Column [Section 4]
•	 
•	Trades with STP Y – matching STP and no errors can be selected
•	See STP section earlier on for the rules and checks carried out when an STP report is received
•	3.2.1.5) Error scenarios below can NOT be selected and when they are should show an alert box error if the user tries to select it and the batch not updated.
o	Trades missing an STP altogether with STP N 
o	Trades with STP E – Meaning there was an error in at least one of the checks
o	Trades with just an STP and no executed trade/ fill can NOT be selected and just show a row mostly blank with the STP report column
•	3.2.1.6) On filtering on the data grid selected trades will STAY selected. However, on setting the top filter (Date From and To, Currency and Trading Entity) the selection will be reset.

 
3.2.2) Updating totals [Section 2, 3 and 7]
•	When trades are selected or unselected sections (2), (3) and (7) will change as per below:
 
When a trade is ticked to be included, the payments for the period, will dynamically update the payment totals and metal payment totals and e-money movements on the screen:
3.2.2.1) Payment Totals
If GBP selected: PLEASE CONFIRM THIS WILL ONLY BE FOR A SINGLE ENTITY COMPANY
•	Stonex Metals GBP
•	Owed Customers GBP
•	Tax GHL GBP
•	Tax GEUAB GBP
•	Spreads GHL GBP (Note just GHL, all spreads from trades go to GHL)
•	Revenue GHL GBP 
•	Revenue GEUAB GBP
•	Total To Move GBP
(Does not include future totals required such as Storage Charges and Coin invest)
If EUR selected: PLEASE CONFIRM THIS WILL ONLY BE FOR A SINGLE ENTITY COMPANY
•	Stonex Metals EUR
•	Owed Customers EUR
•	Tax GHL EUR
•	Tax GEUAB EUR
•	Spreads GHL EUR 
•	Revenue GHL EUR 
•	Revenue GEUAB EUR


Metal Totals Admin Screen 2?? 
3.2.2.2) Metal payment totals – net weights in t/oz per vault location per entity
 
Totals update as executed trades are selected based on the original order vault.
Metals
•	Gold
•	Silver
•	Platinum
•	Palladium
Vaults
•	Stonex Vault London GHL
•	Stonex Vault Zurich GHL
•	Stonex Vault London GEUAB
•	Stonex Vault Zurich GEUAB
Calculated by looping through the selected executed trades, looking at the entity and customer’s chosen vault and then increasing the correct corresponding metal payments total column. EG all GHL, Digital Gold buys and sells and taking the net figure of the weight amounts in t/oz.

3.2.2.3) E-Money Movements : [Section 2 – Payment Totals Continued]  
The E-Money movements section is a preview of what will happen when the selected items in the report are saved. It shows how much cash we have available to allocate in the Recon E-Wallet currently and any shortfall amounts that will need to be taken.
Report Fields:
•	Available in recon – The total amount of money currently in recon from selected ‘executed buy trades moved to recon’
o	 
•	Total E-Money – Sum of selected trades what money total needs to move
o	Total amount of money currently in recon from selected ‘executed buy trades moved to recon’
o	plus
o	Total amount of money currently in not recon from selected ‘executed buy trades owed by customers’
o	Plus
o	If Stonex owe money for sells that amount owed
•	Amount Payable at Settlement Row – Shows the e-money allocation. It will take the e-money available plus stonex amount and allocate it in the following order of priority: 
o	M) Stonex
o	N) Owed customers
o	O) Tax GHL
o	P) Tax GEUEAB
o	Q) Spread GHL – Note special rule if spread is negative don’t allocate as already included in Stonex or Owed customer amount
o	R) Revenue GHL
o	S) Revenue GEUAB

o	Tax example = amount available to allocate less amount allocated so far: 
•	Shortfall amount row
o	In some scenarios there will be a shortfall. This row shows how much shortfall is remaining. For each of the rows above (M-S)
	Payable at settlement MINUS payment for period for each = remaining amount / shortfall
	For spread, if the spread is negative set to 0.
o	Shortfall customers owed column example of amount owed less amount allocated
 
•	Paid amount
o	ON HISTORY REPORT ONLY – shows how much of the intended payment has actually been moved (M-S) to the correct place.
Next, we have the summary totals:
•	Critical shortfall payment required – At settlement there must be at least enough money to cover the critical items at settlement for M-P (Metals, Owed Customers, Tax GHL, Tax GEUAB). 
o	This critical shortfall is the total that will be moved from GHL Revenue E-Wallet to Recon to cover the shortfall. = Sum of shortfall amounts for M-P (Metals, Owed Customers, Tax GHL, Tax GEUAB).
o	 
•	Of which IOU
o	In most cases, the shortfall will be an IOU from customer buys awaiting funds. So they can be repaid once the money comes in. Only negative spreads will never be repaid as the customers won’t pay for those GHL will. 
o	IOU ) =IF(M19=0,0,IF(M17=0,0,MAX(M17,M17-M20)))
o	IOU = IF (Customer Owed Funds <> 0, MAX(Critical shortfall, Critical shortfall – Losses to be absorbed)
o	This is basically saying the maximum IOU can only be what was put in less the amount of it that was for negative spreads
o	  
o	See Shortfall scenarios tab for edge cases this covers
•	Additional Shortfall – This is the remaining shortfall of E-Money available to make all payments for the period including revenue and spreads (Q-S). No transfer will be made and is for information only
o	 
•	Customer owed money buys not in recon – Shows the total of E-Money owed by customers for buys not in recon that have been selected to be included. Once received in full, this money will need to be allocated to paying any remaining amounts owed and repaying any shortfall amounts.
•	Losses to be absorbed by GHL (Negative spread) - This is the net spread for the selected trades if it is negative. If the spread is positive, it will be 0.
o	 
o	 
Upon saving the reconciliation report, the e-money will move according to the above allocation rules at the time of settlement.

3.3 Saving Reconciliation

The save button will be disables until the first trade is selected.
 
A popup will ask the user to confirm they are happy to save the reconciliation as it can’t be undone.
 
Once they click Submit, we will capture everything that was selected and the totals in a reconciliation batch: Where is a “Batch” Executed? Q: From: PL See Process description 3.0 for timings. Transfers are written with an Awaiting funds or Awaiting Settlement status on Save. They are then paid at settlement time if funds are available as per 3.4.
•	3.3.1) Will validate every selected trade has not already been included in a previous batch
•	3.3.2) Will then create a reconciliation batch which tags all transactions included in the batch plus captures the total amounts owed for each provider / e-wallet
•	3.3.3) The batch will be given an 8-digit unique string reference 
•	3.3.4 )Other dates to save or update such as settlement date and date settled and created by
•	3.3.5) Status to track on the batch
•	The report should then save all the pending payments/transfers, both money and metals, so that they are set, and the amounts/weights never change when loading the history report. TBC how will we ensure the data never changes for the included rows and total amounts once the batch has been Recon’d/’processed’?


At this point no money will move yet. However, it is likely pending payments and transfers will be created ready for allocation. See earlier payment notes on payment status’ and later Advanced Money Movements Section 3.4 below. (TBC due understanding what is technically possible and if we want this to be manual during beta and controlled by a button)

3.3.6) Saving E-money Payment Totals on Ledger
The payment totals will be captured, and the following pending payments / transfers will be written in the given currency in the following order of precedence:
1.	Shortfall Transfer from GHL Revenue to Recon (optional if shortfall > 0)
a.	 Negative spread will also be here from GHL Revenue to Recon (if negative spread)
2.	Payment to Stonex Beneficiary EUR/GBP (optional if Stonex >0)
3.	Pending Deposit from Stonex (optional if Stonex < 0 ie they owe GW)
4.	Pending Transfers from Recon to GHL Tax (if > 0)
5.	Pending Transfers from Recon to GEUAB Tax (if > 0)
6.	Pending Transfer from Recon to GHL Revenue for Spread (if Spread > 0)
7.	Pending Transfer from Recon to GHL Revenue for fees (if GHL fees >0)
8.	Pending Transfer from Recon to GEUAB Revenue for fees (if GEUAB fees >0)
9.	IOU from Recon to GHL Revenue (if shortfall of which IOU > 0)

The initial payment status of each of the transfers and payments above will be calculated as part of the payment process implementation.

3.3.7) Saving Metal Payment Totals on Ledger
When this saves it will write individual metals ledger entries into the database GW Stonex metal vault ledgers for each product and weight and vault and entity combination. - These are our internal metals ledgers for Stonex and there is no integration at this point of saving.
The date will be the settlement date of the selected trades / batch. So, you may see future dates written to the ledger. Example metals ledger shown below with settled and unsettled metal payment rows generated by saved reconciliations:
 
Note Day 1,2,3 in the description is for illustration only.

 
3.3.2 STP Request Button

 

•	An STP Request button will allow GW to re-request missing STP messages (N) where we have a fill in the GW system but no matching STP report
•	After pressing the button, it will show a confirm popup before encouraging the user to use this feature sparingly
•	If they choose to confirm the action will go through all trades with STP N (missing an STP) and request the missing trade capture report based on the executed trade reference, we have.
•	If there are 5 STP N trades, then there will be 5 queued trade capture requests sent via a queue to the python service
•	The screen will not update once the STP reports drop in
•	Only when the search is next run will any missing reports show
•	If a report still is missing: Further investigation will be required, including logging into FX Cloud monitor and checking the order number to see why we have a trade with no STP report.

3.4 Reconciliation New Report - Post Saving Reconciliation – Money movements

3.4.1 Triggering the money movements at settlement time

o	The system will need to have mechanisms to make the required payments out and transfers at the time of settlement according to the rules set out above in E-Money Movements 3.2.1
	This will break down into several stories including:
•	3.4.1.1. Transfer shortfall amount from GHL Revenue E-Wallet to Recon E-Wallet for IOU
•	3.4.1.2. Transfer shortfall amount from GHL Revenue E-Wallet to Recon E-Wallet for negative spread (Losses to be absorbed) 
•	3.4.1.3. Pay Stonex metal amount to Stonex Bank account
•	3.4.1.4. Transfer customers owed amounts to their E-Wallets
•	3.4.1.5. Transfer tax to the entity tax E-Wallet
•	3.4.1.6. Transfer spreads to the GHL Revenue E-Wallet
•	3.4.1.7. Transfer fees to the entity Revenue E-Wallet

In addition we will need processes to capture money into the system for:
3.4.2 Stonex amount owed to GW – 
o	In some cases, Stonex will owe GW money, for example, when there are more sell trades than buy trades in a day. GW will log into the Stonex PM Execute system on or before the time of settlement (2PM UK) and make a transfer.
o	This will be paid directly to the recon account using the exact payment reference assigned to the reconciliation batch and correct amount and currency.
o	A process will be needed on RailsR to catch these transactions and account for the deposit
o	The RailsR firewall will need to be carefully amended to allow these deposits through
o	A trigger will be needed to check if all money is now available, and the settlement of funds can happen
o	TBC PL Asked what will happen if the payment is not made with the correct reference or from a different account?

3.4.3 GHL deposits to GHL revenue Wallet
o	GW will periodically transfer an amount from the GHL bank account to the GHL Revenue wallet. This is so there is enough float to cover shortfall scenarios.
o	3.4.3.1) A process will be needed on RailsR to catch these deposit transactions and account for the deposit
o	3.4.3.2) A trigger should be run after each deposit in case there are shortfall payments which have not transferred yet due to a lack of funds in the GHL Revenue E-Wallet
	Will include the need to work out what balance is available to actually transfer / allocate
	Will include both ‘awaiting funds’ status shortfalls and negative spreads where the full amount is now available

3.4.4 Pay final amounts Q-S once owed customer buy trades once paid
o	Another process will be needed to track the movement of executed buy trades which were not available in recon at the time of processing but are now.
o	Once ALL owed buys are settled, the system will need to trigger the final money transfers for the remaining Q-S.
o	In addition, it will repay any Shortfall amount which was an IOU back to GHL Revenue
o	See earlier comments on money movements and additional processes required on received money to check if batch can now be settled.

Note: All payments for M-S will be made only if the complete transfer / payment amount is available. We will not do part allocations at this time.


3.5. Reconciliation Scenarios to Cover


There are several main scenarios we are likely to see on the reconciliation report which are explained below. 

3.5.1 More buys than sells. The net metal amount is positive. All included buy trades and respective e-Money are in the Recon e-Wallet

•	This is the happy path where there is enough money to cover everything. The Trade amount from buys is greater than all the Trade amounts from sells and there is a remaining monetary amount (The net) owed to StoneX. The e-Money for all buys are already in the recon account.
•	A payment out (withdrawal) for the remaining net amount owed to StoneX will be created and sent to the correct StoneX beneficiary account. (TBC if manual trigger or if scheduled is possible or instant)
•	In this instance, the money should settle for the sells and other transfers on T+2 from the execution date. At that time all the fees, spreads and taxes move and any credited customer balances update. (TBC if manual or possible to be scheduled or instant)




3.5.2 More sells than buys. Net trade e-Money amount is negative

•	This is where more sell trades happened than buys so StoneX owe us money. To avoid favoring some customers more than others the system will wait until the funds are received from StoneX.
•	When the reconciliation is saved a pending deposit will be created due from StoneX for the amount owed and with the reconciliation reference attached.
•	GW will need to log into the PM Execute StoneX Dashboard and manually withdraw the owed funds at the required settlement date
o	The payment must use the same reconciliation reference and exact amount so that it can be matched when it is received in RailsR (New Webhook)
o	The payment must be sent to the ReCon E-Wallet in the same currency 
•	Upon receiving the full amount, the system will match the pending deposit and then process the settlement accordingly (paying customers, tax, revenue etc)




3.6. Edge Case Scenarios 

3.6.1 Transactions not confirmed by STP

A trade may have STP = N. This will require manual investigation into why the trade does not match its STP report or the STP report is missing altogether. 
The Trade will by default not be included in ‘select all’ function but can be selected if the funds have been moved to Recon and GW choose to include it in the batch.
Agreed on above. 😊 BUT, following investigation, we can only/will pay per the STP reported data. If the STP report is missing, this means that we have a customer confirmed trade (a Fill on our side) but no matching STP, this implies we have an ‘unhedged’ trade. We will then need to manually insert a trade with the same parameters as the customer order (focus will be on weight only) into integral at market open, get the manual order executed and link it back to the customer trade.  it will be similar to the EHT order hedging at market open, but in this case we will have to ‘manually’ insert this trade into Integral
. 
3.6.2 Money not in recon account yet from buy

 
These are transactions where the trade has been executed but E-Money from the customer E-Wallet has not moved to the Recon E-Wallet due to an insufficient e-Money balance in the customer’s RailsR E-Wallet. 
However, GW still owe for the trade regardless as it has executed so the amount owed needs to be paid.
(ie customer is awaiting settlement from sell and buys using available to trade balance or a large flash spike in prices causes buy to be greater than funds available and we are awaiting customer to add more funds)

1.	GW can choose to not include the transaction and wait by not ticking it
If they are included later on, consideration should be given to the settlement date, for example the payment may need to go out immediately rather than be scheduled.
2.	GW can choose to include them. 
a.	In this case a Shortfall payment will be generated for the most important payments shortfall (M-P less negative spread as covered below) from GHL Revenue E-Wallet to Recon E-Wallet
b.	As soon as there are funds available in the GHL Revenue E-Wallet they will be moved
3.6.3 EHT transactions where a loss was made 
 
In some cases, where EHT trades have made a loss there could be a shortfall in the amount owed to settle the metal amount owed to StoneX, owed customers of tax (M-P)
If they are included and the total net spread is negative for all selected trades:
•	A shortfall payment will be created for the negative spread from GHL Revenue to Recon
•	As soon as there are funds available in the GHL Revenue E-Wallet they will be moved

3.6.4 EHT partial fills / incomplete orders
It is possible but unlikely that an EHT order will receive a partial fill. For this reason, EHT trades will be included the same way as market open trades in the main trade executed section per executed trade.

However, in this case we will work out the percentage of weight filled vs the Original Simulated Order, and all fields will be % adjusted so EHT Spread, Customer Product amount, Fee, Tax and Customer Total.



4. Reports – Historic Reports 
 
4.1 Reconciliation history list view – All past reconciliations
There will be a reconciliation history screen which shows a summary of all reconciliations between a given two dates showing each reconciliation that happened, totals and current status and a link to the original report.
H1 – The initial filter 
•	Date from
•	Date to
•	Entity – All/ GHL / GEUAB
•	Currency – GBP/EUR
H2 – The historic reconciliations with payment totals and status (See excel for required fields)
 
*Note other totals will be added as we add other payment groups
H3 – The link to view the full historic report for that reconciliatione.g. other suppliers – Coininvest, other GW subsidiaries, other fee lines e,g, Storage fees, delivery fees etc....
4.2 Reports – View Report CTA  (From clicking H3 Above)

We should be able to go back to any of the reconciliation reports above and see the exact trades, payment totals, metal totals and e-money movement totals as they were at the time of the report generating.
 
 
In additional we will see:
•	HR1 - Reconciliation status and reference, date report saved, settlement date and user created by fields. All static and cannot be changed.
•	HR2 - Amount Paid totals for each payment to see whether the final payment amounts have been settled
•	HR2* Payment Status A row for each payment to see its individual status (See payment status’ earlier on ie Awaiting Payment etc
•	HR2* Date Settled – The date the payment was settled or null if not yet
•	HR4 Will also show all included Executed Trades that were part of that reconciliation batch in a grid below like on the new reconciliation screen but without the ability to select.
 
See excel Recon History Report Example tab for full design
4.3 Export Historical Reconciliation Report 
•	Add the ability to export an historical reconciliation report to excel/ CSV
•	Add the ability to export an historical reconciliation report to pdf
PDF generation on the server approach:
1.	Create a template in HTML (a .html.twig file) that represents the table the data will be in.
2.	Retrieve the data from the DB (using a stored proc) to populate the HTML template.
3.	Render the view using the HTML template and the data from steps 1 and 2.
4.	Use one of the available php libraries to generate the PDF based on the rendered HTML from step 3.
5.	Store the file in a secure place on the server and provide the url to the front-end
3rd party libraries to use for generating the Pdf include:
•	wkhtmltopdf (https://wkhtmltopdf.org/) - open source (LGPLv3) command line tools to render HTML into PDF
•	KnpSnappyBundle (https://github.com/KnpLabs/KnpSnappyBundle) - Open source (MIT license) Symfony library that is a wrapper around the wkhtmltopdf PHP library
•	Also, PHP WkHtmlToPdf (https://github.com/mikehaertl/phpwkhtmltopdf) - again a wrapper to the wkhtmltopdf PHP library for Symfony
•	Dompdf (https://github.com/dompdf/dompdf) - an HTML to PDF converter written in PHP
•	FPDF (http://www.fpdf.org/) - a PHP class which allows to generate PDF files with pure PHP - this one doesn’t use html templates but pure PHP to generate the PDF file format
 

5. Metals Ledger and Metal Asset Balances

 

From 1.2.5. above, continuation [Metals Administration - Section MM1]
Tabs to include:
1.	Metal Admin | Metal Movement - Daily Recon of metals weights and count from Buys & sell trades that are STP confirmed, traded at StoneX - split/classified by customer chosen vault (London, Zurich), by product and by GW entity customers (GHL & GEUAB) 2.	Metal Admin | Vault Ledgers – for – for Daily and periodic metals movements and running balance, at StoneX, Brinks London, Brinks Zurich, by product and by GW entity customers (GHL & GEUAB) - see SECTION 2 below
3.	Metal Admin | Assets (AuA) – a running total of metal weigh balances by StoneX (vault London, vault Zurich) + Brinks London + Brinks Zurich, product and by GW entity customers – See SECTION 3 below
•	Initial products will include:
I.	Digitial Gold
II.	Digital Silver
III.	Digital Platinum
IV.	Digital Palladium

5.1 SECTION 1: row 1 – 20 on Tom’s MSExcel - ‘Metal Admin | Metal Movement’ tab

Once the Daily Recon batch is ‘Saved/Submitted’, this data (table above) is transferred and captured by the ‘Metals Administration’ tab. In this tab, daily ‘Saved/Submitted’ balances are captured and stored. In essence this screen is a summary of the total metal movements for the individual ledgers for each vault and product by date.
•	
•	[Metals Administration -  Section MM2] Date from Filter
 
	The Metal Movements section will start with no results showing and a Date From filter. The user can choose any date up to today
	The default will be 5 days shown
•	Date From –2, date From And Date From + 2
	A reset button clears the search
•	5.1.1) [Metals Administration -  Section MM3]  Dates Shown / Date Columns
 
	Based on the dates selected in the report it will show a column for each date:
•	The date column will be
o	Green Settled if in the past
o	Unsettled if in the future
o	Note if today >5pm UK then today is Settled else Unsettled

•	[Metals Administration -  Section MM5] - Each Stonex Vault Ledger By Entity and Product
	 
•	For each product, vault and entity (eg GHL | London | Stonex | Digital Gold)
•	SUM the total entries on each metals ledger for that column date for that product, entity, vault:
o	Will include all entries from the ledger regardless of type. Including:
	Reconciliations with that settlement date
	Metal movements posted with that settlement date
•	Example for the 04/11/2023 - Showing as –6.000
•	 
•	 
•	8.00 debit + 2.00 credit = -6.00 debit (highlighted entries above)



	5.1.2 [Metals Administration Total Rows - [Section MM6] 
•	In the top section it will total the rows from the four vaults below it to give a total movement at Stonex on that date:
		 
•	Stonex Vault Total Rows at top add the totals across all Stonex vault ledgers for that product on that date regardless of entity: 
•	 
•	(Note it may be easier to generate the rows below it first and then the total rows at the end of the process)
•	5.1.3) Running Balance [MM4]
•	   
•	Running Balance - This looks at the Closing balance of each metal ledger by product. Important – It is not actually affected by any data on this screen ie the date columns to its left. All data comes from the vault ledgers. Get the current closing balance.
•	See screenshot below for an example closing balance:
	By product and trading entity and Stonex vault location
	 
•	

Stonex Vault Total Running Balance [MM4]
•	As with the date rows the total rows (top four) use the data from below it
•	 
	
•	- 
a.	5.1.4) Pending Settlement = metal weights that are unsettled, trades either within the T+2 period or other unsettled weights BUT have been ‘Saved/Submitted’, we just have not paid it to StoneX or received from StoneX
b.	
c.	 
I.	Go to the metal ledger for this product, entity and vault and get all unsettled metal movements for now – again ignore columns to left on screen.
II.	Note if time now is before 5pm then todays will also be included as unsettled else it will be settled
d.	5.1.5) Settled Balance = metal weights (free and clear) available at StoneX = Running balance minus Pending Settlement
I.	 

II.	
•	By product, by customer, StoneX vaulted total, split by customer selected London vault and Zurich vault




 
SECTION 2 – row 22 – 35 on Tom’s MSExcel - ‘Metals Admin’ tab – 
Metal Admin | Vault Ledgers
 
5.2 Metals ledger - Movements into StoneX from Daily Recon and between StoneX & Brinks
Following the ‘Save/Submitting’ the Daily Recon (SECTION 1), we need to count the INs & OUT of weights by product, by entity, by day/date, debit, credit, running total balance, plus any transfers from Stone X to/from Brinks London and Brinks Zurich are captured on relevant ledgers, ledgers are:

A.	All metals weights start with being accrued at StoneX, then may/may not be moved to Brinks London or Brinks Zurich and then may be moved back to StoneX.  All these movements need to be captured on respective internal ledgers:
•	Stonex Product For Vault London GHL Ledger
•	Stonex Product For Vault Zurich GHL Ledger
•	Stonex Product For Vault London GEUAB Ledger
•	Stonex Product For Vault Zurich GEUAB Ledger

Example ledger:
 

Metal Admin | Vault Ledgers
o	Screen will have a tab control for switching between
o	5.2.1) Trading Entity Tabs [VL1]
	GHL | GEUAB
	 
	
o	5.2.2) A second tab group to choose Product [VL2]
	 
	Digital Gold
	Digital Silver
	Digital Platinum
	Digital Palladium
o	5.2.3) Stonex Metals Vault Ledgers will be on the left by vault location [VL3]
o	5.2.4) Brinks Metals Vault Ledgers on the right by vault location [VL4]
	 
•	Only the last 3 days and all future day's entries will be shown by default
•	Ensure all ledgers have a scroll so all four fit on a large monitor
•	5.2.5) Unsettled ledger entries are highlighted in red. They are time based, so if time now is before 5pm then todays will also be included as unsettled else they will be settled
5.2.6) Metal Vault Ledgers in New Window 
•	An icon with text View Ledger will open a new window to see the full metal ledger [VL5]:
o	 
o	Important: Must be a new browser window not a popup
o	New window example
	 
o	This will need 
	Data grid control
	Pagination to go back to past dates
	The controls for searching loaded data
5.3 Daily Recon by product, by Vault London/Zurich  = StoneX Metals weight by product, by Vault selected by customer in the trade
Post NET trades as per Daily Recon totals to appropriate ledger:
I.	
5.4 Vaults Metals weights = movements from/to StoneX ONLY
Record movement from StoneX account (by metal type) to/from Brink London and Brinks Zurich, ledgers for 
•	Brinks Product Vault London GHL Ledger
•	Brinks Product Vault Zurich GHL Ledger
•	Brinks Product Vault London GEUAB Ledger
•	Brinks Product Vault Zurich GEUAB Ledger
Example metal movement ledger posting:
 
 
5.4.2 Initiate Metal Movement [MM7]
 
 5.4 requirements is the function to initiate the metal movement transactions.
•	5.4.1) Requirement to create a request for metal movement from StoneX (London or Zurich) to Brinks (London or Zurich) and vice-versa by trading entity. 
•	5.4.2) Source and destination will have all values
•	5.4.3) Validation should ensure you can’t move more than is available to move from settled balance.
•	5.4.4) This movement request creates a pre-formatted email, that enables JP to manually send this email to Brinks (London or Zurich) or StoneX (London or Zurich).
o	Question on kilo bars vs t/oz
•	If the request is approved by JP -> submitted, this creates postings on the relevant Metals ledgers - the result of which creates a matching PENDING Credit-Metal Movement and Debit-Metal Movement to the relevant Metals ledgers
•	
•	5.4.5) Metals movements will be posted with a settlement date of:
o	T+2 if before 3pm settlement time 5pm UK
o	T+3 if after 3pm settlement time 5pm UK
o	Example if today is the 12th Sept and it is before 3pm
	Move posted to the metals ledger with a settlement date of 14th Sept 5pm UK
o	If after 3pm would be 15th Sept 5pm UK 
•	5.4.6) Movement Description Rules
o	On sending ledger
	 
o	On the receiving ledger
	 


5.5 Vaults Metals weights = movements from/to StoneX ONLY
Record movement from StoneX account (by metal type) to/from Brink London and Brinks Zurich
I.	Opening balance
II.	+ Allocated IN (transfer) from StoneX
III.	-. Allocated OUT (transfer) to StoneX 
IV.	+ Other Allocated Transfer IN
V.	-. Other Allocated Transfer OUT
VI.	= Closing Metal Balance owed by Brinks London or Brinks Zurich 

SECTION 3 – row 37 – 62 on Tom’s MSExcel - ‘Metals Admin’ tab






 
5.6 Global Assets Under Managment Section – 
Metals Admin | Assets

 
5.6.1 View Report Screen:
•	A1 – A date from allows the user to choose any date in the past EXCEPT today unless it is past 5pm and todays report has run
•	A2 Stonex metal partners totals as still TBC. There is an admin login with Excel export but we need to confirm if there is an API
•	A3 – As described in section 5.6.2 below this data will come from the brinks inventory report
•	A2 and A3 Goldwise values – This will come form the corresponding Metals Ledgers across all entities
o	Takes current running balance of those metals vault ledgers – Yesterday we said take running balance including unsettled but may need to check that if always going to be out
•	Difference - Highlight any differences in red if below or green if above or – if no differences, versus what GW platform says we should hold. It could be ‘+’ or ‘–’ versus what we should hold.
•	A4 – Create a Combined Total View from A2 + A3 and highlight if there are any overall differences.

The StoneX, Brinks London and Brink Zurich fields (Partner Report Total column) shows the weights of metals held by the partner as reposted by the partner/ partner’s system
The StoneX fields/cells shows the metal weights held in the GW account at StoneX
The Brinks London fields/cells shows the metal weights held in the GW account at Brinks London vault
The Brinks Zurich fields/cells shows the metal weights held in the GW account at Brinks Zurich vaultMissing global entity – Is this intentional? Yes we will only have one account with Brinks initially not per entity.

5.6.2 Import Brinks inventory report every day at settlement time (5pm UK)
•	See recent partner conversations and XML example
•	Will need to map brinks vaults to our vaults
•	Note product units (1 kilo bars) vs t/oz
•	Will be a scheduled task and will write the date and entries to a database table

5.6.3 Import Stonex PM Execute – Currently not possible via API

5.6.4 Capture the Assest Balances report into the database
•	As part of the daily settlement report create a scheduled task will need to run:
•	This will include:
o	The brinks report
o	The stonex report (TBC IF POSSIBLE) - Is this the PMExecute report ? If this is not av ailable then the solution will be …..TBC Talk of separate screen. Question on reliability and frequency of data entry.The GW ledger totals
o	The differences
All data for the report will be captured into a history table so the report can be generated for a given date
 
6. View Operational E-Wallets

6.1 Tracking of payments into and out of Operational E-wallets
Once the E-Money flows to Operational E-wallets / GW RailsR Ledgers it will be tagged and tracked in a transaction log with running balances.
We should be able to get a balance from RailsR which should match the database ledger once all payments have settled.
6.2 View Operational Wallets
New admin screens will be developed to see these E-Wallet transactions and their Running Balance. Likely one screen per operational E-Wallet
 
6.3) Icon opens full ledger in a new window with grid and pagination 

7. Payments from Operational E-Wallets
 
IMPORTANT: SCREENSHOT SHOWS RECON IN TRANSFER BUT THIS IS NOT ALLOWED ONLY
TAX and REVENUE Wallets can have transfers RECON cannot as the money is already allocated.


7.1 Paying Tax
Tax paid quarterly
Payment out button on each E-Wallet
Choose withdrawal amount
Choose beneficiary from fixed list
Input description 
7.1.2) Ensure validation that only available to withdraw funds can be made
7.1.3) Pay (webhooks? Failed webhook)
7.1.4) Handle Payment failures via webhook

7.2 Paying GW Revenue
Fees paid to trading entity occasionally 
Payment out button on each E-Wallet
Choose withdrawal amount
Choose beneficiary from fixed list
Input description 
Pay (webhooks? Failed webhook)

 
7.3 Safeguarded Funds - RailsR Balances Check Report
A report to check our internal operational e-wallet ledger balances against RailsR
-	Includes recon, revenue, tax and customer wallet totals
-	Question from Phil on timings of capture due to movements all the time
 


 
8. Main Menu

From the left bar of the admin menu there will be a new menu link – “Reconciliations". When clicked it will go to a menu screen below:

 
Each link will take you into the related screen in the specification above.



9. Technical Specifications

The GoldWise Admin Web Portal will be developed for use on Desktop browsers ONLY and will work on the desktop specified below:
 
Browser Version  -  Platform
•	Chrome – Version 96 and higher  Mac
•	Chrome – Version 96 and higher  Windows
•	1920x1080 pixel

The development will use bespoke components.

Other notes from the session (IGNORE)

Metal amount owed to stoneX
Money not in recon - tomorrow customer money could drop in if they were waiting for a different Sell trade to settle, so could be a regular thing. Jatin could choose to not include that trade and wait till tomorrow then include it if he chooses. YES
Amount due to StoneX doesn’t change if we have the money or not, they need paying. YES
GW reconciled and settled flags and dates will need updating for customer balances to change correctly. (See balance rules)
One currency will be processed at a time. YES
Filter on columns similar to excel function. Filtered view selection is only what is shown.
Once a trade is reconciled it is removed from the first screen and appears on the reconciliation batch report instead. YES
All trades executed must be settled in T+2. This will come from STP. YES, it will provide settlement date, time is 2pm UK.
Balances and amounts in reports should not change.
Transactions will need to be added to accounting software as manual feed if we want to integrate with RailsR E-Wallets or our transaction log
Reconciliation batches likely to need to be exported to CSV YES



Problem statements / Epics

As GoldWise we want to know how much is owed or due from metal providers and pay them as part of a daily reconciliation process
As Goldwise we want a full history of each reconciliation so that we can report and track all money movements and payments made by the system as part of that reconciliation
As Goldwise we want a full history of each reconciliation so that we can report and track all metal movements and metal holdings made by the system as part of that reconciliation
As GoldWise when our customers sell precious metals, we want to give them access to their funds once they are available so they can choose to re-invest or withdraw them
As GoldWise we want to properly account for and pay our tax liabilities each quarter
As GoldWise we need to be able to provide clear and transparent company accounts at the end of each year including revenue from fees and spreads and tax taken
As GoldWise we want to draw down revenue to a nominated bank account when we choose
As GoldWise we want to see a transaction log/ ledger for every company E-wallet / ledger so we can check the transactions and add them to our accounting software


Edge Cases

1.	There is an interuption when performing the recon money transfers resulting in a partial transfer of the recon report process e.g. only some of the money has been moved but the report batch has been submitted
2.	An order existing on GW but is not on Integral
3.	A fill existings on Integral but not on GW

 