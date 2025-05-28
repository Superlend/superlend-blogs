export function Intro() {
  return (
    <section className="max-w-4xl mx-auto text-center py-20">
      <div className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          <span className="text-gradient">DeFi Insights</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Stay ahead in the rapidly evolving world of decentralized finance. 
          Get expert insights, market analysis, and strategic guidance from the Superlend team.
        </p>
      </div>
      
      {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://app.superlend.xyz/"
          target="_blank"
          className="btn-primary"
        >
          Try Superlend
        </a>
        <a
          href="https://funds.superlend.xyz/"
          target="_blank"
          className="btn-secondary"
        >
          Explore SuperFund
        </a>
      </div> */}
    </section>
  );
}
