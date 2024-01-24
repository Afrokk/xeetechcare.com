declare module '@fortawesome/*';

interface Window {
  twttr: {
    ready: (callback: () => void) => Promise<void>;
    widgets: {
      createTimeline: (
        data: { sourceType: string; screenName: string },
        element: Element | null,
        options: { chrome: string; theme: string },
      ) => Promise<void>;
    };
  };
}
