---
title: "Impermanent Loss Explained: What DeFi Users Need to Know"
excerpt: "Understand impermanent loss in DeFi liquidity pools. Learn how it works, when it matters, and proven strategies to minimize its impact on your returns."
coverImage: "/assets/blog/covers/impermanent-loss-explained.png"
date: "2026-02-03T12:00:00.000Z"
published: true
category: "DeFi Basics"
author:
  name: "Superlend Team"
  picture: "/assets/blog/authors/superlend-team.png"
ogImage:
  url: "/assets/blog/covers/impermanent-loss-explained.png"
---

Impermanent loss is the reduction in value that liquidity providers experience when the price of their deposited assets changes compared to simply holding them. It occurs exclusively in automated market maker (AMM) liquidity pools and represents one of the most misunderstood risks in DeFi.

If you provide liquidity to decentralized exchanges like Uniswap, Curve, or Balancer, understanding impermanent loss is essential. Without this knowledge, you might earn trading fees while losing more in asset value shifts. This guide breaks down how impermanent loss works, when it becomes permanent, and how to minimize its impact on your DeFi strategy.

---

## What is Impermanent Loss?

Impermanent loss (IL) is the difference between holding assets in your wallet versus providing them as liquidity in an AMM pool. When you deposit two assets into a liquidity pool, the AMM automatically rebalances your holdings as prices change. This rebalancing can leave you with less total value than if you had simply held the original assets.

### A Simple Example

Suppose you deposit $1,000 worth of ETH and $1,000 worth of USDC into a 50/50 liquidity pool on Uniswap. Your total position is worth $2,000.

Now imagine ETH doubles in price:

**If you had just held your assets:**
- Your ETH is now worth $2,000
- Your USDC is still worth $1,000
- Total value: $3,000

**As a liquidity provider:**
- The pool rebalances to maintain the 50/50 ratio
- You now have less ETH and more USDC
- Your position might be worth approximately $2,828
- You've experienced roughly $172 in impermanent loss

The loss is called "impermanent" because if ETH returns to its original price, your loss disappears. But if you withdraw while prices are different from when you deposited, the loss becomes permanent.

---

## How Impermanent Loss Works

To understand impermanent loss, you need to understand how AMMs function.

### AMM Mechanics

Traditional exchanges use order books where buyers and sellers set specific prices. AMMs work differently – they use mathematical formulas to determine prices based on the ratio of assets in a pool.

The most common formula is the constant product formula used by [Uniswap](https://docs.uniswap.org/):

```
x * y = k
```

Where:
- **x** = quantity of token A in the pool
- **y** = quantity of token B in the pool
- **k** = a constant that must remain the same

When someone trades token A for token B, they add token A to the pool and remove token B. The formula ensures that the product of the two quantities stays constant, which automatically adjusts the price.

### Why Rebalancing Causes Loss

When the external market price of an asset changes, arbitrage traders immediately exploit the price difference between the AMM and other exchanges. They buy the cheaper asset from the pool and sell it elsewhere until the pool price matches the market price.

This arbitrage activity is what rebalances your position. If ETH becomes more valuable, arbitrageurs remove ETH from the pool and add stablecoins. As a liquidity provider, you end up with:

- **Less of the appreciating asset** (ETH in our example)
- **More of the stable or depreciating asset** (USDC)

The pool automatically sells your winners and buys your losers – the opposite of what you'd want as an investor.

### Price Divergence is What Matters

Impermanent loss depends on how much the price ratio between your two assets changes, not the direction. Whether ETH doubles or halves, you experience similar impermanent loss. What matters is the magnitude of the divergence from your entry price.

The relationship is non-linear. Small price changes cause minimal impermanent loss, but large moves create increasingly significant losses.

---

## Calculating Impermanent Loss

The math behind impermanent loss follows a specific formula. For a 50/50 pool, impermanent loss can be calculated as:

```
IL = 2 * sqrt(price_ratio) / (1 + price_ratio) - 1
```

Where price_ratio = new price / original price.

### Impermanent Loss by Price Change

Here's what impermanent loss looks like at various price changes:

- **1.25x price change (25% increase):** 0.6% impermanent loss
- **1.5x price change (50% increase):** 2.0% impermanent loss
- **2x price change (100% increase):** 5.7% impermanent loss
- **3x price change (200% increase):** 13.4% impermanent loss
- **4x price change (300% increase):** 20.0% impermanent loss
- **5x price change (400% increase):** 25.5% impermanent loss

The same percentages apply to price decreases. If ETH drops 50% (0.5x), you experience roughly 5.7% impermanent loss – identical to a 2x increase.

### Real-World Calculation Example

Let's work through a specific scenario:

**Initial deposit:**
- 1 ETH worth $2,000
- 2,000 USDC
- Total value: $4,000

**After ETH rises to $4,000:**
- The pool rebalances
- You now have approximately 0.707 ETH and 2,828 USDC
- Your pool position value: 0.707 * $4,000 + $2,828 = $5,656

**If you had just held:**
- 1 ETH * $4,000 = $4,000
- 2,000 USDC = $2,000
- Total: $6,000

**Impermanent loss:**
- $6,000 - $5,656 = $344
- As a percentage: 5.7%

Your pool position still increased in value – from $4,000 to $5,656. But you missed out on $344 of gains compared to simply holding. This is the core tension of liquidity provision: you earn trading fees but give up some upside from price movements.

---

## When Impermanent Loss Becomes Permanent

The term "impermanent" suggests the loss can reverse. That's technically true but often misleading in practice.

### The Reversal Myth

Impermanent loss only fully reverses if:
1. The price ratio returns exactly to your entry point
2. You haven't withdrawn during the divergence

In reality, prices rarely return to exact entry points. If you deposited when ETH was $2,000 and it's now trading at $3,500, waiting for it to return to $2,000 might take months or years – if it ever happens.

### When You Lock In Losses

Impermanent loss becomes permanent when you:

- **Withdraw your liquidity** while prices differ from entry
- **The price permanently diverges** and never returns
- **The pool migrates or closes** forcing withdrawal

Even if you never withdraw, your loss is economically real. The assets in your pool position have less value than they would if you had held them separately.

### The Opportunity Cost Frame

Some argue impermanent loss isn't a "real" loss because your pool position can still be in profit. This is technically true but misses the point.

If your pool position is worth $5,656 but holding would be worth $6,000, you've underperformed by $344. Whether you call that a "loss" or "opportunity cost," it represents real money you could have had. Profitable liquidity provision requires earning enough in fees and incentives to overcome impermanent loss.

---

## Impermanent Loss vs Lending

Here's a critical distinction many DeFi users overlook: **lending protocols do not have impermanent loss.** This fundamental difference makes lending an attractive alternative for earning yield without exposure to AMM mechanics.

### Why Lending Has No Impermanent Loss

When you lend assets through protocols like Aave, Compound, or Morpho:

- You deposit a single asset (like USDC or ETH)
- The protocol lends it to borrowers
- You earn interest on that same asset
- You withdraw the same asset plus accrued interest

There's no second asset, no price ratio to maintain, and no rebalancing mechanism. If you deposit 1 ETH and earn 3% APY, you get back 1.03 ETH. Simple.

### The Lending Advantage

Consider two scenarios with $10,000:

**Scenario A: Liquidity Provision**
- Deposit $5,000 ETH + $5,000 USDC in a Uniswap pool
- ETH doubles in price
- Earn 20% APY in trading fees
- After impermanent loss, your net gain might be 14%

**Scenario B: DeFi Lending**
- Deposit $10,000 USDC on Aave
- Earn 5% APY
- No impermanent loss exposure
- Your gain is 5% with no asset rebalancing

The lending scenario offers lower headline returns but with far more predictable outcomes. You retain full exposure to whatever asset you deposit without automatic rebalancing working against you.

### When to Choose Lending Over LP

Lending through protocols aggregated on [Superlend](https://app.superlend.xyz/discover) makes more sense when:

- You believe one asset will significantly outperform
- You want predictable yield without rebalancing risk
- You prefer simpler position management
- You want exposure to a single asset rather than a pair

For a comprehensive overview of how DeFi lending works, see our [Complete Guide to DeFi Lending](/posts/complete-guide-to-defi-lending).

![DeFi lending as an alternative to liquidity pools without impermanent loss risk](/assets/screenshots/superlend-discover-feb2026.png)
*Superlend aggregates lending opportunities without impermanent loss risk.*

---

## Strategies to Minimize Impermanent Loss

If you still want to provide liquidity, several strategies can reduce your impermanent loss exposure.

### 1. Choose Correlated Asset Pairs

Impermanent loss stems from price divergence between assets. If both assets move together, divergence is minimal.

**Best pairs for low IL:**
- Stablecoin pairs (USDC/USDT, DAI/USDC)
- Same-asset pairs (ETH/stETH, wBTC/renBTC)
- Highly correlated assets (ETH/WETH derivatives)

Stablecoin pools on Curve can yield 3-8% with near-zero impermanent loss because the assets are designed to maintain the same $1 peg. Learn more about [stablecoin yield strategies](/posts/stablecoin-yield-strategies).

### 2. Use Concentrated Liquidity Ranges

Protocols like Uniswap V3 let you provide liquidity within specific price ranges. This concentrates your capital where trades actually occur, earning more fees per dollar deployed.

However, concentrated liquidity is a double-edged sword. If the price moves outside your range:
- You earn zero fees
- You hold 100% of one asset
- Your impermanent loss is maximized for that range

Use tight ranges only if you actively manage positions and understand the amplified risks.

### 3. Select Stablecoin Pools

The safest liquidity provision involves stablecoin-only pools. With assets designed to stay at $1, impermanent loss is minimal under normal conditions.

**Risks to consider:**
- Depeg events can cause sudden, severe IL
- Yields are lower than volatile pairs
- Some stablecoins carry regulatory or counterparty risk

### 4. Factor in Fee APY

Sometimes high trading volume generates enough fees to offset impermanent loss. Before providing liquidity, calculate:

- Historical fee APY for the pool
- Expected impermanent loss based on volatility
- Net expected return (fees minus IL)

A pool with 50% fee APY and 20% expected impermanent loss still yields positive returns. But a 5% fee pool with the same IL exposure loses money.

### 5. Consider Hedging Strategies

Sophisticated LPs use derivatives to hedge impermanent loss:

- **Shorting the volatile asset:** Offsets losses from price increases
- **Options strategies:** Buying puts or calls to cap downside
- **Perpetual futures:** Creating delta-neutral positions

These strategies require advanced knowledge and add complexity and costs. Most retail users are better served by choosing appropriate pools rather than attempting complex hedges.

### 6. Use Single-Sided Liquidity

Some protocols offer single-sided liquidity provision, where you deposit only one asset. The protocol handles the rebalancing internally, often through different mechanisms that can reduce (but not eliminate) impermanent loss exposure.

---

## Frequently Asked Questions

**Can impermanent loss exceed my trading fee earnings?**

Yes, and it frequently does. In volatile markets with low trading volume, impermanent loss can significantly exceed fee earnings. A pool might earn 10% APY in fees while suffering 25% impermanent loss during a major price move. Always compare expected IL against historical fee APY before providing liquidity. Volatile asset pairs require high fee APY to be profitable.

**Is impermanent loss a concern if I'm bullish on both assets?**

Yes, because impermanent loss occurs regardless of price direction. If you're bullish on ETH and it rises 100%, you experience 5.7% impermanent loss even though both your assets increased in value. The rebalancing mechanism forces you to sell ETH as it rises, reducing your gains compared to holding. Being bullish on assets is actually an argument for holding rather than LPing – you keep full exposure to the upside.

**Why would anyone provide liquidity if impermanent loss exists?**

Liquidity provision can still be profitable when trading fees and token incentives exceed impermanent loss. Stablecoin pools offer yield with minimal IL risk. Some LPs use sophisticated hedging strategies. Others provide liquidity for tokens they're happy to accumulate regardless of price. The key is understanding the tradeoffs and choosing pools where the economics make sense for your situation.

---

## Conclusion

Impermanent loss is an unavoidable feature of AMM liquidity provision. Every time prices diverge from your entry point, the pool's rebalancing mechanism works against you, leaving you with less value than simple holding would provide.

Understanding impermanent loss helps you make better decisions:

- **Calculate expected IL** before entering any pool
- **Compare IL to fee earnings** to determine likely profitability
- **Choose correlated pairs** to minimize divergence risk
- **Consider lending instead** when you want yield without rebalancing exposure

DeFi lending protocols like Aave, Compound, and Morpho – accessible through [Superlend's aggregator](https://app.superlend.xyz/discover) – offer an alternative path to yield. By depositing single assets and earning interest from borrowers, you avoid the AMM mechanics that create impermanent loss entirely.

Whether you choose liquidity provision, lending, or a combination depends on your goals, risk tolerance, and market outlook. But making that choice with full understanding of impermanent loss puts you ahead of most DeFi participants.

For those who decide lending better fits their strategy, explore current rates across 350+ money markets at [Superlend](https://app.superlend.xyz/discover). Understanding [whether DeFi lending is safe](/posts/is-defi-lending-safe) will help you evaluate protocols and manage risk appropriately.

---

*This article is for educational purposes only and does not constitute financial advice. DeFi involves risks including smart contract vulnerabilities, market volatility, and potential loss of funds. Rates and impermanent loss calculations are examples only and actual results will vary. Always conduct your own research and never invest more than you can afford to lose.*
