declare global {
  namespace ReactNavigation {
    interface RootParamList {
      index: undefined;
      home: undefined;
      "skin-test": undefined;
      products: undefined;
      terms: undefined;
      "onboarding/index": undefined;
      "onboarding/[id]": { id: string };
      signup: undefined;
      "explore": undefined;
      "face-scan": undefined;
      settings: undefined;
    }
  }
}

export {}; 