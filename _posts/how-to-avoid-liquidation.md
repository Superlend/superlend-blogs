---
title: "How to Avoid Liquidation in DeFi Lending"
excerpt: "Practical strategies to protect your DeFi positions from liquidation. Learn health factors, buffer ratios, and monitoring tools to keep your collateral safe."
coverImage: "/assets/blog/covers/how-to-avoid-liquidation.webp"
date: "2026-02-17T12:00:00.000Z"
published: true
category: "Guides"
author:
  name: "Superlend Team"
  picture: "/assets/blog/authors/superlend-team.png"
ogImage:
  url: "/assets/blog/covers/how-to-avoid-liquidation.webp"
---

Liquidation happens when the value of your collateral drops below the minimum ratio your lending protocol requires. When that threshold is breached, anyone can repay part of your debt and claim your collateral at a discount – costing you 5-15% of your position in a single transaction. The good news: liquidation is entirely preventable if you understand how it works and follow a few practical rules.

**Liquidation in DeFi is the forced sale of your collateral when your loan's health factor drops below 1.0, typically triggered by a decline in collateral value or an increase in borrowed asset value.**

Superlend is a non-custodial DeFi lending aggregator that helps you compare rates, risk parameters, and loan-to-value ratios across protocols like Aave v3, Compound, and Morpho Blue from a single dashboard. Understanding liquidation mechanics across these protocols is essential for anyone borrowing in DeFi – and this guide gives you the practical tools to stay safe.

## How Liquidation Actually Works

Every DeFi lending position has three numbers that determine whether you get liquidated: the loan-to-value ratio (LTV), the liquidation threshold, and the health factor. Understanding the relationship between these three is the single most important thing you can do to protect your positions.

### Loan-to-Value Ratio (LTV)

LTV is the percentage of your collateral's value that you can borrow. If a protocol sets a maximum LTV of 80% for ETH, you can borrow up to $800 against $1,000 of ETH collateral. Different assets and protocols have different maximum LTVs – stablecoins are typically higher (85-90%), while volatile assets are lower (70-80%).

### Liquidation Threshold

The liquidation threshold is always higher than the maximum LTV – it is the point at which your position becomes eligible for liquidation. For example, Aave v3 might set a maximum LTV of 80% for ETH but a liquidation threshold of 82.5%. That 2.5% gap is your safety buffer between max borrowing and liquidation.

### Health Factor

**Your health factor is the ratio of your collateral value (adjusted by the liquidation threshold) to your outstanding debt. When it drops below 1.0, your position can be liquidated.**

The formula is straightforward:

- Health Factor = (Collateral Value x Liquidation Threshold) / Total Debt

If you deposit $10,000 of ETH with an 82.5% liquidation threshold and borrow $7,000 USDC, your health factor is ($10,000 x 0.825) / $7,000 = 1.18. If ETH drops 15%, your collateral falls to $8,500, and your health factor becomes ($8,500 x 0.825) / $7,000 = 1.0 – you are now at the liquidation boundary.

### What Happens During Liquidation

When your health factor hits 1.0, liquidator bots – automated programs that monitor the blockchain – can repay a portion of your debt and seize the equivalent collateral plus a bonus (typically 5-10%). On Aave v3, up to 50% of your position can be liquidated in a single transaction. That liquidation penalty is money you lose permanently.

For a thorough overview of how DeFi lending works end-to-end, read the [complete guide to DeFi lending](/posts/complete-guide-to-defi-lending).

## 5 Practical Strategies to Avoid Liquidation

### 1. Monitor Your Health Factor Relentlessly

Your health factor is the single number that determines whether you keep your collateral or lose it. Different asset types require different safety buffers:

- **Volatile collateral (ETH, WBTC):** Maintain a health factor of 1.5 or higher. ETH can drop 20-30% in a severe market correction – a 1.5 health factor gives you room to survive a 30% drawdown without liquidation.
- **Stablecoin collateral (USDC, USDT, DAI):** A health factor of 1.3 or higher is generally sufficient. Stablecoins rarely deviate more than a few percent from their peg, though depegging events (like USDC briefly dropping to $0.87 in March 2023) do happen.
- **LST collateral (wstETH, rETH, cbETH):** Target 1.4 or higher. These assets track ETH closely but carry additional smart contract risk and can trade at a discount to ETH during volatile periods.

Check your health factor daily at minimum. During periods of high market volatility, check multiple times per day.

### 2. Use Stablecoin Collateral When Possible

The simplest way to reduce liquidation risk is to borrow against collateral that does not fluctuate in value. Depositing USDC as collateral and borrowing USDT (or vice versa) creates a position where both sides of the trade are pegged to the same value. Your health factor barely moves regardless of what happens in the broader crypto market.

This strategy works particularly well for:

- Funding short-term trades without selling your stablecoins
- Taking advantage of rate differentials between lending and borrowing
- Maintaining positions through uncertain market conditions

The tradeoff is that you give up potential upside. If you collateralize with ETH and ETH rises 50%, your health factor improves dramatically. Stablecoin collateral stays flat – but it also stays safe.

### 3. Set Up Alerts and Monitoring Tools

Relying on manual checks is a recipe for missed warnings. Use automated monitoring to watch your positions:

- **DeFi Saver** offers automatic health factor monitoring with configurable alert thresholds. You can set notifications at 1.5, 1.3, and 1.1 to get progressively urgent warnings.
- **Instadapp** provides portfolio management with alert features for positions across multiple protocols.
- **Protocol-native dashboards** – Aave v3 shows your health factor prominently on the dashboard. Compound displays your borrowing capacity in real time.
- **Superlend** lets you [monitor your positions across multiple protocols](https://app.superlend.xyz/portfolio) from a single dashboard, so you can see all your health factors in one place instead of checking each protocol separately.

Set your first alert at 1.5 (early warning), a second at 1.3 (take action), and a final alert at 1.15 (emergency). This tiered approach gives you time to respond before the situation becomes critical.

### 4. Never Max Out Your Borrowing Limit

Just because a protocol lets you borrow 80% of your collateral value does not mean you should. Borrowing at maximum LTV leaves you with almost no buffer – even a small price movement can push you into liquidation territory.

A practical rule of thumb:

- **Conservative:** Borrow no more than 50% of the maximum LTV. If max LTV is 80%, borrow up to 40% of your collateral value.
- **Moderate:** Borrow no more than 65% of max LTV. This gives you a reasonable buffer while still being capital efficient.
- **Aggressive (higher risk):** Borrowing above 75% of max LTV. Only appropriate for stablecoin-to-stablecoin positions or if you have automated liquidation protection in place.

The math is clear. If you deposit $10,000 of ETH with 80% max LTV and borrow the full $8,000, a 3% drop in ETH puts you in danger. If you borrow only $5,000, ETH would need to fall roughly 40% before you face liquidation. That buffer is what keeps you sleeping at night.

### 5. Use Protocols With Gradual Liquidation Mechanisms

Not all protocols liquidate the same way. Some are more punitive than others, and choosing the right protocol can significantly reduce the damage if liquidation does occur.

- **Aave v3:** Liquidates up to 50% of your position at once, with a 5-10% liquidation bonus (penalty for you). This is a standard approach – aggressive but well-understood.
- **Morpho Blue:** Uses isolated markets where each position has its own parameters. The liquidation mechanism in Morpho Blue allows for more granular control over risk. Because markets are isolated, a liquidation event in one market does not cascade to others. Learn more in the [Morpho lending guide](/posts/morpho-lending-guide).
- **Compound:** Similar to Aave in mechanics, with a close factor that determines how much of your position can be liquidated in a single transaction.

The key insight: protocols with isolated markets (like Morpho Blue) contain risk to individual positions. If you have multiple lending positions, isolating them across different markets means one bad position does not drag down the others.

## Risk by Collateral Type

Not all collateral carries the same liquidation risk. The asset you use as collateral fundamentally shapes how much danger your position faces.

### ETH as Collateral

ETH is the most commonly used collateral in DeFi, with deep liquidity and wide protocol support. It also carries meaningful price volatility – 20-30% drawdowns happen multiple times per year, and 40-50% crashes have occurred during major market events. When using ETH as collateral, maintain a health factor above 1.5 and check the current lending parameters on [Superlend's discover page](https://app.superlend.xyz/discover) to compare LTV ratios across protocols. For more on ETH lending dynamics, see the [ETH lending rates guide](/posts/eth-lending-rates).

### BTC (WBTC) as Collateral

Wrapped Bitcoin is less volatile than ETH on average, but carries additional smart contract risk from the wrapping mechanism. WBTC typically has slightly lower maximum LTV ratios than ETH on most protocols (75% vs 80% on Aave v3). The biggest WBTC-specific risk is a depegging event where WBTC trades at a discount to BTC – this happened briefly in late 2022 when FTX collapsed and concerns about the WBTC custodian surfaced. Maintain at least a 1.5 health factor.

### Stablecoins as Collateral

Using stablecoins as collateral is the lowest-risk approach. USDC and USDT on Aave v3 have liquidation thresholds above 90%, and since these assets trade near $1, your health factor is inherently stable. The primary risk is a depegging event – rare but not impossible. If you are borrowing stablecoins against stablecoin collateral, a health factor of 1.3 is typically sufficient.

### Liquid Staking Tokens (LSTs) as Collateral

Assets like wstETH, rETH, and cbETH trade at a value correlated with but not identical to ETH. They carry all the price risk of ETH plus additional smart contract risk from the staking protocol. LSTs can also trade at a discount to their underlying value during periods of high redemption demand or market stress. Target a health factor of at least 1.4 when using LSTs as collateral.

## What to Do When Approaching Liquidation

If your health factor is dropping and you are approaching the danger zone, you have several options – ranked from fastest to most involved.

### Add More Collateral (Fastest)

The simplest fix: deposit more of the same collateral asset into your position. This immediately increases the numerator in your health factor calculation. If your ETH position is approaching liquidation, adding more ETH raises your collateral value and pushes the health factor back up. Downside: you are increasing your exposure to the same asset that might be falling in price.

### Repay Part of Your Debt

Reducing the denominator in the health factor formula is equally effective. If you have available stablecoins, repay a portion of your borrowed amount. Even repaying 20-30% of your debt can dramatically improve your health factor. This is often the better option when the collateral asset is declining because you are reducing exposure rather than increasing it.

### Switch to a Safer Position

If you have time before liquidation hits, consider restructuring entirely:

1. Repay your full debt on the current protocol
2. Withdraw your collateral
3. Re-deposit on a protocol with more favorable liquidation parameters
4. Borrow again at a lower, safer LTV

Superlend makes this comparison straightforward – use the [discover page](https://app.superlend.xyz/discover) to compare LTV ratios, liquidation thresholds, and borrowing rates across 350+ markets. A protocol with a higher liquidation threshold or lower liquidation penalty could save you significant money if the worst happens.

### Use DeFi Saver Automation (Preventative)

DeFi Saver offers automated position management that can add collateral or repay debt automatically when your health factor drops below a configured threshold. Setting this up before you need it is far better than scrambling during a market crash. The gas costs during high-volatility periods can be substantial, so factor that into your strategy.

## How Superlend Helps You Stay Safe

Managing liquidation risk gets exponentially harder when your positions are spread across multiple protocols and chains. Superlend addresses this directly:

- **Unified portfolio view:** Monitor health factors across Aave v3, Compound, Morpho Blue, Euler v2, and other protocols from a [single dashboard](https://app.superlend.xyz/portfolio). No more switching between protocol interfaces to check each position.
- **Protocol comparison:** Before opening a position, compare LTV ratios, liquidation thresholds, and liquidation penalties across 350+ markets on the [discover page](https://app.superlend.xyz/discover). A 2% difference in liquidation threshold can be the difference between getting liquidated and surviving a drawdown.
- **Rate comparison:** Find the lowest borrowing rates to minimize the ongoing cost of your positions. Lower rates mean your debt grows slower, keeping your health factor healthier over time.

Superlend does not custody your funds – everything executes directly on the underlying protocol. The aggregation layer simply gives you better visibility and decision-making tools to manage your positions safely.

## Key Takeaways

Avoiding liquidation is not about luck – it is about discipline and preparation. The five rules that matter most:

1. **Keep your health factor above 1.5 for volatile assets and 1.3 for stablecoins.** This single rule prevents the majority of liquidations.
2. **Never borrow more than 65% of your maximum LTV.** The remaining buffer is your insurance policy.
3. **Set up automated alerts** before you need them. When markets are crashing, you want notifications, not manual checking.
4. **Have a plan before crisis hits.** Know whether you will add collateral or repay debt, and have the assets ready to act.
5. **Use tools like Superlend** to monitor all positions in one place and compare protocols for the safest parameters.

Liquidation is the most expensive mistake in DeFi lending – but it is also the most avoidable. Every liquidation that has ever occurred could have been prevented with adequate collateral, proper monitoring, and disciplined borrowing limits.

For deeper context on the broader risks in DeFi lending, read [Is DeFi Lending Safe?](/posts/is-defi-lending-safe) to understand smart contract risk, protocol risk, and other factors that affect your positions.

---

*Not financial advice. DeFi involves risks including smart contract vulnerabilities and market volatility. Leveraged positions carry additional risk of liquidation. Only use funds you can afford to lose. DYOR.*
