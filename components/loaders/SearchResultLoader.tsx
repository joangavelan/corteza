import ContentLoader from 'react-content-loader'

const SearchResultLoader = () => {
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
