"use client";

import { createContext, ReactNode, useContext, useEffect } from 'react'
import { Context as ReactContext } from 'react'
import * as amplitude from '@amplitude/analytics-browser'
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser'

type AmplitudeAnalyticsProviderProps = {
  children: ReactNode
} & {
  apiKey: string
}

const amplitudeAnalytics: AnalyticsContextState = {
  setUser: (id) => {
    amplitude.setUserId(id)
  },
  trackEvent: (name, data) => {
    amplitude.track(name, data)
  },
  logEvent: (name, data) => {
    amplitude.logEvent(name, data)
  },
}

export const AmplitudeAnalyticsProvider = ({
  apiKey,
  children,
}: AmplitudeAnalyticsProviderProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@amplitude/engagement-browser')
        .then(({ plugin: engagementPlugin }) => {
          amplitude.add(engagementPlugin());
        })
        .catch((err) => console.error('Failed to load Amplitude engagement plugin', err));
    }

    const sessionReplay = sessionReplayPlugin({
      forceSessionTracking: true,
      sampleRate: 1,
    })

    amplitude.add(sessionReplay)
    amplitude.init(apiKey, {
      defaultTracking: { 
        sessions: true,
        pageViews: true  // Enable automatic page view tracking
      }
    })
  }, [apiKey])

  return (
    <AnalyticsContext.Provider value={amplitudeAnalytics}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export type AnalyticsContextState = {
  setUser: (id: string) => void
  trackEvent: (name: string, data?: Record<string, any>) => void
  logEvent: (name: string, data?: Record<string, any>) => void
}

export const AnalyticsContext = createContext<AnalyticsContextState>(amplitudeAnalytics)

export const useAnalytics = (): AnalyticsContextState => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalytics must be used within an AmplitudeAnalyticsProvider')
  }
  return context
}

// Helper function to create a context hook
export function createContextHook<T, R = T>(
  Context: ReactContext<T>,
  contextName: string,
  transform?: (context: T) => R
): () => R {
  return (): R => {
    const context = useContext(Context)
    if (!context) {
      throw new Error(`${contextName} is not provided`)
    }
    return transform ? transform(context) : (context as unknown as R)
  }
} 