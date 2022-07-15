import ContentLoader from 'react-content-loader'
import { useWindowDimensions } from '@hooks'

const SearchResultLoader = () => {
  const { width } = useWindowDimensions()

  const styles = {
    width: '100%',
    height: '100%',
  }

  // responsive loader
  if (width < 600) {
    return (
      <ContentLoader 
        style={styles}
        backgroundColor={'#f3f4f6'} 
        foregroundColor={"#e5e7eb"}
      >
          <rect x='0' y='0' rx='4' ry='4' width='50' height='67' />
          <rect x='58' y='10' rx='4' ry='4' width='calc(100% - 58px)' height='10.5' />
          <rect x='58' y='29' rx='4' ry='4' width='calc(100% - 58px)' height='10.5' />
          <rect x='58' y='48' rx='4' ry='4' width='calc(100% - 118px)' height='10.5' />
      </ContentLoader>
    )
  }

  return (
    <ContentLoader 
      style={styles}
      backgroundColor={'#f3f4f6'} 
      foregroundColor={"#e5e7eb"}
    >
        <rect x='0' y='0' rx='5' ry='5' width='60' height='80' />
        <rect x='68' y='12' rx='5' ry='5' width='calc(85%)' height='13' />
        <rect x='68' y='34' rx='5' ry='5' width='calc(70%)' height='13' />
        <rect x='68' y='54' rx='5' ry='5' width='200' height='13' />
    </ContentLoader>
  )
}

export default SearchResultLoader
