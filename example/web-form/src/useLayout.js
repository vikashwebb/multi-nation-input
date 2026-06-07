import { useWindowDimensions } from 'react-native';

export function useLayout() {
  const { width } = useWindowDimensions();

  return {
    width,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1100,
    isDesktop: width >= 1100,
    contentPadding: width < 480 ? 16 : width < 768 ? 20 : 32,
  };
}
