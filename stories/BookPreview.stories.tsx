import { ComponentMeta, ComponentStory } from '@storybook/react'
import BookPreview from '@components/BookPreview'

export default {
  title: 'UI/BookPreview',
  component: BookPreview,
  argTypes: {
    imgUrl: { control: 'text' },
  }
} as ComponentMeta<typeof BookPreview>

const Template: ComponentStory<typeof BookPreview> = (args) => (
  <BookPreview {...args} />
)

export const Default = Template.bind({})
Default.args = {
  imgUrl: undefined,
  title: 'Biology of Sport: Reports of methodological and experimental work on science of sport',
  author: 'Sara Johnson, Jodene Lynn Smith, and Paula Sorrell',
  rating: 3.7
}