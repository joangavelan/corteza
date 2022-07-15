import SearchResult from '@components/BookSearchResult'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'UI/SearchResult',
  component: SearchResult
} as ComponentMeta<typeof SearchResult>

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
)

export const Default = Template.bind({})
Default.args = {
  imgUrl:
    'http://books.google.com/books/content?id=UH2e64rTh9UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  title:
    'Biology of Sport: Reports of methodological and experimental work on science of sport',
  author: 'Sara Johnson, Jodene Lynn Smith, and Paula Sorrell',
  rating: 3.7
}

export const OneLineTitle = Template.bind({})
OneLineTitle.args = {
  ...Default.args,
  title: 'Biology of Sport'
}

export const NoImage = Template.bind({})
NoImage.args = {
  ...Default.args,
  imgUrl: undefined
}

export const NoAuthor = Template.bind({})
NoAuthor.args = {
  ...Default.args,
  author: undefined
}

export const NoRatingNoAuthor = Template.bind({})
NoRatingNoAuthor.args = {
  ...Default.args,
  rating: undefined,
  author: undefined
}
