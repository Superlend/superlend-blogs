---
title: "How to Borrow Crypto in DeFi: Complete Guide"
excerpt: "Learn how DeFi borrowing works, from depositing collateral to finding the cheapest rates. Compare protocols and borrow smartly across chains."
coverImage: "/assets/blog/covers/how-to-borrow-crypto-defi.png"
date: "2026-02-17T12:00:00.000Z"
published: true
category: "Guides"
author:
  name: "Superlend Team"
  picture: "/assets/blog/authors/superlend-team.png"
ogImage:
  url: "/assets/blog/covers/how-to-borrow-crypto-defi.png"
---

DeFi borrowing lets you take loans against your crypto without selling it. You deposit collateral – like ETH or WBTC – borrow another asset like USDC, and repay when you're ready. No credit checks, no paperwork, no intermediaries. The entire process runs on smart contracts that execute automatically.

**DeFi borrowing is an overcollateralized loan system where you lock crypto assets in a smart contract and receive a different asset in return, paying variable interest until you repay.** If your collateral's value drops too far, the protocol liquidates part of it to protect lenders.

Superlend is a non-custodial DeFi lending aggregator that lets you compare borrow rates across 350+ money markets on 11+ chains – so you can find the cheapest rate before you take out a loan.

## Why Borrow in DeFi?

Borrowing against your crypto instead of selling it unlocks several strategies that traditional finance makes difficult or impossible.

### Access Liquidity Without Selling

This is the most common reason people borrow in DeFi. You hold ETH and need dollars, but selling means giving up future upside and triggering a taxable event. Borrow USDC against your ETH instead – you keep your ETH exposure while getting the liquidity you need. When ETH appreciates, your collateral grows while your debt stays the same.

### Tax Optimization

In many jurisdictions, borrowing against crypto is not a taxable event – selling is. If you need cash but don't want to realize capital gains, borrowing can be more tax-efficient than selling. Consult a tax professional for your specific situation.

### Leverage Trading

Experienced traders use DeFi borrowing to amplify their positions. Deposit ETH, borrow USDC, buy more ETH, deposit again. This loop increases your ETH exposure beyond what you originally held. It also increases your risk – if ETH drops, you face liquidation on a larger position.

### Yield Farming Capital

Borrow stablecoins against your blue-chip crypto to deploy into yield farming opportunities. Your collateral sits earning its own yield (especially if it's a liquid staking token), while the borrowed funds generate additional returns elsewhere. The strategy works when the yield you earn exceeds the borrow interest you pay.

### Short Selling

To short an asset in DeFi, you borrow it and immediately sell. If the price drops, you buy it back cheaper, repay the loan, and keep the difference. DeFi makes this accessible to anyone – no broker, no margin account, no restrictions on which assets you can short.

## How DeFi Borrowing Works – Step by Step

The mechanics are straightforward once you understand the flow. Every lending protocol follows the same basic pattern.

### 1. Connect Your Wallet

Go to a lending protocol – Aave v3, Morpho Blue, Compound, or use [Superlend](https://app.superlend.xyz) to compare across all of them. Connect your wallet (MetaMask, Rabby, Coinbase Wallet, or any WalletConnect-compatible wallet). No account creation, no KYC.

### 2. Deposit Collateral

Choose which asset to deposit as collateral. Common choices include ETH, WBTC, wstETH, and stablecoins like USDC or USDT. Each asset has different parameters – some allow higher borrowing power than others.

When you deposit, your crypto goes directly into the protocol's smart contract. Superlend never holds your funds – everything flows through the underlying protocol you choose.

### 3. Choose What to Borrow and How Much

Once your collateral is deposited, you can borrow against it. Select the asset you want (USDC, USDT, ETH, DAI) and the amount. The protocol shows you exactly how much you can borrow based on your collateral's value and the asset's loan-to-value ratio.

A general rule: borrow less than your maximum to leave a safety buffer. Borrowing 50-60% of your maximum gives you room if your collateral's price fluctuates.

### 4. Monitor Your Health Factor

After borrowing, your position has a health factor – a number that tells you how close you are to liquidation. Above 1.0 means you're safe. Below 1.0 means your collateral can be liquidated.

Watch this number, especially during volatile markets. If your collateral's price drops or the asset you borrowed increases in value, your health factor decreases. You can improve it by adding more collateral or repaying part of your debt.

For a deeper look at managing your health factor, see our guide on [how to avoid liquidation](/posts/how-to-avoid-liquidation).

### 5. Repay and Unlock Your Collateral

When you're ready, repay the borrowed amount plus accrued interest. The protocol releases your collateral, and you're done. There's no fixed repayment schedule – you can repay anytime, partially or in full.

Interest accrues continuously and compounds. The longer you keep the loan open, the more interest you owe. Variable rates mean your borrowing cost changes based on market demand.

## Key Concepts Every Borrower Needs to Know

These terms appear on every lending protocol. Understanding them is the difference between borrowing safely and getting liquidated.

### LTV (Loan-to-Value) Ratio

**LTV is the percentage of your collateral's value that you can borrow.** If ETH has an 80% LTV, you can borrow up to $800 for every $1,000 of ETH deposited. Different assets have different LTVs based on their volatility and liquidity – stablecoins have higher LTVs (up to 90%), while volatile tokens have lower ones (60-75%).

### Health Factor

Your health factor is calculated as: (collateral value x liquidation threshold) / total debt. A health factor of 2.0 means your collateral would need to lose half its value before liquidation. A health factor of 1.1 means you're dangerously close. Most experienced borrowers aim to keep their health factor above 1.5.

### Liquidation Threshold

The liquidation threshold is the point at which your position becomes eligible for liquidation. It's always higher than the LTV – for example, ETH might have an 80% LTV but an 82.5% liquidation threshold. That gap gives you a small buffer, but not much.

When liquidation happens, the protocol sells enough of your collateral to bring the position back to a safe ratio. You also pay a liquidation penalty – typically 5-10% of the liquidated amount. Liquidation is expensive, and avoiding it is the single most important skill in DeFi borrowing.

### Variable vs Stable Interest Rates

Most DeFi borrow rates are variable – they move up and down based on utilization of the lending pool. When many people borrow from a pool, rates increase. When utilization drops, rates decrease. Rates can shift significantly in hours during volatile markets.

Some protocols offer stable-rate options, but these come at a premium and aren't truly fixed – they can still be rebalanced under extreme conditions.

### Collateral Factor

Not all assets can serve as collateral, and those that can have different borrowing power. Collateral factor determines how much a specific asset contributes to your borrowing capacity. High-quality assets like ETH and USDC have high collateral factors. Newer or less liquid tokens may have lower factors or may not be accepted as collateral at all.

## Where to Borrow: Comparing Protocols

Not all lending protocols are the same. They differ in rates, supported assets, risk parameters, and design philosophy. Here's how the major protocols compare for borrowers.

### Aave v3

- Largest DeFi lending protocol by TVL
- Available on Ethereum, Arbitrum, Base, Optimism, Polygon, Avalanche, and more
- Deep liquidity means less slippage and more stable rates
- E-mode (efficiency mode) allows higher LTV for correlated assets (like ETH/wstETH)
- Mature governance and extensive audit history

### Morpho Blue

- Permissionless isolated lending markets
- Each market has its own parameters – collateral asset, loan asset, LTV, oracle, and interest rate model
- No governance approval needed to create a market
- Often offers competitive rates because of its lean design
- Morpho Vaults provide curated strategies on top of Morpho Blue

### Compound

- One of the original DeFi lending protocols, battle-tested since 2018
- Simpler interface and straightforward mechanics
- Compound v3 uses a single-borrowable-asset model per deployment (e.g., borrow only USDC on the USDC market)
- Strong track record and broad integration across DeFi

### Euler v2

- Modular vault architecture with customizable risk parameters
- Supports a wider range of collateral types than many competitors
- Flexible interest rate models that can be tailored per vault
- Good option for borrowers seeking less common asset pairs

### Fluid

- Capital-efficient lending with innovative position management
- Smart Debt and Smart Collateral features allow your borrowed assets or collateral to remain productive
- Tight integration between lending and DEX liquidity
- Growing presence on Ethereum mainnet and L2s

For a detailed breakdown of how these protocols differ, check our [Aave vs Compound comparison](/posts/aave-vs-compound) and the [complete guide to DeFi lending](/posts/complete-guide-to-defi-lending).

## How to Find the Cheapest Borrow Rates

Borrow rates vary significantly across protocols and chains – the same asset can have a 2-5% difference depending on where you borrow. Most borrowers pick one protocol and never check alternatives, leaving money on the table.

### Why Rates Differ

Each protocol sets rates based on its own supply-demand dynamics. A USDC pool on Aave v3 on Ethereum might have 4.5% borrow APR while the same asset on Compound on Base charges 2.8%. Different chains attract different liquidity, and smaller pools can have either very high or very low rates depending on utilization.

### Rate Differences Add Up

On a $100,000 borrow position, a 2% rate difference means $2,000 per year in extra interest. Over the life of a multi-month position, checking rates across protocols and chains before borrowing can save you thousands.

### How Superlend Aggregates Borrow Rates

Superlend pulls real-time borrow rates from 350+ money markets across 11+ chains into a single dashboard. Instead of manually checking Aave on Ethereum, then Compound on Base, then Morpho on Arbitrum – you see every option side by side.

The [Discover page on Superlend](https://app.superlend.xyz/discover) lets you filter by the asset you want to borrow, sort by rate, and compare across every supported protocol and chain. You find the cheapest rate in seconds instead of spending an hour checking individual protocol interfaces.

## Step-by-Step: Borrowing With Superlend

Here's how to find the best borrow rate and execute your loan through Superlend.

### 1. Visit the Discover Page

Go to [app.superlend.xyz/discover](https://app.superlend.xyz/discover). This shows all available lending and borrowing markets across supported protocols and chains.

### 2. Filter by the Asset You Want to Borrow

Use the asset filters to find the token you want to borrow – USDC, USDT, ETH, WBTC, or any other supported asset. The view narrows to show only markets where that asset is available.

### 3. Sort by Borrow Rate

Switch to the borrow view and sort by rate (lowest first). You'll see which protocol on which chain offers the cheapest rate for your chosen asset right now.

### 4. Compare Across Protocols and Chains

Don't just look at the rate – check the protocol, chain, available liquidity, and LTV parameters. A slightly higher rate on a more liquid market might be worth it for a larger position. Consider gas costs too – borrowing on an L2 like Base or Arbitrum costs fractions of a cent compared to $10-50 on Ethereum mainnet.

### 5. Execute in One Click

Once you've picked the best market, execute directly through Superlend. Your funds go straight to the underlying protocol – Superlend routes the transaction but never holds your assets. If you need to bridge assets to another chain first, Superlend handles cross-chain transactions as well.

## Common Borrowing Mistakes to Avoid

DeFi borrowing rewards careful risk management and punishes carelessness. These are the mistakes that cost borrowers the most.

### Borrowing Too Close to the Liquidation Threshold

If your health factor is 1.05, even a small price movement can trigger liquidation. Liquidation penalties are typically 5-10%, meaning you lose a significant chunk of your collateral. Keep your health factor above 1.5 – ideally above 2.0 for volatile collateral.

### Ignoring Rate Changes

Variable rates can spike during high-demand periods. A 3% borrow rate can jump to 8-10% within hours during market volatility or a DeFi liquidity crunch. Monitor your borrow rate and be prepared to repay or refinance if rates become unsustainable.

### Not Monitoring Positions

DeFi positions need active management. Set up alerts for health factor changes – many protocols and portfolio tools offer this. Checking your position once a week might not be enough during volatile markets. A 20% price drop overnight can push you from comfortable to liquidated.

### Using Volatile Collateral Without Buffer

Borrowing against a small-cap token with 50% daily swings is very different from borrowing against ETH or WBTC. If your collateral can lose 30% in a day, you need a much larger safety buffer. Either keep your LTV ratio low or use more stable collateral.

### Ignoring Gas Costs on Layer 1

Adding collateral or repaying on Ethereum mainnet can cost $10-50+ per transaction. If you need to urgently add collateral to avoid liquidation during a gas spike, those costs add up fast. Consider borrowing on L2s where transactions cost fractions of a cent, giving you more flexibility to manage your position.

### Borrowing Without a Clear Repayment Plan

Every borrow position accrues interest. If you're borrowing without a plan for how you'll repay – or a strategy that generates returns exceeding your borrow cost – you're bleeding money. Calculate the total cost of your loan over your expected holding period before borrowing.

## DeFi Borrowing Rates – Where to Start

If you're new to DeFi borrowing, start small. Deposit a modest amount of ETH or stablecoins, borrow a small fraction of your maximum, and get comfortable with the mechanics before scaling up. Use Superlend to compare rates across protocols so you're not overpaying from the start.

For borrowers looking to understand the broader DeFi lending landscape – including how lending rates work on the supply side – our [complete guide to DeFi lending](/posts/complete-guide-to-defi-lending) covers both sides of the equation. And if risk management is your concern, read [is DeFi lending safe](/posts/is-defi-lending-safe) for an honest breakdown of what can go wrong and how to protect yourself.

The best rate for your borrow position is already live somewhere across 350+ markets. [Find it on Superlend](https://app.superlend.xyz/discover).

---

*Rates are variable and subject to change. Not financial advice. DeFi borrowing involves risks including liquidation if collateral value drops. Only borrow what you can afford to repay. DYOR.*
