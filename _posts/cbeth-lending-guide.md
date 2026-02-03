---
title: "cbETH Lending: Earn Yield on Coinbase Staked ETH"
excerpt: "Learn how to maximize returns on cbETH through DeFi lending. Stack Coinbase staking rewards with lending yields for compounded returns on your ETH."
coverImage: "/assets/blog/covers/cbeth-lending-guide.png"
date: "2026-02-03T12:00:00.000Z"
published: true
author:
  name: "Superlend Team"
  picture: "/assets/blog/authors/superlend-team.png"
ogImage:
  url: "/assets/blog/covers/cbeth-lending-guide.png"
---

cbETH is Coinbase's liquid staking token representing staked ETH on the Coinbase platform, allowing holders to earn Ethereum staking rewards (currently around 2.5-3% APY) while maintaining liquidity. By lending cbETH through DeFi protocols, you can stack additional yield on top of your staking rewards, potentially earning 3-4% total APY depending on market conditions.

## What is cbETH?

cbETH (Coinbase Wrapped Staked ETH) is a liquid staking token issued by Coinbase. When users stake ETH through Coinbase, they receive cbETH in return. This token represents their staked ETH plus accumulated staking rewards.

Unlike traditional ETH staking, which locks your assets until withdrawals are enabled, cbETH provides immediate liquidity. You can trade, transfer, or use cbETH in DeFi protocols while still earning staking rewards in the background.

The cbETH token uses a reward-bearing model. Rather than rebasing (increasing the number of tokens in your wallet), cbETH appreciates in value relative to ETH over time. One cbETH will always be worth more than one ETH because it includes accumulated staking rewards since the token's inception.

Coinbase manages all validator operations, including hardware, software updates, and slashing protection. This makes cbETH attractive for users who want staking exposure without running their own validator infrastructure.

## cbETH vs Other LSTs

The liquid staking market includes several major players. Understanding how cbETH compares helps you make informed decisions about which LST to hold and lend.

### cbETH vs wstETH

wstETH (Wrapped Staked ETH) comes from Lido, the largest liquid staking provider by total value locked. Both tokens use a reward-bearing model where the token appreciates against ETH rather than rebasing.

Key differences:

- **Decentralization**: Lido operates through a distributed set of node operators, while Coinbase runs its own centralized infrastructure
- **Market share**: Lido controls approximately 30% of all staked ETH, compared to Coinbase's smaller but significant share
- **DeFi integration**: wstETH has deeper DeFi integrations and higher liquidity across more protocols
- **Regulatory exposure**: cbETH carries more regulatory risk due to Coinbase's status as a US-based, publicly traded company

### cbETH vs rETH

rETH comes from Rocket Pool, a decentralized staking protocol that allows anyone to run a node with just 8 ETH (plus RPL collateral).

Key differences:

- **Decentralization**: Rocket Pool is the most decentralized option, with permissionless node operation
- **APY**: rETH staking yields are slightly lower due to commission structures
- **Liquidity**: rETH has less liquidity than both cbETH and wstETH
- **Smart contract risk**: Rocket Pool has more complex smart contracts compared to Coinbase's custodial approach

For users already on Coinbase or those who prefer a centralized, regulated entity managing their staked ETH, cbETH offers a straightforward option. For maximum decentralization, wstETH or rETH may be preferable.

## Current cbETH Lending Rates

cbETH lending rates vary significantly by network and protocol. Here are the typical rates you can expect:

### Aave v3 on Base

Base network offers the most attractive cbETH lending opportunities:

- **Supply APY**: Approximately 0.06%
- **Additional incentives**: Some periods include OP or other token rewards
- **Utilization**: Generally low, which limits supply yields

### Aave v3 on Ethereum Mainnet

Ethereum mainnet cbETH markets show minimal lending activity:

- **Supply APY**: Near 0% in most conditions
- **Utilization**: Very low demand for cbETH borrowing
- **Gas costs**: High transaction fees reduce profitability for smaller positions

### Why Are cbETH Lending Rates Low?

Several factors contribute to relatively low cbETH lending rates:

1. **Limited borrowing demand**: Few use cases exist for borrowing cbETH specifically
2. **LST competition**: Borrowers often prefer wstETH due to higher liquidity
3. **Staking yield arbitrage is limited**: Since cbETH already earns staking rewards, there's less incentive to borrow it for yield strategies

The primary value of lending cbETH comes from using it as collateral rather than earning high supply APY. Check current rates on [Superlend's discover page](https://app.superlend.xyz/discover) to find the best opportunities across protocols.

![ETH and LST lending markets on Superlend](/assets/screenshots/superlend-eth-feb2026.png)
*ETH and liquid staking token lending opportunities, including cbETH markets.*

## Stacking Yields: Staking + Lending

The real power of cbETH comes from yield stacking. You earn multiple layers of return simultaneously:

### Layer 1: Ethereum Staking Rewards

cbETH automatically accrues ETH staking rewards, currently around 2.5-3% APY. This yield is built into the token's appreciating exchange rate against ETH. You earn this passively just by holding cbETH.

### Layer 2: Lending Supply APY

By depositing cbETH into lending protocols, you earn additional interest from borrowers. While this rate is typically low (0.01-0.1% on most platforms), it adds to your total return.

### Layer 3: Protocol Incentives

Some protocols offer token incentives for supplying cbETH. These rewards can significantly boost your effective APY during incentive campaigns. Base network has historically offered attractive incentive programs.

### Layer 4: Points and Airdrops

Newer protocols may offer points programs that could convert to token airdrops. By lending cbETH on emerging platforms, you may qualify for future token distributions.

### Example Yield Stack

Consider a $10,000 cbETH position:

- Base staking yield: 2.8% = $280/year
- Lending APY: 0.06% = $6/year
- Protocol incentives (variable): 0.5% = $50/year
- **Total**: ~3.36% = $336/year

While the lending component appears small, it compounds over time and costs nothing extra beyond gas fees to set up.

## Where to Lend cbETH

[Superlend](https://app.superlend.xyz/discover) is a non-custodial DeFi lending aggregator that helps you find the best rates across multiple protocols. Here are the primary venues for cbETH lending:

### Aave v3

Aave remains the dominant lending protocol for cbETH:

**Ethereum Mainnet**:
- Established market with deep liquidity
- Lower supply APY due to minimal borrowing demand
- High gas costs for deposits and withdrawals

**Base**:
- Lower transaction costs
- Better supply rates due to incentive programs
- Growing ecosystem with increasing adoption

### Compound v3

Compound supports cbETH on select markets:

- Generally lower utilization than Aave
- Different risk parameters and liquidation mechanics
- Worth comparing rates periodically

### Morpho

Morpho offers peer-to-peer matching on top of Aave and Compound:

- Potentially better rates through direct matching
- More complex position management
- Lower liquidity for immediate withdrawals

For a comprehensive comparison of ETH and LST lending rates, see our [ETH lending rates guide](/posts/eth-lending-rates).

## Using cbETH as Collateral

Beyond earning supply APY, cbETH's primary DeFi utility is serving as collateral for borrowing other assets.

### Collateral Parameters

On Aave v3, cbETH typically has the following parameters:

- **Loan-to-Value (LTV)**: ~67%
- **Liquidation threshold**: ~74%
- **Liquidation penalty**: ~7.5%

These conservative parameters reflect the additional smart contract and depeg risk inherent in LSTs compared to native ETH.

### Borrowing Strategies

Common strategies using cbETH as collateral:

**Stablecoin borrowing**: Deposit cbETH and borrow USDC or DAI for other investments while continuing to earn staking rewards on your collateral.

**Recursive leverage**: Borrow ETH against cbETH, swap to more cbETH, and repeat. This amplifies your staking yield but also amplifies liquidation risk.

**Cash extraction**: Access liquidity without selling your cbETH position, maintaining exposure to both ETH price and staking yield.

### Health Factor Management

When using cbETH as collateral, monitor your health factor carefully. cbETH can depeg from its expected ETH value during market stress, potentially triggering unexpected liquidations.

Set conservative LTV targets (50% or below) to account for:
- cbETH price volatility relative to ETH
- Interest rate fluctuations on borrowed assets
- Gas price spikes that could delay emergency repayments

Learn more about managing DeFi lending positions in our [complete guide to DeFi lending](/posts/complete-guide-to-defi-lending).

## Risks and Considerations

cbETH lending involves several risk categories that require careful consideration.

### Smart Contract Risk

Every interaction with DeFi protocols exposes you to smart contract vulnerabilities. While Aave and other major protocols have extensive audit histories, no smart contract is guaranteed to be exploit-free.

Mitigation: Diversify across protocols, limit position sizes, and prefer battle-tested platforms.

### Coinbase Custodial Risk

Unlike decentralized LSTs, cbETH depends on Coinbase's continued operation and honesty. Risks include:

- Regulatory action against Coinbase
- Operational failures or hacks at Coinbase
- Coinbase deciding to exit the staking business

Mitigation: Consider diversifying LST holdings across cbETH, wstETH, and rETH.

### Depeg Risk

cbETH trades on secondary markets and can deviate from its theoretical ETH value. During the FTX collapse in late 2022, cbETH temporarily traded at a 4% discount to its fair value.

Depegs can trigger liquidations if you're using cbETH as collateral and can result in losses if you need to sell during a depeg event.

Mitigation: Maintain conservative collateral ratios and avoid forced selling scenarios.

### Slashing Risk

Although rare, Ethereum validators can be slashed for misbehavior or technical failures. Coinbase would absorb some slashing losses, but severe events could impact cbETH value.

Mitigation: Coinbase has insurance and operational procedures to minimize slashing risk, but the risk is non-zero.

### Opportunity Cost

While cbETH provides staking yield plus lending income, other yield strategies may offer higher returns. Liquidity providing, active trading, or newer DeFi protocols might outperform passive cbETH lending.

For a deeper analysis of DeFi lending risks, read our guide: [Is DeFi Lending Safe?](/posts/is-defi-lending-safe)

## FAQ

**Can I lend cbETH on any network, or is it limited to specific chains?**

cbETH is available on Ethereum mainnet and has been bridged to several Layer 2 networks including Base, Arbitrum, and Optimism. The best lending opportunities are currently on Base, where lower gas costs and occasional incentive programs make lending more attractive. Ethereum mainnet has cbETH markets on Aave and Compound, but utilization and yields are minimal. Always verify you're using official cbETH contracts on any network to avoid scam tokens.

**How does cbETH lending compare to simply holding cbETH in my wallet?**

Holding cbETH in your wallet earns you the base staking yield (approximately 2.5-3% APY) with zero additional risk beyond cbETH's inherent risks. Lending cbETH adds a small amount of additional yield (typically 0.01-0.1% APY) but introduces smart contract risk from the lending protocol. The main advantage of lending comes from using cbETH as collateral to borrow other assets, enabling leverage or liquidity access without selling. For passive holders not seeking leverage, the risk-reward of lending just for supply APY may not justify the added smart contract exposure.

**What happens to my staking rewards when I lend cbETH?**

Your staking rewards continue accumulating normally when cbETH is deposited in a lending protocol. The cbETH token uses a reward-bearing model where the exchange rate between cbETH and ETH increases over time as staking rewards accrue. This appreciation happens at the token level regardless of where the cbETH is held. When you withdraw your cbETH from a lending protocol, it will be worth more ETH than when you deposited it, reflecting the accumulated staking rewards during that period plus any lending interest earned.

## Conclusion

cbETH lending offers a straightforward way to stack yield on top of your Ethereum staking rewards. While lending APYs for cbETH remain modest compared to other assets, the combination of staking yield, lending interest, and potential protocol incentives creates a compelling passive income strategy.

The most attractive cbETH lending opportunities currently exist on Base through Aave v3, where lower gas costs make smaller positions viable. Ethereum mainnet markets have minimal utilization but provide options for larger positions prioritizing security over yield.

Using cbETH as collateral unlocks additional strategies, from simple stablecoin borrowing to recursive leverage plays. These advanced strategies require careful risk management, particularly around liquidation thresholds and depeg scenarios.

For users who already hold cbETH or prefer Coinbase's regulated approach to staking, lending through established protocols adds incremental yield with manageable additional risk. Use [Superlend](https://app.superlend.xyz/discover) to compare rates across protocols and find the optimal venue for your cbETH deposits.

---

*This content is for informational purposes only and does not constitute financial advice. DeFi lending involves risks including smart contract vulnerabilities, liquidation, and potential loss of funds. Always conduct your own research and consider your risk tolerance before participating in DeFi protocols.*
