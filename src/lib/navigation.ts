export function canNavigateBackToReferrer(
  referrer: string | undefined,
  currentOrigin: string,
): boolean {
  if (!referrer) {
    return false;
  }

  try {
    return new URL(referrer).origin === currentOrigin;
  } catch {
    return false;
  }
}

export function canUseHistoryBack(historyLength: number): boolean {
  return historyLength > 1;
}

export function canNavigateBack(options: {
  referrer: string | undefined;
  currentOrigin: string;
  historyLength: number;
}): boolean {
  return (
    canNavigateBackToReferrer(options.referrer, options.currentOrigin) ||
    canUseHistoryBack(options.historyLength)
  );
}

export function canNavigateBackInApp(): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  return canNavigateBack({
    referrer: document.referrer,
    currentOrigin: window.location.origin,
    historyLength: window.history.length,
  });
}
