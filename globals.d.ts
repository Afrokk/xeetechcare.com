declare module '@fortawesome/*';

interface Window {
  twttr: {
    widgets: {
      createTimeline: (
        data: { sourceType: string; screenName: string },
        element: Element | null,
        options: { chrome: string; theme: string },
      ) => Promise<void>;
    };
  };
}
