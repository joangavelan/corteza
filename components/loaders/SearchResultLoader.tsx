import ContentLoader from 'react-content-loader'
import { useWindowDimensions } from '@hooks'

const SearchResultLoader = () => {
  const { width } = useWindowDimensions()

  // responsive loader
  if (width < 600) {
    return (
      <ContentLoader style={{ width: '100%', height: '100%' }}>
        <rect x='0' y='0' rx='4' ry='4' width='50' height='67' />
        <rect x='58' y='10' rx='4' ry='4' width='calc(100% - 58px)' height='10.5' />
        <rect x='58' y='29' rx='4' ry='4' width='calc(100% - 58px)' height='10.5' />
        <rect x='58' y='48' rx='4' ry='4' width='calc(100% - 118px)' height='10.5' />
      </ContentLoader>
    )
  }

  return (
    <ContentLoader style={{ width: '100%', height: '100%' }}>
      <rect x='0' y='0' rx='5' ry='5' width='60' height='80' />
      <rect x='68' y='12' rx='5' ry='5' width='350' height='13' />
      <rect x='68' y='34' rx='5' ry='5' width='250' height='13' />
      <rect x='68' y='54' rx='5' ry='5' width='200' height='13' />
    </ContentLoader>
  )
}

export default SearchResultLoader
