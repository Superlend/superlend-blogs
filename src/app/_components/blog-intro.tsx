export function BlogIntro() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive leading-tight">
            Featured Articles & Insights
          </h2>
          
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Dive deep into the world of DeFi with our curated content. From protocol analysis 
            to market insights, stay informed with the latest trends and developments.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-400 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-adaptive">Market Analysis</h3>
              <p className="text-sm text-muted">Expert insights on DeFi trends and market movements</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-blue to-blue-500 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-adaptive">Protocol Deep Dives</h3>
              <p className="text-sm text-muted">Technical analysis of emerging DeFi protocols</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-green to-green-500 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-adaptive">Strategy Guides</h3>
              <p className="text-sm text-muted">Actionable strategies for DeFi investing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 